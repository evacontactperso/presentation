/* Extra designs (numbers 21+) for Student testimonials, Supporter testimonials, Donate now and Contact.
   Patterns borrowed from current best-practice sites: single-focus quote carousels, quote walls, rating summaries (Google-review style),
   donation card with one-time/monthly toggle and "what your gift does", sticky donation panel beside a story, split contact with a
   full-height photo, form card with a dark info panel, "how can we help" tiles.
   Quotes are the real ones from the site. Progress figures, FAQ answers and similar fillers are marked (example). */

const XQ = PG_M.reviews.items, XS = PG_M.supporters.items, XD = PG_M.donate, XC = PG_M.contact;
const xStars = '<span class="stars">★★★★★</span>';
const xIni = n => n.replace(/[^A-Za-z. ]/g, '').split(/[ .]+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
const xGive = (t = 'Give now', c = 'primary') => `<a class="btn ${c}" href="${DONATE}" target="_blank" rel="noopener">${E(t)}</a>`;
const xAmt = [['$25', 'Internet access for one student for one semester'], ['$50', 'Course materials and internet for one student'], ['$100', 'Emergency intervention'], ['$300', 'One student’s trimester of transformation'], ['$600', 'One trimester for two students'], ['$1,000', 'One year of education, coaching, counselling and support']];
const xForm = (cls = '') => `<form class="xform ${cls}" onsubmit="return false"><label>Your name<input type="text" placeholder="Jane Doe"></label><label>Email<input type="text" placeholder="you@example.com"></label><label>How can we help?<textarea rows="4" placeholder="Tell us a little about your idea or question"></textarea></label><button class="btn primary">Send message</button></form>`;

EXTRA.reviews = {
  /* 21 · single-focus carousel */
  21: ['One voice at a time', () => `<section class="rv21"><p class="eyebrow">Student testimonials</p><span class="qm">“</span><blockquote>${E(XQ[1].p)}</blockquote><cite>${XQ[1].t}, ${XQ[1].s}</cite><div class="nav"><button>←</button><div class="dots">${XQ.map((q, i) => `<i class="${i === 1 ? 'on' : ''}"></i>`).join('')}</div><button>→</button></div><div class="th">${XQ.map((q, i) => `<span class="${i === 1 ? 'on' : ''}">${q.t}</span>`).join('')}</div></section>`],
  /* 22 · quote wall */
  22: ['Quote wall', () => `<section class="rv22"><div class="hd"><p class="eyebrow">Student testimonials</p><h2>What students say.</h2></div><div class="wall">${XQ.map((q, i) => `<figure class="c c${i}"><blockquote>${E(q.p)}</blockquote><figcaption><b>${q.t}</b> ${q.s}</figcaption></figure>`).join('')}</div></section>`],
  /* 23 · portrait with pull quote */
  23: ['Portrait and quote', () => `<section class="rv23"><div class="ph">${pfFill('rum')}</div><div class="bd"><p class="eyebrow">Student testimonials</p><blockquote>“${E(XQ[3].p)}”</blockquote><cite>${XQ[3].t}, ${XQ[3].s}</cite><div class="more">${[0, 4, 6].map(i => `<div><b>${XQ[i].t}</b><p>${E(XQ[i].p)}</p></div>`).join('')}</div></div></section>`],
  /* 24 · giant initials cards */
  24: ['Initials cards', () => `<section class="rv24"><div class="hd"><p class="eyebrow">Student testimonials</p><h2>Eight voices, eight names we keep safe.</h2></div><div class="g">${XQ.map((q, i) => `<article class="k k${i % 4}"><i>${q.t.replace(/\./g, '')}</i><p>${E(q.p)}</p><small>${q.s}</small></article>`).join('')}</div></section>`],
  /* 25 · a chorus: one flowing text */
  25: ['A chorus', () => `<section class="rv25"><div class="l"><p class="eyebrow">Student testimonials</p><h2>A chorus of students.</h2><p class="lead">${PG_M.reviews.lead}</p></div><p class="ch">${XQ.map((q, i) => `<span class="${i % 3 === 0 ? 'hi' : ''}">“${E(q.p)}” <sup>${q.t}</sup></span>`).join(' ')}</p></section>`],
  /* 26 · dark feature with side list */
  26: ['Feature and list', () => `<section class="rv26"><div class="f"><p class="eyebrow">In their words</p><blockquote>“${E(XQ[2].p)}”</blockquote><cite>${XQ[2].t}, ${XQ[2].s}</cite>${xGive('Donate now', 'primary')}</div><div class="ls">${XQ.filter((q, i) => i !== 2).map(q => `<div><i>${q.t}</i><p>${E(q.p)}</p></div>`).join('')}</div></section>`]
};

EXTRA.supporters = {
  /* 21 · rating hero (Google-review style) */
  21: ['Reviews summary', () => `<section class="sp21"><div class="sum"><p class="eyebrow">Supporter testimonials</p><h2>Why they give.</h2><p>Reviews from donors, partners and friends.</p>${xGive('Join them')}</div><div class="rv">${XS.slice(0, 4).map(r => `<article><div class="t"><span class="av">${xIni(r.t)}</span><div><b>${r.t}</b><small>${r.s}</small></div></div>${xStars}<p>${E(r.p)}</p></article>`).join('')}</div></section>`],
  /* 22 · one big trust quote */
  22: ['Where your money goes', () => `<section class="sp22"><div class="big"><span class="qm">“</span><blockquote>${E(XS[7].p)}</blockquote><cite>${XS[7].t} · ${XS[7].s}</cite></div><div class="row">${XS.slice(0, 3).map(r => `<article><p>${E(r.p)}</p><b>${r.t}</b><small>${r.s}</small></article>`).join('')}</div></section>`],
  /* 23 · card carousel */
  23: ['Card carousel', () => `<section class="sp23"><div class="hd"><div><p class="eyebrow">Supporter testimonials</p><h2>Why they give.</h2></div><div class="nv"><button>←</button><button>→</button></div></div><div class="rail">${XS.map((r, i) => `<article class="${i === 0 ? 'on' : ''}">${xStars}<p>${E(r.p)}</p><div class="t"><span class="av">${xIni(r.t)}</span><div><b>${r.t}</b><small>${r.s}</small></div></div></article>`).join('')}</div></section>`],
  /* 24 · dark split with scrolling list */
  24: ['Featured and names', () => `<section class="sp24"><div class="d"><p class="eyebrow">Supporter testimonials</p><blockquote>“${E(XS[5].p)}”</blockquote><cite>${XS[5].t} · ${XS[5].s}</cite>${xGive('Join them')}</div><div class="n">${XS.filter((r, i) => i !== 5).map(r => `<div><span class="av">${xIni(r.t)}</span><div><b>${r.t}</b><p>${E(r.p)}</p></div></div>`).join('')}</div></section>`],
  /* 25 · key phrases large */
  25: ['Key phrases', () => `<section class="sp25"><div class="hd"><p class="eyebrow">Supporter testimonials</p><h2>In a few words.</h2></div>${[['Hugely important', XS[0]], ['Heard and seen', XS[1]], ['Proud supporters', XS[2]], ['A vital life line', XS[6]]].map(([k, r], i) => `<div class="r ${i % 2 ? 'o' : ''}"><b>${k}</b><div><p>${E(r.p)}</p><small>${r.t} · ${r.s}</small></div></div>`).join('')}</section>`],
  /* 26 · masonry reviews */
  26: ['Review masonry', () => `<section class="sp26"><div class="hd"><p class="eyebrow">Supporter testimonials</p><h2>${PG_M.supporters.h}</h2><p class="lead">${PG_M.supporters.lead}</p></div><div class="ms">${XS.map((r, i) => `<article class="m${i % 3}"><div class="t"><span class="av">${xIni(r.t)}</span><div><b>${r.t}</b><small>${r.s}</small></div></div><p>${E(r.p)}</p></article>`).join('')}</div></section>`]
};

EXTRA.donate = {
  /* 21 · hero with floating donation card */
  21: ['Hero donation card', () => `<section class="dn21"><div class="ph">${pfFill('p3')}</div><div class="in"><div class="tx"><p class="eyebrow">Donate now</p><h2>${XD.h}</h2><p>We must raise $50,000 to keep our programs alive.</p><div class="pr"><i style="width:44%"></i></div><small>Example progress: $22,000 of $50,000</small></div><div class="cd"><div class="tg"><span class="on">One time</span><span>Monthly</span></div><div class="am">${['$25', '$50', '$100', '$300'].map((a, i) => `<span class="${i === 3 ? 'on' : ''}">${a}</span>`).join('')}</div><p class="ln"><b>$300</b> covers one student’s trimester of transformation.</p>${xGive('Give $300')}<small>100% secure · tax-deductible</small></div></div></section>`],
  /* 22 · what your gift does */
  22: ['What a gift does', () => `<section class="dn22"><div class="l"><p class="eyebrow">Donate now</p><h2>What your gift does.</h2><p class="lead">${XD.lead}</p>${xGive('Give now')}</div><div class="r">${xAmt.map((a, i) => `<div class="row ${i === 3 ? 'on' : ''}"><b>${a[0]}</b><span>${a[1]}</span><i>${i === 3 ? '●' : '○'}</i></div>`).join('')}</div></section>`],
  /* 23 · goal bar and amounts */
  23: ['Goal and amounts', () => `<section class="dn23"><div class="hd"><p class="eyebrow">Donate now</p><h2>${XD.h}</h2></div><div class="gl"><div class="top"><b>$22,000</b><span>raised of $50,000 (example)</span></div><div class="pr"><i style="width:44%"></i><u style="left:25%">Programs</u><u style="left:60%">Courses</u><u style="left:100%">Goal</u></div></div><div class="ts">${xAmt.slice(2).map((a, i) => `<a href="${DONATE}" class="${i === 1 ? 'on' : ''}"><b>${a[0]}</b><span>${a[1]}</span></a>`).join('')}</div></section>`],
  /* 24 · story with sticky donation panel */
  24: ['Story and sticky panel', () => `<section class="dn24"><div class="st"><div class="ph">${pf('pic1', 'rect43')}</div><p class="eyebrow">Donate now</p><h2>${XD.h}</h2><p class="lead">${XD.lead}</p><blockquote>“I was able to ask the questions in my heart for the first time, without any fear.” <cite>D.Y., student</cite></blockquote><p class="lead">Every dollar goes to students: internet access, course materials, emergency help and a full year of education and counselling.</p></div><aside><b>Choose an amount</b>${xAmt.slice(0, 4).map((a, i) => `<div class="a ${i === 1 ? 'on' : ''}"><i>${a[0]}</i><span>${a[1]}</span></div>`).join('')}${xGive('Give now')}<small>100% secure · tax-deductible</small></aside></section>`],
  /* 25 · amount tiles */
  25: ['Amount tiles', () => `<section class="dn25"><div class="hd"><p class="eyebrow">Donate now</p><h2>Pick a gift. Change a life.</h2></div><div class="g">${xAmt.map((a, i) => `<a href="${DONATE}" class="t t${i}"><b>${a[0]}</b><span>${a[1]}</span></a>`).join('')}<a href="${DONATE}" class="t other"><b>Other</b><span>Choose your own amount</span></a></div><div class="tr">${['100% secure', 'Tax-deductible', '501(c)(3) US non-profit', '100% free for every student'].map(t => `<span>${t}</span>`).join('')}</div></section>`],
  /* 26 · centred checkout card */
  26: ['Checkout card', () => `<section class="dn26"><div class="cd"><p class="eyebrow">Donate now</p><h2>Choose hope.</h2><div class="tg"><span class="on">One time</span><span>Monthly</span></div><div class="am">${['$25', '$50', '$100', '$300', '$600', '$1,000'].map((a, i) => `<span class="${i === 3 ? 'on' : ''}">${a}</span>`).join('')}</div><div class="sm"><b>$300</b><span>Covers one student’s trimester of transformation.</span></div>${xGive('Give $300')}<small>100% secure · tax-deductible</small></div><div class="st">${PG_M.donate.foot.stats.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></section>`]
};

EXTRA.contact = {
  /* 21 · split with full-height photo */
  21: ['Photo and form', () => `<section class="ct21"><div class="ph">${pfFill('rum')}<div class="ov"><p class="eyebrow">Contact</p><h2>Get in touch.</h2><p>${XC.lead}</p><div class="li"><b>hello@voicesunveiled.org</b><span>270 North Ave., Suite 811, New Rochelle, NY 10801</span></div></div></div><div class="fm"><h3>Send us a message</h3>${xForm()}</div></section>`],
  /* 22 · form card and dark info panel */
  22: ['Form and info panel', () => `<section class="ct22"><div class="cd"><div class="fm"><p class="eyebrow">Contact</p><h2>Get in touch.</h2>${xForm()}</div><div class="in"><h3>Contact information</h3>${[['Email', 'hello@voicesunveiled.org'], ['Address', '270 North Ave., Suite 811, New Rochelle, NY 10801'], ['Follow us', 'Facebook · Instagram · LinkedIn']].map(r => `<div><small>${r[0]}</small><b>${r[1]}</b></div>`).join('')}<p class="re">We reply to every message.</p></div></div></section>`],
  /* 23 · how can we help tiles */
  23: ['How can we help', () => `<section class="ct23"><div class="hd"><p class="eyebrow">Contact</p><h2>How can we help?</h2><p class="lead">${XC.lead}</p></div><div class="g">${[['Email', 'hello@voicesunveiled.org'], ['Press and media', 'For interviews and images, write to our team.'], ['Partnerships', 'Schools, NGOs and companies: let’s build something together.'], ['Volunteering', 'Want to teach, speak or help? Tell us your skills.']].map((c, i) => `<a class="t ${i === 3 ? 'on' : ''}"><i>${i + 1}</i><b>${c[0]}</b><span>${c[1]}</span></a>`).join('')}</div><div class="fm">${xForm('wide')}</div></section>`],
  /* 24 · giant email */
  24: ['Big email', () => `<section class="ct24"><p class="eyebrow">Contact</p><h2>Say hello.</h2><a class="em">hello@voicesunveiled.org</a><div class="row"><div class="ps">${pf('pic1', 'circle')}${pf('p3', 'circle')}${pf('rum', 'circle')}</div><p>${XC.lead}</p></div><div class="ft"><div><small>Address</small>270 North Ave., Suite 811, New Rochelle, NY 10801</div><div><small>Follow us</small>Facebook · Instagram · LinkedIn</div><div><small>Press and media</small>Write to our team</div></div></section>`],
  /* 25 · map card */
  25: ['Map and form', () => `<section class="ct25"><div class="mp"><div class="mapg"></div><div class="mpin"><i></i><b>Voices Unveiled</b><span>270 North Ave., Suite 811<br>New Rochelle, NY 10801</span></div></div><div class="fm"><p class="eyebrow">Contact</p><h2>Visit or write.</h2>${xForm()}</div></section>`],
  /* 26 · centred welcome */
  26: ['Welcome card', () => `<section class="ct26"><div class="ar">${pf('pic1', 'arch')}</div><p class="eyebrow">Contact</p><h2>We read every message.</h2><p class="lead">${XC.lead}</p><div class="cd">${xForm()}</div><div class="ch">${['hello@voicesunveiled.org', 'Facebook', 'Instagram', 'LinkedIn'].map(c => `<span>${c}</span>`).join('')}</div></section>`],
  /* 27 · three contact cards over a wide form */
  27: ['Cards and wide form', () => `<section class="ct27"><div class="hd"><p class="eyebrow">Contact</p><h2>Get in touch.</h2></div><div class="g">${[['Write to us', 'hello@voicesunveiled.org'], ['Visit us', '270 North Ave., Suite 811, New Rochelle, NY 10801'], ['Follow us', 'Facebook · Instagram · LinkedIn']].map((c, i) => `<div class="c c${i}"><b>${c[0]}</b><span>${c[1]}</span></div>`).join('')}</div><div class="wf"><div class="ph">${pfFill('p3')}</div>${xForm()}</div></section>`],
  /* 28 · quick answers beside the form */
  28: ['Quick answers', () => `<section class="ct28"><div class="l"><p class="eyebrow">Before you write</p><h2>Maybe we already answered.</h2>${[['Can I donate by check?', 'Write to us and we will help.'], ['How do I volunteer?', 'Tell us your skills in the form.'], ['Can I invite a student to speak?', 'Yes, send us a few lines.']].map(q => `<details><summary>${q[0]}</summary><p>${q[1]} <em>(example)</em></p></details>`).join('')}</div><div class="fm"><h3>Still need us?</h3>${xForm()}</div></section>`]
};

/* the three "Meet our guests" designs (old part 5) added to Guest speakers as 21-23: the real site pages, scrolled to the guests section */
EXTRA.guests = {};
partSites('guests').slice(0, 3).forEach((s, i) => {
  EXTRA.guests[21 + i] = [s.d.n + ' (site)', () => `<iframe class="gs-site" src="index.html?embed=1&at=guests#/${s.id}/speakers" title="${s.d.n}" loading="eager"></iframe>`];
});

/* the "Latest stories" designs (old part 7) added to Student stories as 21+: the real blog page, scrolled to the stories section */
EXTRA.stories = {};
partSites('stories').forEach((s, i) => {
  EXTRA.stories[21 + i] = [s.d.n + ' (site)', () => `<iframe class="gs-site" src="index.html?embed=1&at=stories#/${s.id}/blog" title="${s.d.n}" loading="eager"></iframe>`];
});

/* 29 and 30: two simple contact layouts asked for */
EXTRA.contact[29] = ['Photo left, form right', () => `<section class="ct29"><div class="ph">${pfFill('p3')}</div><div class="fm"><p class="eyebrow">Contact</p><h2>Get in touch.</h2><p class="lead">${XC.lead}</p>${xForm()}<div class="li"><span>hello@voicesunveiled.org</span><span>270 North Ave., Suite 811, New Rochelle, NY 10801</span></div></div></section>`];
EXTRA.contact[30] = ['Banner with photo', () => `<section class="ct30"><div class="cd"><div class="fm"><p class="eyebrow">Contact</p><h2>Get in touch.</h2>${xForm()}</div><div class="ph">${pfFill('pic1')}<div class="ch"><b>hello@voicesunveiled.org</b><span>We reply to every message.</span></div></div></div></section>`];

/* Our founder 21: a short banner, her photo as a circle on the left, the description on the right */
EXTRA.founder = {};
EXTRA.founder[21] = ['Short banner, round photo', () => { const m = PG_M.founder; return `<section class="fd21"><div class="bn"><div class="ph">${pf('cara', 'circle')}</div><div class="tx"><p class="eyebrow">${m.e}</p><h2>${m.h}</h2><p class="lead">${m.lead}</p><p class="bd">${m.body[0]}</p></div></div></section>`; }];

/* Emergency assistance 21: design 6 mirrored (description on the left, photo on the right) */
RC.emergency[20] = ['slab', 'l', 'r-arch', [['needs', 'cards'], ['quote', 'band']]];
PG_KEEP.emergency.push(21);

Object.keys(EXTRA).forEach(id => { PG_KEEP[id] = (PG_KEEP[id] || []).concat(Object.keys(EXTRA[id]).map(Number)); });
