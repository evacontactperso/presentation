/* Two CV designs kept (1 bandeau, 2 colonne latérale; the code for 3-6 stays in cvdHead/CSS), built on the Voices Unveiled proposals (palette, rounded shapes, Plus Jakarta Sans).
   Route: #/cv/1 … #/cv/6 ; #/cv is the original Jarva-style CV. Same data (CV_DATA), same A4 pagination. */

const CVD = [
  { n: 'Bandeau', t: 'Un bandeau sombre en dégradé noir vers terracotta, photo ronde, titres terracotta.' },
  { n: 'Colonne latérale', t: 'Colonne aubergine avec photo, contact, langues et centres d’intérêt ; parcours à droite.' }
];

const cvdPhoto = (cls = '') => CV_PHOTO ? `<img class="ph ${cls}" src="${CV_PHOTO}" alt="${sxEsc(CV_DATA.name)}">` : '';
const cvdContact = (cls = '') => CV_DATA.contact.map(c => `<span class="${cls}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${CV_ICON[cvKind(c.text)]}</svg>${cx(c.text)}</span>`).join('');
const cvdInline = sec => sec.items.some(i => i.label)
  ? sec.items.map(i => `<div class="lg"><b>${cx(i.label)}</b><span>${cx(i.text)}</span></div>`).join('')
  : sec.items.map(i => `<span class="chip">${cx(i.text)}</span>`).join('');
const cvdSec = id => CV_DATA.sections.find(s => s.id === id);

function cvdHead(d) {
  const nm = CV_DATA.name, hl = CV_DATA.headline, first = nm.split(' ')[0], last = nm.split(' ').slice(1).join(' ');
  if (d === 1) return `<div class="h1"><div class="in">${cvdPhoto()}<div><p class="nm">${cx(nm)}</p><p class="hl">${cx(hl)}</p><div class="ct">${cvdContact()}</div></div></div></div>`;
  if (d === 2) return `<div class="h2"><p class="nm">${cx(first)} <b>${cx(last)}</b></p><p class="hl">${cx(hl)}</p></div>`;
  if (d === 3) return `<div class="h3"><div class="arch">${cvdPhoto()}</div><div><p class="nm">${cx(nm)}</p><p class="hl">${cx(hl)}</p><div class="ct">${cvdContact()}</div></div></div>`;
  if (d === 4) return `<div class="h4"><div><p class="nm">${cx(first)}<br><b>${cx(last)}</b></p><p class="hl">${cx(hl)}</p><div class="ct">${cvdContact()}</div></div>${cvdPhoto('arch')}</div>`;
  if (d === 5) return `<div class="h5"><div class="top"><p class="hl">${cx(hl)}</p>${cvdPhoto()}</div><p class="nm">${cx(first)}<br>${cx(last)}</p><div class="ct">${cvdContact()}</div></div>`;
  const lg = cvdSec('langues');
  return `<div class="h6"><div class="t nm"><p class="n">${cx(nm)}</p><p class="hl">${cx(hl)}</p></div><div class="t ph">${cvdPhoto()}</div><div class="t ct"><b>Contact</b>${cvdContact()}</div>${lg ? `<div class="t lg"><b>${cx(lg.title)}</b>${cvdInline(lg)}</div>` : ''}</div>`;
}

function cvdBlocks(d) {
  const out = [{ k: 'head', html: cvdHead(d) }];
  CV_DATA.sections.forEach(sec => {
    if (sec.kind === 'inline' && (d === 2 || (d === 6 && sec.id === 'langues'))) return;
    out.push({ k: 'title', html: `<div class="cv-sec"><div class="cv-title"><h2>${cx(sec.title)}</h2><i></i></div></div>` });
    if (sec.kind === 'entries') sec.entries.forEach(e => out.push({ k: 'entry', html: `<div class="cv-entry"><div class="cv-dt"><p class="d">${cx(e.dates)}</p>${e.place ? `<p class="pl">${cx(e.place)}</p>` : ''}</div><div class="cv-bd"><p class="t">${cx(e.title)}</p>${e.org ? `<p class="o">${cx(e.org)}</p>` : ''}${e.note ? `<p class="n">${cx(e.note)}</p>` : ''}${e.items.map(it => `<p class="li ${e.items.length > 1 ? 'bl' : ''}">${cvLab(it)}</p>`).join('')}</div></div>` }));
    else if (sec.kind === 'list') sec.items.forEach(it => out.push({ k: 'list', html: `<div class="cv-list"><i></i><p>${cvLab(it)}</p></div>` }));
    else if (sec.kind === 'text') sec.items.forEach(it => out.push({ k: 'text', html: `<p class="cv-text">${cx(it.text)}</p>` }));
    else if (sec.kind === 'inline') out.push({ k: 'inline', html: `<div class="cv-inl2">${cvdInline(sec)}</div>` });
  });
  return out;
}

const cvdSide = () => {
  const lg = cvdSec('langues'), it = cvdSec('interets');
  return `<aside class="cv-side">${cvdPhoto()}<div class="b"><h3>Contact</h3>${cvdContact()}</div>${lg ? `<div class="b"><h3>${cx(lg.title)}</h3>${cvdInline(lg)}</div>` : ''}${it ? `<div class="b"><h3>${cx(it.title)}</h3><div class="chips">${cvdInline(it)}</div></div>` : ''}</aside>`;
};

function cvPageD(d) {
  document.title = `Mon CV · design ${d}`;
  const MM = 96 / 25.4, BODY = (297 - 33) * MM, cls = `cvd cvd${d}`;
  const blocks = cvdBlocks(d);
  const bar = `<div class="cv-bar"><span></span><button class="cv-print" onclick="window.print()">Imprimer</button></div>`;
  $('#app').innerHTML = `<div class="cvpage cvd-page">${bar}<div class="cv-measure"><div id="cvm" class="${cls}">${blocks.map(b => `<div class="flow ${b.k}">${b.html}</div>`).join('')}</div></div><div id="cvs" class="cv-sheets ${cls}"></div></div>`;
  $('#tb').style.display = 'none';
  const lay = () => {
    const kids = [...document.querySelectorAll('#cvm>.flow')], hs = kids.map(k => k.getBoundingClientRect().height);
    const pages = [[]]; let used = 0;
    const bleed = d === 1 ? 15 * MM : 0; /* design 1's head runs to the top edge of the sheet */
    blocks.forEach((b, i) => {
      const h = hs[i] - (b.k === 'head' ? bleed : 0);
      if (used + h > BODY && pages[pages.length - 1].length) { pages.push([]); used = 0; }
      pages[pages.length - 1].push(i); used += h;
    });
    for (let p = 0; p < pages.length - 1; p++) { const l = pages[p][pages[p].length - 1]; if (blocks[l].k === 'title') { pages[p].pop(); pages[p + 1].unshift(l); } }
    $('#cvs').innerHTML = pages.map((p, n) => `<section class="cv-sheet">${d === 2 ? (n === 0 ? cvdSide() : '<aside class="cv-side"></aside>') : ''}<div class="cv-main">${p.map(i => `<div class="flow ${blocks[i].k}">${blocks[i].html}</div>`).join('')}</div>${pages.length > 1 ? `<div class="cv-foot"><span>${cx(CV_DATA.name)}</span><span>${n + 1} / ${pages.length}</span></div>` : ''}</section>`).join('');
    const w = document.querySelector('.cvpage').clientWidth - 48, z = Math.min(1, w / (210 * MM));
    $('#cvs').style.zoom = z;
  };
  lay(); setTimeout(lay, 200);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(lay);
  window.scrollTo(0, 0);
}
