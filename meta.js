/* Meta menu (white bar at the very top) + the two pages around the design proposals:
   « Mon CV » (the same CV page as in the Jarva app, A4 sheets) and « Mes sites ». */

const META = [
  { id: 'cv', t: 'My CV', href: '#/cv', on: h => /^#\/cv\b/.test(h) || h === '' || h === '#' || h === '#/' },
  { id: 'sites', t: 'My Sites', href: '#/sites', on: h => /^#\/sites\b/.test(h) },
  { id: 'curriculum', t: 'Curriculum', href: '#/curriculum', on: h => /^#\/curriculum\b/.test(h) },
  { id: 'design', t: 'Design Proposals', href: '#/gallery/covers', on: h => /^#\/(gallery|section|\d+|h|p)\b/.test(h) }
];
function metaBar() {
  const bar = document.getElementById('metabar');
  if (!bar) return;
  if (EMBED) { bar.style.display = 'none'; return; }
  const h = location.hash, ICO = {cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>', sites: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2.5"/><path d="M3 9h18M8 21h8"/></svg>', curriculum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M8 7h8M8 11h6"/></svg>', design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.2-.9-1.6-.9-2.7 0-.9.7-1.6 1.7-1.6H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7" r="1"/></svg>'};
  bar.innerHTML = `<div class="mb-in"><a class="mb-brand" href="#/cv"><img class="mb-logo" src="${LOGO}" alt="Voices Unveiled"><span class="mb-name"><b>Eva Rousso</b><small>CV, sites &amp; proposals</small></span></a><nav>${META.map(m => `<a href="${m.id === 'design' ? '#/gallery/final' : m.href}" class="${m.on(h) ? 'on' : ''}">${ICO[m.id]}<span>${m.t}</span></a>`).join('')}</nav></div>`;
}
window.addEventListener('hashchange', metaBar);

/* ---------- Mon CV (A4 sheets, same look as the Jarva CV page) ---------- */
const cvTypo = t => String(t).replace(/(\S) (?=\d)/g, '$1\u00a0'); /* American English: no space before : ; ! ? */
const cx = s => sxEsc(cvTypo(s));
const cvLab = it => `${it.label ? `<b class="lb">${cx(it.label)}</b>${it.text ? ': ' : ''}` : ''}${it.text ? cx(it.text) : ''}`;
const CV_ICON = { mail: '<path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/>', phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>', link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>', place: '<path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10Z"/><circle cx="12" cy="11" r="2.2"/>' };
const cvKind = t => /@/.test(t) ? 'mail' : /^\+?[\d\s().-]{7,}$/.test(t) ? 'phone' : /\.|https?:/.test(t) ? 'link' : 'place';
const cvTitle = s => `<div class="cv-title"><h2>${cx(s.title)}</h2><i></i></div>`;

function cvBlocks(cv) {
  const out = [{ k: 'head', html: `<div class="cv-head">${CV_PHOTO ? `<img src="${CV_PHOTO}" alt="${sxEsc(cv.name)}">` : ''}<div><p class="cv-name">${cx(cv.name)}</p><p class="cv-hl">${cx(cv.headline)}</p><div class="cv-ct">${cv.contact.map(c => `<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${CV_ICON[cvKind(c.text)]}</svg>${cx(c.text)}</span>`).join('')}</div></div></div>` }];
  cv.sections.forEach(sec => {
    if (sec.kind === 'inline') {
      const last = out[out.length - 1];
      const box = `<div><div class="cv-title"><h2>${cx(sec.title)}</h2><i></i></div><div class="cv-inl">${sec.items.some(i => i.label) ? sec.items.map(i => `<div>${cvLab(i)}</div>`).join('') : sec.items.map(i => cx(i.text)).join('<span class="dot">·</span>')}</div></div>`;
      if (last.k === 'inline' && last.n === 1) { last.html = last.html.replace(/<\/div>$/, '') ; last.html += box + '</div>'; last.n = 2; last.two = true; }
      else out.push({ k: 'inline', n: 1, html: `<div class="cv-inlrow">${box}</div>` });
      return;
    }
    out.push({ k: 'title', html: `<div class="cv-sec">${cvTitle(sec)}</div>` });
    if (sec.kind === 'entries') sec.entries.forEach(e => {
      out.push({ k: 'entry', html: `<div class="cv-entry"><div class="cv-dt"><p class="d">${cx(e.dates)}</p>${e.place ? `<p class="pl">${cx(e.place)}</p>` : ''}</div><div><p class="t">${cx(e.title)}</p>${e.org ? `<p class="o">${cx(e.org)}</p>` : ''}${e.note ? `<p class="n">${cx(e.note)}</p>` : ''}${e.items.length ? `<p class="li ${e.items.length > 1 ? 'bl' : ''}">${cvLab(e.items[0])}</p>` : ''}</div></div>` });
      e.items.slice(1).forEach(it => out.push({ k: 'item', html: `<div class="cv-entry it"><span></span><p class="li bl">${cvLab(it)}</p></div>` }));
    });
    else if (sec.kind === 'list') sec.items.forEach(it => out.push({ k: 'list', html: `<div class="cv-list"><i></i><p>${cvLab(it)}</p></div>` }));
    else if (sec.kind === 'text') sec.items.forEach(it => out.push({ k: 'text', html: `<p class="cv-text">${cx(it.text)}</p>` }));
    else if (sec.kind === 'grid') for (let i = 0; i < sec.items.length; i += 2) out.push({ k: 'grid', html: `<div class="cv-grid">${[sec.items[i], sec.items[i + 1]].map(it => it ? `<div><p class="gl">${cx(it.label)}</p><p>${cx(it.text)}</p></div>` : '<span></span>').join('')}</div>` });
  });
  return out;
}

function cvPage() {
  if (typeof cvPageD === 'function') return cvPageD(1); /* only the bandeau format is kept */
  document.title = 'My CV';
  const MM = 96 / 25.4, BODY = (297 - 15 - 18) * MM;
  const blocks = cvBlocks(CV_DATA);
  $('#app').innerHTML = `<div class="cvpage"><div class="cv-bar"><span class="cvd-links"><a class="on" href="#/cv">Original</a>${typeof CVD !== 'undefined' ? CVD.map((x, i) => `<a href="#/cv/${i + 1}">${i + 1} · ${x.n}</a>`).join('') : ''}</span><button class="cv-print" onclick="window.print()">Print</button></div><div class="cv-measure"><div id="cvm">${blocks.map(b => `<div class="flow">${b.html}</div>`).join('')}</div></div><div id="cvs" class="cv-sheets"></div></div>`;
  $('#tb').style.display = 'none';
  const lay = () => {
    const kids = [...document.querySelectorAll('#cvm>.flow')];
    const hs = kids.map(k => k.getBoundingClientRect().height);
    const pages = [[]]; let used = 0;
    blocks.forEach((b, i) => {
      let h = hs[i];
      const isHead = b.k === 'head';
      if (!isHead && used + h > BODY && pages[pages.length - 1].length) { pages.push([]); used = 0; }
      // a section title never ends a page alone
      if (b.k !== 'title' && pages[pages.length - 1].length === 1 && blocks[pages[pages.length - 1][0]].k === 'title') { /* title already moved with its first block */ }
      pages[pages.length - 1].push(i); used += h;
    });
    // keep each title with the block that follows it
    for (let p = 0; p < pages.length - 1; p++) { const l = pages[p][pages[p].length - 1]; if (blocks[l].k === 'title') { pages[p].pop(); pages[p + 1].unshift(l); } }
    $('#cvs').innerHTML = pages.map((p, n) => `<section class="cv-sheet">${p.map(i => `<div class="flow ${blocks[i].k === 'head' ? 'head' : ''}">${blocks[i].html}</div>`).join('')}${pages.length > 1 ? `<div class="cv-foot"><span>${cx(CV_DATA.name)}</span><span>${n + 1} / ${pages.length}</span></div>` : ''}</section>`).join('');
    const w = document.querySelector('.cvpage').clientWidth - 48, sheetW = 210 * MM, z = Math.min(1, w / sheetW);
    $('#cvs').style.zoom = z;
  };
  lay(); setTimeout(lay, 200);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(lay);
}

/* ---------- Mes sites ---------- */
/* Her screenshots, one after the other (captures/): her organisation app, L’Atelier des Méthodes, Altera Food. */
const SITE_SHOTS = [
  ['01-jarva-agenda', 'Personal organization app: Calendar'],
  ['02-jarva-vue', 'Personal organization app: Overview'],
  ['03-jarva-films', 'Personal organization app: Movies & TV shows'],
  ['04-jarva-mariage', 'Personal organization app: Wedding'],
  ['05-jarva-sommeil', 'Personal organization app: Sleep'],
  ['06-jarva-livre', 'Personal organization app: Book'],
  ['07-atelier-diagnostic', 'L’Atelier des Méthodes: a complete diagnostic'],
  ['08-atelier-suivi', 'L’Atelier des Méthodes: regular follow-up'],
  ['09-atelier-piliers', 'L’Atelier des Méthodes: a 5-pillar method'],
  ['10-atelier-programme', 'L’Atelier des Méthodes: the course program'],
  ['11-altera-accueil', 'Altera Food: home page'],
  ['12-altera-levers', 'Altera Food: Choose your levers'],
  ['13-altera-blog', 'Altera Food: blog'],
  ['14-marketing-accueil', 'A marketing company’s website: home page and platform']
];
function sitesPage() {
  document.title = 'My Sites';
  $('#tb').style.display = 'none';
  /* sections and pictures in the order she asked for (Jarva last); a picture is found by its file prefix */
  const G = [
    ['atelier', 'Website of my tutoring company', ['08', '07', '10', '09']],
    ['altera', 'A nonprofit’s website', ['11', '12', '13']],
    ['marketing', 'A marketing company’s website', ['14']],
    ['jarva', 'My personal organization app', ['01', '02', '03', '04', '05', '06']]
  ];
  const shot = p => SITE_SHOTS.find(s => s[0].startsWith(p + '-'));
  let seen = 0;
  $('#app').innerHTML = `<div class="sitespage"><div class="fin-layout"><nav class="fin-nav" aria-label="My sites">${G.map(([id, t], k) => `<button type="button" data-sec="ms-${id}" class="${k === 0 ? 'on' : ''}"><i class="n">${k + 1}</i><span>${t}</span></button>`).join('')}</nav>
    <div class="fin-main">${G.map(([id, t, list]) => `<div class="gpart" id="ms-${id}"><h2 class="gp">${t}</h2><div class="sp-shots">${list.map(p => { const [f, alt] = shot(p); return `<img src="captures/${f}.jpg" alt="${sxEsc(alt)}" ${seen++ > 1 ? 'loading="lazy"' : ''} decoding="async">`; }).join('')}</div></div>`).join('')}</div></div></div>`;
  window.scrollTo(0, 0);
  if (typeof finNavInit === 'function') finNavInit();
}
metaBar();

/* all scripts are loaded: render the current page now (gallery thumbnails load this page too) */
route();
