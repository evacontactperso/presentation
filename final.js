/* Page 20: the user's selection, every page one after another, in the order given.
   Numbers on the cards are the designs' own numbers. */
const FINAL_SEL = [
  ['covers', [4, 6, 8, 19, '16w', 23]], ['mission', [5, 8, 7]], ['founder', [9, 21, 6]], ['course', [1, 4, 13]],
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

/* lightbox: the section shown in a card, enlarged; nothing of the rest of the page can be seen. Click, Esc or × closes; ← → move between cards. */
function finLightbox(card) {
  const cards = [...document.querySelectorAll('.gal-final .gcard')];
  let idx = cards.indexOf(card);
  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.innerHTML = '<div class="lb-win"></div><button class="lb-x" aria-label="Close">×</button><span class="lb-n"></span>';
  document.body.appendChild(lb);
  const win = lb.querySelector('.lb-win');
  const show = i => {
    idx = (i + cards.length) % cards.length;
    const src = cards[idx].querySelector('iframe'), cs = getComputedStyle(src);
    const w = parseFloat(cs.width) || 1280, h = parseFloat(cs.height) || 800;
    const k = Math.min(window.innerWidth * 0.94 / w, window.innerHeight * 0.88 / h);
    win.style.width = w * k + 'px'; win.style.height = h * k + 'px';
    win.innerHTML = `<iframe src="${src.getAttribute('src') || src.dataset.src}" title="" style="width:${w}px;height:${h}px;transform:scale(${k})"></iframe>`;
    lb.querySelector('.lb-n').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(cards.length).padStart(2, '0');
  };
  const close = () => { lb.remove(); document.removeEventListener('keydown', key); };
  const key = e => { if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') show(idx + 1); else if (e.key === 'ArrowLeft') show(idx - 1); };
  lb.addEventListener('click', close);
  document.addEventListener('keydown', key);
  show(idx);
}
document.addEventListener('click', e => {
  const card = e.target.closest('.gal-final .gcard');
  if (card) { e.preventDefault(); finLightbox(card); }
});
