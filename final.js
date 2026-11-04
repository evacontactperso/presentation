/* Page 20: the user's selection, every page one after another, in the order given.
   Numbers on the cards are the designs' own numbers. */
const FINAL_SEL = [
  ['covers', [6, 4, 8, 19, '16w', '23f']], ['mission', [5, 8, 7]], ['founder', [9, 21, 6]], ['course', [1, 4, 13]],
  ['guests', [21, 12, 22]], ['emergency', [3, 21, 12]], ['impact', [4, 5, 6]], ['stories', [1, 3, 22]],
  ['supporters', [5, 11, 21]], ['donate', [3, 5, 13]], ['monthly', [8, 19, 24]], ['volunteer', [14, 4, 13]],
  ['blog', [17, 7, 3]], ['contact', [26, 29, 30]]
];
GPARTS.push({ id: 'final', t: 'Final selection' });
function finalPage() {
  const sec = ([pid, list0]) => {
    /* Cover pages: her selection first, then every other cover proposal of the original page 1 */
    const list = list0;
    const gid = pid === 'covers' ? 'covers' : 'pg-' + pid, g = GPARTS.find(x => x.id === gid);
    const cards = list.map(n => {
      if (n === '23f') return `<article class="gcard"><a class="shot" href="?edge=flat#/31/mission">${frame('index.html?embed=1&edge=flat#/31/mission', 'Cover, flat bottom edge')}</a><div class="gb"><h2><span>23</span> Cover</h2></div></article>`;
      if (n === '16w') return `<article class="gcard"><a class="shot" href="?bg=white#/78/mission">${frame('index.html?embed=1&bg=white#/78/mission', 'Perspective, white background')}</a><div class="gb"><h2><span>16</span> Perspective</h2></div></article>`;
      if (pid === 'covers') { const [t, id] = COVER_ORDER[n - 1]; return t === 'h' ? hcard(hById(id), id, n) : card(SITES[id - 1], id, null, n); }
      return `<article class="gcard"><a class="shot mid" href="#/p/${pid}/${n}">${frame(`index.html?embed=1#/p/${pid}/${n}`, tplName(pid, n))}</a><div class="gb"><h2><span>${String(n).padStart(2, '0')}</span> ${tplName(pid, n)}</h2></div></article>`;
    }).join('');
    return `<div class="gpart" id="sec-${pid}"><h2 class="gp">${g.t}</h2><div class="grid">${cards}</div></div>`;
  };
  const names = FINAL_SEL.map(([pid]) => [pid, GPARTS.find(x => x.id === (pid === 'covers' ? 'covers' : 'pg-' + pid)).t]);
  return `<div class="fin-layout"><nav class="fin-nav" aria-label="Sous-parties">${names.map(([pid, t], i) => `<button type="button" data-sec="sec-${pid}" class="${i === 0 ? 'on' : ''}"><i class="n">${i + 1}</i><span>${t}</span></button>`).join('')}</nav><div class="fin-main">${FINAL_SEL.map(sec).join('')}</div></div>`;
}

/* left menu: scrolls to a section and follows the reading position */
function finNavInit() {
  const nav = document.querySelector('.fin-nav');
  if (!nav) return;
  const btns = [...nav.querySelectorAll('button')], secs = btns.map(b => document.getElementById(b.dataset.sec));
  nav.addEventListener('click', e => { const b = e.target.closest('button'); if (b) document.getElementById(b.dataset.sec).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  const upd = () => {
    let k = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 140) k = i; });
    /* only once the visitor has really scrolled down to the end of a page that scrolls (not while pictures are still loading) */
    if (window.scrollY > 200 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) k = secs.length - 1; /* a short last section can never reach the top */
    btns.forEach((b, i) => b.classList.toggle('on', i === k));
    const on = btns[k]; if (on && window.innerWidth <= 900) nav.scrollTo({ left: on.offsetLeft - 20, behavior: 'smooth' });
  };
  if (window._finScroll) window.removeEventListener('scroll', window._finScroll);
  window._finScroll = upd; window.addEventListener('scroll', upd, { passive: true }); upd();
}

/* the cards show only a running number (01, 02, 03 ...) across all sections: no title, no subtitle */
function finRenumber() {
  document.querySelectorAll('.gal-final .gcard').forEach((c, i) => {
    c.querySelectorAll('a').forEach(a => { a.removeAttribute('href'); a.removeAttribute('target'); a.tabIndex = -1; }); /* not clickable */
    const gb = c.querySelector('.gb');
    if (gb) gb.innerHTML = `<h2><span>${String(i + 1).padStart(2, '0')}</span></h2>`;
  });
}

/* a click on a card opens a page with that section (a bit of room above and below); ← → move between cards, Esc goes back */
function finSrcList() {
  const out = [];
  FINAL_SEL.forEach(([pid, list]) => list.forEach(n => {
    if (n === '16w') return out.push({ pid, src: 'index.html?embed=1&bg=white#/78/mission' });
    if (n === '23f') return out.push({ pid, src: 'index.html?embed=1&edge=flat#/31/mission' });
    if (pid === 'covers') { const [t, id] = COVER_ORDER[n - 1]; return out.push({ pid, src: t === 'h' ? `index.html?embed=1#/h/${id}/mission` : `index.html?embed=1#/${id}/mission` }); }
    out.push({ pid, src: `index.html?embed=1#/p/${pid}/${n}` });
  }));
  return out;
}
function sectionPage(n) {
  const L = finSrcList(), total = L.length;
  n = Math.min(total, Math.max(1, parseInt(n, 10) || 1));
  const it = L[n - 1], pad = x => String(x).padStart(2, '0');
  document.title = 'Design Proposals · ' + pad(n);
  $('#tb').innerHTML = ''; $('#tb').style.display = 'none';
  $('#app').innerHTML = `<div class="sec-page"><div class="sec-bar"><a class="sec-back" href="#/gallery/final">← All proposals</a><span class="sec-nav"><a href="#/section/${n > 1 ? n - 1 : total}" aria-label="Previous">‹</a><b>${pad(n)} / ${pad(total)}</b><a href="#/section/${n < total ? n + 1 : 1}" aria-label="Next">›</a></span></div><div class="sec-frame"><iframe src="${it.src}" title="Design ${pad(n)}" scrolling="no"></iframe></div></div>`;
  const fr = document.querySelector('.sec-frame iframe');
  const fit = () => {
    try {
      const h = fr.contentDocument.documentElement.scrollHeight;
      /* a cover (a whole site) shows its first screen plus a little more; a section shows its full height */
      fr.style.height = (it.pid === 'covers' ? Math.min(h, Math.max(720, window.innerHeight - 130)) : Math.max(h, 320)) + 'px';
    } catch (e) { fr.style.height = '900px'; }
  };
  fr.style.height = '720px';
  fr.addEventListener('load', () => { fit(); setTimeout(fit, 500); setTimeout(fit, 1500); });
  if (window._secKey) document.removeEventListener('keydown', window._secKey);
  window._secKey = e => {
    if (!/^#\/section\//.test(location.hash)) return;
    if (e.key === 'ArrowRight') location.hash = '#/section/' + (n < total ? n + 1 : 1);
    else if (e.key === 'ArrowLeft') location.hash = '#/section/' + (n > 1 ? n - 1 : total);
    else if (e.key === 'Escape') location.hash = '#/gallery/final';
  };
  document.addEventListener('keydown', window._secKey);
  window.scrollTo(0, 0);
}
document.addEventListener('click', e => {
  const card = e.target.closest('.gal-final .gcard');
  if (!card) return;
  e.preventDefault();
  const idx = [...document.querySelectorAll('.gal-final .gcard')].indexOf(card);
  try { sessionStorage.setItem('finY', String(window.scrollY)); } catch (err) {}
  location.hash = '#/section/' + (idx + 1);
});
