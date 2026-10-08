/* ═══════════════ DIRECT 2ND CALL (SKIPPING 1ST CALL COUNSELLOR) ═══════════════
 * Pilot role for counsellors who only take Direct 2nd Call leads: students who
 * filled the 19-field intake in the product and paid a token, so they skip the
 * 1st call and book a 2nd call straight away. Tagged "Product led paid lead".
 *
 * Logged in as role "skip_counselor", bootApp() runs the normal counsellor
 * dashboard (state.role = 'counselor') with state.d2cPilot = true, then calls
 * initDirect2nd(true), which adds:
 *   - Header: a red count on the existing "View assigned leads" button and
 *     the next-call card under it (closes on any outside click).
 *   - Inside the shared View assigned leads page (production shell in
 *     index.html): Next 2nd call panel + one card per lead
 *     (design: github.com/ayush-puhan/skip-1st-call).
 *   - IELTS Status and Service Type: not on the card. "Completed" opens the
 *     second-call disposition, which requires both. Without the 1st call nobody
 *     else captures them, and the new CRM won't create tasks without them.
 *   - Case study / timeline pop-ups; View Profile (ISL Discussion summary, as in
 *     Course Finder) → View Complete Details (the lead page, same layout as
 *     the RM CRM's); View Summary (markdown profile summary).
 * All data is mock, like the rest of this app.
 */
(function () {
  const IELTS_OPTIONS = ['Not started', 'Preparing', 'Exam booked', 'Given (score)', 'Not required (waiver)'];
  const SERVICE_OPTIONS = [
    { value: 'partner',              label: 'Free service (Partner)' },
    { value: 'np-premium',           label: 'Paid service · Premium universities' },
    { value: 'np-specialised',       label: 'Paid service · Specialised services' },
    { value: 'np-paid-application',  label: 'Paid service · Paid application' },
  ];
  const TYPES = ['ROI focused', 'Career switcher', 'Needs profile support', 'Dream university in mind'];
  const DAILY_MIN = 4, DAILY_MAX = 6;

  const LEADS = [
    { id:'LD-483077', name:'Arjun Mehta', slot:'4:30 PM', mins:38, done:false, sku:'Premium', studentIn:false, app:null, mentor:'Priya', country:'UK', course:'MBA', intake:'Jan 2027', fly:'Jan 2027',
      one:'MBA in the UK for Jan 2027, ₹30–35 lakh self-funded, 3 years of work. Wants highly ranked colleges; parents not consulted yet.',
      f:{ career:'Consulting / strategy roles in the UK', priority:'Highly ranked colleges', budget:'₹30–35 lakh', funding:'Self-funded', parents:'No', qual:"Bachelor's", bachelors:'B.Com', score:'72%', gap:'No', gapMonths:'', workEx:'3', salary:'₹9 LPA', email:'arjun.mehta@gmail.com', city:'Pune', questions:'Is GMAT mandatory for a one-year MBA?' },
      c:{ who:'Rohan K.', story:'B.Com, 3 years in audit, similar budget and no GMAT. Got into a one-year UK MBA for Jan 2026 and now works in consulting in London.', why:['Same course','Similar budget','3 years of work','No GMAT'], sim:[['Neha S.','B.Com, 4 years in finance','MBA, UK, Jan 2026'],['Aditya P.','BBA, 3 years in sales','MBA, UK, Sep 2025'],['Simran K.','B.Com, 2 years in audit','MBA, UK, Jan 2026']] },
      later:[['Applications','Nov 2026','Apply to 4–5 universities, with SOP and LORs done by your SOP expert'],['Offers and funding','Dec 2026','Offers, deposit and proof of funds'],['Visa and fly','Jan 2027','Visa with your visa counsellor, then fly']] },
    { id:'LD-482913', name:'Riya Sharma', slot:'6:00 PM', mins:128, done:false, sku:'Prime', studentIn:true, app:'Android app, active 2h ago', mentor:'Priya', country:'Canada', course:'MS Data Science', intake:'Sep 2027', fly:'Aug 2027',
      one:'MS Data Science in Canada for Sep 2027, ₹25–30 lakh on a loan. Wants colleges within budget; asked if Ireland is cheaper.',
      f:{ career:'Data scientist in Canada', priority:'Under budget', budget:'₹25–30 lakh', funding:'Education loan', parents:'Yes', qual:"Bachelor's", bachelors:'B.Tech Computer Science', score:'8.1 CGPA', gap:'No', gapMonths:'', workEx:'1', salary:'₹6 LPA', email:'riya.sharma@outlook.com', city:'Jaipur', questions:'Is Ireland cheaper than Canada for data science?' },
      c:{ who:'Ananya R.', story:'B.Tech CS, 1 year as an analyst, loan-funded. Joined an MS in Data Science in Canada for Sep 2025 and works part-time on campus.', why:['Same course','Same country','Loan-funded'], sim:[['Karthik V.','B.Tech CS, 2 years','MS Data Science, Canada'],['Pooja M.','B.Tech IT, 1 year','MS Analytics, Ireland'],['Sahil D.','B.Sc Stats, 1 year','MS Data Science, Canada']] },
      later:[['Applications','Jan–Mar 2027','Apply with SOP and LORs'],['Offers and funding','Apr–May 2027','Offers and loan sanction'],['Visa and fly','Jun–Aug 2027','Study permit, then fly']] },
    { id:'LD-482650', name:'Sneha Iyer', slot:'12:00 PM', mins:-150, done:true, sku:'Premium', studentIn:true, app:'iOS app, active 8d ago', mentor:'Priya', country:'Germany', course:'MS Mechanical Engineering', intake:'Sep 2027', fly:'Aug 2027',
      one:'MS Mechanical Engineering in Germany for Sep 2027, public universities, ₹10–15 lakh on a loan. No work experience yet.',
      f:{ career:'Automotive R&D in Germany', priority:'Public universities', budget:'₹10–15 lakh', funding:'Education loan', parents:'Yes', qual:"Bachelor's", bachelors:'B.E. Mechanical', score:'7.6 CGPA', gap:'Yes', gapMonths:'6', workEx:'0', salary:'', email:'sneha.iyer@gmail.com', city:'Chennai', questions:'' },
      c:{ who:'Vignesh S.', story:'B.E. Mechanical, no work experience, low-tuition budget. Joined a public university in Germany for Sep 2025.', why:['Same course','Same country','Fresher'], sim:[['Harish N.','B.E. Mech, fresher','MS Automotive, Germany'],['Divya K.','B.Tech Mech, 1 year','MS Mechatronics, Germany'],['Arvind P.','B.E. Production, fresher','MS Manufacturing, Germany']] },
      later:[['Applications','Jan–Mar 2027','Apply via uni-assist'],['Offers and funding','Apr–Jun 2027','Admits and blocked account'],['Visa and fly','Jul–Aug 2027','Visa, then fly']] },
    { id:'LD-483210', name:'Karan Malhotra', day:1, slot:'11:00 AM', mins:1148, done:false, sku:'Prime', studentIn:false, app:null, mentor:'Priya', country:'USA', course:'MS Computer Science', intake:'Fall 2027', fly:'Aug 2027',
      one:'MS Computer Science in the USA for Fall 2027, ₹40–45 lakh on a loan, 2 years as a developer. GRE planned for Dec; wants top-50 colleges.',
      f:{ career:'Software engineer in the US', priority:'Highly ranked colleges', budget:'₹40–45 lakh', funding:'Education loan', parents:'Yes', qual:"Bachelor's", bachelors:'B.Tech Computer Science', score:'8.4 CGPA', gap:'No', gapMonths:'', workEx:'2', salary:'₹14 LPA', email:'karan.m@gmail.com', city:'Gurugram', questions:'Should I take the GRE before applying?' },
      c:{ who:'Varun T.', story:'B.Tech CS, 2 years as a backend developer, loan-funded. Joined an MS in CS in the USA for Fall 2025 and interned at a fintech.', why:['Same course','Same country','2 years of work','Loan-funded'], sim:[['Ishaan R.','B.Tech IT, 2 years','MS CS, USA, Fall 2025'],['Nikita J.','B.E. CS, 3 years','MS CS, USA, Fall 2026'],['Rohit B.','B.Tech ECE, 1 year','MS CE, USA, Fall 2025']] },
      later:[['Applications','Nov 2026–Jan 2027','Apply to 6–8 universities, with SOP and LORs'],['Offers and funding','Mar–Apr 2027','Offers, I-20 and loan sanction'],['Visa and fly','May–Aug 2027','F-1 visa interview, then fly']] },
    { id:'LD-483355', name:'Meera Nair', day:2, slot:'3:20 PM', mins:2848, done:false, manual:true, sku:'Premium', studentIn:true, app:'iOS app, active 1d ago', mentor:'Priya', country:'Ireland', course:'MSc Finance', intake:'Sep 2027', fly:'Aug 2027',
      one:'MSc Finance in Ireland for Sep 2027, ₹25 lakh, part loan and part family. B.Com fresher; wants a one-year course with good placements.',
      f:{ career:'Investment analyst in Dublin', priority:'Good placements', budget:'₹25 lakh', funding:'Part loan, part family', parents:'Yes', qual:"Bachelor's", bachelors:'B.Com', score:'78%', gap:'No', gapMonths:'', workEx:'0', salary:'', email:'meera.nair@yahoo.com', city:'Kochi', questions:'' },
      c:{ who:'Tanvi S.', story:'B.Com fresher, part-loan funded. Joined a one-year MSc Finance in Dublin for Sep 2025 and now works as an analyst there.', why:['Same course','Same country','Fresher'], sim:[['Aman K.','B.Com, fresher','MSc Finance, Ireland'],['Riddhi P.','BBA, fresher','MSc Accounting, Ireland'],['Kabir S.','B.Com, 1 year','MSc Finance, UK']] },
      later:[['Applications','Dec 2026–Feb 2027','Apply with SOP and LORs'],['Offers and funding','Mar–May 2027','Offers and deposit'],['Visa and fly','Jun–Aug 2027','Study visa, then fly']] },
    { id:'LD-483402', name:'Rahul Verma', day:5, slot:'12:40 PM', mins:7008, done:false, sku:'Explorer', studentIn:false, app:'Android app, active 3h ago', mentor:'Priya', country:'Canada', course:'PG Diploma Business', intake:'Jan 2028', fly:'Dec 2027',
      one:'PG Diploma in Business in Canada for Jan 2028, ₹15–20 lakh, family-funded. Exploring options; parents not consulted yet.',
      f:{ career:'Not sure yet', priority:'Under budget', budget:'₹15–20 lakh', funding:'Family', parents:'No', qual:"Bachelor's", bachelors:'BBA', score:'64%', gap:'Yes', gapMonths:'12', workEx:'1', salary:'₹3.6 LPA', email:'rahul.v@gmail.com', city:'Lucknow', questions:'Can I work while studying?' },
      c:{ who:'Sameer A.', story:'BBA, 1 year in sales, family-funded. Joined a PG Diploma in Toronto for Jan 2026 and works part-time in retail.', why:['Same country','Similar budget','Family-funded'], sim:[['Neel D.','BBA, fresher','PG Diploma, Canada'],['Sana M.','B.Com, 1 year','PG Diploma, Canada'],['Arya V.','BBA, 2 years','MBA, Canada']] },
      later:[['Applications','Apr–Jun 2027','Apply to 3–4 colleges'],['Offers and funding','Jul–Sep 2027','Offers and GIC'],['Visa and fly','Oct–Dec 2027','Study permit, then fly']] },
    { id:'LD-483467', name:'Ananya Gupta', day:6, slot:'5:00 PM', mins:8828, done:false, sku:'Premium', studentIn:false, app:null, mentor:'Priya', country:'Australia', course:'Master of Data Science', intake:'Feb 2028', fly:'Jan 2028',
      one:'Master of Data Science in Australia for Feb 2028, ₹35 lakh on a loan, 1 year as an analyst. Wants Group of Eight universities.',
      f:{ career:'Data analytics in Australia', priority:'Highly ranked colleges', budget:'₹35 lakh', funding:'Education loan', parents:'Yes', qual:"Bachelor's", bachelors:'B.Sc Mathematics', score:'81%', gap:'No', gapMonths:'', workEx:'1', salary:'₹5 LPA', email:'ananya.g@gmail.com', city:'Indore', questions:'' },
      c:{ who:'Pranav M.', story:'B.Sc Maths, 1 year as a data analyst, loan-funded. Joined a Master of Data Science in Melbourne for Feb 2026.', why:['Same course','Same country','Loan-funded'], sim:[['Diya R.','B.Tech CS, 1 year','MDS, Australia'],['Yash K.','B.Sc Stats, fresher','MDS, Australia'],['Leela N.','BCA, 2 years','MIT, Australia']] },
      later:[['Applications','May–Jul 2027','Apply with SOP and LORs'],['Offers and funding','Aug–Oct 2027','Offers, CoE and loan sanction'],['Visa and fly','Nov 2027–Jan 2028','Student visa, then fly']] },
  ];

  const S = {
    on:false, laterOpen:false, dlg:null, isl:null, summary:null, dispo:null, profile:null, leadTab:'Student Profile', backToLeads:false, notes:{},
    joined:{ 'LD-483077':false }, popHidden:null, remind:{}, lgcAgain:{}, phase:{}, type:{},
    sent:{ 'case:LD-482913':'4:05 PM', 'timeline:LD-482913':'4:09 PM', 'case:LD-482650':'11:20 AM', 'timeline:LD-482650':'11:24 AM' },
    ielts:{ 'LD-482913':'Preparing' }, ieltsScore:{}, service:{}, outcome:{}, timer:null,
  };

  // ── helpers ──
  const DAY0 = new Date();
  const fmtDay = d => { const x = new Date(DAY0); x.setDate(x.getDate() + d); return x.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' }).replace(/^(\w+)/, '$1,'); };
  const dayOf = l => l.day || 0;
  const dayLabel = d => d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : fmtDay(d);
  const inWindow = l => dayOf(l) <= 2;
  const byNextMeeting = (a, b) => (a.done - b.done) || (a.mins - b.mins);
  const fmtIn = m => m < 60 ? m + ' min' : Math.floor(m / 60) + ' h ' + (m % 60) + ' min';
  const nowStr = () => new Date().toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
  const first = l => l.name.split(' ')[0];
  const youIn = l => S.joined[l.id] !== false;
  const stuIn = l => youIn(l) && l.studentIn;
  const ready = l => stuIn(l) && S.sent['case:' + l.id] && S.sent['timeline:' + l.id];
  const marked = l => !!S.ielts[l.id] && !!S.service[l.id];
  const needsOutcome = l => l.done && !S.outcome[l.id];
  const reach = l => l.app ? 'an app notification and a WhatsApp DM' : 'a WhatsApp DM and SMS. No app notification, as the app isn’t installed';
  const serviceLabel = v => (SERVICE_OPTIONS.find(o => o.value === v) || {}).label || '';
  const toast = (m, t) => (typeof showToast === 'function' ? showToast(m, t || 'success') : null);
  // The page shell (Go back, System / Manually Assigned tabs) is the shared one in index.html
  const pageEl = () => document.getElementById('assignedLeadsPage');
  const pageOpen = () => !!pageEl() && !pageEl().classList.contains('hidden');
  const leadsForTab = () => LEADS.filter(l => (state.assignedLeadsTab === 'manual') ? l.manual : !l.manual);
  const needsAction = l => (!l.done && inWindow(l) && !ready(l)) || needsOutcome(l);

  const I = {
    link:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    doc:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
    cal:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    list:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/></svg>',
    ext:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    check:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>',
    x:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    warn:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex:none;margin-top:1px"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/></svg>',
    user:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    back:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5m6-6l-6 6 6 6"/></svg>',
    lock:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  };

  // ── styles (ported from the skip-1st-call design, scoped under .d2c) ──
  const CSS = `
.d2c{--ink:#1C2340;--muted:#5B6380;--soft:#8189A6;--line:#E3E6EF;--paper:#F4F5F9;--indigo:#3F45C9;--indigo-dk:#2B2F94;--indigo-bg:#EEF0FF;--green:#0E8A5F;--green-dk:#0E6B4A;--green-bg:#E4F5EE;--amber:#B86A00;--amber-bg:#FFF4E0;--red:#C2410C;--red-bg:#FDEBE3;font-family:'Figtree',system-ui,sans-serif;color:var(--ink);font-variant-numeric:tabular-nums}
.d2c button{font:inherit;cursor:pointer}.d2c button:disabled{cursor:not-allowed}
.d2c button:focus-visible,.d2c a:focus-visible,.d2c select:focus-visible{outline:3px solid #8C91F0;outline-offset:2px}
@keyframes d2cspin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.d2c *{animation:none!important}}
/* header */
.d2c-badge{position:absolute;top:-8px;right:-8px;min-width:20px;height:20px;border-radius:999px;background:#DC2626;color:#fff;font-size:11.5px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 5px;box-shadow:0 0 0 2px #0C1A2E;font-family:'Figtree',system-ui,sans-serif}
.d2c-pop{position:absolute;top:46px;left:0;width:330px;background:#1C2340;color:#fff;border-radius:12px;padding:12px 12px 12px 14px;display:grid;grid-template-columns:10px 1fr auto;gap:10px;align-items:center;box-shadow:0 12px 30px rgba(28,35,64,.3);z-index:45;font-family:'Figtree',system-ui,sans-serif}
.d2c-pop::before{content:"";position:absolute;top:-6px;left:28px;width:12px;height:12px;background:#1C2340;transform:rotate(45deg)}
.d2c-pop .dot{width:9px;height:9px;border-radius:50%;background:#F5A524}
.d2c-pop.ok .dot{background:#22C55E}
.d2c-pop span{font-size:13px;line-height:1.4;color:#D5D8EA;display:flex;flex-direction:column}
.d2c-pop b{color:#fff;font-size:14px}
.d2c-go{min-height:34px;padding:0 12px;border-radius:8px;border:0;background:#fff;color:#2B2F94;font-size:13px;font-weight:700;cursor:pointer}
/* page */
.d2c.main{display:flex;flex-direction:column;gap:20px}
.d2c .pilotbar{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:12px;padding:10px 16px;font-size:13px;color:var(--muted)}
.d2c .pilotbar b{color:var(--ink)}
.d2c .pilotbar .cap{margin-left:auto;display:flex;align-items:center;gap:8px}
.d2c .capbar{width:120px;height:8px;border-radius:999px;background:#E6E8F1;position:relative;overflow:hidden}
.d2c .capbar span{position:absolute;inset:0 auto 0 0;background:var(--indigo);border-radius:999px}
.d2c .capbar em{position:absolute;top:0;bottom:0;width:2px;background:#fff}
.d2c .q{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.d2c .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 20px;display:flex;flex-direction:column;gap:12px}
.d2c .card.blocked{border-color:#EBC27E;box-shadow:inset 3px 0 0 #E8A33D}
.d2c .card.done{background:#FCFCFE}
.d2c .r1{display:grid;grid-template-columns:96px 1fr auto;gap:18px;align-items:start}
.d2c .time strong{display:block;font-size:19px;font-weight:800}
.d2c .time span{font-size:12.5px;font-weight:700;color:var(--muted)}
.d2c .time span.soon{color:var(--amber)}
.d2c .who{display:flex;flex-direction:column;gap:5px;min-width:0}
.d2c .nm{font-size:17px;font-weight:800;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.d2c .nm .id{font-size:12.5px;color:var(--soft);font-weight:500}
.d2c .tag{font-size:12px;font-weight:700;border-radius:999px;padding:3px 10px}
.d2c .tag.sku{background:var(--indigo-bg);color:var(--indigo-dk)}
.d2c .tag.hot{background:#FDE7E1;color:#B42318}
.d2c .tag.plp{background:#E8F7F0;color:#0E6B4A;border:1px solid #A9DCC5}
.d2c .status{display:flex;flex-direction:column;gap:6px;align-items:flex-end}
.d2c .st{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;white-space:nowrap}
.d2c .st i{width:8px;height:8px;border-radius:50%}
.d2c .st.ok{color:var(--green-dk)}.d2c .st.ok i{background:var(--green)}
.d2c .st.wait{color:var(--amber)}.d2c .st.wait i{background:var(--amber)}
.d2c .st.no{color:var(--red)}.d2c .st.no i{background:var(--red)}
.d2c .st .lbl{color:var(--soft);font-weight:500;margin-right:-2px}
.d2c .join{min-height:30px;padding:0 12px;border-radius:999px;border:0;background:var(--indigo);color:#fff;font-size:12.5px;font-weight:700}
.d2c .r2{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding-top:12px;border-top:1px solid var(--line)}
.d2c .sb{min-height:36px;padding:0 13px;border-radius:8px;border:1px solid #D3D7E5;background:#fff;color:var(--ink);font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:7px;text-decoration:none;white-space:nowrap}
.d2c .sb:hover:not(:disabled){border-color:var(--indigo);color:var(--indigo-dk)}
.d2c .sb:disabled{opacity:.5}
.d2c .sb svg{color:var(--muted)}
.d2c .sb.done{border-color:#A9DCC5;background:var(--green-bg);color:var(--green-dk)}
.d2c .sb.done svg{color:var(--green-dk)}
.d2c .flash{font-size:12.5px;font-weight:700;color:var(--green-dk)}
/* mark during the call: IELTS + Service type + outcome */
.d2c .oc{display:flex;flex-wrap:wrap;gap:6px;margin-left:auto}
.d2c .ocb{min-height:36px;padding:0 12px;border-radius:8px;border:1px solid #CDD1E1;background:#fff;color:var(--ink);font-size:13px;font-weight:700}
.d2c .ocb.pri{background:var(--indigo);border-color:var(--indigo);color:#fff}
.d2c .ocb:disabled{background:#E6E8F1;border-color:#E6E8F1;color:#8189A6}
/* next call panel */
.d2c .nextp{background:var(--ink);color:#fff;border-radius:16px;padding:20px 22px;display:grid;grid-template-columns:minmax(220px,1fr) minmax(0,1.5fr);gap:22px;align-items:center}
.d2c .nx-l{display:flex;flex-direction:column;gap:4px}
.d2c .nx-k{font-size:13.5px;font-weight:600;color:#B8BDD8}
.d2c .nx-t{font-size:38px;font-weight:800;letter-spacing:-.8px;line-height:1.05}
.d2c .nx-w{font-size:15px;font-weight:600}
.d2c .nx-c{font-size:13px;color:#B8BDD8;margin-top:4px}
.d2c .nx-r{list-style:none;margin:0;padding:0;background:#fff;color:var(--ink);border-radius:12px;padding:4px 14px}
.d2c .nx-r li{display:grid;grid-template-columns:26px 1fr auto;gap:12px;align-items:center;padding:10px 0}
.d2c .nx-r li+li{border-top:1px solid var(--line)}
.d2c .nx-r li i{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:800;font-size:13px}
.d2c .nx-r li.ok i{background:var(--green);color:#fff}
.d2c .nx-r li.wait i{background:var(--amber-bg);color:var(--amber);border:1.5px solid #E8A33D}
.d2c .nx-r li i svg{width:12px;height:12px}
.d2c .nx-r li span{display:flex;flex-direction:column;gap:1px;font-size:13px;color:var(--muted);line-height:1.4}
.d2c .nx-r li span b{font-size:14.5px;color:var(--ink)}
.d2c .day{display:flex;flex-direction:column;gap:12px}
.d2c .day-h,.d2c .later-btn{display:flex;align-items:baseline;gap:10px;padding:2px 2px 0}
.d2c .day-t{font-size:16px;font-weight:800}
.d2c .day-s{font-size:13.5px;color:var(--muted);font-weight:600}
.d2c .day-n{margin-left:auto;font-size:13px;color:var(--muted);font-weight:600}
.d2c .day-empty{margin:0;padding:14px 18px;border:1px dashed #D3D7E5;border-radius:12px;font-size:14px;color:var(--muted);background:#fff}
.d2c .later-btn{width:100%;align-items:center;min-height:52px;padding:0 18px;border:1px solid var(--line);border-radius:14px;background:#fff;color:var(--ink);text-align:left}
.d2c .later-btn:hover{border-color:var(--indigo)}
.d2c .later-hint{font-size:13px;font-weight:700;color:var(--indigo)}
.d2c .chev{display:inline-block;font-size:20px;line-height:1;color:var(--muted);transition:transform .15s}
.d2c .chev.open{transform:rotate(90deg)}
.d2c .later-day{font-size:13px;font-weight:700;color:var(--muted);margin:2px 2px -4px}
.d2c .empty{background:#fff;border:1px solid var(--line);border-radius:16px;padding:48px 20px;text-align:center;color:var(--muted);font-size:15px;font-weight:600}
/* dialogs */
.d2c.overlay{position:fixed;inset:0;z-index:120;background:rgba(28,35,64,.5);display:flex;justify-content:center;align-items:flex-start;padding:48px 16px;overflow-y:auto}
.d2c .dialog{background:#fff;border-radius:18px;width:100%;max-width:620px;box-shadow:0 24px 60px rgba(28,35,64,.35);overflow:hidden;display:flex;flex-direction:column}
.d2c .d-head{padding:22px 24px 16px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;border-bottom:1px solid var(--line)}
.d2c .d-head h2{margin:0 0 4px;font-size:21px;font-weight:800;letter-spacing:-.2px}
.d2c .d-head p{margin:0;font-size:14px;color:var(--muted);line-height:1.5;max-width:50ch}
.d2c .xbtn{width:40px;height:40px;border-radius:10px;border:0;background:transparent;display:flex;align-items:center;justify-content:center;color:var(--muted);flex:none}
.d2c .xbtn:hover{background:#EEF0F6}
.d2c .d-body{padding:20px 24px;display:flex;flex-direction:column;gap:16px}
.d2c .d-foot{border-top:1px solid var(--line);padding:14px 24px 18px;display:flex;flex-direction:column;gap:12px}
.d2c .d-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end}
.d2c .bt{min-height:44px;padding:0 18px;border-radius:10px;font-size:14px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid transparent;white-space:nowrap}
.d2c .bt-primary{background:var(--indigo);color:#fff}.d2c .bt-primary:disabled{background:#B9BCEB}
.d2c .bt-secondary{background:#fff;color:var(--ink);border-color:#CDD1E1}
.d2c .bt-dark{background:var(--ink);color:#fff}
.d2c .bt-sm{min-height:34px;padding:0 12px;font-size:13px;border-radius:8px}
.d2c .lgc{border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start;font-size:13.5px;line-height:1.45}
.d2c .lgc.warn{background:var(--amber-bg);border:1.5px solid #E8A33D;color:#6B3D00}
.d2c .lgc.ok{background:var(--green-bg);border:1.5px solid #8FD0B3;color:#0B5239;align-items:center}
.d2c .ctry{display:flex;align-items:center;justify-content:center;gap:12px;font-size:12.5px;font-weight:700;color:var(--muted);letter-spacing:.3px}
.d2c .ctry .cp{border:2px solid #C9CCF4;color:var(--indigo);border-radius:999px;padding:6px 18px;font-size:14px;font-weight:700;background:#fff;letter-spacing:0}
.d2c .picker{border:1px solid var(--line);border-radius:14px;padding:24px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center}
.d2c .picker h3{margin:6px 0 0;font-size:17px;font-weight:800}
.d2c .picker p{margin:0;font-size:14px;color:var(--muted);max-width:40ch;line-height:1.5}
.d2c .ib{width:40px;height:40px;border-radius:50%;background:var(--indigo-bg);display:flex;align-items:center;justify-content:center;color:var(--indigo)}
.d2c .chips{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:8px}
.d2c .chip-btn{min-height:40px;padding:0 16px;border-radius:999px;border:1px solid #CDD1E1;background:#fff;color:var(--ink);font-size:14px;font-weight:600}
.d2c .chip-btn:hover{border-color:var(--indigo)}
.d2c .spin{width:28px;height:28px;border-radius:50%;border:3px solid #D9DBF6;border-top-color:var(--indigo);animation:d2cspin .9s linear infinite}
.d2c .match{border:1.5px solid #C9CCF4;border-radius:14px;padding:16px 18px;display:flex;flex-direction:column;gap:10px;background:#FBFBFF}
.d2c .why{display:flex;flex-wrap:wrap;gap:6px}
.d2c .why span{background:#fff;border:1px solid #D9DBF6;color:var(--indigo-dk);border-radius:999px;padding:3px 10px;font-size:12.5px;font-weight:600}
.d2c .sim{margin:0;padding:0;list-style:none;display:flex;flex-direction:column}
.d2c .sim li{display:grid;grid-template-columns:34px 1fr auto;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--line)}
.d2c .av{width:34px;height:34px;border-radius:50%;background:var(--indigo-bg);color:var(--indigo-dk);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12.5px}
.d2c .hero{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px 20px;display:flex;flex-direction:column;gap:12px}
.d2c .hero h3{margin:0;font-size:22px;font-weight:800;letter-spacing:-.3px}
.d2c .hero h3 em{font-style:normal;color:var(--indigo)}
.d2c .team{display:flex;gap:12px;align-items:center;padding-top:12px;border-top:1px solid var(--line);font-size:13.5px;line-height:1.5;color:var(--muted)}
.d2c .avs{display:flex;flex:none}
.d2c .avs span{width:28px;height:28px;border-radius:50%;background:#DFE1E9;border:2px solid var(--paper);margin-left:-8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--muted)}
.d2c .avs span:first-child{margin-left:0;background:var(--indigo);color:#fff}
.d2c .phase{border:1px solid var(--line);border-radius:14px;overflow:hidden}
.d2c .phase-h{display:flex;align-items:center;gap:12px;padding:14px 16px;font-size:15px;font-weight:800}
.d2c .phase-h .pn{width:28px;height:28px;border-radius:50%;background:var(--indigo);color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;box-shadow:0 0 0 5px var(--indigo-bg)}
.d2c .phase.later .phase-h .pn{background:#DFE1E9;color:var(--soft);box-shadow:none}
.d2c .phase-h .when{margin-left:auto;font-size:13px;font-weight:600;color:var(--muted)}
.d2c .herepill{background:var(--indigo);color:#fff;border-radius:999px;padding:3px 10px;font-size:12px;font-weight:700;white-space:nowrap}
.d2c .ms{display:grid;grid-template-columns:32px 1fr auto;gap:12px;padding:13px 16px;border-top:1px solid var(--line)}
.d2c .ms .ico{width:30px;height:30px;border-radius:50%;background:#1C2340;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800}
.d2c .ms.done .ico{background:var(--green)}
.d2c .ms.current{background:var(--indigo-bg)}.d2c .ms.current .ico{background:var(--indigo)}
.d2c .ms h5{margin:0 0 3px;font-size:14.5px;font-weight:800}
.d2c .ms p{margin:0;font-size:13.5px;color:var(--muted);line-height:1.45}
.d2c .ms .r{display:flex;flex-direction:column;align-items:flex-end;gap:6px;font-size:12.5px;color:var(--muted);text-align:right}
.d2c .tg{border-radius:999px;padding:3px 10px;font-size:12px;font-weight:700;white-space:nowrap}
.d2c .tg.me{background:var(--green-bg);color:var(--green-dk)}.d2c .tg.you{background:#E6E8FB;color:var(--indigo-dk)}.d2c .tg.both{background:var(--amber-bg);color:#8A4F00}.d2c .tg.dn{background:#E9EBF1;color:var(--muted)}
.d2c .sent-box{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;padding:28px 10px}
.d2c .sent-box .okc{width:56px;height:56px;border-radius:50%;background:var(--green-bg);display:flex;align-items:center;justify-content:center}
/* intake profile drawer */
.d2c .meta{font-size:13px;color:var(--muted);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.d2c .meta .id{color:var(--soft);font-size:12.5px}
.d2c .sb.pri{border-color:#C9CCF4;background:var(--indigo-bg);color:var(--indigo-dk)}
.d2c .sb.pri svg{color:var(--indigo)}
.d2c .r2 .sep{width:1px;height:22px;background:var(--line);margin:0 4px}
.d2c .r3{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;padding:10px 12px;border-radius:10px}
.d2c .r3.req{background:#FFF8EC;border:1.5px solid #E8A33D}
.d2c .r3.okd{background:var(--green-bg);border:1px solid #A9DCC5}
.d2c .r3l{font-size:12.5px;font-weight:700;color:var(--muted);display:inline-flex;align-items:center;gap:6px}
.d2c .r3.okd .r3l{color:var(--green-dk)}
.d2c .r3.req .r3l{color:#8A4F00}
.d2c .dsp-note{margin:0;display:flex;gap:10px;align-items:flex-start;font-size:13.5px;line-height:1.45;color:#6B3D00;background:var(--amber-bg);border:1.5px solid #E8A33D;border-radius:10px;padding:10px 12px}
.d2c .dsp-f{display:flex;flex-direction:column;gap:6px;font-size:13.5px;font-weight:700;color:var(--ink)}
.d2c .dsp-f .req{color:#BF3333}
.d2c .dsp-f select,.d2c .dsp-f input{height:42px;border:1px solid #CDD1E1;border-radius:8px;background:#fff;padding:0 12px;font:inherit;font-size:14px;font-weight:500;color:var(--ink)}
.d2c .dsp-f input{width:140px}
.d2c .ocb{min-height:32px}
.d2c .ocres{flex-basis:100%;font-size:13px;line-height:1.5;color:var(--ink)}
/* ISL Discussion summary + profile summary modals (production Course Finder style) */
.d2c.isl-ov{position:fixed;inset:0;z-index:140;background:rgba(0,0,0,.45);display:flex;justify-content:center;align-items:center;padding:24px 16px}
.d2c .isl{background:#fff;width:100%;max-width:800px;height:min(520px,calc(100vh - 48px));display:flex;flex-direction:column;padding:20px 19px 0;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.d2c .isl.sum{max-width:960px;height:min(720px,calc(100vh - 48px))}
.d2c .isl-h{display:flex;align-items:center;gap:8px;padding-bottom:14px;border-bottom:1px solid #E0E0E0}
.d2c .isl-h h2{margin:0;font-family:Helvetica,Arial,sans-serif;font-size:19px;font-weight:700;color:#1A1B5F}
.d2c .isl-link{border:0;background:none;padding:0;color:#3C36FF;text-decoration:underline;font-family:Helvetica,Arial,sans-serif;font-size:13px}
.d2c .isl-h .xbtn{margin-left:auto;color:#111}
.d2c .isl-tabs{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
.d2c .isl-tabs button{height:36px;padding:0 12px;border:1px solid #DBDBDB;border-radius:6px;background:#fff;color:#111;font-family:Helvetica,Arial,sans-serif;font-size:13px}
.d2c .isl-tabs button[aria-selected="true"]{background:#3A3A3A;border-color:#3A3A3A;color:#fff}
.d2c .isl-sec,.d2c .qa-sec{margin-top:12px;padding:8px 12px;border-radius:6px;background:#F2F1F1;font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;color:#1A1A1A}
.d2c .isl-body{flex:1;overflow-y:auto;padding:4px 0 20px}
.d2c .qa{margin-top:16px}
.d2c .qa-q{margin:0;font-size:14px;font-weight:500;color:#5A6374;line-height:1.4}
.d2c .qa-q em{font-style:normal;color:#413EFF}
.d2c .qa-q .req{color:#BF3333}
.d2c .qa-plain{margin:8px 0 0;font-size:14.5px;color:#1A1F2D}
.d2c .qa-list{margin:8px 0 0;padding:0 0 0 4px;list-style:none;display:flex;flex-wrap:wrap;gap:4px 36px}
.d2c .qa-list li{position:relative;padding-left:14px;font-size:14.5px;color:#1A1F2D}
.d2c .qa-list li::before{content:"•";position:absolute;left:0}
.d2c .qa-box{margin-top:16px;border:1px solid #BFC4CC;border-radius:14px;padding:4px 16px 16px}
.d2c .qa-box h4{margin:14px 0 0;font-size:17px;font-weight:600;color:#5A6374}
.d2c .qa-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 24px}
.d2c .qa-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:0 24px}
.d2c .qa-note{margin:14px 0 0;display:flex;gap:8px;align-items:center;font-size:13px;font-weight:600;color:#8A4F00;background:#FFF8EC;border:1px solid #F1C886;border-radius:8px;padding:8px 10px}
.d2c .sum-label{margin:14px 0 8px;font-size:12px;font-weight:700;color:#636872}
.d2c .md{flex:1;overflow-y:auto;margin-bottom:20px;border:1px solid #D8DADE;border-radius:16px;background:#FCFBFF;padding:8px 28px 20px;font-family:Helvetica,Arial,sans-serif;color:#181A25;font-size:14.5px;line-height:1.6}
.d2c .md h1{margin:16px 0 18px;font-size:28px;font-weight:700;color:#141414;letter-spacing:-.3px}
.d2c .md h2{margin:28px 0 10px;font-size:20px;font-weight:700;color:#141414}
.d2c .md h3{margin:20px 0 6px;font-size:16px;font-weight:700;color:#141414}
.d2c .md blockquote{margin:10px 0;padding:2px 0 2px 16px;border-left:3px solid #E0DEFA;color:#626771}
.d2c .md blockquote strong{color:#141414}
.d2c .md hr{border:0;border-top:1px solid #E6E4F2;margin:22px 0}
.d2c .md ul{margin:4px 0;padding-left:22px;list-style:disc}
.d2c .md ul ul{list-style:circle}
.d2c .md li{margin:4px 0}
.d2c .md li::marker{color:#9B9A9F}
.d2c .md p{margin:8px 0}
/* Lead page (View Complete Details) — same layout as the RM CRM / production lead page */
.d2c.lpage{position:fixed;top:56px;left:0;right:0;bottom:0;z-index:130;background:#F1F5F9;display:flex;flex-direction:column;font-family:'Figtree',system-ui,sans-serif}
.d2c .lp-bar{display:flex;align-items:center;gap:12px;padding:12px 24px;flex-shrink:0}
.d2c .lp-back{border:0;background:none;color:#443EFF;font-size:14px;padding:0}
.d2c .lp-bar h2{margin:0;font-size:16px;font-weight:700;color:#1C1C1C}
.d2c .lp-sub{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:#656E7F}
.d2c .lp-sp{flex:1}
.d2c .lp-pill{height:39px;padding:0 16px;border:1px solid #443EFF;color:#443EFF;background:#fff;border-radius:6.5px;font-size:12px;font-weight:700}
.d2c .lp-tabs{display:flex;background:#fff;border-bottom:1px solid #E2E8F0;flex-shrink:0}
.d2c .lp-otabs{width:280px;flex-shrink:0;display:flex;border-right:1px solid #E2E8F0}
.d2c .lp-otabs button,.d2c .lp-itabs button{flex:1;padding:14px 16px 12px;font-size:14px;font-weight:500;color:#000;background:none;border:0;border-bottom:4px solid transparent;white-space:nowrap}
.d2c .lp-itabs{flex:1;display:flex;overflow-x:auto}
.d2c .lp-otabs button.on,.d2c .lp-itabs button.on{color:#443EFF;font-weight:700;border-bottom-color:#3F47F5}
.d2c .lp-main{flex:1;min-height:0;display:flex}
.d2c .lp-side{width:280px;flex-shrink:0;background:#fff;border-right:1px solid #E2E8F0;padding:16px;overflow-y:auto;font-size:13px}
.d2c .lp-content{flex:1;min-width:0;overflow-y:auto;padding:20px 40px 40px}
.d2c .lp-side-box{background:#F3F3FF;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:12px}
.d2c .lp-tile{background:#fff;border:1px solid #E3E2FF;border-radius:4px;padding:12px}
.d2c .lp-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.d2c .lp-prem{color:#4F46E5;font-weight:600;font-size:14px}
.d2c .lp-plus{width:24px;height:24px;border:0;border-radius:4px;background:#443EFF;color:#fff}
.d2c .lp-muted{margin:6px 0 0;color:#656E7F;font-size:12px}
.d2c .lp-tags{display:flex;gap:6px;flex-wrap:wrap}
.d2c .lp-line{display:flex;align-items:center;gap:8px;color:#1C1C1C}
.d2c .lp-out{flex:1;height:30px;border:1px solid #CDCDCD;border-radius:4px;background:#fff;color:#443EFF;font-size:12px}
.d2c .lp-revealed{flex:1;font-weight:600;font-size:12.5px}
.d2c .lp-wa{color:#25D366}
.d2c .lp-two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.d2c .lp-k{display:flex;align-items:center;gap:5px;font-size:12px;color:#443EFF;font-weight:600}
.d2c .lp-v{margin-top:6px;font-size:13px;font-weight:600}
.d2c .lp-btns{display:flex;gap:6px}
.d2c .lp-pri{height:36px;padding:0 12px;border:0;border-radius:8px;background:#443EFF;color:#fff;font-size:12px;font-weight:700;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}
.d2c .lp-pri.wide{flex:1;justify-content:center}
.d2c .lp-pri.sm{height:30px}
.d2c .lp-grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px 10px;margin-top:16px;padding-top:14px;border-top:1px solid #E2E8F0}
.d2c .lp-grid2 b{display:block;font-size:13px;font-weight:600;margin-top:2px}
.d2c .lp-k2{font-size:11.5px;color:#656E7F}
.d2c .lp-amber{color:var(--amber)}
.d2c .lp-notes{margin-top:16px;padding-top:14px;border-top:1px solid #E2E8F0}
.d2c .lp-notes h4{margin:0 0 8px;font-size:14px;font-weight:600}
.d2c .lp-notes textarea{width:100%;border:1px solid #E2E8F0;border-radius:4px;padding:8px 10px;font:inherit;font-size:13px;margin-bottom:8px}
.d2c .lp-note{margin-top:12px;display:flex;flex-direction:column;gap:2px}
.d2c .lp-note span{font-size:11.5px;color:#656E7F}
.d2c .lp-card{background:#fff;border:1px solid #C6CBD2;border-radius:16px;box-shadow:0 2px 4px -1px rgba(28,33,51,.1);padding:16px 14px 20px;margin-bottom:24px}
.d2c .lp-app{display:flex;align-items:center;gap:12px;padding:24px 32px}
.d2c .lp-app-t{font-size:17px;font-weight:700}
.d2c .lp-out2{height:36px;padding:0 16px;border:1px solid #DADCE0;border-radius:6px;background:#fff;color:#1C1C1C;font-size:13px;font-weight:600;display:inline-flex;align-items:center;gap:6px}
.d2c .lp-card-h{display:flex;align-items:center;gap:8px;padding-bottom:14px;border-bottom:1px solid #E2E8F0}
.d2c .lp-ic{color:#656E7F;display:inline-flex}
.d2c .lp-card-t{font-size:17px;font-weight:600;color:#5A6374}
.d2c .lp-edit{margin-left:auto;border:0;background:none;color:#443EFF;font-size:13px;font-weight:600;display:inline-flex;align-items:center;gap:4px}
.d2c .lp-card-b{padding-top:2px}
.d2c .lp-badge{display:inline-flex;align-items:center;justify-content:center;height:22px;padding:0 10px;border-radius:48px;font-size:10px;font-weight:600;border:1px solid transparent;white-space:nowrap}
.d2c .lp-badge.ok{background:#F0FAF3;color:#3A9E59;border-color:#A9E4BE}
.d2c .lp-badge.pend{background:#FFF8EC;color:#B86A00;border-color:#F1C886}
.d2c .lp-badge.dl{background:#E6F3E1;color:#3C5B31;border-color:#A9E4BE;font-size:13px;height:28px}
.d2c .lp-badge.nd{background:#FEF2F2;color:#DC2626;border-color:#FCA5A5;font-size:13px;height:28px}
.d2c .lp-badge.sku{background:var(--indigo-bg);color:var(--indigo-dk);border-color:#C9CCF4;font-size:11px}
.d2c .lp-badge.hot{background:#FDE7E1;color:#B42318;border-color:#F8C4B4;font-size:11px}
.d2c .lp-badge.plp{background:#E8F7F0;color:#0E6B4A;border-color:#A9DCC5;font-size:11px}
.d2c .lp-wa-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:14px;padding:12px;border:1px solid #E2E8F0;border-radius:8px;background:#F8F8F8;font-size:13px}
.d2c .lp-wa-row .lp-badge{margin-top:6px}
.d2c .md.inline{overflow:visible;margin:14px 0 0}
.d2c .lp-empty{color:#656E7F;font-size:14px;text-align:center;padding:40px 20px}
.d2c .lp-appt{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:14px;font-size:14px}
.d2c .lp-appt span{color:#656E7F}
.d2c .lp-task{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #EEF0F4;font-size:14px;color:var(--green-dk)}
.d2c .lp-task span{color:#1C1C1C}
.d2c .lp-log{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid #EEF0F4}
.d2c .lp-log i{width:10px;height:10px;border-radius:50%;background:#443EFF;margin-top:5px;flex:none}
.d2c .lp-log b{display:block;font-size:14px}
.d2c .lp-log span{font-size:12.5px;color:#656E7F}
@media (max-width:820px){.d2c .qa-grid,.d2c .qa-grid3{grid-template-columns:1fr}.d2c .lp-side{display:none}.d2c .lp-otabs{display:none}.d2c .lp-content{padding:16px}.d2c .r1{grid-template-columns:72px 1fr}.d2c .status{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;align-items:center}.d2c .nextp{grid-template-columns:1fr}.d2c .oc{margin-left:0}}
`;

  function ensureAssets() {
    if (!document.getElementById('d2cStyles')) {
      const st = document.createElement('style'); st.id = 'd2cStyles'; st.textContent = CSS; document.head.appendChild(st);
    }
    if (!document.getElementById('d2cFont')) {
      const ln = document.createElement('link'); ln.id = 'd2cFont'; ln.rel = 'stylesheet';
      ln.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap';
      document.head.appendChild(ln);
    }
  }

  // ── header: badge + next-call card on the existing "View assigned leads" button ──
  function nextCall() { return [...LEADS].filter(l => !l.done).sort((a, b) => a.mins - b.mins)[0]; }
  function renderHeader() {
    const btn = document.getElementById('hdrViewAssignedBtn');
    const wrap = document.getElementById('hdrViewAssignedWrap');
    if (!btn || !wrap) return;
    document.getElementById('d2cBadge')?.remove();
    document.getElementById('d2cPop')?.remove();
    const pending = LEADS.filter(needsAction);
    if (pending.length) btn.insertAdjacentHTML('beforeend', `<span id="d2cBadge" class="d2c-badge" aria-label="${pending.length} 2nd calls need action">${pending.length}</span>`);
    const nxt = nextCall();
    // The card closes on any click outside it and stays closed until the next call changes
    if (!nxt || pageOpen() || S.profile || S.popHidden === nxt.id) return;
    const msg = !youIn(nxt) ? 'Join the LGC first.' : (!stuIn(nxt) ? first(nxt) + ' hasn’t joined the LGC.' : 'All set.');
    wrap.insertAdjacentHTML('beforeend', `<div id="d2cPop" class="d2c-pop ${msg === 'All set.' ? 'ok' : ''}" role="status"><span class="dot"></span><span><b>Next 2nd call in ${fmtIn(nxt.mins)}</b>${nxt.name}, ${nxt.slot}. ${msg}</span><button class="d2c-go" data-d2c="open">Open</button></div>`);
  }

  // ── lead card ──
  // Only for finished calls: mark the outcome. IELTS Status and Service Type are asked in the
  // second-call disposition that "Completed" opens, not on the card.
  function outcomeBlock(l) {
    if (!l.done) return '';
    const oc = S.outcome[l.id];
    if (oc) return `<div class="r3 okd"><span class="r3l">${I.check} ${oc.k} at ${oc.at}</span>
      <div class="ocres">${oc.tasks ? `<b>Tasks created:</b> ${oc.tasks.join(' · ')}` : oc.note}</div></div>`;
    return `<div class="r3 req"><span class="r3l">Call over. Mark the outcome.</span><div class="oc">
        <button class="ocb pri" data-d2c-dispo="${l.id}">Completed</button>
        <button class="ocb" data-d2c-oc="Student no-show:${l.id}">No-show</button>
        <button class="ocb" data-d2c-oc="Rescheduled:${l.id}">Rescheduled</button>
        <button class="ocb" data-d2c-oc="Cancelled:${l.id}">Cancelled</button></div></div>`;
  }

  // Second-call disposition: opened by "Completed"; IELTS Status and Service Type are required here
  function dispoDialog(l) {
    const iv = S.ielts[l.id] || '', sv = S.service[l.id] || '';
    const body = `<p class="dsp-note">${I.warn}<span>Not in the product intake, and with no 1st call nobody has captured them yet. The CRM creates ${first(l)}'s tasks from these two fields.</span></p>
      <label class="dsp-f"><span>IELTS Status <b class="req">*</b></span>
        <select data-d2c-ielts="${l.id}"><option value="">Select status</option>${IELTS_OPTIONS.map(o => `<option ${o === iv ? 'selected' : ''}>${o}</option>`).join('')}</select></label>
      ${iv === 'Given (score)' ? `<label class="dsp-f">Overall band<input data-d2c-score="${l.id}" inputmode="decimal" placeholder="e.g. 7.0" value="${S.ieltsScore[l.id] || ''}"></label>` : ''}
      <label class="dsp-f"><span>Service Type <b class="req">*</b></span>
        <select data-d2c-service="${l.id}"><option value="">Select service type</option>${SERVICE_OPTIONS.map(o => `<option value="${o.value}" ${o.value === sv ? 'selected' : ''}>${o.label}</option>`).join('')}</select></label>`;
    return frame(`Complete 2nd call: ${l.name}`, 'Second-call disposition. Mark these from what the student told you in the call.', body,
      `<div class="d-actions"><button class="bt bt-secondary" data-d2c-close>Cancel</button><button class="bt bt-primary" data-d2c-oc="Completed:${l.id}" ${marked(l) ? '' : 'disabled'}>Mark Completed</button></div>`);
  }

  function card(l) {
    const yi = youIn(l), si = stuIn(l);
    const slotNote = l.done ? 'Done' : dayOf(l) === 0 ? 'in ' + fmtIn(l.mins) : dayLabel(dayOf(l));
    const lgc = !yi ? `<span class="st wait"><i></i>LGC: you haven't joined <button class="join" data-d2c-join="${l.id}">Join now</button></span>`
      : si ? `<span class="st ok"><i></i>LGC: student joined</span>` : `<span class="st wait"><i></i>LGC: student not joined</span>`;
    const app = l.app ? `<span class="st ok"><i></i>${l.app}</span>` : `<span class="st no"><i></i>App not installed</span>`;
    const cs = S.sent['case:' + l.id], ts = S.sent['timeline:' + l.id];
    const again = S.lgcAgain[l.id];
    const amber = l.done ? needsOutcome(l) : !ready(l);
    return `<li class="card ${l.done ? 'done' : ''} ${amber ? 'blocked' : ''}">
      <div class="r1">
        <span class="time"><strong>${l.slot}</strong><span class="${!l.done && l.mins < 60 ? 'soon' : ''}">${slotNote}</span></span>
        <div class="who"><span class="nm">${l.name}<span class="tag sku">${l.sku}</span><span class="tag hot">Hot</span><span class="tag plp">Product led paid</span></span>
          <span class="meta">${l.course} · ${l.country} · ${l.intake}<span class="id">${l.id}</span></span></div>
        <div class="status">${lgc}${app}</div>
      </div>
      <div class="r2">
        <button class="sb pri" data-d2c-isl="${l.id}">${I.user}View Profile</button>
        <button class="sb" data-d2c-summary="${l.id}">${I.doc}View Summary</button>
        <span class="sep"></span>
        <button class="sb ${cs ? 'done' : ''}" data-d2c-dlg="case:${l.id}" title="Generate case study and similar profiles">${cs ? I.check : I.search}Case study</button>
        <button class="sb ${ts ? 'done' : ''}" data-d2c-dlg="timeline:${l.id}" title="Generate timeline">${ts ? I.check : I.cal}Timeline</button>
        <button class="sb" data-d2c-shortlist="${l.id}" title="Opens Course Finder with this student's intake pre-filled">${I.list}Shortlist</button>
        <button class="sb" data-d2c-again="${l.id}" ${!yi ? 'disabled title="Join the LGC first"' : 'title="Send LGC link again"'}>${I.link}LGC link</button>
        ${again ? `<span class="flash">${si ? 'LGC link sent at ' + again : 'Sent by personal DM at ' + again}</span>` : ''}
      </div>
      ${outcomeBlock(l)}</li>`;
  }

  // ── dialogs (case study, timeline) ──
  function lgcNote(l, what) {
    return stuIn(l) ? `<div class="lgc ok">${I.check}<span><strong>${first(l)} is in the LGC.</strong> The ${what} goes straight to the group.</span></div>`
      : `<div class="lgc warn" role="alert">${I.warn}<span><strong>${first(l)} hasn't joined the LGC yet.</strong> The ${what} will be posted there, and ${first(l)} gets ${reach(l)}.</span></div>`;
  }
  function frame(t, sub, body, foot) {
    return `<div class="d2c overlay" data-d2c-bg><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="d2cDt"><div class="d-head"><div><h2 id="d2cDt">${t}</h2><p>${sub}</p></div><button class="xbtn" data-d2c-close aria-label="Close">${I.x}</button></div><div class="d-body">${body}</div><div class="d-foot">${foot}</div></div></div>`;
  }
  function sentView(l, t, what, key) {
    return frame(t, 'Done.', `<div class="sent-box"><span class="okc"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E6B4A" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><h3 style="margin:0;font-size:19px;font-weight:800">${what} sent to ${first(l)}</h3><p style="margin:0;font-size:14px;color:var(--muted);max-width:44ch;line-height:1.5">Posted in the LGC at ${S.sent[key]}.${stuIn(l) ? '' : ' ' + first(l) + ' also got ' + reach(l).split('. ')[0] + ' asking them to join.'}</p></div>`, `<div class="d-actions"><button class="bt bt-dark" data-d2c-close>Done</button></div>`);
  }
  function sendFoot(l, key, what, can = true) {
    return `${lgcNote(l, what)}<div class="d-actions"><button class="bt bt-secondary" data-d2c-close>Cancel</button><button class="bt bt-primary" ${can ? '' : 'disabled'} data-d2c-send="${key}">${S.sent[key] ? 'Resend to student' : (stuIn(l) ? 'Send to student' : 'Send and notify ' + first(l))}</button></div>`;
  }
  function caseDialog(l) {
    const key = 'case:' + l.id, t = `Find a case study for ${l.name}`, ph = S.phase[key] || (S.sent[key] ? 'result' : 'pick'), ty = S.type[l.id];
    if (ph === 'sentNow') return sentView(l, t, 'Case study and similar profiles', key);
    const ctry = `<div class="ctry">COUNTRY <span class="cp">${l.country}</span></div>`;
    let body;
    if (ph === 'pick') body = `${ctry}<div class="picker"><span class="ib">${I.search}</span><h3>What kind of student is ${l.name}?</h3><p>Pick one and I'll search the 1,547 students you've guided for the closest real match.</p><div class="chips">${TYPES.map(x => `<button class="chip-btn" data-d2c-type="${x}">${x}</button>`).join('')}</div></div>`;
    else if (ph === 'search') body = `${ctry}<div class="picker" aria-live="polite"><span class="spin"></span><h3>Searching for a ${ty.toLowerCase()} student like ${first(l)}</h3><p>Matching on ${l.course}, ${l.country}, budget and work experience.</p></div>`;
    else body = `${ctry}<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><span style="font-size:13.5px;color:var(--muted)">Matched as <strong style="color:var(--ink)">${ty || 'ROI focused'}</strong></span><button class="bt bt-secondary bt-sm" data-d2c-retype>Change student type</button></div>
      <div class="match"><div style="display:flex;justify-content:space-between;gap:10px;align-items:baseline"><strong style="font-size:16px">Case study: ${l.c.who}</strong><span style="font-size:13px;color:var(--muted)">1 of 3 matches</span></div><p style="margin:0;font-size:15px;line-height:1.55">${l.c.story}</p><div class="why">${l.c.why.map(w => `<span>${w}</span>`).join('')}</div><button class="bt bt-secondary bt-sm" style="align-self:flex-start">Show next match</button></div>
      <div><strong style="font-size:15px">Similar profiles</strong><ul class="sim">${l.c.sim.map(s => `<li><span class="av">${s[0].split(' ').map(x => x[0]).join('')}</span><span style="display:flex;flex-direction:column"><strong style="font-size:14.5px">${s[0]}</strong><span style="font-size:13px;color:var(--muted)">${s[1]}</span></span><span style="font-size:13.5px;font-weight:700;color:var(--green-dk)">${s[2]}</span></li>`).join('')}</ul></div>`;
    return frame(t, 'You’re not the first to be in this exact spot. I’ll find the closest past student and 3 similar profiles.', body, sendFoot(l, key, 'case study', ph === 'result'));
  }
  function timelineDialog(l) {
    const key = 'timeline:' + l.id, t = `Let's build ${first(l)}'s journey`;
    if (S.phase[key] === 'sentNow') return sentView(l, t, 'Timeline', key);
    const ms = [['✓', 'done', 'My profile form', 'Goals, budget and background, filled in the Leap app. No first call needed.', 'Done', '<span class="tg dn">Done</span>'],
      ['2', 'current', `My 2nd call with ${l.mentor}`, 'We go through my profile, my questions and the colleges that fit.', dayLabel(dayOf(l)) + ', ' + l.slot, '<span class="herepill">You are here</span>'],
      ['3', '', 'I get my personalised colleges and plan', 'Colleges, ROI, career, finances and answers to my questions.', 'Within 60 min of the call', '<span class="tg me">I’ll handle this</span>'],
      ['4', '', 'I go through my plan', 'I take my time and note anything I want to ask.', 'Before our next call', '<span class="tg you">Your turn</span>'],
      ['5', '', 'We finalise my college list', 'We lock the universities and courses I’ll apply to.', 'Within 2 weeks', '<span class="tg both">Together</span>']];
    const body = `<div class="hero"><h3>You'll be in <em>${l.country}</em> by <em>${l.fly}</em>.</h3><p style="margin:0;font-size:14.5px;color:var(--muted);line-height:1.5">I'll be with you at every step to get you there.</p><div class="team"><span class="avs"><span>${l.mentor[0]}</span><span>S</span><span>V</span><span>L</span></span><span>${l.mentor}, your SOP expert, visa counsellor and loan advisor are all in your Leap group.</span></div></div>
      <div class="phase"><div class="phase-h"><span class="pn">1</span>Profile and shortlist<span class="herepill" style="margin-left:auto">You are here</span></div>${ms.map(m => `<div class="ms ${m[1]}"><span class="ico">${m[0]}</span><div><h5>${m[2]}</h5><p>${m[3]}</p></div><div class="r"><span>${m[4]}</span>${m[5]}</div></div>`).join('')}</div>
      ${l.later.map((p, i) => `<div class="phase later"><div class="phase-h"><span class="pn">${i + 2}</span>${p[0]}<span class="when">${p[1]}</span></div><div style="padding:0 16px 14px 56px;font-size:13.5px;color:var(--muted);margin-top:-6px">${p[2]}</div></div>`).join('')}`;
    return frame(t, 'Built from the intake and today’s date. It starts at the profile form, not a first call.', body, sendFoot(l, key, 'timeline'));
  }

  // ── View Profile: ISL Discussion summary (same layout as Course Finder's) ──
  const ISL_TABS = ['Academics', 'Target Course', 'English Exam', 'Work Experience', 'Other Preferences'];
  const kw = t => t.replace(/\[\[(.+?)\]\]/g, '<em>$1</em>');
  const ans = v => (Array.isArray(v) ? v : [v]).filter(x => x !== undefined);
  // q(question, required, answers, plain?) — [[word]] highlights a keyword; empty answers show "-"
  function q(text, req, answers, plain) {
    const a = ans(answers).map(x => (x === '' || x === null) ? '-' : x);
    const body = !a.length ? '<p class="qa-plain">-</p>'
      : plain ? `<p class="qa-plain">${a.join(', ')}</p>`
      : `<ul class="qa-list">${a.map(x => `<li>${x}</li>`).join('')}</ul>`;
    return `<div class="qa"><p class="qa-q">${kw(text)}${req ? ' <b class="req">*</b>' : ''}</p>${body}</div>`;
  }
  const degreeOf = l => /PG Diploma/i.test(l.course) ? 'PG Diploma' : 'Masters';
  const gradingOf = sc => /cgpa/i.test(sc || '') ? 'CGPA' : (sc ? 'Percentage' : '');
  function islTab(l, tab) {
    const f = l.f;
    if (tab === 'Academics') return { title: 'Academic and backlog details', html:
      q('What is your highest [[academic qualification]]?', true, f.qual, true)
      + `<div class="qa-box"><h4>${f.qual}</h4><div class="qa-grid">
        ${q(`What was your [[${f.qual === "Bachelor's" ? "Bachelor’s degree" : 'degree'}]] in?`, true, f.bachelors)}
        ${q("What’s the [[grading system]] in your institute and what [[grades]] have you achieved?", true, [gradingOf(f.score), (f.score || '').replace(/\s*CGPA/i, '')])}
        ${q('Did you take a [[gap year]]?', true, f.gap)}
        ${q('[[Gap]] in months', false, f.gapMonths)}
      </div></div>` };
    if (tab === 'Target Course') return { title: 'Course Details', html: `<div class="qa-grid">
        ${q('Which [[degree]] you want to pursue?', true, degreeOf(l), true)}
        ${q('What is your [[preferred course duration]]?', false, [], true)}</div>
        <div class="qa"><p class="qa-q">What is your <em>preferred course</em> you want to study? <b class="req">*</b></p><p class="qa-plain">Course: <b>${l.course}</b></p></div>
        <div class="qa-grid">${q('Which [[country]] do you want to study in?', true, l.country)}${q('Which [[intake]] are you planning for?', true, l.intake)}</div>
        ${q('What [[career]] do you want after studying?', false, f.career)}
        ${q('Would you consider a [[closely related course]] for a better university/ROI?', false, [], true)}` };
    if (tab === 'English Exam') {
      const st = S.ielts[l.id];
      const given = st === 'Given (score)' ? 'Yes' : st ? 'No' : '';
      const need = st === 'Not required (waiver)' ? 'No' : st ? 'Yes' : '';
      return { title: 'English Exam', html: (st ? '' : `<p class="qa-note">${I.warn} Not in the product intake. Marked in the second-call disposition when the call is completed.</p>`)
        + q('[[Given]]?', true, given)
        + `<div class="qa-box"><div class="qa-grid">
          ${q('Need/ willing to [[take Exam]]?', true, need)}
          ${q('Name of exam', true, st ? 'IELTS' : '')}
          ${q('Exam status', true, st ? st.replace(' (score)', '').replace(' (waiver)', '') + (S.ieltsScore[l.id] ? ` · band ${S.ieltsScore[l.id]}` : '') : '')}
        </div></div>` };
    }
    if (tab === 'Work Experience') return { title: 'Work Experience', html: `<div class="qa-grid3">
        ${q('Total work experience (in Months)', true, f.workEx === '' ? '' : String(Number(f.workEx) * 12))}
        ${q('Sector', true, '')}
        ${q('Current / Last CTC (Annual)', false, f.salary)}</div>` };
    return { title: 'Other Preferences', html:
      q('Any location preference', false, [], true)
      + q('Any University preference', false, [], true)
      + q('What are the [[most important parameters]] based on which the student will choose the college they want to go to?', true, f.priority)
      + `<div class="qa-sec">Budget and funding</div><div class="qa-grid3">
        ${q('Overall [[tuition budget]]', true, f.budget)}${q('[[Method of funding]]', true, f.funding)}${q('Discussed with [[parents]]?', true, f.parents)}</div>
        <div class="qa-sec">Service and contact</div><div class="qa-grid3">
        ${q('[[Service Type]]', true, serviceLabel(S.service[l.id]) || 'Not marked yet')}${q('Email', false, f.email)}${q('City', false, f.city)}</div>
        ${q('Any [[questions]] for the counsellor?', false, f.questions)}` };
  }
  function islDialog(l, tab) {
    const t = islTab(l, tab);
    return `<div class="d2c isl-ov" data-d2c-bg><div class="isl" role="dialog" aria-modal="true" aria-labelledby="d2cIsl">
      <div class="isl-h"><h2 id="d2cIsl">${first(l)}'s ISL Discussion summary</h2><button class="isl-link" data-d2c-full="${l.id}">View Complete Details</button><button class="xbtn" data-d2c-close aria-label="Close">${I.x}</button></div>
      <div class="isl-tabs" role="tablist">${ISL_TABS.map(x => `<button role="tab" aria-selected="${x === tab}" data-d2c-isltab="${x}">${x}</button>`).join('')}</div>
      <div class="isl-sec">${t.title}</div>
      <div class="isl-body">${t.html}</div></div></div>`;
  }

  // ── View Summary: markdown summary of the student, generated from the intake ──
  const nf = v => (v === '' || v === undefined || v === null) ? '**Not provided**' : v;
  function summaryMd(l) {
    const f = l.f, st = S.ielts[l.id];
    return `# Student Study Abroad Profile

> **Profile status:** Based on the student's product intake form and token payment. There was no 1st call, so nothing comes from a transcript yet.

> Information not present in the sources is marked as **Not provided** or **Needs confirmation**.

---

## 1. Student Profile

### Academic Journey

- Student name: ${l.name}.
- Current location context: ${f.city ? 'Lives in ' + f.city + '.' : nf('')}
- Highest confirmed education: ${nf(f.qual)}.
- Undergraduate degree/course: ${nf(f.bachelors)}.
- Undergraduate grading scheme and score: ${f.score ? gradingOf(f.score) + ', ' + f.score.replace(/\s*CGPA/i, '') : nf('')}.
- Undergraduate institution: **Not provided**.
- Backlogs: **Not provided** — not asked in the intake; **needs confirmation** in the 2nd call.
- Academic/career gap: ${f.gap === 'Yes' ? 'Yes, ' + (f.gapMonths || '?') + ' months. Reason **needs confirmation**.' : 'No gap indicated.'}
- Class 12 and Class 10:
  - Board, passing year and score: **Not provided**.

### Work Experience

- Total experience: ${f.workEx === '0' ? 'Fresher, no work experience.' : nf(f.workEx) + ' years.'}
- Current salary: ${nf(f.salary)}.
- Sector / role: **Needs confirmation**.

## 2. Study Plan

- Target country: ${l.country}.
- Target course: ${l.course} (${degreeOf(l)}).
- Target intake: ${l.intake}.
- Career preference after studying: ${nf(f.career)}.
- How they will choose a college: ${nf(f.priority)}.

## 3. Budget and Funding

- Tuition fee budget: ${nf(f.budget)}.
- Method of funding: ${nf(f.funding)}.
- Discussed with parents: ${f.parents === 'No' ? '**No** — parents not consulted yet.' : nf(f.parents)}.

## 4. English Test

- IELTS status: ${st ? st + (S.ieltsScore[l.id] ? ', band ' + S.ieltsScore[l.id] : '') + ' (marked by counsellor in the 2nd call).' : '**Needs confirmation** — mark it in the 2nd call.'}
- Service type: ${S.service[l.id] ? serviceLabel(S.service[l.id]) + '.' : '**Needs confirmation** — mark it in the 2nd call.'}

## 5. Student's Questions

- ${f.questions ? f.questions : 'No questions entered in the intake.'}

## 6. To Confirm in the 2nd Call

- Backlogs, Class 12 / Class 10 details and undergraduate institution.
- ${st ? 'IELTS status is marked.' : 'IELTS status.'}
- ${S.service[l.id] ? 'Service type is marked.' : 'Service type.'}
${f.parents === 'No' ? '- Whether parents are on board with the plan and budget.\n' : ''}`;
  }
  // Small markdown renderer: headings, blockquotes, --- rules, nested "- " lists, **bold**
  function mdToHtml(md) {
    const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const inline = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const out = []; let depth = 0;
    const closeLists = to => { while (depth > to) { out.push('</li></ul>'); depth--; } };
    md.split('\n').forEach(line => {
      const li = line.match(/^(\s*)- (.*)$/);
      if (li) {
        const d = Math.floor(li[1].length / 2) + 1;
        if (d > depth) { while (depth < d) { out.push('<ul>'); depth++; } out.push('<li>' + inline(li[2])); }
        else { closeLists(d); out.push('</li><li>' + inline(li[2])); }
        return;
      }
      closeLists(0);
      if (/^### /.test(line)) out.push('<h3>' + inline(line.slice(4)) + '</h3>');
      else if (/^## /.test(line)) out.push('<h2>' + inline(line.slice(3)) + '</h2>');
      else if (/^# /.test(line)) out.push('<h1>' + inline(line.slice(2)) + '</h1>');
      else if (/^> /.test(line)) out.push('<blockquote>' + inline(line.slice(2)) + '</blockquote>');
      else if (/^---\s*$/.test(line)) out.push('<hr>');
      else if (line.trim()) out.push('<p>' + inline(line) + '</p>');
    });
    closeLists(0);
    return out.join('');
  }
  function summaryDialog(l) {
    return `<div class="d2c isl-ov" data-d2c-bg><div class="isl sum" role="dialog" aria-modal="true" aria-labelledby="d2cSum">
      <div class="isl-h"><h2 id="d2cSum">${first(l)}'s profile summary</h2><button class="xbtn" data-d2c-close aria-label="Close">${I.x}</button></div>
      <p class="sum-label">Profile summary from the intake</p>
      <div class="md">${mdToHtml(summaryMd(l))}</div></div></div>`;
  }

  // ── View Complete Details: the lead page (same layout as the RM CRM / production lead page) ──
  const LEAD_TABS = ['Student Profile', 'Appointments', 'Shortlist', 'Applications', 'Tasks', 'Call Logs', 'Activity Logs', 'Visa Status'];
  const ic = {
    flag:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18M3 4.5h13l-2 3.5 2 3.5H3"/></svg>',
    cal:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
    globe:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"/></svg>',
    clip:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4.5h6a1 1 0 011 1V6H8v-.5a1 1 0 011-1z"/><rect x="5" y="6" width="14" height="15" rx="2"/><path d="M9 12h6M9 16h6"/></svg>',
    acad:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l10 5-10 5L2 8l10-5z"/><path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"/></svg>',
    brief:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
    book:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5.5c2-1 5-1 8 0v13c-3-1-6-1-8 0v-13zM20 5.5c-2-1-5-1-8 0v13c3-1 6-1 8 0v-13z"/></svg>',
    rupee:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 5h10M7 9h10M7 5c4 0 6 1.3 6 4s-2 4-6 4h-1l7 7"/></svg>',
    pen:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16.5 4.5l3 3L7 20l-4 1 1-4L16.5 4.5z"/></svg>',
    star:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20.1l1.4-6.3L3 9.5l6.4-.6L12 3z"/></svg>',
    chat:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.4 8.4 0 01-8.5 8.4c-1.3 0-2.6-.3-3.7-.9L3 20l1.1-5.6a8.4 8.4 0 01-.9-3.9A8.4 8.4 0 0112.5 2a8.4 8.4 0 018.5 9.5z"/></svg>',
    spark:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>',
    phone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',
    mail:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    id:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c0-1.5 1.3-2.5 3-2.5s3 1 3 2.5M14.5 9.5h4M14.5 13h4"/></svg>',
    refresh:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"/></svg>',
    wa:'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.4z"/></svg>',
  };
  const badge = (txt, kind) => `<span class="lp-badge ${kind || 'ok'}">${txt}</span>`;
  function fieldCard(icon, title, body, done = true) {
    return `<div class="lp-card"><div class="lp-card-h"><span class="lp-ic">${icon}</span><span class="lp-card-t">${title}</span>${done ? badge('Completed') : badge('Pending', 'pend')}
      <button class="lp-edit" data-d2c-edit>${ic.pen}Edit</button></div><div class="lp-card-b">${body}</div></div>`;
  }
  function leadSidebar(l) {
    const st = S.ielts[l.id];
    const notes = S.notes[l.id] || [];
    return `<div class="lp-side-box">
        <div class="lp-tile"><div class="lp-row"><span class="lp-prem">★ Premium Plan</span><button class="lp-plus" data-d2c-toast="Premium plan setup coming soon.">+</button></div>
          <p class="lp-muted">No plan assigned yet. Click + to set up a premium plan for this student.</p></div>
        <div class="lp-tags">${badge(l.sku, 'sku')}${badge('Hot', 'hot')}${badge('Product led paid', 'plp')}</div>
        <div class="lp-line">${ic.id}<span>${l.id}</span></div>
        <div class="lp-line">${ic.mail}<button class="lp-out" data-d2c-reveal="${l.f.email}">View Email</button></div>
        <div class="lp-line">${ic.phone}<button class="lp-out" data-d2c-reveal="+91 98${l.id.replace(/\D/g, '').padEnd(8, '0').slice(0, 8)}">View Phone Number</button><span class="lp-wa">${ic.wa}</span></div>
        <div class="lp-two">
          <div class="lp-tile"><div class="lp-k">${ic.phone}Counsellor</div><div class="lp-v">${dayLabel(dayOf(l))}, ${l.slot}</div></div>
          <div class="lp-tile"><div class="lp-k">${ic.phone}RM</div><div class="lp-v lp-muted">Not assigned</div></div>
        </div>
        <div class="lp-btns"><button class="lp-pri" data-d2c-toast="Video call scheduling coming soon.">Schedule Video Call</button><button class="lp-pri wide" data-d2c-toast="VAS Interest opens here in the CRM.">VAS Interest</button></div>
      </div>
      <div class="lp-grid2"><div><span class="lp-k2">Last CL Connected</span><b>${l.done ? 'Today, ' + l.slot : '—'}</b></div><div><span class="lp-k2">Last RM Connected</span><b>—</b></div>
        <div><span class="lp-k2">Counsellor</span><b>${l.mentor}</b></div><div><span class="lp-k2">Relationship Manager</span><b>—</b></div>
        <div><span class="lp-k2">IELTS Status</span><b class="${st ? '' : 'lp-amber'}">${st ? st.replace(' (score)', '').replace(' (waiver)', '') : 'Not marked yet'}</b></div><div><span class="lp-k2">Score</span><b>${S.ieltsScore[l.id] || '---'}</b></div>
        <div><span class="lp-k2">Service Type</span><b class="${S.service[l.id] ? '' : 'lp-amber'}">${serviceLabel(S.service[l.id]) || 'Not marked yet'}</b></div><div><span class="lp-k2">Booking Status</span><b>${S.outcome[l.id] ? S.outcome[l.id].k : (l.done ? 'Outcome pending' : 'Booked')}</b></div>
      </div>
      <div class="lp-notes"><h4>Notes</h4>
        <textarea id="d2cNote-${l.id}" rows="3" placeholder="Add a note"></textarea>
        <div class="lp-row"><span class="lp-muted">Attach File</span><button class="lp-pri sm" data-d2c-note="${l.id}">Save</button></div>
        ${notes.map(n => `<div class="lp-note"><b>${n.text}</b><span>${n.at}, by ${l.mentor}</span></div>`).join('')}
      </div>`;
  }
  function profileTab(l) {
    const f = l.f, st = S.ielts[l.id], sv = S.service[l.id];
    return `<div class="lp-card lp-app"><span class="lp-app-t">App Status</span>${l.app ? badge('Downloaded', 'dl') : badge('Not Downloaded', 'nd')}
        <span class="lp-sp"></span><button class="lp-out2" data-d2c-toast="Status refreshed.">${ic.refresh}Refresh Status</button><button class="lp-pri" data-d2c-toast="App link sent to ${first(l)}.">${ic.wa}Send App Link</button></div>
      ${fieldCard(ic.clip, 'Post Study Outcome', q('Career Preference', true, [], true).replace('<p class="qa-plain">-</p>', '') + q('What is the [[career outcome]] the student is aiming for after completing masters abroad?', true, f.career))}
      ${fieldCard(ic.acad, 'Academic and backlog details', q('What is your highest [[academic qualification]]?', true, f.qual, true)
        + `<div class="qa-box"><h4>${f.qual}</h4>
          ${q(`What was your [[${f.qual === "Bachelor's" ? 'Bachelor’s degree' : 'degree'}]] in and what was your [[Specialization]]?`, true, f.bachelors)}
          ${q("What’s the [[grading system]] in your institute and what [[grades]] have you achieved?", true, [gradingOf(f.score), (f.score || '').replace(/\s*CGPA/i, '')])}
          <div class="qa-grid">${q('No. of [[Backlogs]]', true, '')}${q('[[Year of graduation]]', true, '')}</div></div>`)}
      ${fieldCard(ic.clip, 'Servicing Details', q('[[Servicing Type]]', true, sv ? serviceLabel(sv) : 'Not marked yet — mark it in the 2nd call'), !!sv)}
      ${fieldCard(ic.cal, 'Gap Years', q('Did the student have [[gap years]] in their entire study/career?', true, f.gap === 'Yes' ? `Yes — ${f.gapMonths || '?'} months` : f.gap))}
      ${fieldCard(ic.brief, 'Work Experience', `<div class="qa-grid3">${q('Total work experience (in Months)', true, f.workEx === '' ? '' : String(Number(f.workEx) * 12))}${q('Sector', true, '')}${q('Current / Last CTC (Annual)', false, f.salary)}</div>`)}
      ${fieldCard(ic.book, 'Course Details', `<div class="qa-grid">${q('Which [[degree]] you want to pursue?', true, degreeOf(l), true)}${q('What is your [[preferred course duration]]?', false, [], true)}</div>
        <div class="qa"><p class="qa-q">What is your <em>preferred course</em> you want to study? <b class="req">*</b></p><p class="qa-plain">Course: <b>${l.course}</b></p></div>`)}
      ${fieldCard(ic.rupee, 'Budget', `<div class="qa-grid3">${q('Overall [[tuition fee budget]]', true, f.budget)}${q('How will you [[finance]] your education?', true, f.funding)}${q('Discussed with [[parents]]?', true, f.parents)}</div>`)}
      ${fieldCard(ic.globe, 'Study Destination', `<div class="qa-grid">${q('[[Country]]', true, l.country)}${q('[[Intake]]', true, l.intake)}</div>`)}
      ${fieldCard(ic.pen, 'English Exam', q('[[Given]]?', true, st ? (st === 'Given (score)' ? 'Yes' : 'No') : 'Not marked yet — mark IELTS Status in the 2nd call')
        + (st ? `<div class="qa-box"><div class="qa-grid">${q('Need/ willing to [[take Exam]]?', true, st === 'Not required (waiver)' ? 'No' : 'Yes')}${q('Name of exam', true, 'IELTS')}${q('Exam status', true, st.replace(' (score)', '').replace(' (waiver)', '') + (S.ieltsScore[l.id] ? ' · band ' + S.ieltsScore[l.id] : ''))}</div></div>` : ''), !!st)}
      ${fieldCard(ic.star, 'Preference', q('What are the [[most important parameters]] based on which the student will choose the college?', true, f.priority) + `<div class="qa-grid">${q('Any location preference', false, [], true)}${q('Any University preference', false, [], true)}</div>`)}
      ${fieldCard(ic.mail, 'Contact and questions', `<div class="qa-grid">${q('Email', false, f.email)}${q('City', false, f.city)}</div>${q('Any [[questions]] for counsellors', false, f.questions)}`)}
      ${fieldCard(ic.chat, 'WhatsApp Group Link', `<div class="lp-wa-row"><div><b>Leap Scholar | ${l.name} | ${l.id}</b><br>${badge(youIn(l) ? (l.studentIn ? 'STUDENT JOINED' : 'STUDENT NOT JOINED') : 'COUNSELLOR NOT JOINED', youIn(l) && l.studentIn ? 'dl' : 'nd')}</div>
        <span class="lp-sp"></span><button class="lp-out2" data-d2c-toast="Group link copied.">Copy Link</button><button class="lp-out2" data-d2c-toast="Invite resent to ${first(l)}.">Resend Invite</button></div>`)}
      <div class="lp-card"><div class="lp-card-h"><span class="lp-ic">${ic.spark}</span><span class="lp-card-t">Profile summary from the intake</span></div><div class="md inline">${mdToHtml(summaryMd(l))}</div></div>`;
  }
  function leadTabBody(l, tab) {
    if (tab === 'Student Profile') return profileTab(l);
    const empty = t => `<div class="lp-card lp-empty">${t}</div>`;
    if (tab === 'Appointments') return `<div class="lp-card"><div class="lp-card-h"><span class="lp-card-t">Counsellor</span></div>
      <div class="lp-appt"><b>2nd call (Direct 2nd Call)</b><span>${dayLabel(dayOf(l))}, ${l.slot} · 40 min · with ${l.mentor}</span>${badge(S.outcome[l.id] ? S.outcome[l.id].k : (l.done ? 'Outcome pending' : 'Booked'), S.outcome[l.id] ? 'dl' : 'sku')}</div>
      <p class="lp-muted" style="margin:10px 0 0">No 1st call: the student booked this slot after filling the intake and paying the token.</p></div>`;
    if (tab === 'Tasks') return S.outcome[l.id] && S.outcome[l.id].tasks
      ? `<div class="lp-card">${S.outcome[l.id].tasks.map(t => `<div class="lp-task">${I.check}<span>${t}</span></div>`).join('')}</div>`
      : empty('No tasks yet. Tasks are created when the 2nd call is marked Completed, from the IELTS Status and Service Type you mark in the call.');
    if (tab === 'Activity Logs') {
      const log = [['Intake submitted in the product', '19 fields'], ['Token payment received', 'Product led paid lead'], ['2nd call booked', `${dayLabel(dayOf(l))}, ${l.slot} with ${l.mentor}`], ['LGC created', 'Counsellor + Leap admin']];
      if (youIn(l)) log.push(['Counsellor joined the LGC', 'Group link sent to the student']);
      if (S.sent['case:' + l.id]) log.push(['Case study sent', S.sent['case:' + l.id]]);
      if (S.sent['timeline:' + l.id]) log.push(['Timeline sent', S.sent['timeline:' + l.id]]);
      if (S.outcome[l.id]) log.push(['Call outcome: ' + S.outcome[l.id].k, S.outcome[l.id].at]);
      return `<div class="lp-card">${log.map(([a, b]) => `<div class="lp-log"><i></i><div><b>${a}</b><span>${b}</span></div></div>`).join('')}</div>`;
    }
    return empty(`No ${tab.toLowerCase()} yet for ${first(l)}. This student skipped the 1st call; this fills in after the 2nd call.`);
  }
  function leadPage(l, tab) {
    return `<div class="d2c lpage" role="dialog" aria-modal="true" aria-labelledby="d2cLp">
      <div class="lp-bar"><button class="lp-back" data-d2c-close>‹ Back</button><h2 id="d2cLp">${l.name}</h2>
        <span class="lp-sub">${ic.flag}DIRECT_SECOND_CALL</span><span class="lp-sub">${ic.cal}${l.intake}</span><span class="lp-sub">${ic.globe}${l.country}</span>
        <span class="lp-sp"></span><button class="lp-pill" data-d2c-toast="Walkthrough coming soon.">Begin Walkthrough</button><button class="lp-pill" data-d2c-toast="Opening Internal Portal…">Internal Portal</button></div>
      <div class="lp-tabs"><div class="lp-otabs"><button class="on">Lead Details</button><button data-d2c-toast="Chat is not available in this demo.">Chat</button></div>
        <div class="lp-itabs">${LEAD_TABS.map(t => `<button class="${t === tab ? 'on' : ''}" data-d2c-leadtab="${t}">${t}</button>`).join('')}</div></div>
      <div class="lp-main"><aside class="lp-side">${leadSidebar(l)}</aside><div class="lp-content">${leadTabBody(l, tab)}</div></div></div>`;
  }

  // ── page ──
  function pageHtml() {
    const tabLeads = leadsForTab();
    const today = tabLeads.filter(l => dayOf(l) === 0), todayLeft = today.filter(l => !l.done);
    const sorted = [...tabLeads].sort(byNextMeeting);
    const next = [...tabLeads].filter(l => !l.done).sort((a, b) => a.mins - b.mins)[0];
    const groups = [0, 1, 2].map(d => ({ d, items: sorted.filter(l => dayOf(l) === d) }));
    const later = sorted.filter(l => !inWindow(l));
    const bookedToday = LEADS.filter(l => dayOf(l) === 0).length;
    const dayHead = (title, sub, n) => `<div class="day-h"><span class="day-t">${title}</span><span class="day-s">${sub}</span><span class="day-n">${n} ${n === 1 ? 'call' : 'calls'}</span></div>`;
    const list = !tabLeads.length ? `<div class="empty">No Lead Assigned today</div>`
      : groups.map(g => `<section class="day" aria-label="${dayLabel(g.d)}">${dayHead(dayLabel(g.d), g.d < 2 ? fmtDay(g.d) : '', g.items.length)}${g.items.length ? `<ol class="q">${g.items.map(card).join('')}</ol>` : `<p class="day-empty">No 2nd calls booked.</p>`}</section>`).join('')
        + (later.length ? `<section class="day"><button class="later-btn" data-d2c-later aria-expanded="${S.laterOpen}"><span class="chev ${S.laterOpen ? 'open' : ''}">›</span><span class="day-t">Later</span><span class="day-s">after ${fmtDay(2)}</span><span class="day-n">${later.length} ${later.length === 1 ? 'call' : 'calls'}</span><span class="later-hint">${S.laterOpen ? 'Hide' : 'Show'}</span></button>${S.laterOpen ? later.map(l => `<div class="later-day">${fmtDay(dayOf(l))}</div><ol class="q">${card(l)}</ol>`).join('') : ''}</section>` : '');
    return `<main class="d2c main">
      <div class="pilotbar"><span><b>Direct 2nd Call pilot</b> · Product led paid leads only</span><span>10X: <b>On break</b> (locked by ops)</span><span>100ms: <b>Online</b></span>
        <span class="cap">Today <b>${bookedToday} of ${DAILY_MAX}</b> calls · min ${DAILY_MIN}<span class="capbar" title="Min ${DAILY_MIN}, max ${DAILY_MAX} Direct 2nd Calls a day"><span style="width:${Math.min(100, bookedToday / DAILY_MAX * 100)}%"></span><em style="left:${DAILY_MIN / DAILY_MAX * 100}%"></em></span></span></div>
      ${next ? `<section class="nextp" aria-live="polite">
        <div class="nx-l"><span class="nx-k">Next 2nd call</span><span class="nx-t">in ${fmtIn(next.mins)}</span><span class="nx-w">${next.name}, ${next.slot}. ${next.course}, ${next.country}</span><span class="nx-c">${today.length} calls today, ${todayLeft.length} left</span></div>
        <ul class="nx-r">
          <li class="ok"><i>${I.check}</i><span><b>LGC created</b>Group set up when the booking was confirmed</span></li>
          ${youIn(next) ? `<li class="ok"><i>${I.check}</i><span><b>You joined the LGC</b>${first(next)} got the group link</span></li>`
            : `<li class="wait"><i>!</i><span><b>You haven't joined the LGC</b>${first(next)} gets the group link only after you join</span><button class="bt bt-primary bt-sm" data-d2c-join="${next.id}">Join LGC</button></li>`}
          ${stuIn(next) ? `<li class="ok"><i>${I.check}</i><span><b>${first(next)} joined the LGC</b>Reminders go in the group</span></li>`
            : `<li class="wait"><i>!</i><span><b>${first(next)} hasn't joined the LGC</b>${S.remind[next.id] ? 'Reminder sent to their personal WhatsApp at ' + S.remind[next.id] : 'Your reminder goes to their personal WhatsApp, with the group link and call time'}</span>${youIn(next) ? `<button class="bt bt-secondary bt-sm" data-d2c-remind="${next.id}">${S.remind[next.id] ? 'Send again' : 'Send reminder by DM'}</button>` : ''}</li>`}
        </ul></section>` : ''}
      ${list}
      <p style="margin:0;font-size:14px;color:var(--muted)">Your existing 1st-call leads stay in the CRM as usual. While you're in the pilot you only get new Product led paid leads.</p>
    </main>`;
  }

  // ── render ──
  function render() {
    if (!S.on) return;
    renderHeader();
    if (pageOpen()) document.getElementById('assignedLeadsBody').innerHTML = pageHtml();
    const lead = id => LEADS.find(x => x.id === id);
    let ov = document.getElementById('d2cOverlay');
    const modal = S.dlg ? (() => { const [k, id] = S.dlg.split(':'); return k === 'case' ? caseDialog(lead(id)) : timelineDialog(lead(id)); })()
      : S.isl ? islDialog(lead(S.isl.id), S.isl.tab)
      : S.summary ? summaryDialog(lead(S.summary))
      : S.dispo ? dispoDialog(lead(S.dispo)) : '';
    const ap = pageEl();
    if (S.profile && ap && !ap.classList.contains('hidden')) { ap.classList.add('hidden'); S.backToLeads = true; }
    const ovHtml = (S.profile ? leadPage(lead(S.profile), S.leadTab) : '') + modal;
    if (ovHtml) {
      if (!ov) { ov = document.createElement('div'); ov.id = 'd2cOverlay'; document.body.appendChild(ov); }
      ov.innerHTML = ovHtml;
    } else if (ov) ov.remove();
  }

  function buildTasks(l) {
    const iv = S.ielts[l.id], sv = S.service[l.id];
    const t = [];
    if (iv === 'Not started' || iv === 'Preparing') t.push('Book/Update IELTS Exam: get ' + first(l) + ' a test date');
    else if (iv === 'Exam booked') t.push('Track IELTS exam and collect the scorecard');
    else if (iv === 'Given (score)') t.push('Upload IELTS scorecard' + (S.ieltsScore[l.id] ? ' (band ' + S.ieltsScore[l.id] + ')' : ''));
    else t.push('Confirm the English test waiver with shortlisted universities');
    if (sv === 'partner') t.push('Share shortlist and start partner applications');
    else t.push('Share payment link for ' + serviceLabel(sv).replace('Paid service · ', '') + ' and collect the fee');
    return t;
  }

  // Close the top-most layer: a modal first, then the View Student page
  function closeTop() {
    if (S.dlg || S.isl || S.summary || S.dispo) { S.dlg = null; S.isl = null; S.summary = null; S.dispo = null; }
    else if (S.profile) {
      S.profile = null;
      if (S.backToLeads) { S.backToLeads = false; openAssignedLeadsPage(); }
    }
  }

  function onClick(e) {
    const pop = document.getElementById('d2cPop');
    if (pop && !pop.contains(e.target)) { const n = nextCall(); S.popHidden = n && n.id; pop.remove(); }
    const t = e.target.closest('[data-d2c],[data-d2c-join],[data-d2c-again],[data-d2c-dlg],[data-d2c-type],[data-d2c-retype],[data-d2c-send],[data-d2c-close],[data-d2c-remind],[data-d2c-later],[data-d2c-tab],[data-d2c-profile],[data-d2c-isl],[data-d2c-isltab],[data-d2c-summary],[data-d2c-full],[data-d2c-leadtab],[data-d2c-toast],[data-d2c-edit],[data-d2c-reveal],[data-d2c-note],[data-d2c-shortlist],[data-d2c-oc],[data-d2c-dispo],[data-d2c-bg]');
    if (!t || t.disabled) return;
    const d = t.dataset;
    if ('d2cBg' in d) { if (e.target !== t) return; closeTop(); }
    else if (d.d2c === 'open') { openAssignedLeadsPage(); return; }
    else if ('d2cLater' in d) S.laterOpen = !S.laterOpen;
    else if (d.d2cJoin) { S.joined[d.d2cJoin] = true; toast('You joined the LGC. The student got the group link.'); }
    else if (d.d2cRemind) S.remind[d.d2cRemind] = nowStr();
    else if (d.d2cAgain) S.lgcAgain[d.d2cAgain] = nowStr();
    else if (d.d2cDlg) { S.dlg = d.d2cDlg; delete S.phase[d.d2cDlg]; }
    else if (d.d2cType) {
      const key = S.dlg; S.type[key.split(':')[1]] = d.d2cType; S.phase[key] = 'search';
      clearTimeout(S.timer); S.timer = setTimeout(() => { if (S.phase[key] === 'search') { S.phase[key] = 'result'; render(); } }, 1300);
    }
    else if ('d2cRetype' in d) S.phase[S.dlg] = 'pick';
    else if (d.d2cSend) { S.sent[d.d2cSend] = nowStr(); S.phase[d.d2cSend] = 'sentNow'; }
    else if ('d2cClose' in d) closeTop();
    else if (d.d2cProfile) S.profile = d.d2cProfile;
    else if (d.d2cIsl) S.isl = { id: d.d2cIsl, tab: 'Academics' };
    else if (d.d2cIsltab) S.isl.tab = d.d2cIsltab;
    else if (d.d2cSummary) S.summary = d.d2cSummary;
    else if (d.d2cFull) { S.profile = d.d2cFull; S.leadTab = 'Student Profile'; S.isl = null; }
    else if (d.d2cLeadtab) S.leadTab = d.d2cLeadtab;
    else if ('d2cToast' in d) { toast(d.d2cToast, 'info'); return; }
    else if ('d2cEdit' in d) { toast('Editing opens the CRM profile form.', 'info'); return; }
    else if (d.d2cReveal) { t.outerHTML = `<span class="lp-revealed">${d.d2cReveal}</span>`; return; }
    else if (d.d2cNote) {
      const ta = document.getElementById('d2cNote-' + d.d2cNote);
      if (!ta || !ta.value.trim()) { toast('Note cannot be empty.', 'error'); return; }
      (S.notes[d.d2cNote] = S.notes[d.d2cNote] || []).unshift({ text: ta.value.trim(), at: 'Today ' + nowStr() });
      toast('Note saved.');
    }
    else if (d.d2cShortlist) { const l = LEADS.find(x => x.id === d.d2cShortlist); toast(`Course Finder opened for ${l.name}: ${l.country}, ${l.course}, ${l.intake}, ${l.f.budget}, ${l.f.priority}.`, 'info'); return; }
    else if (d.d2cDispo) S.dispo = d.d2cDispo;
    else if (d.d2cOc) {
      const [k, id] = d.d2cOc.split(':'); const l = LEADS.find(x => x.id === id);
      if (k === 'Completed') { if (!marked(l)) return; S.dispo = null; S.outcome[id] = { k, at: nowStr(), tasks: buildTasks(l) }; toast(`Call marked Completed. ${S.outcome[id].tasks.length} tasks created for ${l.name}.`); }
      else {
        const note = k === 'Student no-show' ? `Reschedule link sent to ${first(l)}. A second no-show goes to ops.`
          : k === 'Rescheduled' ? `Reschedule link sent to ${first(l)}; the booking moves to the new slot and counts on that day.`
          : 'Booking cancelled; the slot is freed for another student.';
        S.outcome[id] = { k, at: nowStr(), note };
        toast(note, 'info');
      }
    }
    else return;
    render();
  }

  function onChange(e) {
    const el = e.target;
    if (el.dataset.d2cIelts) { S.ielts[el.dataset.d2cIelts] = el.value; if (el.value !== 'Given (score)') delete S.ieltsScore[el.dataset.d2cIelts]; render(); }
    else if (el.dataset.d2cService) { S.service[el.dataset.d2cService] = el.value; render(); }
    else if (el.dataset.d2cScore) { S.ieltsScore[el.dataset.d2cScore] = el.value.trim(); }
  }

  function onKey(e) {
    if (e.key === 'Escape' && (S.dlg || S.isl || S.summary || S.dispo || S.profile)) { closeTop(); render(); }
  }

  let wired = false;
  window.renderDirect2nd = render;

  window.initDirect2nd = function (on) {
    S.on = !!on;
    document.getElementById('d2cBadge')?.remove();
    document.getElementById('d2cPop')?.remove();
    document.getElementById('d2cOverlay')?.remove();
    S.backToLeads = false;
    if (!S.on) { S.dlg = null; S.isl = null; S.summary = null; S.dispo = null; S.profile = null; return; }
    ensureAssets();
    if (!wired) {
      wired = true;
      document.addEventListener('click', onClick);
      document.addEventListener('change', onChange);
      document.addEventListener('keydown', onKey);
    }
    render();
  };
})();
