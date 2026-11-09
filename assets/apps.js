/* Content and scripts for the live app scenes (all names and figures are invented). */
(function () {
  var B = function (p) { return window.ConnectasApp.build(p); };
  var A = window.CONNECTAS_APPS = {};

  /* ---------------- Kitchen & Bath (Halden) ---------------- */
  A.kb = {
    brand: 'Halden', accent: '#3E5647', me: 'DR',
    nav: [['Dashboard', 'home'], ['Leads', 'users', '8'], ['Projects', 'folder'], ['Schedule', 'cal'], ['Finance', 'dollar'], ['Reports', 'chart']],
    desktop: [{
      nav: 0, kicker: 'Executive dashboard', title: 'Good morning, Daniel', tabs: ['Today', 'This week', 'This month'], tab: 1, layout: 'g3',
      get body() { return B([
        ['kpis', [{ k: 'leads', l: 'New leads', v: '64', d: '+10% vs last month', icon: 'users', spark: [3, 5, 4, 6, 7, 6, 9] }, { k: 'proj', l: 'Active projects', v: '21', d: '+13%', icon: 'folder', spark: [5, 5, 6, 6, 7, 8, 8] }, { k: 'conv', l: 'Proposal conversion', v: '57%', d: '+4 pts', icon: 'check', spark: [4, 5, 5, 6, 5, 7, 8] }, { k: 'rev', l: 'Revenue this month', v: '$158,400', d: '+11%', icon: 'dollar', spark: [4, 6, 5, 7, 8, 7, 9] }]],
        ['bars', { k: 'rb', t: 'Revenue by month', r: 'Last 7 months', v: [92, 110, 104, 128, 136, 149, 158], l: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], i: 4 }],
        ['needs', { t: 'Needs your decision', i: 5, items: [{ k: 'n1', a: 'Proposal · Whitmore Mudroom', b: '$14,800 · from Ryan W.' }, { k: 'n2', a: 'Change order #14 · Walsh Kitchen', b: '$1,350 · crown and fillers' }, { k: 'n3', a: '8% discount · Park Kitchen', b: 'Requested by Laura B.' }] }],
        ['rows', { k: 'plist', t: 'Projects', i: 6, rows: [{ k: 'p1', a: 'Whitfield Kitchen', b: 'Design review · Sep 30', p: 'Design', c: 'purple' }, { k: 'p2', a: 'Walsh Kitchen', b: 'Install · Crew A', p: 'Installing', c: 'blue' }, { k: 'p3', a: 'Whitmore Mudroom', b: 'Proposal sent', p: 'Proposal', c: 'yellow' }] }]
      ]); }
    }],
    tablet: [{
      title: 'Installation schedule', me: 'EC', layout: 'one',
      get body() { return B([['cal', { t: 'Crews · this week', r: 'Oct 21 – 25', rows: [{ l: 'Crew A', b: [{ s: 1, w: 3, t: 'Walsh · install', c: 'c1' }] }, { l: 'Crew B', b: [{ s: 2, w: 2, t: 'Park · measure', c: 'c2' }, { s: 4, w: 1, t: 'Hill · demo', c: 'c3' }] }, { l: 'Delivery', b: [{ s: 1, w: 1, t: 'Cabinets', c: 'c4' }, { s: 3, w: 1, t: 'Tops', c: 'c4' }] }] }]]); }
    }],
    phone: [{
      kicker: 'Welcome to Halden', title: 'Good morning, Sarah',
      get body() { return B([['pprog', { a: 'Whitfield Kitchen', b: 'Design approved · next: deposit', p: 62 }], ['pcard', { k: 'prop', icon: 'doc', a: 'Proposal ready', b: 'Whitmore Mudroom · $14,800', btn: 'Approve', i: 1 }], ['pcard', { k: 'dep', icon: 'dollar', a: 'Deposit', b: '$7,400 due to order', btn: 'Pay', i: 2 }], ['ptl', { items: ['Inquiry received', 'Design approved', 'Deposit', 'Installation scheduled'], done: 2, i: 3 }]]); }
    }],
    script: [
      async function (d, w) { d.desktop.toast('New lead from the website · Hill Kitchen'); d.desktop.addRow('plist', { k: 'p0', a: 'Hill Kitchen', b: 'Website form · $40–60k', p: 'New lead', c: 'green' }); d.desktop.num('leads', '65'); await w(900); d.desktop.press('tab0'); await w(800); d.desktop.tab(0); },
      async function (d, w) { await d.phone.press('propb'); d.phone.text('props', 'Approved just now'); d.phone.q('propb') && d.phone.btnDone && d.phone.btnDone('propb', 'Done'); await w(500); d.desktop.btnDone('n1b'); d.desktop.pill('p3p', 'Approved', 'green'); d.desktop.num('conv', '59%'); d.desktop.num('needc', '2'); await w(700); d.desktop.remove('n1'); },
      async function (d, w) { await d.tablet.press('r1'); d.tablet.addBlock('r1', { s: 5, w: 1, t: 'Whitmore · install', c: 'c1', k: 'nb' }); await w(600); d.phone.notify('Installation scheduled', 'Friday, Oct 25 · Crew B'); d.desktop.num('proj', '22'); },
      async function (d, w) { await d.phone.press('depb'); d.phone.btnDone('depb', 'Paid'); d.phone.num('ppct', '75%'); d.phone.bar('pbar', 75); d.phone.tl(2); await w(500); d.desktop.press('rev'); await w(400); d.desktop.num('rev', '$166,600'); d.desktop.grow('rb', 100); d.desktop.toast('Deposit received · $7,400'); }
    ]
  };

  /* ---------------- Yacht Charter (Seaward) ---------------- */
  A.yc = {
    brand: 'Seaward', accent: '#1E5FA8', me: 'MS',
    nav: [['Overview', 'home'], ['Bookings', 'cal', '3'], ['Fleet', 'boat'], ['Owners', 'users'], ['Finance', 'dollar'], ['Maintenance', 'wrench']],
    desktop: [{
      nav: 1, kicker: 'Charter operations', title: 'Bookings', tabs: ['Kanban', 'Calendar', 'List'], tab: 0, cta: 'New booking', layout: 'k',
      get body() { return B([
        ['kpis', [{ k: 'up', l: 'Upcoming charters', v: '45', d: '+6 this week', icon: 'cal', spark: [3, 4, 4, 5, 6, 6, 7] }, { k: 'util', l: 'Fleet utilization', v: '78%', d: '+5 pts', icon: 'boat', spark: [5, 5, 6, 6, 7, 7, 8] }, { k: 'rev', l: 'Bookings this month', v: '$412,300', d: '+14%', icon: 'dollar', spark: [4, 5, 6, 6, 7, 8, 9] }, { k: 'appr', l: 'Awaiting owner', v: '3', d: 'oldest 1 day', dn: 1, icon: 'key' }]],
        ['kanban', { i: 4, cols: [{ t: 'Request', c: '#94A3B8', cards: [{ k: 'c1', a: 'Blue Harbor · 4h', b: 'Sat · 8 guests', v: '$3,200' }] }, { t: 'Owner approval', c: '#F59E0B', cards: [{ k: 'c2', a: 'Silver Tides · day', b: 'Sun · 12 guests', v: '$6,800' }] }, { t: 'Confirmed', c: '#3B82F6', cards: [{ k: 'c3', a: 'Sea Breeze · 6h', b: 'Fri · 10 guests', v: '$4,900', pr: 60 }] }, { t: 'Ready to sail', c: '#10B981', cards: [{ k: 'c4', a: 'Astra · sunset', b: 'Today · 6 guests', v: '$2,400', pr: 100 }] }] }]
      ]); }
    }],
    tablet: [{
      title: 'Departure readiness', me: 'LM', layout: 'one',
      get body() { return B([['check', { t: 'Sea Breeze · Friday 9:00 AM', p: '50%', items: [{ t: 'Fuel and fluids', d: 1 }, { t: 'Safety equipment', d: 1 }, { t: 'Guest list received' }, { t: 'Hull and deck photos', ph: 1 }] }]]); }
    }],
    phone: [{
      kicker: 'Seaward · Owner', title: 'Your yachts, at a glance',
      get body() { return B([['pcard', { k: 'own', icon: 'key', a: 'Approval needed', b: 'Silver Tides · Sun · $6,800', btn: 'Approve' }], ['pcard', { icon: 'dollar', a: 'Owner earnings', b: '$18,620 this month', i: 1 }], ['pcard', { icon: 'cal', a: 'Next charter', b: 'Sea Breeze · Fri 9:00 AM', i: 2 }], ['pcard', { icon: 'wrench', a: 'Maintenance', b: '1 item scheduled', i: 3 }]]); }
    }],
    script: [
      async function (d, w) { await d.desktop.press('cta'); d.desktop.addCard('col0', { k: 'c5', a: 'Astra · 4h', b: 'Next Sat · 6 guests', v: '$2,600' }); d.desktop.num('up', '46'); d.desktop.toast('Booking request from the website'); },
      async function (d, w) { await d.phone.press('ownb'); d.phone.btnDone('ownb', 'Approved'); d.phone.text('owns', 'Approved just now'); await w(500); d.desktop.moveCard('c2', 'col2'); d.desktop.num('appr', '2'); d.desktop.num('rev', '$419,100'); },
      async function (d, w) { await d.tablet.press('ck2'); d.tablet.check(2); d.tablet.num('chkp', '75%'); d.tablet.bar('chkbar', 75); await w(700); await d.tablet.press('ck3'); d.tablet.check(3); d.tablet.num('chkp', '100%'); d.tablet.bar('chkbar', 100); },
      async function (d, w) { d.desktop.moveCard('c3', 'col3'); d.desktop.num('util', '81%'); d.desktop.toast('Sea Breeze is ready to sail'); await w(400); d.phone.notify('Ready to sail', 'Sea Breeze · Friday 9:00 AM'); }
    ]
  };

  /* ---------------- Relocation & Property (Northway) ---------------- */
  A.rp = {
    brand: 'Northway', accent: '#17414A', me: 'RG',
    nav: [['Dashboard', 'home'], ['Cases', 'users', '16'], ['Properties', 'key'], ['Inspections', 'camera'], ['Repairs', 'wrench', '3'], ['Reports', 'chart']],
    desktop: [{
      nav: 1, kicker: 'Relocation', title: 'Cases', tabs: ['Kanban', 'Classic', 'List', 'Calendar'], tab: 0, cta: 'Open new case', layout: 'k',
      get body() { return B([
        ['kpis', [{ k: 'cases', l: 'Active cases', v: '16', d: '+2 this week', icon: 'users', spark: [3, 4, 4, 5, 5, 6, 7] }, { k: 'leased', l: 'Homes leased', v: '9', d: 'this quarter', icon: 'key', spark: [2, 3, 3, 4, 5, 6, 6] }, { k: 'insp', l: 'Inspections this week', v: '4', d: '2 today', icon: 'camera' }, { k: 'rep', l: 'Open repairs', v: '3', d: 'avg 1.6 days', dn: 1, icon: 'wrench' }]],
        ['kanban', { i: 4, cols: [{ t: 'Request', c: '#94A3B8', cards: [{ k: 'k1', a: 'Daniel Obi', b: 'Subsea Engineer · arrives Dec 7', pr: 5 }] }, { t: 'Home search', c: '#F59E0B', cards: [{ k: 'k2', a: 'Mitchell Grant', b: 'Project Manager · 3 viewings', pr: 40 }] }, { t: 'Lease', c: '#3B82F6', cards: [{ k: 'k3', a: 'Sophie van Dijk', b: 'HSE Lead · lease review', pr: 70 }] }, { t: 'Moved in', c: '#10B981', cards: [{ k: 'k4', a: 'Tom Hendricks', b: 'Marine Superintendent', pr: 100 }] }] }]
      ]); }
    }],
    tablet: [{
      title: 'Move-in inspection', me: 'AC', layout: 'one',
      get body() { return B([['check', { t: '12 Oak Park Ave · Unit 4B', p: '40%', items: [{ t: 'Living room and kitchen', d: 1, ph: 1 }, { t: 'Bedrooms and closets', d: 1, ph: 1 }, { t: 'Appliances working', ph: 1 }, { t: 'Meter readings', ph: 1 }, { t: 'Keys handed over' }] }]]); }
    }],
    phone: [{
      kicker: 'Northway · Resident', title: 'Welcome home, Sophie',
      get body() { return B([['pcard', { k: 'rep', icon: 'wrench', a: 'Report a repair', b: 'Photo and description', btn: 'Report' }], ['pcard', { icon: 'key', a: 'Your home', b: '12 Oak Park Ave · Unit 4B', i: 1 }], ['pcard', { icon: 'doc', a: 'Documents', b: 'Lease and inspection report', i: 2 }], ['pcard', { icon: 'users', a: 'Your coordinator', b: 'Ryan · replies in about 1 hour', i: 3 }]]); }
    }],
    script: [
      async function (d, w) { await d.desktop.press('cta'); d.desktop.addCard('col0', { k: 'k5', a: 'Priya Menon', b: 'Data Engineer · arrives Jan 12', pr: 0 }); d.desktop.num('cases', '17'); d.desktop.toast('New case opened by HR'); },
      async function (d, w) { await d.desktop.press('k3'); d.desktop.moveCard('k3', 'col3'); d.desktop.num('leased', '10'); d.desktop.toast('Lease signed · Sophie van Dijk'); },
      async function (d, w) { await d.tablet.press('ck2'); d.tablet.check(2); d.tablet.num('chkp', '60%'); d.tablet.bar('chkbar', 60); await w(500); await d.tablet.press('ck3'); d.tablet.check(3); d.tablet.num('chkp', '80%'); d.tablet.bar('chkbar', 80); await w(500); await d.tablet.press('ck4'); d.tablet.check(4); d.tablet.num('chkp', '100%'); d.tablet.bar('chkbar', 100); },
      async function (d, w) { await d.phone.press('repb'); d.phone.btnDone('repb', 'Sent'); d.phone.text('reps', 'Kitchen faucet · sent just now'); await w(500); d.desktop.num('rep', '4'); d.desktop.toast('New repair request · Unit 4B'); }
    ]
  };

  /* ---------------- Departments (generic, Connectas) ---------------- */
  var dep = { brand: 'Connectas', accent: '#2563EB', me: 'AM', nav: [['Sales', 'users'], ['Operations', 'cal'], ['Finance', 'dollar'], ['Client portal', 'home'], ['Field app', 'wrench'], ['Management', 'chart']] };
  A.dept_sales = Object.assign({}, dep, { desktop: [{ nav: 0, kicker: 'Sales & CRM', title: 'Pipeline', tabs: ['Kanban', 'List', 'Forecast'], cta: 'New deal', layout: 'k', get body() { return B([['kpis', [{ k: 'open', l: 'Open deals', v: '24', d: '+20%', icon: 'users', spark: [3, 4, 5, 5, 6, 7, 8] }, { k: 'pipe', l: 'Pipeline value', v: '$1,248,000', d: '+32%', icon: 'dollar', spark: [4, 5, 5, 6, 7, 7, 9] }, { k: 'won', l: 'Closed this month', v: '$326,000', d: '+18%', icon: 'check' }, { k: 'rate', l: 'Win rate', v: '68%', d: '+7 pts', icon: 'chart' }]], ['kanban', { i: 4, cols: [{ t: 'Lead', c: '#94A3B8', cards: [{ k: 'a1', a: 'Maple Office Park', b: 'Website form', v: '$72,000' }] }, { t: 'Proposal', c: '#A78BFA', cards: [{ k: 'a2', a: 'Summit Hotel', b: 'Sent 2 days ago', v: '$120,000' }] }, { t: 'Negotiation', c: '#F59E0B', cards: [{ k: 'a3', a: 'Westbrook Offices', b: 'Call booked', v: '$110,000' }] }, { t: 'Won', c: '#10B981', cards: [{ k: 'a4', a: 'Pine Mall Expansion', b: 'Signed', v: '$150,000' }] }] }]]); } }],
    script: [async function (d, w) { await d.desktop.press('cta'); d.desktop.addCard('col0', { k: 'a5', a: 'Lakeside Residence', b: 'Website form · just now', v: '$42,000' }); d.desktop.num('open', '25'); d.desktop.num('pipe', '$1,290,000'); await w(1200); await d.desktop.press('a3'); d.desktop.moveCard('a3', 'col3'); d.desktop.num('won', '$436,000'); d.desktop.num('rate', '70%'); d.desktop.toast('Deal won · Westbrook Offices'); await w(1400); await d.desktop.press('tab2'); d.desktop.tab(2); }] });
  A.dept_ops = Object.assign({}, dep, { desktop: [{ nav: 1, kicker: 'Operations', title: 'Work schedule', tabs: ['This week', 'Next week'], layout: 'g2', get body() { return B([['kpis', [{ k: 'wo', l: 'Active work orders', v: '42', d: '+17%', icon: 'doc' }, { k: 'tod', l: 'Scheduled today', v: '12', icon: 'cal' }, { k: 'prog', l: 'In progress', v: '18', icon: 'wrench' }, { k: 'done', l: 'Completed this week', v: '26', d: '+30%', icon: 'check' }]], ['cal', { i: 4, t: 'Crews', r: 'Mon 14 – Fri 18', rows: [{ l: 'Install', b: [{ s: 2, w: 2, t: 'WO-4587 · Install', c: 'c1' }] }, { l: 'Fabrication', b: [{ s: 1, w: 3, t: 'WO-4589 · Countertops', c: 'c2' }] }, { l: 'Field', b: [{ s: 1, w: 1, t: 'Measure', c: 'c3' }, { s: 4, w: 2, t: 'WO-4591 · Inspection', c: 'c4' }] }] }], ['rows', { k: 'wl', t: 'Work orders', i: 5, rows: [{ k: 'w1', a: 'WO-4587 · Install', b: 'Crew A · Tue', p: 'In progress', c: 'blue' }, { k: 'w2', a: 'WO-4589 · Countertops', b: 'Fabrication · Mon', p: 'In progress', c: 'blue' }, { k: 'w3', a: 'WO-4591 · Inspection', b: 'Field · Thu', p: 'Scheduled', c: 'purple' }] }]]); } }],
    script: [async function (d, w) { await d.desktop.press('w2p'); d.desktop.pill('w2p', 'Completed', 'green'); d.desktop.num('done', '27'); d.desktop.num('prog', '17'); d.desktop.toast('Completed from the field app'); await w(1200); await d.desktop.press('r2'); d.desktop.addBlock('r2', { s: 3, w: 1, t: 'WO-4592 · Repair', c: 'c1' }); d.desktop.num('tod', '13'); d.desktop.num('wo', '43'); await w(1200); await d.desktop.press('tab1'); d.desktop.tab(1); }] });
  A.dept_fin = Object.assign({}, dep, { desktop: [{ nav: 2, kicker: 'Finance', title: 'Finance overview', tabs: ['Jan', 'Feb', 'Mar'], layout: 'g2', get body() { return B([['kpis', [{ k: 'rev', l: 'Revenue', v: '$1,256,430', d: '+12.4%', icon: 'dollar', spark: [4, 5, 5, 6, 7, 8, 9] }, { k: 'exp', l: 'Expenses', v: '$792,340', d: '+5.7%', dn: 1, icon: 'doc' }, { k: 'np', l: 'Net profit', v: '$464,090', d: '+26.8%', icon: 'chart' }, { k: 'pend', l: 'Pending invoices', v: '$138,750', d: '12 invoices', icon: 'doc' }]], ['bars', { k: 'fb', t: 'Revenue and expenses', r: 'Last 6 months', v: [820, 910, 880, 1010, 1120, 1256], v2: [610, 640, 650, 700, 760, 792], l: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'], i: 4 }], ['rows', { k: 'il', t: 'Recent invoices', i: 5, rows: [{ k: 'i1', a: 'INV-10459 · Alder Interiors', b: 'Due Jan 30', v: '$42,500', p: 'Paid', c: 'green' }, { k: 'i2', a: 'INV-10457 · Peak Development', b: 'Due today', v: '$65,000', p: 'Due today', c: 'yellow' }, { k: 'i3', a: 'INV-10456 · Westlake Properties', b: '9 days late', v: '$31,200', p: 'Overdue', c: 'red' }] }]]); } }],
    script: [async function (d, w) { await d.desktop.press('i2p'); d.desktop.pill('i2p', 'Paid', 'green'); d.desktop.num('pend', '$73,750'); d.desktop.toast('Payment received · $65,000'); await w(1200); await d.desktop.press('i3p'); d.desktop.pill('i3p', 'Reminder sent', 'blue'); await w(1200); await d.desktop.press('tab1'); d.desktop.tab(1); d.desktop.num('rev', '$1,318,940'); d.desktop.num('np', '$513,330'); d.desktop.grow('fb', 100); }] });
  A.dept_portal = Object.assign({}, dep, { desktop: [{ nav: 3, kicker: 'Client portal', title: 'Your project', tabs: ['Timeline', 'Documents', 'Payments'], layout: 'g2', get body() { return B([['ptl', { items: ['Inquiry received', 'Consultation', 'Design approved', 'Deposit', 'Production', 'Installation'], done: 3 }], ['needs', { t: 'Waiting on you', i: 2, items: [{ k: 'cp1', a: 'Approve final design', b: 'Kitchen layout · rev. 3' }, { k: 'cp2', a: 'Pay deposit', b: '$7,400', btn: 'Pay' }] }], ['pprog', { a: 'Project progress', b: 'Next: production', p: 48, i: 3 }]]); } }],
    script: [async function (d, w) { await d.desktop.press('cp1b'); d.desktop.btnDone('cp1b'); await w(600); await d.desktop.press('cp2b'); d.desktop.btnDone('cp2b', 'Paid'); d.desktop.tl(3); d.desktop.num('ppct', '64%'); d.desktop.bar('pbar', 64); d.desktop.toast('Thank you. Production starts Monday.'); await w(1200); await d.desktop.press('tab1'); d.desktop.tab(1); }] });
  A.dept_field = Object.assign({}, dep, { phone: [{ kicker: 'My jobs', title: 'Good morning, Chris', get body() { return B([['pprog', { a: 'Today', b: '3 jobs · 1 done', p: 33 }], ['pcard', { k: 'j1', icon: 'wrench', a: 'Install · Walsh Kitchen', b: '9:00 AM · 48 Glen Haven Dr', btn: 'Complete', i: 1 }], ['pcard', { k: 'j2', icon: 'camera', a: 'Photos and sign-off', b: '0 of 6 photos', btn: 'Add', i: 2 }], ['pcard', { icon: 'cal', a: 'Next: Park Kitchen', b: '1:30 PM · measure', i: 3 }]]); } }],
    script: [async function (d, w) { await d.phone.press('j2b'); d.phone.text('j2s', '6 of 6 photos · signed'); d.phone.btnDone('j2b', 'Done'); await w(700); await d.phone.press('j1b'); d.phone.btnDone('j1b', 'Done'); d.phone.num('ppct', '67%'); d.phone.bar('pbar', 67); d.phone.notify('Office updated', 'Walsh Kitchen marked complete'); }] });
  A.dept_mgmt = Object.assign({}, dep, { desktop: [{ nav: 5, kicker: 'Management', title: 'Business overview', tabs: ['30 days', '90 days', '12 months'], layout: 'g2', get body() { return B([['kpis', [{ k: 'sales', l: 'Total sales', v: '$1,248,320', d: '+18%', icon: 'dollar' }, { k: 'proj', l: 'Active projects', v: '24', d: '+33%', icon: 'folder' }, { k: 'inv', l: 'Invoices pending', v: '$186,500', icon: 'doc' }, { k: 'csat', l: 'On-time delivery', v: '92%', d: '+5 pts', icon: 'check' }]], ['line', { k: 'ml', t: 'Sales performance', r: '+18%', v: [40, 52, 48, 61, 66, 72, 70, 84, 90, 97, 104, 118], l: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], i: 4 }], ['donut', { k: 'dn', t: 'Revenue by area', center: '$1.25M', v: [42, 24, 18, 10, 6], l: ['Sales', 'Projects', 'Services', 'Products', 'Other'], i: 5 }]]); } }],
    script: [async function (d, w) { await d.desktop.press('tab1'); d.desktop.tab(1); d.desktop.num('sales', '$3,712,480'); d.desktop.num('proj', '31'); d.desktop.num('inv', '$242,300'); d.desktop.lineTo('ml', [60, 58, 70, 74, 69, 82, 88, 85, 96, 104, 112, 126]); d.desktop.num('dn', '$3.71M'); await w(1800); await d.desktop.press('tab2'); d.desktop.tab(2); d.desktop.num('sales', '$14,906,200'); d.desktop.num('dn', '$14.9M'); d.desktop.lineTo('ml', [70, 76, 74, 86, 92, 90, 104, 110, 116, 122, 130, 142]); }] });
})();
