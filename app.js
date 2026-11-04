/* Voices Unveiled — design proposals (Our mission · Guest speakers · Our blog)
   One shared content model, many layouts. Routes: #/gallery  #/<id>/<mission|speakers|blog> */

const U = 'https://voicesunveiled.org/wp-content/uploads/';
const DONATE = 'https://voicesunveiled.org/donate-now/';
const MONTHLY = 'https://voicesunveiled.org/become-a-monthly-donor/';
const LOGO = U + '2024/01/Voices-Unveiled-Logo.png';
const COVER = U + '2024/05/Voices-Unveiled-Facebook-Cover-scaled.jpg';

const PAGES = ['mission', 'speakers', 'blog'];
const NAV = { mission: 'Our mission', speakers: 'Guest speakers', blog: 'Our blog' };

const PILLARS = [
  ['book', 'Free online education', 'Empowerment and leadership courses, free for every Afghan woman and girl who wants to learn.'],
  ['heart', 'Mental health support', 'A safe space to be heard, with care that helps women and girls carry what they live through.'],
  ['mega', 'Leadership development', 'Skills and confidence to speak up, lead and pass knowledge on to others.'],
  ['people', 'Community building', 'A global circle of women, inside and outside Afghanistan, who stand with each other.']
];
const ICONS = {
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M4 21.5A2.5 2.5 0 0 1 6.5 19H20"/>',
  heart: '<path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.1-8 11-8 11Z"/>',
  mega: '<path d="M3 10v4h4l8 4V6L7 10H3Z"/><path d="M18.5 9a4 4 0 0 1 0 6"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><path d="M2.8 20a6.2 6.2 0 0 1 12.4 0"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14.2a5 5 0 0 1 4.2 5.8"/>'
};
const SPEAKERS = [
  { name: 'Dr. Lyla June Johnson', role: 'Musician · Scholar · Community organizer', img: U + '2025/04/Lyla-June-Main-scaled.jpg',
    bio: 'Indigenous musician, scholar, scientist, public speaker and community organizer of Diné (Navajo), Tsétsêhéstâhese (Cheyenne) and European lineages.' },
  { name: 'Zainab Salbi', role: 'Founder · Author · Humanitarian', img: U + '2025/04/Official-Headshot-1.jpg',
    bio: 'Time100 Impact Award honoree, named one of People’s “25 Women Changing the World”. Founder of Women for Women International, co-founder of Daughters for Earth, best-selling author of Freedom Is an Inside Job and host of #MeToo, Now What?' }
];
const POSTS = [
  { t: 'The Hidden Artistry of Afghan Girls', x: 'From childhood, Afghan girls learn silence — at home and in the street. This is the story of the creativity that survives it.', u: 'the-hidden-artistry-of-afghangirls/', i: '2025/12/Image-Enhanced41', e: 'jpg', tag: 'Stories' },
  { t: 'Poetry from Afghanistan: On Patria', x: 'A poem about a country marked by sorrow and war, yet patient and full of hope.', u: 'poetry-from-afghanistan-on-patria/', i: '2025/10/VU-Blog-Banner-Image31', e: 'png', tag: 'Poetry' },
  { t: 'The Class That Helped Me Find My Voice', x: 'A teenager who learned silence under Taliban restrictions tells how she learned to speak up.', u: 'the-class-that-helped-me-find-my-voice/', i: '2025/08/Capture-decran-2025-08-25-a-18.31.08', e: 'png', tag: 'Student voices' },
  { t: 'Writing History in the Shadows: The Forbidden Education Movement of Afghan Women', x: 'Inside the underground education movement of Afghan women, told through a former student from Kabul.', u: 'writing-history-in-the-shadows-the-forbidden-education-movement-of-afghan-women/', i: '2025/06/pexels-arina-krasnikova-6907847', e: 'jpg', tag: 'Education' }
];
/* photo pool: 0 Lyla · 1 Zainab · 2-5 blog photos · 6 cover */
const IMGS = [SPEAKERS[0].img, SPEAKERS[1].img, ...POSTS.map(x => U + x.i + '.' + x.e), COVER];

/* ---------- official palette, measured on voicesunveiled.org (rendered colors across 8 pages) ---------- */
const PALETTE = [
  ['Aubergine', '#291e2b', 'Text, menu, footer, dark bands', 'core'],
  ['Terracotta', '#c84409', 'Buttons and calls to action', 'core'],
  ['Teal', '#1f757d', 'Headings and links', 'core'],
  ['Coral', '#cc5a5d', 'Accent text', 'core'],
  ['Plum', '#4b2142', 'New-program pop-up, deep accents', 'support'],
  ['Deep terracotta', '#982d06', 'Donation page headings', 'support'],
  ['Amber', '#d99058', 'Donation page highlights', 'support'],
  ['Sand', '#e3b797', 'Soft backgrounds (speakers page)', 'support'],
  ['Cream', '#faf6ef', 'Section backgrounds', 'support'],
  ['Blush', '#fbf2ef', 'Pale section backgrounds', 'support'],
  ['Warm gray', '#6f6663', 'Secondary text', 'support'],
  ['White', '#ffffff', 'Page background', 'support']
];

/* ---------- designs ----------
   g: 'rev' = kept & reworked from round 1 · 'new' = round 2.  ids of removed designs (4,6,7,8,11,15,18) are not reused. */
const D = [
  { id: 1, g: 'rev', n: 'Lumière', t: 'Bold modern sans, photo collage, soft blue light.', c: { hdr: 'bar', hero: 'split', vis: 'collage', edge: 'curve', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'band' } },
  { id: 2, g: 'rev', n: 'Nuit bleue', t: 'Deep hero, bright content, bold bands. Kept as you liked it.', c: { cw: 0, hdr: 'bar', hero: 'left', dk: 1, edge: 'slant', pil: 'grid', spk: 'rows', blog: 'list', cta: 'card' } },
  { id: 3, g: 'rev', n: 'Mosaïque', t: 'Deep gradient hero, rounded bento tiles.', c: { hdr: 'bar', hero: 'split', vis: 'duo', dk: 1, edge: 'curve', pil: 'grid', spk: 'cards', blog: 'bento', cta: 'band' } },
  { id: 5, g: 'rev', n: 'Azur', t: 'Photo-led hero, rounded cards.', c: { hdr: 'bar', hero: 'split', vis: 'photo', dk: 1, edge: 'curve', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'band' } },
  { id: 9, g: 'rev', n: 'Don d’abord', t: 'Donation-first: amounts above the fold.', c: { hdr: 'bar', hero: 'split', aside: 'donate', edge: 'curve', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'amounts', sticky: 1 } },
  { id: 10, g: 'rev', n: 'Voile', t: 'Glass cards over soft blue light.', c: { hdr: 'pill', hero: 'center', edge: 'none', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'card' } },
  { id: 12, g: 'rev', n: 'Géométrie', t: 'Bauhaus blocks and circles.', c: { hdr: 'bar', hero: 'split', edge: 'none', pil: 'tiles', spk: 'duo', blog: 'grid', cta: 'band' } },
  { id: 13, g: 'rev', n: 'Défilement', t: 'Horizontal swipe rails, bolder hero.', c: { hdr: 'bar', hero: 'center', vis: 'stats', dk: 1, edge: 'curve', pil: 'grid', spk: 'scroll', blog: 'scroll', cta: 'band' } },
  { id: 14, g: 'rev', n: 'Cinéma', t: 'Photo hero, posters, bright blue bands.', c: { hdr: 'bar', hero: 'full', ov: 1, dk: 1, edge: 'slant', pil: 'grid', spk: 'posters', blog: 'feature', cta: 'card' } },
  { id: 16, g: 'rev', n: 'Face à face', t: 'Half-and-half split screens with photos.', c: { hdr: 'bar', hero: 'split', aside: 'photo', edge: 'none', pil: 'grid', spk: 'duo', blog: 'feature', cta: 'band' } },
  { id: 17, g: 'rev', n: 'Pastel', t: 'Friendly rounded shapes, rounded hero.', c: { hdr: 'bar', hero: 'center', dk: 1, edge: 'none', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'card' } },
  { id: 19, g: 'rev', n: 'Impact', t: 'Heavy type, saturated blue gradients.', c: { hdr: 'bar', hero: 'type', dk: 1, edge: 'slant', pil: 'tiles', spk: 'duo', blog: 'bento', cta: 'band' } },
  { id: 20, g: 'rev', n: 'Ondes', t: 'Sound-wave hero, alternating blue and white.', c: { hdr: 'bar', hero: 'bars', dk: 1, edge: 'curve', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'amounts' } },

  { id: 21, g: 'new', n: 'Orbite', t: 'Electric blue hero, orbiting program chips.', c: { hdr: 'bar', hero: 'split', vis: 'orbit', dk: 1, edge: 'slant', pil: 'grid', spk: 'cards', blog: 'feature', cta: 'band' } },
  { id: 22, g: 'new', n: 'Arche', t: 'Arch-shaped photos, echoing the logo.', c: { hdr: 'bar', hero: 'split', vis: 'arches', edge: 'curve', pil: 'grid', spk: 'duo', blog: 'grid', cta: 'amounts' } },
  { id: 23, g: 'new', n: 'Affiche', t: 'Giant title, no animation.', c: { hdr: 'bar', hero: 'center', dk: 1, edge: 'slant', pil: 'tiles', spk: 'posters', blog: 'bento', cta: 'card' } },
  { id: 26, g: 'new', n: 'Bento', t: 'Centered hero with a wide rounded photo.', c: { hdr: 'bar', hero: 'center', vis: 'banner', dk: 1, edge: 'curve', pil: 'grid', spk: 'cards', blog: 'bento', cta: 'band' } },
  { id: 29, g: 'new', n: 'Électrique', t: 'Gradient hero, glass chips (static).', c: { hdr: 'pill', hero: 'center', vis: 'stats', dk: 1, edge: 'wave', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'amounts' } },
  { id: 31, g: 'new', n: 'Panorama', t: 'Full photo hero with a frosted message card.', c: { hdr: 'bar', hero: 'panel', ov: 1, dk: 1, edge: 'curve', pil: 'grid', spk: 'cards', blog: 'grid', cta: 'card' } },
  { id: 32, g: 'new', n: 'Triptyque', t: 'Three sliding photo columns.', c: { hdr: 'bar', hero: 'split', vis: 'columns', dk: 1, edge: 'curve', pil: 'grid', spk: 'duo', blog: 'grid', cta: 'band' } },
  { id: 36, g: 'new', n: 'Perspective', t: 'Tilted 3D photo wall on navy.', c: { hdr: 'bar', hero: 'split', vis: 'persp', dk: 1, edge: 'slant', pil: 'grid', spk: 'cards', blog: 'feature', cta: 'card' } },
  { id: 38, g: 'new', n: 'Bandes', t: 'Full-width color bands, big and direct.', c: { hdr: 'bar', hero: 'left', dk: 1, edge: 'none', pil: 'grid', spk: 'rows', blog: 'list', cta: 'card' } },
];
/* d.id is only the CSS key (.d<id>); the number shown and used in URLs is the position in D, 1 to N */
const CW_NAMES = ['Original', 'Bordeaux', 'Aubergine, titres bleu nuit', 'Prune douce', 'Nuit prune & bleu'];
/* every design x colorway is its own site, with the same colors on its three pages (design 2 keeps its original colors only) */
const SITES = D.flatMap((d, i) => (d.c.cw === 0 ? [0] : [1, 2, 3, 4]).map(cw => ({ d, cw, k: i + 1 }))).map((x, i) => ({ ...x, id: i + 1 }));
/* Deleting a site from the "Covers" part does NOT remove it from the other parts (mission & vision, what we do, ...): all 85 stay there and stay openable. */
const COVER_KEEP = new Set([6, 7, 18, 27, 31, 42, 50, 54, 63, 67, 75, 78]);
const COVER_HIDE = new Set(SITES.filter(x => !COVER_KEEP.has(x.id)).map(x => x.id));
const COVERS = SITES.filter(x => !COVER_HIDE.has(x.id));
/* part 1: one list numbered 1-24, similar layouts side by side (colors may differ). 'h' = hero-only proposal (H number), 's' = full site (site number) */
const COVER_NUMS = new Set([2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25]); /* numbers kept from the 1-24 list (gaps are intentional so the numbers keep their meaning) */
const COVER_ORDER = [['h', 17], ['h', 65], ['h', 66], ['s', 54],     /* arches */
  ['h', 77], ['h', 80], ['s', 75],                                     /* sliding photo columns */
  ['h', 74], ['h', 76], ['s', 63],                                     /* wide photo banner */
  ['h', 9], ['h', 12], ['s', 6], ['s', 7],                             /* photo collage / duo */
  ['s', 50], ['s', 78],                                                /* orbit, perspective wall */
  ['h', 4], ['s', 27], ['s', 67], ['h', 86], ['h', 87],                /* centered text, waves */
  ['h', 5], ['s', 31], ['s', 42],
  ['s', 18]];                                                          /* floating rounded pill menu (restored) */                                     /* left-aligned big title */
/* requested changes to the cover of a single site (they apply to the site wherever it appears) */
const SITE_FIX = { 15: 'dark', 18: 'dark', 54: 'dark', 46: 'terra' };
const IDS = SITES.map((s, i) => i + 1);
const byId = n => SITES[n - 1].d;


/* ---------- hero-only proposals in the original blues (#3569b4 · #0177b5 · #171716 + tints and shades) ---------- */
const HZ_PAL = [
  { n: 'Bleu vif, texte blanc', bg: 'linear-gradient(135deg,#3569b4,#0177b5)', fg: '#fff', h1: '#fff', mut: 'rgba(255,255,255,.9)', link: '#cfe1fa', btn: '#fff', btnfg: '#3569b4', ghost: '#fff', hl: '#cfe1fa', chip: '#3569b4', ov: '#3569b4', dk: 1 },
  { n: 'Bleu nuit, texte blanc', bg: 'linear-gradient(135deg,#0f2a52,#1f4a8a)', fg: '#fff', h1: '#fff', mut: 'rgba(255,255,255,.88)', link: '#8fc0f5', btn: '#3569b4', btnfg: '#fff', ghost: '#fff', hl: '#8fc0f5', chip: '#3569b4', ov: '#0f2a52', dk: 1 },
  { n: 'Bleu très clair, texte bleu foncé', bg: '#eaf1fa', fg: '#0f2a52', h1: '#0f2a52', mut: '#46608c', link: '#3569b4', btn: '#3569b4', btnfg: '#fff', ghost: '#3569b4', hl: '#3569b4', chip: '#3569b4', ov: '#0f2a52' },
  { n: 'Bleu clair, texte noir', bg: 'linear-gradient(135deg,#cfe1fa,#eaf1fa)', fg: '#171716', h1: '#171716', mut: '#3b4250', link: '#3569b4', btn: '#171716', btnfg: '#fff', ghost: '#171716', hl: '#3569b4', chip: '#3569b4', ov: '#171716' },
  { n: 'Noir, détails bleus', bg: 'radial-gradient(800px 420px at 80% 0,rgba(53,105,180,.6),transparent 70%),#171716', fg: '#fff', h1: '#fff', mut: 'rgba(255,255,255,.82)', link: '#8fc0f5', btn: '#3569b4', btnfg: '#fff', ghost: '#fff', hl: '#8fc0f5', chip: '#3569b4', ov: '#171716', dk: 1 },
  { n: 'Bleu ciel, titre bleu nuit', bg: 'linear-gradient(135deg,#0177b5,#3569b4)', fg: '#fff', h1: '#fff', mut: 'rgba(255,255,255,.9)', link: '#cfe9f7', btn: '#fff', btnfg: '#0177b5', ghost: '#fff', hl: '#0f2a52', chip: '#0177b5', ov: '#0177b5', dk: 1 },
  { n: 'Blanc, titre bleu, texte noir', bg: 'radial-gradient(520px 420px at 92% 8%,#cfe1fa,transparent 70%),radial-gradient(520px 420px at 4% 92%,#eaf1fa,transparent 70%),#fff', fg: '#171716', h1: '#3569b4', mut: '#4a5060', link: '#0177b5', btn: '#3569b4', btnfg: '#fff', ghost: '#3569b4', hl: '#0177b5', chip: '#3569b4', ov: '#0f2a52', bd: '#cfe1fa' },
  { n: 'Bleu moyen, texte bleu nuit', bg: 'linear-gradient(135deg,#9fc2f0,#cfe1fa)', fg: '#0f2a52', h1: '#0f2a52', mut: '#27406b', link: '#1f4a8a', btn: '#0f2a52', btnfg: '#fff', ghost: '#0f2a52', hl: '#1f4a8a', chip: '#3569b4', ov: '#0f2a52' },
  { n: 'Bleu ciel clair, texte noir', bg: 'linear-gradient(135deg,#8fc0f5,#cfe1fa)', fg: '#171716', h1: '#171716', mut: '#2e3646', link: '#0f2a52', btn: '#171716', btnfg: '#fff', ghost: '#171716', hl: '#0f2a52', chip: '#3569b4', ov: '#171716' },
  { n: 'Bleu nuit, titre bleu clair', bg: '#0f2a52', fg: '#cfe1fa', h1: '#cfe1fa', mut: '#9fc2f0', link: '#8fc0f5', btn: '#3569b4', btnfg: '#fff', ghost: '#cfe1fa', hl: '#fff', chip: '#3569b4', ov: '#0f2a52', dk: 1 }
];
const HZ_LAY = [
  { n: 'Centré', f: 'Plus Jakarta Sans', c: { hero: 'center', edge: 'curve' } },
  { n: 'Gauche, bord oblique', f: 'Sora', c: { hero: 'left', edge: 'slant' } },
  { n: 'Collage de photos', f: 'Outfit', c: { hero: 'split', vis: 'collage', edge: 'curve' } },
  { n: 'Grande photo', f: 'Manrope', c: { hero: 'split', vis: 'photo', edge: 'curve' } },
  { n: 'Arches', f: 'Outfit', c: { hero: 'split', vis: 'arches', edge: 'curve' } },
  { n: 'Orbite', f: 'Poppins', c: { hero: 'split', vis: 'orbit', edge: 'slant' } },
  { n: 'Bannière photo', f: 'Figtree', c: { hero: 'center', vis: 'banner', edge: 'curve' } },
  { n: 'Colonnes qui glissent', f: 'Urbanist', c: { hero: 'split', vis: 'columns', edge: 'curve' } },
  { n: 'Mur en perspective', f: 'Sora', c: { hero: 'split', vis: 'persp', edge: 'slant' } },
  { n: 'Ondes', f: 'Sen', c: { hero: 'bars', edge: 'curve' } },
  { n: 'Photo plein cadre', f: 'Bricolage Grotesque', c: { hero: 'full', edge: 'slant' } },
  { n: 'Titre géant', f: 'Montserrat', c: { hero: 'type', edge: 'curve' } }
];
/* 12 layouts x 4 palettes, rotated so each layout meets palettes of different kinds */
/* H numbers are stable ids (H01-H48 blues, H49-H88 whites); removed proposals leave gaps so the numbers you noted keep their meaning */
const HZ_REMOVED = new Set([1, 2, 3, 6, 7, 8, 10, 11, 14, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 35, 36, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 54, 58, 59, 60, 68, 69, 71, 72, 75, 79, 83, 84, 85, 52, 53, 55, 56, 57, 61, 62, 63, 64, 67, 70, 73, 78, 81, 82, 88, 13, 15, 20, 31, 34, 37, 38, 45, 46]);
const HZ_BLUE_ALL = HZ_LAY.flatMap((lay, i) => [0, 1, 2, 3].map(k => ({ g: 'blue', lay, pal: HZ_PAL[(i + k * 3) % HZ_PAL.length] }))).map((x, i) => ({ ...x, id: i + 1 }));
/* white backgrounds, text colors from the site palette: black #171716, aubergine #291e2b, plum #4b2142, deep terracotta #982d06, terracotta #c84409, teal #1f757d (detail) */
const W = { bg: '#fff', ov: '#291e2b', wh: 1 };
const HZ_WHITE_PAL = [
  { ...W, n: 'Blanc, titre noir, mot terracotta', fg: '#171716', h1: '#171716', mut: '#5d5560', link: '#982d06', btn: '#171716', btnfg: '#fff', ghost: '#171716', hl: '#c84409', chip: '#982d06', bd: '#171716' },
  { ...W, n: 'Blanc, titre terracotta foncé, mot noir', fg: '#171716', h1: '#982d06', mut: '#4a4350', link: '#982d06', btn: '#982d06', btnfg: '#fff', ghost: '#982d06', hl: '#171716', chip: '#982d06', bd: '#982d06' },
  { ...W, n: 'Blanc, titre aubergine, mot blanc sur terracotta', fg: '#291e2b', h1: '#291e2b', mut: '#5d5560', link: '#982d06', btn: '#982d06', btnfg: '#fff', ghost: '#291e2b', hl: '#fff', hlk: 'pill', hlbg: '#982d06', chip: '#982d06', bd: '#291e2b' },
  { ...W, n: 'Blanc, titre noir, mot blanc sur aubergine', fg: '#171716', h1: '#171716', mut: '#5d5560', link: '#982d06', btn: '#291e2b', btnfg: '#fff', ghost: '#171716', hl: '#fff', hlk: 'pill', hlbg: '#291e2b', chip: '#291e2b', bd: '#982d06' },
  { ...W, n: 'Blanc, titre prune, mot terracotta', fg: '#291e2b', h1: '#4b2142', mut: '#5d5560', link: '#4b2142', btn: '#4b2142', btnfg: '#fff', ghost: '#4b2142', hl: '#c84409', chip: '#4b2142', bd: '#4b2142' },
  { ...W, n: 'Blanc, titre noir, mot en dégradé terracotta et prune', fg: '#171716', h1: '#171716', mut: '#5d5560', link: '#982d06', btn: '#171716', btnfg: '#fff', ghost: '#171716', hl: '#c84409', hlk: 'grad', hlbg: 'linear-gradient(90deg,#c84409,#4b2142)', chip: '#982d06', bd: '#c84409' },
  { ...W, n: 'Blanc, titre noir, mot teal', fg: '#171716', h1: '#171716', mut: '#5d5560', link: '#1f757d', btn: '#171716', btnfg: '#fff', ghost: '#171716', hl: '#1f757d', chip: '#1f757d', bd: '#1f757d' },
  { ...W, n: 'Blanc, titre aubergine, mot blanc sur prune', fg: '#291e2b', h1: '#291e2b', mut: '#5d5560', link: '#982d06', btn: '#4b2142', btnfg: '#fff', ghost: '#4b2142', hl: '#fff', hlk: 'pill', hlbg: '#4b2142', chip: '#4b2142', bd: '#4b2142' }
];
const HZ_WHITE_LAY = ['Centré', 'Gauche, bord oblique', 'Collage de photos', 'Grande photo', 'Arches', 'Orbite', 'Bannière photo', 'Colonnes qui glissent', 'Titre géant', 'Ondes'].map(n => HZ_LAY.find(l => l.n === n));
const HZ_WHITE_ALL = HZ_WHITE_LAY.flatMap((lay, i) => [0, 1, 2, 3].map(k => ({ g: 'white', lay, pal: HZ_WHITE_PAL[(i + k * 3) % HZ_WHITE_PAL.length] }))).map((x, i) => ({ ...x, id: HZ_BLUE_ALL.length + i + 1 }));
/* requested color changes on single proposals */
const HZ_PAL_FIX = {
  65: HZ_WHITE_PAL[0],
  74: HZ_WHITE_PAL[0],
  82: { ...W, n: 'Blanc, titre noir, mot blanc sur terracotta foncé', fg: '#171716', h1: '#171716', mut: '#5d5560', link: '#982d06', btn: '#982d06', btnfg: '#fff', ghost: '#171716', hl: '#fff', hlk: 'pill', hlbg: '#982d06', chip: '#982d06', bd: '#982d06' }
};
HZ_WHITE_ALL.forEach(x => { if (HZ_PAL_FIX[x.id]) x.pal = HZ_PAL_FIX[x.id]; });
const HZ_BLUE = HZ_BLUE_ALL.filter(x => !HZ_REMOVED.has(x.id));
const HZ_WHITE = HZ_WHITE_ALL.filter(x => !HZ_REMOVED.has(x.id));
const HZ = [...HZ_BLUE, ...HZ_WHITE];
const hById = n => HZ.find(x => x.id === n);
const hStep = (n, k) => HZ[(HZ.findIndex(x => x.id === n) + k + HZ.length) % HZ.length].id;
const hzStyle = ({ lay, pal: p }) => `--fh:'${lay.f}',sans-serif;--fb:'${lay.f}',sans-serif;--fg:${p.fg};--hz-bg:${p.bg};--hz-h1:${p.h1};--mut:${p.mut};--link:${p.link};--hz-btn:${p.btn};--hz-btnfg:${p.btnfg};--hz-ghost:${p.ghost};--hl:${p.hl};--primary:${p.chip};--hz-ov:${p.ov};--hz-bd:${p.bd || 'transparent'};--hz-hlbg:${p.hlbg || 'transparent'}`;

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const icon = (k, s = 28) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>`;
const img = (src, alt, thumb) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;${thumb ? `this.src='${thumb}'` : "this.style.visibility='hidden'"}">`;
const postImg = p => img(U + p.i + '.' + p.e, '', U + p.i + '-300x300.' + p.e);
const href = (n, p) => `#/${n}/${p}`;
const EMBED = new URLSearchParams(location.search).has('embed');
const im = (i, c = '') => `<span class="vi ${c}">${img(IMGS[i], '')}</span>`;

/* ---------- hero visuals ---------- */
function vis(k) {
  switch (k) {
    case 'collage': return `<div class="vis v-collage">${im(2, 'a')}${im(0, 'b')}${im(4, 'c')}<span class="stk s1">Free for every student</span><span class="stk s2">Since 2023</span></div>`;
    case 'duo': return `<div class="vis v-duo">${im(2, 'a')}${im(0, 'b')}<span class="stk s1">501(c)(3) non-profit</span></div>`;
    case 'photo': return `<div class="vis v-photo">${im(6, 'cover')}<span class="stk s1">Free online classes</span><span class="stk s2">Founded Feb 2023</span></div>`;
    case 'polaroid': return `<div class="vis v-polaroid"><span class="pl a">${img(IMGS[2], '')}<i>Stories</i></span><span class="pl b">${img(IMGS[0], '')}<i>Voices</i></span><span class="pl c">${img(IMGS[4], '')}<i>Classes</i></span></div>`;
    case 'arches': return `<div class="vis v-arches">${im(2, 'a')}${im(1, 'b')}${im(4, 'c')}</div>`;
    case 'circles': return `<div class="vis v-circles">${im(0, 'a')}${im(2, 'b')}${im(4, 'c')}</div>`;
    case 'blob': return `<div class="vis v-blob">${im(4, 'a')}${im(0, 'b')}</div>`;
    case 'orbit': return `<div class="vis v-orbit"><span class="ring"></span>${im(4, 'core')}<span class="orb o1">${icon('book', 20)} Free classes</span><span class="orb o2">${icon('heart', 20)} Care</span><span class="orb o3">${icon('people', 20)} Community</span><span class="orb o4">${icon('mega', 20)} Leadership</span></div>`;
    case 'fan': return `<div class="vis v-fan"><div class="fc f1">${img(IMGS[2], '')}<b>Stories</b></div><div class="fc f3">${img(IMGS[4], '')}<b>Student voices</b></div><div class="fc f2">${img(IMGS[0], '')}<b>Guest speakers</b></div></div>`;
    case 'columns': {
      const col = a => `<div class="col">${[...a, ...a].map(i => im(i)).join('')}</div>`;
      return `<div class="vis v-columns">${col([2, 0, 4, 3])}${col([1, 5, 2, 4])}${col([4, 3, 0, 1])}</div>`;
    }
    case 'persp': return `<div class="vis v-persp"><div class="pg">${[2, 0, 4, 1, 3, 5, 0, 2, 4, 1, 5, 3].map(i => im(i)).join('')}</div></div>`;
    case 'stats': return `<div class="vis v-stats"><div class="st"><b>Feb 2023</b><span>Founded</span></div><div class="st"><b>100% free</b><span>For every student</span></div><div class="st"><b>501(c)(3)</b><span>US non-profit</span></div><div class="st"><b>Tax-deductible</b><span>Donations in the US</span></div></div>`;
    case 'banner': return `<div class="vis v-banner">${im(6, 'cover')}<span class="stk s1">Free for every student</span><span class="stk s2">Founded Feb 2023</span></div>`;
    case 'patch': return `<div class="vis v-patch"><div class="pb p1">${img(IMGS[0], '')}</div><div class="pb p2"><b>Feb 2023</b><span>Founded in response to a call from Afghan women</span></div><div class="pb p3">${img(IMGS[2], '')}<span>Free for every student</span></div></div>`;
  }
  return '';
}

/* ---------- components ---------- */
function header(n, p) {
  const links = PAGES.map(k => `<a href="${href(n, k)}" class="${k === p ? 'on' : ''}">${NAV[k]}</a>`).join('');
  return `<header class="hdr"><div class="wrap hdr-in">
    <a class="brand" href="${href(n, 'mission')}"><img src="${LOGO}" alt="" width="48" height="48"><span>Voices <em>Unveiled</em></span></a>
    <nav>${links}</nav>
    <a class="btn primary sm" href="${DONATE}" target="_blank" rel="noopener">Donate</a>
  </div></header>`;
}

function asideFor(p, c) {
  if (c.aside === 'donate') return `<div class="aside card">${amounts('Give today', 'Every gift keeps free classes open.')}</div>`;
  if (c.aside === 'photo' && p === 'mission') return `<figure class="aside card qcard photo" style="--cover:url('${COVER}')"><blockquote>“I want to know more about the rights that we girls should have.”</blockquote><figcaption>Ariana, 17 · Kabul</figcaption></figure>`;
  if (p === 'mission') return `<figure class="aside card qcard"><blockquote>“I want to know more about the rights that we girls should have.”</blockquote><figcaption>Ariana, 17 · Kabul</figcaption></figure>`;
  if (p === 'speakers') return `<div class="aside faces">${SPEAKERS.map(s => img(s.img, s.name)).join('')}</div>`;
  return `<div class="aside card pic">${postImg(POSTS[0])}</div>`;
}

const HERO = {
  mission: ['Our mission', 'Every voice deserves to be heard.', 'Voices Unveiled gives Afghan women and girls free online education, mental health support, leadership development and a community that stands beside them.'],
  speakers: ['Distinguished guest speakers', 'Voices that open doors.', 'Global leaders, entrepreneurs, practitioners, activists and artists share their journeys with our students, so each one can see her place in a larger story of hope and change.'],
  blog: ['Our blog', 'Stories from the classroom and beyond.', 'Poems, testimonies and reflections from Afghan women and girls, and from the people who learn alongside them.']
};
const SLOGAN = { mission: 'Every voice deserves to be heard', speakers: 'Voices that open doors', blog: 'Stories that matter' };

function marquee(text, cls) {
  const g = Array.from({ length: 4 }, () => `<span>${text}</span><i>✦</i>`).join('');
  return `<div class="mq ${cls || ''}" aria-hidden="true"><div class="mq-row">${g}${g}</div></div>`;
}

function hero(p, c, n) {
  const [e, h, l] = HERO[p];
  const hh = h.replace(/(\S+)$/, '<span class="hl">$1</span>');
  const second = p === 'speakers'
    ? `<a class="btn ghost" href="https://voicesunveiled.org/contact/" target="_blank" rel="noopener">Offer to speak</a>`
    : `<a class="btn ghost" href="#/${n}/${p === 'blog' ? 'mission' : 'speakers'}">${p === 'blog' ? 'Our mission' : 'Meet the speakers'}</a>`;
  const decor = c.hero === 'bars'
    ? `<div class="bars" aria-hidden="true">${Array.from({ length: 56 }, (_, i) => `<i style="--h:${18 + Math.round(Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.13)) * 92)}px;animation-delay:${(i % 14) * -0.17}s"></i>`).join('')}</div>`
    : c.hero === 'marq' ? marquee(SLOGAN[p].toUpperCase(), 'big') + marquee(SLOGAN[p].toUpperCase(), 'big rev')
      : c.hero === 'ribbon' ? marquee('SPEAK UP · BE HEARD · LEARN FREE', 'rb1') + marquee('EVERY VOICE COUNTS · DONATE TODAY', 'rb2 rev') : '';
  const v = c.vis ? vis(c.vis) : (c.hero === 'split' ? asideFor(p, c) : '');
  const bg = (c.hero === 'full' || c.hero === 'diag' || c.hero === 'panel' || c.hero === 'ribbon') ? ` style="--cover:url('${COVER}')"` : '';
  const edge = c.edge === 'none' ? '' : `<div class="edge e-${c.edge || 'curve'}"></div>`;
  return `<section class="hero hv-${c.hero}${c.dk ? ' dk' : ''}"${bg}><div class="wrap hero-in">
    <div class="hero-txt"><p class="eyebrow">${e}</p><h1>${hh}</h1><p class="lead">${l}</p>
    <div class="actions"><a class="btn primary" href="${DONATE}" target="_blank" rel="noopener">Donate now</a>${second}</div></div>${v}
  </div>${decor}${edge}</section>`;
}

const sh = (e, h, t) => `<div class="sec-h"><p class="eyebrow">${e}</p><h2>${h}</h2>${t ? `<p class="lead">${t}</p>` : ''}</div>`;

function amounts(h, t) {
  return `<div class="amt"><h3>${h}</h3><p>${t}</p>
    <div class="chips" role="group" aria-label="Amount">${[25, 50, 100, 250].map((v, i) => `<button class="chip ${i === 1 ? 'on' : ''}" data-v="${v}">$${v}</button>`).join('')}<a class="chip" href="${DONATE}" target="_blank" rel="noopener">Other</a></div>
    <a class="btn primary lg give" href="${DONATE}" target="_blank" rel="noopener">Give <b>$50</b></a>
    <a class="sub" href="${MONTHLY}" target="_blank" rel="noopener">Make it monthly →</a>
    <small>Tax-deductible in the US · 501(c)(3)</small></div>`;
}

function cta(c) {
  const h = 'Help a girl find her voice.';
  const t = 'Your gift keeps free classes, counselling and community open to Afghan women and girls.';
  const btns = `<a class="btn primary lg" href="${DONATE}" target="_blank" rel="noopener">Donate now</a><a class="btn ghost lg" href="${MONTHLY}" target="_blank" rel="noopener">Become a monthly donor</a>`;
  if (c.cta === 'amounts') return `<section class="cta cta-amounts" data-sec="support"><div class="wrap"><div class="cta-in"><div><p class="eyebrow">Support our students</p><h2>${h}</h2><p class="lead">${t}</p></div>${amounts('Choose your gift', 'Free for every student, funded by people like you.')}</div></div></section>`;
  return `<section class="cta cta-${c.cta}" data-sec="support"><div class="wrap"><div class="cta-in"><p class="eyebrow">Support our students</p><h2>${h}</h2><p class="lead">${t}</p><div class="actions">${btns}</div></div></div></section>`;
}

function body(p, c) {
  if (p === 'mission') return `
    ${c.nofacts ? '' : `<section class="sec facts"><div class="wrap"><ul>
      <li><b>Feb 2023</b><span>Founded</span></li><li><b>100% free</b><span>For every student</span></li>
      <li><b>501(c)(3)</b><span>US non-profit</span></li><li><b>Tax-deductible</b><span>Donations in the US</span></li></ul></div></section>`}
    <section class="sec"><div class="wrap"><blockquote class="big"><p>“I want to know more about the rights that we girls should have.”</p><footer>Ariana, 17, Kabul</footer></blockquote></div></section>
    <section class="sec alt"><div class="wrap story"><div>${sh('Our story', 'It began with a request.')}</div>
      <div class="cols"><p>Voices Unveiled was launched in February 2023, after Afghan refugee women reached out. The Taliban had returned following the withdrawal of US troops, and they asked for free online education on empowerment and feminism.</p>
      <p>We answered. Since then we have widened our reach to women inside Afghanistan, adding mental health support and community connections to the classroom.</p></div></div></section>
    <section class="sec" data-sec="mv"><div class="wrap mv"><div class="card"><p class="eyebrow">Mission</p><h3>Free education, care and leadership.</h3><p>We offer Afghan women free online education, mental health support, leadership development and community building.</p></div>
      <div class="card dark"><p class="eyebrow">Vision</p><h3>A world where silenced people are heard.</h3><p>Where empathy leads to action and compassionate leaders drive change: a global community rooted in justice, equality and the power of self-expression, education and empowerment.</p></div></div></section>
    <section class="sec alt" data-sec="what"><div class="wrap">${sh('What we do', 'Four ways we stand with Afghan women.')}
      <div class="pil pil-${c.pil}">${PILLARS.map((x, i) => `<article class="pil-i"><span class="num">0${i + 1}</span><span class="ic">${icon(x[0])}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></div></section>
    <section class="sec"><div class="wrap media"><div><p class="eyebrow">In the news</p><h3>Featured on Channel 9 NBC News</h3><p>See how a free online course is reaching women and girls who were shut out of school.</p></div>
      <a class="btn primary" href="https://voicesunveiled.org/empowerment-course/" target="_blank" rel="noopener">Learn more</a></div></section>`;
  if (p === 'speakers') return `
    <section class="sec" data-sec="guests"><div class="wrap">${sh('The line-up', 'Meet our guests.', 'Their stories widen our students’ view of what is possible. Interested in sharing your experience? We would love to hear from you.')}
      <div class="spk spk-${c.spk}">${SPEAKERS.map(s => `<article class="spk-i"><figure>${img(s.img, s.name)}</figure><div class="spk-b"><p class="eyebrow">${s.role}</p><h3>${s.name}</h3><p>${s.bio}</p></div></article>`).join('')}
        <article class="spk-i invite"><div class="spk-b"><p class="eyebrow">Your turn</p><h3>Your story could be next.</h3><p>Share your journey with students who are hungry to learn.</p><a class="btn primary" href="https://voicesunveiled.org/contact/" target="_blank" rel="noopener">Get in touch</a></div></article></div></div></section>
    <section class="sec alt" data-sec="speaker"><div class="wrap"><blockquote class="big"><p>“I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them.”</p><footer>A guest speaker</footer></blockquote></div></section>`;
  return `<section class="sec" data-sec="stories"><div class="wrap">${sh('Latest stories', 'Read, share, be moved.')}
    <div class="blog blog-${c.blog}">${POSTS.map(x => `<a class="post" href="https://voicesunveiled.org/${x.u}" target="_blank" rel="noopener"><div class="pic">${postImg(x)}</div><div class="post-b"><span class="tag">${x.tag}</span><h3>${x.t}</h3><p>${x.x}</p><span class="more">Read the story →</span></div></a>`).join('')}</div></div></section>`;
}

function news() {
  return `<section class="sec news"><div class="wrap"><div class="news-in"><div><p class="eyebrow">Stay informed</p><h3>Get new stories in your inbox.</h3></div>
    <a class="btn primary" href="https://facebook.us21.list-manage.com/subscribe?u=80378b116f347d8dca93170d7&id=3ea4a9fb14" target="_blank" rel="noopener">Subscribe to the newsletter</a></div></div></section>`;
}

function footer() {
  return `<footer class="ftr"><div class="wrap ftr-in"><div><b>Voices Unveiled</b><p>270 North Ave., Suite 811<br>New Rochelle, NY 10801</p></div>
    <div><p>Voices Unveiled / Café de la Culture Inc. is a 501(c)(3) non-profit (EIN 99-0810138). Donations are tax-deductible in the US.</p><p class="cp">© 2024 Café de la Culture</p></div></div></footer>`;
}

/* ---------- views ---------- */
const AT = new URLSearchParams(location.search).get('at');
if (EMBED && AT) document.documentElement.classList.add('embed-sec');
function scrollAt() {
  if (!EMBED || !AT) return;
  const el = document.querySelector(`[data-sec="${AT}"]`);
  if (!el) return;
  const go = () => window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 40);
  go(); setTimeout(go, 400); setTimeout(go, 1400);
}
function site(n, p, force) {
  const { d, cw } = SITES[n - 1], fx = SITE_FIX[n], c = fx === 'dark' ? { ...d.c, dk: 1, edge: d.c.edge === 'none' ? 'curve' : d.c.edge } : d.c;
  const cls = ['site', 'd' + d.id, cw ? 'cw' + cw : '', fx ? 'fx-' + fx : '', 'h-' + c.hdr, c.ov ? 'ov' : '', 'p-' + p].join(' ');
  $('#app').innerHTML = `<div class="${cls}">${header(n, p)}<main>${hero(p, c, n)}${body(p, c)}${cta(c)}${news()}</main>${footer()}
    ${c.sticky ? `<a class="float" href="${DONATE}" target="_blank" rel="noopener">Donate now →</a>` : ''}</div>`;
  document.title = `${String(n).padStart(2, '0')} ${d.n} · ${CW_NAMES[cw]} · ${NAV[p]} — Voices Unveiled`;
  window.scrollTo(0, 0);
  toolbar(n, p);
  scrollAt();
}

const PARTS = [
  { id: 'mv', t: 'Mission & vision', p: 'mission' },
  { id: 'what', t: 'What we do', p: 'mission' },
  { id: 'support', t: 'Support our students', p: 'mission' },
  { id: 'guests', t: 'Meet our guests', p: 'speakers' },
  { id: 'speaker', t: 'A guest speaker', p: 'speakers' },
  { id: 'stories', t: 'Latest stories', p: 'blog' }
];
const frame = (src, title) => `<iframe data-src="${src}" tabindex="-1" title="${title}"></iframe>`;
function card({ d, cw }, n, part, num) {
  const page = part ? part.p : 'mission';
  return `<article class="gcard"><a class="shot" href="${href(n, page)}">${frame(`index.html?embed=1${part ? '&at=' + part.id : ''}#/${n}/${page}`, d.n)}</a>
    <div class="gb"><h2><span>${String(num || n).padStart(2, '0')}</span> ${d.n}${num ? `<em>site ${n}</em>` : ''}</h2><p class="cwn">${CW_NAMES[cw]}</p>${part ? '' : `<p>${d.t}</p><div class="gl">${PAGES.map(k => `<a href="${href(n, k)}">${NAV[k]}</a>`).join('')}</div>`}</div></article>`;
}
function heroView(n, p) {
  const x = hById(n), c = { ...x.lay.c, dk: x.pal.dk };
  $('#app').innerHTML = `<div class="site hz${x.pal.wh ? ' wh' : ''}${x.pal.hlk ? ' k-' + x.pal.hlk : ''}" style="${hzStyle(x)}">${header(n, p).replace(/href="#\/(\d+)\/(\w+)"/g, (m, a, b) => `href="#/h/${n}/${b}"`)}<main>${hero(p, c, n)}
    <section class="hz-cap"><b>H${String(n).padStart(2, '0')}</b> ${x.pal.n} · ${x.lay.n} · ${NAV[p]}</section></main></div>`;
  $('#app').querySelectorAll('.hero .actions a.ghost[href^="#/"]').forEach(a => { a.setAttribute('href', `#/h/${n}/${p === 'blog' ? 'mission' : 'speakers'}`); });
  document.title = `H${String(n).padStart(2, '0')} ${x.pal.n} · ${x.lay.n} — Voices Unveiled`;
  window.scrollTo(0, 0);
  if (EMBED) { $('#tb').style.display = 'none'; return; }
  $('#tb').style.display = '';
  $('#tb').innerHTML = `<a href="#/gallery/${lastPart}" class="g">All</a><button data-go="-1" aria-label="Previous">←</button>
    <select aria-label="Hero">${HZ.map(y => `<option value="${y.id}" ${y.id === n ? 'selected' : ''}>H${String(y.id).padStart(2, '0')} · ${y.lay.n} — ${y.pal.n}</option>`).join('')}</select>
    <button data-go="1" aria-label="Next">→</button><span class="sep"></span>
    ${PAGES.map(k => `<a href="#/h/${n}/${k}" class="${k === p ? 'on' : ''}">${NAV[k]}</a>`).join('')}`;
}
const hcurr = () => {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  const id = parseInt(h[1], 10);
  return [hById(id) ? id : HZ[0].id, PAGES.includes(h[2]) ? h[2] : 'mission'];
};

function hcard(x, n, num) {
  const id = 'H' + String(n).padStart(2, '0');
  return `<article class="gcard"><a class="shot" href="#/h/${n}/mission">${frame(`index.html?embed=1#/h/${n}/mission`, id)}</a>
    <div class="gb"><h2><span>${num ? String(num).padStart(2, '0') : id}</span> ${x.lay.n}${num ? `<em>${id}</em>` : ''}</h2><p class="cwn">${x.pal.n}</p><div class="gl">${PAGES.map(k => `<a href="#/h/${n}/${k}">${NAV[k]}</a>`).join('')}</div></div></article>`;
}
/* the gallery is split into one page per part: #/gallery/covers, #/gallery/mv, #/gallery/what, ... */
const GPARTS = [{ id: 'covers', t: 'Cover pages' }, ...PARTS];
/* parts removed from the menu; the others keep their numbers */
const gpNum = id => id === 'final' ? 20 : GPARTS.filter(x => !GP_GONE.has(x.id)).findIndex(x => x.id === id) + 1;
const GP_GONE = new Set(['mv', 'what', 'support', 'guests', 'speaker', 'stories', 'pg-reviews']);
/* design ids (D[].id): which designs appear in a part. Part 5 keeps only the structures you approved; part 7 drops the ones you disliked. */
/* one design per distinct structure. Found by measuring each section on all designs (layout type, columns/rows, flush vs spaced, square vs rounded, image shape, rail vs static) and merging everything that measures the same. Colors, shadows and small radius differences do not count.
   Examples of merged groups: stories: Lumière = Azur = Don d'abord = Voile = Pastel = Ondes = Électrique = Panorama = Triptyque; Mosaïque = Impact = Affiche = Bento; Face à face = Perspective. */
const PART_KEEP = {
  mv: new Set([1, 12]),
  what: new Set([1, 12, 16]),
  support: new Set([1, 2, 9]),
  guests: new Set([1, 12, 13]),
  speaker: new Set([1]),
  stories: new Set([1, 3, 12, 16, 22])
};
const PART_HIDE = { stories: new Set([2, 13, 14, 21, 38]) };
/* parts 2-7 show one site per design (its first colorway): the point is to compare shapes and structures, colors get adapted later */
const partSites = id => SITES.filter(x => (x.cw === 0 || x.cw === 1) && (!PART_KEEP[id] || PART_KEEP[id].has(x.d.id)) && !(PART_HIDE[id] && PART_HIDE[id].has(x.d.id)));
let lastPart = 'covers';
try { lastPart = sessionStorage.getItem('gp') || 'covers'; } catch (e) {}
function gallery(pid) {
  pid = 'final'; /* the only gallery page kept */
  const gi = Math.max(0, GPARTS.findIndex(x => x.id === pid));
  const gp = GPARTS[gi];
  lastPart = gp.id;
  try { sessionStorage.setItem('gp', gp.id); } catch (e) {}
  document.title = `${gpNum(gp.id)} · ${gp.t} — Voices Unveiled design proposals`;
  if (gp.id === 'final') {
    document.title = 'Design Proposals';
    $('#app').innerHTML = `<div class="gal gal-final">${finalPage()}</div>`;
    { let y = 0; try { y = +sessionStorage.getItem('finY') || 0; sessionStorage.removeItem('finY'); } catch (e) {} window.scrollTo(0, y); } $('#tb').innerHTML = ''; $('#tb').style.display = 'none'; finRenumber(); fitShots(); lazyFrames(); finNavInit();
    return;
  }
  window.scrollTo(0, 0);
  $('#tb').innerHTML = '';
  $('#tb').style.display = 'none';
  fitShots();
  lazyFrames();
}
let frameIO;
function lazyFrames() {
  if (frameIO) frameIO.disconnect();
  frameIO = new IntersectionObserver(es => es.forEach(e => {
    const f = e.target;
    if (e.isIntersecting) { if (!f.getAttribute('src')) f.src = f.dataset.src; }
    else if (f.getAttribute('src')) f.removeAttribute('src');
  }), { rootMargin: '900px 0px' });
  document.querySelectorAll('.shot iframe').forEach(f => frameIO.observe(f));
}
function fitShots() {
  document.querySelectorAll('.shot').forEach(s => { s.firstElementChild.style.transform = `scale(${s.clientWidth / 1280})`; });
}

function toolbar(n, p) {
  if (EMBED) { $('#tb').style.display = 'none'; return; }
  $('#tb').style.display = '';
  const opt = (x, i) => `<option value="${i + 1}" ${i + 1 === n ? 'selected' : ''}>${String(i + 1).padStart(2, '0')} · ${x.d.n} — ${CW_NAMES[x.cw]}</option>`;
  $('#tb').innerHTML = `<a href="#/gallery/${lastPart}" class="g">All sites</a><button data-go="-1" aria-label="Previous">←</button>
    <select aria-label="Site">${SITES.map(opt).join('')}</select>
    <button data-go="1" aria-label="Next">→</button><span class="sep"></span>
    ${PAGES.map(k => `<a href="${href(n, k)}" class="${k === p ? 'on' : ''}">${NAV[k]}</a>`).join('')}`;
}

const curr = () => {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  const id = parseInt(h[0], 10);
  const f = parseInt(h[2], 10);
  return [IDS.includes(id) ? id : IDS[0], PAGES.includes(h[1]) ? h[1] : 'mission', 0];
};
const step = (n, k) => IDS[(IDS.indexOf(n) + k + IDS.length) % IDS.length];
/* cover variants asked for in the design proposals: ?bg=terra|white, ?edge=flat, ?hl=terra (the highlighted word in deep terracotta) */
function applyVariants() {
  const q = new URLSearchParams(location.search), s = document.querySelector('.site');
  if (!s) return;
  const bg = q.get('bg');
  if (bg === 'terra' || bg === 'white') s.classList.add('bg-' + bg);
  if (q.get('edge') === 'flat') s.classList.add('edge-flat');
  if (q.get('hl') === 'terra') s.classList.add('hl-terra');
  if (q.get('brand') === 'warm') s.classList.add('brand-warm');
  if (q.get('stat') === 'small') s.classList.add('stat-small');
  if (q.get('photo') === 'wa' && typeof PH !== 'undefined' && PH.wa) { const im = s.querySelector('.v-banner .cover img'); if (im) { im.src = PH.wa.u; im.style.objectPosition = '50% 30%'; im.style.visibility = 'visible'; } }
}
function route() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  if (!h[0] || h[0] === 'cv') { if (typeof cvPage === 'function') cvPage(); return; }
  if (h[0] === 'curriculum') { if (typeof curriculumPage === 'function') curriculumPage(); return; }
  if (h[0] === 'sites') { if (typeof sitesPage === 'function') sitesPage(); return; }
  if (h[0] === 'gallery') return gallery(h[1] || lastPart);
  if (h[0] === 'section') { if (typeof sectionPage === 'function') sectionPage(h[1]); return; }
  if (h[0] === 'h') { const [n, p] = hcurr(); heroView(n, p); applyVariants(); return; }
  if (h[0] === 'p') { if (typeof pgView === 'function') pgView(...pcurr()); return; }
  const [n, p, f] = curr();
  site(n, p, f);
  applyVariants();
}

document.addEventListener('click', e => {
  const chip = e.target.closest('.chip[data-v]');
  if (chip) { const box = chip.closest('.amt'); box.querySelectorAll('.chip').forEach(x => x.classList.remove('on')); chip.classList.add('on'); box.querySelector('.give b').textContent = '$' + chip.dataset.v; }
  const go = e.target.closest('[data-go]');
  if (go && /^#\/p\//.test(location.hash)) { const [id, L] = pcurr(); location.hash = `#/p/${id}/${pgStep(id, L, +go.dataset.go)}`; }
  else if (go && /^#\/h\//.test(location.hash)) { const [n, p] = hcurr(); location.hash = `#/h/${hStep(n, +go.dataset.go)}/${p}`; }
  else if (go) { const [n, p, f] = curr(); location.hash = href(step(n, +go.dataset.go), p) + (f ? '/' + f : ''); }
});
document.addEventListener('change', e => {
  const [n, p, f] = curr();
  if (e.target.matches('#tb select') && /^#\/p\//.test(location.hash)) location.hash = `#/p/${pcurr()[0]}/${e.target.value}`;
  else if (e.target.matches('#tb select') && /^#\/h\//.test(location.hash)) location.hash = `#/h/${e.target.value}/${hcurr()[1]}`;
  else if (e.target.matches('#tb select')) location.hash = href(e.target.value, p) + (f ? '/' + f : '');
});
document.addEventListener('keydown', e => {
  if (EMBED || /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
  if (/^#\/p\//.test(location.hash) && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { const [id, L] = pcurr(); location.hash = `#/p/${id}/${pgStep(id, L, e.key === 'ArrowRight' ? 1 : -1)}`; return; }
  if (/^#\/h\//.test(location.hash) && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) { const [n, p] = hcurr(); location.hash = `#/h/${hStep(n, e.key === 'ArrowRight' ? 1 : -1)}/${p}`; return; }
  if (!/^#\/\d/.test(location.hash)) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const [n, p, f] = curr(); location.hash = href(step(n, e.key === 'ArrowRight' ? 1 : -1), p) + (f ? '/' + f : ''); }
});
window.addEventListener('hashchange', route);
window.addEventListener('resize', () => document.querySelector('.gal') && fitShots());
/* first render is done by meta.js once every script is loaded */

/* auto-refresh: if the files were edited since this tab loaded, reload so clicks never show an old version */
if (!EMBED) {
  let ver;
  const check = () => fetch('__v', { cache: 'no-store' }).then(r => r.text()).then(v => { if (ver && v !== ver) location.reload(); ver = v; }).catch(() => {});
  check();
  window.addEventListener('hashchange', check);
  window.addEventListener('focus', check);
}
