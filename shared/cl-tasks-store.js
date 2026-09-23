// ─── Shared CL ⇄ RM Task Store ─────────────────────────────────────────────
// Single source of truth for "Create Task for CL" / "Create Task for RM"
// tasks, shared between RM CRM and Counsellor (Leap) CRM. Persisted to
// localStorage so it survives reloads, and synced live across the two
// iframes via the browser's native `storage` event (fires in every OTHER
// same-origin window/iframe when localStorage changes — never in the tab
// that made the change) plus a same-window custom notify for the writer's
// own immediate re-render.
//
// direction:
//   'rm_to_cl' — the RM raised it, for the counsellor to act on.
//   'cl_to_rm' — the counsellor raised it, for the RM to act on.
//
// Retention once closed (the assignee is whoever the task is FOR):
//   - cl_to_rm: the RM is the assignee. Marking it complete removes it
//     immediately, for both sides.
//   - rm_to_cl: the counsellor is the assignee. Marking it complete keeps
//     it visible with a Done badge for 1 day, then it drops off on its own,
//     for both sides.
(function () {
  const STORAGE_KEY = 'hub_cl_tasks_v1';
  const listeners = [];

  const CL_TASK_TYPES = [ // rm_to_cl — what an RM can raise for a counsellor
    { value: 'FILE_MORE_APPLICATIONS', label: 'File More Applications' },
    { value: 'CONNECT_WITH_STUDENT', label: 'Connect with Student' },
    { value: 'STUDENT_DEFERRED', label: 'Student Deferred' },
    { value: 'STUDENT_DROPPED', label: 'Student Dropped' },
    { value: 'OTHERS', label: 'Others' },
  ];
  const RM_TASK_TYPES = [ // cl_to_rm — what a counsellor can raise for an RM
    { value: 'BOOK_UPDATE_IELTS_EXAM', label: 'Book/Update IELTS Exam' },
    { value: 'DOCUMENT_COLLECTION', label: 'Document Collection' },
    { value: 'CONNECT_WITH_STUDENT', label: 'Connect with Student' },
    { value: 'BOOK_LOAN_VC', label: 'Book Loan VC' },
    { value: 'OTHERS', label: 'Others' },
  ];

  function todayISO() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function daysBetween(isoA, isoB) {
    return Math.round((new Date(isoB + 'T00:00:00') - new Date(isoA + 'T00:00:00')) / 86400000);
  }

  const SEED = [
    { id: 'CT-1042', pipeline: 'sti', leadId: 'RM-2041', leadName: 'Ananya Sharma', direction: 'rm_to_cl',
      taskType: 'CONNECT_WITH_STUDENT', notes: 'Student is asking if the scholarship can still be applied post CF — please confirm eligibility with them directly.',
      dueDate: '2026-09-10', createdDate: '2026-09-05', status: 'open' },
    { id: 'CT-1051', pipeline: 'sti', leadId: 'RM-2089', leadName: 'Karan Mehta', direction: 'rm_to_cl',
      taskType: 'OTHERS', otherSpecify: 'Reprioritise applications after country switch', notes: 'Student wants to switch preferred country from Germany to UK post F2F — please reprioritise applications.',
      dueDate: '2026-09-12', createdDate: '2026-09-06', status: 'done', closedDate: todayISO() },
    { id: 'CT-1039', pipeline: 'sti', leadId: 'RM-2041', leadName: 'Ananya Sharma', direction: 'rm_to_cl',
      taskType: 'STUDENT_DEFERRED', notes: 'Student is deferring to the next intake — please note it on the college portal.',
      dueDate: '2026-09-08', createdDate: '2026-09-02', status: 'done', closedDate: '2026-09-05' },
    { id: 'CT-1063', pipeline: 'revenue', leadId: 'RM-2045', leadName: 'Tanvir Ahmed', direction: 'cl_to_rm',
      taskType: 'BOOK_UPDATE_IELTS_EXAM', notes: 'Student has raised a concern about the Prime pricing shared — please re-walk them through it and confirm the IELTS exam date.',
      dueDate: '2026-09-14', createdDate: '2026-09-07', status: 'open' },
    { id: 'CT-1071', pipeline: 'loan', leadId: 'RM-2051', leadName: 'Rahul Jain', direction: 'cl_to_rm',
      taskType: 'DOCUMENT_COLLECTION', notes: 'PF portal is asking for an updated bank statement — please collect it from the student.',
      dueDate: '2026-09-09', createdDate: '2026-09-04', status: 'open' },
    { id: 'CT-1082', pipeline: 'loan', leadId: 'RM-2068', leadName: 'Lakshmi Venkat', direction: 'cl_to_rm',
      taskType: 'BOOK_LOAN_VC', notes: 'College Finalised is done — please book a Loan VC slot for the student.',
      dueDate: '2026-09-16', createdDate: '2026-09-08', status: 'open' },
  ];

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { save(SEED); return SEED.slice(); }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) throw new Error('bad shape');
      return parsed;
    } catch (e) {
      save(SEED);
      return SEED.slice();
    }
  }
  function save(list) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) { /* storage unavailable — in-memory only for this tab */ }
  }

  let tasks = load();
  let idCounter = 1082;
  tasks.forEach(t => {
    const n = parseInt(String(t.id).replace('CT-', ''), 10);
    if (!isNaN(n) && n > idCounter) idCounter = n;
  });

  function notify() {
    listeners.forEach(fn => { try { fn(); } catch (e) { /* one bad listener shouldn't break the others */ } });
  }

  // Cross-iframe sync: fires in every OTHER same-origin window/iframe when
  // localStorage changes — never in the tab that made the change itself.
  window.addEventListener('storage', (e) => {
    if (e.key !== STORAGE_KEY) return;
    tasks = load();
    notify();
  });

  function visible() {
    const today = todayISO();
    return tasks.filter(t => {
      if (t.status !== 'done') return true;
      if (t.direction === 'cl_to_rm') return false; // removed immediately on close — shouldn't persist, guard anyway
      if (!t.closedDate) return true;
      return daysBetween(t.closedDate, today) < 1;
    });
  }

  function create({ pipeline, leadId, leadName, direction, taskType, otherSpecify, notes, dueDate }) {
    idCounter += 1;
    const task = {
      id: `CT-${idCounter}`, pipeline: pipeline || '', leadId, leadName, direction,
      taskType, otherSpecify: taskType === 'OTHERS' ? (otherSpecify || '') : '',
      notes: notes || '', dueDate: dueDate || null, createdDate: todayISO(), status: 'open',
    };
    tasks.unshift(task);
    save(tasks);
    notify();
    return task;
  }

  function markDone(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return;
    if (tasks[idx].direction === 'cl_to_rm') {
      tasks.splice(idx, 1);
    } else {
      tasks[idx].status = 'done';
      tasks[idx].closedDate = todayISO();
    }
    save(tasks);
    notify();
  }

  function typeLabel(direction, taskType, otherSpecify) {
    if (taskType === 'OTHERS') return otherSpecify ? `Others: ${otherSpecify}` : 'Others';
    const list = direction === 'rm_to_cl' ? CL_TASK_TYPES : RM_TASK_TYPES;
    return (list.find(t => t.value === taskType) || {}).label || taskType;
  }

  window.CLTaskStore = {
    CL_TASK_TYPES, RM_TASK_TYPES,
    list: () => tasks.slice(),
    visible,
    create,
    markDone,
    typeLabel,
    pendingCount: (direction) => tasks.filter(t => t.direction === direction && t.status === 'open').length,
    todayISO, daysBetween,
    // Same-window subscription — the `storage` event never fires in the tab
    // that made the change, so callers must call notify (via create/markDone)
    // and this covers re-rendering their OWN UI immediately; other windows
    // pick it up automatically via the `storage` listener above.
    onChange: (fn) => { listeners.push(fn); },
  };
})();
