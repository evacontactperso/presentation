/* Empowerment course: 20 bespoke designs.
   What this page must do: make people feel what it means to attend a free, underground, 3-month course in Afghanistan,
   show how it works, and turn that feeling into a sponsorship ($300 / $900 / $1,500).
   Every design below is its own idea, not a variation of a shared frame. Items marked (example) are placeholders. */

const CR = {
  e: 'Empowerment course', h: 'The Self-Empowerment Course',
  lead: 'In a country where education is banned and feminism is illegal, our free 3-month course offers women a lifeline.',
  q1: 'As a woman living in Afghanistan, I need to learn self-empowerment to help transform the current reality for my mother, sisters, and other women. Freedom feels like an unattainable dream, but I believe in working towards it.',
  q1by: 'F.B., age 25, Kabul',
  q2: 'Before this class, I was engulfed with self-doubt and unease, feeling my worth was nonexistent. Now, I stand with confidence, deeply appreciative of the person I’ve become.',
  q2by: 'A student, Afghanistan',
  ban: 'Education is banned. Self-expression is forbidden. Feminism is illegal.',
  risk: 'Students risk their lives to attend our underground online sessions.',
  reach: 'Our course reaches students aged 15 to 40 across Afghanistan.',
  out: ['Women’s studies', 'Self-expression', 'Self-compassion', 'Confidence', 'Optimism'],
  tiers: [['$300', 'One trimester', 'Full scholarship for 1 trimester'], ['$900', 'One year', 'Full scholarship for one year'], ['$1,500', 'One year and care', 'Full scholarship for one year, plus food and medical funds']],
  facts: [['3', 'months'], ['3×', 'a week'], ['15–40', 'years old'], ['$0', 'for students']],
  vol: [['Make a tangible impact', 'Your knowledge directly influences the lives of women striving for education.'], ['Engage in meaningful work', 'Facilitate workshops and lectures with real insight and inspiration.'], ['Grow and learn', 'Share your expertise and gain new perspectives from our students.']]
};
const crBtn = (t, c = 'primary') => gbtn(t, c);
const crTiers = (cls = '') => `<div class="cr-tiers ${cls}">${CR.tiers.map((t, i) => `<a class="cr-tier${i === 1 ? ' on' : ''}" href="${DONATE}"><b>${t[0]}</b><span>${t[1]}</span></a>`).join('')}</div>`;
const crTri = (i, cls = '') => `<span class="cr-tri ${cls}">${pf(['rum', 'pic1', 'p3'][i], 'rect')}</span>`;
const crPage = (n, html) => `<div class="site cw1 pg sxp cr cr${n}">${html}</div>`;

const COURSE = [
  /* 1 · Candlelight: a dark photo and the quote, sponsorship as a short list */
  ['Candlelight', () => `<section class="c1"><div class="c1-ph">${pfFill('rum')}<span class="chip-badge">3 months · free</span></div><div class="c1-b"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><blockquote>“${E(CR.q1)}”</blockquote><cite>${CR.q1by}</cite><div class="c1-list">${CR.tiers.map(t => `<a href="${DONATE}"><b>${t[0]}</b><span>${t[2]}</span><i>→</i></a>`).join('')}</div></div></section>`],

  /* 2 · Poster: giant numbers, three faces, one ask */
  ['Poster numbers', () => `<section class="c2"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><div class="c2-n">${CR.facts.map(f => `<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join('')}</div><div class="c2-tri">${crTri(0)}${crTri(1)}${crTri(2)}</div><div class="c2-ask"><p>${CR.lead}</p>${crBtn('Sponsor a student')}</div></section>`],

  /* 3 · Why she attends: portrait with the five outcomes around it */
  ['Why she attends', () => `<section class="c3"><div class="c3-l"><div class="c3-ph">${pf('rum', 'arch')}${CR.out.map((o, i) => `<span class="tg t${i}">${o}</span>`).join('')}</div></div><div class="c3-r"><span class="qm">“</span><blockquote>${E(CR.q1)}</blockquote><cite>${CR.q1by}</cite><p class="c3-ban">${CR.ban}</p>${crBtn('Sponsor a student')}</div></section>`],

  /* 4 · Staircase: the three sponsorships as three steps */
  ['Sponsor staircase', () => `<section class="c4"><div class="c4-t"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><p class="lead">${CR.lead}</p><blockquote>“${E(CR.q2)}”<cite>${CR.q2by}</cite></blockquote></div><div class="c4-s">${CR.tiers.map((t, i) => `<a class="st st${i}" href="${DONATE}"><small>${t[1]}</small><b>${t[0]}</b><span>${t[2]}</span></a>`).join('')}</div></section>`],

  /* 5 · Student pass: the course as a ticket you can fund */
  ['Student pass', () => `<section class="c5"><div class="tk"><div class="tk-a">${pfFill('rum')}<span>STUDENT PASS</span></div><div class="tk-b"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><ul>${CR.facts.map(f => `<li><b>${f[0]}</b> ${f[1]}</li>`).join('')}</ul><p class="tk-q">“${E(CR.q1.slice(0, 120))}…”</p></div><div class="tk-c"><small>Fund this seat</small>${CR.tiers.map((t, i) => `<a class="${i === 1 ? 'on' : ''}" href="${DONATE}"><b>${t[0]}</b><span>${t[1]}</span></a>`).join('')}<i class="bar"></i></div></div></section>`],

  /* 6 · Seats: every circle is a student seat */
  ['Seats to fill', () => `<section class="c6"><div class="c6-t"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><p class="lead">${CR.risk} Each circle below is one seat in the course.</p>${crBtn('Fund a seat')}<small>Example progress: 22 of 36 seats funded</small></div><div class="c6-g">${Array.from({ length: 36 }, (_, i) => `<span class="${i < 22 ? 'on' : ''}"></span>`).join('')}</div><div class="c6-k">${CR.tiers.map(t => `<a href="${DONATE}"><b>${t[0]}</b><span>${t[1]}</span></a>`).join('')}</div></section>`],

  /* 7 · Twelve weeks: the shape of the course */
  ['Twelve weeks', () => `<section class="c7"><div class="c7-h"><p class="eyebrow">${CR.e}</p><h2>Twelve weeks that change a life.</h2></div><div class="c7-w">${Array.from({ length: 12 }, (_, i) => `<span class="${i < 4 ? 'a' : i < 8 ? 'b' : 'c'}"><i>${i + 1}</i></span>`).join('')}</div><div class="c7-p"><div><b>Weeks 1–4</b>Find your voice (example)</div><div><b>Weeks 5–8</b>Know your rights (example)</div><div><b>Weeks 9–12</b>Lead and share (example)</div></div><div class="c7-f"><blockquote>“${E(CR.q2)}”<cite>${CR.q2by}</cite></blockquote><div>${crTiers('col')}</div></div></section>`],

  /* 8 · Letter: a student writes to you */
  ['A letter from Kabul', () => `<section class="c8"><div class="c8lt"><span class="c8po">${pf('pic1', 'rect11')}</span><p class="c8dr">Dear supporter,</p><p>${E(CR.q1)}</p><p>${CR.risk}</p><p class="c8sg">${CR.q1by}</p></div><div class="c8rp"><p class="eyebrow">Write back</p><h2>Answer her with a gift.</h2><p>${CR.lead}</p>${CR.tiers.map(t => `<a href="${DONATE}"><b>${t[0]}</b><span>${t[2]}</span></a>`).join('')}</div></section>`],

  /* 9 · Triptych: three women, three words */
  ['Three women, three words', () => `<section class="c9"><div class="c9-h"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2></div><div class="c9-p">${[['Voice', 'Self-expression that is allowed nowhere else.'], ['Worth', 'Self-compassion and confidence, week after week.'], ['Hope', 'Optimism to carry back to mothers and sisters.']].map((x, i) => `<div>${crTri(i, 'tall')}<div class="cap"><b>${x[0]}</b><span>${x[1]}</span></div></div>`).join('')}</div><div class="c9-b"><p>${CR.ban}</p>${crTiers()}</div></section>`],

  /* 10 · Outcome wheel */
  ['What changes', () => `<section class="c10"><div class="c10-t"><p class="eyebrow">${CR.e}</p><h2>Five things the course gives back.</h2><p class="lead">${CR.reach} It is free, through Café de la Culture.</p>${crBtn('Sponsor a student')}</div><div class="c10-w"><span class="ring"></span><div class="core">${pf('pic1', 'circle')}</div>${CR.out.map((o, i) => `<span class="ow ow${i}"><i>${i + 1}</i>${o}</span>`).join('')}</div></section>`],

  /* 11 · Dark editorial */
  ['Dark editorial', () => `<section class="c11"><div class="c11-a"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2></div><div class="c11-b"><p class="dc">${CR.ban} ${CR.risk}</p><p>${CR.reach}</p><p>Offered free of charge through Café de la Culture, the course improves knowledge of women’s studies, self-expression, self-compassion, confidence and optimism.</p></div><blockquote class="c11-q">“${E(CR.q2)}”<cite>${CR.q2by}</cite></blockquote><div class="c11-t">${CR.tiers.map(t => `<a href="${DONATE}"><b>${t[0]}</b><span>${t[1]}</span></a>`).join('')}</div></section>`],

  /* 12 · Before and after */
  ['Before and after', () => `<section class="c12"><div class="c12-h"><p class="eyebrow">${CR.e}</p><h2>From self-doubt to inner peace.</h2></div><div class="c12-g"><div class="bf"><small>Before</small><p>Self-doubt</p><p>Unease</p><p>“My worth was nonexistent.”</p></div><span class="ar">→</span><div class="af"><small>After 3 months</small><p>Inner peace</p><p>Confidence</p><p>“I stand with confidence.”</p><span class="ph">${pf('rum', 'circle')}</span></div></div><div class="c12-b">${crTiers()}${crBtn('Sponsor a student')}</div></section>`],

  /* 13 · Three tiers with photo headers */
  ['Tiers with portraits', () => `<section class="c13"><div class="c13-h"><p class="eyebrow">${CR.e}</p><h2>Sponsor a student.</h2><p class="lead">${CR.lead}</p></div><div class="c13-g">${CR.tiers.map((t, i) => `<div class="cd cd${i}">${pf(['rum', 'pic1', 'p3'][i], 'rect43')}${i === 1 ? '<span class="flag">Most chosen (example)</span>' : ''}<div><small>${t[1]}</small><b>${t[0]}</b><p>${t[2]}</p>${crBtn('Choose ' + t[0], i === 1 ? 'primary' : 'ghost')}</div></div>`).join('')}</div></section>`],

  /* 14 · Bento */
  ['Bento of the course', () => `<section class="c14"><div class="c14-h"><h2>${CR.h}</h2><p class="lead">${CR.lead}</p></div><div class="c14-g"><div class="bx ph tall">${pfFill('rum')}</div><div class="bx st">${'<b>3</b><span>months</span>'}</div><div class="bx q">“${E(CR.q1.slice(0, 150))}…”<cite>${CR.q1by}</cite></div><div class="bx st dk"><b>3×</b><span>a week</span></div><div class="bx ph wide">${pfFill('head3')}</div><div class="bx tr">${CR.tiers.map(t => `<a href="${DONATE}"><b>${t[0]}</b><span>${t[1]}</span></a>`).join('')}</div><div class="bx vol"><b>Teach a session</b><span>Volunteer facilitators wanted.</span></div></div></section>`],

  /* 15 · Chapters */
  ['Four chapters', () => `<section class="c15"><div class="c15-h"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2></div>${[['The ban', CR.ban, 'p3'], ['The course', CR.risk + ' ' + CR.reach, 'head3'], ['The change', CR.q2, 'rum'], ['Your part', 'Sponsor a student for one trimester, a year, or a year with food and medical care.', 'pic1']].map((c, i) => `<div class="ch ${i % 2 ? 'r' : ''}">${pf(c[2], 'rect43')}<div><i>${String(i + 1).padStart(2, '0')}</i><h3>${c[0]}</h3><p>${E(c[1])}</p>${i === 3 ? crTiers() : ''}</div></div>`).join('')}</section>`],

  /* 16 · Postcard from Kabul */
  ['Postcard', () => `<section class="c16"><div class="pc"><div class="front">${pfFill('pic1')}</div><div class="back"><div class="msg"><p>“${E(CR.q1)}”</p><cite>${CR.q1by}</cite></div><div class="adr"><span class="stamp"><b>KABUL</b><i>AFGHANISTAN</i></span><p>To: you</p><p class="ln"></p><p class="ln"></p>${crBtn('Write back with a gift')}</div></div></div><div class="c16-t">${crTiers()}</div></section>`],

  /* 17 · Thermometer */
  ['Thermometer', () => `<section class="c17"><div class="th"><div class="tube"><i style="height:64%"></i>${[['$1,500', 'Year and care', 88], ['$900', 'One year', 58], ['$300', 'One trimester', 24]].map(x => `<u style="bottom:${x[2]}%"><b>${x[0]}</b><em>${x[1]}</em></u>`).join('')}</div></div><div class="c17-b"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2><p class="lead">${CR.lead}</p><blockquote>“${E(CR.q2)}”<cite>${CR.q2by}</cite></blockquote>${crBtn('Sponsor a student')}<small>Example progress, shown for the design</small></div><div class="c17-p">${pf('rum', 'circle')}</div></section>`],

  /* 18 · Sticky story */
  ['Sticky story', () => `<section class="c18"><div class="c18-l"><div class="stick">${pfFill('rum')}<div class="cap"><p class="eyebrow">${CR.e}</p><h2>${CR.h}</h2></div></div></div><div class="c18-r">${[['Why it exists', CR.ban], ['How it works', 'Underground online sessions, three times a week, for three months. ' + CR.risk], ['Who joins', CR.reach], ['What it changes', CR.q2]].map((c, i) => `<div><i>${i + 1}</i><h3>${c[0]}</h3><p>${E(c[1])}</p></div>`).join('')}<div class="end"><h3>Sponsor a student</h3>${crTiers('col')}</div></div></section>`],

  /* 19 · Selector */
  ['Choose a sponsorship', () => `<section class="c19"><div class="c19-h"><p class="eyebrow">${CR.e}</p><h2>Sponsor a student.</h2></div><div class="sel"><div class="pills">${CR.tiers.map((t, i) => `<span class="${i === 1 ? 'on' : ''}">${t[1]}</span>`).join('')}</div><div class="det"><div><b class="amt">$900</b><p>${CR.tiers[1][2]}.</p><ul><li>Three live sessions every week</li><li>Mental health and community support</li><li>A learning path for a full year</li></ul>${crBtn('Sponsor for $900')}</div><div class="side">${pf('rum', 'ticket')}<span class="chip-badge">No gift is too small</span></div></div></div></section>`],

  /* 20 · Two doors */
  ['Two doors', () => `<section class="c20"><div class="d1">${pfFill('p3')}<div class="in"><p class="eyebrow">Give</p><h2>Sponsor a student</h2><p>${CR.lead}</p>${crTiers('col')}</div></div><span class="or">or</span><div class="d2"><div class="in"><p class="eyebrow">Teach</p><h2>Facilitate a session</h2>${CR.vol.map(v => `<div><b>${v[0]}</b><span>${v[1]}</span></div>`).join('')}${crBtn('Contact us', 'ghost')}</div></div></section>`]
];

const BESPOKE = {
  course: { names: COURSE.map(c => c[0]), f: L => crPage(L, COURSE[L - 1][1]()) }
};
