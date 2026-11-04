/* "Curriculum": yearly French baccalauréat preparation program, A4 format.
   Route: #/curriculum. Same sheets and same pagination as "My CV" (classes cvpage, cv-sheet, cv-foot, A4 printing).
   Single palette: burgundy (headings), terracotta (accents), beige (backgrounds), black (text). See curriculum.css.
   The data is in cur-w1.js to cur-w5.js (CUR_WEEKS, CUR_FORM). One week = one session: introduction,
   alternation of lessons and practice, conclusion. */

const CUR_INTRO = 'This 36-week program (September to June) prepares for the two exams of the French baccalauréat: the written exam (commentaire composé or essay on a work from the syllabus) and the oral exam (linear analysis, grammar question, interview on the chosen work). One week equals one 2-hour session, organized in three stages: an introduction, an alternation of lessons and practice, a conclusion.';

/* design tuning: only these weeks are shown (set to null to show all 36 weeks and the table of contents) */
const CUR_ONLY = null;
const curDur = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ' ' + String(m % 60).padStart(2, '0') : ''}` : `${m} min`;
const curE = s => sxEsc(s);

/* four kinds of moments: introduction (i), lesson (k), practice (e), conclusion (c) */
const CUR_KL = { i: 'Introduction', k: 'Lesson', e: 'Practice', c: 'Conclusion' };
const curKind = s => s.k === 'accroche' ? 'i' : s.k === 'bilan' ? 'c' : (s.k === 'cours' || /^Answer key/.test(s.l)) ? 'k' : 'e';
/* a correction is added to the practice that precedes it */
function curSteps(w) {
  /* a correction is added to the practice that precedes it */
  const raw = [];
  w.flow.forEach(s => {
    const p = raw[raw.length - 1];
    if (/^Correction/.test(s.l) && p && p.kind === 'e') { p.b = s.b; p.x += ` Correction (${curDur(s.b - s.a)}): ${s.x}`; return; }
    raw.push({ ...s, kind: curKind(s) });
  });
  /* alternation lesson / practice: consecutive steps of the same type are grouped; a session without a lesson (exam, pure practice) keeps one practice per step */
  const hasCours = raw.some(s => s.kind === 'k');
  const out = [];
  raw.forEach(s => {
    const p = out[out.length - 1];
    if (p && p.kind === s.kind && (s.kind === 'k' || (s.kind === 'e' && hasCours))) {
      if (!p.parts) p.parts = [{ l: p.l, d: p.b - p.a, x: p.x }];
      p.parts.push({ l: s.l, d: s.b - s.a, x: s.x });
      p.b = s.b; p.l = s.kind === 'k' ? 'Lesson content' : 'Practice';
      p.x = p.parts.map(q => `${q.l} (${curDur(q.d)}): ${q.x}`).join('\n');
      return;
    }
    out.push(s);
  });
  return out;
}

const CUR_OVERVIEW = {
  head: ['Part', 'Content', 'Duration', 'Targeted skill'],
  rows: [
    ['Course 1 · Literary tools', '15 devices, genres, registers, 13 literary movements', 'Weeks 1 to 9', 'Spot and name the tools for analyzing a text'],
    ['Course 2 · Guided commentary', '8-step method, 3 guided topics (novel, poetry, theater), 1 independent commentary (literature of ideas)', 'Weeks 10 to 14', 'Write a structured commentary in the allotted time'],
    ['Course 3 · Essay', '10 works from the syllabus, one per week', 'Weeks 15 to 24', 'Build an outline and an argument based on a work'],
    ['Course 4 · Oral exam', 'Exam flow, linear analysis, grammar, chosen work, interview, public speaking', 'Weeks 25 to 30', 'Present, analyze and discuss in 20 minutes'],
    ['Part 5 · Review', 'Written mock exams, corrections, oral mock exams', 'Weeks 31 to 36', 'Take the exams in real conditions']
  ]
};

const curTable = t => `<table class="cu-t"><thead><tr>${t.head.map(h => `<th>${curE(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<${i ? 'td' : 'th'}>${curE(c)}</${i ? 'td' : 'th'}>`).join('')}</tr>`).join('')}</tbody></table>`;
const curH = t => `<h3 class="cu-h">${curE(t)}</h3>`;
const CUR_LAST = 36;

function curBlocks() {
  const weeks = CUR_WEEKS.slice().sort((a, b) => a.n - b.n).filter(w => !CUR_ONLY || CUR_ONLY.includes(w.n));
  const B = [];
  let cur = 0;
  const add = (k, html, o = {}) => B.push({ k, html, wn: cur, ...o });
  /* cover */
  add('cover', `<div class="cu-cover"><h1>Curriculum</h1><p class="sub">Preparing for the French baccalauréat</p><p class="lead">${curE(CUR_INTRO)}</p>${curTable(CUR_OVERVIEW)}</div>`);
  add('text', `<div class="cu-how"><p><b>How to read a sheet.</b> Each week follows the same pattern: title and goal, theoretical knowledge, practical skills, course materials, then the flow of the session and the homework for the next session. The flow starts with an introduction, alternates lessons and practice, and ends with a conclusion.</p></div>`);
  /* table of contents */
  if (!CUR_ONLY) add('title', `<div class="cu-sec"><h2>Contents</h2></div>`, { pb: true });
  if (!CUR_ONLY) Object.keys(CUR_FORM).forEach(f => {
    const F = CUR_FORM[f];
    add('title', `<div class="cu-tocf"><b>${curE(F.n)} · ${curE(F.t)}</b><span>${curE(F.w)}</span></div>`);
    weeks.filter(w => w.f === f).forEach(w => add('toc', `<div class="cu-tocw"><span class="n">${w.n}</span><span class="t">${curE(w.title)}</span><span class="p" data-w="${w.n}">·</span></div>`));
  });
  /* sheets: two pages at most per week */
  weeks.forEach(w => {
    const F = CUR_FORM[w.f], steps = curSteps(w);
    cur = w.n;
    add('title', `<div class="cu-wk" data-w="${w.n}"><div class="num"><small>Week</small><b>${w.n}</b></div><div class="ht"><p class="lab">${curE(F.n)} · ${curE(F.t)} · ${curDur(w.len)}${w.special ? ` · ${curE(w.special.replace(/\.$/, ''))}` : ''}</p><h2>${curE(w.title)}</h2></div></div>`, { pb: true, w: w.n });
    add('text', `<div class="cu-goal"><small>Goal of the weekly session</small><p>${curE(w.goal)}</p></div>`);
    add('text', `<div class="cu-s cu-sb b">${curH('Theoretical knowledge')}<ul class="cu-ul">${w.notions.map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('text', `<div class="cu-s cu-sb t">${curH('Practical skills')}<ul class="cu-ul">${w.skills.map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('text', `<div class="cu-s cu-sb o">${curH('Course materials')}<div class="cu-prep">${w.prep.filter(p => p.k !== 'To read before the session').map(p => `<p>${curE(p.t)}</p>`).join('')}</div></div>`);
    add('text', `<div class="cu-s cu-sb y cu-hw">${curH(w.n === CUR_LAST ? 'Work until the exam' : 'Homework for the next session')}<ul class="cu-ul">${(CUR_HW[w.n] || []).map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('title', `<div class="cu-s cu-flush">${curH('Session flow')}</div>`, { pb: true });
    steps.forEach((s, i) => add('step', `<div class="cu-step ${s.kind}${i === 0 ? ' first' : ''}${i === steps.length - 1 ? ' last' : ''}"><span class="t"><b>${s.a}</b> min</span><span class="dot"></span><span class="ty"><em>${CUR_KL[s.kind]}</em></span><div class="bx"><div class="bh"><b>${curE(s.l)}</b><span class="d">${curDur(s.b - s.a)}</span></div><p>${curE(s.x).replace(/\n/g, '<br>')}</p></div></div>`));
  });
  return B;
}

const CUR_DENS = {};
const CUR_Z = [1, .94, .88, .82, .76];
function curriculumPage() {
  document.title = 'Curriculum';
  const MM = 96 / 25.4, BODY = (297 - 33) * MM;
  const blocks = curBlocks();
  const bar = `<div class="cv-bar"><span></span><button class="cv-print" onclick="window.print()">Print</button></div>`;
  /* outline on the left: table of contents, then each course and its weeks */
  const shown = CUR_WEEKS.filter(w => blocks.some(b => b.w === w.n)).sort((a, b) => a.n - b.n);
  const nav = `<nav class="cu-nav" aria-label="Curriculum outline"><p class="cn-t">Curriculum outline</p>`
    + `<button type="button" class="cn-top" data-cu="cover"><i class="n">·</i><span>Overview</span></button>`
    + (CUR_ONLY ? '' : `<button type="button" class="cn-top" data-cu="toc"><i class="n">·</i><span>Contents</span></button>`)
    + Object.keys(CUR_FORM).map(f => { const F = CUR_FORM[f], ws = shown.filter(w => w.f === f); return ws.length ? `<div class="cn-g"><p>${curE(F.n)} · ${curE(F.t)}<small>${curE(F.w)}</small></p>${ws.map(w => `<button type="button" data-cu="w${w.n}"><i class="n">${w.n}</i><span>${curE(CUR_SHORT[w.n] || w.title)}</span></button>`).join('')}</div>` : ''; }).join('')
    + `</nav>`;
  $('#app').innerHTML = `<div class="cvpage cu-page"><div class="cu-layout">${nav}<div class="cu-main">${bar}<div class="cv-measure"><div id="cum" class="cur-doc"></div></div><div id="cus" class="cv-sheets cur-doc"></div></div></div></div>`;
  $('#tb').style.display = 'none';
  const html = b => `<div class="flow ${b.k}"${b.z < 1 ? ` style="zoom:${b.z}"` : ''}>${b.html}</div>`;
  const measure = () => {
    blocks.forEach(b => { b.z = CUR_Z[CUR_DENS[b.wn] || 0]; });
    $('#cum').innerHTML = blocks.map(html).join('');
    const hs = [...document.querySelectorAll('#cum>.flow')].map(k => k.getBoundingClientRect().height);
    const pages = [[]]; let used = 0;
    blocks.forEach((b, i) => {
      const h = hs[i];
      if ((b.pb || used + h > BODY) && pages[pages.length - 1].length) { pages.push([]); used = 0; }
      pages[pages.length - 1].push(i); used += h;
    });
    /* a title never stays alone at the bottom of a page */
    for (let p = 0; p < pages.length - 1; p++) {
      let g = 0;
      while (pages[p].length > 1 && blocks[pages[p][pages[p].length - 1]].k === 'title' && g++ < 4) pages[p + 1].unshift(pages[p].pop());
    }
    return pages;
  };
  const lay = () => {
    let pages = measure(), guard = 0;
    for (;;) {
      /* two pages at most per week: otherwise this week is tightened */
      const per = {};
      pages.forEach((p, n) => new Set(p.map(i => blocks[i].wn).filter(Boolean)).forEach(w => { (per[w] = per[w] || new Set()).add(n); }));
      const over = Object.keys(per).filter(w => per[w].size > 2 && (CUR_DENS[w] || 0) < CUR_Z.length - 1);
      if (!over.length || guard++ > 6) break;
      over.forEach(w => { CUR_DENS[w] = (CUR_DENS[w] || 0) + 1; });
      pages = measure();
    }
    const pageOf = {};
    pages.forEach((p, n) => p.forEach(i => { if (blocks[i].w) pageOf[blocks[i].w] = n + 1; }));
    window.CUR_PAGES = pageOf; window.CUR_TOTAL = pages.length;
    $('#cus').innerHTML = pages.map((p, n) => `<section class="cv-sheet">${p.map(i => html(blocks[i])).join('')}<div class="cv-foot"><span>Curriculum · Preparing for the French baccalauréat</span><span>${n + 1} / ${pages.length}</span></div></section>`).join('');
    document.querySelectorAll('#cus .cu-tocw .p').forEach(e => { e.textContent = pageOf[e.dataset.w] || ''; });
    const w = document.querySelector('.cu-main').clientWidth, z = Math.min(1, w / (210 * MM));
    $('#cus').style.zoom = z;
    bind();
  };
  /* a click in the outline scrolls to the sheet; the active line follows the reading */
  const bind = () => {
    const sheets = [...document.querySelectorAll('#cus .cv-sheet')], keys = [];
    let key = 'cover';
    sheets.forEach(s => { const wk = s.querySelector('.cu-wk'); if (wk) key = 'w' + wk.dataset.w; else if (s.querySelector('.cu-sec')) key = 'toc'; keys.push(key); });
    const go = k => { const i = keys.indexOf(k); if (i >= 0) sheets[i].scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    const btns = [...document.querySelectorAll('.cu-nav button')];
    btns.forEach(b => { b.onclick = () => go(b.dataset.cu); });
    const spy = () => {
      let i = 0; sheets.forEach((s, n) => { if (s.getBoundingClientRect().top < 200) i = n; });
      btns.forEach(b => b.classList.toggle('on', b.dataset.cu === keys[i]));
      const on = document.querySelector('.cu-nav button.on'), nv = document.querySelector('.cu-nav');
      if (on && nv && nv.scrollHeight > nv.clientHeight) { const t = on.offsetTop - nv.clientHeight / 2; nv.scrollTop += (t - nv.scrollTop) * .5; }
    };
    if (window._cuSpy) window.removeEventListener('scroll', window._cuSpy);
    window._cuSpy = spy; window.addEventListener('scroll', spy, { passive: true }); spy();
  };
  lay(); setTimeout(lay, 200); setTimeout(lay, 800);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(lay);
  window.scrollTo(0, 0);
}
