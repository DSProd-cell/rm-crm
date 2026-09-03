// RM CRM App — v1

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_LEADS = {
  sti: [
    { id:'RM-2041', name:'Ananya Sharma', intake:'Jan 2027', country:'Canada', status:'App Ready Pending', caDate:'2026-08-15', f2fDate:'2026-09-01', lockinDate:'2026-08-20', appReadyDate:null, stiDate:null, lastConnect:'2026-09-01 10:30', clName:'Priya CL', overdue:true, notes:['Docs partially submitted — missing bank statement','Called on Sep 1, will share remaining docs by Sep 5'] },
    { id:'RM-2089', name:'Karan Mehta', intake:'Sep 2026', country:'Germany', status:'F2F Pending', caDate:'2026-08-20', f2fDate:null, lockinDate:'2026-08-25', appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 14:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Agreed to join F2F on Sep 3'] },
    { id:'RM-2103', name:'Deepa Nair', intake:'Jan 2027', country:'UK', status:'Docs Pending', caDate:'2026-08-10', f2fDate:'2026-08-28', lockinDate:'2026-08-15', appReadyDate:null, stiDate:null, lastConnect:'2026-08-30 16:15', clName:'Rahul CL', overdue:true, notes:['Awaiting academic transcripts','Follow-up scheduled for Sep 4'] },
    { id:'RM-2117', name:'Vikram Singh', intake:'Apr 2027', country:'Canada', status:'App Ready Pending', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 09:00', clName:'Priya CL', overdue:false, notes:['Enthusiastic, just needs app form filled'] },
    { id:'RM-2134', name:'Simran Kaur', intake:'Jan 2027', country:'Germany', status:'Docs Pending', caDate:'2026-08-22', f2fDate:'2026-08-29', lockinDate:'2026-08-30', appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 11:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Waiting for SOP draft review'] },
    { id:'RM-2158', name:'Rohan Gupta', intake:'Sep 2026', country:'Australia', status:'F2F Pending', caDate:'2026-09-01', f2fDate:null, lockinDate:'2026-09-01', appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 08:30', clName:'Rahul CL', overdue:false, notes:['Will schedule F2F this week'] },
    { id:'RM-2171', name:'Aisha Khan', intake:'Apr 2027', country:'Canada', status:'App Ready Pending', caDate:'2026-08-18', f2fDate:'2026-08-25', lockinDate:'2026-08-28', appReadyDate:null, stiDate:null, lastConnect:'2026-08-31 15:00', clName:'Priya CL', overdue:true, notes:['Needs IELTS score before app ready'] },
  ],
  revenue: [
    { id:'RM-2045', name:'Tanvir Ahmed', intake:'Sep 2026', country:'Germany', status:'Lock-in Pending (C2I)', caDate:'2026-08-10', f2fDate:'2026-08-20', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-01 13:00', clName:'Priya CL', overdue:true, notes:['F2F done, deciding on lock-in','Scholarship query raised to counsellor'] },
    { id:'RM-2062', name:'Meera Pillai', intake:'Jan 2027', country:'UK', status:'Lock-in Pending (Prime)', caDate:'2026-08-25', f2fDate:'2026-09-01', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 10:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Interested, needs parent meeting'] },
    { id:'RM-2076', name:'Saurav Das', intake:'Apr 2027', country:'Canada', status:'Lock-in Pending (C2I)', caDate:'2026-09-01', f2fDate:'2026-09-02', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 10:45', clName:'Rahul CL', overdue:false, notes:['Just did F2F today, very positive'] },
    { id:'RM-2099', name:'Fatima Shaikh', intake:'Sep 2026', country:'Australia', status:'Lock-in Pending (Prime)', caDate:'2026-08-15', f2fDate:'2026-08-28', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-08-30 14:30', clName:'Priya CL', overdue:true, notes:['Comparing with another provider'] },
  ],
  loan: [
    { id:'RM-2051', name:'Rahul Jain', intake:'Sep 2026', country:'Germany', status:'Loan VC Booking Pending', caDate:'2026-08-05', f2fDate:'2026-08-12', lockinDate:'2026-08-15', appReadyDate:'2026-08-20', stiDate:null, lastConnect:'2026-08-28 11:00', clName:'Amit CL', overdue:true, notes:['Loan VC slot booked but cancelled','Reschedule pending'] },
    { id:'RM-2068', name:'Lakshmi Venkat', intake:'Jan 2027', country:'UK', status:'PF Log-in Pending', caDate:'2026-08-18', f2fDate:'2026-08-22', lockinDate:'2026-08-25', appReadyDate:'2026-08-29', stiDate:null, lastConnect:'2026-09-01 09:30', clName:'Rahul CL', overdue:false, dueToday:true, notes:['PF portal access issue, ticket raised'] },
    { id:'RM-2082', name:'Arjun Reddy', intake:'Apr 2027', country:'Canada', status:'Loan VC Join Pending', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 07:00', clName:'Priya CL', overdue:false, notes:['Loan VC booked for Sep 5'] },
    { id:'RM-2110', name:'Pooja Mishra', intake:'Sep 2026', country:'Germany', status:'Loan VC Booking Pending', caDate:'2026-08-12', f2fDate:'2026-08-19', lockinDate:'2026-08-22', appReadyDate:'2026-08-27', stiDate:null, lastConnect:'2026-08-29 16:00', clName:'Amit CL', overdue:true, notes:['Hesitant about loan amount'] },
    { id:'RM-2125', name:'Dev Patel', intake:'Jan 2027', country:'UK', status:'PF Log-in Pending', caDate:'2026-08-20', f2fDate:'2026-08-26', lockinDate:'2026-08-28', appReadyDate:'2026-09-01', stiDate:null, lastConnect:'2026-09-02 14:00', clName:'Rahul CL', overdue:false, notes:['Collecting docs for PF portal'] },
    { id:'RM-2142', name:'Sneha Joshi', intake:'Apr 2027', country:'Australia', status:'Loan VC Join Pending', caDate:'2026-09-02', f2fDate:'2026-09-02', lockinDate:'2026-09-02', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 08:00', clName:'Priya CL', overdue:false, notes:['New lock-in, scheduling VC'] },
    { id:'RM-2160', name:'Manish Verma', intake:'Sep 2026', country:'Canada', status:'Loan VC Booking Pending', caDate:'2026-08-08', f2fDate:'2026-08-14', lockinDate:'2026-08-18', appReadyDate:'2026-08-24', stiDate:null, lastConnect:'2026-08-25 10:00', clName:'Amit CL', overdue:true, notes:['Multiple follow-ups done, still delaying'] },
    { id:'RM-2178', name:'Priti Sharma', intake:'Jan 2027', country:'Germany', status:'Loan VC Booking Pending', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-01', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 09:30', clName:'Rahul CL', overdue:false, notes:['Confirmed interest, booking VC today'] },
    { id:'RM-2195', name:'Ravi Teja', intake:'Apr 2027', country:'UK', status:'PF Log-in Pending', caDate:'2026-08-28', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:'2026-09-03', stiDate:null, lastConnect:'2026-09-03 08:45', clName:'Priya CL', overdue:false, notes:['PF process explained, collecting docs'] },
  ]
};

const MGR_TEAM = [
  { id:'R01', name:'Arjun Patel', initials:'AP', color:'#f97316', sti:7, revenue:4, loan:9, quality:'72%', overdue:5, status:'On Track' },
  { id:'R02', name:'Sneha Rao', initials:'SR', color:'#0369a1', sti:2, revenue:6, loan:3, quality:'88%', overdue:1, status:'Good' },
  { id:'R03', name:'Vikram D.', initials:'VD', color:'#7c3aed', sti:10, revenue:2, loan:12, quality:'54%', overdue:9, status:'Focus' },
  { id:'R04', name:'Meera Nair', initials:'MN', color:'#16a34a', sti:4, revenue:3, loan:5, quality:'81%', overdue:2, status:'Good' },
  { id:'R05', name:'Tanvir Ali', initials:'TA', color:'#dc2626', sti:8, revenue:1, loan:7, quality:'63%', overdue:6, status:'On Track' },
];

const TRAINING_CATS = [
  { name:'Soft Training', icon:'msg', lessons:[
    { name:'Communication Skills for RMs', dur:'12 min', done:true },
    { name:'Objection Handling Techniques', dur:'18 min', done:true },
    { name:'Empathy in Sales Conversations', dur:'10 min', done:false },
    { name:'Tone & Language on Calls', dur:'8 min', done:false },
  ]},
  { name:'Domain Training', icon:'book', lessons:[
    { name:'RM KPI Deep Dive — STI, Lock-in, Loan VC', dur:'25 min', done:true },
    { name:'Understanding Student Profiles', dur:'15 min', done:false },
    { name:'Program & Scholarship Overview', dur:'20 min', done:false },
    { name:'IELTS & Academic Requirements', dur:'12 min', done:false },
  ]},
  { name:'System Training', icon:'sys', lessons:[
    { name:'RM CRM Navigation & Features', dur:'15 min', done:true },
    { name:'Logging Notes & Follow-ups', dur:'8 min', done:true },
    { name:'Query Raising to Counsellor', dur:'6 min', done:false },
  ]},
  { name:'New Features', icon:'star', lessons:[
    { name:'Pipeline Auto-movement Rules', dur:'10 min', done:false },
    { name:'Incentive Dashboard Walkthrough', dur:'12 min', done:false },
  ]},
];

const PERF_METRICS = {
  volume: [
    { name:'Leads Assigned', target:80, achieved:72 },
    { name:'F2F Attended', target:30, achieved:24 },
    { name:'Lock-ins (C2I + Prime)', target:15, achieved:9 },
    { name:'Loan VC Booked', target:12, achieved:7 },
    { name:'Loan VC Joined', target:10, achieved:5 },
    { name:'Docs Collected', target:25, achieved:18 },
    { name:'App Ready Completed', target:20, achieved:12 },
    { name:'Queries to Counsellor', target:8, achieved:11 },
    { name:'C2I Revenue', target:14, achieved:9 },
    { name:'Total Drop', target:5, achieved:8 },
  ],
  conversion: [
    { name:'F2F Attendance Rate', target:'75%', achieved:'72%', pct:96 },
    { name:'Lock-in Conversion Rate', target:'50%', achieved:'37.5%', pct:75 },
    { name:'Loan VC Conversion Rate', target:'80%', achieved:'71%', pct:89 },
    { name:'App Ready Conversion Rate', target:'85%', achieved:'60%', pct:71 },
    { name:'Query Resolution Rate', target:'90%', achieved:'82%', pct:91 },
  ]
};

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  activeTab: 'tasks',
  role: 'rm',
  notifOpen: false,
  profileOpen: false,
  selectedLead: null,
  currentPipeline: null,
  mgrDrilldownRm: null,
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function getCountColor(n) {
  if (n === 0) return 'green';
  if (n <= 5) return 'orange';
  return 'red';
}

function statusPill(pct) {
  if (pct >= 80) return '<span class="status-pill sp-good">Good</span>';
  if (pct >= 50) return '<span class="status-pill sp-track">On Track</span>';
  return '<span class="status-pill sp-focus">Focus</span>';
}

function statusChip(status) {
  if (status === 'Good') return '<span class="summary-chip chip-good">Good</span>';
  if (status === 'On Track') return '<span class="summary-chip chip-track">On Track</span>';
  return '<span class="summary-chip chip-focus">Focus</span>';
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function switchTab(tab) {
  state.activeTab = tab;
  ['tasks','incentives','ld'].forEach(t => {
    document.getElementById(`panel-${t}`).classList.toggle('hidden', t !== tab);
    document.getElementById(`tab-${t}`).classList.toggle('active', t === tab);
  });
}

// ─── ROLE SWITCH ──────────────────────────────────────────────────────────────
function switchRole(role) {
  state.role = role;
  const isMgr = ['team_lead','manager_rm','senior_manager'].includes(role);
  document.getElementById('rmDashboard').classList.toggle('hidden', isMgr);
  document.getElementById('mgrRollup').classList.toggle('hidden', !isMgr);
  if (isMgr) renderMgrTable();

  const roleLabels = { rm:'Relationship Manager', team_lead:'Team Lead', manager_rm:'Manager RM', senior_manager:'Senior Manager' };
  document.getElementById('pdRole').textContent = roleLabels[role] || 'RM';
}

// ─── COLLAPSIBLE ──────────────────────────────────────────────────────────────
function toggleSection(id) {
  const body = document.getElementById(`body-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  body.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.classList.toggle('open', !isOpen);
}

function toggleNotifSub(which) {
  const bodyId = which === 'reminders' ? 'notifRemindersBody' : 'notifUnhappyBody';
  const chevId = which === 'reminders' ? 'chevron-notif-reminders' : 'chevron-notif-unhappy';
  const body = document.getElementById(bodyId);
  const chev = document.getElementById(chevId);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  if (chev) chev.classList.toggle('open', !isOpen);
}

function toggleTrainingCat(idx) {
  const body = document.getElementById(`tcat-body-${idx}`);
  const chev = document.getElementById(`tcat-chev-${idx}`);
  if (!body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  body.style.display = isOpen ? 'none' : 'block';
  if (chev) chev.classList.toggle('open', !isOpen);
}

// ─── NOTIFICATION PANEL ───────────────────────────────────────────────────────
function toggleNotifPanel() {
  const panel = document.getElementById('notifPanel');
  state.notifOpen = !state.notifOpen;
  panel.classList.toggle('open', state.notifOpen);
  if (state.profileOpen) { state.profileOpen = false; document.getElementById('profileDropdown').classList.remove('open'); }
}

function toggleProfileDropdown() {
  const dd = document.getElementById('profileDropdown');
  state.profileOpen = !state.profileOpen;
  dd.classList.toggle('open', state.profileOpen);
  if (state.notifOpen) { state.notifOpen = false; document.getElementById('notifPanel').classList.remove('open'); }
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('#notifPanel') && !e.target.closest('.icon-btn')) {
    document.getElementById('notifPanel').classList.remove('open');
    state.notifOpen = false;
  }
  if (!e.target.closest('#profileDropdown') && !e.target.closest('.avatar-btn')) {
    document.getElementById('profileDropdown').classList.remove('open');
    state.profileOpen = false;
  }
});

// ─── CALL STATUS ──────────────────────────────────────────────────────────────
function updateCallStatus(val) {
  const dot = document.getElementById('callDot');
  dot.className = 'status-dot';
  if (val === 'busy') dot.classList.add('busy');
  else if (val === 'away') dot.classList.add('away');
}

// ─── PIPELINE DRAWER ─────────────────────────────────────────────────────────
const PIPELINE_LABELS = { sti:'Boost STI Pipeline', revenue:'Boost Revenue Pipeline', loan:'Boost Loan Pipeline' };

function openPipeline(type) {
  state.currentPipeline = type;
  const leads = MOCK_LEADS[type] || [];

  const sorted = [...leads].sort((a,b) => {
    if (a.overdue && !b.overdue) return -1;
    if (!a.overdue && b.overdue) return 1;
    if (a.dueToday && !b.dueToday) return -1;
    if (!a.dueToday && b.dueToday) return 1;
    return 0;
  });

  const rows = sorted.map(l => `
    <tr class="${l.overdue ? 'overdue-row' : l.dueToday ? 'today-row' : ''}" onclick="openLeadDetail('${type}','${l.id}')">
      <td><strong>${l.name}</strong><br><span style="color:var(--text-muted);font-size:10px">${l.id}</span></td>
      <td>${l.intake}</td>
      <td>${l.country}</td>
      <td>${l.status}</td>
      <td>${l.caDate || '—'}</td>
      <td>${l.lastConnect}</td>
      <td>${l.overdue ? '<span class="status-pill sp-focus">Overdue</span>' : l.dueToday ? '<span class="status-pill sp-track">Due Today</span>' : '<span class="status-pill sp-good">Scheduled</span>'}</td>
    </tr>`).join('');

  const html = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="font-size:12px;color:var(--text-muted)">${leads.length} leads</div>
      <div style="display:flex;gap:6px;font-size:11px;">
        <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;background:var(--danger);border-radius:50%;display:inline-block"></span>Overdue</span>
        <span style="display:flex;align-items:center;gap:4px;"><span style="width:8px;height:8px;background:var(--warning);border-radius:50%;display:inline-block"></span>Due Today</span>
      </div>
    </div>
    <div class="lead-table-wrap">
      <table class="lead-table">
        <thead><tr><th>Name / ID</th><th>Intake</th><th>Country</th><th>Status</th><th>CA Date</th><th>Last Connect</th><th>Priority</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  openDrawer(PIPELINE_LABELS[type], html);
}

function openLeadDetail(pipelineType, leadId) {
  const leads = MOCK_LEADS[pipelineType] || [];
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;

  const html = `
    <div class="lead-info-grid">
      <div class="lead-info-item"><div class="li-label">Name</div><div class="li-val">${lead.name}</div></div>
      <div class="lead-info-item"><div class="li-label">Pre-user ID</div><div class="li-val mono">${lead.id}</div></div>
      <div class="lead-info-item"><div class="li-label">Intake</div><div class="li-val">${lead.intake}</div></div>
      <div class="lead-info-item"><div class="li-label">Country</div><div class="li-val">${lead.country}</div></div>
      <div class="lead-info-item"><div class="li-label">Status</div><div class="li-val"><span class="lead-status-tag badge-orange">${lead.status}</span></div></div>
      <div class="lead-info-item"><div class="li-label">CL Name</div><div class="li-val">${lead.clName}</div></div>
      <div class="lead-info-item"><div class="li-label">CA Date</div><div class="li-val">${lead.caDate || '—'}</div></div>
      <div class="lead-info-item"><div class="li-label">Lock-in Date</div><div class="li-val">${lead.lockinDate || '—'}</div></div>
      <div class="lead-info-item"><div class="li-label">F2F Date</div><div class="li-val">${lead.f2fDate || '—'}</div></div>
      <div class="lead-info-item"><div class="li-label">App Ready</div><div class="li-val">${lead.appReadyDate || 'Pending'}</div></div>
      <div class="lead-info-item" style="grid-column:1/-1"><div class="li-label">Last RM Connect</div><div class="li-val">${lead.lastConnect}</div></div>
    </div>
    <div class="notes-section">
      <h4>Last Notes</h4>
      ${lead.notes.map((n,i) => `<div class="note-item"><div class="note-text">${n}</div><div class="note-time">${i === 0 ? '2 days ago' : '1 week ago'}</div></div>`).join('')}
    </div>
    <div class="lead-actions">
      <button class="action-btn primary" onclick="showNoteForm('${lead.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Log a Note
      </button>
      <button class="action-btn" onclick="showFollowupForm('${lead.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Set Follow-up Date
      </button>
      <button class="action-btn" onclick="showQueryForm('${lead.id}','${lead.name}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Raise Query for Counsellor
      </button>
    </div>`;

  openDrawer(lead.name, html, true);
}

function showNoteForm(leadId) {
  const body = document.getElementById('drawerBody');
  body.insertAdjacentHTML('beforeend', `
    <div id="noteFormWrap" style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
      <div class="form-field mb-1">
        <label class="form-label">Note *</label>
        <textarea class="form-input" id="noteInput" placeholder="Enter your note (max 500 chars)" maxlength="500"></textarea>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn-primary btn-sm" onclick="submitNote('${leadId}')">Save Note</button>
        <button class="btn-secondary btn-sm" onclick="document.getElementById('noteFormWrap').remove()">Cancel</button>
      </div>
    </div>`);
  document.getElementById('noteInput').focus();
}

function submitNote(leadId) {
  const input = document.getElementById('noteInput');
  if (!input || !input.value.trim()) { showToast('Note cannot be empty.'); return; }
  document.getElementById('noteFormWrap').remove();
  showToast('Note saved successfully.');
}

function showFollowupForm(leadId) {
  const body = document.getElementById('drawerBody');
  body.insertAdjacentHTML('beforeend', `
    <div id="followupFormWrap" style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
      <div class="form-field mb-1">
        <label class="form-label">Follow-up Date *</label>
        <input class="form-input" type="date" id="followupDate" min="${new Date().toISOString().split('T')[0]}"/>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn-primary btn-sm" onclick="submitFollowup('${leadId}')">Set Follow-up</button>
        <button class="btn-secondary btn-sm" onclick="document.getElementById('followupFormWrap').remove()">Cancel</button>
      </div>
    </div>`);
}

function submitFollowup(leadId) {
  const input = document.getElementById('followupDate');
  if (!input || !input.value) { showToast('Please select a follow-up date.'); return; }
  document.getElementById('followupFormWrap').remove();
  showToast('Follow-up date set.');
}

function showQueryForm(leadId, leadName) {
  const body = document.getElementById('drawerBody');
  body.insertAdjacentHTML('beforeend', `
    <div id="queryFormWrap" style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
      <div style="font-size:12px;font-weight:600;color:var(--text-muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px">Raise Query for Counsellor — ${leadName}</div>
      <div class="form-field mb-1">
        <label class="form-label">Select Counsellor *</label>
        <select class="form-input" id="queryCounsellor">
          <option value="">— Select counsellor —</option>
          <option>Priya CL (Active)</option>
          <option>Amit CL (Active)</option>
          <option>Rahul CL (Active)</option>
        </select>
      </div>
      <div class="form-field mb-1">
        <label class="form-label">Query / Question *</label>
        <textarea class="form-input" id="queryText" placeholder="Describe the counsellor's query (max 500 chars)" maxlength="500"></textarea>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn-primary btn-sm" onclick="submitQuery('${leadId}')">Submit Query</button>
        <button class="btn-secondary btn-sm" onclick="document.getElementById('queryFormWrap').remove()">Cancel</button>
      </div>
    </div>`);
}

function submitQuery(leadId) {
  const c = document.getElementById('queryCounsellor');
  const q = document.getElementById('queryText');
  if (!c.value) { showToast('Please select a counsellor.'); return; }
  if (!q.value.trim()) { showToast('Query cannot be empty.'); return; }
  document.getElementById('queryFormWrap').remove();
  showToast('Query sent to counsellor. They have 7 days to respond.');
}

// ─── DRAWER ───────────────────────────────────────────────────────────────────
function openDrawer(title, html, showBack) {
  document.getElementById('drawerTitle').textContent = title;
  document.getElementById('drawerBody').innerHTML = html;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  const backBtn = document.querySelector('.drawer-back');
  if (backBtn) backBtn.style.display = showBack ? 'flex' : 'none';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// ─── ASSIGNED LEADS DRAWER ────────────────────────────────────────────────────
function openAssignedLeads() {
  const allLeads = [...MOCK_LEADS.sti, ...MOCK_LEADS.revenue, ...MOCK_LEADS.loan];
  const rows = allLeads.map(l => `
    <tr onclick="openLeadDetail('sti','${l.id}')">
      <td><strong>${l.name}</strong><br><span style="color:var(--text-muted);font-size:10px">${l.id}</span></td>
      <td>${l.intake}</td>
      <td>${l.country}</td>
      <td>${l.status}</td>
    </tr>`).join('');
  const html = `<div class="lead-table-wrap"><table class="lead-table"><thead><tr><th>Name / ID</th><th>Intake</th><th>Country</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  openDrawer('All Assigned Leads (${allLeads.length})', html);
  // Fix the title count
  document.getElementById('drawerTitle').textContent = `All Assigned Leads (${allLeads.length})`;
}

// ─── MANAGER TABLE ────────────────────────────────────────────────────────────
function renderMgrTable() {
  const tbody = document.getElementById('mgrTableBody');
  tbody.innerHTML = MGR_TEAM.map(rm => `
    <tr onclick="openMgrDrilldown('${rm.id}')">
      <td><div class="rm-name-cell"><div class="rm-avatar" style="background:${rm.color}">${rm.initials}</div><strong>${rm.name}</strong></div></td>
      <td><span class="${getCountColor(rm.sti) === 'red' ? 'badge-red' : getCountColor(rm.sti) === 'orange' ? 'badge-orange' : 'badge-green'} sch-badge">${rm.sti}</span></td>
      <td><span class="${getCountColor(rm.revenue) === 'red' ? 'badge-red' : getCountColor(rm.revenue) === 'orange' ? 'badge-orange' : 'badge-green'} sch-badge">${rm.revenue}</span></td>
      <td><span class="${getCountColor(rm.loan) === 'red' ? 'badge-red' : getCountColor(rm.loan) === 'orange' ? 'badge-orange' : 'badge-green'} sch-badge">${rm.loan}</span></td>
      <td>${rm.quality}</td>
      <td><span class="${getCountColor(rm.overdue) === 'red' ? 'badge-red' : getCountColor(rm.overdue) === 'orange' ? 'badge-orange' : 'badge-green'} sch-badge">${rm.overdue}</span></td>
      <td>${statusChip(rm.status)}</td>
    </tr>`).join('');
}

function openMgrDrilldown(rmId) {
  state.mgrDrilldownRm = MGR_TEAM.find(r => r.id === rmId);
  document.getElementById('mgrDrilldown').classList.remove('hidden');
  document.getElementById('mgrTable').closest('.mgr-table-wrap').classList.add('hidden');
}

function closeMgrDrilldown() {
  document.getElementById('mgrDrilldown').classList.add('hidden');
  document.getElementById('mgrTable').closest('.mgr-table-wrap').classList.remove('hidden');
}

// ─── INCENTIVES ───────────────────────────────────────────────────────────────
function toggleBreakdown() {
  const bd = document.getElementById('earnBreakdown');
  bd.classList.toggle('hidden');
}

function openOppDetail() {
  document.getElementById('incentivesMain').classList.add('hidden');
  document.getElementById('opportunityDetail').classList.remove('hidden');
}

function closeOppDetail() {
  document.getElementById('opportunityDetail').classList.add('hidden');
  document.getElementById('incentivesMain').classList.remove('hidden');
}

// ─── PERFORMANCE SUMMARY ──────────────────────────────────────────────────────
function buildPerfSummary() {
  const overallPct = Math.round(PERF_METRICS.volume.reduce((s,m) => s + (m.achieved/m.target*100), 0) / PERF_METRICS.volume.length);
  const status = overallPct >= 80 ? 'Good' : overallPct >= 50 ? 'On Track' : 'Focus';

  const volRows = PERF_METRICS.volume.map(m => {
    const pct = Math.round(m.achieved / m.target * 100);
    return `<tr><td>${m.name}</td><td class="text-right font-bold">${m.target}</td><td class="text-right">${m.achieved}</td><td>${statusPill(pct)}</td></tr>`;
  }).join('');

  const convRows = PERF_METRICS.conversion.map(m => {
    return `<tr><td>${m.name}</td><td class="text-right font-bold">${m.target}</td><td class="text-right">${m.achieved}</td><td>${statusPill(m.pct)}</td></tr>`;
  }).join('');

  return `
    <div class="summary-chips">${statusChip(status)}<span class="summary-chip chip-track">Sep 2026</span></div>
    <div class="ibg-banner">
      <div class="ibg-label">Important Business Goals</div>
      <div class="ibg-items">
        <div class="ibg-item">CA → Lock-in 14d: <strong>37%</strong></div>
        <div class="ibg-item">CA → C2I Conversion 14d: <strong>29%</strong></div>
      </div>
    </div>
    <div class="section-label" style="margin-bottom:6px">Volume Metrics</div>
    <div style="overflow-x:auto">
      <table class="metrics-table"><thead><tr><th>Metric</th><th class="text-right">Target</th><th class="text-right">Achieved</th><th>Status</th></tr></thead>
      <tbody>${volRows}</tbody></table>
    </div>
    <div class="section-label" style="margin:12px 0 6px">Conversion Metrics</div>
    <div style="overflow-x:auto">
      <table class="metrics-table"><thead><tr><th>Metric</th><th class="text-right">Target</th><th class="text-right">Achieved</th><th>Status</th></tr></thead>
      <tbody>${convRows}</tbody></table>
    </div>`;
}

// ─── TRAINING MODULES ─────────────────────────────────────────────────────────
function renderTraining() {
  const container = document.getElementById('trainingCats');
  if (!container) return;

  const icons = {
    msg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    sys: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  };

  container.innerHTML = TRAINING_CATS.map((cat, idx) => {
    const done = cat.lessons.filter(l => l.done).length;
    const checkSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:9px;height:9px"><polyline points="20 6 9 17 4 12"/></svg>`;
    const lessons = cat.lessons.map(l => `
      <div class="lesson-item" onclick="showToast('Opening: ${l.name}')">
        <div class="lesson-check ${l.done ? 'done' : ''}">${l.done ? checkSvg : ''}</div>
        <div class="lesson-name">${l.name}</div>
        <div class="lesson-dur">${l.dur}</div>
      </div>`).join('');
    return `
      <div class="training-cat">
        <div class="training-cat-header" onclick="toggleTrainingCat(${idx})">
          <div class="tch-icon">${icons[cat.icon] || icons.book}</div>
          <div class="tch-title">${cat.name}</div>
          <div class="tch-count">${done}/${cat.lessons.length} complete</div>
          <svg class="chevron" id="tcat-chev-${idx}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="training-cat-body" id="tcat-body-${idx}">${lessons}</div>
      </div>`;
  }).join('');
}

// ─── TICKET MODAL ─────────────────────────────────────────────────────────────
function openTicketModal() { document.getElementById('ticketModal').classList.add('open'); }
function closeTicketModal() { document.getElementById('ticketModal').classList.remove('open'); }
function submitTicket() {
  const cat = document.getElementById('ticketCategory').value;
  const sub = document.getElementById('ticketSubject').value.trim();
  const desc = document.getElementById('ticketDesc').value.trim();
  if (!cat) { showToast('Please select a category.'); return; }
  if (!sub) { showToast('Subject cannot be empty.'); return; }
  if (!desc) { showToast('Description cannot be empty.'); return; }
  closeTicketModal();
  showToast('Ticket raised! Your TL and Admin have been notified.');
  document.querySelectorAll('.tc-count').forEach((el, i) => { if (i === 0) el.textContent = parseInt(el.textContent) + 1; if (i === 2) el.textContent = parseInt(el.textContent) + 1; });
}

// ─── REMINDER ─────────────────────────────────────────────────────────────────
function saveReminder() {
  const text = document.getElementById('reminderText').value.trim();
  const dt = document.getElementById('reminderDateTime').value;
  if (!text) { showToast('Reminder text cannot be empty.'); return; }
  if (!dt) { showToast('Please pick a date and time.'); return; }
  if (new Date(dt) < new Date()) { showToast('Date must be in the future.'); return; }
  document.getElementById('reminderText').value = '';
  document.getElementById('reminderDateTime').value = '';
  showToast('Reminder saved!');
}

// ─── PERFORMERS ───────────────────────────────────────────────────────────────
function setPerfWindow(window, btn) {
  document.querySelectorAll('#perfToggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function openProfile() {
  document.getElementById('profileDropdown').classList.remove('open');
  state.profileOpen = false;
  const html = `
    <div style="text-align:center;margin-bottom:16px">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--accent);margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff">AP</div>
      <div style="font-size:16px;font-weight:700">Arjun Patel</div>
      <div style="font-size:12px;color:var(--text-muted)">RM · ID: RM-001 · arjun.p@leap.in</div>
    </div>
    <div class="ibg-banner" style="text-align:center;margin-bottom:14px">
      <div class="ibg-label">Performance Rating</div>
      <div style="font-size:22px;font-weight:700;color:var(--accent);margin:4px 0">7.2 / 10</div>
      <div style="font-size:11px;color:rgba(255,255,255,.7)">Based on STI, Lock-ins (C2I/Prime), Loan VC, F2F, Docs/App Ready, Queries & Quality Score</div>
    </div>
    <div class="lead-info-grid">
      <div class="lead-info-item"><div class="li-label">Joining Date</div><div class="li-val">Jan 12, 2025</div></div>
      <div class="lead-info-item"><div class="li-label">Customer Rating</div><div class="li-val">4.2 / 5</div></div>
      <div class="lead-info-item"><div class="li-label">Team Lead</div><div class="li-val">Rahul Sharma</div></div>
      <div class="lead-info-item"><div class="li-label">Senior Manager</div><div class="li-val">Anjali Menon</div></div>
    </div>`;
  openDrawer('My Profile', html);
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
function boot() {
  // Performance summary content
  const perfHtml = buildPerfSummary();
  document.getElementById('perfSummaryContent').innerHTML = perfHtml;
  document.getElementById('perfScorecardContent').innerHTML = perfHtml;

  // Training modules
  renderTraining();

  // Set initial section open states
  document.getElementById('body-ibt').style.display = 'block';
}

boot();
