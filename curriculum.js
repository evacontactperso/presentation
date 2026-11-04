/* « Curriculum » : programme annuel de préparation au baccalauréat de français, au format A4.
   Route : #/curriculum. Mêmes feuilles et même pagination que « Mon CV » (classes cvpage, cv-sheet, cv-foot, impression A4).
   Palette unique : bordeaux (titres), terracotta (accents), beige (fonds), noir (texte). Voir curriculum.css.
   Les données sont dans cur-w1.js à cur-w5.js (CUR_WEEKS, CUR_FORM). Une semaine = une séance : introduction,
   alternance de cours et d’entraînements, conclusion. */

const CUR_INTRO = 'Ce programme de 36 semaines (septembre à juin) prépare aux deux épreuves du baccalauréat de français : l’écrit (commentaire composé ou dissertation sur une œuvre au programme) et l’oral (analyse linéaire, question de grammaire, entretien sur l’œuvre choisie). Une semaine égale une séance de 2 heures, organisée en trois temps : une introduction, une alternance de cours et d’entraînements, une conclusion.';

/* mise au point du design : seules ces semaines sont affichées (mettre null pour afficher les 36 semaines et le sommaire) */
const CUR_ONLY = null;
const curDur = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? String(m % 60).padStart(2, '0') : ''}` : `${m} min`;
const curE = s => sxEsc(s);

/* quatre sortes de moments : introduction (i), cours (k), entraînement (e), conclusion (c) */
const CUR_KL = { i: 'Introduction', k: 'Cours', e: 'Entraînement', c: 'Conclusion' };
const curKind = s => s.k === 'accroche' ? 'i' : s.k === 'bilan' ? 'c' : (s.k === 'cours' || /^Corrigé/.test(s.l)) ? 'k' : 'e';
/* une correction s’ajoute à l’entraînement qui la précède */
function curSteps(w) {
  /* une correction s'ajoute à l'entraînement qui la précède */
  const raw = [];
  w.flow.forEach(s => {
    const p = raw[raw.length - 1];
    if (/^Correction/.test(s.l) && p && p.kind === 'e') { p.b = s.b; p.x += ` Correction (${curDur(s.b - s.a)}) : ${s.x}`; return; }
    raw.push({ ...s, kind: curKind(s) });
  });
  /* alternance cours / entraînement : les étapes de même type d'affilée sont regroupées ; une séance sans cours (examen, pratique pure) garde un entraînement par étape */
  const hasCours = raw.some(s => s.kind === 'k');
  const out = [];
  raw.forEach(s => {
    const p = out[out.length - 1];
    if (p && p.kind === s.kind && (s.kind === 'k' || (s.kind === 'e' && hasCours))) {
      if (!p.parts) p.parts = [{ l: p.l, d: p.b - p.a, x: p.x }];
      p.parts.push({ l: s.l, d: s.b - s.a, x: s.x });
      p.b = s.b; p.l = s.kind === 'k' ? 'Apports de cours' : 'Mise en pratique';
      p.x = p.parts.map(q => `${q.l} (${curDur(q.d)}) : ${q.x}`).join('\n');
      return;
    }
    out.push(s);
  });
  return out;
}

const CUR_OVERVIEW = {
  head: ['Partie', 'Contenu', 'Durée', 'Compétence visée'],
  rows: [
    ['Formation 1 · Outils littéraires', '15 procédés, genres, registres, 13 mouvements littéraires', 'Semaines 1 à 9', 'Repérer et nommer les outils d’analyse d’un texte'],
    ['Formation 2 · Commentaire composé', 'Méthode en 8 étapes, 3 sujets guidés (roman, poésie, théâtre), 1 commentaire en autonomie (littérature d’idées)', 'Semaines 10 à 14', 'Rédiger un commentaire structuré dans le temps imparti'],
    ['Formation 3 · Dissertation', '10 œuvres au programme, une par semaine', 'Semaines 15 à 24', 'Construire un plan et une argumentation appuyés sur une œuvre'],
    ['Formation 4 · Oral', 'Déroulé de l’épreuve, analyse linéaire, grammaire, œuvre choisie, entretien, éloquence', 'Semaines 25 à 30', 'Présenter, analyser et dialoguer en 20 minutes'],
    ['Partie 5 · Révisions', 'Bacs blancs écrits, corrections, oraux blancs', 'Semaines 31 à 36', 'Passer les épreuves en conditions réelles']
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
  /* couverture */
  add('cover', `<div class="cu-cover"><h1>Curriculum</h1><p class="sub">Préparation au baccalauréat de français</p><p class="lead">${curE(CUR_INTRO)}</p>${curTable(CUR_OVERVIEW)}</div>`);
  add('text', `<div class="cu-how"><p><b>Comment lire une fiche.</b> Chaque semaine suit la même trame : titre et objectif, connaissances théoriques, savoir-faire pratiques, supports de cours, puis le déroulé de la séance et le devoir pour la séance suivante. Le déroulé commence par une introduction, alterne cours et entraînements, et se termine par une conclusion.</p></div>`);
  /* sommaire */
  if (!CUR_ONLY) add('title', `<div class="cu-sec"><h2>Sommaire</h2></div>`, { pb: true });
  if (!CUR_ONLY) Object.keys(CUR_FORM).forEach(f => {
    const F = CUR_FORM[f];
    add('title', `<div class="cu-tocf"><b>${curE(F.n)} · ${curE(F.t)}</b><span>${curE(F.w)}</span></div>`);
    weeks.filter(w => w.f === f).forEach(w => add('toc', `<div class="cu-tocw"><span class="n">${w.n}</span><span class="t">${curE(w.title)}</span><span class="p" data-w="${w.n}">·</span></div>`));
  });
  /* fiches : deux feuilles au plus par semaine */
  weeks.forEach(w => {
    const F = CUR_FORM[w.f], steps = curSteps(w);
    cur = w.n;
    add('title', `<div class="cu-wk" data-w="${w.n}"><div class="num"><small>Semaine</small><b>${w.n}</b></div><div class="ht"><p class="lab">${curE(F.n)} · ${curE(F.t)} · ${curDur(w.len)}${w.special ? ` · ${curE(w.special.replace(/\.$/, ''))}` : ''}</p><h2>${curE(w.title)}</h2></div></div>`, { pb: true, w: w.n });
    add('text', `<div class="cu-goal"><small>Objectif de la séance hebdomadaire</small><p>${curE(w.goal)}</p></div>`);
    add('text', `<div class="cu-s cu-sb b">${curH('Connaissances théoriques')}<ul class="cu-ul">${w.notions.map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('text', `<div class="cu-s cu-sb t">${curH('Savoir-faire pratiques')}<ul class="cu-ul">${w.skills.map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('text', `<div class="cu-s cu-sb o">${curH('Supports de cours')}<div class="cu-prep">${w.prep.filter(p => p.k !== 'À lire avant la séance').map(p => `<p>${curE(p.t)}</p>`).join('')}</div></div>`);
    add('text', `<div class="cu-s cu-sb y cu-hw">${curH(w.n === CUR_LAST ? 'Travail jusqu’à l’épreuve' : 'Devoir pour la prochaine séance')}<ul class="cu-ul">${(CUR_HW[w.n] || []).map(x => `<li>${curE(x)}</li>`).join('')}</ul></div>`);
    add('title', `<div class="cu-s cu-flush">${curH('Déroulé de la séance')}</div>`, { pb: true });
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
  const bar = `<div class="cv-bar"><span></span><button class="cv-print" onclick="window.print()">Imprimer</button></div>`;
  /* plan à gauche : sommaire, puis chaque formation et ses semaines */
  const shown = CUR_WEEKS.filter(w => blocks.some(b => b.w === w.n)).sort((a, b) => a.n - b.n);
  const nav = `<nav class="cu-nav" aria-label="Plan du curriculum"><p class="cn-t">Plan du curriculum</p>`
    + `<button type="button" class="cn-top" data-cu="cover"><i class="n">·</i><span>Présentation</span></button>`
    + (CUR_ONLY ? '' : `<button type="button" class="cn-top" data-cu="toc"><i class="n">·</i><span>Sommaire</span></button>`)
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
    /* un titre ne reste jamais seul en bas de page */
    for (let p = 0; p < pages.length - 1; p++) {
      let g = 0;
      while (pages[p].length > 1 && blocks[pages[p][pages[p].length - 1]].k === 'title' && g++ < 4) pages[p + 1].unshift(pages[p].pop());
    }
    return pages;
  };
  const lay = () => {
    let pages = measure(), guard = 0;
    for (;;) {
      /* deux feuilles au plus par semaine : sinon on resserre cette semaine */
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
    $('#cus').innerHTML = pages.map((p, n) => `<section class="cv-sheet">${p.map(i => html(blocks[i])).join('')}<div class="cv-foot"><span>Curriculum · Préparation au baccalauréat de français</span><span>${n + 1} / ${pages.length}</span></div></section>`).join('');
    document.querySelectorAll('#cus .cu-tocw .p').forEach(e => { e.textContent = pageOf[e.dataset.w] || ''; });
    const w = document.querySelector('.cu-main').clientWidth, z = Math.min(1, w / (210 * MM));
    $('#cus').style.zoom = z;
    bind();
  };
  /* clic dans le plan = défilement jusqu'à la feuille ; la ligne active suit la lecture */
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
