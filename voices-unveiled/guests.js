/* Guest speakers: 20 bespoke designs.
   What this page must do: show the calibre of the guests (two real speakers: Lyla June Johnson and Zainab Salbi),
   make a student feel what a live session is like, and invite new speakers to offer a session.
   Only the two speakers and their credentials are real; dates, topics, questions and extra names are examples,
   marked (example) or shown as empty "next guest" seats. */

const GS = {
  e: 'Distinguished guest speakers', h: 'Voices that open doors.',
  lead: 'Global leaders, entrepreneurs, practitioners, activists and artists share their journeys with our students.',
  who: ['Leaders', 'Entrepreneurs', 'Practitioners', 'Activists', 'Artists'],
  quote: ['I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them.', 'A guest speaker'],
  thanks: ['Even though you have not seen our faces, you are working very hard to amplify our voices.', 'K.N., age 20'],
  L: { n: 'Dr. Lyla June Johnson', f: 'Lyla June Johnson', r: 'Musician · Scholar · Community organizer', k: 'lyla', b: 'Indigenous musician, scholar, scientist, public speaker and community organizer of Diné (Navajo), Tsétsêhéstâhese (Cheyenne) and European lineages.', t: ['Diné (Navajo)', 'Tsétsêhéstâhese (Cheyenne)', 'European lineages', 'Musician', 'Scholar', 'Scientist'] },
  Z: { n: 'Zainab Salbi', f: 'Zainab Salbi', r: 'Founder · Author · Humanitarian', k: 'zainab', b: 'Founder of Women for Women International, co-founder of Daughters for Earth, best-selling author of Freedom Is an Inside Job and host of #MeToo, Now What?', t: ['Time100 Impact Award', 'People’s “25 Women Changing the World”', 'Women for Women International', 'Daughters for Earth', 'Freedom Is an Inside Job', '#MeToo, Now What?'] },
  steps: [['Invite', 'You tell us what you would like to share, in a few lines.'], ['Prepare', 'We match your topic to a class and help you shape the session.'], ['Speak live', 'You join an online class and speak with our students.'], ['Answer', 'Students ask questions; you leave them with new courage.']],
  qs: ['How did you find the courage to speak first?', 'What do you do on days when nothing works?', 'How can we keep creating when we are told to be silent?']
};
const gsBtn = (t, c = 'primary') => `<a class="btn ${c}" href="#" onclick="return false">${E(t)}</a>`;
const gsMono = (i, c = '') => `<span class="gs-mono ${c}">${['A', 'B', 'C', 'D'][i % 4]}</span>`;
const gsPage = (n, html) => `<div class="site cw1 pg sxp cr gs gs${n}">${html}</div>`;
const gsNext = (cls = '') => `<div class="gs-next ${cls}"><b>+</b><span>Your name here</span><small>Offer to speak</small></div>`;

const GUESTS = [
  /* 1 · Two halves: two full-height portraits, the headline sits in the seam */
  ['Two halves', () => `<section class="g1"><div class="h h0">${pfFill('lyla')}<div class="nm"><small>${GS.L.r}</small><b>${GS.L.n}</b></div></div><div class="seam"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2><p>${GS.lead}</p>${gsBtn('Offer to speak')}</div><div class="h h1">${pfFill('zainab')}<div class="nm"><small>${GS.Z.r}</small><b>${GS.Z.n}</b></div></div></section>`],

  /* 2 · Programme: an agenda of upcoming sessions */
  ['Programme', () => `<section class="g2"><div class="g2-h"><p class="eyebrow">${GS.e}</p><h2>The next sessions.</h2><p class="lead">${GS.lead}</p>${gsBtn('Offer to speak')}</div><div class="g2-l">${[['12', 'Nov', GS.Z, 'Freedom is an inside job', 'Live · 60 min'], ['26', 'Nov', GS.L, 'Songs, land and memory', 'Live · 60 min'], ['10', 'Dec', null, 'Your session could be here', 'Open seat'], ['17', 'Dec', null, 'Your session could be here', 'Open seat']].map((s, i) => `<div class="ev ${s[2] ? '' : 'open'}"><div class="dt"><b>${s[0]}</b><span>${s[1]}</span></div><div class="pp">${s[2] ? pf(s[2].k, 'circle') : `<span class="gs-mono">+</span>`}</div><div class="tx"><b>${s[2] ? s[2].n : 'Next guest'}</b><span>${s[3]} (example)</span></div><em>${s[4]}</em></div>`).join('')}</div></section>`],

  /* 3 · Cover: arches overlap giant type */
  ['Magazine cover', () => `<section class="g3"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2><div class="g3-a"><div class="a0">${pf('lyla', 'arch')}<span>${GS.L.n}</span></div><div class="a1">${pf('zainab', 'arch')}<span>${GS.Z.n}</span></div></div><p class="lead">${GS.lead}</p></section>`],

  /* 4 · Fanned cards */
  ['Fanned cards', () => `<section class="g4"><div class="g4-t"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2><p class="lead">${GS.lead}</p>${gsBtn('Offer to speak')}</div><div class="g4-c"><article class="c0">${pf('lyla', 'rect43')}<div><b>${GS.L.n}</b><small>${GS.L.r}</small><p>${GS.L.b}</p></div></article><article class="c1">${pf('zainab', 'rect43')}<div><b>${GS.Z.n}</b><small>${GS.Z.r}</small><p>${GS.Z.b}</p></div></article></div></section>`],

  /* 5 · Quote-led */
  ['A guest speaks', () => `<section class="g5"><span class="qm">“</span><blockquote>${E(GS.quote[0])}</blockquote><div class="by"><span class="fc">${pf('zainab', 'circle')}${pf('lyla', 'circle')}</span><cite>${GS.quote[1]}</cite></div><div class="g5-f"><div><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2></div>${gsBtn('Offer to speak')}</div></section>`],

  /* 6 · Spotlight: dark stage, a selector of speakers */
  ['Spotlight', () => `<section class="g6"><div class="g6-s"><span class="glow"></span><div class="ph">${pf('lyla', 'circle')}</div><div class="in"><p class="eyebrow">${GS.e}</p><h2>${GS.L.n}</h2><p class="rl">${GS.L.r}</p><p>${GS.L.b}</p></div></div><div class="g6-r"><span class="on">${pf('lyla', 'circle')}<b>${GS.L.f}</b></span><span>${pf('zainab', 'circle')}<b>${GS.Z.f}</b></span><span class="nx"><i>+</i><b>Next guest</b></span>${gsBtn('Offer to speak')}</div></section>`],

  /* 7 · Credentials: each speaker as a profile with badges */
  ['Credentials', () => `<section class="g7"><div class="g7-h"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2></div>${[GS.Z, GS.L].map((s, i) => `<article class="${i ? 'r' : ''}"><div class="ph">${pf(s.k, 'rect')}</div><div class="bd"><small>${s.r}</small><h3>${s.n}</h3><p>${s.b}</p><div class="tg">${s.t.map(t => `<span>${t}</span>`).join('')}</div></div></article>`).join('')}</section>`],

  /* 8 · Ask them anything: students' questions */
  ['Ask them anything', () => `<section class="g8"><div class="g8-l"><p class="eyebrow">${GS.e}</p><h2>Students ask. Guests answer.</h2><p class="lead">${GS.lead}</p>${gsBtn('Offer to speak')}</div><div class="g8-c">${GS.qs.map((q, i) => `<div class="q"><span class="av">${gsMono(i)}</span><p>${q} <em>(example)</em></p></div>`).join('')}<div class="a">${pf('zainab', 'circle')}<p>Freedom is something you build from the inside. We will start there together.<em> (example)</em></p></div></div></section>`],

  /* 9 · Typographic names with inline portraits */
  ['Names as headline', () => `<section class="g9"><p class="eyebrow">${GS.e}</p><h2><span>Lyla</span>${pf('lyla', 'squircle', 'in')}<span>June</span><br><span>Zainab</span>${pf('zainab', 'squircle', 'in')}<span>Salbi</span></h2><div class="g9-f"><p>${GS.lead}</p>${gsBtn('Offer to speak')}</div></section>`],

  /* 10 · Open call */
  ['Open call', () => `<section class="g10"><div class="g10-l"><p class="eyebrow">Open call</p><h2>Be the next voice.</h2><p class="lead">${GS.lead}</p><ul><li><b>Make a tangible impact</b>Your story reaches women who are denied school.</li><li><b>One hour is enough</b>Join a live online class from anywhere.</li><li><b>We help you prepare</b>A short briefing before you speak.</li></ul>${gsBtn('Offer to speak')}</div><div class="g10-r"><div class="s">${pf('lyla', 'rect')}<small>${GS.L.f}</small></div><div class="s">${pf('zainab', 'rect')}<small>${GS.Z.f}</small></div>${gsNext('big')}</div></section>`],

  /* 11 · Session anatomy */
  ['How a session works', () => `<section class="g11"><div class="g11-h"><p class="eyebrow">${GS.e}</p><h2>From your idea to a live class.</h2></div><div class="g11-s">${GS.steps.map((s, i) => `<div><i>${i + 1}</i><b>${s[0]}</b><p>${s[1]}</p></div>`).join('')}</div><div class="g11-f">${pf('zainab', 'circle')}${pf('lyla', 'circle')}<p>They did it. <b>Your session is next.</b></p>${gsBtn('Offer to speak')}</div></section>`],

  /* 12 · Dark editorial: one rail of tall portraits */
  ['Portrait rail', () => `<section class="g12"><div class="g12-h"><div><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2></div><p>${GS.lead}</p></div><div class="g12-r"><article>${pfFill('lyla')}<div><b>${GS.L.n}</b><small>${GS.L.r}</small></div></article><article>${pfFill('zainab')}<div><b>${GS.Z.n}</b><small>${GS.Z.r}</small></div></article><article class="nx"><span>+</span><div><b>Next guest</b><small>Could be you</small></div></article><article class="nx"><span>+</span><div><b>Next guest</b><small>Could be you</small></div></article></div></section>`],

  /* 13 · Five kinds of voices */
  ['Five kinds of voices', () => `<section class="g13"><div class="g13-h"><p class="eyebrow">${GS.e}</p><h2>Five kinds of voices, one classroom.</h2></div><div class="g13-g">${GS.who.map((w, i) => `<div class="k k${i}"><i>${String(i + 1).padStart(2, '0')}</i><b>${w}</b>${i === 1 ? `<span class="who">${pf('zainab', 'circle')}</span>` : ''}${i === 4 ? `<span class="who">${pf('lyla', 'circle')}</span>` : ''}</div>`).join('')}<div class="k cta">${gsBtn('Offer to speak')}</div></div></section>`],

  /* 14 · Bento */
  ['Bento of guests', () => `<section class="g14"><div class="g14-g"><div class="bx ph a">${pfFill('lyla')}<span class="nm">${GS.L.n}</span></div><div class="bx tt"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2></div><div class="bx ph b">${pfFill('zainab')}<span class="nm">${GS.Z.n}</span></div><div class="bx ld">${GS.lead}</div><div class="bx tg"><b>Time100</b><span>Impact Award honoree</span></div><div class="bx tg dk"><b>Free</b><span>for every student</span></div><div class="bx cta"><b>Share your story</b>${gsBtn('Offer to speak', 'ghost')}</div></div></section>`],

  /* 15 · One speaker in depth */
  ['In depth', () => `<section class="g15"><div class="g15-p">${pfFill('zainab')}</div><div class="g15-b"><p class="eyebrow">${GS.e}</p><h2>${GS.Z.n}</h2><p class="rl">${GS.Z.r}</p><p class="lead">${GS.Z.b}</p><div class="tg">${GS.Z.t.slice(0, 4).map(t => `<span>${t}</span>`).join('')}</div><div class="sw"><span class="on">${pf('zainab', 'circle')}</span><span>${pf('lyla', 'circle')}</span><span class="nx">+</span><small>Meet the other guests</small></div></div></section>`],

  /* 16 · Event poster */
  ['Live poster', () => `<section class="g16"><div class="po"><div class="top"><span>LIVE</span><span>ONLINE</span><span>FREE</span></div><div class="mid"><div class="pp"><span>${pf('zainab', 'arch')}</span><span>${pf('lyla', 'arch')}</span></div><div class="tx"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2><p>${GS.lead}</p></div></div><div class="bt"><div><b>Every month</b><small>Dates shown as an example</small></div>${gsBtn('Offer to speak')}</div></div></section>`],

  /* 17 · Topics people teach */
  ['Topics', () => `<section class="g17"><div class="g17-h"><p class="eyebrow">${GS.e}</p><h2>What students hear about.</h2><p class="lead">${GS.lead}</p></div><div class="g17-t">${[['Freedom as an inside job', GS.Z], ['Songs, land and memory', GS.L], ['Telling a story that matters', null], ['How stress and trauma work', null], ['Knowing your rights', null], ['Starting a social enterprise', null], ['Art as a quiet protest', null]].map((t, i) => `<span class="${t[1] ? 'on' : ''}">${t[1] ? pf(t[1].k, 'circle') : ''}${t[0]}${t[1] ? '' : ' <em>(example)</em>'}</span>`).join('')}</div><div class="g17-f">${gsBtn('Offer to speak')}</div></section>`],

  /* 18 · Overlapping circles */
  ['Two circles', () => `<section class="g18"><div class="g18-c"><div class="c c0">${pf('lyla', 'circle')}</div><div class="c c1">${pf('zainab', 'circle')}</div><div class="mid"><b>One classroom</b></div></div><div class="g18-t"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2><p class="lead">${GS.lead}</p><div class="nm"><span><b>${GS.L.n}</b>${GS.L.r}</span><span><b>${GS.Z.n}</b>${GS.Z.r}</span></div>${gsBtn('Offer to speak')}</div></section>`],

  /* 19 · Bios side by side with divider */
  ['Side by side', () => `<section class="g19"><div class="g19-h"><p class="eyebrow">${GS.e}</p><h2>${GS.h}</h2></div><div class="g19-c">${[GS.L, GS.Z].map(s => `<article>${pf(s.k, 'rect43')}<h3>${s.n}</h3><small>${s.r}</small><p>${s.b}</p></article>`).join('')}</div><div class="g19-f"><p>${GS.lead}</p>${gsBtn('Offer to speak')}</div></section>`],

  /* 20 · Thank you: students to speakers */
  ['A thank you', () => `<section class="g20"><div class="g20-l"><p class="eyebrow">From our students</p><blockquote>“${E(GS.thanks[0])}”</blockquote><cite>${GS.thanks[1]}</cite></div><div class="g20-r"><div class="ps">${pf('lyla', 'rect11')}${pf('zainab', 'rect11')}</div><h2>${GS.h}</h2><p class="lead">${GS.lead}</p>${gsBtn('Offer to speak')}</div></section>`]
];

BESPOKE.guests = { names: GUESTS.map(c => c[0]), f: L => gsPage(L, GUESTS[L - 1][1]()) };
