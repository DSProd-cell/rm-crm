// RM CRM App — v2 (Leap CRM design system)

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const MOCK_LEADS = {
  sti: [
    { id:'RM-2041', name:'Ananya Sharma', intake:'Jan 2027', country:'Canada', status:'AR Done & STI Not Done', caDate:'2026-08-15', f2fDate:'2026-09-01', lockinDate:'2026-08-20', appReadyDate:'2026-08-25', stiDate:null, lastConnect:'2026-09-01 10:30', clName:'Priya CL', overdue:true, notes:['Docs partially submitted — missing bank statement','Called on Sep 1, will share remaining docs by Sep 5'] },
    { id:'RM-2089', name:'Karan Mehta', intake:'Sep 2026', country:'Germany', status:'CF Done & Docs Not Collected', caDate:'2026-08-20', f2fDate:null, lockinDate:'2026-08-25', appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 14:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Agreed to join F2F on Sep 3'] },
    { id:'RM-2103', name:'Deepa Nair', intake:'Jan 2027', country:'UK', status:'F2F Done & CF Not Done', caDate:'2026-08-10', f2fDate:'2026-08-28', lockinDate:'2026-08-15', appReadyDate:null, stiDate:null, lastConnect:'2026-08-30 16:15', clName:'Rahul CL', overdue:true, notes:['Awaiting academic transcripts','Follow-up scheduled for Sep 4'] },
    { id:'RM-2117', name:'Vikram Singh', intake:'Apr 2027', country:'Canada', status:'F2F Missed', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 09:00', clName:'Priya CL', overdue:false, notes:['Enthusiastic, just needs app form filled'] },
    { id:'RM-2134', name:'Simran Kaur', intake:'Jan 2027', country:'Germany', status:'AR Done & STI Not Done', caDate:'2026-08-22', f2fDate:'2026-08-29', lockinDate:'2026-08-30', appReadyDate:'2026-09-01', stiDate:null, lastConnect:'2026-09-02 11:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Waiting for SOP draft review'] },
    { id:'RM-2158', name:'Rohan Gupta', intake:'Sep 2026', country:'Australia', status:'CF Done & Docs Not Collected', caDate:'2026-09-01', f2fDate:null, lockinDate:'2026-09-01', appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 08:30', clName:'Rahul CL', overdue:false, notes:['Will schedule F2F this week'] },
    { id:'RM-2171', name:'Aisha Khan', intake:'Apr 2027', country:'Canada', status:'F2F Missed', caDate:'2026-08-18', f2fDate:'2026-08-25', lockinDate:'2026-08-28', appReadyDate:null, stiDate:null, lastConnect:'2026-08-31 15:00', clName:'Priya CL', overdue:true, notes:['Needs IELTS score before app ready'] },
  ],
  revenue: [
    { id:'RM-2045', name:'Tanvir Ahmed', intake:'Sep 2026', country:'Germany', status:'Prime', caDate:'2026-08-10', f2fDate:'2026-08-20', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-01 13:00', clName:'Priya CL', overdue:true, notes:['F2F done, deciding on lock-in','Scholarship query raised to counsellor'] },
    { id:'RM-2062', name:'Meera Pillai', intake:'Jan 2027', country:'UK', status:'C2I', caDate:'2026-08-25', f2fDate:'2026-09-01', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 10:00', clName:'Amit CL', overdue:false, dueToday:true, notes:['Interested, needs parent meeting'] },
    { id:'RM-2076', name:'Saurav Das', intake:'Apr 2027', country:'Canada', status:'Prime', caDate:'2026-09-01', f2fDate:'2026-09-02', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-03 10:45', clName:'Rahul CL', overdue:false, notes:['Just did F2F today, very positive'] },
    { id:'RM-2099', name:'Fatima Shaikh', intake:'Sep 2026', country:'Australia', status:'C2I', caDate:'2026-08-15', f2fDate:'2026-08-28', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-08-30 14:30', clName:'Priya CL', overdue:true, notes:['Comparing with another provider'] },
    { id:'RM-2201', name:'Yash Kulkarni', intake:'Jan 2027', country:'Canada', status:'C2I', caDate:'2026-08-27', f2fDate:'2026-09-01', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-02 12:15', clName:'Amit CL', overdue:false, dueToday:true, notes:['DET slot booked for next week'] },
    { id:'RM-2214', name:'Ishita Rao', intake:'Sep 2026', country:'UK', status:'dMAT', caDate:'2026-08-19', f2fDate:'2026-08-30', lockinDate:null, appReadyDate:null, stiDate:null, lastConnect:'2026-09-01 15:20', clName:'Rahul CL', overdue:true, notes:['Awaiting dMAT confirmation from student'] },
  ],
  loan: [
    { id:'RM-2051', name:'Rahul Jain', intake:'Sep 2026', country:'Germany', status:'Loan VC Not Booked', caDate:'2026-08-05', f2fDate:'2026-08-12', lockinDate:'2026-08-15', appReadyDate:'2026-08-20', stiDate:null, lastConnect:'2026-08-28 11:00', clName:'Amit CL', overdue:true, notes:['Loan VC slot booked but cancelled','Reschedule pending'] },
    { id:'RM-2068', name:'Lakshmi Venkat', intake:'Jan 2027', country:'UK', status:'Loan VC Not Attended', caDate:'2026-08-18', f2fDate:'2026-08-22', lockinDate:'2026-08-25', appReadyDate:'2026-08-29', stiDate:null, lastConnect:'2026-09-01 09:30', clName:'Rahul CL', overdue:false, dueToday:true, notes:['PF portal access issue, ticket raised'] },
    { id:'RM-2082', name:'Arjun Reddy', intake:'Apr 2027', country:'Canada', status:'Loan VC Not Booked', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 07:00', clName:'Priya CL', overdue:false, notes:['Loan VC booked for Sep 5'] },
    { id:'RM-2110', name:'Pooja Mishra', intake:'Sep 2026', country:'Germany', status:'Loan VC Not Attended', caDate:'2026-08-12', f2fDate:'2026-08-19', lockinDate:'2026-08-22', appReadyDate:'2026-08-27', stiDate:null, lastConnect:'2026-08-29 16:00', clName:'Amit CL', overdue:true, notes:['Hesitant about loan amount'] },
    { id:'RM-2125', name:'Dev Patel', intake:'Jan 2027', country:'UK', status:'Loan VC Not Booked', caDate:'2026-08-20', f2fDate:'2026-08-26', lockinDate:'2026-08-28', appReadyDate:'2026-09-01', stiDate:null, lastConnect:'2026-09-02 14:00', clName:'Rahul CL', overdue:false, notes:['Collecting docs for PF portal'] },
    { id:'RM-2142', name:'Sneha Joshi', intake:'Apr 2027', country:'Australia', status:'Loan VC Not Attended', caDate:'2026-09-02', f2fDate:'2026-09-02', lockinDate:'2026-09-02', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 08:00', clName:'Priya CL', overdue:false, notes:['New lock-in, scheduling VC'] },
    { id:'RM-2160', name:'Manish Verma', intake:'Sep 2026', country:'Canada', status:'Loan VC Not Booked', caDate:'2026-08-08', f2fDate:'2026-08-14', lockinDate:'2026-08-18', appReadyDate:'2026-08-24', stiDate:null, lastConnect:'2026-08-25 10:00', clName:'Amit CL', overdue:true, notes:['Multiple follow-ups done, still delaying'] },
    { id:'RM-2178', name:'Priti Sharma', intake:'Jan 2027', country:'Germany', status:'Loan VC Not Attended', caDate:'2026-09-01', f2fDate:'2026-09-01', lockinDate:'2026-09-01', appReadyDate:'2026-09-02', stiDate:null, lastConnect:'2026-09-03 09:30', clName:'Rahul CL', overdue:false, notes:['Confirmed interest, booking VC today'] },
    { id:'RM-2195', name:'Ravi Teja', intake:'Apr 2027', country:'UK', status:'Loan VC Not Booked', caDate:'2026-08-28', f2fDate:'2026-09-01', lockinDate:'2026-09-02', appReadyDate:'2026-09-03', stiDate:null, lastConnect:'2026-09-03 08:45', clName:'Priya CL', overdue:false, notes:['PF process explained, collecting docs'] },
  ]
};

const MGR_TEAM = [
  { id:'R01', name:'Arjun Patel', initials:'AP', color:'#f97316', sti:7, revenue:4, loan:9, quality:'72%', overdue:5, status:'On Track', tl:'TL01', stisSubmitted:7, caToStiPct:40, deposits:4, lockinPct:26 },
  { id:'R02', name:'Sneha Rao', initials:'SR', color:'#0369a1', sti:2, revenue:6, loan:3, quality:'88%', overdue:1, status:'Good', tl:'TL01', stisSubmitted:9, caToStiPct:46, deposits:6, lockinPct:33 },
  { id:'R05', name:'Tanvir Ali', initials:'TA', color:'#dc2626', sti:8, revenue:1, loan:7, quality:'63%', overdue:6, status:'On Track', tl:'TL01', stisSubmitted:5, caToStiPct:29, deposits:3, lockinPct:19 },
  { id:'R03', name:'Vikram D.', initials:'VD', color:'#7c3aed', sti:10, revenue:2, loan:12, quality:'54%', overdue:9, status:'Focus', tl:'TL02', stisSubmitted:4, caToStiPct:22, deposits:2, lockinPct:14 },
  { id:'R04', name:'Meera Nair', initials:'MN', color:'#16a34a', sti:4, revenue:3, loan:5, quality:'81%', overdue:2, status:'Good', tl:'TL02', stisSubmitted:8, caToStiPct:38, deposits:5, lockinPct:30 },
  { id:'R08', name:'Naina Joshi', initials:'NJ', color:'#be185d', sti:11, revenue:1, loan:10, quality:'48%', overdue:8, status:'Focus', tl:'TL02', stisSubmitted:3, caToStiPct:18, deposits:1, lockinPct:11 },
  { id:'R06', name:'Ritu Kapoor', initials:'RK', color:'#0891b2', sti:5, revenue:5, loan:4, quality:'76%', overdue:3, status:'Good', tl:'TL03', stisSubmitted:6, caToStiPct:33, deposits:3, lockinPct:24 },
  { id:'R07', name:'Aditya Verma', initials:'AV', color:'#65a30d', sti:3, revenue:7, loan:2, quality:'91%', overdue:1, status:'Good', tl:'TL03', stisSubmitted:10, caToStiPct:50, deposits:7, lockinPct:37 },
  { id:'R09', name:'Farhan Sheikh', initials:'FS', color:'#ca8a04', sti:6, revenue:4, loan:6, quality:'70%', overdue:4, status:'On Track', tl:'TL03', stisSubmitted:7, caToStiPct:36, deposits:4, lockinPct:27 },
];

// RM → TL → SM hierarchy: every RM reports to exactly one of these 3 TLs, all 3 report to the SM (Shubham Sharma)
const TEAM_LEADS_MOCK = [
  { id:'TL01', name:'Mansi', initials:'MA', color:'#0369a1' },
  { id:'TL02', name:'Noushad', initials:'NO', color:'#7c3aed' },
  { id:'TL03', name:'Tanveer', initials:'TV', color:'#16a34a' },
];

const TEAM_ESCALATIONS = [
  { label:'Customer Support', count:22 },
  { label:'Low ISL Feedback', count:11 },
  { label:'Messages Not Replied', count:27 },
];

const RM_ESCALATIONS = [
  { label:'Customer Support', count:6 },
  { label:'Low ISL Feedback', count:3 },
  { label:'Messages Not Replied', count:8 },
];

function escRowHtml(label, count) {
  const on = count > 0;
  const amber = on && label === 'IS Pending and Breached';
  const bg = amber ? '#FFF7ED' : on ? '#FEF2F2' : '#ECFDF5';
  const border = amber ? '#FED7AA' : on ? '#FECACA' : '#A7F3D0';
  const text = amber ? '#C2410C' : on ? '#B91C1C' : '#047857';
  const badgeBg = amber ? '#FFEDD5' : on ? '#FEE2E2' : '#D1FAE5';
  return `<div class="flex items-center justify-between px-[10px] py-2 rounded-lg" style="background:${bg};border:1px solid ${border}">
    <span class="text-[10px] font-semibold" style="color:${text}">${label}</span>
    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" style="background:${badgeBg};color:${text}">${count}</span>
  </div>`;
}

const TEAM_IBT = [
  { label:'F2F Scheduled', count:19, cls:'text-accent' },
  { label:'App Ready Follow-up', count:14, cls:'text-accent' },
  { label:'Lock-in Confirmation', count:21, cls:'text-danger' },
  { label:'Loan VC Booking', count:9, cls:'text-accent' },
  { label:'STI Docs Collection', count:3, cls:'text-success' },
  { label:'Query Resolutions', count:12, cls:'text-accent' },
];

const TRAINING_CATS = [
  { key:'soft', name:'Soft Training', lessons:[
    { name:'Communication Skills for RMs', desc:'Best practices for clear, empathetic conversations with students.', type:'video' },
    { name:'Objection Handling Techniques', desc:'Scripts and frameworks to handle common student objections.', type:'document' },
    { name:'Empathy in Sales Conversations', desc:'Building trust with a student while guiding them toward a decision.', type:'video' },
    { name:'Tone & Language on Calls', desc:'Do’s and don’ts for phone and WhatsApp communication.', type:'document' },
  ]},
  { key:'domain', name:'Domain Training', lessons:[
    { name:'RM KPI Deep Dive — STI, Lock-in, Loan VC', desc:'How each KPI is calculated and what drives it.', type:'document' },
    { name:'Understanding Student Profiles', desc:'Framework for evaluating a student’s academic profile.', type:'document' },
    { name:'Program & Scholarship Overview', desc:'Overview of programs, intakes, and scholarship criteria.', type:'video' },
    { name:'IELTS & Academic Requirements', desc:'Minimum score and academic requirements by country.', type:'document' },
  ]},
  { key:'system', name:'System Training', lessons:[
    { name:'RM CRM Navigation & Features', desc:'Walkthrough of the CRM — pipelines, tasks, and drawers.', type:'video' },
    { name:'Logging Notes & Follow-ups', desc:'How to log notes and set follow-up reminders correctly.', type:'document' },
    { name:'Query Raising to Counsellor', desc:'When and how to raise a query for the counsellor.', type:'document' },
  ]},
  { key:'newfeat', name:'New Features', lessons:[
    { name:'Pipeline Auto-movement Rules', desc:'How leads move automatically between pipeline stages.', type:'video' },
    { name:'Incentive Dashboard Walkthrough', desc:'Tour of the new Incentives & Earnings tab.', type:'document' },
  ]},
];

const IMP_SHEET_LINKS = [
  { name:'Raise SOP Request' },
  { name:'Offer Follow up' },
  { name:'Raise Lead Transfer Request' },
  { name:'Info-Hub' },
  { name:'LeapPay Payment Link' },
  { name:'Premium Payment Links' },
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

const TEAM_PERF_METRICS = {
  volume: [
    { name:'Leads Assigned', target:400, achieved:352 },
    { name:'F2F Attended', target:150, achieved:121 },
    { name:'Lock-ins (C2I + Prime)', target:75, achieved:47 },
    { name:'Loan VC Booked', target:60, achieved:38 },
    { name:'Loan VC Joined', target:50, achieved:29 },
    { name:'Docs Collected', target:125, achieved:96 },
    { name:'App Ready Completed', target:100, achieved:64 },
    { name:'Queries to Counsellor', target:40, achieved:52 },
    { name:'C2I Revenue', target:70, achieved:46 },
    { name:'Total Drop', target:25, achieved:37 },
  ],
  conversion: [
    { name:'F2F Attendance Rate', target:'75%', achieved:'71%', pct:95 },
    { name:'Lock-in Conversion Rate', target:'50%', achieved:'39%', pct:78 },
    { name:'Loan VC Conversion Rate', target:'80%', achieved:'76%', pct:95 },
    { name:'App Ready Conversion Rate', target:'85%', achieved:'64%', pct:75 },
    { name:'Query Resolution Rate', target:'90%', achieved:'84%', pct:93 },
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
  hierRmSelected: new Set(),
  hierTlSelected: new Set(),
  mgrPerfPeriod: 'yesterday',
  mgrPerfScope: 'rm',
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function showToast(msg, type) {
  type = type || 'info';
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type} pointer-events-auto`;
  const icons = { success:'✓', error:'✕', info:'ℹ', warning:'⚠' };
  el.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .25s';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 260);
  }, 2800);
}

function statusPill(pct) {
  if (pct >= 80) return '<span class="ai-badge completed">Good</span>';
  if (pct >= 50) return '<span class="ai-badge pending">On Track</span>';
  return '<span class="ai-badge pending" style="background:#FEF2F2;color:#DC2626;border-color:#FCA5A5">Focus</span>';
}

function statusChip(status) {
  if (status === 'Good') return '<span class="ai-badge completed">Good</span>';
  if (status === 'On Track') return '<span class="ai-badge pending">On Track</span>';
  return '<span class="ai-badge pending" style="background:#FEF2F2;color:#DC2626;border-color:#FCA5A5">Focus</span>';
}

function rankBadge(i) {
  if (i === 0) return '<span class="rank-badge r1">🥇</span>';
  if (i === 1) return '<span class="rank-badge r2">🥈</span>';
  if (i === 2) return '<span class="rank-badge r3">🥉</span>';
  return `<span class="rank-badge" style="background:#E2E8F0;color:#64748B">${i + 1}</span>`;
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
  const isAdmin = role === 'admin';
  const isMgr = ['team_lead','senior_manager'].includes(role);

  document.getElementById('adminPanel').classList.toggle('hidden', !isAdmin);
  document.getElementById('tabBar').classList.toggle('hidden', isAdmin);
  document.getElementById('main').classList.toggle('hidden', isAdmin);
  document.getElementById('botBubble').classList.toggle('hidden', isAdmin);
  if (isAdmin) {
    document.getElementById('botPanel').classList.remove('open');
  }

  if (!isAdmin) {
    document.getElementById('rmDashboard').classList.toggle('hidden', isMgr);
    document.getElementById('mgrRollup').classList.toggle('hidden', !isMgr);
    document.getElementById('incentivesMain').classList.toggle('hidden', isMgr);
    document.getElementById('mgrIncentivesMain').classList.toggle('hidden', !isMgr);
    document.getElementById('opportunityDetail').classList.add('hidden');
    document.getElementById('incentivesMainInner').classList.remove('hidden');

    const hierRow = document.getElementById('hierarchyFilterRow');
    hierRow.classList.toggle('hidden', !isMgr);
    hierRow.classList.toggle('flex', isMgr);

    const tlFilterWrap = document.getElementById('tlFilterWrap');
    if (tlFilterWrap) tlFilterWrap.classList.toggle('hidden', role !== 'senior_manager');

    if (isMgr) {
      closeMgrDrilldown();
      state.hierRmSelected = new Set();
      state.hierTlSelected = new Set();
      state.mgrPerfPeriod = 'yesterday';
      state.mgrPerfScope = 'rm';
      buildHierFilterList('rm');
      if (role === 'senior_manager') buildHierFilterList('tl');
      updateHierFilterLabels();
      renderMgrDashboard();
      renderMgrIncentives();
    }
    const ticketsLabel = document.getElementById('ldTicketsLabel');
    if (ticketsLabel) ticketsLabel.textContent = isMgr ? 'Team Tickets' : 'My Tickets';
  }

  const roleLabels = { rm:'Student Success Manager', team_lead:'Team Lead', senior_manager:'Senior Manager', admin:'Administrator' };
  document.getElementById('pdRole').textContent = roleLabels[role] || 'RM';
}

// ─── COLLAPSIBLE ──────────────────────────────────────────────────────────────
function toggleSection(id) {
  const body = document.getElementById(`body-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  if (!body) return;
  body.classList.toggle('hidden');
  if (chevron) chevron.classList.toggle('rotate-180');
}

function toggleTrainingCat(key) {
  const body = document.getElementById(`tcat-body-${key}`);
  const chev = document.getElementById(`tcat-chev-${key}`);
  if (!body) return;
  body.classList.toggle('hidden');
  if (chev) chev.classList.toggle('rotate-180');
}

// ─── PROFILE DROPDOWN ──────────────────────────────────────────────────────────
function toggleProfileDropdown() {
  const dd = document.getElementById('profileDropdown');
  state.profileOpen = !state.profileOpen;
  dd.classList.toggle('hidden', !state.profileOpen);
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#profileDropdown') && !e.target.closest('[onclick="toggleProfileDropdown()"]')) {
    document.getElementById('profileDropdown')?.classList.add('hidden');
    state.profileOpen = false;
  }
  if (!e.target.closest('#rmFilterWrap')) {
    document.getElementById('rmFilterDropdown')?.classList.add('hidden');
  }
  if (!e.target.closest('#tlFilterWrap')) {
    document.getElementById('tlFilterDropdown')?.classList.add('hidden');
  }
  if (!e.target.closest('[id^="advHier_"]')) {
    document.querySelectorAll('[id^="advHierDd_"]').forEach(dd => dd.classList.add('hidden'));
  }
});

// ─── CALL STATUS ──────────────────────────────────────────────────────────────
function updateCallStatus(val) {
  const dot = document.getElementById('callDot');
  dot.className = 'w-2 h-2 rounded-full flex-shrink-0';
  if (val === 'busy') dot.classList.add('bg-accent');
  else if (val === 'away') dot.classList.add('bg-text-muted');
  else dot.classList.add('bg-success');
}

// ─── HIERARCHY FILTER ROW ─────────────────────────────────────────────────────
const HIER_FILTER_CONFIG = {
  rm: { listId:'rmFilterList', dropdownId:'rmFilterDropdown', labelId:'rmFilterLabel' },
  tl: { listId:'tlFilterList', dropdownId:'tlFilterDropdown', labelId:'tlFilterLabel' },
};

function hierSelectedSet(type) {
  return type === 'tl' ? state.hierTlSelected : state.hierRmSelected;
}

// RMs scoped to the signed-in Team Lead / Senior Manager, before any filter is applied
function mgrScopedTeam() {
  if (state.role === 'team_lead') return MGR_TEAM.filter(rm => rm.tl === 'TL01');
  return MGR_TEAM;
}

function buildHierFilterList(type) {
  type = type || 'rm';
  const cfg = HIER_FILTER_CONFIG[type];
  const list = document.getElementById(cfg.listId);
  if (!list) return;
  const items = type === 'tl' ? TEAM_LEADS_MOCK : mgrScopedTeam();
  const selected = hierSelectedSet(type);
  list.innerHTML = items.map(it => `
    <div class="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface cursor-pointer">
      <input type="checkbox" id="hierChk_${type}_${it.id}" class="w-3.5 h-3.5 accent-accent cursor-pointer flex-shrink-0" ${selected.has(it.id) ? 'checked' : ''} onchange="onHierCheckChange('${type}','${it.id}',this.checked)"/>
      <label for="hierChk_${type}_${it.id}" class="text-xs text-text-main cursor-pointer leading-tight flex-1">${it.name}</label>
    </div>`).join('');
}

function onHierCheckChange(type, id, checked) {
  const set = hierSelectedSet(type);
  if (checked) set.add(id);
  else set.delete(id);
}

function toggleHierDropdown(type, e) {
  e.stopPropagation();
  document.getElementById(HIER_FILTER_CONFIG[type].dropdownId).classList.toggle('hidden');
}

function refreshMgrFilteredViews() {
  renderMgrDashboard();
}

function applyHierFilter(type) {
  document.getElementById(HIER_FILTER_CONFIG[type].dropdownId).classList.add('hidden');
  refreshMgrFilteredViews();
}

function clearHierFilter(type) {
  hierSelectedSet(type).clear();
  document.querySelectorAll(`#${HIER_FILTER_CONFIG[type].listId} input[type="checkbox"]`).forEach(cb => cb.checked = false);
  document.getElementById(HIER_FILTER_CONFIG[type].dropdownId).classList.add('hidden');
  refreshMgrFilteredViews();
}

function updateHierFilterLabels() {
  const rmN = state.hierRmSelected.size;
  document.getElementById('rmFilterLabel').textContent = rmN === 0 ? 'RM: All' : `RM: ${rmN} selected`;
  const tlLabelEl = document.getElementById('tlFilterLabel');
  if (tlLabelEl) {
    const tlN = state.hierTlSelected.size;
    tlLabelEl.textContent = tlN === 0 ? 'TL: All' : `TL: ${tlN} selected`;
  }
  const total = mgrScopedTeam().length;
  const n = visibleTeam().length;
  document.getElementById('hierViewAllLabel').textContent = (n === total) ? 'Viewing All' : `Viewing ${n} of ${total} RMs`;
}

function visibleTeam() {
  let team = mgrScopedTeam();
  if (state.role === 'senior_manager' && state.hierTlSelected.size > 0) {
    team = team.filter(rm => state.hierTlSelected.has(rm.tl));
  }
  if (state.hierRmSelected.size > 0) {
    team = team.filter(rm => state.hierRmSelected.has(rm.id));
  }
  return team;
}

// ─── PIPELINE DRAWER ─────────────────────────────────────────────────────────
const PIPELINE_LABELS = { sti:'Boost STI', revenue:'Boost Revenue', loan:'Boost Loan' };

const PIPELINE_LEAVES = {
  sti: ['AR Done & STI Not Done', 'CF Done & Docs Not Collected', 'F2F Done & CF Not Done', 'F2F Missed'],
  revenue: ['Prime', 'C2I', 'dMAT'],
  loan: ['Loan VC Not Booked', 'Loan VC Not Attended'],
};
function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); }
function pipelineLeaves(type) {
  return (PIPELINE_LEAVES[type] || []).map(label => ({ slug:slugify(label), label }));
}

// ─── SEVERITY COLOR SYSTEM (red/amber/green, driven by count) ────────────────
function severityColors(level) {
  if (level === 'green') return { g1:'#ECFDF5', g2:'#D1FAE5', border:'#C8E6C9', shadow:'#66BB6A55', label:'#2E7D32', count:'#2E7D32', sub:'#2E7D32', cta:'#2E7D32', ctaBg:'#D1FAE5' };
  if (level === 'amber') return { g1:'#FFF7ED', g2:'#FFEDD5', border:'#FED7AA', shadow:'#FDBA7455', label:'#EA580C', count:'#EA580C', sub:'#EA580C', cta:'#EA580C', ctaBg:'#FFEDD5' };
  return { g1:'#FEF2F2', g2:'#FEE2E2', border:'#FFCDD2', shadow:'#FCA5A555', label:'#C62828', count:'#C62828', sub:'#DC2626', cta:'#C62828', ctaBg:'#FEE2E2' };
}
function boostSeverity(count) {
  if (count === 0) return severityColors('green');
  if (count <= 5) return severityColors('amber');
  return severityColors('red');
}
function boostSeverityWide(count) {
  if (count === 0) return severityColors('green');
  if (count <= 10) return severityColors('amber');
  return severityColors('red');
}
function qualitySeverity(pct) {
  if (pct >= 75) return severityColors('green');
  if (pct >= 50) return severityColors('amber');
  return severityColors('red');
}

const QUALITY_SCORE_BUCKETS = [
  { label:'2nd Call Reschedule & Join', pct:62 },
  { label:'Boost Lock-in', pct:74 },
  { label:'Loan VC Book & Join', pct:55 },
  { label:'Prep Demo Booked, Enrollment Pending', pct:40 },
];
function qualityBarColor(pct) {
  if (pct >= 75) return '#16A34A';
  if (pct >= 50) return '#EA580C';
  return '#DC2626';
}
function qualityScoreBarsHtml(buckets) {
  return buckets.map(b => `
    <div>
      <div class="flex items-center justify-between gap-2 mb-0.5">
        <span class="text-[10px] text-text-muted leading-tight">${b.label}</span>
        <span class="text-[10px] font-semibold font-mono flex-shrink-0">${b.pct}%</span>
      </div>
      <div class="h-1.5 bg-border rounded-full overflow-hidden"><div class="h-full rounded-full" style="width:${b.pct}%;background:${qualityBarColor(b.pct)}"></div></div>
    </div>`).join('');
}
function applySeverityToCard(cardId, sev) {
  const card = document.getElementById(cardId);
  if (!card) return;
  card.style.background = `linear-gradient(90deg, ${sev.g1} 0%, ${sev.g2} 100%)`;
  card.style.borderColor = sev.border;
  card.style.boxShadow = `0 2px 8px ${sev.shadow}`;
  card.style.setProperty('--boost-accent', sev.cta);
}
function applyBoostCardSeverity(cardId, count) {
  const card = document.getElementById(cardId);
  if (!card) return;
  const sev = boostSeverity(count);
  applySeverityToCard(cardId, sev);
  const label = card.querySelector('.boost-label'); if (label) label.style.color = sev.label;
  const countEl = card.querySelector('.boost-count'); if (countEl) countEl.style.color = sev.count;
  const sub = card.querySelector('.boost-sub'); if (sub) sub.style.color = sev.sub;
  const cta = card.querySelector('.boost-cta'); if (cta) { cta.style.color = sev.cta; cta.style.background = sev.ctaBg; }
}

const STAGE_COLOR_CYCLE = [
  { bg:'#EFF6FF', text:'#1D4ED8', border:'#BFDBFE', solidBg:'#1D4ED8' },
  { bg:'#FFFBEB', text:'#B45309', border:'#FDE68A', solidBg:'#B45309' },
  { bg:'#ECFDF5', text:'#047857', border:'#A7F3D0', solidBg:'#047857' },
  { bg:'#FEF2F2', text:'#B91C1C', border:'#FECACA', solidBg:'#B91C1C' },
];
function pillHtml(key, label, count, isActive, colorIdx) {
  if (key === 'all') {
    const style = isActive ? 'background:#0F172A;color:#fff;border-color:#0F172A' : 'background:#fff;color:#0F172A;border-color:#CBD5E1';
    return `<button class="filter-pill" style="${style}" onclick="setPipelineStage('all')">${label} <strong>${count}</strong></button>`;
  }
  const c = STAGE_COLOR_CYCLE[colorIdx % STAGE_COLOR_CYCLE.length];
  const style = isActive ? `background:${c.solidBg};color:#fff;border-color:${c.solidBg}` : `background:${c.bg};color:${c.text};border-color:${c.border}`;
  return `<button class="filter-pill" style="${style}" onclick="setPipelineStage('${key}')">${label} <strong>${count}</strong></button>`;
}

const TASK_GUIDANCE = {
  'AR Done & STI Not Done': 'App Ready is done but the application hasn’t been filed yet. File the STI application for the student. Task closes once STI is done, or the Lead Stage moves to Lead Drop Off. Always update Follow-up date after confirmation with user.',
  'CF Done & Docs Not Collected': 'College Finalised is done but the required documents haven’t been shared yet. Collect the pending documents from the student. Task closes once the App Ready date is captured, STI is done, or the Lead Stage moves to Lead Drop Off.',
  'F2F Done & CF Not Done': 'F2F is done but the college hasn’t been finalised yet. Help the student finalise a college to apply to. Task closes once College Finalised (CF) is done, or the Lead Stage moves to Lead Drop Off.',
  'F2F Missed': 'The 2nd discussion was missed or hasn’t been booked in time. Discuss with the user and align for a 2nd discussion basis their preference — book an Offline/Online session. Task closes once the 2nd discussion is rescheduled/booked for today or a future date, or the Lead Stage moves to College Finalised (CF) or Lead Drop Off. Always use 100ms, Jerry, Leap Group Chat for all communications with the student.',
  'Prime': 'Servicing Type is Free Service — pitch the student on Leap Prime and get them to lock in. Appears once it\'s been 7 days since the F2F date, or 14 days since the CA Date, and lock-in still hasn\'t happened. Task closes once the Leap Prime payment is received, the STI date is marked, or the Lead Stage moves to Dropped Off.',
  'C2I': 'The student hasn\'t given their English exam yet (IELTS, PTE and DET are clubbed under this one bucket) and no MOI waiver applies — pitch them on C2I and get them to book/complete their exam. Appears once it\'s been 7 days since the F2F date, or 14 days since the CA Date, and lock-in still hasn\'t happened. Task closes once the exam status is Already Given/Booked, they move to a paid IELTS/DET/PTE stage, or the Lead Stage moves to Dropped Off.',
  'dMAT': 'Preferred Country is Germany — pitch the student on dMAT and get them to complete payment. Task closes once a payment entry exists for the dMAT reference, or the Lead Stage moves to Dropped Off.',
  'Loan VC Not Booked': 'College Finalised or App Ready date has been captured for this student. Book a Financial Counselling (Loan VC) slot with them. Task closes once a Loan VC slot is booked, or the Lead Stage moves to Deposit Paid, Visa Request Raised, or Dropped Off.',
  'Loan VC Not Attended': 'A Loan VC slot was booked but marked Absent, or the date has passed without attendance. Follow up with the student to reschedule and confirm attendance. Task closes once a new Loan VC meeting is booked for a future date, attendance is marked True, or the Lead Stage moves to Dropped Off.',
};

let pipelineFilterState = { type:null, stage:'all', todayOnly:false, search:'' };

function openPipeline(type) {
  state.currentPipeline = type;
  pipelineFilterState = { type, stage:'all', todayOnly:false, search:'' };
  openDrawer(`${PIPELINE_LABELS[type]} Pipeline`, '<div id="pipelineDrawerRoot"></div>');
  renderPipelineDrawerBody();
}

function pipelineFilteredLeads() {
  const { type, stage, todayOnly, search } = pipelineFilterState;
  const leads = MOCK_LEADS[type] || [];
  let filtered = leads;
  if (todayOnly) filtered = filtered.filter(l => l.dueToday);
  if (stage !== 'all') {
    const leaf = pipelineLeaves(type).find(lf => lf.slug === stage);
    if (leaf) filtered = filtered.filter(l => l.status === leaf.label);
  }
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(l => l.name.toLowerCase().includes(q) || l.id.toLowerCase().includes(q));
  }
  return [...filtered].sort((a,b) => {
    if (a.overdue && !b.overdue) return -1;
    if (!a.overdue && b.overdue) return 1;
    if (a.dueToday && !b.dueToday) return -1;
    if (!a.dueToday && b.dueToday) return 1;
    return 0;
  });
}

function colorForStatus(type, status) {
  const leaves = pipelineLeaves(type);
  const idx = leaves.findIndex(lf => lf.label === status);
  return STAGE_COLOR_CYCLE[(idx >= 0 ? idx : 0) % STAGE_COLOR_CYCLE.length];
}

function buildPipelineCards(filtered, type) {
  if (!filtered.length) return `<div class="text-center text-sm text-text-muted py-10">No leads match this filter.</div>`;
  return filtered.map(l => {
    const c = colorForStatus(type, l.status);
    return `
    <div class="student-card mb-3">
      <div class="font-semibold text-sm text-text-main">${l.name}</div>
      <div class="text-xs text-text-muted mb-2 font-mono">${l.id} · ${l.intake} · ${l.country}</div>
      <span class="app-badge downloaded" style="background:${c.bg};color:${c.text}">${l.status}</span>
      ${l.overdue ? ' <span class="app-badge not-downloaded">Overdue</span>' : l.dueToday ? ' <span class="ai-badge pending">Due Today</span>' : ''}
      <div class="text-xs text-text-muted mt-2">Follow-up: ${l.caDate || '—'}</div>
      <div class="mt-2.5 p-2.5 rounded-lg" style="background:#F8FAFC;border:1px solid #E2E8F0">
        <div class="text-[10px] font-bold uppercase text-text-muted mb-1.5 tracking-wide">How to close</div>
        <div class="flex gap-2 items-start">
          <span class="app-badge downloaded flex-shrink-0" style="background:${c.bg};color:${c.text}">${l.status}</span>
          <div class="text-xs text-text-muted leading-relaxed">${TASK_GUIDANCE[l.status] || 'Follow up with the student and update the status once resolved.'}</div>
        </div>
      </div>
      <div class="flex gap-2 mt-3">
        <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer transition-colors" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openLeadDetail('${type}','${l.id}')">View student</button>
        <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer transition-colors" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openTaskView('${type}','${l.id}')">View Task</button>
      </div>
    </div>`;
  }).join('');
}

function renderPipelineDrawerBody() {
  const { type, stage, todayOnly, search } = pipelineFilterState;
  const leads = MOCK_LEADS[type] || [];
  const leaves = pipelineLeaves(type);
  const dueTodayCount = leads.filter(l => l.dueToday).length;

  const pillsHtml = pillHtml('all', 'All', leads.length, stage === 'all', 0)
    + leaves.map((lf, i) => pillHtml(lf.slug, lf.label, leads.filter(l => l.status === lf.label).length, stage === lf.slug, i)).join('');

  const html = `
    <div class="flex items-center gap-2 mb-3 flex-wrap">
      <button class="today-toggle ${todayOnly ? 'active' : ''}" onclick="togglePipelineToday()">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/></svg>
        Today's Tasks Only
      </button>
      <span class="text-xs text-text-muted">${dueTodayCount} due today</span>
    </div>
    <div class="flex flex-wrap gap-1.5 mb-3">${pillsHtml}</div>
    <input class="w-full px-3 py-2 border border-border rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Search by name or ID…" value="${escHtml(search)}" oninput="setPipelineSearch(this.value)"/>
    <div id="pipelineCardsList">${buildPipelineCards(pipelineFilteredLeads(), type)}</div>
    <div class="text-center text-xs text-text-muted mt-3 pt-3 border-t border-border">All Tasks — ${leads.length} total</div>`;

  document.getElementById('pipelineDrawerRoot').innerHTML = html;
}

function setPipelineStage(key) { pipelineFilterState.stage = key; renderPipelineDrawerBody(); }
function togglePipelineToday() { pipelineFilterState.todayOnly = !pipelineFilterState.todayOnly; renderPipelineDrawerBody(); }
function setPipelineSearch(v) {
  pipelineFilterState.search = v;
  document.getElementById('pipelineCardsList').innerHTML = buildPipelineCards(pipelineFilteredLeads(), pipelineFilterState.type);
}

const COURSE_OPTIONS = ['Computer Science', 'Data Science', 'Business Analytics', 'Mechanical Engineering', 'Public Health', 'Finance', 'Marketing', 'Civil Engineering', 'Psychology', 'International Business'];

const DISPOSITION_OPTIONS = ['C2I', 'Prime', 'Loan VC Booking', 'F2F', 'Doc Collection', 'College Finalisation'];

// ─── LEAD DETAIL — FULL PAGE (Student Profile + tabs, mirrors production) ────
const LEAD_DETAIL_TABS = [
  { key:'profile', label:'Student Profile' },
  { key:'appointments', label:'Appointments' },
  { key:'shortlist', label:'Shortlist' },
  { key:'applications', label:'Applications' },
  { key:'tasks', label:'Tasks' },
  { key:'calllogs', label:'Call Logs' },
  { key:'activitylogs', label:'Activity Logs' },
  { key:'visa', label:'Visa Status' },
];

const UNIVERSITY_POOL = [
  { name:'University of Salford', course:'MSc in Procurement, Logistics and Supply Chain Management' },
  { name:'University of Greater Manchester', course:'MSc in Logistics and Supply Chain Management' },
  { name:'Manchester Metropolitan University', course:'MSc International Business' },
  { name:'University of Strathclyde', course:'MSc Data Science' },
  { name:'University of Birmingham', course:'MSc Finance' },
  { name:'King’s College London', course:'MSc Marketing Management' },
  { name:'University of Surrey', course:'MSc Computer Science' },
  { name:'Coventry University', course:'MSc Business Analytics' },
];

function applicationsForLead(lead) {
  const h = hashStr(lead.id);
  const count = (h % 2) + 1;
  const apps = [];
  for (let i = 0; i < count; i++) {
    const u = UNIVERSITY_POOL[(h + i * 3) % UNIVERSITY_POOL.length];
    const hasOffer = (h + i) % 2 === 0;
    apps.push({
      id: `APP-${10000 + (h + i * 97) % 90000}`,
      university: u.name,
      course: u.course,
      priority: i === 0 ? 'P1' : 'P2',
      status: i === 0 ? 'Filing In Process' : 'Application Draft By Counsellor',
      intakeStatus: i === 0 ? 'CLOSED: SEP 26' : 'OPEN: JAN 27',
      stage: i === 0 ? 'pre' : 'pre',
      hasOffer,
      offerLetterUrl: hasOffer ? '#' : null,
    });
  }
  return apps;
}

// Whether the lead has already reached STI (Submitted to Institute) — drives whether the
// University/Linked Application field is shown as auto-fetched (post-STI) or a skippable
// pick (pre-STI), per the VAS request flow. sti-pipeline leaves are all pre-STI by definition.
function leadIsSTIDone(lead) {
  if (lead.stiDate) return true;
  return !PIPELINE_LEAVES.sti.includes(lead.status);
}

function studentProfileMock(lead) {
  const h = hashStr(lead.id);
  return {
    appStatus: h % 3 === 0 ? 'Not Downloaded' : 'Downloaded',
    careerPreference: ['Supply Chain Management', 'Data Analytics', 'Business Management', 'Finance', 'Marketing'][h % 5],
    careerOutcome: h % 2 === 0 ? 'Get a job abroad' : 'Settle abroad long-term',
    qualification: 'Four year bachelor degree',
    specialization: ['Computer Science', 'Business Administration', 'Commerce', 'Hospitality Management', 'Mechanical Engineering'][h % 5],
    gradYear: 2020 + (h % 5),
    grading: 'Percentage',
    backlogs: h % 4,
    twelfthGrade: 55 + (h % 35),
    gapYears: h % 3 === 0 ? 'Yes — 1 year' : 'No',
    workExMonths: (h % 5) * 6,
    degree: 'Masters',
    budgetTotal: 1500000 + (h % 20) * 100000,
    tuitionBudget: 1000000 + (h % 15) * 100000,
    financing: ['Education Loan', 'Self Funded', 'Not Sure'][h % 3],
    examGiven: h % 2 === 0,
    examName: ['IELTS', 'PTE', 'Duolingo'][h % 3],
    examStatus: ['Not Decided', 'Booked', 'Given'][h % 3],
    locationPreference: ['Any city', 'Metro cities only', 'London/Manchester only'][h % 3],
    universityPreference: ['No specific preference', 'Russell Group only', 'Modern universities preferred'][h % 3],
    passportStatus: h % 2 === 0 ? 'Bearer' : 'Non-Bearer',
    waGroupActive: h % 4 !== 0,
  };
}

// ─── VAS INTEREST ─────────────────────────────────────────────────────────────
const VAS_SERVICES = [
  { key:'remittance', label:'Remittance', needsApplication:true },
  { key:'accommodation', label:'Accommodation', needsApplication:true },
  { key:'flight', label:'Flight', needsApplication:false },
  { key:'sim', label:'Sim Card', needsApplication:false },
  { key:'forex', label:'Forex Card/Cash', needsApplication:false },
  { key:'loan', label:'Education Financing', needsApplication:false },
];

let vasState = { selected: new Set(), applicationByService: {}, day: 0, slot: null };
const VAS_INTERESTS_MOCK = {};
const VAS_KYC_MOCK = {};
const VAS_LOAN_MOCK = {};
// Per-lead set of "dayIndex|slotLabel" already booked for any service — a counsellor is one
// person, so a slot used for one vendor's call can't also be offered for a different service.
const VAS_BOOKED_SLOTS_MOCK = {};

// ─── Education Financing (Loan) — no slot needed; requesting simulates a Yocket loan RM getting assigned ──
function eduFinancingState(leadId) {
  if (!VAS_LOAN_MOCK[leadId]) {
    VAS_LOAN_MOCK[leadId] = { assigned: false, rmName: '', rmEmail: '', rmContact: '', notes: '', followUpDate: new Date().toLocaleDateString('en-GB') };
  }
  return VAS_LOAN_MOCK[leadId];
}

function eduFinancingCardHtml(pipelineType, lead) {
  const s = eduFinancingState(lead.id);
  const row = (label, value) => `
    <div class="flex items-center justify-between py-2.5">
      <span class="text-sm font-semibold text-[#656E7F]">${label}</span>
      <span class="text-sm text-[#1F1F1F]">${value || '------'}</span>
    </div>`;
  return `
    <div class="pl-card mb-3" id="eduFinancingCard-${lead.id}">
      <div class="flex items-center justify-between pb-3 mb-1" style="border-bottom:1px solid #E2E8F0">
        <span class="text-base font-bold text-[#1F1F1F]">Education Financing</span>
        ${s.assigned ? `<span class="pl-badge pl-badge-completed">Requested</span>` : ''}
      </div>
      ${row('Yocket RM Name', s.assigned ? escHtml(s.rmName) : '')}
      ${row('Yocket RM Email', s.assigned && s.rmEmail ? escHtml(s.rmEmail) : '')}
      ${row('Yocket RM Contact Number', s.assigned ? escHtml(s.rmContact) : '')}
      ${s.assigned ? '' : `
      <div class="flex items-start justify-between py-2.5 gap-4">
        <span class="text-sm font-semibold text-[#656E7F] flex-shrink-0">Notes</span>
        <textarea class="flex-1 border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm" rows="2" placeholder="Type here" oninput="eduFinancingNotesInput('${lead.id}', this.value)">${escHtml(s.notes || '')}</textarea>
      </div>
      <button class="pl-btn-primary w-full mt-3" onclick="requestEducationFinancing('${pipelineType}','${lead.id}')">Request Education Financing Details</button>`}
      ${s.assigned && s.notes ? `<div class="flex items-center justify-between py-2.5"><span class="text-sm font-semibold text-[#656E7F]">Notes</span><span class="text-sm text-[#1F1F1F]">${escHtml(s.notes)}</span></div>` : ''}
      <div class="text-xs italic text-[#656E7F] mt-2">Follow Up Date: ${s.followUpDate}</div>
    </div>`;
}

function eduFinancingNotesInput(leadId, value) {
  eduFinancingState(leadId).notes = value;
}

// Compact version of the same rows, embedded inline in the VAS modal's Step 2 (no card wrapper).
// One-time action: once requested, it just shows the assigned details — no "update" state.
function eduFinancingModalBlockHtml(pipelineType, lead) {
  const s = eduFinancingState(lead.id);
  const row = (label, value) => `
    <div class="flex items-center justify-between py-1.5">
      <span class="text-sm text-[#64748B]">${label}</span>
      <span class="text-sm font-semibold text-[#0F172A]">${value || '------'}</span>
    </div>`;
  return `
    <div id="eduFinancingModalBlock-${lead.id}">
      <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-1 block">Education Financing</label>
      ${row('Yocket RM Name', s.assigned ? escHtml(s.rmName) : '')}
      ${row('Yocket RM Email', s.assigned && s.rmEmail ? escHtml(s.rmEmail) : '')}
      ${row('Yocket RM Contact Number', s.assigned ? escHtml(s.rmContact) : '')}
      ${s.assigned
        ? `<div class="text-xs mt-1.5" style="color:#16A34A">✓ Requested — Yocket loan team notified</div>`
        : `<button type="button" class="w-full mt-2 h-9 rounded-lg text-white text-sm font-semibold transition-colors" style="background:#443EFF" onclick="requestEducationFinancing('${pipelineType}','${lead.id}',{fromModal:true})">Request Education Financing Details</button>`}
      <div class="text-xs italic text-[#94A3B8] mt-1.5">Follow Up Date: ${s.followUpDate}</div>
    </div>`;
}

function requestEducationFinancing(pipelineType, leadId, opts) {
  opts = opts || {};
  const s = eduFinancingState(leadId);
  const alreadyAssigned = s.assigned;
  s.assigned = true;
  s.rmName = 'Palash Baldi';
  s.rmContact = '+918233270156';
  s.followUpDate = new Date(Date.now() + 86400000).toLocaleDateString('en-GB');
  refreshEduFinancingCard(pipelineType, leadId);
  const lead = (MOCK_LEADS[pipelineType] || []).find(l => l.id === leadId);
  const modalBlock = document.getElementById(`eduFinancingModalBlock-${leadId}`);
  if (modalBlock && lead) modalBlock.outerHTML = eduFinancingModalBlockHtml(pipelineType, lead);
  if (!opts.silent && !alreadyAssigned) showToast('Education financing request sent — a Yocket loan RM has been assigned.', 'success');
  // Requesting inline is the finishing action for a loan-only interest — no separate "Confirm Interest" click needed.
  if (opts.fromModal && !alreadyAssigned && !vasNeedsSlotStep()) confirmVasInterest(leadId);
}

function refreshEduFinancingCard(pipelineType, leadId) {
  const el = document.getElementById(`eduFinancingCard-${leadId}`);
  if (!el) return;
  const lead = (MOCK_LEADS[pipelineType] || []).find(l => l.id === leadId);
  if (lead) el.outerHTML = eduFinancingCardHtml(pipelineType, lead);
}
function dispositionSelectHtml(id) {
  return `<div>
    <label class="block text-xs font-semibold text-text-main mb-1">Disposition <span class="text-text-muted font-normal">(purpose of the call)</span></label>
    <select class="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white" id="${id}">
      <option value="">— Select disposition —</option>
      ${DISPOSITION_OPTIONS.map(o => `<option>${o}</option>`).join('')}
    </select>
  </div>`;
}
function nowLocalISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}
function isFutureDateTime(value) {
  return !!value && new Date(value).getTime() > Date.now();
}
function courseForLead(lead) {
  let hash = 0;
  for (const ch of lead.id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return COURSE_OPTIONS[hash % COURSE_OPTIONS.length];
}
function formatDMY(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}
function revealPhone(btn) {
  const num = `+91 ${Math.floor(70000 + Math.random() * 29999)}${Math.floor(10000 + Math.random() * 89999)}`;
  btn.outerHTML = `<div class="text-sm font-mono font-semibold">${num}</div>`;
}
const NOTE_TITLE_POOL = ['Voice mail', 'RNR', 'Call me later', 'Needs time', 'Follow-up Scheduled', 'Docs Discussion'];
function noteTitleFor(text) { return NOTE_TITLE_POOL[hashStr(text) % NOTE_TITLE_POOL.length]; }
function noteDateFor(i) {
  const d = new Date('2026-09-03');
  d.setDate(d.getDate() - i * 3);
  return d.toLocaleDateString('en-US', { month:'short', day:'2-digit' });
}
function noteAuthorFor(lead, i) { return i % 2 === 0 ? 'You' : lead.clName; }

function notesListHtml(lead) {
  const added = lead._addedNotes || [];
  const existing = lead.notes.map((n, i) => ({ title: noteTitleFor(n), body: n, date: noteDateFor(i), author: noteAuthorFor(lead, i) }));
  const all = [...added, ...existing];
  if (!all.length) return `<div class="text-xs text-text-muted py-2">No notes yet.</div>`;
  return all.map((note, i) => `
    <div class="py-2.5 ${i < all.length - 1 ? 'border-b border-border' : ''}">
      <div class="text-sm font-semibold text-text-main">${note.title}</div>
      ${note.body ? `<div class="text-xs text-text-main mt-1">${escHtml(note.body)}</div>` : ''}
      <div class="text-xs text-text-muted mt-1">${note.date} &nbsp;·&nbsp; ${note.author}</div>
    </div>`).join('');
}

function renderNotesSection(pipelineType, leadId) {
  const lead = (MOCK_LEADS[pipelineType] || []).find(l => l.id === leadId);
  if (!lead) return;
  const container = document.getElementById(`notesInline-${leadId}`);
  container.innerHTML = `
    <div>${notesListHtml(lead)}</div>
    <button class="text-xs font-semibold text-primary cursor-pointer mt-2" onclick="showAddNoteForm('${pipelineType}','${leadId}')">+ Add New Note</button>
    <div id="addNoteFormWrap-${leadId}"></div>`;
}

function fetchNotesInline(pipelineType, leadId) {
  renderNotesSection(pipelineType, leadId);
}

// ─── Sidebar Notes — always-expanded composer + history, matching production's lead sidebar ──
const NOTE_TYPE_OPTIONS = [
  'IELTS - RNR', 'IELTS - Plan Dropped', 'IELTS - Future Intake', 'IELTS - Preparation Not Started / Incomplete',
  'IELTS - Self-Booking Exam', 'IELTS - Arranging Booking Amount', 'IELTS - Not Mandatory', 'IELTS - Waiver Requested',
  'IELTS - Exam Booked/Given', 'IELTS - Exploring Other Exams', 'IELTS - Passport Unavailable',
  'Docs - Plan Dropped', 'Docs - Looking for Future Intake', 'Docs - Arranging Docs', 'Docs - Pursuing Bachelors/12th', 'Docs - RNR',
];

function sidebarNotesHtml(pipelineType, lead) {
  return `
    <div>${notesListHtml(lead)}</div>
    <div class="mt-3 pt-3 border-t border-border">
      <select class="w-full px-2.5 py-2 border border-border rounded-lg text-sm bg-white mb-2" id="noteType-${lead.id}">
        <option value="">Note type…</option>
        ${NOTE_TYPE_OPTIONS.map(o => `<option value="${escHtml(o)}">${escHtml(o)}</option>`).join('')}
      </select>
      <textarea class="w-full px-3 py-2 border border-border rounded-lg text-sm" id="noteInput-${lead.id}" placeholder="Add a note" rows="2" maxlength="500"></textarea>
      <div class="flex items-center justify-between mt-2">
        <button class="flex items-center gap-1.5 text-xs font-semibold text-text-muted cursor-pointer hover:text-text-main transition-colors" onclick="showToast('File attached.','info')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
          Attach File
        </button>
        <div class="flex gap-1.5">
          <button class="w-7 h-7 rounded-lg border border-border flex items-center justify-center cursor-pointer hover:bg-surface" title="Clear" onclick="document.getElementById('noteInput-${lead.id}').value='';document.getElementById('noteType-${lead.id}').value=''">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button class="w-7 h-7 rounded-lg text-white flex items-center justify-center cursor-pointer" style="background:#443EFF" title="Save" onclick="submitSidebarNote('${pipelineType}','${lead.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        </div>
      </div>
    </div>`;
}

function submitSidebarNote(pipelineType, leadId) {
  const lead = (MOCK_LEADS[pipelineType] || []).find(l => l.id === leadId);
  if (!lead) return;
  const noteInput = document.getElementById(`noteInput-${leadId}`);
  if (!noteInput || !noteInput.value.trim()) { showToast('Note cannot be empty.', 'error'); return; }
  const typeSelect = document.getElementById(`noteType-${leadId}`);
  const title = (typeSelect && typeSelect.value) || noteTitleFor(noteInput.value);
  if (!lead._addedNotes) lead._addedNotes = [];
  lead._addedNotes.unshift({ title, body: noteInput.value.trim(), date: 'Today', author: 'You' });
  const container = document.getElementById(`notesInline-${leadId}`);
  if (container) container.innerHTML = sidebarNotesHtml(pipelineType, lead);
  showToast('Note saved successfully.', 'success');
}

function showAddNoteForm(pipelineType, leadId) {
  const wrap = document.getElementById(`addNoteFormWrap-${leadId}`);
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="mt-3 pt-3 border-t border-border">
      <div class="mb-2.5">
        <label class="block text-xs font-semibold text-text-muted mb-1">Note *</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-lg text-sm" id="noteInput-${leadId}" placeholder="Enter your note (max 500 chars)" maxlength="500"></textarea>
      </div>
      <div class="flex gap-2">
        <button class="px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer" onclick="submitNote('${pipelineType}','${leadId}')">Save Note</button>
        <button class="px-3.5 py-1.5 border border-border text-xs font-semibold rounded-lg cursor-pointer" onclick="document.getElementById('addNoteFormWrap-${leadId}').innerHTML=''">Cancel</button>
      </div>
    </div>`;
}

function submitNote(pipelineType, leadId) {
  const lead = (MOCK_LEADS[pipelineType] || []).find(l => l.id === leadId);
  if (!lead) return;
  const noteInput = document.getElementById(`noteInput-${leadId}`);
  if (!noteInput || !noteInput.value.trim()) { showToast('Note cannot be empty.', 'error'); return; }
  if (!lead._addedNotes) lead._addedNotes = [];
  lead._addedNotes.unshift({ title: noteTitleFor(noteInput.value), date: 'Today', author: 'You' });
  renderNotesSection(pipelineType, leadId);
  showToast('Note saved successfully.', 'success');
}

// ─── Lead Detail — monochrome line icons (no emoji, matches production's icon style) ──
const PL_ICON_PATHS = {
  flag: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 3v18M3 4.5h13l-2 3.5 2 3.5H3"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path stroke-linecap="round" d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/>',
  clipboard: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5h6a1 1 0 011 1V6h-8v-.5a1 1 0 011-1z"/><rect x="5" y="6" width="14" height="15" rx="2"/><path stroke-linecap="round" d="M9 12h6M9 16h6"/>',
  academic: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3l10 5-10 5L2 8l10-5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"/>',
  briefcase: '<rect x="3" y="8" width="18" height="12" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"/>',
  book: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 5.5c2-1 5-1 8 0v13c-3-1-6-1-8 0v-13zM20 5.5c-2-1-5-1-8 0v13c3-1 6-1 8 0v-13z"/>',
  rupee: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 5h10M7 9h10M7 5c4 0 6 1.3 6 4s-2 4-6 4h-1l7 7"/>',
  pencil: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 4.5l3 3L7 20l-4 1 1-4L16.5 4.5z"/>',
  star: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3L3 9.5l6.4-.6L12 3z"/>',
  idcard: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path stroke-linecap="round" d="M6 16c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5M14.5 9.5h4M14.5 13h4"/>',
  chat: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.4 8.4 0 01-8.5 8.4c-1.3 0-2.6-.3-3.7-.9L3 20l1.1-5.6a8.4 8.4 0 01-.9-3.9A8.4 8.4 0 0112.5 2a8.4 8.4 0 018.5 9.5z"/>',
  sparkle: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
};
function plIcon(key, size) {
  size = size || 18;
  const path = PL_ICON_PATHS[key] || PL_ICON_PATHS.flag;
  return `<svg class="pl-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${path}</svg>`;
}

function openLeadDetail(pipelineType, leadId) {
  const leads = MOCK_LEADS[pipelineType] || [];
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;

  closeDrawer();
  if (botOpen) toggleBot();

  state.leadDetailPipeline = pipelineType;
  state.leadDetailLeadId = leadId;
  vasState = { selected: new Set(), applicationByService: {}, day: 0, slot: null };

  document.getElementById('leadDetailName').textContent = lead.name;
  document.getElementById('leadDetailSubline').innerHTML = `
    <span class="inline-flex items-center gap-1.5">${plIcon('flag', 13)}${lead.status.replace(/ /g, '_').toUpperCase()}</span>
    <span class="inline-flex items-center gap-1.5 ml-3">${plIcon('calendar', 13)}${lead.intake}</span>
    <span class="inline-flex items-center gap-1.5 ml-3">${plIcon('globe', 13)}${lead.country}</span>`;
  document.getElementById('leadDetailActions').innerHTML = '';

  document.getElementById('leadDetailTabBar').innerHTML = buildLeadTabBarHtml('profile');
  document.getElementById('leadDetailSidebar').innerHTML = buildLeadSidebarHtml(pipelineType, lead);
  document.getElementById('leadDetailSidebar').scrollTop = 0;
  document.getElementById('leadDetailPage').classList.remove('hidden');
  switchLeadTab('profile');
}

function currentLeadDetail() {
  const lead = (MOCK_LEADS[state.leadDetailPipeline] || []).find(l => l.id === state.leadDetailLeadId);
  return { pipelineType: state.leadDetailPipeline, lead };
}

function buildLeadTabBarHtml(activeTab) {
  return LEAD_DETAIL_TABS.map(t => `<button class="lead-tab ${t.key === activeTab ? 'active' : ''}" onclick="switchLeadTab('${t.key}')">${t.label}</button>`).join('');
}

function switchLeadTab(tabKey) {
  const { pipelineType, lead } = currentLeadDetail();
  if (!lead) return;
  document.querySelectorAll('#leadDetailTabBar .lead-tab').forEach((btn, i) => btn.classList.toggle('active', LEAD_DETAIL_TABS[i].key === tabKey));
  const builders = {
    profile: buildProfileTabHtml,
    appointments: buildAppointmentsTabHtml,
    shortlist: buildShortlistTabHtml,
    applications: buildApplicationsTabHtml,
    tasks: buildTasksTabHtml,
    calllogs: buildCallLogsTabHtml,
    activitylogs: buildActivityLogsTabHtml,
    visa: buildVisaTabHtml,
  };
  const fn = builders[tabKey] || buildProfileTabHtml;
  document.getElementById('leadDetailContent').innerHTML = fn(pipelineType, lead);
  document.getElementById('leadDetailContent').scrollTop = 0;
}

function buildLeadSidebarHtml(pipelineType, lead) {
  return `
    <div class="rounded-xl mb-4" style="background:#F3F3FF;padding:14px">
      <div class="pl-tile mb-4">
        <div class="flex items-center justify-between w-full mb-1">
          <span class="flex items-center gap-2"><span class="text-lg">⭐</span><span class="text-sm font-semibold" style="color:#4F46E5">Premium Plan</span></span>
          <button class="w-6 h-6 rounded flex items-center justify-center text-white flex-shrink-0" style="background:#443EFF" onclick="showToast('Premium plan setup coming soon.','info')">+</button>
        </div>
        <div class="text-xs" style="color:#656E7F">No plan assigned yet. Click + to set up a premium plan for this student.</div>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <img src="assets/icons/contacts.svg" width="16" height="16" alt=""/>
        <span class="text-sm" style="color:#1C1C1C">${lead.id}</span>
        <img src="assets/icons/copy_icons.svg" width="12" height="12" alt="" class="cursor-pointer" onclick="navigator.clipboard?.writeText('${lead.id}');showToast('Lead ID copied.','info')"/>
      </div>
      <div class="flex items-center gap-2 mb-2.5">
        <img src="assets/icons/message_icons.svg" width="16" height="16" alt=""/>
        <button class="pl-btn-outline flex-1" onclick="showToast('Opening email...','info')">View Email</button>
      </div>
      <div class="flex items-center gap-2 mb-4">
        <img src="assets/icons/call_icon.svg" width="16" height="16" alt=""/>
        <button class="pl-btn-outline flex-1" onclick="revealPhone(this)">View Phone Number</button>
        <img src="assets/icons/call_icon_new.svg" width="20" height="20" alt="" class="cursor-pointer flex-shrink-0" onclick="showToast('Calling ${escHtml(lead.name)}…','info')" title="Call"/>
        <img src="assets/icons/whatsapp-color.svg" width="20" height="20" alt="" class="cursor-pointer flex-shrink-0 rounded border" style="border-color:#E2E8F0" onclick="showToast('Opening WhatsApp…','info')" title="WhatsApp"/>
      </div>

      <div class="mb-2.5">
        <label class="block text-xs mb-1" style="color:#656E7F">Prep requirement status</label>
        <div class="w-full px-3 py-2.5 border rounded text-sm bg-white font-medium" style="border-color:#CCC">${lead.status}</div>
      </div>
      <div class="mb-2.5">
        <label class="block text-xs mb-1" style="color:#656E7F">Prospect Status</label>
        <div class="w-full px-3 py-2.5 border rounded text-sm bg-white" style="border-color:#CCC;color:#94A3B8">Prospect Status</div>
      </div>
      <div class="mb-2.5">
        <label class="block text-xs mb-1" style="color:#656E7F">Test Prep Enrollment Status</label>
        <div class="w-full px-3 py-2.5 border rounded text-sm bg-white" style="border-color:#CCC;color:#94A3B8">Test Prep Enrollment Status</div>
      </div>
      <div class="mb-4">
        <label class="block text-xs mb-1" style="color:#656E7F">Test Prep Demo Type</label>
        <div class="w-full px-3 py-2.5 border rounded text-sm bg-white" style="border-color:#CCC;color:#94A3B8">Test Prep Demo Type</div>
      </div>

      <div class="grid grid-cols-2 gap-2 mb-3">
        <div class="pl-tile">
          <div class="flex items-center gap-1.5 text-xs font-semibold mb-1" style="color:#443EFF"><img src="assets/icons/call_icon.svg" width="12" height="12" alt="" style="filter:invert(21%) sepia(89%) saturate(4933%) hue-rotate(246deg)"/>Counsellor</div>
          <div class="text-sm font-semibold">${escHtml(lead.clName)}</div>
        </div>
        <div class="pl-tile relative">
          <div class="flex items-center gap-1.5 text-xs font-semibold mb-1" style="color:#443EFF"><img src="assets/icons/call_icon.svg" width="12" height="12" alt="" style="filter:invert(21%) sepia(89%) saturate(4933%) hue-rotate(246deg)"/>RM</div>
          <div class="text-sm font-semibold">Arjun Patel</div>
          <img src="assets/icons/edit_button_with_pen_sign.svg" width="18" height="18" alt="" class="absolute top-2 right-2 cursor-pointer" onclick="showToast('RM reassignment is admin-only.','info')"/>
        </div>
      </div>

      <button class="pl-btn-primary w-full flex items-center justify-center gap-2 mb-2" onclick="showToast('Video call scheduling coming soon.','info')">Schedule Video Call</button>
      <button class="pl-btn-secondary w-full flex items-center justify-center gap-2 mb-2" onclick="showToast('Test Prep demo booking is a counsellor action.','info')" disabled>Book Test Prep Demo</button>
      <button class="pl-btn-primary w-full flex items-center justify-center gap-2" onclick="openVasModal('${pipelineType}','${lead.id}')">VAS Interest${(VAS_INTERESTS_MOCK[lead.id] || []).length ? ` <span class="rounded-full text-[10px] font-bold flex items-center justify-center" style="background:rgba(255,255,255,.25);width:18px;height:18px">${VAS_INTERESTS_MOCK[lead.id].length}</span>` : ''}</button>
    </div>

    <div class="grid grid-cols-2 gap-3 text-xs mb-1 pt-3" style="border-top:1px solid #E2E8F0">
      <div class="flex items-start gap-1.5">
        <img src="assets/icons/perm_phone_msg.svg" width="14" height="14" alt="" class="mt-0.5"/>
        <div><div style="color:#656E7F">Last CL Connected</div><div class="font-semibold mt-0.5">${lead.lastConnect || '—'}</div></div>
      </div>
      <div class="flex items-start gap-1.5">
        <img src="assets/icons/perm_phone_msg.svg" width="14" height="14" alt="" class="mt-0.5"/>
        <div><div style="color:#656E7F">Last RM Connected</div><div class="font-semibold mt-0.5">11/09/2026 11:19 am</div></div>
      </div>
    </div>
    <button class="pl-edit-link text-xs mt-1.5 mb-3" onclick="this.nextElementSibling.classList.toggle('hidden')">Show more<img src="assets/icons/down_blue.svg" width="12" height="12" alt=""/></button>
    <div class="hidden">
      <div class="grid grid-cols-2 gap-3 text-xs mb-3">
        <div>
          <div style="color:#656E7F">Counsellor</div>
          <div class="font-semibold mt-0.5">${escHtml(lead.clName)}</div>
        </div>
        <div>
          <div style="color:#656E7F">Relationship Manager</div>
          <div class="font-semibold mt-0.5">Arjun Patel</div>
        </div>
      </div>
      <button class="pl-edit-link text-xs mb-3" onclick="this.nextElementSibling.classList.toggle('hidden')">Show more<img src="assets/icons/down_blue.svg" width="12" height="12" alt=""/></button>
      <div class="hidden grid grid-cols-2 gap-3 text-xs mb-4">
        <div>
          <div style="color:#656E7F">IELTS Status</div>
          <div class="font-semibold mt-0.5">Not Decided</div>
        </div>
        <div>
          <div style="color:#656E7F">Score</div>
          <div class="font-semibold mt-0.5">—</div>
        </div>
        <div>
          <div style="color:#656E7F">Passport Status</div>
          <div class="font-semibold mt-0.5">Bearer</div>
        </div>
        <div>
          <div style="color:#656E7F">Document Status</div>
          <div class="font-semibold mt-0.5">Partially Uploaded</div>
        </div>
      </div>
    </div>

    <div class="pt-3" style="border-top:1px solid #E2E8F0">
      <div class="text-xs font-semibold mb-1.5">Notes</div>
      <div id="notesInline-${lead.id}">${sidebarNotesHtml(pipelineType, lead)}</div>
    </div>`;
}

function profileFieldCardHtml(iconKey, title, bodyHtml) {
  return `
    <div class="pl-card mb-3">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          ${plIcon(iconKey, 20)}
          <span class="text-sm font-bold text-[#1F1F1F]">${title}</span>
          <span class="pl-badge pl-badge-completed">Completed</span>
        </div>
        <button class="pl-edit-link" onclick="showToast('Editing is done by the counsellor in the production CRM.','info')">${plIcon('pencil', 13)}Edit</button>
      </div>
      <div class="text-sm text-[#1F1F1F] space-y-1.5">${bodyHtml}</div>
    </div>`;
}

function buildProfileTabHtml(pipelineType, lead) {
  const m = studentProfileMock(lead);
  const course = courseForLead(lead);
  return `
    <div class="pl-card mb-4 flex items-center justify-between flex-wrap gap-3" style="padding:24px 32px">
      <div class="flex items-center gap-3">
        <span class="text-base font-bold text-[#1F1F1F]">App Status</span>
        <span class="pl-badge" style="background:${m.appStatus === 'Downloaded' ? '#E6F3E1' : '#FEF2F2'};color:${m.appStatus === 'Downloaded' ? '#3C5B31' : '#DC2626'};border-color:${m.appStatus === 'Downloaded' ? '#A9E4BE' : '#FCA5A5'}">${m.appStatus}</span>
      </div>
      <div class="flex gap-2">
        <button class="pl-btn-outline flex items-center gap-1.5" onclick="showToast('Status refreshed.','info')">${plIcon('globe', 13)}Refresh Status</button>
        <button class="pl-btn-primary" onclick="showToast('App link sent to student.','success')">Send App Link</button>
      </div>
    </div>

    ${profileFieldCardHtml('clipboard', 'Post Study Outcome', `
      <div><strong>Career Preference</strong> — ${m.careerPreference}</div>
      <div>What career outcome is the student aiming for after completing masters abroad? — ${m.careerOutcome}</div>
    `)}

    ${profileFieldCardHtml('academic', 'Academic and backlog details', `
      <div class="mb-3"><strong>Highest academic qualification</strong> — ${m.qualification}</div>
      <div class="pl-subcard mb-2">
        <div class="text-sm font-bold mb-2">Bachelor's</div>
        <div><strong>Specialization</strong> — ${m.specialization}</div>
        <div><strong>Year of graduation</strong> — ${m.gradYear}</div>
        <div><strong>Grading system</strong> — ${m.grading}</div>
        <div><strong>No. of Backlogs</strong> — ${m.backlogs}</div>
      </div>
      <div class="pl-subcard">
        <div class="text-sm font-bold mb-2">12th Grade/Diploma</div>
        <div><strong>Overall grade</strong> — ${m.twelfthGrade}%</div>
      </div>
    `)}

    ${profileFieldCardHtml('clipboard', 'Servicing Details', `<div><strong>Servicing Type</strong> — Paid Service</div>`)}

    ${profileFieldCardHtml('calendar', 'Gap Years', `<div>Did the student have gap years in their entire study/career? — ${m.gapYears}</div>`)}

    ${profileFieldCardHtml('briefcase', 'Work Experience', `<div>Total work experience — ${m.workExMonths} months</div>`)}

    ${profileFieldCardHtml('book', 'Course Details', `
      <div><strong>Degree</strong> — ${m.degree}</div>
      <div><strong>Preferred course</strong> — ${course}</div>
    `)}

    ${profileFieldCardHtml('rupee', 'Budget', `
      <div><strong>Overall budget</strong> — Rs ${m.budgetTotal.toLocaleString('en-IN')}</div>
      <div><strong>Overall tuition fee budget</strong> — Rs ${m.tuitionBudget.toLocaleString('en-IN')}</div>
      <div><strong>How will you finance your education?</strong> — ${m.financing}</div>
    `)}

    ${eduFinancingCardHtml(pipelineType, lead)}

    ${profileFieldCardHtml('globe', 'Study Destination', `
      <div><strong>Country</strong> — ${lead.country}</div>
      <div><strong>Intake</strong> — ${lead.intake}</div>
    `)}

    ${profileFieldCardHtml('pencil', 'English Exam', `
      <div><strong>Given</strong> — ${m.examGiven ? 'Yes' : 'No'}</div>
      <div><strong>Name of exam</strong> — ${m.examName}</div>
      <div><strong>Exam status</strong> — ${m.examStatus}</div>
    `)}

    ${profileFieldCardHtml('star', 'Preference', `
      <div><strong>Location preference</strong> — ${m.locationPreference}</div>
      <div><strong>University preference</strong> — ${m.universityPreference}</div>
    `)}

    ${profileFieldCardHtml('idcard', 'Passport status', `<div>Do you currently have a valid passport? — ${m.passportStatus}</div>`)}

    ${profileFieldCardHtml('chat', 'WhatsApp Group Link', `
      <div class="flex items-center justify-between flex-wrap gap-2 p-3 rounded-lg border border-[#E2E8F0]" style="background:#F8F8F8">
        <div>
          <div class="text-xs font-semibold">Leap Scholar | ${escHtml(lead.name)} | ${lead.id}</div>
          <span class="pl-badge inline-flex mt-1" style="background:${m.waGroupActive ? '#E6F3E1' : '#FEF2F2'};color:${m.waGroupActive ? '#3C5B31' : '#DC2626'};border-color:${m.waGroupActive ? '#A9E4BE' : '#FCA5A5'}">${m.waGroupActive ? 'ACTIVE' : 'NOT CREATED'}</span>
        </div>
        <div class="flex gap-2">
          <button class="pl-btn-outline" onclick="showToast('Group link copied.','info')">Copy Link</button>
          <button class="pl-btn-outline" onclick="showToast('Invite resent to student.','success')">Resend Invite</button>
        </div>
      </div>
    `)}

    ${profileFieldCardHtml('sparkle', 'Profile summary from the call', `
      <div class="text-xs text-[#656E7F] mb-2">Auto-generated from call transcripts — illustrative placeholder for this demo, not a live summary.</div>
      <div class="space-y-2 text-xs">
        <div><strong>Academic Journey</strong> — ${m.qualification} in ${m.specialization}, graduated ${m.gradYear}.</div>
        <div><strong>Study Abroad Plan</strong> — ${lead.country}, ${lead.intake} intake, ${course}.</div>
        <div><strong>Must-Haves</strong> — Budget around Rs ${m.tuitionBudget.toLocaleString('en-IN')}, ${m.locationPreference.toLowerCase()}.</div>
        <div><strong>Good-to-Haves</strong> — ${m.universityPreference}.</div>
        <div><strong>Info to Confirm</strong> — Exact grading scheme and backlog documentation.</div>
      </div>
    `)}`;
}

// ─── Appointments tab ─────────────────────────────────────────────────────────
function buildAppointmentsTabHtml(pipelineType, lead) {
  return `
    <div class="pl-card">
      <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div class="text-base font-bold text-[#1F1F1F]">Counsellor</div>
        <div class="flex items-center gap-2">
          <select class="px-3 py-2 border text-sm bg-white" id="apptMeetingType-${lead.id}">
            <option value="">Select…</option>
            <option>Shortlist Discussion</option>
            <option>Welcome Call</option>
            <option>Office Hour</option>
            <option>Shortlist Revision</option>
            <option>Admit Discussion</option>
            <option>College Finalisation</option>
          </select>
          <button class="pl-btn-primary" onclick="bookVoMeeting('${lead.id}')">BOOK VO MEETING</button>
        </div>
      </div>
      <div class="overflow-x-auto border border-[#C6CBD2] rounded-lg">
        <table class="w-full text-xs">
          <thead><tr style="background:#F5F5F7" class="text-[10px] uppercase font-semibold text-[#656E7F]">
            <th class="px-3 py-2 text-left">Meeting Date</th><th class="px-3 py-2 text-left">Meeting Time</th><th class="px-3 py-2 text-left">Meeting Type</th><th class="px-3 py-2 text-left">Counsellor Name</th><th class="px-3 py-2 text-left">Duration</th><th class="px-3 py-2 text-left">Autobooked</th><th class="px-3 py-2 text-left">Student Attended</th>
          </tr></thead>
          <tbody id="apptTableBody-${lead.id}">
            <tr><td colspan="7" class="text-center text-[#656E7F] py-6">No upcoming appointments</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="voMeetingModalWrap-${lead.id}"></div>`;
}

function bookVoMeeting(leadId) {
  const sel = document.getElementById(`apptMeetingType-${leadId}`);
  if (!sel || !sel.value) { showToast('Select meeting type', 'error'); return; }
  const wrap = document.getElementById(`voMeetingModalWrap-${leadId}`);
  wrap.innerHTML = `
    <div class="pl-card mt-4">
      <div class="text-center mb-4">
        <div class="text-lg font-bold text-[#1F1F1F]">Meet 1:1 with your Counsellor</div>
        <div class="text-xs text-[#656E7F] mt-1">LeapScholar's Counsellors are always happy to hear from you!</div>
      </div>
      ${vasDayPickerHtml('voMeeting', leadId)}
      <div class="grid grid-cols-4 gap-2 mt-4" id="voMeetingSlots-${leadId}"></div>
      <button class="w-full mt-4 py-2.5 rounded-lg text-sm font-semibold text-white cursor-pointer opacity-50" id="voMeetingConfirm-${leadId}" disabled onclick="confirmVoMeeting('${leadId}')" style="background:#94A3B8">Confirm Slot</button>
    </div>`;
  renderVoMeetingSlots(leadId, 0);
}

function vasDayPickerHtml(prefix, leadId) {
  const days = nextThreeDays();
  return `<div class="flex items-center justify-center gap-2" id="${prefix}Days-${leadId}">
    ${days.map((d, i) => `<div class="vas-day-pill ${i === 0 ? 'active' : ''}" id="${prefix}Day-${leadId}-${i}" onclick="select${prefix === 'voMeeting' ? 'VoMeeting' : 'Vas'}Day('${leadId}',${i})">
      <div>${d.dayNum}</div><div style="font-weight:600;font-size:10px">${d.monthShort}</div>
    </div>`).join('')}
  </div>`;
}

function nextThreeDays() {
  const out = [];
  for (let i = 0; i < 3; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    out.push({ dayNum: d.getDate(), monthShort: d.toLocaleDateString('en-US', { month: 'short' }), full: d });
  }
  return out;
}

function slotsForDay(dayIndex) {
  // Today: first slot is at least 1 hour from now, rounded up to the next full hour
  // (so marking interest at 4:00pm surfaces slots starting 5:00pm). Future days: 11am–8pm.
  // No same-day slots at all once it's past 6pm. Hourly cadence throughout.
  const slots = [];
  let curTotalMin;
  if (dayIndex === 0) {
    const now = new Date();
    if (now.getHours() >= 18) return [];
    curTotalMin = Math.ceil((now.getHours() * 60 + now.getMinutes() + 60) / 60) * 60;
  } else {
    curTotalMin = 11 * 60;
  }
  const endTotalMin = 20 * 60;
  while (curTotalMin <= endTotalMin) {
    const h = Math.floor(curTotalMin / 60);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? 'AM' : 'PM';
    slots.push(`${h12}:00 ${ampm}`);
    curTotalMin += 60;
  }
  return slots;
}

function renderVoMeetingSlots(leadId, dayIndex) {
  const slots = slotsForDay(dayIndex);
  const grid = document.getElementById(`voMeetingSlots-${leadId}`);
  if (!grid) return;
  grid.innerHTML = slots.length ? slots.map(s => `
    <div class="vas-slot-pill" onclick="selectVoMeetingSlot('${leadId}',this,'${s}')">
      <div class="vas-slot-time">${s}</div><div class="vas-slot-tag">Available</div>
    </div>`).join('') : `<div class="col-span-4 text-center text-xs text-text-muted py-4">No slots left today — try tomorrow.</div>`;
}

function selectVoMeetingDay(leadId, dayIndex) {
  document.querySelectorAll(`[id^="voMeetingDay-${leadId}-"]`).forEach(el => el.classList.remove('active'));
  document.getElementById(`voMeetingDay-${leadId}-${dayIndex}`).classList.add('active');
  renderVoMeetingSlots(leadId, dayIndex);
  const btn = document.getElementById(`voMeetingConfirm-${leadId}`);
  btn.disabled = true; btn.style.opacity = 0.5; btn.style.background = '#94A3B8';
}

function selectVoMeetingSlot(leadId, el, slotLabel) {
  document.querySelectorAll(`#voMeetingSlots-${leadId} .vas-slot-pill`).forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const btn = document.getElementById(`voMeetingConfirm-${leadId}`);
  btn.disabled = false; btn.style.opacity = 1; btn.style.background = '#443EFF';
  btn.dataset.slot = slotLabel;
}

function confirmVoMeeting(leadId) {
  const btn = document.getElementById(`voMeetingConfirm-${leadId}`);
  const meetingType = document.getElementById(`apptMeetingType-${leadId}`).value;
  const tbody = document.getElementById(`apptTableBody-${leadId}`);
  tbody.innerHTML = `<tr><td class="px-3 py-2.5">${new Date().toLocaleDateString('en-GB')}</td><td class="px-3 py-2.5">${btn.dataset.slot}</td><td class="px-3 py-2.5">${meetingType}</td><td class="px-3 py-2.5">${escHtml(currentLeadDetail().lead.clName)}</td><td class="px-3 py-2.5">30 mins</td><td class="px-3 py-2.5">No</td><td class="px-3 py-2.5">—</td></tr>`;
  document.getElementById(`voMeetingModalWrap-${leadId}`).innerHTML = '';
  showToast('VO Meeting booked.', 'success');
}

// ─── Shortlist tab ────────────────────────────────────────────────────────────
function buildShortlistTabHtml(pipelineType, lead) {
  const apps = applicationsForLead(lead);
  const badgesPool = ['Course Match', 'Ambitious', 'Affordable', 'Placement Support', 'Popular'];
  return `
    <div class="pl-card mb-4">
      <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
        <div class="text-lg font-bold text-[#1F1F1F]">College Shortlist</div>
        <div class="flex gap-2 flex-wrap">
          <button class="pl-btn-outline" onclick="showToast('Country plan opened.','info')">View Country Plan</button>
          <button class="pl-btn-outline" onclick="showToast('Shortlist downloading…','info')">Download Shortlist</button>
          <button class="pl-btn-primary" onclick="showToast('Shortlist created.','success')">+ Create a Shortlist</button>
        </div>
      </div>
      <div class="flex gap-5 border-b border-[#E2E8F0] mb-4 text-xs font-semibold text-[#656E7F]">
        <div class="pb-2 border-b-4" style="border-color:#3F47F5;color:#443EFF">Course Shortlist (${apps.length})</div>
        <div class="pb-2">Student Liked (0)</div>
        <div class="pb-2">Colleges Rejected (0)</div>
        <div class="pb-2">ISL Review (0)</div>
      </div>
      <div class="space-y-3">
        ${apps.map((a, i) => `
          <div class="border border-[#C6CBD2] rounded-lg p-3.5">
            <div class="font-bold text-sm">${a.university}</div>
            <div class="text-xs text-[#656E7F] mb-2">${a.course} · ${lead.country}</div>
            <div class="flex gap-1.5 flex-wrap mb-2">
              ${badgesPool.slice(0, 3 + (i % 2)).map(b => `<span class="pl-badge" style="background:#F5F5F7;color:#656E7F;border-color:#E2E8F0">${b}</span>`).join('')}
            </div>
            <div class="text-[11px] text-[#656E7F]">Intakes Status: <strong>${a.intakeStatus}</strong></div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ─── Applications tab ─────────────────────────────────────────────────────────
function buildApplicationsTabHtml(pipelineType, lead) {
  const apps = applicationsForLead(lead);
  return `
    <div class="pl-card">
      <div class="text-base font-bold text-[#1F1F1F] mb-4">${escHtml(lead.name)}'s Applications</div>
      <div class="flex gap-5 border-b border-[#E2E8F0] mb-4 text-xs font-semibold text-[#656E7F]">
        <div class="pb-2 border-b-4" style="border-color:#3F47F5;color:#443EFF">Pre-Application (${apps.length})</div>
        <div class="pb-2">Post-Application (0)</div>
      </div>
      <div class="space-y-3">
        ${apps.map(a => `
          <div class="border border-[#C6CBD2] rounded-lg p-3.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div class="font-bold text-sm">${a.university}</div>
                <div class="text-xs text-[#656E7F]">${a.course}</div>
                <div class="text-[10px] text-[#656E7F] font-mono mt-1">App ID: ${a.id}</div>
              </div>
              <span class="text-xs font-bold px-2 py-1 rounded border border-[#CCC]">${a.priority}</span>
            </div>
            <div class="text-[11px] text-[#656E7F] mt-2">Intakes Status: <strong>${a.intakeStatus}</strong></div>
            <div class="mt-2 pl-badge" style="background:#FFF7ED;color:#C2410C;border-color:#FDBA74">${a.status}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

// ─── Tasks tab ────────────────────────────────────────────────────────────────
const TASK_TAB_POOL = ['Loan VC Book & Join', 'Boost Referral - STI Done', 'Student Reference Id Required', 'Leads with 1 STI', 'Application Filing', 'STI Ready Doc Complete Apps'];
function buildTasksTabHtml(pipelineType, lead) {
  const h = hashStr(lead.id);
  const owners = ['You', lead.clName];
  return `
    <div class="pl-card">
      <div class="flex gap-5 border-b border-[#E2E8F0] mb-4 text-xs font-semibold text-[#656E7F]">
        <div class="pb-2 border-b-4" style="border-color:#3F47F5;color:#443EFF">Open Tasks</div>
        <div class="pb-2">Closed Tasks</div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${TASK_TAB_POOL.map((t, i) => `
          <div class="border border-[#C6CBD2] rounded-lg p-3">
            <div class="text-sm font-bold mb-2">${t}</div>
            <table class="w-full text-[11px]">
              <thead><tr class="text-[#656E7F] uppercase"><th class="text-left font-semibold">Due Date</th><th class="text-left font-semibold">Status</th><th class="text-left font-semibold">Owner</th></tr></thead>
              <tbody><tr><td class="py-1 text-success font-semibold">${formatDMY(lead.caDate)}</td><td class="py-1">Pending</td><td class="py-1">${owners[(h + i) % 2]}</td></tr></tbody>
            </table>
          </div>`).join('')}
      </div>
    </div>`;
}

// ─── Call Logs tab ────────────────────────────────────────────────────────────
function buildCallLogsTabHtml(pipelineType, lead) {
  const h = hashStr(lead.id);
  const rows = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - i * 2);
    return { owner: i % 2 === 0 ? lead.clName : 'Arjun Patel', role: i % 2 === 0 ? 'COUNSELLOR' : 'RELATIONSHIP_MANAGER', date: d.toLocaleDateString('en-GB'), time: `${10 + ((h + i) % 8)}:${(i * 7) % 60 < 10 ? '0' : ''}${(i * 7) % 60} ${(h + i) % 2 ? 'AM' : 'PM'}`, dur: `00:${10 + (h + i) % 40}`, ring: (h + i * 3) % 60 };
  });
  return `
    <div class="pl-card" style="padding:0;overflow:hidden">
      <table class="w-full text-xs">
        <thead><tr style="background:#F5F5F7" class="text-[10px] uppercase font-semibold text-[#656E7F]">
          <th class="px-3 py-2.5 text-left">Call Owner</th><th class="px-3 py-2.5 text-left">Role</th><th class="px-3 py-2.5 text-left">Lead Stage</th><th class="px-3 py-2.5 text-left">Start Time</th><th class="px-3 py-2.5 text-left">Duration (mins)</th><th class="px-3 py-2.5 text-left">Ringing Time (secs)</th>
        </tr></thead>
        <tbody>
          ${rows.map(r => `<tr class="border-t border-[#E2E8F0]"><td class="px-3 py-2.5 font-semibold">${escHtml(r.owner)}</td><td class="px-3 py-2.5">${r.role}</td><td class="px-3 py-2.5">${lead.status}</td><td class="px-3 py-2.5">${r.date} ${r.time}</td><td class="px-3 py-2.5">${r.dur}</td><td class="px-3 py-2.5">${r.ring}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

// ─── Activity Logs tab ────────────────────────────────────────────────────────
function buildActivityLogsTabHtml(pipelineType, lead) {
  const entries = [
    { action: `Lead stage updated to ${lead.status}`, by: lead.clName },
    { action: `Follow-up date set to ${formatDMY(lead.caDate)}`, by: 'Arjun Patel' },
    { action: 'Note added', by: lead.clName },
    { action: 'Servicing Type confirmed as Paid Service', by: lead.clName },
  ];
  return `
    <div class="pl-card">
      <div class="activity-log">
        ${entries.map((e, i) => `<div class="activity-item"><span class="activity-dot"></span><div class="activity-content"><p class="activity-action">${e.action}</p><p class="activity-time">by ${escHtml(e.by)} · ${i === 0 ? 'Today' : `${i} day(s) ago`}</p></div></div>`).join('')}
      </div>
    </div>`;
}

// ─── Visa Status tab ──────────────────────────────────────────────────────────
function buildVisaTabHtml(pipelineType, lead) {
  return `
    <div class="pl-card p-10 text-center">
      <div class="text-base font-bold text-[#1F1F1F] mb-4">Start Visa Application</div>
      <button class="pl-btn-primary" onclick="showToast('Visa request raised.','success')">Raise Visa Request</button>
    </div>`;
}

// ─── VAS Interest modal — 3-step wizard (Interested In → Details → Slot) ──────
// Mirrors production's "Select a Plan" → "Configure" pattern: fixed-width dialog,
// breadcrumb header, a "Back to X" link, a lavender summary box, sticky footer.
let vasWizardStep = 1;

function openVasModal(pipelineType, leadId) {
  const leads = MOCK_LEADS[pipelineType] || [];
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;

  const saved = VAS_KYC_MOCK[leadId] || {};
  vasState = {
    leadId, pipelineType, selected: new Set(), applicationByService: {}, day: 0, slot: null,
    aadhaarFront: saved.aadhaarFront || '', aadhaarBack: saved.aadhaarBack || '', panFront: saved.panFront || '',
    accommodationType: saved.accommodationType || '',
    paymentType: '', amount: '', currency: '', payer: '',
    departureDate: '', destinationCountry: lead.country || '',
  };
  vasWizardStep = 1;
  renderVasWizard();
  document.getElementById('vasModal').classList.remove('hidden');
  document.getElementById('vasModal').classList.add('flex');
}

function closeVasModal() {
  document.getElementById('vasModal').classList.add('hidden');
  document.getElementById('vasModal').classList.remove('flex');
}

function vasNeedsConfigStep() {
  return vasState.selected.has('remittance') || vasState.selected.has('accommodation') || vasState.selected.has('loan')
    || vasState.selected.has('flight') || vasState.selected.has('sim') || vasState.selected.has('forex');
}

// Mandatory-field gate for Step 2 — Remittance needs Payment Type/Amount/Currency/Payer;
// Flight/SIM/Forex need Destination Country. Everything else in Step 2 stays optional.
function vasStep2Valid() {
  if (vasState.selected.has('remittance')) {
    return !!(vasState.paymentType && vasState.amount && vasState.currency && vasState.payer);
  }
  if (vasState.selected.has('flight') || vasState.selected.has('sim') || vasState.selected.has('forex')) {
    return !!vasState.destinationCountry;
  }
  return true;
}

function updateVasStep2NextBtn() {
  const btn = document.getElementById('vasStep2Next');
  if (!btn) return;
  const ok = vasStep2Valid();
  btn.disabled = !ok;
  btn.style.background = ok ? '#443EFF' : '#94A3B8';
}

// Loan (Education Financing) doesn't need a call slot — its Request button (shown in Step 2)
// handles fulfillment directly. If it's the only thing selected, skip Step 3 entirely.
function vasNeedsSlotStep() {
  return [...vasState.selected].some(k => k !== 'loan');
}

function renderVasWizard() {
  const { lead } = currentLeadDetail();
  if (!lead) return;
  if (vasWizardStep === 1) renderVasStep1(lead);
  else if (vasWizardStep === 2) renderVasStep2(lead);
  else if (vasWizardStep === 3) renderVasStep3(lead);
  else if (vasWizardStep === 'detail') renderVasDetailStep(lead);
}

function vasGoToStep(step) {
  vasWizardStep = step;
  renderVasWizard();
}

function viewVasHistoryDetail(leadId, idx) {
  vasState.viewingIndex = idx;
  vasWizardStep = 'detail';
  renderVasWizard();
}

// ── Detail view: read-only recap of one already-captured interest ──
function renderVasDetailStep(lead) {
  const entry = (VAS_INTERESTS_MOCK[lead.id] || [])[vasState.viewingIndex];
  document.getElementById('vasModalHeader').innerHTML = `
    <div class="px-5 pt-4 pb-3 border-b border-gray-50 flex items-center justify-between">
      <p class="text-xs text-[#64748B]">VAS Interest <span class="mx-1">›</span><span class="text-[#443EFF] font-medium ml-1">Captured Interest</span></p>
      <p class="text-xs font-semibold text-[#0F172A]">${escHtml(lead.name)} (${lead.id})</p>
    </div>
    <button type="button" class="px-5 pt-3 pb-4 text-sm text-[#443EFF] hover:text-[#3630D6] flex items-center gap-1 transition-colors font-semibold" onclick="vasGoToStep(1)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>Back to services
    </button>`;

  if (!entry) {
    document.getElementById('vasModalBody').innerHTML = `<div class="py-8 text-center text-sm text-[#94A3B8]">No details found.</div>`;
    document.getElementById('vasModalFooter').innerHTML = `<button class="flex-1 h-10 rounded-lg text-white text-sm font-semibold" style="background:#443EFF" onclick="closeVasModal()">Close</button>`;
    return;
  }

  const row = (label, value) => `
    <div class="flex items-center justify-between py-2 border-b border-gray-50">
      <span class="text-sm text-[#64748B]">${label}</span>
      <span class="text-sm font-semibold text-[#0F172A]">${value}</span>
    </div>`;

  let rows = '';
  if (entry.application && entry.application !== '—') rows += row('Linked Application', escHtml(entry.application));
  rows += row('Slot', escHtml(entry.slot));
  if (entry.paymentType) rows += row('Payment Type', escHtml(entry.paymentType));
  if (entry.amount) rows += row('Amount', escHtml(`${entry.currency || ''} ${entry.amount}`.trim()));
  if (entry.payer) rows += row('Payer', escHtml(entry.payer));
  if (entry.aadhaarFront) rows += row('Aadhaar Card — Front', escHtml(entry.aadhaarFront));
  if (entry.aadhaarBack) rows += row('Aadhaar Card — Back', escHtml(entry.aadhaarBack));
  if (entry.panFront) rows += row('PAN Card — Front', escHtml(entry.panFront));
  if (entry.accommodationType) rows += row('Accommodation Type', escHtml(entry.accommodationType));
  if (entry.destinationCountry) rows += row('Destination Country', escHtml(entry.destinationCountry));
  if (entry.departureDate) rows += row('Departure Date', escHtml(entry.departureDate));
  if (entry.confirmedAt) rows += row('Marked On', escHtml(entry.confirmedAt));

  const loanBlock = entry.loan ? `
    <div class="pt-3 mt-1">
      <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-1 block">Education Financing</label>
      ${row('Yocket RM Name', escHtml(entry.loan.rmName || '------'))}
      ${row('Yocket RM Email', escHtml(entry.loan.rmEmail || '------'))}
      ${row('Yocket RM Contact Number', escHtml(entry.loan.rmContact || '------'))}
      ${row('Follow Up Date', escHtml(entry.loan.followUpDate || '—'))}
    </div>` : '';

  document.getElementById('vasModalBody').innerHTML = `
    <div class="py-4">
      <div class="bg-[#EDE9FE] border border-[#DDD6FE] rounded-lg p-3 mb-2">
        <p class="text-[10px] font-semibold uppercase tracking-wide text-[#443EFF] mb-0.5">Interested In</p>
        <p class="text-base font-semibold text-[#312E81]">${escHtml(entry.services)}</p>
      </div>
      ${rows}
      ${loanBlock}
    </div>`;
  document.getElementById('vasModalFooter').innerHTML = `<button class="flex-1 h-10 rounded-lg text-white text-sm font-semibold" style="background:#443EFF" onclick="closeVasModal()">Close</button>`;
}

function vasHeaderHtml(step, lead) {
  if (step === 1) {
    return `
      <div class="px-5 sticky top-0 bg-white pt-3 pb-4 border-b border-[#e2e8f0] flex justify-between items-center">
        <div class="flex flex-col items-start">
          <span class="text-base font-bold text-[#0F172A]">VAS Interest</span>
          <p class="text-sm text-[#64748B]">${escHtml(lead.name)} · #${lead.id}</p>
        </div>
        <button class="w-7 h-7 rounded-lg bg-surface flex items-center justify-center cursor-pointer flex-shrink-0" onclick="closeVasModal()">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" stroke-width="2"/><line x1="6" y1="6" x2="18" y2="18" stroke-width="2"/></svg>
        </button>
      </div>`;
  }
  const crumbLabel = step === 2 ? 'Details' : 'Slot';
  const backTarget = step === 3 && !vasNeedsConfigStep() ? 1 : step - 1;
  const backLabel = backTarget === 1 ? 'Back to services' : 'Back to details';
  return `
    <div class="px-5 pt-4 pb-3 border-b border-gray-50 flex items-center justify-between">
      <p class="text-xs text-[#64748B]">VAS Interest <span class="mx-1">›</span><span class="text-[#443EFF] font-medium ml-1">${crumbLabel}</span></p>
      <p class="text-xs font-semibold text-[#0F172A]">${escHtml(lead.name)} (${lead.id})</p>
    </div>
    <button type="button" class="px-5 pt-3 pb-4 text-sm text-[#443EFF] hover:text-[#3630D6] flex items-center gap-1 transition-colors font-semibold" onclick="vasGoToStep(${backTarget})">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>${backLabel}
    </button>`;
}

function vasFooterHtml(nextLabel, nextOnclick, nextDisabled, nextId) {
  return `
    <button class="flex-1 h-10 rounded-lg border border-[#CBD5E1] text-sm font-semibold text-[#475569] hover:bg-[#F1F5F9] transition-colors" onclick="closeVasModal()">Cancel</button>
    <button class="flex-1 h-10 rounded-lg text-white text-sm font-semibold transition-colors" id="${nextId}" ${nextDisabled ? 'disabled' : ''} style="background:${nextDisabled ? '#94A3B8' : '#443EFF'}" onclick="${nextOnclick}">${nextLabel}</button>`;
}

// ── Step 1: Interested In ──
function renderVasStep1(lead) {
  document.getElementById('vasModalHeader').innerHTML = vasHeaderHtml(1, lead);
  const history = VAS_INTERESTS_MOCK[lead.id] || [];
  document.getElementById('vasModalBody').innerHTML = `
    ${history.length ? `
    <div class="pt-4">
      <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Already Marked (${history.length})</label>
      <div class="space-y-2">
        ${history.map((h, idx) => `
          <div class="flex items-center justify-between rounded-lg border border-[#E5E7EB] px-3 py-2.5 cursor-pointer hover:border-[#C7D2FE] hover:bg-[#FAF9FF] transition-colors" style="background:#FAFAFA" onclick="viewVasHistoryDetail('${lead.id}',${idx})">
            <div class="min-w-0">
              <div class="text-sm font-semibold text-[#0F172A] truncate">${h.services}</div>
              <div class="text-xs text-[#64748B] mt-0.5 truncate">${h.slot}${h.application && h.application !== '—' ? ' · ' + h.application : ''}</div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span class="pl-badge" style="background:#EEF2FF;color:#443EFF;border-color:#C7D2FE">Scheduled</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#94A3B8"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>`).join('')}
      </div>
      <div class="border-t border-gray-100 mt-4"></div>
    </div>` : ''}
    <div class="py-4 space-y-2.5">
      ${history.length ? `<label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-1 block">Mark New Interest</label>` : ''}
      ${VAS_SERVICES.map(s => {
        if (s.key === 'loan' && eduFinancingState(lead.id).assigned) {
          return `
            <div class="w-full rounded-xl border p-4 flex items-center gap-3" style="border-color:#E5E7EB;background:#F8FAFC">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
              <div class="flex-1">
                <p class="text-sm font-semibold text-[#0F172A]">${s.label}</p>
                <p class="text-xs text-[#94A3B8]">Already requested — Yocket loan team assigned</p>
              </div>
            </div>`;
        }
        return `
        <label class="w-full rounded-xl border transition-all p-4 cursor-pointer flex items-center gap-3" id="vasRow-${s.key}" style="${vasState.selected.has(s.key) ? 'border-color:#443EFF;background:#FAF9FF' : 'border-color:#E5E7EB;background:#fff'}">
          <input type="radio" name="vasServiceRadio" class="w-4 h-4 flex-shrink-0" style="accent-color:#443EFF" ${vasState.selected.has(s.key) ? 'checked' : ''} onchange="selectVasService('${s.key}')"/>
          <p class="text-sm font-semibold text-[#0F172A] flex-1">${s.label}</p>
        </label>`;
      }).join('')}
    </div>
    <p class="text-xs text-[#94A3B8] pb-2">Each service is handled by a different vendor, so interest is booked one service at a time.</p>`;
  document.getElementById('vasModalFooter').innerHTML = vasFooterHtml('Next', 'vasFromStep1Next()', vasState.selected.size === 0, 'vasStep1Next');
}

// Single-select: services are fulfilled by different vendors, so only one can be booked per pass.
function selectVasService(key) {
  vasState.selected.clear();
  vasState.selected.add(key);
  document.querySelectorAll('[id^="vasRow-"]').forEach(row => {
    const isSelected = row.id === `vasRow-${key}`;
    row.style.borderColor = isSelected ? '#443EFF' : '#E5E7EB';
    row.style.background = isSelected ? '#FAF9FF' : '#fff';
  });
  const btn = document.getElementById('vasStep1Next');
  if (btn) {
    btn.disabled = false;
    btn.style.background = '#443EFF';
    btn.textContent = (vasNeedsConfigStep() || vasNeedsSlotStep()) ? 'Next' : 'Confirm Interest';
  }
}

function vasFromStep1Next() {
  if (vasState.selected.size === 0) return;
  if (vasNeedsConfigStep()) { vasWizardStep = 2; renderVasWizard(); return; }
  if (vasNeedsSlotStep()) { vasWizardStep = 3; renderVasWizard(); return; }
  confirmVasInterest(currentLeadDetail().lead.id);
}

// Mock document upload (Remittance needs Aadhaar Front/Back + PAN Front as files, not typed numbers).
function vasFileUploadHtml(fieldKey, label, currentFileName) {
  return `
    <div>
      <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">${label} <span class="normal-case font-normal">(optional)</span></label>
      ${currentFileName
        ? `<div class="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5 text-sm">
             <span class="flex items-center gap-1.5 text-[#0F172A] truncate min-w-0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0"><path d="M20 6 9 17l-5-5"/></svg><span class="truncate">${escHtml(currentFileName)}</span></span>
             <button type="button" class="text-xs font-semibold cursor-pointer flex-shrink-0 ml-2" style="color:#EF4444" onclick="vasRemoveFile('${fieldKey}')">Remove</button>
           </div>`
        : `<label class="flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-lg px-3 py-2.5 text-sm font-semibold cursor-pointer hover:bg-[#FAF9FF] transition-colors" style="color:#443EFF">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3.5 3.5 0 014.95 4.95l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
             Upload File
             <input type="file" class="hidden" onchange="vasFileSelected('${fieldKey}', this)"/>
           </label>`}
    </div>`;
}

function vasFileSelected(fieldKey, input) {
  const file = input.files && input.files[0];
  if (!file) return;
  vasState[fieldKey] = file.name;
  renderVasStep2(currentLeadDetail().lead);
}

function vasRemoveFile(fieldKey) {
  vasState[fieldKey] = '';
  renderVasStep2(currentLeadDetail().lead);
}

const VAS_ACCOMMODATION_TYPE_INFO = {
  HMO: 'A shared property — the student gets their own bedroom and shares the kitchen/living room with others.',
  PBSA: 'A student-only building with private or shared rooms and student-focused amenities.',
};
const VAS_DESTINATION_COUNTRIES = ['UK', 'USA', 'Canada', 'Australia', 'Germany', 'Ireland', 'UAE', 'New Zealand'];

// ── Step 2: Details (only reached when a service with extra fields is selected) ──
function renderVasStep2(lead) {
  document.getElementById('vasModalHeader').innerHTML = vasHeaderHtml(2, lead);
  const apps = applicationsForLead(lead);
  const needApp = VAS_SERVICES.filter(s => s.needsApplication && vasState.selected.has(s.key));
  const selectedLabels = [...vasState.selected].map(k => VAS_SERVICES.find(s => s.key === k).label).join(', ');
  const priorApp = needApp.map(s => vasState.applicationByService[s.key]).find(v => v !== undefined);
  const existingApp = priorApp !== undefined ? priorApp : (apps[0] ? apps[0].id : '');
  needApp.forEach(s => { vasState.applicationByService[s.key] = existingApp; });
  const linkedApp = apps.find(a => a.id === existingApp);

  let fields = '';
  if (needApp.length) {
    // Post-STI, the university is already settled — show it as auto-fetched, same as Passport/Offer
    // Letter elsewhere. Pre-STI, it's still a work in progress, so leave it as a skippable pick.
    if (leadIsSTIDone(lead) && linkedApp) {
      fields += `
        <div>
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">University <span class="normal-case font-normal">(auto-fetched)</span></label>
          <div class="text-sm font-semibold text-[#0F172A]">${escHtml(linkedApp.university)} — ${escHtml(linkedApp.course)}</div>
        </div>`;
    } else {
      fields += `
        <div>
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">University / Linked Application <span class="normal-case font-normal">(optional)</span></label>
          <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] bg-white" onchange="onVasAppSelectChange(this.value)">
            <option value="">— Not linked to an application —</option>
            ${apps.map(a => `<option value="${a.id}" ${a.id === existingApp ? 'selected' : ''}>${a.university} — ${a.course}</option>`).join('')}
          </select>
        </div>`;
    }
  }

  if (vasState.selected.has('remittance')) {
    const payerHint = vasState.payer === 'Non-Blood Relative' ? 'Non-blood relative payer: 3% additional charges apply, and only card payment can be used.' : '';
    fields += `
      <div class="${fields ? 'border-t border-gray-50 pt-3' : ''}">
        <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Payment Type</label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-[#0F172A]" onchange="vasState.paymentType=this.value;updateVasStep2NextBtn()">
          <option value="" ${!vasState.paymentType ? 'selected' : ''}>Select…</option>
          ${['Application Fee', 'Deposit', 'Tuition Fee', 'Accommodation', 'Fund Transfer', 'Others'].map(o => `<option value="${o}" ${vasState.paymentType === o ? 'selected' : ''}>${o}</option>`).join('')}
        </select>
      </div>
      <div class="pt-3 flex gap-3">
        <div class="flex-1">
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Amount</label>
          <input type="number" min="0" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A]" placeholder="e.g. 500000" value="${escHtml(vasState.amount || '')}" oninput="vasState.amount=this.value;updateVasStep2NextBtn()"/>
        </div>
        <div class="flex-1">
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Currency</label>
          <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-[#0F172A]" onchange="vasState.currency=this.value;updateVasStep2NextBtn()">
            <option value="" ${!vasState.currency ? 'selected' : ''}>Select…</option>
            ${['INR', 'USD', 'GBP', 'EUR', 'CAD', 'AUD'].map(c => `<option value="${c}" ${vasState.currency === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="pt-3">
        <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Payer</label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-[#0F172A]" onchange="vasState.payer=this.value;updateVasStep2NextBtn();document.getElementById('vasPayerHint-${lead.id}').textContent=this.value==='Non-Blood Relative'?'Non-blood relative payer: 3% additional charges apply, and only card payment can be used.':''">
          <option value="" ${!vasState.payer ? 'selected' : ''}>Select…</option>
          ${['Self', 'Parents', 'Sibling', 'Spouse', 'Non-Blood Relative'].map(p => `<option value="${p}" ${vasState.payer === p ? 'selected' : ''}>${p}</option>`).join('')}
        </select>
        <p class="text-xs mt-1.5" id="vasPayerHint-${lead.id}" style="color:#C2410C">${payerHint}</p>
      </div>
      <div class="pt-3 border-t border-gray-50">
        ${vasFileUploadHtml('aadhaarFront', 'Aadhaar Card — Front', vasState.aadhaarFront)}
      </div>
      <div class="pt-3">
        ${vasFileUploadHtml('aadhaarBack', 'Aadhaar Card — Back', vasState.aadhaarBack)}
      </div>
      <div class="pt-3">
        ${vasFileUploadHtml('panFront', 'PAN Card — Front', vasState.panFront)}
      </div>
      <div class="pt-3 flex gap-4">
        <div class="flex-1">
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Passport <span class="normal-case font-normal">(auto-fetched)</span></label>
          <div class="text-sm font-semibold text-[#0F172A]">${studentProfileMock(lead).passportStatus}</div>
        </div>
        <div class="flex-1">
          <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Offer Letter <span class="normal-case font-normal">(auto-fetched)</span></label>
          ${linkedApp && linkedApp.hasOffer
            ? `<button class="text-sm font-semibold cursor-pointer" style="color:#443EFF" onclick="showToast('Opening offer letter…','info')">View Offer Letter</button>`
            : `<div class="text-sm text-[#94A3B8]">${linkedApp ? 'No offer yet' : 'Link an application to check'}</div>`}
        </div>
      </div>
      <div class="pt-3 border-t border-gray-50">
        <a href="https://docs.google.com/document/d/1mrGTXyFzFK3E7S0NHL0GwrjDAjYpi-FoOea185Yb5Dg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold" style="color:#443EFF">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/></svg>
          Payment Methods &amp; Terms and Conditions
        </a>
        <p class="text-xs text-[#94A3B8] mt-1">Payment method options, charges, and important disclaimers (bank account type, TCS) are covered in this doc — share it with the student before payment.</p>
      </div>`;
  }

  if (vasState.selected.has('accommodation')) {
    fields += `
      <div class="${fields ? 'border-t border-gray-50 pt-3' : ''}">
        <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Accommodation Type <span class="normal-case font-normal">(optional)</span></label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-[#0F172A]" onchange="vasState.accommodationType=this.value;document.getElementById('vasAccTypeHint-${lead.id}').textContent=VAS_ACCOMMODATION_TYPE_INFO[this.value]||''">
          <option value="" ${!vasState.accommodationType ? 'selected' : ''}>— Not specified —</option>
          <option value="HMO" ${vasState.accommodationType === 'HMO' ? 'selected' : ''}>HMO — House in Multiple Occupation</option>
          <option value="PBSA" ${vasState.accommodationType === 'PBSA' ? 'selected' : ''}>PBSA — Purpose-Built Student Accommodation</option>
        </select>
        <p class="text-xs text-[#94A3B8] mt-1.5" id="vasAccTypeHint-${lead.id}">${VAS_ACCOMMODATION_TYPE_INFO[vasState.accommodationType] || ''}</p>
      </div>`;
  }

  if (vasState.selected.has('flight') || vasState.selected.has('sim') || vasState.selected.has('forex')) {
    fields += `
      <div class="${fields ? 'border-t border-gray-50 pt-3' : ''}">
        <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Departure Date <span class="normal-case font-normal">(optional)</span></label>
        <input type="date" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A]" value="${escHtml(vasState.departureDate || '')}" oninput="vasState.departureDate=this.value"/>
      </div>
      <div class="pt-3">
        <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Destination Country</label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-[#0F172A]" onchange="vasState.destinationCountry=this.value;updateVasStep2NextBtn()">
          <option value="" ${!vasState.destinationCountry ? 'selected' : ''}>Select…</option>
          ${VAS_DESTINATION_COUNTRIES.map(c => `<option value="${c}" ${vasState.destinationCountry === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>`;
  }

  if (vasState.selected.has('loan')) {
    fields += `
      <div class="${fields ? 'border-t border-gray-50 pt-3' : ''}">
        ${eduFinancingModalBlockHtml(vasState.pipelineType, lead)}
      </div>`;
  }

  document.getElementById('vasModalBody').innerHTML = `
    <div class="space-y-3 py-4">
      <div class="bg-[#EDE9FE] border border-[#DDD6FE] rounded-lg p-3">
        <p class="text-[10px] font-semibold uppercase tracking-wide text-[#443EFF] mb-0.5">Interested In</p>
        <p class="text-base font-semibold text-[#312E81]">${selectedLabels}</p>
      </div>
      ${fields}
    </div>`;
  const step2NeedsSlot = vasNeedsSlotStep();
  document.getElementById('vasModalFooter').innerHTML = vasFooterHtml(step2NeedsSlot ? 'Next' : 'Confirm Interest', 'vasFromStep2Next()', !vasStep2Valid(), 'vasStep2Next');
}

function vasFromStep2Next() {
  if (!vasStep2Valid()) return;
  if (vasNeedsSlotStep()) { vasGoToStep(3); return; }
  confirmVasInterest(vasState.leadId);
}

function onVasAppSelectChange(appId) {
  const needApp = VAS_SERVICES.filter(s => s.needsApplication && vasState.selected.has(s.key));
  needApp.forEach(s => { vasState.applicationByService[s.key] = appId; });
  renderVasStep2(currentLeadDetail().lead);
}

// ── Step 3: Pick a Slot ──
function renderVasStep3(lead) {
  document.getElementById('vasModalHeader').innerHTML = vasHeaderHtml(3, lead);
  const selectedLabels = [...vasState.selected].map(k => VAS_SERVICES.find(s => s.key === k).label).join(', ');
  document.getElementById('vasModalBody').innerHTML = `
    <div class="py-4">
      <div class="bg-[#EDE9FE] border border-[#DDD6FE] rounded-lg p-3 mb-4">
        <p class="text-[10px] font-semibold uppercase tracking-wide text-[#443EFF] mb-0.5">Interested In</p>
        <p class="text-base font-semibold text-[#312E81]">${selectedLabels}</p>
      </div>
      <label class="text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8] mb-2 block">Pick a time slot to discuss</label>
      ${vasDayPickerHtml('vas', lead.id)}
      <div class="grid grid-cols-4 gap-2 mt-4" id="vasSlots-${lead.id}"></div>
    </div>`;
  document.getElementById('vasModalFooter').innerHTML = vasFooterHtml('Confirm Interest', `confirmVasInterest('${lead.id}')`, true, `vasConfirmBtn-${lead.id}`);
  renderVasSlots(lead.id, vasState.day || 0);
}

function renderVasSlots(leadId, dayIndex) {
  const booked = VAS_BOOKED_SLOTS_MOCK[leadId];
  const slots = slotsForDay(dayIndex).filter(s => !booked || !booked.has(`${dayIndex}|${s}`));
  const grid = document.getElementById(`vasSlots-${leadId}`);
  if (!grid) return;
  grid.innerHTML = slots.length ? slots.map(s => `
    <div class="vas-slot-pill" onclick="selectVasSlot('${leadId}',this,'${s}')">
      <div class="vas-slot-time">${s}</div><div class="vas-slot-tag">Available</div>
    </div>`).join('') : `<div class="col-span-4 text-center text-xs text-text-muted py-4">No slots left today — try tomorrow.</div>`;
}

function updateVasConfirmBtn(leadId) {
  const btn = document.getElementById(`vasConfirmBtn-${leadId}`);
  if (!btn) return;
  const ok = vasState.selected.size > 0 && !!vasState.slot;
  btn.disabled = !ok;
  btn.style.background = ok ? '#443EFF' : '#94A3B8';
}

function selectVasDay(leadId, dayIndex) {
  vasState.day = dayIndex; vasState.slot = null;
  document.querySelectorAll(`[id^="vasDay-${leadId}-"]`).forEach(el => el.classList.remove('active'));
  document.getElementById(`vasDay-${leadId}-${dayIndex}`).classList.add('active');
  renderVasSlots(leadId, dayIndex);
  updateVasConfirmBtn(leadId);
}

function selectVasSlot(leadId, el, slotLabel) {
  vasState.slot = slotLabel;
  document.querySelectorAll(`#vasSlots-${leadId} .vas-slot-pill`).forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  updateVasConfirmBtn(leadId);
}

function confirmVasInterest(leadId) {
  const needsSlot = vasNeedsSlotStep();
  if (vasState.selected.size === 0 || (needsSlot && !vasState.slot) || !vasStep2Valid()) {
    showToast('Select at least one service and complete the required fields.', 'error');
    return;
  }
  const { lead } = currentLeadDetail();
  const apps = applicationsForLead(lead);
  const days = nextThreeDays();
  const dayLabel = needsSlot ? `${days[vasState.day].dayNum} ${days[vasState.day].monthShort}` : '';
  const slotLabel = needsSlot ? `${dayLabel}, ${vasState.slot}` : 'No slot needed';
  const services = [...vasState.selected].map(k => VAS_SERVICES.find(s => s.key === k).label);
  const appLabels = Object.entries(vasState.applicationByService).map(([k, appId]) => {
    if (!appId) return '';
    const a = apps.find(x => x.id === appId);
    const s = VAS_SERVICES.find(x => x.key === k);
    return a ? `${s.label}: ${a.university}` : '';
  }).filter(Boolean);

  VAS_KYC_MOCK[leadId] = { aadhaarFront: vasState.aadhaarFront || '', aadhaarBack: vasState.aadhaarBack || '', panFront: vasState.panFront || '', accommodationType: vasState.accommodationType || '' };
  const pipelineType = vasState.pipelineType;
  if (vasState.selected.has('loan') && !eduFinancingState(leadId).assigned) {
    requestEducationFinancing(pipelineType, leadId, { silent: true });
  }

  if (needsSlot) {
    if (!VAS_BOOKED_SLOTS_MOCK[leadId]) VAS_BOOKED_SLOTS_MOCK[leadId] = new Set();
    VAS_BOOKED_SLOTS_MOCK[leadId].add(`${vasState.day}|${vasState.slot}`);
  }

  if (!VAS_INTERESTS_MOCK[leadId]) VAS_INTERESTS_MOCK[leadId] = [];
  VAS_INTERESTS_MOCK[leadId].unshift({
    services: services.join(', '),
    application: appLabels.join(' · ') || '—',
    slot: slotLabel,
    aadhaarFront: vasState.aadhaarFront || '',
    aadhaarBack: vasState.aadhaarBack || '',
    panFront: vasState.panFront || '',
    accommodationType: vasState.accommodationType || '',
    paymentType: vasState.paymentType || '',
    amount: vasState.amount || '',
    currency: vasState.currency || '',
    payer: vasState.payer || '',
    departureDate: vasState.departureDate || '',
    destinationCountry: vasState.destinationCountry || '',
    loan: vasState.selected.has('loan') ? { ...eduFinancingState(leadId) } : null,
    confirmedAt: new Date().toLocaleDateString('en-GB'),
  });

  closeVasModal();
  const sidebar = document.getElementById('leadDetailSidebar');
  if (sidebar) sidebar.innerHTML = buildLeadSidebarHtml(pipelineType, lead);
  showToast(`VAS interest marked (${services.join(', ')})${needsSlot ? ` — slot booked for ${dayLabel}, ${vasState.slot}.` : '.'}`, 'success');
}
function closeLeadDetailPage() {
  document.getElementById('leadDetailPage').classList.add('hidden');
}

// ─── TASK VIEW (compact drawer) — "View Task" opens this; "View Student" opens the full lead page ──
function openTaskView(pipelineType, leadId) {
  const leads = MOCK_LEADS[pipelineType] || [];
  const lead = leads.find(l => l.id === leadId);
  if (!lead) return;

  closeDrawer();
  if (botOpen) toggleBot();

  const course = courseForLead(lead);

  document.getElementById('taskViewName').textContent = lead.name;
  document.getElementById('taskViewActions').innerHTML = `
    <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-colors" style="border-color:#C7D2FE;color:#4338CA;background:#EEF2FF" onclick="showToast('Opening message templates…','info')">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      Templates
    </button>
    <button class="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer flex-shrink-0" style="background:#4338CA" onclick="showToast('Opening WhatsApp…','info')" title="WhatsApp">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
    </button>
    <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer transition-colors" style="background:#16A34A" onclick="showToast('Calling ${escHtml(lead.name)}…','info')">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.9 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
      Call
    </button>`;

  document.getElementById('taskViewContent').innerHTML = `
    <div class="bg-white border border-border rounded-xl p-4">
      <div class="grid grid-cols-2 gap-x-5 gap-y-4 mb-5">
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">User ID</div><div class="text-sm font-bold font-mono">${lead.id}</div></div>
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">Course</div><div class="text-sm font-bold">${course}</div></div>
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">Country</div><div class="text-sm font-bold text-primary">${lead.country}</div></div>
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">Last Call</div><div class="text-sm text-text-muted">—</div></div>
        <div>
          <div class="text-[10px] font-bold uppercase text-text-muted mb-1">Follow-up</div>
          <div class="flex items-center gap-1.5 text-sm font-bold">
            <svg class="w-3.5 h-3.5 text-primary cursor-pointer flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" onclick="showFollowupForm('${lead.id}')"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            ${formatDMY(lead.caDate)}
          </div>
        </div>
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">Last Connected</div><div class="text-sm text-text-muted font-mono">${lead.lastConnect || '—'}</div></div>
        <div><div class="text-[10px] font-bold uppercase text-text-muted mb-1">Intake</div><div class="text-sm font-bold">${lead.intake}</div></div>
        <div>
          <div class="text-[10px] font-bold uppercase text-text-muted mb-1">Phone</div>
          <button class="px-3 py-1.5 border border-border rounded-lg text-xs font-semibold text-primary cursor-pointer hover:bg-surface transition-colors" onclick="revealPhone(this)">View Phone Number</button>
        </div>
      </div>

      <div class="mb-5">
        <div class="text-[10px] font-bold uppercase text-text-muted mb-1.5">Notes</div>
        <div id="notesInline-${lead.id}"><button class="px-3 py-1.5 border border-border rounded-lg text-xs font-semibold text-primary cursor-pointer hover:bg-surface transition-colors" onclick="fetchNotesInline('${pipelineType}','${lead.id}')">Fetch Notes</button></div>
      </div>

      <div class="mb-5">
        <div class="text-[10px] font-bold uppercase text-text-muted mb-1.5">WhatsApp Groups</div>
        <div class="flex items-center justify-between flex-wrap gap-2 p-3 bg-surface rounded-lg border border-border">
          <div class="text-xs font-semibold">Leap Scholar | ${escHtml(lead.name)} | ${lead.id}</div>
          <div class="flex items-center gap-3 text-xs">
            <label class="flex items-center gap-1.5 cursor-default"><input type="checkbox" checked disabled class="w-3.5 h-3.5"/>You</label>
            <label class="flex items-center gap-1.5 cursor-default"><input type="checkbox" checked disabled class="w-3.5 h-3.5"/>Student</label>
            <label class="flex items-center gap-1.5 cursor-default"><input type="checkbox" checked disabled class="w-3.5 h-3.5"/>Counsellor</label>
          </div>
        </div>
      </div>

      <div class="mb-1">
        <div class="text-[10px] font-bold uppercase text-text-muted mb-2">Servicing Type</div>
        <div class="space-y-3">
          <div>
            <div class="text-xs font-semibold text-text-muted mb-1">Type</div>
            <div class="w-full px-3 py-2 border border-border rounded-lg text-sm bg-surface text-text-main">Paid Service</div>
          </div>
          <div>
            <div class="text-xs font-semibold text-text-muted mb-1">Subservicing Type</div>
            <div class="w-full px-3 py-2 border border-border rounded-lg text-sm bg-surface text-text-main">Premium Universities</div>
          </div>
        </div>
        <div class="text-[10px] text-text-muted mt-1.5">View only — set by the counsellor.</div>
      </div>
    </div>

    <div class="mt-5 flex flex-wrap items-start gap-2">
      <button class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer border border-border text-primary hover:bg-surface transition-colors" onclick="showDispositionForm('${lead.id}')">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3 3L22 4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        Disposition
      </button>
      <button class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer border border-border text-primary hover:bg-surface transition-colors" onclick="showQueryForm('${pipelineType}','${lead.id}','${escHtml(lead.name)}')">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        Raise Query for Counsellor
      </button>
    </div>
    <div id="dispositionFormWrap-${lead.id}" class="mt-3"></div>`;

  document.getElementById('taskViewPage').classList.remove('hidden');
  document.getElementById('taskViewPage').scrollTop = 0;
}

function closeTaskView() {
  document.getElementById('taskViewPage').classList.add('hidden');
}

function showFollowupForm(leadId) {
  const body = document.getElementById('taskViewContent');
  body.insertAdjacentHTML('beforeend', `
    <div id="followupFormWrap" class="mt-3.5 pt-3.5 border-t border-border">
      <div class="mb-2.5">
        <label class="block text-xs font-semibold text-text-muted mb-1">Follow-up Date &amp; Time *</label>
        <input class="w-full px-3 py-2 border border-border rounded-lg text-sm" type="datetime-local" id="followupDate" min="${nowLocalISO()}"/>
      </div>
      <div class="mb-2.5">${dispositionSelectHtml('followupDisposition')}</div>
      <div class="flex gap-2">
        <button class="px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer" onclick="submitFollowup('${leadId}')">Set Follow-up</button>
        <button class="px-3.5 py-1.5 border border-border text-xs font-semibold rounded-lg cursor-pointer" onclick="document.getElementById('followupFormWrap').remove()">Cancel</button>
      </div>
    </div>`);
}

function submitFollowup(leadId) {
  const input = document.getElementById('followupDate');
  if (!input || !input.value) { showToast('Please select a follow-up date & time.', 'error'); return; }
  if (!isFutureDateTime(input.value)) { showToast('Follow-up must be a future date and time.', 'error'); return; }
  document.getElementById('followupFormWrap').remove();
  showToast('Follow-up date set.', 'success');
}

function showDispositionForm(leadId) {
  const wrap = document.getElementById(`dispositionFormWrap-${leadId}`);
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="p-3 bg-surface rounded-lg border border-border">
      <div class="mb-2.5">${dispositionSelectHtml(`dispositionSelect-${leadId}`)}</div>
      <div class="flex gap-2">
        <button class="px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer" onclick="submitDisposition('${leadId}')">Save Disposition</button>
        <button class="px-3.5 py-1.5 border border-border text-xs font-semibold rounded-lg cursor-pointer" onclick="document.getElementById('dispositionFormWrap-${leadId}').innerHTML=''">Cancel</button>
      </div>
    </div>`;
}

function submitDisposition(leadId) {
  const sel = document.getElementById(`dispositionSelect-${leadId}`);
  if (!sel || !sel.value) { showToast('Please select a disposition.', 'error'); return; }
  document.getElementById(`dispositionFormWrap-${leadId}`).innerHTML = '';
  showToast(`Disposition "${sel.value}" saved.`, 'success');
}

function showQueryForm(pipeline, leadId, leadName) {
  const body = document.getElementById('leadDetailContent');
  body.insertAdjacentHTML('beforeend', `
    <div id="queryFormWrap" class="mt-3.5 pt-3.5 border-t border-border">
      <div class="text-xs font-bold text-text-muted mb-2.5 uppercase tracking-wide">Raise Query — ${leadName}</div>
      <div class="mb-2.5">
        <label class="block text-xs font-semibold text-text-muted mb-1">Query / Question *</label>
        <textarea class="w-full px-3 py-2 border border-border rounded-lg text-sm" id="queryText" placeholder="Describe the counsellor's query (max 500 chars)" maxlength="500"></textarea>
      </div>
      <div class="flex gap-2">
        <button class="px-3.5 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer" onclick="submitQuery('${pipeline}','${leadId}','${escHtml(leadName)}')">Submit Query</button>
        <button class="px-3.5 py-1.5 border border-border text-xs font-semibold rounded-lg cursor-pointer" onclick="document.getElementById('queryFormWrap').remove()">Cancel</button>
      </div>
    </div>`);
}

function submitQuery(pipeline, leadId, leadName) {
  const q = document.getElementById('queryText');
  if (!q.value.trim()) { showToast('Query cannot be empty.', 'error'); return; }
  QUERIES_MOCK.unshift({
    id: `Q-${++queryIdCounter}`, pipeline, leadId, leadName,
    thread: [{ from:'rm', text:q.value.trim(), date:'Today' }],
    unread: false,
  });
  document.getElementById('queryFormWrap').remove();
  showToast('Query sent to counsellor. They have 7 days to respond.', 'success');
}

// ─── DRAWER ───────────────────────────────────────────────────────────────────
function openDrawer(title, html, showBack) {
  document.getElementById('drawerTitle').textContent = title;
  document.getElementById('drawerBody').innerHTML = html;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.remove('hidden');
  const backBtn = document.querySelector('.drawer-back-btn');
  if (backBtn) backBtn.style.display = showBack ? 'flex' : 'none';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.add('hidden');
}

// ─── ASSIGNED LEADS DRAWER ────────────────────────────────────────────────────
function openAssignedLeads() {
  const allLeads = [...MOCK_LEADS.sti, ...MOCK_LEADS.revenue, ...MOCK_LEADS.loan];
  const rows = allLeads.map(l => `
    <tr class="cursor-pointer hover:bg-surface border-b border-border" onclick="openLeadDetail('sti','${l.id}')">
      <td class="px-3 py-2.5"><strong class="text-sm">${l.name}</strong><br/><span class="text-text-muted text-[10px] font-mono">${l.id}</span></td>
      <td class="px-3 py-2.5 text-xs">${l.intake}</td>
      <td class="px-3 py-2.5 text-xs">${l.country}</td>
      <td class="px-3 py-2.5 text-xs">${l.status}</td>
    </tr>`).join('');
  const html = `<div class="overflow-x-auto border border-border rounded-lg"><table class="w-full text-xs"><thead><tr class="bg-surface text-[9px] uppercase font-semibold text-text-muted"><th class="px-3 py-2 text-left">Name / ID</th><th class="px-3 py-2 text-left">Intake</th><th class="px-3 py-2 text-left">Country</th><th class="px-3 py-2 text-left">Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  openDrawer(`All Assigned Leads (${allLeads.length})`, html);
}

// ─── POTENTIAL ESCALATION DRAWER ("All About User") ──────────────────────────
const ESCALATION_GROUPS = [
  { key:'not_happy', icon:'🚨', title:'Student Not Happy', count:0, subtitle:'students need attention',
    definition:'A student has shared negative feedback or is not happy with their experience.',
    closure:'Closes when the RM reaches out, resolves the concern, and the student confirms they are satisfied.' },
  { key:'wa_summary', icon:'💬', title:'WA Summary', subtitle:'WhatsApp Group Activity', isWa:true,
    definition:'A student has a WhatsApp group-related issue. This group contains: Active Groups, Inactive Groups, Students Not Joined Groups, Messages Not Replied, and Student Success Manager Not Joined.',
    closure:'Closes when the respective WhatsApp group issue is resolved — each sub-group below closes independently.' },
  { key:'missed_calls', icon:'🚨', title:'Missed Calls', count:6, subtitle:'students with missed calls', forceOk:true,
    definition:'The student called the RM but the call could not be attended.',
    closure:'Closes when the RM calls the student back and logs the callback.' },
];

const WA_SUMMARY_GROUPS = [
  { key:'waActive', icon:'✅', title:'Active Groups', count:5, ok:true,
    definition:'Groups with recent, healthy conversation activity.',
    closure:'No action needed — keep the conversation going.' },
  { key:'waInactive', icon:'⚠️', title:'Inactive Groups', count:9,
    definition:'These students haven’t interacted on our group-chat.',
    closure:'Kickstart conversation with these students as per their state and ensure you’re always in touch with your students.' },
  { key:'studentNotJoined', icon:'👤', title:'Students Not Joined Groups', count:4,
    definition:'Students who haven’t joined their WhatsApp group yet.',
    closure:'Nudge the student to join the group. Task closes once they join.' },
  { key:'notReplied', icon:'💬', title:'Messages Not Replied', count:8,
    definition:'Groups where the student’s last message hasn’t been replied to.',
    closure:'Reply to the pending message. Task closes once a reply is sent.' },
  { key:'notJoined', icon:'🚫', title:'Student Success Manager Not Joined', count:3,
    definition:'The Student Success Manager (RM) hasn’t joined the student’s WhatsApp group yet.',
    closure:'Join the WhatsApp group. Task closes once you’ve joined.' },
];

function openEscalationDrawer() {
  const html = `
    <p class="text-xs text-[#64748B] mb-4">Students who need your immediate attention, they have shared us an feedback now review at an case level and take relevant actions.</p>
    <div class="flex flex-col gap-3" id="escGroupList">${buildEscalationGroups()}</div>`;
  openDrawer('All About User — Immediate Attention Required', html);
}

function escDefClosureHtml(g) {
  return `<div class="flex flex-col border border-border rounded-lg overflow-hidden mb-2">
    <div class="px-3 py-2.5" style="background:#EFF6FF">
      <p class="text-[11px] font-semibold uppercase tracking-wide mb-1" style="color:#1D4ED8">ℹ️ Definition</p>
      <p class="text-[12px] leading-relaxed" style="color:#2563EB">${g.definition}</p>
    </div>
    <div class="px-3 py-2.5" style="background:#F0FDF4">
      <p class="text-[11px] font-semibold uppercase tracking-wide mb-1" style="color:#15803D">✅ Task Closure</p>
      <p class="text-[12px] leading-relaxed" style="color:#16A34A">${g.closure}</p>
    </div>
  </div>`;
}

function escLeadRowHtml(l, waLink, showTaskBtn) {
  return `<div class="p-3 space-y-2 border-b border-[#E2E8F0] last:border-b-0">
    <div class="min-w-0">
      <p class="text-[13px] font-semibold text-[#0F172A] leading-tight">${l.name}</p>
      <p class="text-[11px] text-[#64748B] mt-0.5">${l.id}</p>
    </div>
    <div class="flex items-center gap-2">
      ${waLink ? `<button class="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer transition-colors" style="background:#DCFCE7;border:1px solid #86EFAC;color:#15803D" onclick="showToast('Opening WhatsApp group for ${l.name}…','info')">Open WA Group</button>` : ''}
      <button class="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer transition-colors" style="background:#EEF2FF;border:1px solid #C7D2FE;color:#4338CA" onclick="openLeadDetail('${l.pipeline}','${l.id}')">View Student</button>
      ${showTaskBtn ? `<button class="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer transition-colors" style="background:#EEF2FF;border:1px solid #C7D2FE;color:#4338CA" onclick="openTaskView('${l.pipeline}','${l.id}')">View Task</button>` : ''}
    </div>
  </div>`;
}

function escRowHeaderHtml({ icon, iconSize, title, subtitle, ok, chevId, onclick, compact, titleColor }) {
  return `<div class="w-full flex items-center justify-between gap-4 ${compact ? 'px-[10px] py-2' : 'px-4 py-3.5'} cursor-pointer transition-colors" onclick="${onclick}">
    <div class="flex items-center gap-3 min-w-0">
      <div class="${compact ? 'w-7 h-7' : 'w-9 h-9'} rounded-lg flex items-center justify-center flex-shrink-0"><span style="font-size:${iconSize}px">${icon}</span></div>
      <div class="text-left min-w-0">
        <div class="${compact ? 'text-[13px]' : 'text-base'} font-semibold truncate" style="color:${titleColor || '#0F172A'}">${title}</div>
        ${subtitle ? `<div class="text-xs text-[#64748B] mt-0.5">${subtitle}</div>` : ''}
      </div>
    </div>
    <svg class="w-4 h-4 transition-transform flex-shrink-0" id="${chevId}" style="color:#64748B" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" stroke-width="2"/></svg>
  </div>`;
}

function buildEscalationGroups() {
  return ESCALATION_GROUPS.map(g => {
    const ok = g.isWa ? !waSummaryHasIssues() : (g.forceOk || g.count === 0);
    return `
    <div class="esc-group-row ${ok ? 'ok' : (g.amberWarn ? 'amber' : 'warn')}">
      ${escRowHeaderHtml({ icon:g.icon, iconSize:20, title:g.title, subtitle: g.isWa ? g.subtitle : `${g.count} ${g.subtitle}`, chevId:`esc-chev-${g.key}`, onclick:`toggleEscalationGroup('${g.key}')`, titleColor: ok ? '#0F172A' : (g.amberWarn ? '#C2410C' : '#0F172A') })}
      <div class="hidden bg-white px-4 pb-3.5" id="esc-body-${g.key}">
        ${g.isWa ? escDefClosureHtml(g) + buildWaSummaryGroups() : `
          ${escDefClosureHtml(g)}
          ${g.count === 0
            ? `<div class="text-xs text-text-muted text-center py-3">Nothing here right now — you're all caught up ✅</div>`
            : `<div class="border border-[#E2E8F0] rounded-lg overflow-hidden">${leadsForEscalation(g.key).map(l => escLeadRowHtml(l, false, g.key === 'missed_calls')).join('')}</div>`}
        `}
      </div>
    </div>`;
  }).join('');
}

function waSummaryHasIssues() {
  return WA_SUMMARY_GROUPS.some(g => !g.ok && g.count > 0);
}

function buildWaSummaryGroups() {
  return `<div class="flex flex-col gap-2 pt-3">${WA_SUMMARY_GROUPS.map(g => {
    const ok = g.ok || g.count === 0;
    return `
    <div class="esc-group-row wa-sub ${ok ? 'ok' : 'warn'}">
      ${escRowHeaderHtml({ icon:g.icon, iconSize:14, title:`${g.title} <span class="inline-flex items-center justify-center text-[10px] bg-white px-2 py-0.5 rounded-full font-bold text-[#0F172A] ml-1">${g.count}</span>`, chevId:`wa-chev-${g.key}`, onclick:`toggleWaGroup('${g.key}')`, compact:true })}
      <div class="hidden bg-white px-[10px] pb-2.5" id="wa-body-${g.key}">
        ${escDefClosureHtml(g)}
        ${g.count === 0
          ? `<div class="text-xs text-text-muted text-center py-3">Nothing here right now ✅</div>`
          : `<div class="border border-[#E2E8F0] rounded-lg overflow-hidden">${leadsForWaGroup(g.key).map(l => escLeadRowHtml(l, true)).join('')}</div>`}
      </div>
    </div>`;
  }).join('')}</div>`;
}

function leadsForEscalation(key) {
  const all = [
    ...MOCK_LEADS.sti.map(l => ({ ...l, pipeline:'sti' })),
    ...MOCK_LEADS.revenue.map(l => ({ ...l, pipeline:'revenue' })),
    ...MOCK_LEADS.loan.map(l => ({ ...l, pipeline:'loan' })),
  ];
  if (key === 'missed_calls') return all.filter(l => l.overdue || l.dueToday).slice(0, 6);
  return [];
}

function leadsForWaGroup(key) {
  const all = [
    ...MOCK_LEADS.sti.map(l => ({ ...l, pipeline:'sti' })),
    ...MOCK_LEADS.revenue.map(l => ({ ...l, pipeline:'revenue' })),
    ...MOCK_LEADS.loan.map(l => ({ ...l, pipeline:'loan' })),
  ];
  if (key === 'waActive') return all.filter(l => !l.overdue).slice(0, 5);
  if (key === 'waInactive') return all.filter(l => l.overdue).slice(0, 9);
  if (key === 'studentNotJoined') return all.filter(l => l.dueToday).slice(0, 4);
  if (key === 'notReplied') return all.filter(l => l.overdue).slice(0, 8);
  if (key === 'notJoined') return all.slice(0, 3);
  return [];
}

function toggleEscalationGroup(key) {
  document.getElementById(`esc-body-${key}`).classList.toggle('hidden');
  document.getElementById(`esc-chev-${key}`).classList.toggle('rotate-180');
}

function toggleWaGroup(key) {
  document.getElementById(`wa-body-${key}`).classList.toggle('hidden');
  document.getElementById(`wa-chev-${key}`).classList.toggle('rotate-180');
}

// ─── COUNSELLOR QUERIES ─────────────────────────────────────────────────────────
let queryIdCounter = 1063;
const QUERIES_MOCK = [
  { id:'Q-1042', pipeline:'sti', leadId:'RM-2041', leadName:'Ananya Sharma',
    thread:[
      { from:'rm', text:'Student is asking if the scholarship can still be applied post CF — can you confirm eligibility?', date:'2026-09-05 11:20' },
      { from:'counsellor', text:'Yes, the scholarship can still be applied within 7 days of CF. Please have the student submit the form.', date:'2026-09-05 15:40' },
    ], unread:true },
  { id:'Q-1051', pipeline:'sti', leadId:'RM-2089', leadName:'Karan Mehta',
    thread:[
      { from:'rm', text:'Student wants to switch preferred country from Germany to UK — is this possible post F2F?', date:'2026-09-06 10:05' },
    ], unread:false },
  { id:'Q-1063', pipeline:'revenue', leadId:'RM-2045', leadName:'Tanvir Ahmed',
    thread:[
      { from:'counsellor', text:'Student has raised a concern about the Prime pricing shared — can you clarify what was discussed on the call?', date:'2026-09-07 09:15' },
    ], unread:true },
];

function queryUnreadCount() { return QUERIES_MOCK.filter(q => q.unread).length; }

function queryThreadCardHtml(q) {
  return `<div class="border border-border rounded-xl p-3 mb-3 ${q.unread ? '' : 'bg-white'}" style="${q.unread ? 'background:#FFF7ED' : ''}">
    <div class="flex items-center justify-between gap-2 mb-2">
      <div class="min-w-0">
        <div class="text-sm font-semibold text-text-main truncate">${q.leadName}</div>
        <div class="text-[10px] text-text-muted font-mono">${q.leadId}</div>
      </div>
      ${q.unread ? `<span class="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0" style="background:#FFEDD5;color:#C2410C">NEW REPLY</span>` : ''}
    </div>
    <div class="space-y-2 mb-2.5">
      ${q.thread.map(m => `
        <div class="flex ${m.from === 'rm' ? 'justify-end' : 'justify-start'}">
          <div class="max-w-[85%] rounded-lg px-3 py-2 text-xs" style="background:${m.from === 'rm' ? '#EEF2FF' : '#F1F5F9'};color:${m.from === 'rm' ? '#4338CA' : '#334155'}">
            <div class="font-semibold mb-0.5">${m.from === 'rm' ? 'You' : 'Counsellor'}</div>
            <div>${m.text}</div>
            <div class="text-[10px] opacity-70 mt-1">${m.date}</div>
          </div>
        </div>`).join('')}
    </div>
    <div class="flex gap-2 mb-2">
      <button class="flex-1 text-xs font-semibold py-1.5 rounded-lg cursor-pointer" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openTaskView('${q.pipeline}','${q.leadId}')">View Task</button>
    </div>
    <div class="flex gap-2">
      <input class="flex-1 min-w-0 px-2.5 py-1.5 border border-border rounded-lg text-xs" placeholder="Reply to counsellor…" id="queryReply-${q.id}"/>
      <button class="px-3 py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer flex-shrink-0" onclick="replyToQuery('${q.id}')">Send</button>
    </div>
  </div>`;
}

function buildQueriesBody() {
  if (!QUERIES_MOCK.length) return `<div class="text-center text-sm text-text-muted py-6">No queries yet.</div>`;
  return QUERIES_MOCK.map(q => queryThreadCardHtml(q)).join('');
}

function replyToQuery(id) {
  const input = document.getElementById(`queryReply-${id}`);
  if (!input || !input.value.trim()) { showToast('Reply cannot be empty.', 'error'); return; }
  const q = QUERIES_MOCK.find(x => x.id === id);
  if (!q) return;
  q.thread.push({ from:'rm', text:input.value.trim(), date:'Today' });
  q.unread = false;
  showToast('Reply sent to counsellor.', 'success');
  openNotifPanel();
}

function allLeadsWithTasks() {
  return [
    ...MOCK_LEADS.sti.map(l => ({ ...l, pipeline:'sti' })),
    ...MOCK_LEADS.revenue.map(l => ({ ...l, pipeline:'revenue' })),
    ...MOCK_LEADS.loan.map(l => ({ ...l, pipeline:'loan' })),
  ];
}

function leadOptionsHtml() {
  const leads = allLeadsWithTasks();
  return `<option value="">— Select Lead ID —</option>` + leads.map(l => `<option value="${l.pipeline}|${l.id}">${l.id} — ${escHtml(l.name)}</option>`).join('');
}

function populateQueryLeadSelects() {
  ['rmQueryLeadId', 'mgrQueryLeadId'].forEach(id => {
    const sel = document.getElementById(id);
    if (sel) sel.innerHTML = leadOptionsHtml();
  });
}

function findLeadByCompoundId(compound) {
  const [pipeline, id] = compound.split('|');
  const lead = (MOCK_LEADS[pipeline] || []).find(l => l.id === id);
  return lead ? { ...lead, pipeline } : null;
}

function onQueryLeadChange(selectId, infoId) {
  const sel = document.getElementById(selectId);
  const info = document.getElementById(infoId);
  const lead = sel.value ? findLeadByCompoundId(sel.value) : null;
  if (!lead) { info.classList.add('hidden'); info.textContent = ''; return; }
  info.classList.remove('hidden');
  info.innerHTML = `<strong>Counsellor:</strong> ${escHtml(lead.clName)} — this query will be routed to them.`;
}

function submitStandaloneQuery(selectId, textId) {
  const sel = document.getElementById(selectId);
  const textEl = document.getElementById(textId);
  if (!sel.value) { showToast('Please select a Lead ID.', 'error'); return; }
  if (!textEl.value.trim()) { showToast('Query cannot be empty.', 'error'); return; }
  const lead = findLeadByCompoundId(sel.value);
  if (!lead) { showToast('Selected lead no longer has an active task.', 'error'); return; }
  QUERIES_MOCK.unshift({
    id: `Q-${++queryIdCounter}`, pipeline: lead.pipeline, leadId: lead.id, leadName: lead.name,
    thread: [{ from:'rm', text:textEl.value.trim(), date:'Today' }],
    unread: false,
  });
  sel.value = '';
  textEl.value = '';
  const infoId = selectId === 'rmQueryLeadId' ? 'rmQueryCounsellorInfo' : 'mgrQueryCounsellorInfo';
  document.getElementById(infoId).classList.add('hidden');
  showToast(`Query sent to ${lead.clName}. They have 7 days to respond.`, 'success');
}

// ─── NOTIFICATIONS PANEL ───────────────────────────────────────────────────────
const NOTIF_GROUPS = [
  { key:'own', icon:'📋', title:'Own Reminders' },
  { key:'cs', icon:'💬', title:'Customer Support' },
  { key:'queries', icon:'📨', title:'Counsellor Queries' },
];

function notifCount(key) {
  if (key === 'own') return OWN_TASKS_MOCK.length;
  if (key === 'cs') return RM_ESCALATIONS.find(e => e.label === 'Customer Support')?.count || 0;
  if (key === 'queries') return queryUnreadCount();
  return 0;
}

function notifSubtitle(key, count) {
  if (key === 'own') return `${count} pending reminders`;
  if (key === 'cs') return `${count} students need attention`;
  if (key === 'queries') return count ? `${count} awaiting your response` : `${QUERIES_MOCK.length} query threads · all caught up`;
  return '';
}

function openNotifPanel() {
  const html = `<div class="flex flex-col gap-3">${buildNotifGroups()}</div>`;
  openDrawer('Notifications', html);
}

function buildNotifGroups() {
  return NOTIF_GROUPS.map(g => {
    const count = notifCount(g.key);
    const ok = count === 0;
    return `<div class="esc-group-row ${ok ? 'ok' : 'amber'}">
      ${escRowHeaderHtml({ icon:g.icon, iconSize:20, title:g.title, subtitle:notifSubtitle(g.key, count), chevId:`notif-chev-${g.key}`, onclick:`toggleNotifGroup('${g.key}')`, titleColor: ok ? '#0F172A' : '#C2410C' })}
      <div class="hidden bg-white px-4 pb-3.5" id="notif-body-${g.key}">${buildNotifBody(g, count)}</div>
    </div>`;
  }).join('');
}

function buildNotifBody(g, count) {
  if (g.key === 'own') {
    if (!count) return `<div class="text-center py-6"><div class="text-sm font-semibold text-text-main">All caught up!</div><div class="text-xs text-text-muted mt-1">No reminder for you. Good work.</div></div>`;
    return `<div class="pt-3">${OWN_TASKS_MOCK.map((t,i) => ownReminderCardHtml(t,i)).join('')}</div>`;
  }
  if (g.key === 'cs') {
    if (!count) return `<div class="text-center text-sm text-text-muted py-6">No students</div>`;
    const students = leadsForEscalation('missed_calls');
    return students.map(l => `
      <div class="student-card mb-3">
        <div class="font-semibold text-sm text-text-main">${l.name}</div>
        <div class="text-xs text-text-muted font-mono mb-2.5">${l.id} · ${l.country}</div>
        <div class="flex gap-2">
          <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openLeadDetail('${l.pipeline}','${l.id}')">View Student</button>
          <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openTaskView('${l.pipeline}','${l.id}')">View Task</button>
        </div>
      </div>`).join('');
  }
  if (g.key === 'queries') {
    return `<div class="pt-3">${buildQueriesBody()}</div>`;
  }
  return '';
}

function toggleNotifGroup(key) {
  document.getElementById(`notif-body-${key}`).classList.toggle('hidden');
  document.getElementById(`notif-chev-${key}`).classList.toggle('rotate-180');
}

// ─── OWN TASKS DRAWER ──────────────────────────────────────────────────────────
const OWN_TASKS_MOCK = [
  { type:'call', label:'Call to User', target:'Ananya Sharma (RM-2041)', due:'2026-09-03 11:00', desc:'Confirm remaining docs for STI.' },
  { type:'payment', label:'Payment Follow Up', target:'Rahul Jain (RM-2051)', due:'2026-09-03 14:00', desc:'Loan VC slot cancelled — reschedule.' },
  { type:'message', label:'Send Message', target:'Karan Mehta (RM-2089)', due:'2026-09-03 16:00', desc:'Nudge for F2F confirmation.' },
  { type:'custom', label:'Custom Task', target:'General', due:'2026-09-04 10:00', desc:'Prepare weekly summary for Team Lead.' },
  { type:'call', label:'Call to User', target:'Tanvir Ahmed (RM-2045)', due:'2026-09-04 12:00', desc:'Discuss C2I lock-in decision.' },
];
const TASK_TYPE_META = {
  call: { color:'#4F46E5', icon:'<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 013.9 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>' },
  message: { color:'#7C3AED', icon:'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' },
  payment: { color:'#16A34A', icon:'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>' },
  custom: { color:'#EA580C', icon:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>' },
};

function reminderUserIdOf(t) {
  const m = /\(([^)]+)\)/.exec(t.target || '');
  return m ? m[1] : (t.target || '');
}

function formatReminderDateTime(due) {
  const d = new Date((due || '').replace(' ', 'T'));
  if (isNaN(d)) return due;
  const day = d.getDate();
  const month = d.toLocaleDateString('en-US', { month:'short' });
  let h = d.getHours();
  const m = d.getMinutes();
  const ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12; if (h === 0) h = 12;
  const mm = m.toString().padStart(2, '0');
  return `${day} ${month}, ${h}:${mm} ${ampm}`;
}

const REMINDER_TYPE_GUIDANCE = {
  call: {
    definition: 'You create this reminder by selecting Call to User, entering the User ID, a future Date & Time, and the purpose/disposition of the call.',
    closure: 'Closes when you complete the reminder and log the call/action.',
  },
  message: {
    definition: 'You create this reminder by selecting Send Message, entering the User ID, a future Date & Time, and the message details.',
    closure: 'Closes when you complete the reminder and log the action.',
  },
  payment: {
    definition: 'You create this reminder by selecting Payment Follow Up, entering the User ID, a future Date & Time, and the relevant payment details.',
    closure: 'Closes when you complete the payment follow-up and log the action.',
  },
  custom: {
    definition: 'You create this reminder by selecting Custom Task, entering the User ID, a future Date & Time, and the task details.',
    closure: 'Closes when you complete the task and mark the reminder as done.',
  },
};

function ownReminderCardHtml(t, i) {
  const meta = TASK_TYPE_META[t.type] || TASK_TYPE_META.custom;
  const guidance = REMINDER_TYPE_GUIDANCE[t.type];
  const gid = `reminderGuide-${i}`;
  return `<div class="relative bg-white border border-border rounded-xl pl-4 pr-3.5 py-3 mb-3 overflow-hidden">
    <div class="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-full" style="background:${meta.color}"></div>
    <div class="flex items-start justify-between gap-2">
      <div class="flex items-center gap-2 flex-wrap min-w-0">
        <svg class="w-4 h-4 flex-shrink-0" style="color:${meta.color}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">${meta.icon}</svg>
        <span class="text-sm font-bold text-text-main">${t.label}</span>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full" style="background:#EEF2FF;color:#4338CA">${t.label}</span>
        <span class="text-xs px-2.5 py-1 rounded-full flex items-center gap-1 flex-shrink-0" style="background:#F1F5F9;color:#475569"><svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/></svg>${reminderUserIdOf(t)}</span>
      </div>
      <button class="w-7 h-7 rounded-full border border-border flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-surface transition-colors" onclick="showToast('Reminder marked complete.','success')">
        <svg class="w-3.5 h-3.5 text-text-muted" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
    </div>
    <div class="text-sm text-text-muted mt-2">${t.desc}</div>
    <div class="text-xs text-text-muted mt-2 flex items-center gap-1.5">
      <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      ${formatReminderDateTime(t.due)}
    </div>
    ${guidance ? `
    <button class="text-xs font-semibold text-primary cursor-pointer mt-2" onclick="document.getElementById('${gid}').classList.toggle('hidden')">ⓘ Definition &amp; Task Closure</button>
    <div class="hidden mt-2" id="${gid}">${escDefClosureHtml(guidance)}</div>` : ''}
  </div>`;
}

function openOwnTasksDrawer() {
  const html = `<div>${OWN_TASKS_MOCK.map((t,i) => ownReminderCardHtml(t,i)).join('')}</div>`;
  openDrawer('Own Tasks', html);
}

// ─── MY TICKETS LIST ────────────────────────────────────────────────────────────
const MY_TICKETS_MOCK = [
  { id:'TKT-329', category:'Issues in CRM', status:'Resolved', tat:'805.76m', date:'27 Aug 2026', desc:'The STI for a student is submitted today but why is it not reflecting in today\'s output report or even in month\'s achievements?' },
  { id:'TKT-269', category:'Issues Dashboard and Analytics', status:'Resolved', tat:'3679.59m', date:'21 Aug 2026', desc:'Please clarify whether the data shown is correct — my STI count for the month looks off.' },
  { id:'TKT-165', category:'Issues in CRM', status:'Resolved', tat:'858.46m', date:'05 Aug 2026', desc:'Next month\'s intake is also included in this month, kindly correct — this is the second time it\'s happening.' },
  { id:'TKT-142', category:'Incentive Clarity', status:'Open', tat:'—', date:'02 Sep 2026', desc:'My lock-in payout for last week doesn\'t match the incentive breakdown shown on the Incentives tab.' },
  { id:'TKT-109', category:'Issues in CRM', status:'Open', tat:'—', date:'29 Jul 2026', desc:'Lead is still showing at declined stage — kindly move the stage to the correct pipeline.' },
];

function openTicketList(filter) {
  const filtered = MY_TICKETS_MOCK.filter(t => filter === 'all' ? true : filter === 'resolved' ? t.status === 'Resolved' : t.status === 'Open');
  const titleMap = { all:'All Tickets', resolved:'Resolved Tickets', open:'Open Tickets' };
  const html = filtered.length ? filtered.map(t => `
    <div class="bg-white border border-border rounded-xl p-4 mb-3" style="border-color:${t.status === 'Resolved' ? '#BBF7D0' : '#FDBA74'}">
      <div class="flex items-center gap-2 flex-wrap mb-2">
        <span class="text-[11px] font-bold px-2 py-0.5 rounded-full" style="background:#EEF2FF;color:#4338CA">${t.id}</span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-surface text-text-muted border border-border">${t.category}</span>
        <span class="ai-badge ${t.status === 'Resolved' ? 'completed' : 'pending'}">${t.status}</span>
        ${t.tat !== '—' ? `<span class="text-[11px] px-2 py-0.5 rounded-full bg-surface text-text-muted border border-border">TAT: ${t.tat}</span>` : ''}
        <span class="text-[11px] text-text-muted ml-auto">${t.date}</span>
      </div>
      <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-1">Issue Description</div>
      <div class="text-xs text-text-main leading-relaxed">${t.desc}</div>
      <button class="text-[11px] font-semibold text-success mt-2 cursor-pointer" onclick="showToast('Opening ticket ${t.id}…','info')">Tap to view details &amp; give feedback →</button>
    </div>`).join('') : `<div class="text-center text-sm text-text-muted py-10">No tickets in this view.</div>`;
  openDrawer(titleMap[filter] || 'My Tickets', html);
}

// ─── REMINDER TYPE SELECTOR ─────────────────────────────────────────────────────
function selectReminderType(type, btn, suffix) {
  const container = document.getElementById(`reminderTypeCards${suffix}`);
  container.querySelectorAll('.reminder-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const userIdInput = document.getElementById(`reminderUserId${suffix}`);
  if (userIdInput) {
    const placeholders = { call:"e.g. RM-2041, RM-2089…", message:"e.g. RM-2041, RM-2089…", payment:"e.g. RM-2041, RM-2089…", custom:"Optional — leave blank for a general task" };
    userIdInput.placeholder = placeholders[type] || userIdInput.placeholder;
  }
}

// ─── MANAGER DASHBOARD (Team Lead / Senior Manager) ───────────────────────────
function renderMgrDashboard() {
  const roleLabels = { team_lead:'Team Lead Dashboard', senior_manager:'Senior Manager Dashboard' };
  document.getElementById('mgrTitle').textContent = roleLabels[state.role] || 'Team Dashboard';
  const team = visibleTeam();
  document.getElementById('mgrSubtitle').textContent = `${team.length} RMs reporting to you`;

  const totalSti = team.reduce((s, r) => s + r.sti, 0);
  const totalRevenue = team.reduce((s, r) => s + r.revenue, 0);
  const totalLoan = team.reduce((s, r) => s + r.loan, 0);
  const avgQuality = team.length ? Math.round(team.reduce((s, r) => s + parseInt(r.quality), 0) / team.length) : 0;
  const best = team.length ? [...team].sort((a, b) => parseInt(b.quality) - parseInt(a.quality))[0] : null;

  document.getElementById('mgrStiCount').textContent = totalSti;
  document.getElementById('mgrStiSub').textContent = `Across ${team.length} RMs — Docs + App Ready + F2F`;
  document.getElementById('mgrRevenueCount').textContent = totalRevenue;
  document.getElementById('mgrLoanCount').textContent = totalLoan;

  applyBoostCardSeverity('boostCardMgrSti', totalSti);
  applyBoostCardSeverity('boostCardMgrRevenue', totalRevenue);
  applyBoostCardSeverity('boostCardMgrLoan', totalLoan);
  applySeverityToCard('boostCardMgrQuality', qualitySeverity(avgQuality));
  applySeverityToCard('boostCardMgrEscalations', boostSeverityWide(TEAM_ESCALATIONS.reduce((s, e) => s + e.count, 0)));
  applySeverityToCard('boostCardMgrOwnTasks', boostSeverity(3));

  document.getElementById('mgrQualityBars').innerHTML = qualityScoreBarsHtml([
    { label:'2nd Call Reschedule & Join', pct:Math.max(0, Math.min(100, avgQuality - 6)) },
    { label:'Boost Lock-in', pct:Math.max(0, Math.min(100, avgQuality + 6)) },
    { label:'Loan VC Book & Join', pct:Math.max(0, Math.min(100, avgQuality - 11)) },
    { label:'Prep Demo Booked, Enrollment Pending', pct:Math.max(0, Math.min(100, avgQuality - 22)) },
  ]);
  document.getElementById('mgrBestTag').innerHTML = best ? `Best: <strong class="text-success">${best.name}</strong> · ${best.quality}` : 'No RMs match the current filter.';

  document.getElementById('mgrEscalationList').innerHTML = TEAM_ESCALATIONS.map(e => escRowHtml(e.label, e.count)).join('');

  updateHierFilterLabels();
  renderMgrTopPerformers();
  document.getElementById('mgrPerfSummaryContent').innerHTML = buildTeamPerfSummary();
}

// ─── TOP PERFORMERS (Team Lead / Senior Manager) — RM vs TL rankings ──────────
const MGR_PERIOD_MULT = { yesterday:1, month:6, '3months':16 };
const MGR_PCT_PERIOD_DELTA = { yesterday:0, month:4, '3months':9 };

function setMgrPerfWindow(period, btn) {
  state.mgrPerfPeriod = period;
  document.querySelectorAll('#mgrPerfToggle .period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMgrTopPerformers();
}

function setMgrPerfScope(scope, btn) {
  state.mgrPerfScope = scope;
  document.querySelectorAll('#mgrScopeToggle .period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMgrTopPerformers();
}

const MGR_RANK_COLORS = ['#F97316', '#94A3B8', '#C2410C'];

function topPerfRows(metric) {
  const period = state.mgrPerfPeriod || 'yesterday';
  const isPct = metric === 'caToStiPct' || metric === 'lockinPct';
  const mult = MGR_PERIOD_MULT[period];
  const delta = MGR_PCT_PERIOD_DELTA[period];

  let entries;
  if (state.mgrPerfScope === 'tl') {
    const tlPool = (state.role === 'senior_manager' && state.hierTlSelected.size > 0)
      ? TEAM_LEADS_MOCK.filter(t => state.hierTlSelected.has(t.id))
      : TEAM_LEADS_MOCK;
    entries = tlPool.map(tl => {
      const rms = MGR_TEAM.filter(rm => rm.tl === tl.id);
      const value = isPct
        ? Math.min(100, Math.round(rms.reduce((s, r) => s + r[metric], 0) / (rms.length || 1)) + delta)
        : Math.round(rms.reduce((s, r) => s + r[metric], 0) * mult);
      return { name:tl.name, value, onclick:'' };
    });
  } else {
    entries = visibleTeam().map(rm => ({
      name: rm.name,
      value: isPct ? Math.min(100, rm[metric] + delta) : Math.round(rm[metric] * mult),
      onclick: `openMgrDrilldown('${rm.id}')`,
    }));
  }
  return entries.sort((a, b) => b.value - a.value).slice(0, 3);
}

function topPerformersCategoryBox(title, metric, formatFn) {
  const rows = topPerfRows(metric);
  return `<div class="rounded-xl border border-border overflow-hidden">
    <div class="px-4 py-2.5 bg-surface text-[10px] font-bold uppercase tracking-wide text-text-muted">${title}</div>
    <div class="divide-y divide-border">
      ${rows.length ? rows.map((r, i) => `
        <div class="flex items-center gap-3 px-4 py-3 ${r.onclick ? 'cursor-pointer hover:bg-surface/60 transition-colors' : ''}" ${r.onclick ? `onclick="${r.onclick}"` : ''}>
          <div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style="background:${MGR_RANK_COLORS[i]}">
            <svg class="w-3.5 h-3.5" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M7 5H4.5a2.5 2.5 0 002.5 2.5M17 5h2.5A2.5 2.5 0 0117 7.5"/></svg>
          </div>
          <span class="flex-1 text-sm font-medium text-text-main truncate">${r.name}</span>
          <span class="text-sm font-bold text-text-main">${formatFn(r.value)}</span>
        </div>`).join('') : `<div class="text-center text-xs text-text-muted py-4">No data for this selection.</div>`}
    </div>
  </div>`;
}

function renderMgrTopPerformers() {
  const grid = document.getElementById('mgrTopPerfGrid');
  if (!grid) return;
  grid.innerHTML = [
    topPerformersCategoryBox('STIs Submitted', 'stisSubmitted', v => v),
    topPerformersCategoryBox('CA → STI (30D, Min CA 20)', 'caToStiPct', v => `${v}%`),
    topPerformersCategoryBox('Deposits', 'deposits', v => v),
    topPerformersCategoryBox('Lock-ins (Min CA 20)', 'lockinPct', v => `${v}%`),
  ].join('');
}

function buildTeamPerfSummary() {
  const uid = 'team' + (++perfSummaryUidCounter);
  const { good, track, focus } = buildScorecardBands(TEAM_PERF_METRICS.volume, m => m.achieved / m.target * 100);
  const goals = [
    { label:'CA > Lockin (14d)', pct:26, target:40 },
    { label:'CA > F2F (14d)', pct:34, target:45 },
  ];

  return `
    <div class="flex justify-end mb-3">
      <button class="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-xs font-semibold hover:bg-surface cursor-pointer transition-colors" onclick="toggleAdvancedFilter('${uid}')">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke-width="2"/></svg>
        Advanced Filter
      </button>
    </div>
    ${buildAdvancedFilterPanel(uid, state.role === 'senior_manager' ? 'rm_tl' : 'rm')}
    ${buildOverallSummaryRow(good, track, focus, goals)}
    ${buildVolumeMetricsTable(uid, TEAM_PERF_METRICS.volume)}
    ${buildConversionFunnel(uid, TEAM_PERF_METRICS.conversion)}`;
}

function saveReminderMgr() {
  const userId = document.getElementById('reminderUserIdMgr').value.trim();
  const activeType = document.querySelector('#reminderTypeCardsMgr .reminder-type-btn.active')?.dataset.type;
  if (activeType !== 'custom' && !userId) { showToast('User ID is required for this reminder type.', 'error'); return; }
  const dt = document.getElementById('reminderDateTimeMgr').value;
  if (dt && !isFutureDateTime(dt)) { showToast('Reminder date & time must be in the future.', 'error'); return; }
  document.getElementById('reminderUserIdMgr').value = '';
  document.getElementById('reminderDateTimeMgr').value = '';
  document.getElementById('reminderDispositionMgr').value = '';
  document.getElementById('reminderTextMgr').value = '';
  showToast('Reminder saved!', 'success');
}

// ─── ONGOING OFFERS ────────────────────────────────────────────────────────────
const RM_OFFERS_STUDENTS = [
  { key:'sti_jan27', badge:'Jan 2027 STI', title:'Review STI status for Jan 2027 Spring', desc:'Target Intake: Jan 2027 | Status: STI Pending & Active | Last Contact: No call in last 15 days', expires:'2026-09-08' },
  { key:'lead_reengage', badge:'Lead Re-engagement', title:'Last 60 days unconnected leads', desc:'Connect with a lead to evaluate study abroad status | Last Contact: No call in last 20 days', expires:'2026-09-08' },
];
const RM_OFFERS_SSM = [
  { key:'ssm_referral', badge:"Referral Drive Sep'26", title:'Refer a Student Success Manager', desc:'Earn a bonus for every successful RM referral who joins and completes onboarding this month.', expires:'2026-09-30' },
];

const OFFER_GRADIENTS = {
  orange: 'linear-gradient(135deg,#F97316,#C2410C)',
  blue: 'linear-gradient(135deg,#3B82F6,#1D4ED8)',
};

function offerCardHtml(o, theme) {
  return `<div class="relative flex flex-col justify-between rounded-xl p-4 flex-shrink-0" style="min-height:170px;width:280px;background:${OFFER_GRADIENTS[theme]}">
    <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
      <div class="absolute -right-6 -top-6 h-24 w-24 rounded-full" style="background:rgba(255,255,255,0.1)"></div>
      <div class="absolute -bottom-8 -left-4 h-28 w-28 rounded-full" style="background:rgba(255,255,255,0.05)"></div>
    </div>
    <div class="relative z-10 flex flex-col gap-2 flex-1">
      <span class="inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-white" style="background:rgba(255,255,255,0.2)">${o.badge}</span>
      <h3 class="text-base font-bold leading-snug text-white">${o.title}</h3>
      <p class="text-sm leading-relaxed text-white/90">${o.desc}</p>
    </div>
    <div class="relative z-10 mt-2 flex items-center justify-between gap-2">
      <p class="text-xs text-white/80">Expires ${o.expires}</p>
      ${theme === 'orange' ? `<button class="rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-colors cursor-pointer" style="background:rgba(255,255,255,0.2)" onclick="openOfferStudents('${o.key}');event.stopPropagation();">See Students →</button>` : ''}
    </div>
  </div>`;
}

function offersEmptyHtml() {
  return `<div class="w-full py-6 text-center text-sm flex flex-col items-center gap-2" style="color:#64748B">
    <svg class="w-8 h-8" style="color:#64748B" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 010-5A4.8 8 0 0112 8a4.8 8 0 014.5-5 2.5 2.5 0 010 5"/></svg>
    No offers available
  </div>`;
}

function buildOngoingOffers(studentOffers, ssmOffers) {
  return `
    <div class="border rounded-lg overflow-hidden">
      <div class="flex items-center gap-2 px-3 py-3 border-b" style="background:#FFF7ED;border-color:#FFEDD5">
        <svg class="w-4 h-4" style="color:#EA580C" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 010-5A4.8 8 0 0112 8a4.8 8 0 014.5-5 2.5 2.5 0 010 5"/></svg>
        <span class="text-xs font-bold uppercase tracking-wider" style="color:#EA580C">Offers for Students</span>
      </div>
      <div class="flex gap-3 m-3 overflow-x-auto pb-1">
        ${studentOffers.length ? studentOffers.map(o => offerCardHtml(o, 'orange')).join('') : offersEmptyHtml()}
      </div>
    </div>
    <div class="border rounded-lg overflow-hidden">
      <div class="flex items-center gap-2 px-3 py-3 border-b" style="background:#EFF6FF;border-color:#DBEAFE">
        <svg class="w-4 h-4" style="color:#2563EB" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span class="text-xs font-bold uppercase tracking-wider" style="color:#2563EB">Offers for Student Success Managers</span>
        <span class="rounded-full flex items-center border px-2 py-0.5 text-[11px] font-semibold" style="border-color:#FFB74D;background:#FFF3E0;color:#E65100">For You</span>
      </div>
      <div class="flex gap-3 m-3 overflow-x-auto pb-1">
        ${ssmOffers.length ? ssmOffers.map(o => offerCardHtml(o, 'blue')).join('') : offersEmptyHtml()}
      </div>
    </div>`;
}

function findOffer(key) {
  return [...RM_OFFERS_STUDENTS, ...RM_OFFERS_SSM].find(o => o.key === key);
}

function eligibleStudentsFor(key) {
  const all = [
    ...MOCK_LEADS.sti.map(l => ({ ...l, pipeline:'sti' })),
    ...MOCK_LEADS.revenue.map(l => ({ ...l, pipeline:'revenue' })),
    ...MOCK_LEADS.loan.map(l => ({ ...l, pipeline:'loan' })),
  ];
  if (key === 'sti_jan27') return all.filter(l => l.intake === 'Jan 2027');
  if (key === 'lead_reengage') return all.filter(l => l.overdue);
  if (key === 'ssm_referral') return all.filter(l => l.dueToday);
  return all;
}

function openOfferStudents(key) {
  const offer = findOffer(key);
  if (!offer) return;
  const students = eligibleStudentsFor(key);
  const isStudentOffer = RM_OFFERS_STUDENTS.some(o => o.key === key);
  const bannerBg = isStudentOffer ? '#FFF7ED' : '#EFF6FF';
  const bannerText = isStudentOffer ? '#C2410C' : '#1D4ED8';
  const html = `
    <div class="rounded-xl p-4 mb-4" style="background:${bannerBg}">
      <div class="text-sm font-bold mb-1" style="color:${bannerText}">🎁 ${offer.title}</div>
      <div class="text-xs text-text-muted">${offer.desc}</div>
    </div>
    <div class="text-[11px] font-bold uppercase tracking-wide text-text-muted mb-3">Eligible Students (${students.length})</div>
    <div class="space-y-3">
      ${students.length ? students.map(l => `
        <div class="student-card">
          <div class="font-semibold text-sm text-text-main">${l.name}</div>
          <div class="text-xs text-text-muted mb-2 font-mono">${l.id} · ${courseForLead(l)} · ${l.country}</div>
          ${l.caDate ? `<div class="text-xs text-text-muted mb-2 flex items-center gap-1"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/></svg>Follow-up: ${formatDMY(l.caDate)}</div>` : ''}
          <div class="flex gap-2 mt-2">
            <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer transition-colors" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openLeadDetail('${l.pipeline}','${l.id}')">View Student</button>
            <button class="flex-1 text-xs font-semibold py-2 rounded-lg cursor-pointer transition-colors" style="background:#EEF2FF;color:#4338CA;border:1px solid #C7D2FE" onclick="openTaskView('${l.pipeline}','${l.id}')">View Task</button>
          </div>
        </div>`).join('')
        : `<div class="text-center text-sm text-text-muted py-10">No eligible students right now.</div>`}
    </div>`;
  openDrawer('Eligible Students', html);
}

// ─── TOP EARNERS ───────────────────────────────────────────────────────────────
const TOP_EARNERS_THIS_MONTH = [
  { name:'Rahul Kumar', pct:100 },
  { name:'Priya Joshi', pct:82 },
  { name:'Amit Khurana', pct:74 },
  { name:'Sneha Rao', pct:61 },
  { name:'Vikram D.', pct:55 },
];
const TOP_EARNERS_ALL_TIME = [
  { name:'Priya Joshi', pct:100 },
  { name:'Rahul Kumar', pct:91 },
  { name:'Tanvir Ali', pct:78 },
  { name:'Amit Khurana', pct:70 },
  { name:'Meera Nair', pct:58 },
];
const TROPHY_SVG_PATH = '<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>';
const TROPHY_COLORS = ['#EAB308', '#C0C0C0', '#CD7F32'];

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function topEarnerRowHtml(e, i) {
  const rankEl = i < 3
    ? `<div class="w-5 flex-shrink-0 flex items-center justify-center" style="color:${TROPHY_COLORS[i]}"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">${TROPHY_SVG_PATH}</svg></div>`
    : `<div class="w-5 flex-shrink-0 flex items-center justify-center"><span class="text-xs font-medium text-text-muted">${i + 1}</span></div>`;
  return `<div class="flex items-center gap-2">
    ${rankEl}
    <span class="w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0" style="background:#EA580C">${initials(e.name)}</span>
    <p class="text-sm font-medium text-text-main truncate flex-1 min-w-0">${e.name}</p>
    <div class="w-14 flex-1">
      <div class="h-1.5 rounded-full" style="background:#E2E8F0"><div class="h-1.5 rounded-full" style="background:#EA580C;width:${e.pct}%"></div></div>
    </div>
  </div>`;
}

function topEarnersColumnHtml(title, entries) {
  return `<div>
    <p class="text-[10px] font-semibold uppercase tracking-wide mb-3" style="color:#94A3B8">${title}</p>
    <div class="space-y-4">${entries.length ? entries.map(topEarnerRowHtml).join('') : `<div class="text-xs text-text-muted text-center py-4">No data yet</div>`}</div>
  </div>`;
}

function buildTopEarnersSection(thisMonth, allTime) {
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    ${topEarnersColumnHtml('This Month', thisMonth)}
    ${topEarnersColumnHtml('All Time', allTime)}
  </div>`;
}

// ─── MANAGER INCENTIVES ───────────────────────────────────────────────────────
function renderMgrIncentives() {
  const totalPayout = MGR_TEAM.reduce((s, r) => s + r.revenue * 3400 + r.sti * 800 + r.loan * 600, 0);
  const teamEarned = totalPayout + 24800;
  const totalOverdue = MGR_TEAM.reduce((s, r) => s + r.overdue, 0);
  const oppSize = totalOverdue * 18000 + 40000;

  document.getElementById('mgrEarnedAmt').textContent = `₹${teamEarned.toLocaleString('en-IN')}`;
  document.getElementById('mgrOppAmt').textContent = `₹${oppSize.toLocaleString('en-IN')}`;
  document.getElementById('mgrOppSub').textContent = `${TEAM_IBT.reduce((s, i) => s + i.count, 0)} open tasks across the team`;

  const thisMonth = [...MGR_TEAM].map(r => ({ ...r, earned: r.revenue * 3400 + r.sti * 800 + r.loan * 600 })).sort((a, b) => b.earned - a.earned);
  const thisMonthMax = thisMonth[0].earned || 1;
  const allTime = [...MGR_TEAM].map(r => ({ ...r, score: r.revenue * 3400 + r.sti * 800 + r.loan * 600 * 3 + parseInt(r.quality) * 50 })).sort((a, b) => b.score - a.score);
  const allTimeMax = allTime[0].score || 1;
  document.getElementById('body-mgrearners').innerHTML = buildTopEarnersSection(
    thisMonth.map(r => ({ name:r.name, pct:Math.round(r.earned / thisMonthMax * 100) })),
    allTime.map(r => ({ name:r.name, pct:Math.round(r.score / allTimeMax * 100) }))
  );
}

function teamTotalOverdue() { return MGR_TEAM.reduce((s, r) => s + r.overdue, 0); }
function worstRm() { return [...MGR_TEAM].sort((a, b) => b.overdue - a.overdue)[0]; }
function bestQualityRm() { return [...MGR_TEAM].sort((a, b) => parseInt(b.quality) - parseInt(a.quality))[0]; }
function avgTeamQuality() { return Math.round(MGR_TEAM.reduce((s, r) => s + parseInt(r.quality), 0) / MGR_TEAM.length); }

function openMgrDrilldown(rmId) {
  const rm = MGR_TEAM.find(r => r.id === rmId);
  if (!rm) return;
  state.mgrDrilldownRm = rm;
  document.getElementById('mgrOverviewWrap').classList.add('hidden');
  document.getElementById('mgrDrilldown').classList.remove('hidden');
  document.getElementById('mgrDrilldownContent').innerHTML = buildMgrDrilldown(rm);
}

function closeMgrDrilldown() {
  document.getElementById('mgrDrilldown').classList.add('hidden');
  document.getElementById('mgrOverviewWrap').classList.remove('hidden');
}

function buildMgrDrilldown(rm) {
  const esc = {
    support: Math.max(0, Math.ceil(rm.overdue * 0.4)),
    isl: Math.max(0, Math.ceil(rm.overdue * 0.2)),
    msgs: Math.max(0, Math.ceil(rm.overdue * 0.5)),
    is: Math.max(0, Math.ceil(rm.overdue * 0.15)),
  };
  const statCard = (label, val, cls) => `
    <div class="metric-card ${cls} border rounded-xl p-3 text-center">
      <div class="metric-value font-mono text-lg font-extrabold">${val}</div>
      <div class="text-[10px] text-text-muted mt-0.5">${label}</div>
    </div>`;
  return `
    <div class="flex items-center gap-3 mb-5">
      <div class="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:${rm.color}">${rm.initials}</div>
      <div class="flex-1">
        <div class="text-base font-bold">${rm.name}</div>
        <div class="text-xs text-text-muted">RM ID: ${rm.id} · ${statusChip(rm.status)}</div>
      </div>
      <button class="px-3.5 py-1.5 border border-border rounded-lg text-xs font-semibold cursor-pointer hover:bg-surface" onclick="showToast('Opening chat with ${rm.name}...','info')">Message</button>
    </div>
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Pipeline Snapshot</div>
    <div class="grid grid-cols-5 gap-2 mb-5">
      ${statCard('Boost STI', rm.sti, rm.sti > 5 ? 'red' : 'amber')}
      ${statCard('Revenue', rm.revenue, 'green')}
      ${statCard('Loan', rm.loan, rm.loan > 5 ? 'red' : 'amber')}
      ${statCard('Quality', rm.quality, parseInt(rm.quality) >= 80 ? 'green' : parseInt(rm.quality) >= 50 ? 'amber' : 'red')}
      ${statCard('Overdue', rm.overdue, rm.overdue > 5 ? 'red' : 'amber')}
    </div>
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Potential Escalations</div>
    <div class="space-y-1 mb-5 text-xs">
      <div class="flex justify-between py-1 border-b border-border"><span>Customer Support</span><span class="font-bold text-danger font-mono">${esc.support}</span></div>
      <div class="flex justify-between py-1 border-b border-border"><span>Low ISL Feedback</span><span class="font-bold text-accent font-mono">${esc.isl}</span></div>
      <div class="flex justify-between py-1 border-b border-border"><span>Msgs Not Replied</span><span class="font-bold text-danger font-mono">${esc.msgs}</span></div>
      <div class="flex justify-between py-1"><span>IS Pending</span><span class="font-bold text-accent font-mono">${esc.is}</span></div>
    </div>
    <div class="activity-log mb-5">
      <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-1.5">Recent Activity</div>
      <div class="activity-item"><span class="activity-dot"></span><div class="activity-content"><p class="activity-action">Logged a note on a Boost ${rm.sti > rm.loan ? 'STI' : 'Loan'} lead — follow-up scheduled.</p><p class="activity-time">Today</p></div></div>
      <div class="activity-item"><span class="activity-dot"></span><div class="activity-content"><p class="activity-action">${rm.overdue > 3 ? `${rm.overdue} leads are overdue — needs a check-in.` : 'Staying on top of overdue leads this week.'}</p><p class="activity-time">Yesterday</p></div></div>
    </div>
    <div class="flex flex-col gap-2">
      <button class="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer bg-accent text-white hover:bg-accent-dark transition-colors" onclick="showToast('Opening ${rm.name}\\'s full pipeline...','info')">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3 3L22 4"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        View Full Pipeline
      </button>
      <button class="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer border border-border hover:bg-surface transition-colors" onclick="showToast('Nudge sent to ${rm.name}.','success')">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        Send Nudge
      </button>
    </div>`;
}

// ─── INCENTIVES (RM) ──────────────────────────────────────────────────────────
function openOppDetail() {
  document.getElementById('incentivesMainInner').classList.add('hidden');
  document.getElementById('opportunityDetail').classList.remove('hidden');
}

function closeOppDetail() {
  document.getElementById('opportunityDetail').classList.add('hidden');
  document.getElementById('incentivesMainInner').classList.remove('hidden');
}

// ─── PERFORMANCE SUMMARY (RM) ─────────────────────────────────────────────────
function toggleAdvancedFilter(uid) {
  document.getElementById(`advFilterPanel${uid}`).classList.toggle('hidden');
}

function hierDropdownFieldHtml(type, label, uid) {
  const items = type === 'tl' ? TEAM_LEADS_MOCK : mgrScopedTeam();
  const selected = hierSelectedSet(type);
  const wrapId = `advHier_${type}_${uid}`;
  const ddId = `advHierDd_${type}_${uid}`;
  const labelId = `advHierLabel_${type}_${uid}`;
  const btnLabel = selected.size === 0 ? `All ${label}s` : `${label}: ${selected.size} selected`;
  return `
        <div><label class="block text-[10px] font-semibold text-text-muted mb-1">${label}</label>
          <div class="relative" id="${wrapId}">
            <button type="button" onclick="toggleAdvHierDropdown('${ddId}',event)" class="w-full flex items-center justify-between gap-1.5 px-2 py-1.5 border border-border rounded-lg text-xs bg-white cursor-pointer">
              <span id="${labelId}" class="truncate">${btnLabel}</span>
              <svg class="w-3 h-3 flex-shrink-0 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" stroke-width="2"/></svg>
            </button>
            <div id="${ddId}" class="hidden absolute top-full left-0 mt-1 w-48 bg-white rounded-xl border border-border shadow-xl z-[60] overflow-hidden">
              <div class="max-h-44 overflow-y-auto p-2 space-y-1">
                ${items.map(it => `
                  <div class="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface cursor-pointer">
                    <input type="checkbox" class="w-3.5 h-3.5 accent-accent cursor-pointer flex-shrink-0" ${selected.has(it.id) ? 'checked' : ''} onchange="onAdvHierCheck('${type}','${it.id}',this.checked,'${labelId}','${label}')"/>
                    <label class="text-xs text-text-main cursor-pointer leading-tight flex-1">${escHtml(it.name)}</label>
                  </div>`).join('')}
              </div>
            </div>
          </div>
        </div>`;
}

function toggleAdvHierDropdown(ddId, e) {
  e.stopPropagation();
  document.querySelectorAll('[id^="advHierDd_"]').forEach(dd => { if (dd.id !== ddId) dd.classList.add('hidden'); });
  document.getElementById(ddId).classList.toggle('hidden');
}

function onAdvHierCheck(type, id, checked, labelId, label) {
  onHierCheckChange(type, id, checked);
  const n = hierSelectedSet(type).size;
  const el = document.getElementById(labelId);
  if (el) el.textContent = n === 0 ? `All ${label}s` : `${label}: ${n} selected`;
}

function buildAdvancedFilterPanel(uid, hierScope) {
  const hierFieldsHtml = !hierScope ? '' : `${hierDropdownFieldHtml('rm', 'RM', uid)}${hierScope === 'rm_tl' ? hierDropdownFieldHtml('tl', 'TL', uid) : ''}`;
  return `
    <div class="hidden mb-4 p-4 bg-surface rounded-lg border border-border" id="advFilterPanel${uid}">
      <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2.5">Advanced Filters</div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
        <div><label class="block text-[10px] font-semibold text-text-muted mb-1">Intake</label>
          <select class="w-full px-2 py-1.5 border border-border rounded-lg text-xs bg-white"><option>All Intake</option><option>Sep 2026</option><option>Jan 2027</option><option>Apr 2027</option></select></div>
        <div><label class="block text-[10px] font-semibold text-text-muted mb-1">Country</label>
          <select class="w-full px-2 py-1.5 border border-border rounded-lg text-xs bg-white"><option>All Country</option><option>Canada</option><option>UK</option><option>Germany</option><option>Australia</option></select></div>
        <div><label class="block text-[10px] font-semibold text-text-muted mb-1">User Servicing Type</label>
          <select class="w-full px-2 py-1.5 border border-border rounded-lg text-xs bg-white"><option>All User Servicing Type</option><option>Free Service</option><option>Paid Service</option></select></div>
        <div><label class="block text-[10px] font-semibold text-text-muted mb-1">Counsellors</label>
          <select class="w-full px-2 py-1.5 border border-border rounded-lg text-xs bg-white"><option>All Counsellors</option><option>Priya CL</option><option>Amit CL</option><option>Rahul CL</option></select></div>
        <div class="col-span-2 sm:col-span-4"><label class="block text-[10px] font-semibold text-text-muted mb-1">CA Date Range</label>
          <div class="flex items-center gap-2"><input type="date" class="flex-1 min-w-0 px-2 py-1.5 border border-border rounded-lg text-xs"/><span class="text-text-muted text-xs flex-shrink-0">→</span><input type="date" class="flex-1 min-w-0 px-2 py-1.5 border border-border rounded-lg text-xs"/></div></div>${hierFieldsHtml}
      </div>
      <div class="flex justify-end gap-2">
        <button class="px-3 py-1.5 border border-border rounded-lg text-xs font-semibold hover:bg-white cursor-pointer" onclick="resetAdvFilter(${hierScope ? `'${hierScope}'` : 'null'})">Reset</button>
        <button class="px-3 py-1.5 bg-accent hover:bg-accent-dark text-white rounded-lg text-xs font-semibold cursor-pointer" onclick="applyAdvFilter(${hierScope ? `'${hierScope}'` : 'null'})">Apply</button>
      </div>
    </div>`;
}

function applyAdvFilter(hierScope) {
  if (hierScope) refreshMgrFilteredViews();
  showToast('Filters applied.', 'success');
}

function resetAdvFilter(hierScope) {
  if (hierScope) {
    state.hierRmSelected.clear();
    state.hierTlSelected.clear();
    refreshMgrFilteredViews();
  }
  showToast('Filters reset.', 'info');
}

function buildBusinessGoalPanel(goals) {
  const cards = goals.map(g => {
    const status = g.pct >= 80 ? 'Good' : g.pct >= 50 ? 'On Track' : 'Focus';
    const color = g.pct >= 80 ? '#16A34A' : g.pct >= 50 ? '#EA580C' : '#DC2626';
    const bg = g.pct >= 80 ? '#F0FDF4' : g.pct >= 50 ? '#FFF7ED' : '#FEF2F2';
    const border = g.pct >= 80 ? '#BBF7D0' : g.pct >= 50 ? '#FDBA74' : '#FCA5A5';
    return `
      <div class="rounded-lg p-3 text-center" style="background:${bg};border:1px solid ${border}">
        <div class="text-xs font-bold" style="color:${color}">${g.label}</div>
        <div class="text-xl font-extrabold my-1" style="color:${color}">${g.pct}% <span class="text-[11px] font-medium">vs ${g.target}.0% target (${status})</span></div>
        <div class="w-full h-1.5 rounded-full overflow-hidden mt-2" style="background:rgba(0,0,0,0.08)"><div class="h-full rounded-full" style="width:${g.pct}%;background:${color}"></div></div>
      </div>`;
  }).join('');
  return `
    <div class="rounded-xl p-4 border" style="background:#EFF6FF;border-color:#BFDBFE">
      <div class="flex items-center gap-2 mb-3">
        <span>🎯</span>
        <span class="text-xs font-bold uppercase tracking-wide" style="color:#1D4ED8">Important Business Goal</span>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" style="background:#FEE2E2;color:#DC2626">IMP</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${cards}</div>
    </div>`;
}

function buildLegend() {
  return `
    <div class="flex items-center gap-4 flex-wrap text-[10px] text-text-muted mb-4 mt-4">
      <span class="font-semibold uppercase tracking-wide">Legend:</span>
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#16A34A"></span>Good (≥80%)</span>
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#EA580C"></span>On Track (50–79%)</span>
      <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#DC2626"></span>Focus (&lt;50%)</span>
    </div>`;
}

function buildOverallSummaryRow(good, track, focus, goals) {
  return `
    <div class="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 mb-1">
      <div>
        <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Overall Summary</div>
        <div class="space-y-2">
          <div class="scorecard-col green flex items-center gap-2" style="text-align:left;padding:8px 12px"><span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#16A34A"></span><span class="sc-count" style="font-size:15px">${good}</span><span class="sc-label">Good</span></div>
          <div class="scorecard-col amber flex items-center gap-2" style="text-align:left;padding:8px 12px"><span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#EA580C"></span><span class="sc-count" style="font-size:15px">${track}</span><span class="sc-label">On Track</span></div>
          <div class="scorecard-col red flex items-center gap-2" style="text-align:left;padding:8px 12px"><span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#DC2626"></span><span class="sc-count" style="font-size:15px">${focus}</span><span class="sc-label">Focus</span></div>
        </div>
      </div>
      ${buildBusinessGoalPanel(goals)}
    </div>
    ${buildLegend()}`;
}

function buildScorecardBands(metricsArr, getPct) {
  const good = metricsArr.filter(m => getPct(m) >= 80).length;
  const track = metricsArr.filter(m => { const p = getPct(m); return p >= 50 && p < 80; }).length;
  const focus = metricsArr.length - good - track;
  return { good, track, focus };
}

function hashStr(s) {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

function deriveMetricRow(m) {
  const h = hashStr(m.name);
  const targetMTD = m.target;
  const targetYTD = m.target * 6;
  const achvMTD = m.achieved;
  const achvYTD = Math.round(m.achieved * (5 + (h % 3)));
  const y = Math.max(0, Math.round(m.achieved * 0.1) + (h % 3));
  const y1 = Math.max(0, y - (h % 2));
  const y2 = Math.max(0, y1 - ((h >> 1) % 2));
  const w0 = Math.max(0, Math.round(m.achieved * 0.25) + (h % 4));
  const w1 = Math.max(0, w0 - (h % 3));
  const m1 = Math.max(0, Math.round(m.achieved * 0.9) + (h % 5));
  return { targetMTD, targetYTD, achvMTD, achvYTD, y, y1, y2, w0, w1, m1 };
}

function buildVolumeMetricsTable(uid, metrics) {
  metrics = metrics || PERF_METRICS.volume;
  const focusCount = metrics.filter(m => m.achieved / m.target * 100 < 80).length;
  const rows = metrics.map((m, i) => {
    const pct = m.achieved / m.target * 100;
    const dotColor = pct >= 80 ? '#16A34A' : pct >= 50 ? '#EA580C' : '#DC2626';
    const d = deriveMetricRow(m);
    return `<tr class="border-b border-border">
      <td class="py-2 pr-2"><span class="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:${dotColor}"></span></td>
      <td class="py-2 pr-3 whitespace-nowrap">${i + 1}. ${m.name}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.targetYTD}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.targetMTD}</td>
      <td class="py-2 text-right pr-3 font-mono font-bold" style="color:${dotColor}">${d.achvYTD}</td>
      <td class="py-2 text-right pr-3 font-mono font-bold" style="color:${dotColor}">${d.achvMTD}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.y}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.y1}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.y2}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.w0}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.w1}</td>
      <td class="py-2 text-right pr-3 font-mono">${d.m1}</td>
      <td class="py-2">${statusPill(pct)}</td>
    </tr>`;
  }).join('');
  return `
    <div class="flex items-center gap-2 mb-2 flex-wrap">
      <svg class="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10" stroke-width="2"/><line x1="12" y1="20" x2="12" y2="4" stroke-width="2"/><line x1="6" y1="20" x2="6" y2="14" stroke-width="2"/></svg>
      <span class="text-xs font-bold uppercase tracking-wide">Volume Metrics</span>
      <span class="text-[10px] px-2 py-0.5 bg-surface border border-border rounded-full text-text-muted font-semibold">${metrics.length} metrics</span>
      <span class="text-[10px] font-bold text-danger">${focusCount} !</span>
    </div>
    <div class="overflow-x-auto mb-1">
      <table class="w-full text-xs">
        <thead><tr class="text-[9px] uppercase text-text-muted border-b-2 border-border">
          <th></th><th class="text-left py-1.5 pr-3">Metric</th>
          <th class="text-right py-1.5 pr-3">Target YTD</th><th class="text-right py-1.5 pr-3">Target MTD</th>
          <th class="text-right py-1.5 pr-3">Achv YTD</th><th class="text-right py-1.5 pr-3">Achv MTD</th>
          <th class="text-right py-1.5 pr-3">Y</th><th class="text-right py-1.5 pr-3">Y-1</th><th class="text-right py-1.5 pr-3">Y-2</th>
          <th class="text-right py-1.5 pr-3">W0</th><th class="text-right py-1.5 pr-3">W-1</th><th class="text-right py-1.5 pr-3">M-1</th>
          <th class="text-left py-1.5">Status</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

function buildConversionFunnel(uid, metrics) {
  metrics = metrics || PERF_METRICS.conversion;
  const good = metrics.filter(m => m.pct >= 80).length;
  const bad = metrics.length - good;
  const rows = metrics.map((m, i) => `
    <tr class="border-b border-border">
      <td class="py-2 pr-2"><span class="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style="background:${m.pct >= 80 ? '#16A34A' : m.pct >= 50 ? '#EA580C' : '#DC2626'}"></span></td>
      <td class="py-2 pr-3 whitespace-nowrap">${i + 1}. ${m.name}</td>
      <td class="py-2 text-right pr-3 font-mono">${m.target}</td>
      <td class="py-2 text-right pr-3 font-mono font-bold">${m.achieved}</td>
      <td class="py-2">${statusPill(m.pct)}</td>
    </tr>`).join('');
  return `
    <button class="w-full flex items-center gap-2 py-2.5 border-t border-border cursor-pointer" onclick="document.getElementById('convFunnel${uid}').classList.toggle('hidden');this.querySelector('.cf-chev').classList.toggle('rotate-180')">
      <svg class="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke-width="2"/></svg>
      <span class="text-xs font-bold uppercase tracking-wide flex-1 text-left">Conversion Funnel</span>
      <span class="text-[10px] px-2 py-0.5 bg-surface border border-border rounded-full text-text-muted font-semibold">${metrics.length} metrics</span>
      <span class="text-[10px] font-bold text-success">${good} ✓</span>
      <span class="text-[10px] font-bold text-danger">${bad} !</span>
      <svg class="w-3.5 h-3.5 text-text-muted cf-chev transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" stroke-width="2"/></svg>
    </button>
    <div class="hidden pt-1" id="convFunnel${uid}">
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-[9px] uppercase text-text-muted border-b-2 border-border"><th></th><th class="text-left py-1.5">Metric</th><th class="text-right py-1.5">Target</th><th class="text-right py-1.5">Achieved</th><th class="text-left py-1.5">Status</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

let perfSummaryUidCounter = 0;

function buildPerfSummary() {
  const uid = ++perfSummaryUidCounter;
  const { good, track, focus } = buildScorecardBands(PERF_METRICS.volume, m => m.achieved / m.target * 100);
  const goals = [
    { label:'CA > Lockin (14d)', pct:29, target:40 },
    { label:'CA > F2F (14d)', pct:37, target:45 },
  ];

  return `
    <div class="flex justify-end mb-3">
      <button class="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-xs font-semibold hover:bg-surface cursor-pointer transition-colors" onclick="toggleAdvancedFilter('${uid}')">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke-width="2"/></svg>
        Advanced Filter
      </button>
    </div>
    ${buildAdvancedFilterPanel(uid)}
    ${buildOverallSummaryRow(good, track, focus, goals)}
    ${buildVolumeMetricsTable(uid)}
    ${buildConversionFunnel(uid)}`;
}

// ─── TRAINING MODULES ─────────────────────────────────────────────────────────
const LESSON_TYPE_BADGE = {
  document: { bg:'#DBEAFE', text:'#1D4ED8', icon:'<path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>', label:'Document' },
  video: { bg:'#FEF2F2', text:'#B91C1C', icon:'<path d="m10 16.5 6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>', label:'Video' },
};
const SCHOOL_ICON_PATH = '<path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>';
const OPEN_ICON_PATH = '<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>';

function renderTraining() {
  const container = document.getElementById('body-training');
  if (!container) return;

  container.innerHTML = TRAINING_CATS.map(cat => {
    const lessons = cat.lessons.map(l => {
      const badge = LESSON_TYPE_BADGE[l.type];
      return `<div class="flex items-start gap-3 px-4 py-3 border-b border-border last:border-b-0 hover:bg-surface transition-colors">
        <div class="flex-1 min-w-0 flex flex-col gap-0.5">
          <p class="text-sm text-text-main leading-snug">${l.name}</p>
          <p class="text-xs text-text-muted leading-snug">${l.desc}</p>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <span class="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full" style="background:${badge.bg};color:${badge.text}"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">${badge.icon}</svg>${badge.label}</span>
          <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-xs font-semibold cursor-pointer transition-colors" style="background:#443eff" onclick="showToast('Opening: ${l.name}','info')">Open<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">${OPEN_ICON_PATH}</svg></button>
        </div>
      </div>`;
    }).join('');
    return `
      <div class="rounded-lg overflow-hidden" style="background:#F1F5F9;border:1px solid #E2E8F0">
        <button class="w-full flex items-center justify-between gap-4 px-4 py-3.5 hover:bg-surface/60 transition-colors cursor-pointer" onclick="toggleTrainingCat('${cat.key}')">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#EEF2FF"><svg class="w-5 h-5" style="color:#443eff" fill="currentColor" viewBox="0 0 24 24">${SCHOOL_ICON_PATH}</svg></div>
            <div class="flex items-center gap-3">
              <span class="text-sm font-semibold text-text-main">${cat.name}</span>
              <span class="text-xs text-text-muted">${cat.lessons.length} lessons</span>
            </div>
          </div>
          <svg class="w-4 h-4 text-text-muted transition-transform flex-shrink-0" id="tcat-chev-${cat.key}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" stroke-width="2"/></svg>
        </button>
        <div class="hidden bg-white" id="tcat-body-${cat.key}">${lessons}</div>
      </div>`;
  }).join('');
}

function renderImpSheet() {
  const container = document.getElementById('body-imp');
  if (!container) return;
  container.innerHTML = IMP_SHEET_LINKS.map(l => `
    <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors group" onclick="showToast('Opening ${l.name}…','info');return false;">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#EEF2FF"><svg class="w-4 h-4" style="color:#443eff" fill="currentColor" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></div>
      <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-text-main truncate">${l.name}</p></div>
      <svg class="w-4 h-4 text-text-muted flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">${OPEN_ICON_PATH}</svg>
    </a>`).join('');
}

// ─── TICKET MODAL ─────────────────────────────────────────────────────────────
function openTicketModal() {
  const m = document.getElementById('ticketModal');
  m.classList.remove('hidden');
  m.classList.add('flex');
}
function closeTicketModal() {
  const m = document.getElementById('ticketModal');
  m.classList.add('hidden');
  m.classList.remove('flex');
}
function submitTicket() {
  const cat = document.getElementById('ticketCategory').value;
  const desc = document.getElementById('ticketDesc').value.trim();
  if (!cat) { showToast('Please select a ticket type.', 'error'); return; }
  if (!desc) { showToast('Please describe your issue.', 'error'); return; }
  closeTicketModal();
  showToast('Ticket raised! Your TL and Admin have been notified.', 'success');
}

// ─── REMINDER (RM) ─────────────────────────────────────────────────────────────
function saveReminder() {
  const userId = document.getElementById('reminderUserId').value.trim();
  const activeType = document.querySelector('#reminderTypeCards .reminder-type-btn.active')?.dataset.type;
  if (activeType !== 'custom' && !userId) { showToast('User ID is required for this reminder type.', 'error'); return; }
  const dt = document.getElementById('reminderDateTime').value;
  if (dt && !isFutureDateTime(dt)) { showToast('Reminder date & time must be in the future.', 'error'); return; }
  document.getElementById('reminderUserId').value = '';
  document.getElementById('reminderDateTime').value = '';
  document.getElementById('reminderDisposition').value = '';
  document.getElementById('reminderText').value = '';
  showToast('Reminder saved!', 'success');
}

// ─── PERFORMERS ───────────────────────────────────────────────────────────────
function setPerfWindow(window, btn) {
  document.querySelectorAll('#perfToggle button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTopPerformers(window);
}

// ─── TOP PERFORMERS (multi-metric leaderboard) ────────────────────────────────
const ORG_LEADERBOARD_BASE = {
  sti: [{ name:'Rahul Kumar', color:'#f97316', val:12 }, { name:'Priya Joshi', color:'#6d28d9', val:10 }, { name:'Amit Khurana', color:'#0369a1', val:8 }],
  ca_sti: [{ name:'Sneha Rao', color:'#0369a1', val:41 }, { name:'Meera Nair', color:'#16a34a', val:38 }, { name:'Tanvir Ali', color:'#dc2626', val:35 }],
  loan: [{ name:'Arjun Patel', color:'#f97316', val:9 }, { name:'Rahul Kumar', color:'#f97316', val:7 }, { name:'Vikram D.', color:'#7c3aed', val:6 }],
  lockins: [{ name:'Priya Joshi', color:'#6d28d9', val:44 }, { name:'Sneha Rao', color:'#0369a1', val:40 }, { name:'Amit Khurana', color:'#0369a1', val:37 }],
  revenue: [{ name:'Rahul Kumar', color:'#f97316', val:120000 }, { name:'Priya Joshi', color:'#6d28d9', val:100000 }, { name:'Meera Nair', color:'#16a34a', val:86000 }],
  f2f: [{ name:'Amit Khurana', color:'#0369a1', val:62 }, { name:'Sneha Rao', color:'#0369a1', val:55 }, { name:'Tanvir Ali', color:'#dc2626', val:48 }],
};
const TOP_PERFORMER_SECTIONS = [
  { key:'sti', label:'STIs Submitted', suffix:'' },
  { key:'ca_sti', label:'CA→STI (30D, MIN CA 20)', suffix:'%' },
  { key:'loan', label:'Loan Bookings', suffix:'' },
  { key:'lockins', label:'Lock-ins (MIN CA 20)', suffix:'%' },
  { key:'revenue', label:'Revenue', suffix:'₹' },
  { key:'f2f', label:'F2F % (MIN CA 20)', suffix:'%' },
];
const WINDOW_MULTIPLIER = { yesterday:1, month:4.2, '3months':11.5 };

function formatLeaderVal(v, suffix) {
  if (suffix === '₹') return '₹' + (v >= 100000 ? (v/100000).toFixed(1) + 'L' : (v/1000).toFixed(1) + 'K');
  if (suffix === '%') return Math.min(99, Math.round(v)) + '%';
  return Math.round(v);
}

function renderLeaderboardInto(elId, window) {
  const mult = WINDOW_MULTIPLIER[window || 'yesterday'] || 1;
  document.getElementById(elId).innerHTML = TOP_PERFORMER_SECTIONS.map(sec => `
    <div class="border border-border rounded-xl p-3.5 mb-3">
      <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">${sec.label}</div>
      ${ORG_LEADERBOARD_BASE[sec.key].map((p, i) => `
        <div class="flex items-center gap-3 py-1.5">
          <div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style="background:${i === 0 ? '#F97316' : i === 1 ? '#94A3B8' : '#B45309'}">🏆</div>
          <span class="flex-1 text-sm font-medium truncate">${p.name}</span>
          <span class="text-sm font-bold font-mono">${formatLeaderVal(p.val * mult, sec.suffix)}</span>
        </div>`).join('')}
    </div>`).join('');
}

function renderTopPerformers(window) {
  if (document.getElementById('leaderboard')) renderLeaderboardInto('leaderboard', window);
}

// ─── PROFILE ──────────────────────────────────────────────────────────────────
function openProfile() {
  document.getElementById('profileDropdown').classList.add('hidden');
  state.profileOpen = false;
  const html = `
    <div class="text-center mb-4">
      <div class="w-16 h-16 rounded-full bg-accent mx-auto mb-2.5 flex items-center justify-center text-2xl font-bold text-white">AP</div>
      <div class="text-base font-bold">Arjun Patel</div>
      <div class="text-xs text-text-muted">Student Success Manager · ID: RM-001 · arjun.p@leap.in</div>
    </div>
    <div class="rounded-lg p-3.5 mb-3.5 text-center text-white" style="background:linear-gradient(90deg,#0C1A2E,#1D4ED8)">
      <div class="text-[10px] font-bold uppercase tracking-wide text-white/60 mb-1">Performance Rating</div>
      <div class="text-xl font-extrabold text-accent font-mono">7.2 / 10</div>
      <div class="text-[11px] text-white/70 mt-1">Based on STI, Lock-ins (C2I/Prime), Loan VC, F2F, Docs/App Ready, Queries &amp; Quality Score</div>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <div><div class="text-[10px] font-bold uppercase text-text-muted mb-0.5">Joining Date</div><div class="text-sm font-medium">Jan 12, 2025</div></div>
      <div><div class="text-[10px] font-bold uppercase text-text-muted mb-0.5">Customer Rating</div><div class="text-sm font-medium">4.2 / 5</div></div>
      <div><div class="text-[10px] font-bold uppercase text-text-muted mb-0.5">Team Lead</div><div class="text-sm font-medium">Mansi</div></div>
      <div><div class="text-[10px] font-bold uppercase text-text-muted mb-0.5">Senior Manager</div><div class="text-sm font-medium">Shubham Sharma</div></div>
    </div>`;
  openDrawer('My Profile', html);
}

// ─── AI CHATBOT — greeting → mood-check → 5-bucket flow ──────────────────────
let botOpen = false;
let botMoodResolved = false;
const RM_FIRST_NAME = 'Arjun';
const TL_NAME = 'Mansi';
const SM_NAME = 'Shubham Sharma';
const HR_LABEL = 'HR Team';
const DS_LABEL = 'Escalation Desk';
const TODAY_DATE = '2026-09-01';

function toggleBot() {
  botOpen = !botOpen;
  document.getElementById('botPanel').classList.toggle('open', botOpen);
  if (botOpen) {
    document.getElementById('botUnreadBadge').classList.add('hidden');
    switchBotTab('chat');
    initBotGreeting();
  }
}

function switchBotTab(tab) {
  const chatBtn = document.getElementById('botTabChat');
  const actBtn = document.getElementById('botTabActions');
  chatBtn.classList.toggle('border-accent', tab === 'chat');
  chatBtn.classList.toggle('text-accent', tab === 'chat');
  chatBtn.classList.toggle('border-transparent', tab !== 'chat');
  chatBtn.classList.toggle('text-text-muted', tab !== 'chat');
  actBtn.classList.toggle('border-accent', tab === 'actions');
  actBtn.classList.toggle('text-accent', tab === 'actions');
  actBtn.classList.toggle('border-transparent', tab !== 'actions');
  actBtn.classList.toggle('text-text-muted', tab !== 'actions');
  document.getElementById('botChatMode').classList.toggle('hidden', tab !== 'chat');
  document.getElementById('botActionItems').classList.toggle('hidden', tab !== 'actions');
  if (tab === 'actions') renderBotActionItems();
}

function renderBotActionItems() {
  const items = [
    { title:'Follow up with Ananya Sharma', desc:'Missing bank statement — STI docs pending.', badge:'pending', leadId:'RM-2041', pipeline:'sti' },
    { title:'Book Loan VC for Rahul Jain', desc:'Previous slot was cancelled — reschedule ASAP.', badge:'pending', leadId:'RM-2051', pipeline:'loan' },
    { title:'Submit weekly report', desc:'Send your weekly summary to your Team Lead.', badge:'completed' },
  ];
  document.getElementById('botActionItems').innerHTML = items.map(it => `
    <div class="action-item-card ${it.badge === 'completed' ? 'completed' : ''}">
      <div class="flex items-start justify-between gap-2">
        <div class="ai-title">${it.title}</div>
        <span class="ai-badge ${it.badge}">${it.badge === 'completed' ? 'Completed' : 'Pending'}</span>
      </div>
      <div class="ai-desc">${it.desc}</div>
      ${it.badge !== 'completed' ? `<button class="ai-complete-btn" onclick="${it.leadId ? `toggleBot();openLeadDetail('${it.pipeline}','${it.leadId}')` : `showToast('Marked complete.','success')`}">${it.leadId ? 'View Lead' : 'Mark Complete'}</button>` : ''}
    </div>`).join('');
}

function showClearChatConfirm() {
  document.getElementById('botClearConfirm').classList.remove('hidden');
}

function clearChatHistory() {
  document.getElementById('botClearConfirm').classList.add('hidden');
  initBotGreeting();
  showToast('Chat cleared.', 'info');
}

// ── Render helpers ──
function appendUserMsg(text) {
  const container = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'flex justify-end';
  div.innerHTML = `<div class="user-msg-bubble">${escHtml(text)}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function botUserPill(label) {
  const container = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'flex justify-end';
  div.innerHTML = `<span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-semibold">${escHtml(label)}</span>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendBotMsg(html) {
  const container = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'flex gap-2 items-start';
  div.innerHTML = `<div class="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">AI</div><div class="bot-msg-bubble">${html}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showBotTyping() {
  const container = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'flex gap-2 items-start';
  div.id = 'botTypingWrap';
  div.innerHTML = `<div class="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">AI</div><div class="bot-typing"><span></span><span></span><span></span></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeBotTyping() {
  document.getElementById('botTypingWrap')?.remove();
}

function escHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function botSay(html) {
  return new Promise(resolve => {
    showBotTyping();
    setTimeout(() => {
      removeBotTyping();
      appendBotMsg(html);
      resolve();
    }, 500 + Math.random() * 400);
  });
}

function botButtons(list) {
  const container = document.getElementById('botMessages');
  const row = document.createElement('div');
  row.className = 'quick-reply-row';
  list.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'quick-reply-btn';
    btn.textContent = item.label;
    btn.onclick = () => {
      row.querySelectorAll('button').forEach(b => b.disabled = true);
      row.style.display = 'none';
      botUserPill(item.label);
      item.action();
    };
    row.appendChild(btn);
  });
  container.appendChild(row);
  container.scrollTop = container.scrollHeight;
  return row;
}

async function botRedirect(sectionName, action) {
  await botSay(`🎁 Taking you to the ${sectionName} section!`);
  if (botOpen) toggleBot();
  action();
}

function showBotInput(visible) {
  document.getElementById('botInputRow').classList.toggle('hidden', !visible);
}

// ── Role-aware display name ──
function botDisplayName() {
  if (state.role === 'senior_manager') return SM_NAME.split(' ')[0];
  if (state.role === 'team_lead') return TL_NAME.split(' ')[0];
  return RM_FIRST_NAME;
}

// ── Greeting / mood-check ──
function initBotGreeting() {
  document.getElementById('botMessages').innerHTML = '';
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
  appendBotMsg(`${timeGreeting}, ${botDisplayName()}! 👋`);
  botMoodResolved = false;
  showBotInput(true);
  const input = document.getElementById('chatInput');
  input.value = '';
  input.placeholder = 'Say hello';
}

function sendChatMsg() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg || botMoodResolved) return;
  input.value = '';
  appendUserMsg(msg);
  if (/^(hi|hello|hey)\b/i.test(msg)) {
    botSay(`Hi, ${botDisplayName()}! 😊 How is your day going?`).then(() => {
      botButtons([
        { label: 'Good', action: onMoodGood },
        { label: 'Not okay', action: onMoodNotOkay },
      ]);
    });
  } else {
    botSay('Try typing "hi" to get started 👋');
  }
}

async function onMoodGood() {
  botMoodResolved = true;
  showBotInput(false);
  await botSay(`Awesome! I'm ready to help make it even better. How can I help you make it even better today?`);
  showMainMenu();
}

async function onMoodNotOkay() {
  const connectWho = state.role === 'senior_manager' ? 'HR or DS' : 'SM, HR, or DS';
  await botSay(`Oh no, ${botDisplayName()} — sorry to hear this. Want me to connect you with ${connectWho}? Let's get this sorted and make sure you feel better before you start working again.`);
  botButtons([
    { label: 'Yes', action: flowConnect },
    { label: 'No', action: onMoodGood },
  ]);
}

// ── Main menu / buckets ──
const BUCKETS = {
  day: { name: 'My Day & Tasks', icon: '📋' },
  perf: { name: 'Performance & Leaderboard', icon: '🏆' },
  incentives: { name: 'Incentives & Earnings', icon: '💰' },
  learning: { name: 'Learning & Growth', icon: '🎓' },
  support: { name: 'Support & Help', icon: '🛠️' },
};

function showMainMenu() {
  if (state.role === 'senior_manager') {
    botButtons([
      { label: '📢 Send Broadcast Messages', action: flowBroadcast },
      { label: '❓ Questions from RMs and TLs', action: flowQuestionsFromRmsTl },
    ]);
    return;
  }
  botButtons([
    { label: '📋 My Day & Tasks', action: () => showBucket('day') },
    { label: '🏆 Performance & Leaderboard', action: () => showBucket('perf') },
    { label: '💰 Incentives & Earnings', action: () => showBucket('incentives') },
    { label: '🎓 Learning & Growth', action: () => showBucket('learning') },
    { label: '🛠️ Support & Help', action: () => showBucket('support') },
  ]);
}

const BUCKET_SUBS = {
  day: () => [
    { label: 'How to Start my Day', action: flowStartMyDay },
    { label: "Today's Target", action: flowTodaysTarget },
    { label: 'Priority Leads to Call', action: flowPriorityLeads },
    { label: 'What Should I Do This Week', action: flowThisWeek },
    { label: 'F2F Scheduled Today', action: flowF2FToday },
    { label: 'Escalations Needing Response', action: flowEscalations },
  ],
  perf: () => [
    { label: 'Top Performer in Team', action: flowTopPerformer },
    { label: 'How Am I Performing', action: flowHowAmIPerforming },
    { label: 'Where Should I Focus', action: flowWhereFocus },
    { label: 'My Standing vs Team', action: flowMyStanding },
  ],
  incentives: () => [
    { label: 'Live Offers Running?', action: flowLiveOffers },
    { label: 'Incentive Details', action: flowIncentiveDetails },
    { label: 'How Can I Earn More', action: flowEarnMore },
  ],
  learning: () => [
    { label: 'Training / I Want to Learn', action: flowTraining },
  ],
  support: () => [
    { label: 'My Raised Tickets', action: flowMyTickets },
    { label: 'Raise Support Ticket', action: flowRaiseTicket },
    { label: 'Connect with Manager/HR/DS', action: flowConnect },
    { label: 'Ask TL a Question', action: flowAskTL },
  ],
};

async function showBucket(key) {
  const b = BUCKETS[key];
  await botSay(`Sure! Here's what I can help with under ${b.icon} ${b.name} 👇`);
  const subs = BUCKET_SUBS[key]();
  subs.push({ label: '⬅ Back to Main Menu', action: showMainMenu });
  botButtons(subs);
}

// ── Bucket 1: My Day & Tasks ──
async function flowStartMyDay() {
  const overdueSti = MOCK_LEADS.sti.filter(l => l.overdue);
  const overdueRev = MOCK_LEADS.revenue.filter(l => l.overdue);
  const calls = [...overdueSti, ...overdueRev].slice(0, 2);
  const callLines = calls.map(l => `📞 Call ${l.name} — ${l.status}`).join('<br>');
  await botSay(`Good morning, ${RM_FIRST_NAME}! Here's your day plan 📋<br><br><strong>Yesterday's Report Card:</strong><br>🔴 STI: 7<br>🟡 Revenue (Lock-ins): 4<br>🔴 Loan: 9<br><br><strong>Top Actions for Today:</strong><br>${callLines}<br>🎯 Boost Loan — needs focus today<br><br>Where do you want to start?`);
  const btns = calls.map(l => ({
    label: `Call ${l.name.split(' ')[0]}`,
    action: () => botRedirect(l.name, () => openLeadDetail(MOCK_LEADS.sti.includes(l) ? 'sti' : 'revenue', l.id)),
  }));
  btns.push({ label: '🎯 Boost Loan', action: () => botRedirect('Boost Loan', () => openPipeline('loan')) });
  btns.push({ label: 'No thanks', action: () => botSay('👍 Let me know if you need anything else.') });
  botButtons(btns);
}

async function flowTodaysTarget() {
  await botSay(`🎯 Your targets for today:<br>STI: 2/3<br>Loan: 1/2<br>Revenue (Lock-ins): 1/1<br><br>Should I take you to the Boost Tasks section?`);
  botButtons([
    { label: 'Yes, take me there!', action: () => botRedirect('Boost Loan', () => openPipeline('loan')) },
    { label: 'No thanks', action: () => botSay('👍 Anytime!') },
  ]);
}

async function flowPriorityLeads() {
  const all = [...MOCK_LEADS.sti, ...MOCK_LEADS.revenue, ...MOCK_LEADS.loan];
  const priority = all.filter(l => l.overdue || l.dueToday).slice(0, 3);
  if (!priority.length) {
    await botSay(`✅ You're all caught up — no priority leads to call right now.`);
    return;
  }
  const lines = priority.map(l => `• ${l.name} — ${l.status}`).join('<br>');
  await botSay(`📞 Priority leads to call today:<br>${lines}<br><br>Should I take you to the full list?`);
  botButtons([
    { label: 'Yes, take me there!', action: () => botRedirect('Boost Tasks', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Good luck today!') },
  ]);
}

async function flowThisWeek() {
  await botSay(`📅 Here's what's still open right now:<br>🎯 ${MOCK_LEADS.sti.length} STI tasks open<br>💰 ${MOCK_LEADS.revenue.length} Revenue tasks open<br>💳 ${MOCK_LEADS.loan.length} Loan tasks open<br>🚨 19 escalations pending<br>📋 12 business tasks pending<br><br>Want to open your full task list?`);
  botButtons([
    { label: 'Yes, take me there!', action: () => botRedirect('Tasks & Performance', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Sounds good.') },
  ]);
}

async function flowF2FToday() {
  const all = [...MOCK_LEADS.sti, ...MOCK_LEADS.revenue, ...MOCK_LEADS.loan];
  const today = all.filter(l => l.f2fDate === TODAY_DATE);
  if (!today.length) {
    await botSay('📅 No F2F sessions scheduled today.');
    return;
  }
  const preview = today.slice(0, 3).map(l => `• ${l.name} — ${l.country} · ${l.f2fDate}`).join('<br>');
  await botSay(`📅 You have ${today.length} lead(s) with an F2F scheduled today.<br>${preview}<br><br>View the full list?`);
  botButtons([
    { label: 'View All', action: () => botRedirect('Tasks & Performance', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Noted.') },
  ]);
}

async function flowEscalations() {
  await botSay(`⏰ You have escalations needing a response:<br>🚨 Messages Not Replied: 8<br>🚨 IS Pending: 2<br>🚨 Low ISL Feedback: 3<br><br>View the full list?`);
  botButtons([
    { label: 'View All', action: () => botRedirect('Potential Escalations', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Got it.') },
  ]);
}

// ── Bucket 2: Performance & Leaderboard ──
async function flowTopPerformer() {
  await botSay('Great question! Which metric are you asking about?');
  botButtons([
    { label: 'Revenue', action: () => showTopPerformerResult('revenue', 'Revenue') },
    { label: 'STI', action: () => showTopPerformerResult('sti', 'STI') },
    { label: 'Loan', action: () => showTopPerformerResult('loan', 'Loan') },
  ]);
}

async function showTopPerformerResult(metric, label) {
  const sorted = [...MGR_TEAM].sort((a, b) => b[metric] - a[metric]).slice(0, 3);
  const medals = ['🥇', '🥈', '🥉'];
  const lines = sorted.map((r, i) => `${medals[i]} ${r.name} — ${r[metric]}`).join('<br>');
  await botSay(`📊 Top performers for ${label}:<br>${lines}`);
  botButtons([{ label: 'Show me the leaderboard', action: () => botRedirect('Top Performers', () => switchTab('tasks')) }]);
}

async function flowHowAmIPerforming() {
  const good = PERF_METRICS.volume.filter(m => m.achieved / m.target * 100 >= 80).length;
  const track = PERF_METRICS.volume.filter(m => { const p = m.achieved / m.target * 100; return p >= 50 && p < 80; }).length;
  const focus = PERF_METRICS.volume.length - good - track;
  await botSay(`📊 Your performance snapshot:<br>✅ Good: ${good} metrics<br>🟡 On Track: ${track} metrics<br>🔴 Focus: ${focus} metrics<br><br>🎯 CA→Lock-in (14d): 37% — On Track<br>🎯 CA→C2I (14d): 29% — Focus<br><br>Want the full scorecard?`);
  botButtons([
    { label: 'Yes, show full table', action: () => botRedirect('Performance Summary', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Keep it up!') },
  ]);
}

async function flowWhereFocus() {
  botButtons([
    { label: 'Input Metrics', action: flowFocusInput },
    { label: 'Output Metrics', action: flowFocusOutput },
  ]);
}

async function flowFocusInput() {
  await botSay(`📥 Here's where your input quality needs attention:<br>🎯 Quality Score: 59% (1st) / 85% (2nd)<br>🚨 Low ISL Feedback: 3<br>🚨 Messages Not Replied: 8<br>🚨 IS Pending: 2`);
  botButtons([{ label: 'Open Boost Input', action: () => botRedirect('Boost Input', () => switchTab('tasks')) }]);
}

async function flowFocusOutput() {
  await botSay(`🚀 Your priority output actions today:<br>🎯 Boost STI — 7 leads (2 due today)<br>💰 Boost Revenue — 4 leads (1 due today)<br>💳 Boost Loan — 9 leads (1 due today)`);
  botButtons([{ label: 'Open Boost Output', action: () => botRedirect('Boost Output', () => switchTab('tasks')) }]);
}

async function flowMyStanding() {
  await botSay('Which metric would you like to compare?');
  botButtons([
    { label: 'Revenue', action: () => showStandingResult('revenue', 'Revenue') },
    { label: 'STI', action: () => showStandingResult('sti', 'STI') },
    { label: 'Quality', action: () => showStandingResult('qualityNum', 'Quality') },
  ]);
}

async function showStandingResult(metric, label) {
  const me = MGR_TEAM.find(r => r.name === 'Arjun Patel');
  const valOf = r => metric === 'qualityNum' ? parseInt(r.quality) : r[metric];
  const myVal = valOf(me);
  const worse = MGR_TEAM.filter(r => r !== me && valOf(r) < myVal).length;
  const peers = MGR_TEAM.length - 1;
  const pct = peers ? Math.round(worse / peers * 100) : 0;
  await botSay(`📈 Here's how you compare on ${label}:<br>You're doing better than ${pct}% of your team. ${peers - worse} teammate(s) are ahead of you on this metric.<br><br>Want to see the full ranking?`);
  botButtons([
    { label: 'Yes, show me', action: () => botRedirect('Team Overview', () => switchTab('tasks')) },
    { label: 'No thanks', action: () => botSay('👍 Keep pushing!') },
  ]);
}

// ── Bucket 3: Incentives & Earnings ──
async function flowLiveOffers() {
  await botSay(`🏷️ You have 2 active offers running:<br>• Referral Drive Sep'26 — +₹2K<br>• Lock-in Sprint Bonus — Ends Sep 15`);
  botButtons([{ label: 'View Offers', action: () => botRedirect('Ongoing Offers', () => switchTab('incentives')) }]);
}

async function flowIncentiveDetails() {
  await botSay(`💰 You've earned ₹18,400 this month. Want the full breakdown?`);
  botButtons([
    { label: 'Yes, show breakdown', action: () => botRedirect('Incentives & Earnings', () => switchTab('incentives')) },
    { label: 'No thanks', action: () => botSay('👍 Keep it up!') },
  ]);
}

async function flowEarnMore() {
  await botSay(`🚀 Your opportunity pipeline is worth ₹2,84,000 across 14 open tasks.<br><br>3 ways to earn more:<br>• Close overdue lock-ins — ₹96,000 opportunity<br>• Push Loan VC bookings — ₹76,000 opportunity<br>• Complete STI docs — ₹1,12,000 opportunity`);
  botButtons([{ label: 'View Opportunity Pipeline', action: () => botRedirect('Opportunity Pipeline', () => { switchTab('incentives'); openOppDetail(); }) }]);
}

// ── Bucket 4: Learning & Growth ──
async function flowTraining() {
  await botSay('🎓 Which area would you like to train in?');
  botButtons(TRAINING_CATS.map((cat, idx) => ({
    label: cat.name,
    action: () => botRedirect('Training', () => {
      switchTab('ld');
      setTimeout(() => {
        const body = document.getElementById(`tcat-body-${idx}`);
        if (body && !body.classList.contains('open')) toggleTrainingCat(idx);
      }, 300);
    }),
  })));
}

// ── Bucket 5: Support & Help ──
async function flowMyTickets() {
  await botSay(`🎫 You have 8 tickets raised — 5 resolved, 3 open.`);
  botButtons([{ label: 'View Tickets', action: () => botRedirect('Learning & Development', () => switchTab('ld')) }]);
}

async function flowRaiseTicket() {
  await botSay(`Need help with something? Let's get it fixed for you right away.<br>Should I take you to the Raise Support Ticket page?`);
  botButtons([
    { label: 'Yes, take me there!', action: () => botRedirect('Raise Support Ticket', () => { switchTab('ld'); openTicketModal(); }) },
    { label: 'No thanks', action: () => botSay('👍 I\'m here if you need me.') },
  ]);
}

async function flowConnect() {
  await botSay('Please let me know with whom you want to connect.');
  const btns = [];
  if (state.role !== 'senior_manager') btns.push({ label: 'SM', action: () => showConnectForm('SM', SM_NAME) });
  btns.push({ label: 'HR', action: () => showConnectForm('HR', HR_LABEL) });
  btns.push({ label: 'DS', action: () => showConnectForm('DS', DS_LABEL) });
  botButtons(btns);
}

// ── Senior Manager only: Broadcast Messages ──
const SM_BROADCAST_AUDIENCES = [
  { key:'rm', label:'RMs', desc:'All Student Success Managers' },
  { key:'tl', label:'TLs', desc:'All Team Leads' },
  { key:'all', label:'Entire Org (RM + TL)', desc:'Every RM and Team Lead' },
];

async function flowBroadcast() {
  await botSay('Who would you like to send this broadcast to?');
  botButtons(SM_BROADCAST_AUDIENCES.map(a => ({ label: a.label, action: () => showBroadcastForm(a) })));
}

function showBroadcastForm(audience) {
  const container = document.getElementById('botMessages');
  const uid = 'broadcastForm_' + Date.now();
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="bot-msg-bubble" style="max-width:100%">
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Broadcast to ${escHtml(audience.desc)}</div>
    <textarea class="w-full px-2.5 py-2 border border-border rounded-lg text-xs mb-2" rows="3" maxlength="500" placeholder="Type your broadcast message…" id="${uid}_msg"></textarea>
    <button class="w-full py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer opacity-50" id="${uid}_submit" disabled>Send Broadcast</button>
  </div>`;
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
  const msgInput = wrap.querySelector(`#${uid}_msg`);
  const submitBtn = wrap.querySelector(`#${uid}_submit`);
  msgInput.addEventListener('input', () => {
    const ok = msgInput.value.trim().length > 0;
    submitBtn.disabled = !ok;
    submitBtn.classList.toggle('opacity-50', !ok);
  });
  submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return;
    wrap.remove();
    botUserPill(`Broadcast to ${audience.label}`);
    const countLabel = audience.key === 'rm' ? `${MGR_TEAM.length} RMs`
      : audience.key === 'tl' ? `${TEAM_LEADS_MOCK.length} TLs`
      : `${MGR_TEAM.length} RMs + ${TEAM_LEADS_MOCK.length} TLs`;
    await botSay(`📢 Broadcast sent to ${countLabel}!`);
    showToast(`Broadcast sent to ${audience.desc}.`, 'success');
  });
}

// ── Senior Manager only: Questions from RMs and TLs ──
const SM_INBOX_MOCK = [
  { id:'Q-901', from:'Arjun Patel', role:'RM', text:"Can I get sign-off to override the STI docs deadline for RM-2041? Bank statement is delayed on the student's end.", date:'2026-09-12 10:15', answered:false },
  { id:'Q-902', from:'Mansi', role:'TL', text:'Requesting approval to redistribute 2 overdue Loan VC leads from Vikram D. to Meera Nair this week.', date:'2026-09-12 14:40', answered:false },
  { id:'Q-903', from:'Noushad', role:'TL', text:'Can we get an extra training slot on Objection Handling for 2 new RMs joining next week?', date:'2026-09-11 09:00', answered:true },
];

async function flowQuestionsFromRmsTl() {
  const pending = SM_INBOX_MOCK.filter(q => !q.answered);
  if (!pending.length) {
    await botSay('✅ No open questions from RMs or TLs right now.');
    return;
  }
  await botSay(`📥 You have ${pending.length} open question(s):`);
  pending.forEach(q => {
    appendBotMsg(`<div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-1">${escHtml(q.from)} · ${q.role} · ${q.date}</div><div class="text-sm">${escHtml(q.text)}</div>`);
  });
  botButtons(pending.map(q => ({ label: `Reply to ${q.from.split(' ')[0]}`, action: () => showSmReplyForm(q) })));
}

function showSmReplyForm(q) {
  const container = document.getElementById('botMessages');
  const uid = 'smReply_' + Date.now();
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="bot-msg-bubble" style="max-width:100%">
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Reply to ${escHtml(q.from)}</div>
    <textarea class="w-full px-2.5 py-2 border border-border rounded-lg text-xs mb-2" rows="2" placeholder="Type your reply…" id="${uid}_msg"></textarea>
    <button class="w-full py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer opacity-50" id="${uid}_submit" disabled>Send Reply</button>
  </div>`;
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
  const msgInput = wrap.querySelector(`#${uid}_msg`);
  const submitBtn = wrap.querySelector(`#${uid}_submit`);
  msgInput.addEventListener('input', () => {
    const ok = msgInput.value.trim().length > 0;
    submitBtn.disabled = !ok;
    submitBtn.classList.toggle('opacity-50', !ok);
  });
  submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return;
    wrap.remove();
    q.answered = true;
    botUserPill(`Reply to ${q.from}`);
    await botSay(`✅ Your reply has been sent to ${q.from}.`);
    showToast(`Reply sent to ${q.from}.`, 'success');
  });
}

function showConnectForm(type, recipientName) {
  const container = document.getElementById('botMessages');
  const uid = 'connectForm_' + Date.now();
  const slots = ['Morning', 'Afternoon', 'Evening', 'Post Office Hours'];
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="bot-msg-bubble" style="max-width:100%">
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Connect with ${escHtml(recipientName)}</div>
    <textarea class="w-full px-2.5 py-2 border border-border rounded-lg text-xs mb-2" rows="2" placeholder="What would you like to discuss?" id="${uid}_msg"></textarea>
    <div class="text-[10px] font-semibold text-text-muted mb-1.5">Preferred time (pick 2)</div>
    <div class="flex flex-wrap gap-1.5 mb-2.5" id="${uid}_slots">
      ${slots.map(s => `<button type="button" class="px-2.5 py-1 border border-border rounded-full text-[10px] font-medium cursor-pointer" data-slot="${s}">${s}</button>`).join('')}
    </div>
    <button class="w-full py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer opacity-50" id="${uid}_submit" disabled>Submit</button>
  </div>`;
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;

  const selectedSlots = new Set();
  const msgInput = wrap.querySelector(`#${uid}_msg`);
  const submitBtn = wrap.querySelector(`#${uid}_submit`);
  const updateSubmit = () => {
    const ok = msgInput.value.trim().length > 0 && selectedSlots.size > 0;
    submitBtn.disabled = !ok;
    submitBtn.classList.toggle('opacity-50', !ok);
  };
  msgInput.addEventListener('input', updateSubmit);
  wrap.querySelectorAll(`#${uid}_slots button`).forEach(btn => {
    btn.addEventListener('click', () => {
      const slot = btn.dataset.slot;
      if (selectedSlots.has(slot)) { selectedSlots.delete(slot); btn.classList.remove('bg-accent', 'text-white', 'border-accent'); }
      else { selectedSlots.add(slot); btn.classList.add('bg-accent', 'text-white', 'border-accent'); }
      updateSubmit();
    });
  });
  submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return;
    wrap.remove();
    botUserPill(`Connect with ${type}`);
    await botSay('I have notified the team! They will reach out to you shortly.');
    showToast(`${recipientName} has been notified.`, 'success');
  });
}

async function flowAskTL() {
  showAskForm(TL_NAME);
}

function showAskForm(recipientName) {
  const container = document.getElementById('botMessages');
  const uid = 'askForm_' + Date.now();
  const wrap = document.createElement('div');
  wrap.innerHTML = `<div class="bot-msg-bubble" style="max-width:100%">
    <div class="text-[10px] font-bold uppercase tracking-wide text-text-muted mb-2">Ask ${escHtml(recipientName)}</div>
    <textarea class="w-full px-2.5 py-2 border border-border rounded-lg text-xs mb-2" rows="2" placeholder="Type your question…" id="${uid}_msg"></textarea>
    <button class="w-full py-1.5 bg-accent text-white text-xs font-semibold rounded-lg cursor-pointer opacity-50" id="${uid}_submit" disabled>Submit</button>
  </div>`;
  container.appendChild(wrap);
  container.scrollTop = container.scrollHeight;
  const msgInput = wrap.querySelector(`#${uid}_msg`);
  const submitBtn = wrap.querySelector(`#${uid}_submit`);
  msgInput.addEventListener('input', () => {
    const ok = msgInput.value.trim().length > 0;
    submitBtn.disabled = !ok;
    submitBtn.classList.toggle('opacity-50', !ok);
  });
  submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return;
    wrap.remove();
    botUserPill('Ask TL a Question');
    await botSay(`✅ Your question has been sent to ${recipientName}. They'll get a notification and respond soon.`);
    showToast(`Question sent to ${recipientName}.`, 'success');
  });
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
const ADMIN_METRICS = [
  'Leads Assigned', 'F2F Attended', 'Lock-ins (C2I + Prime)', 'Loan VC Booked',
  'Loan VC Joined', 'Docs Collected', 'App Ready Completed', 'Queries to Counsellor',
  'C2I Revenue', 'Total Drop'
];
const ADMIN_METRIC_TARGETS = [80, 30, 15, 12, 10, 25, 20, 8, 14, 5];

const PAYOUT_COMPONENTS = [
  { name:'Deposits', unit:'Per deposit', rate:2000, period:'Monthly' },
  { name:'Lock-in (C2I)', unit:'Per C2I', rate:4000, period:'Monthly' },
  { name:'Lock-in (Prime)', unit:'Per Prime', rate:2500, period:'Monthly' },
  { name:'Loan VC Attended', unit:'Per VC', rate:1500, period:'Monthly' },
  { name:'F2F Conversion Bonus', unit:'Per F2F above target', rate:800, period:'Monthly' },
  { name:'Quality Score Bonus', unit:'Per % above 80%', rate:200, period:'Monthly' },
];

let adminPayoutRows = JSON.parse(JSON.stringify(PAYOUT_COMPONENTS));

const TICKET_CATEGORIES = ['Technical Issue', 'Data Correction', 'Policy Question', 'Access Request', 'Other'];
let adminTicketCats = [...TICKET_CATEGORIES];

function switchAdminTab(tab, btn) {
  const panelIds = { pipeline:'adminPipeline', incentive:'adminIncentive', ld:'adminLD' };
  Object.entries(panelIds).forEach(([t, id]) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', t !== tab);
  });
  document.querySelectorAll('.adm-nav').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (tab === 'incentive') renderAdminMetrics();
  if (tab === 'ld') renderAdminLD();
}

function renderAdminMetrics() {
  const tbody = document.getElementById('adminMetricRows');
  tbody.innerHTML = ADMIN_METRICS.map((m, i) => `
    <tr class="border-b border-border">
      <td class="py-2">${m}</td>
      <td class="py-2"><input class="w-20 px-2 py-1 border border-border rounded text-xs" type="number" value="${ADMIN_METRIC_TARGETS[i]}" min="0"/></td>
      <td class="py-2"><button class="px-2 py-1 border border-border rounded text-[10px] font-semibold hover:bg-surface cursor-pointer" onclick="showToast('Target updated.','success')">Save</button></td>
    </tr>`).join('');

  const payoutTbody = document.getElementById('adminPayoutRows');
  payoutTbody.innerHTML = adminPayoutRows.map((p, i) => `
    <tr class="border-b border-border">
      <td class="py-2"><input class="w-40 px-2 py-1 border border-border rounded text-xs" value="${p.name}"/></td>
      <td class="py-2"><input class="w-28 px-2 py-1 border border-border rounded text-xs" value="${p.unit}"/></td>
      <td class="py-2"><input class="w-20 px-2 py-1 border border-border rounded text-xs" type="number" value="${p.rate}"/></td>
      <td class="py-2"><input class="w-20 px-2 py-1 border border-border rounded text-xs" value="${p.period}"/></td>
      <td class="py-2"><button class="px-2 py-1 border border-red-200 bg-red-50 text-danger rounded text-[10px] font-semibold cursor-pointer" onclick="removePayoutRow(${i})">Remove</button></td>
    </tr>`).join('');
}

function addPayoutRow() {
  adminPayoutRows.push({ name:'New Component', unit:'Per unit', rate:0, period:'Monthly' });
  renderAdminMetrics();
}

function removePayoutRow(i) {
  adminPayoutRows.splice(i, 1);
  renderAdminMetrics();
}

function saveIncentiveConfig() { showToast('Incentive config saved.', 'success'); }

function renderAdminLD() {
  const list = document.getElementById('adminModuleList');
  list.innerHTML = TRAINING_CATS.map((cat) => `
    <div class="bg-white border border-border rounded-lg mb-2 overflow-hidden">
      <div class="flex items-center gap-2 px-3.5 py-2.5 bg-surface border-b border-border">
        <strong class="flex-1 text-xs">${cat.name}</strong>
        <button class="px-2 py-1 border border-border rounded text-[10px] font-semibold hover:bg-white cursor-pointer" onclick="showToast('Add lesson coming soon','info')">+ Add Lesson</button>
      </div>
      ${cat.lessons.map(l => `
        <div class="flex items-center gap-2.5 px-3.5 py-2 border-b border-border text-xs last:border-b-0">
          <div class="flex-1">${l.name}</div>
          <div class="text-text-muted">${l.dur}</div>
          <div>${l.done ? '<span class="ai-badge completed">Active</span>' : '<span class="ai-badge pending">Active</span>'}</div>
          <div class="flex gap-1">
            <button class="px-2 py-1 border border-border rounded text-[10px] font-semibold hover:bg-surface cursor-pointer" onclick="showToast('Edit coming soon','info')">Edit</button>
            <button class="px-2 py-1 border border-red-200 bg-red-50 text-danger rounded text-[10px] font-semibold cursor-pointer" onclick="showToast('Module retired.','info')">Retire</button>
          </div>
        </div>`).join('')}
    </div>`).join('');

  const cats = document.getElementById('adminTicketCats');
  cats.innerHTML = adminTicketCats.map((c, i) => `
    <div class="flex items-center gap-2.5 bg-white border border-border rounded-lg px-3.5 py-2">
      <input class="flex-1 px-2 py-1 border border-border rounded text-xs admin-ticket-cat-name" value="${c}"/>
      <button class="px-2 py-1 border border-border rounded text-[10px] font-semibold hover:bg-surface cursor-pointer" onclick="saveCat(${i})">Save</button>
      <button class="px-2 py-1 border border-red-200 bg-red-50 text-danger rounded text-[10px] font-semibold cursor-pointer" onclick="removeCat(${i})">Remove</button>
    </div>`).join('');
}

function saveCat(i) {
  const inputs = document.querySelectorAll('#adminTicketCats .admin-ticket-cat-name');
  adminTicketCats[i] = inputs[i].value;
  showToast('Category saved.', 'success');
}

function removeCat(i) {
  adminTicketCats.splice(i, 1);
  renderAdminLD();
}

function addTicketCat() {
  adminTicketCats.push('New Category');
  renderAdminLD();
  const sel = document.getElementById('ticketCategory');
  if (sel) {
    const opt = document.createElement('option');
    opt.textContent = 'New Category';
    sel.appendChild(opt);
  }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
function renderRmBoostSeverity() {
  applyBoostCardSeverity('boostCardSti', 7);
  applyBoostCardSeverity('boostCardRevenue', 6);
  applyBoostCardSeverity('boostCardLoan', 9);
  const avgQualityPct = Math.round(QUALITY_SCORE_BUCKETS.reduce((s, b) => s + b.pct, 0) / QUALITY_SCORE_BUCKETS.length);
  applySeverityToCard('boostCardQuality', qualitySeverity(avgQualityPct));
  document.getElementById('qualityScoreBars').innerHTML = qualityScoreBarsHtml(QUALITY_SCORE_BUCKETS);
  applySeverityToCard('boostCardEscalations', boostSeverityWide(RM_ESCALATIONS.reduce((s, e) => s + e.count, 0)));
  applySeverityToCard('boostCardOwnTasks', boostSeverity(5));
  document.getElementById('rmEscalationList').innerHTML = RM_ESCALATIONS.map(e => escRowHtml(e.label, e.count)).join('');
}

function boot() {
  document.getElementById('perfSummaryContent').innerHTML = buildPerfSummary();

  renderTraining();
  renderImpSheet();
  updateCallStatus('active');
  renderTopPerformers('yesterday');
  renderRmBoostSeverity();
  document.getElementById('body-offers').innerHTML = buildOngoingOffers(RM_OFFERS_STUDENTS, RM_OFFERS_SSM);
  document.getElementById('body-earners').innerHTML = buildTopEarnersSection(TOP_EARNERS_THIS_MONTH, TOP_EARNERS_ALL_TIME);
  document.getElementById('reminderDateTime').min = nowLocalISO();
  document.getElementById('reminderDateTimeMgr').min = nowLocalISO();
  populateQueryLeadSelects();
}

boot();
