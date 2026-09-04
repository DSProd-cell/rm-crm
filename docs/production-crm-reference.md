# Production Leap CRM — Reference Notes

Compiled from live exploration of `portal.leapscholar.com/crm` (counsellor account, Vandna Rani), read-only. This is the source-of-truth reference used to build the RM CRM clone. Anything marked **RM-specific** is our own addition/business logic supplied directly by the product owner, not something present in the counsellor CRM.

---

## 1. Boost Output pipelines

### Boost Referrals (74 total, counsellor CRM)
Categories: **Visa Approved**, **Premium Paid**, **STI Done**

No Definition / How to Close text anywhere in this pipeline. Task cards only show **"Ask for Referral"** and **"View Task"** buttons — no guidance box. This is the one pipeline with no close-guidance pattern.

### Boost STI (408 total)
Categories (pills): **Lock-in → STI**, **On Hold**, **F2F → Lock**, **ISL → F2F**

| Category | Task badge | How to Close |
|---|---|---|
| F2F → Lock | "Lock the student in" | *Student has attended the 2nd discussion ensure to discuss the relevant lock-in plan and lock-in the customer from our services. Always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student.* |
| ISL → F2F | "Schedule F2F call" | *Discuss with the user and align for a 2nd discussion basis user's preference book an Offline/Online session, post student has joined your task will be closed, always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student.* |
| Lock-in → STI | — | 0 students in account at time of research; no live sample, text not retrievable |
| On Hold | — | 0 students in account at time of research; no live sample, text not retrievable |

### Boost Deposit
Structured differently — grouped under **"Priority Actions"** and **"Less Efforts High Output"** headers, each item its own Definition + Task Closure page (not per-card badges like STI/Revenue).

| Group | Pending | Definition | Task Closure |
|---|---|---|---|
| Tasks - C to UC and UC to Deposit | 56 | All cases where your students have Received admits and are waiting to clear their conditions or pay deposit. | Discuss with your students on how can they convert their conditional admits to unconditional admits, these tasks will be closed once you've resolved as per status to Unconditional or Deposit payment, always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student. |
| CAS/I20 - Counsellor Review Needed | 4 | Discuss with your students and review the blockers pending on student's end and file the application for CAS/I20 to university. | Go to your Applications tab and update Status and Expected date of completion on CAS Status section for respective applications always and update status ahead to resolve the task. |
| Exp Conditions for Conditional Admit | 36 | For all these students clear your conditions mentioned for the applications. | Clear conditions mentioned against respective application or add tentative timeline. |
| Deferral Funnel View | 5 | All your students which have deferred for future intakes can be tracked at this view. | *(none — view-only tracker)* |
| Visa Deferral Funnel View | 0 | Same definition as Deferral Funnel View. | *(none — view-only tracker)* |

### Boost Revenue (308 total)
Categories (pills): **C2I** (3), **Leap Prime Services** (2), **Premium Services** (1), **Specialised Services** (0), **Pending Payments** (0), **2nd Call to Lockin followup** (0)

| Category | How to Close |
|---|---|
| C2I | Discuss about how leap can support for english exam preparations and lock-in the user with an English prep SKU or Update the English exam status if student has given exam, or Booked from Outside or Student Doesn't Need to Give Exam in Internal Portal. Task will be closed if student enrol for exam or has Given or Booked or NR as per status in IP. Always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student. |
| Leap Prime Services | This task is been created basis you've marked this student Looking For Free service - Discuss how leap prime would enable them to get an higher chance to get their dream admit and also How a Dream team will be helping the Student. Once user has paid for Leap Prime this task will be closed, always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student. |
| Premium Services | This task is been created basis you've marked this student is Looking For Premium service - Discuss about the Dream University student is Looking for and Lock in the User By taking the Amount as per the Package and update in the system to close the task. Once user has paid for the plan this task will be closed, always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student. |
| Specialised Services / Pending Payments / 2nd Call to Lockin followup | 0 students in account at time of research; no live sample, text not retrievable |

**Common thread across STI/Deposit/Revenue guidance text:** almost every closure note ends with *"always update Follow-up date after confirmation with user. Always use 100ms, Jerry, Leap Group Chat for all communications with the student."* — this is boilerplate repeated on nearly every task type.

---

## 2. Boost Input → Potential Escalation

Card header: ⭐ icon, "Potential Escalation" label, red "IMP" badge. Rows colored green (0 count) / red (count > 0). Confirmed via live DOM inspection:

- **Student Not Happy** — 🚨 icon
- **WA Summary** — 💬 icon, opens a nested accordion of 5 sub-groups (each its own Definition + Task Closure):
  - **Active Groups** (✅) — no definition captured (0 issues state)
  - **Inactive Groups** (⚠️) — Definition: *These students haven't interacted on our group-chat.* Task Closure: *Kickstart conversation with these students as per their state and ensure you're always in touch with your students.*
  - **Students Not Joined Groups** (👤)
  - **Messages Not Replied** (💬)
  - **Group Not Created / Counsellors Not Joined** (🚫)
- **IS Pending and Breached** — 🚨 icon
- **Missed Calls** — 🚨 icon. **Confirmed live quirk:** this row renders **green** even when its count is nonzero (observed at count 18) — unlike every other row, which is red at count > 0. Cause unknown (possibly a different/higher threshold or a display bug in production); replicated faithfully in our clone as a hardcoded exception.

Definitions for "Student Not Happy", "IS Pending and Breached", and "Missed Calls" themselves were **not captured live** (both were at 0 or the drawer didn't surface body text for them during research) — the guidance text used in our clone for these three is our own reasonable approximation, not verified production copy.

"Add New Note" modal on the student detail page uses a **"Select Title"** dropdown (react-select) positioned above the note textarea, with options: Arranging Docs, Arranging Funds, Call me later, Needs time, RNR, Waiting for P1 Admit, Wants to drop, Others… This is the direct analog of what we built as **Disposition** in the RM app, but with counsellor-specific categories rather than RM ones.

Notes list (after "Fetch Notes") renders as: bold title, then `{Mon DD} · {Author}` on the next line, divider between entries, `+ Add New Note` link at the bottom. No note body preview shown in the summary list.

---

## 3. View Task page (student detail)

Confirmed fields, top to bottom: User ID, Course, Country, Last Call, Follow-up (editable, pencil icon), Last Connected, Intake, Phone ("View Phone Number" reveal), Notes ("Fetch Notes"), WhatsApp Groups (checkboxes: You / Student — no "Counsellor" checkbox on the real page, only 2 boxes), Servicing Type (Type + Subservicing Type — **editable dropdowns with a Save button for counsellors** in production), "+ Add premium plan" pill.

**RM-specific deviation (our app):** Servicing Type / Subservicing Type made **view-only** for the RM/Student Success Manager role — this was an explicit product decision, not something derived from production (production's counsellor role can edit it).

---

## 4. Incentives & Earnings tab

Confirmed structure, no Performance Scorecard section exists in production at all.

- **Earned So Far** (white card, green amount, "Tap to see breakdown") + **Opportunity Size** (solid `#EA580C` card, chevron-right icon, white text) — side by side, `flex-[2]` / `flex-1`.
- **On Going Offers** accordion (🎁 icon):
  - **Offers for Students** sub-section — orange theme (`bg-[#FFF7ED]`, border `#FFEDD5`, icon/text `#EA580C`), gradient offer cards (`from-[#F97316] to-[#C2410C]`), badge pill, title, description, "Expires …" + "See Students →" button.
  - **Offers for Counsellors** sub-section — blue theme (`bg-[#EFF6FF]`, border `#DBEAFE`, icon/text `#2563EB`), "For You" badge (orange: `bg-[#FFF3E0] border-[#FFB74D] text-[#E65100]`). Confirmed empty-state ("No offers available") is common; when populated the card style there was **not confirmed live** — the blue gradient we used for our "Offers for Student Success Managers" cards was inferred from the section's blue theme color, not screenshotted from a populated counsellor-offer card.
- **Top Earners** accordion (🏆 icon) — two columns, **This Month** / **All Time**, each row: rank (trophy icon for top 3 — gold `#EAB308` / silver `#C0C0C0` / bronze `#CD7F32` — or a plain number for rank 4+), orange avatar circle (`#EA580C`) with initials, name, and a **plain percentage progress bar** (`bg-[#E2E8F0]` track, `bg-[#EA580C]` fill) — **no payout amount shown anywhere in this section.**
- **Monthly Incentive Earned** accordion — production renders a full Recharts line/bar chart; we kept our simpler CSS bar-chart equivalent (not a pixel match, out of scope to reproduce a charting library).

---

## 5. Learning & Development tab

- **Raise New Ticket** button, top-right, solid `#EA580C`.
- **My Tickets** — three white cards with 2px colored borders: Total Raised (`border-[#BFD9FE]`, amount `#2563EB`), Resolved (`border-[#BFF0C1]`, amount `#22C55E`, "Avg TAT: X mins"), Not Resolved (`border-[#FFCACA]`, amount `#EF4444`). Each has a centered "↻ Refresh" row at the bottom.
- **IMP Sheet** accordion (📖 icon, indigo `#443eff`) — flat list of external links, each row: icon box, title, external-open icon. Confirmed link labels: Raise SOP Request, Offer Follow up, Raise Lead Transfer Request, Info-Hub, LeapPay Payment Link, Premium Payment Links.
- **Training Modules** accordion (🎓 icon, indigo `#443eff`) — nested accordions per category: **Soft Training**, **Domain Training** (59 lessons, confirmed all "Document" type in this account), **System Training** (confirmed mix of Document + Video types here), **New Features**. Each lesson row: title, description, a type badge (**Document** — blue `bg-[#DBEAFE] text-[#1D4ED8]`, description icon; or **Video** — red `bg-[#FEF2F2] text-[#B91C1C]`, play-circle icon), and a solid indigo (`#443eff`) **Open ↗** button.

---

## 6. RM-specific business logic (not from production — supplied directly by product owner)

These do not exist in the counsellor CRM and were given to us as RM/Student Success Manager domain knowledge:

- **Boost pipeline categories (RM app)**:
  - Boost STI: F2F Done - Doc Not Collected / F2F Done - CF Not Done / F2F Not Done (CF = **College Finalised**, not "confirmation fee")
  - Boost Revenue: Prime / IELTS / PTE / DET / DMAT
  - Boost Loan: Loan VC Not Booked / Loan VC Not Attended
- **Disposition** dropdown (separate action, not tied to notes): C2I, Prime, Loan VC Booking, F2F, Doc Collection, College Finalisation.
- **Quality Score buckets**: 2nd Call Reschedule & Join, Boost Lock-in, Loan VC Book & Join, Prep Demo Booked/Enrollment Pending.
- **Important Business Goal** metrics: CA > Lockin (14d), CA > F2F (14d).
- Simplified role structure: RM / Team Lead / Senior Manager / Admin (no "Manager RM" tier — production's manager view was never inspected directly since the research account is a counsellor, not a manager).

---

## 7. Confirmed visual tokens (pulled directly from production DOM)

| Severity | Gradient | Border | Shadow | Text |
|---|---|---|---|---|
| Red (danger) | `#FEF2F2 → #FEE2E2` | `#FFCDD2` | `#FCA5A555` | `#C62828` (label/count), `#DC2626` (sub) |
| Green (good) | `#ECFDF5 → #D1FAE5` | `#C8E6C9` | `#66BB6A55` | `#2E7D32` |
| Amber/orange | *not confirmed live* — no populated middle-tier card was seen. We use the app's own accent `#EA580C` on `#FFF7ED → #FFEDD5` (Tailwind orange-50/100), chosen because it visually reads as orange rather than yellow — a real production "Volume + Quality" badge does use Material-orange (`#FFF3E0 / #FFB74D / #E65100`), which is the closest confirmed reference point. |

- Header/tab bar: active tab = blue text + blue underline, **no icons** on tab labels (Tasks & Performance / Incentives & Earnings / Learning & Development).
- All accordion-style section headers share one pattern: 36×36 icon box (18×18 for nested sub-rows), 16px/semibold title, 12px muted subtitle, chevron that rotates on toggle.
- Standard button/pill colors used throughout: blue accent pills `bg-[#EEF2FF] text-[#4338CA] border-[#C7D2FE]` (View Student/View Task), green pills `bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]` (Open WA Group / positive actions).

---

## 8. Known gaps / not retrievable

- Production gates the full "All Tasks" list behind clearing today's queue for **Boost STI** and **Boost Revenue** ("Complete today's tasks to unlock") — Boost Deposit and Boost Referrals do not have this gate. This blocked pulling guidance text for the five zero-count categories listed above.
- No manager/Team Lead view of the counsellor CRM was ever inspected — the research account only has counsellor-level access. Our RM app's Team Lead/Senior Manager views are original design work informed by the RM/counsellor patterns, not a copy of a real production manager screen.
