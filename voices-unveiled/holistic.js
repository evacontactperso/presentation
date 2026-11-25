/* Holistic and integrative education: 20 bespoke designs.
   What this page must do: show that the programme is more than lessons: healing first, then learning, then community,
   so a woman can thrive. Reader should feel safety, range of subjects, and the human result (Viana's puzzle piece).
   Subjects and the quote are real. Timetable slots, levels and the volunteer roles are examples, marked (example). */

const HO = {
  e: 'Holistic and integrative education', h: 'Healing, learning and community.',
  lead: 'Every woman and girl in Afghanistan deserves not just education, but the emotional strength, healing and community support to truly thrive.',
  quote: 'I felt like I was a lost puzzle piece, and this course helped me find where I belong.', by: 'Viana, age 18',
  P: [
    ['Mental health support', 'A safe space to share thoughts and experiences without fear of judgment, for women facing isolation, violence and trauma.', 'Heal'],
    ['Academic support', 'We help students break through barriers, set clear goals and connect with broader educational pathways.', 'Learn'],
    ['Elective courses', 'Taught by volunteer instructors from around the world, to develop skills and inspire creativity.', 'Learn'],
    ['Functional skills', 'English (levels 1–3), data analytics and computer programming.', 'Grow'],
    ['Humanities', 'Philosophy and physics, creative writing, The Life of Ideas, art-making.', 'Grow'],
    ['Wellness', 'Meditation and stress management, with tools for a personal safe space.', 'Heal']
  ],
  subj: { 'Functional skills': ['English, levels 1–3', 'Data analytics', 'Computer programming'], 'Humanities': ['Philosophy', 'Physics', 'Creative writing', 'The Life of Ideas', 'Art-making'], 'Wellness': ['Meditation', 'Stress management', 'A personal safe space'] },
  roles: [['Teach an elective', 'Share a subject you love with students in Afghanistan.'], ['Mentor a student', 'Help someone set clear goals and find her next step.'], ['Lead a wellness circle', 'Offer meditation or stress-management tools.']]
};
const hoBtn = (t = 'Become a volunteer', c = 'primary') => `<a class="btn ${c}" href="#" onclick="return false">${E(t)}</a>`;
const hoNo = i => String(i + 1).padStart(2, '0');
const hoPage = (n, html) => `<div class="site cw1 pg sxp cr ho ho${n}">${html}</div>`;

const HOLISTIC = [
  /* 1 · Puzzle */
  ['Puzzle pieces', () => `<section class="h1"><div class="h1-l"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2><blockquote>“${HO.quote}”</blockquote><cite>${HO.by}</cite></div><div class="h1-g">${HO.P.map((p, i) => `<div class="pz pz${i}"><i>${hoNo(i)}</i><b>${p[0]}</b><span>${p[2]}</span></div>`).join('')}</div></section>`],

  /* 2 · A week of learning */
  ['A week at school', () => `<section class="h2"><div class="h2-h"><div><p class="eyebrow">${HO.e}</p><h2>A week that holds the whole woman.</h2></div><p class="lead">${HO.lead}</p></div><div class="h2-t"><div class="hd"></div>${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => `<div class="hd">${d}</div>`).join('')}${[['Morning', ['Wellness', 'English', 'Philosophy', 'Data analytics', 'Art-making']], ['Midday', ['English', 'Academic support', 'Creative writing', 'Programming', 'The Life of Ideas']], ['Evening', ['Circle', 'Physics', 'Elective', 'Circle', 'Open space']]].map(r => `<div class="rw">${r[0]}</div>${r[1].map(x => `<div class="sl ${/Circle|Wellness|Open/.test(x) ? 'heal' : /English|Data|Programming/.test(x) ? 'skill' : ''}">${x}</div>`).join('')}`).join('')}</div><p class="h2-n">Schedule shown as an example.</p></section>`],

  /* 3 · Three layers */
  ['Heal, learn, thrive', () => `<section class="h3"><div class="h3-h"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2></div><div class="h3-s"><div class="l l0"><b>Thrive</b><p>${HO.P[3][0]} · ${HO.P[4][0]} · ${HO.P[2][0]}</p></div><div class="l l1"><b>Learn</b><p>${HO.P[1][0]} · English, data, programming · philosophy, physics, writing</p></div><div class="l l2"><b>Heal</b><p>${HO.P[0][0]} · ${HO.P[5][0]}: a safe space first.</p></div></div><p class="h3-q">“${HO.quote}” <cite>${HO.by}</cite></p></section>`],

  /* 4 · Catalogue */
  ['Course catalogue', () => `<section class="h4"><div class="h4-l"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2><p class="lead">${HO.lead}</p>${hoBtn()}</div><div class="h4-c">${HO.P.map((p, i) => `<div class="r ${i === 0 ? 'on' : ''}"><i>${hoNo(i)}</i><div><b>${p[0]}</b><p>${p[1]}</p></div><em>${p[2]}</em></div>`).join('')}</div></section>`],

  /* 5 · Tabs of subjects */
  ['Subject tabs', () => `<section class="h5"><div class="h5-h"><p class="eyebrow">${HO.e}</p><h2>What students can learn.</h2></div><div class="h5-b"><div class="tabs">${Object.keys(HO.subj).map((k, i) => `<span class="${i === 1 ? 'on' : ''}">${k}</span>`).join('')}</div><div class="pn"><div class="ls">${HO.subj['Humanities'].map(s => `<b>${s}</b>`).join('')}</div><div class="ph">${pfFill('pic1')}</div></div></div></section>`],

  /* 6 · Safe space */
  ['A safe space', () => `<section class="h6"><div class="h6-p">${pfFill('rum')}</div><div class="h6-b"><p class="eyebrow">Trauma-informed</p><h2>A place to be heard, without fear of judgment.</h2><p class="lead">${HO.P[0][1]}</p><div class="h6-k">${['Listen first', 'Go at your pace', 'Your story stays yours'].map((t, i) => `<div><i>${i + 1}</i>${t} <em>(example)</em></div>`).join('')}</div></div></section>`],

  /* 7 · Path */
  ['Winding path', () => `<section class="h7"><div class="h7-h"><p class="eyebrow">${HO.e}</p><h2>From first breath to first class to first circle.</h2></div><div class="h7-p">${[['Heal', HO.P[0], 'rum'], ['Learn', HO.P[1], 'pic1'], ['Belong', ['Community building', 'A global circle of women, inside and outside Afghanistan, who stand with each other.'], 'p3']].map((s, i) => `<div class="st st${i}">${pf(s[2], 'circle')}<i>${i + 1}</i><b>${s[0]}</b><p>${s[1][1]}</p></div>`).join('')}</div></section>`],

  /* 8 · Typographic wall */
  ['Subject wall', () => `<section class="h8"><p class="eyebrow">${HO.e}</p><div class="h8-w">${[['Philosophy', 3], ['English', 2], ['Meditation', 2], ['Physics', 1], ['Programming', 3], ['Art-making', 2], ['Data analytics', 1], ['Creative writing', 3], ['Stress management', 1], ['The Life of Ideas', 2]].map((w, i) => `<span class="w w${w[1]} k${i % 4}">${w[0]}</span>`).join('')}</div><div class="h8-f"><p>${HO.lead}</p>${hoBtn()}</div></section>`],

  /* 9 · Split with numbered list */
  ['Photo and list', () => `<section class="h9"><div class="h9-p">${pfFill('pic1')}<span class="chip-badge">Trauma-informed</span></div><div class="h9-b"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2>${HO.P.map((p, i) => `<div class="it"><i>${hoNo(i)}</i><div><b>${p[0]}</b><p>${p[1]}</p></div></div>`).join('')}</div></section>`],

  /* 10 · Bento */
  ['Bento', () => `<section class="h10"><div class="h10-g"><div class="bx tt"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2></div><div class="bx ph">${pfFill('rum')}</div><div class="bx a"><b>Mental health support</b><p>A safe space, without judgment.</p></div><div class="bx a dk"><b>English 1–3</b><p>Three levels of language.</p></div><div class="bx q">“${HO.quote}”<cite>${HO.by}</cite></div><div class="bx a"><b>Philosophy and physics</b><p>Big questions, open minds.</p></div><div class="bx ph w">${pfFill('p3')}</div><div class="bx a ac"><b>Meditation</b><p>Tools for a personal safe space.</p></div></div></section>`],

  /* 11 · Quote hero */
  ['Viana speaks', () => `<section class="h11"><div class="h11-t"><span class="pc">${pf('pic1', 'circle')}</span><blockquote>“${HO.quote}”</blockquote><cite>${HO.by}</cite></div><div class="h11-c"><p class="eyebrow">${HO.e}</p>${HO.P.map(p => `<span>${p[0]}</span>`).join('')}</div></section>`],

  /* 12 · Skills ladder */
  ['Skills ladder', () => `<section class="h12"><div class="h12-l"><p class="eyebrow">Functional skills</p><h2>Languages and code, step by step.</h2><p class="lead">${HO.P[3][1]}</p>${hoBtn()}</div><div class="h12-s">${[['Programming', 'Computer programming', 3], ['Data', 'Data analytics', 2], ['English 3', 'Advanced', 3], ['English 2', 'Intermediate', 2], ['English 1', 'Beginner', 1]].map((s, i) => `<div class="s s${s[2]}"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></section>`],

  /* 13 · Volunteer call */
  ['Teach with us', () => `<section class="h13"><div class="h13-l"><p class="eyebrow">Volunteer instructors</p><h2>Elective courses, taught by the world.</h2><p class="lead">${HO.P[2][1]}</p>${hoBtn()}</div><div class="h13-r">${HO.roles.map((r, i) => `<div class="ro"><i>${i + 1}</i><div><b>${r[0]}</b><p>${r[1]} <em>(example)</em></p></div></div>`).join('')}<div class="pt">${pf('pic1', 'circle')}${pf('rum', 'circle')}${pf('p3', 'circle')}</div></div></section>`],

  /* 14 · Student day */
  ['A day in her life', () => `<section class="h14"><div class="h14-h"><p class="eyebrow">${HO.e}</p><h2>One day, many ways to grow.</h2></div><div class="h14-t">${[['8:00', 'Wellness', 'Meditation to start calm'], ['10:00', 'English', 'Level 2 conversation'], ['13:00', 'Philosophy', 'The Life of Ideas'], ['16:00', 'Art-making', 'Make something of your own'], ['19:00', 'Circle', 'Share with other women']].map((e, i) => `<div class="ev"><time>${e[0]}</time><i></i><div><b>${e[1]}</b><span>${e[2]}</span></div></div>`).join('')}</div><p class="h14-n">Day shown as an example.</p><div class="h14-p">${pf('rum', 'arch')}</div></section>`],

  /* 15 · Lost piece found */
  ['Lost piece, found', () => `<section class="h15"><div class="h15-l"><p class="eyebrow">${HO.e}</p><h2>Finding where you belong.</h2><blockquote>“${HO.quote}”</blockquote><cite>${HO.by}</cite></div><div class="h15-r"><div class="fr"><span class="p a">Heal</span><span class="p b">Learn</span><span class="p c">Create</span><span class="p d">Grow</span><span class="p e">${pf('pic1', 'circle')}<small>Viana</small></span><span class="p f">Belong</span></div></div></section>`],

  /* 16 · Photo mosaic with pillars */
  ['Photo pillars', () => `<section class="h16"><div class="h16-h"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2></div><div class="h16-g">${[['Heal', 'Mental health support', 'rum'], ['Learn', 'Academic support', 'pic1'], ['Create', 'Elective courses', 'p3'], ['Grow', 'Functional skills', 'head3']].map((c, i) => `<div class="cl cl${i}">${pfFill(c[2])}<div><small>${c[0]}</small><b>${c[1]}</b></div></div>`).join('')}</div></section>`],

  /* 17 · Rings of care */
  ['Rings of care', () => `<section class="h17"><div class="h17-l"><p class="eyebrow">${HO.e}</p><h2>Surrounded by care.</h2><p class="lead">${HO.lead}</p>${hoBtn()}</div><div class="h17-r"><div class="rg r3"><span>Community</span></div><div class="rg r2"><span>Learning</span></div><div class="rg r1"><span>Healing</span></div><div class="ct">${pf('pic1', 'circle')}</div></div></section>`],

  /* 18 · Accordion */
  ['Open accordion', () => `<section class="h18"><div class="h18-l"><p class="eyebrow">${HO.e}</p><h2>${HO.h}</h2><p class="lead">${HO.lead}</p></div><div class="h18-a">${HO.P.map((p, i) => `<div class="ac ${i === 0 ? 'on' : ''}"><div class="hd"><i>${hoNo(i)}</i><b>${p[0]}</b><u>${i === 0 ? '−' : '+'}</u></div>${i === 0 ? `<p>${p[1]}</p>` : ''}</div>`).join('')}</div></section>`],

  /* 19 · Two worlds side by side */
  ['Inside and outside', () => `<section class="h19"><div class="h19-l"><p class="eyebrow">Wellness</p><h2>Meditation and stress management.</h2><p class="lead">${HO.P[5][1]}</p><div class="tg">${HO.subj['Wellness'].map(s => `<span>${s}</span>`).join('')}</div></div><div class="h19-r"><p class="eyebrow">Humanities</p><h2>Ideas that open the mind.</h2><p class="lead">${HO.P[4][1]}</p><div class="tg">${HO.subj['Humanities'].map(s => `<span>${s}</span>`).join('')}</div></div></section>`],

  /* 20 · Closing invitation */
  ['Join us', () => `<section class="h20"><div class="h20-p">${pfFill('p3')}</div><div class="h20-b"><p class="eyebrow">${HO.e}</p><h2>Help a woman thrive.</h2><p class="lead">${HO.lead}</p><div class="h20-c">${['Mental health', 'Academic support', 'Electives', 'Skills', 'Humanities', 'Wellness'].map(c => `<span>${c}</span>`).join('')}</div>${hoBtn()}</div></section>`]
];

/* not registered: the user prefers the earlier layouts for this page
BESPOKE.holistic = { names: HOLISTIC.map(c => c[0]), f: L => hoPage(L, HOLISTIC[L - 1][1]()) }; */
