/* "Présentation - Générique" (URL ?p=generique): same content as the Voices Unveiled presentation, with every mention of the
   association (name, web address, logo) removed. Enabled by the p=generique URL parameter, which same-origin
   preview frames inherit. Nothing here runs in the normal presentation. */
(function () {
  if (typeof GENERIC === 'undefined' || !GENERIC) return;
  document.documentElement.classList.add('gen');
  const NAME = /Voices\s+Unveiled/gi;
  const cap = (s, i) => (i === 0 || /[.!?:—\-]\s*$/.test(s.slice(0, i)) || /^\s*$/.test(s.slice(0, i))) ? 'The organization' : 'the organization';
  function clean(t, whole) {
    if (/^\s*Voices\s+Unveiled\s*$/i.test(t)) return t.replace(NAME, 'Nonprofit organization');
    return t.replace(NAME, (m, i, s) => cap(s, i)).replace(/voicesunveiled\.org/gi, 'yourorganization.org');
  }
  function node(n) {
    if (n.nodeType === 3) {
      const v = n.nodeValue;
      /* "Voices <em>Unveiled</em>" split in two nodes */
      if (/Voices\s*$/i.test(v) && n.nextSibling && n.nextSibling.nodeType === 1 && /^\s*Unveiled\s*$/i.test(n.nextSibling.textContent)) {
        n.nodeValue = v.replace(/Voices\s*$/i, 'Your '); n.nextSibling.textContent = 'Nonprofit'; return;
      }
      if (/voices|unveiled/i.test(v)) { const c = clean(v); if (c !== v) n.nodeValue = c; }
      return;
    }
    if (n.nodeType !== 1) return;
    if (/^(SCRIPT|STYLE)$/.test(n.tagName)) return;
    for (const a of ['alt', 'title', 'aria-label', 'placeholder', 'content']) {
      const v = n.getAttribute && n.getAttribute(a);
      if (v && /voices\s*unveiled|voicesunveiled/i.test(v)) n.setAttribute(a, clean(v));
    }
    if (n.tagName === 'A') { const h = n.getAttribute('href'); if (h && /voicesunveiled/i.test(h)) n.setAttribute('href', '#'); }
    for (let c = n.firstChild; c; c = c.nextSibling) node(c);
  }
  function title() {
    const t = document.title.replace(/\s*[—\-]\s*Voices Unveiled[^—]*/i, '').replace(NAME, 'Nonprofit organization');
    if (t !== document.title) document.title = t;
  }
  let busy = false;
  const mo = new MutationObserver(ms => {
    if (busy) return; busy = true;
    for (const m of ms) {
      if (m.type === 'characterData') node(m.target);
      else if (m.type === 'attributes') node(m.target);
      else m.addedNodes.forEach(node);
    }
    title(); busy = false;
  });
  function start() {
    node(document.body); title();
    mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    const t = document.querySelector('title'); if (t) mo.observe(t, { childList: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
