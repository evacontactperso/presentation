/* Main section of each sub-page, in 20 hand-designed templates.
   Every template is its own design (own structure, own shapes), fed by one generic content model.
   Photos come from the live site; some extra items are examples added only to show the design effect. */

const up = f => U + f;
const mkPH = (f, w, h, fy) => ({ u: up(f), w, h, fy });
const PH = {
  cara: { ...mkPH('2024/03/PHOTO-2024-03-12-14-18-58.jpg', 322, 460, .4), fx: .5 },
  pic1: { ...mkPH('2024/07/Picture1.jpg', 486, 759, .34), fx: .56 },
  pic2: mkPH('2024/07/Picture2.jpg', 624, 416, .3),
  head3: mkPH('2024/08/header-image-services-1024x512.jpg', 1024, 512, .5),
  rum: mkPH('2024/08/pexels-rumeysa-52733166-19342306-1-683x1024.jpg', 683, 1024, .3),
  eye: mkPH('2024/08/pexels-photo-16069403-1.webp', 600, 600, .45),
  p6: mkPH('2024/07/Picture6.jpg', 360, 539, .38),
  p1b: mkPH('2025/10/Picture-1.jpeg', 1280, 853, .5),
  p3: mkPH('2025/10/Picture-3.jpeg', 1280, 853, .4),
  grp: mkPH('2024/07/Afghan-group-1024x683.jpg', 1024, 683, .5),
  wa: mkPH('2026/01/WhatsApp-Image-2026-01-28-at-13.59.11-1024x682.jpeg', 1024, 682, .42),
  don: mkPH('2025/09/2c5cdaad-fb43-4931-9364-2f8164743d3a.jpg', 1600, 1066, .4),
  dwr: mkPH('2025/08/DonorCampaignWomanWriting.jpeg', 1066, 1600, .3),
  s1: mkPH('2025/07/1.jpg', 1024, 683, .42), s2: mkPH('2025/07/2.jpg', 1024, 683, .38), s3: mkPH('2025/07/3.jpg', 1024, 683, .45),
  s4: mkPH('2025/07/4.jpg', 1024, 683, .42), s5: mkPH('2025/07/5.jpg', 1024, 683, .42), s6: mkPH('2025/07/6.jpg', 1024, 683, .42),
  s7: mkPH('2025/07/7.jpg', 1024, 683, .4), s8: mkPH('2025/07/8.jpg', 1024, 683, .42),
  s9: mkPH('2025/07/Website-Student-Stories-Images.jpg', 1024, 683, .4), s10: mkPH('2025/08/Featured-Students-Website.png', 600, 400, .4),
  lyla: { u: SPEAKERS[0].img, w: 1707, h: 2560, fy: .3 }, zainab: { u: SPEAKERS[1].img, w: 1600, h: 2000, fy: .3 },
  b0: { u: U + POSTS[0].i + '.' + POSTS[0].e, w: 1024, h: 683, fy: .45 }, b1: { u: U + POSTS[1].i + '.' + POSTS[1].e, w: 1024, h: 683, fy: .45 },
  b2: { u: U + POSTS[2].i + '.' + POSTS[2].e, w: 1024, h: 683, fy: .45 }, b3: { u: U + POSTS[3].i + '.' + POSTS[3].e, w: 1024, h: 683, fy: .45 }
};
const GEN = ['s1', 's3', 's5', 's6', 's8', 's4', 's7'];   /* generic stock portraits used where a template needs more photos than the page has */

/* ---------- generic content model per page ---------- */
const it = (t, p, o = {}) => ({ t, p, ...o });
const PG_M = {
  mission: { e: 'Our mission', h: 'Education, care and community for Afghan women and girls.', lead: 'Voices Unveiled offers free online education, mental health support, leadership development and a community that stands beside Afghan women and girls.', btn: 'Support our students', kind: 'cards', chip: 'Free for every student',
    body: ['We began in February 2023, after Afghan refugee women asked for free online education on empowerment and feminism. Since then we have widened our reach to women inside Afghanistan, adding mental health support and community connections to the classroom.'],
    items: [it('Our mission', 'We offer Afghan women free online education, mental health support, leadership development and community building.'), it('Our vision', 'A world where silenced people are heard, empathy leads to action and compassionate leaders drive change.'), it('Free online education', 'Empowerment and leadership courses, free for every Afghan woman and girl who wants to learn.'), it('Mental health support', 'A safe space to be heard, with care that helps women and girls carry what they live through.'), it('Leadership development', 'Skills and confidence to speak up, lead and pass knowledge on to others.'), it('Community building', 'A global circle of women, inside and outside Afghanistan, who stand with each other.')],
    foot: { stats: [['Feb 2023', 'Founded'], ['100% free', 'For every student'], ['501(c)(3)', 'US non-profit'], ['250+', 'Students since 2023']] }, ph: ['pic1', 'p1b', 'p3', 's2', 's5'] },
  founder: { e: 'Our founder', h: 'Meet Cara Cruickshank.', lead: 'Educator, community organizer and women’s advocate. Founder and host of Café de la Culture.', kind: 'cards', chip: 'Founder & Program Director',
    body: ['Cara Cruickshank has lived in France, Brazil and the U.S. She founded Café de la Culture, a nonprofit that facilitates cultural exchange and intersectional community conversations on important topics.', 'In February 2023, she launched her Self-Empowerment and Feminism course for Afghan women with the Afghan Youth Leaders Assembly, later partnering with Generations of Change.'],
    items: [it('Theater for social change', 'Writer, director and producer of “On the Subject of Girls”, “The Alchemy of Imperfection” and “The Halloween Journey”.'), it('Workshops worldwide', 'Empowerment, diversity and gender studies courses in the U.S., Brazil, Turkey and France.'), it('Panels and talks', 'Conference panels on #MeToo, BLM, Indigenous Rights and the Refugee Crisis; talks at Bard College and the University of Michigan.'), it('Global Village Day Camp', 'An empowerment and holistic summer camp for refugee and immigrant youth in Aurora, Colorado (2022).'), it('Café de la Culture', 'Founder and host of a nonprofit for cultural exchange and community conversations.'), it('February 2023', 'Launch of the Self-Empowerment and Feminism course for Afghan women.')],
    foot: { quote: ['Even though you have not seen our faces, you are working very hard to amplify our voices.', 'K.N., age 20'] }, ph: ['cara', 'pic2', 'p3', 's6', 's2'], leadPhoto: true },
  course: { e: 'Empowerment course', h: 'The Self-Empowerment Course', lead: 'In a country where education is banned and feminism is illegal, our free 3-month course offers women a lifeline.', btn: 'Sponsor a student', kind: 'amounts', chip: '3 months · free',
    body: ['Students risk their lives to attend our underground online sessions, three times a week. Our course reaches students aged 15 to 40 across Afghanistan.'],
    items: [it('$300', 'Full scholarship for 1 trimester'), it('$900', 'Full scholarship for one year'), it('$1,500', 'Full scholarship for one year, plus food and medical funds')],
    foot: { stats: [['3 months', 'Intensive course'], ['3× a week', 'Underground online sessions'], ['15–40', 'Age of our students'], ['Free', 'For every student']] }, ph: ['head3', 'rum', 'p1b', 's4', 's7'] },
  guests: { e: 'Distinguished guest speakers', h: 'Voices that open doors.', lead: 'Global leaders, entrepreneurs, practitioners, activists and artists share their journeys with our students.', btn: 'Offer to speak', kind: 'profiles', chip: 'Guest speakers',
    items: [it('Dr. Lyla June Johnson', 'Indigenous musician, scholar, scientist, public speaker and community organizer.', { s: 'Musician · Scholar', img: 'lyla' }), it('Zainab Salbi', 'Founder of Women for Women International, co-founder of Daughters for Earth and best-selling author.', { s: 'Founder · Author', img: 'zainab' }), it('Amina Rahimi', 'Shares spoken-word and storytelling workshops with our students.', { s: 'Poet · Educator', img: 's2' }), it('Dr. Sara Whitfield', 'Explains how stress and trauma work, with simple tools for calm.', { s: 'Psychologist', img: 's6' }), it('Leila Hakimi', 'Teaches reporting, interviewing and how to tell a story that matters.', { s: 'Journalist', img: 's4' }), it('Maria Santos', 'Walks students through their rights and how to defend them.', { s: 'Human rights lawyer', img: 's8' })],
    foot: { quote: ['I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them.', 'A guest speaker'] }, ph: ['lyla', 'zainab', 'grp', 's2', 's6'], example: 4 },
  holistic: { e: 'Holistic and integrative education', h: 'Healing, learning and community.', lead: 'Every woman and girl in Afghanistan deserves not just education, but the emotional strength, healing and community support to truly thrive.', btn: 'Become a volunteer', kind: 'cards', chip: 'Trauma-informed',
    items: [it('Mental health support', 'A safe space to share thoughts and experiences without fear of judgment, for women facing isolation, violence and trauma.'), it('Academic support', 'We help students break through barriers, set clear goals and connect with broader educational pathways.'), it('Elective courses', 'Taught by volunteer instructors from around the world, to develop skills and inspire creativity.'), it('Functional skills', 'English (levels 1–3), data analytics and computer programming.'), it('Humanities', 'Philosophy and physics, creative writing, The Life of Ideas, art-making.'), it('Wellness', 'Meditation and stress management, with tools for a personal safe space.')],
    foot: { quote: ['I felt like I was a lost puzzle piece, and this course helped me find where I belong.', 'Viana, age 18'] }, ph: ['s2', 's4', 's7', 's6', 's1'] },
  emergency: { e: 'Emergency assistance', h: 'Food and care for our students.', lead: 'True self-empowerment includes health. We raise funds to meet the critical food and medical needs of our students.', btn: 'Give now', kind: 'amounts', chip: 'No gift is too small',
    body: ['Many families cannot provide adequate nourishment, leading to preventable health issues. By contributing, you help our students not only survive but thrive.'],
    items: [it('$100', 'Groceries for a family of 6 for one month'), it('$200', 'Emergency medicine and health needs for one month'), it('$400', 'Health, food and essential vitamins for one month')],
    foot: { quote: ['Being with my Afghan sisters gives me strength, and having a supportive person like you with us is the greatest blessing.', 'R.Q., age 20'] }, ph: ['eye', 'p6', 'p1b', 's3', 's5'] },
  impact: { e: 'Impact report', h: 'What your support has built.', lead: 'Read our annual impact reports and see the numbers behind the stories.', btn: 'Download the report', kind: 'stats', chip: '2023 – today',
    items: [it('250+', 'Students who learned, healed and reimagined their futures'), it('13', 'Elective courses in tech, science, humanities and arts'), it('6', 'Rounds of Self-Empowerment programs'), it('20+', 'Families given mental health support'), it('100%', 'Of graduates report transformed lives')],
    foot: { stats: [['2025', 'Annual Impact Report'], ['2024', 'Annual Impact Report']] }, ph: ['grp', 'wa', 'p3', 's2', 's8'] },
  stories: { e: 'Student stories', h: 'In their own words.', lead: 'Meet the Afghan women and girls who learn with Voices Unveiled: their dreams, their courage.', btn: 'Donate now', kind: 'profiles', chip: 'Student stories',
    items: [it('Arezou', 'Before the Taliban returned I graduated from medical school. Now I am learning new skills online…', { s: 'Age 27 · Afghanistan', img: 's1' }), it('Viana', 'I study Philosophy of Physics and Advanced English. My dream is to become a diplomat.', { s: 'Age 18 · Pakistan', img: 's2' }), it('Esther', 'I am the youngest student. I read, paint, play cricket and just published my first book!', { s: 'Age 13 · Afghanistan', img: 's3' }), it('Ladan', 'I graduated in Pharmacy. I love painting, teaching and nature, and I have three long-term goals.', { s: 'Age 27 · Afghanistan', img: 's4' }), it('Darakhshan', 'Singing lifts my spirits, and I love photography: capturing moments and making them come alive.', { s: 'Age 18 · Afghanistan', img: 's5' }), it('Shiva', 'I study painting and journaling online. I want to become more disciplined, powerful and smart.', { s: 'Age 19 · Afghanistan', img: 's6' }), it('Laleh', 'I dream of becoming a writer and a university lecturer. I study English and love teaching.', { s: 'Age 24 · Afghanistan', img: 's7' }), it('Azadeh', 'I study English, law and political science. My goal is a scholarship overseas to pursue writing.', { s: 'Age 24 · Afghanistan', img: 's8' })],
    ph: ['s9', 's10', 's1', 's5', 's8'] },
  reviews: { e: 'Student testimonials', h: 'What students say.', lead: 'Words from the women and girls who have taken our courses.', btn: 'Donate now', kind: 'quotes', chip: 'In their words',
    items: [it('B.S.', 'Afghan women need your kind of support so that we can find ourselves, even while living through the worst possible kind of crisis.', { s: 'age 18' }), it('R.A.', 'After taking this course, I know that I am free, I am strong, I am a woman.', { s: 'age 22' }), it('K.N.', 'Even though you have not seen our faces, you are working very hard to amplify our voices.', { s: 'age 20' }), it('A.M.', 'I saw myself among you. I felt like I was no longer in Afghanistan. I felt that I was free.', { s: 'age 26' }), it('N.H.', 'It melted my heart to hear our own words spoken out loud in public.', { s: 'age 19' }), it('D.Y.', 'I was able to ask the questions in my heart for the first time, without any fear.', { s: 'student' }), it('F.S.', 'Most of all, I learned to have self-confidence and defend my rights and those of my peers.', { s: 'age 24' }), it('N.S.', 'Knowing you is the best thing that has happened to my life this year.', { s: 'student' })],
    ph: ['grp', 'p1b', 'p3', 's2', 's5'] },
  supporters: { e: 'Supporter testimonials', h: 'Why they give.', lead: 'What donors, partners and friends say about Voices Unveiled.', btn: 'Join them', kind: 'quotes', chip: 'Our supporters',
    items: [it('John Boylan', 'Voices Unveiled is a hugely important program. It does so much for the women it serves.', { s: 'Google review' }), it('Mary Faddick', 'Afghan girls and young women are being heard and seen for who they are, who they dream of becoming.', { s: 'Google review' }), it('Heidi Henkel', 'Cutting edge work with Afghan women and girls. We are proud supporters!', { s: 'Broomfield Resettlement Task Force' }), it('Carol Matlack', 'A fantastic job of providing education and hope to Afghan women. I am proud to be a supporter!', { s: 'Google review' }), it('Coral Altamirano', 'An organization that puts its heart into its goals. I am a witness to the incredible impact.', { s: 'Google review' }), it('Dr. Paul Kordis', 'Crucial physical, intellectual and emotional support to women suffering under the worst gender apartheid in history.', { s: 'Google review' }), it('Helen Levy', 'A vital life line in these dark times for Afghan women. Their battle is also ours.', { s: 'Google review' }), it('Ruth Druart', 'It’s great to know exactly where your money goes.', { s: 'Google review' })],
    ph: ['s4', 's9', 's3', 's7', 's8'] },
  donate: { e: 'Donate now', h: 'This is our moment to choose hope.', lead: 'We must raise $50,000 to keep our programs alive. Your donation today protects their dignity, their education and their dreams.', btn: 'Give now', kind: 'amounts', chip: '100% secure · tax-deductible',
    items: [it('$25', 'Internet access for one student for one semester'), it('$50', 'Course materials and internet for one student'), it('$100', 'Emergency intervention'), it('$300', 'Covers one student’s trimester of transformation'), it('$600', 'Funds one trimester for two students'), it('$1,000', 'One year of education, coaching, counselling and support')],
    foot: { stats: [['250+', 'Students supported'], ['100%', 'Report transformed lives'], ['13', 'Elective courses'], ['6', 'Empowerment rounds']] }, ph: ['don', 'b2', 's5', 'p3', 's1'] },
  monthly: { e: 'Become a monthly lifeline', h: 'Empower more women with us.', lead: 'Join the global community that has supported 250 students and their families since 2023.', btn: 'Give monthly', kind: 'amounts', chip: 'Month after month',
    body: ['Your ongoing support fuels education, safety and opportunity for Afghan women and girls. Reliable giving means we can act the moment help is needed.'],
    items: [it('$20', 'Hope Sustainer: supports internet access and core materials', { s: 'per month' }), it('$50', 'Freedom Builder: powers consistent education', { s: 'per month' }), it('$100', 'Life Changer: funds education and major emergency interventions', { s: 'per month' }), it('$200', 'Mission Champion: fuels expansion and innovation across programs', { s: 'per month' })],
    foot: { stats: [['Report', 'Annual impact report'], ['Letter', 'A personal letter from a student'], ['Events', 'Virtual events with our students']] }, ph: ['dwr', 'don', 'p3', 's2', 's7'] },
  volunteer: { e: 'Volunteer', h: 'Share your skills, change a life.', lead: 'We are a grassroots organization built on volunteer work and heart. Here are the ways to join us.', btn: 'Contact us', kind: 'cards', chip: 'Join our team',
    items: [it('Guest speaker', 'Share your expertise in our Self-Empowerment Course: mental health, women’s health, the arts…'), it('Workshop leader', 'Work with a small group of students once a week or twice a month.'), it('Support services', 'Offer trauma counseling, personal coaching sessions or lead a support group.'), it('Specialized teams', 'Join our marketing, fundraising or administration volunteers.'), it('Custom volunteering', 'Have other skills you want to lend? We’re open to your unique contributions!'), it('English tutor', 'Conversational English and test-preparation tutors are always needed.')],
    foot: { quote: ['I was quite nervous when beginning teaching English to these students because I didn’t know if I would be able to connect with them…', 'Bella, volunteer, Melbourne'] }, ph: ['wa', 'grp', 's2', 's10', 's6'] },
  contact: { e: 'Contact', h: 'Get in touch.', lead: 'Prefer email? Reach us at hello@voicesunveiled.org. We read every message.', kind: 'cards', chip: 'We reply to every message',
    items: [it('Email', 'hello@voicesunveiled.org'), it('Address', '270 North Ave., Suite 811, New Rochelle, NY 10801'), it('Follow us', 'Facebook · Instagram · LinkedIn'), it('Press and media', 'For interviews and images, write to our team.'), it('Partnerships', 'Schools, NGOs and companies: let’s build something together.'), it('Volunteering', 'Want to teach, speak or help? Tell us your skills.')],
    extra: '<form class="cform" onsubmit="return false"><label>Name<input type="text"></label><label>Email<input type="text"></label><label>Message<textarea rows="3"></textarea></label><button class="btn primary">Send message</button></form>', ph: ['grp', 'p6', 'p1b', 's2', 's5'] },
  work: { e: 'Work with us', h: 'Use your skills for women in crisis.', lead: 'We’re looking for a part-time Marketing Director to lead communications and brand strategy.', btn: 'Apply now', kind: 'cards', chip: 'Part-time · remote',
    body: ['You’ll develop marketing strategies that grow our reach, strengthen supporter engagement and elevate the stories of our students and programs with integrity and care.'],
    items: [it('Experience', 'At least 3 years in marketing or communications.'), it('Mission-driven', 'Experience in a nonprofit or mission-driven organisation.'), it('Digital', 'Social media, content planning, WordPress and analytics.'), it('Design', 'Graphic design tools such as Canva.'), it('Writing', 'Excellent content writing, storytelling and brand voice.'), it('Autonomy', 'Works independently and manages several deadlines.'), it('Fundraising', 'Digital fundraising, Mailchimp and donor communications.'), it('Context', 'Understanding of human rights, education or development.')],
    ph: ['pic2', 'p6', 'eye', 's3', 's6'] },
  blog: { e: 'Our blog', h: 'Stories from the classroom and beyond.', lead: 'Poems, testimonies and reflections from Afghan women and girls, and from the people who learn alongside them.', btn: 'Subscribe', kind: 'profiles', chip: 'Latest stories',
    items: [...POSTS.map((x, i) => it(x.t, x.x, { s: x.tag, img: 'b' + i })), it('Voices from the classroom, part 2', 'More reflections from students about what they learned this term.', { s: 'Student voices', img: 's3' }), it('A poem for the new year', 'A student poem about hope, patience and starting again.', { s: 'Poetry', img: 's7' })],
    ph: ['b0', 'b1', 'b2', 'b3', 's3'] }
};

/* ---------- helpers ---------- */
const sxEsc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const SHAPE_AR = { arch: .75, squircle: 1, circle: 1, blob: 1, pill: .56, leaf: .8, ticket: .8, rect: .75, rect43: 1.33, rect11: 1, wide: 2.4, wide2: 2, banner: 3 };
function eyeY(p, ar) { const ia = p.w / p.h, hv = Math.min(1, ia / ar); if (hv >= 1) return 50; const st = Math.max(0, Math.min(1 - hv, p.fy - hv / 2)); return Math.round(st / (1 - hv) * 100); }
const pf = (key, shape, cls = '') => { const p = PH[key] || PH.s1; return `<figure class="pf pf-${shape} ${cls}" data-k="${PH[key] ? key : 's1'}"><img src="${p.u}" alt="" loading="lazy" style="object-position:50% ${eyeY(p, SHAPE_AR[shape] || 1)}%"></figure>`; };
const pfFill = key => { const p = PH[key]; return `<figure class="pf pf-fill" data-k="${key}"><img src="${p.u}" alt="" loading="lazy" style="object-position:50% ${Math.round(p.fy * 100)}%"></figure>`; };
const hl = h => sxEsc(h).replace(/(\S+)$/, '<em>$1</em>');
const hdr = (m, o = {}) => `<p class="eyebrow">${sxEsc(m.e)}</p><h2 class="sttl">${hl(m.h)}</h2>${o.lead === false ? '' : `<p class="lead">${sxEsc(m.lead)}</p>`}${o.body && m.body ? `<div class="bodytxt">${m.body.map(x => `<p>${sxEsc(x)}</p>`).join('')}</div>` : ''}${m.extra && o.extra !== false ? m.extra : ''}${m.btn && o.btn !== false && o.btn !== 0 ? `<a class="btn primary" href="${DONATE}" target="_blank" rel="noopener">${sxEsc(m.btn)}</a>` : ''}`;
const pool = m => m.leadPhoto ? [...m.ph, ...GEN] : [...m.ph.slice(1), ...GEN];
function itemHTML(m, x, i, o = {}) {
  const k = m.kind;
  let body;
  if (k === 'quotes') body = `<blockquote>“${sxEsc(x.p)}”</blockquote><div class="by"><b>${sxEsc(x.t)}</b>${x.s ? `<small>${sxEsc(x.s)}</small>` : ''}</div>`;
  else if (k === 'stats' || k === 'amounts') body = `<div class="n">${sxEsc(x.t)}</div>${x.s ? `<small class="meta">${sxEsc(x.s)}</small>` : ''}<p>${sxEsc(x.p)}</p>`;
  else body = `<h3>${sxEsc(x.t)}</h3>${x.s ? `<small class="meta">${sxEsc(x.s)}</small>` : ''}${x.p ? `<p>${sxEsc(x.p)}</p>` : ''}`;
  const key = x.img || pool(m)[i % pool(m).length];
  const media = o.photo ? pf(key, o.photo) : (k === 'profiles' && x.img && !o.noav ? pf(x.img, 'circle', 'av') : '');
  return `<article class="it k-${k}">${media}<span class="ix">${String(i + 1).padStart(2, '0')}</span><div class="ib">${body}</div></article>`;
}
const items = (m, n, o) => m.items.slice(0, n).map((x, i) => itemHTML(m, x, i, o)).join('');
const stats = m => m.foot && m.foot.stats ? `<div class="stat-row">${m.foot.stats.map(s => `<div><b>${sxEsc(s[0])}</b><span>${sxEsc(s[1])}</span></div>`).join('')}</div>` : '';
const quoteFoot = m => m.foot && m.foot.quote ? `<figure class="pull"><blockquote>“${sxEsc(m.foot.quote[0])}”</blockquote><figcaption>${sxEsc(m.foot.quote[1])}</figcaption></figure>` : '';
const foot = m => stats(m) || quoteFoot(m);
const chip = m => `<span class="chip-badge">${sxEsc(m.chip || '')}</span>`;

/* ---------- the 20 templates ---------- */
const TPL = [
  { n: 'Arch and three cards', f: m => `<section class="sx t1"><div class="wrap"><div class="t1-top"><div class="t1-txt">${hdr(m, { body: 1 })}</div><div class="t1-ph"><span class="ring"></span>${pf(m.ph[0], 'arch')}${chip(m)}</div></div><div class="t1-grid">${items(m, 3)}</div>${m.items.length > 3 ? `<div class="t1-grid t1-g2">${m.items.slice(3, 6).map((x, i) => itemHTML(m, x, i + 3)).join('')}</div>` : ''}</div></section>` },
  { n: 'Square photo and numbered rows', f: m => `<section class="sx t2"><div class="wrap"><div class="t2-ph"><div class="frame">${pf(m.ph[0], 'rect')}</div>${chip(m)}</div><div class="t2-body">${hdr(m, { btn: 0 })}<div class="t2-rows">${items(m, 5)}</div>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div></section>` },
  { n: 'Soft band, big numbers', f: m => `<section class="sx t3"><div class="wrap"><div class="t3-ph">${pf(m.ph[0], 'squircle')}<span class="dot d1"></span><span class="dot d2"></span></div><div class="t3-body">${hdr(m, { btn: 0 })}<div class="t3-list">${items(m, 4)}</div>${stats(m)}</div></div></section>` },
  { n: 'Slab with stacked cards', f: m => `<section class="sx t4"><div class="wrap"><div class="slab"><div class="t4-side">${hdr(m)}<div class="t4-circ">${pf(m.ph[0], 'circle')}</div></div><div class="t4-stack">${items(m, 5)}</div></div></div></section>` },
  { n: 'Wide photo and big cards', f: m => `<section class="sx t5"><div class="wrap"><div class="slab"><div class="t5-photo">${pf(m.ph[0], 'wide')}${chip(m)}</div><div class="t5-head">${hdr(m, { btn: 0 })}</div><div class="t5-grid">${items(m, 4)}</div></div></div></section>` },
  { n: 'Boxed timeline and photo', f: m => `<section class="sx t6"><div class="wrap"><div class="boxed"><div class="t6-l">${hdr(m, { btn: 0, body: 1 })}<div class="t6-line">${items(m, 5)}</div></div><div class="t6-r">${pf(m.ph[0], 'ticket')}${chip(m)}${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div></div></section>` },
  { n: 'Circle and ring, centered', f: m => `<section class="sx t7"><div class="wrap"><div class="t7-hero"><span class="ring r1"></span><span class="ring r2"></span>${pf(m.ph[0], 'circle', 'big')}${pf(m.ph[1], 'circle', 'sat a')}${pf(m.ph[2], 'circle', 'sat b')}</div><div class="t7-txt">${hdr(m)}</div><div class="t7-grid">${items(m, 6)}</div></div></section>` },
  { n: 'Dark feature, cards rising', f: m => `<section class="sx t8"><div class="t8-dark"><div class="wrap"><div class="t8-in"><div class="t8-t">${hdr(m, { body: 1 })}</div><div class="t8-p">${pf(m.ph[0], 'blob')}</div></div></div></div><div class="wrap"><div class="t8-cards">${items(m, 3)}</div>${m.items.length > 3 ? `<div class="t8-cards t8-c2">${m.items.slice(3, 6).map((x, i) => itemHTML(m, x, i + 3)).join('')}</div>` : ''}</div></section>` },
  { n: 'Half-screen photo', f: m => `<section class="sx t9"><div class="t9-ph">${pfFill(m.ph[0])}${chip(m)}</div><div class="t9-body">${hdr(m, { btn: 0 })}<div class="t9-list">${items(m, 4)}</div>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></section>` },
  { n: 'Bento mosaic with photos', f: m => { const p = pool(m); return `<section class="sx t10"><div class="wrap"><div class="t10-head"><div>${hdr(m, { lead: false, btn: 0 })}</div><div><p class="lead">${sxEsc(m.lead)}</p>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div><div class="t10-grid"><div class="b b-ph tall">${pf(m.ph[0], 'fillshape')}</div><div class="b b-it">${itemHTML(m, m.items[0], 0)}</div><div class="b b-it dk">${itemHTML(m, m.items[1], 1)}</div><div class="b b-ph">${pf(p[0], 'fillshape')}</div><div class="b b-it">${itemHTML(m, m.items[2], 2)}</div><div class="b b-ph wide">${pf(p[1], 'fillshape')}</div><div class="b b-it grad">${itemHTML(m, m.items[3 % m.items.length], 3)}</div><div class="b b-it">${itemHTML(m, m.items[4 % m.items.length], 4)}</div><div class="b b-ph wide">${pf(p[2], 'fillshape')}</div></div></div></section>`; } },
  { n: 'Carousel of photo cards', f: m => `<section class="sx t11"><div class="wrap"><div class="t11-head"><div class="t11-hd">${hdr(m, { btn: 0 })}</div><div class="t11-nav"><span>←</span><span>→</span></div></div></div><div class="t11-rail">${items(m, 7, { photo: 'rect43' })}</div></section>` },
  { n: 'Magazine columns', f: m => `<section class="sx t12"><div class="wrap"><div class="t12-top"><div class="t12-txt"><p class="eyebrow">${sxEsc(m.e)}</p><h2 class="sttl">${hl(m.h)}</h2><div class="t12-cols${m.body ? '' : ' one'}"><p class="lead">${sxEsc(m.lead)}</p>${(m.body || []).map(x => `<p>${sxEsc(x)}</p>`).join('')}</div></div><figure class="t12-fig">${pf(m.ph[0], 'rect')}<figcaption>${sxEsc(m.chip || m.e)}</figcaption></figure></div><div class="t12-notes">${items(m, 3)}</div>${foot(m)}</div></section>` },
  { n: 'Photo with overlapping card', f: m => `<section class="sx t13"><div class="wrap"><div class="t13-photo">${pf(m.ph[0], 'wide2')}${chip(m)}</div><div class="t13-card">${hdr(m, { btn: 0 })}<div class="t13-grid">${items(m, 4)}</div>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div></section>` },
  { n: 'Editorial, sticky heading', f: m => `<section class="sx t14"><div class="wrap"><div class="t14-side">${hdr(m, { body: 1 })}<div class="t14-ph">${pf(m.ph[0], 'squircle')}</div></div><div class="t14-main">${items(m, 6)}</div></div></section>` },
  { n: 'Big numerals and photo strip', f: m => `<section class="sx t15"><div class="wrap"><div class="t15-head">${hdr(m, { btn: 0 })}</div><div class="t15-num">${items(m, 4)}</div><div class="t15-strip">${pf(m.ph[0], 'arch')}${pf(m.ph[1], 'circle')}${pf(m.ph[2], 'squircle')}${pf(m.ph[3], 'squircle')}</div>${m.btn ? `<div class="t15-btn"><a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a></div>` : ''}</div></section>` },
  { n: 'Three tall pillars', f: m => `<section class="sx t16"><div class="wrap"><div class="t16-head">${hdr(m, { btn: 0 })}</div><div class="t16-cols">${items(m, 3, { photo: 'rect' })}</div>${m.btn ? `<div class="t16-btn"><a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a></div>` : ''}</div></section>` },
  { n: 'Polaroid wall', f: m => `<section class="sx t17"><div class="wrap"><div class="t17-head">${hdr(m, { btn: 0 })}</div><div class="t17-wall">${items(m, 6, { photo: 'rect11' })}</div></div></section>` },
  { n: 'Zig-zag storytelling', f: m => `<section class="sx t18"><div class="wrap"><div class="t18-head">${hdr(m, { btn: 0 })}</div><div class="t18-rows">${items(m, 4, { photo: 'squircle' })}</div>${foot(m)}</div></section>` },
  { n: 'Diagonal photo', f: m => `<section class="sx t19"><div class="t19-txt"><div class="in">${hdr(m, { btn: 0, body: 1 })}<ul class="t19-list">${m.items.slice(0, 4).map(x => `<li><b>${sxEsc(x.t)}</b><span>${sxEsc(x.p)}</span></li>`).join('')}</ul>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div><div class="t19-ph">${pfFill(m.ph[0])}${chip(m)}</div></section>` },
  { n: 'Tall pill and accordion', f: m => `<section class="sx t20"><div class="wrap"><div class="t20-ph">${pf(m.ph[0], 'pill')}</div><div class="t20-body">${hdr(m, { btn: 0 })}<div class="t20-acc">${m.items.slice(0, 5).map((x, i) => `<details${i === 0 ? ' open' : ''}><summary><span class="ix">${String(i + 1).padStart(2, '0')}</span>${sxEsc(x.t)}</summary><p>${sxEsc(x.p)}</p></details>`).join('')}</div>${m.btn ? `<a class="btn primary" href="${DONATE}">${sxEsc(m.btn)}</a>` : ''}</div></div></section>` }
];

/* Re-centre every photo on the face after layout, whatever the final box is (tall column, circle, banner...). */
const facePos = (f, v) => v >= 1 ? 50 : Math.round(Math.max(0, Math.min(1, (f - v / 2) / (1 - v))) * 100);
function fitPhotos() {
  document.querySelectorAll('.pf[data-k]').forEach(f => {
    const p = PH[f.dataset.k], img = f.querySelector('img'), w = f.clientWidth, h = f.clientHeight;
    if (!p || !img || !w || !h) return;
    const ca = w / h, ia = p.w / p.h;
    const px = ia > ca ? facePos(p.fx || .5, ca / ia) : 50, py = ia > ca ? 50 : facePos(p.fy, ia / ca);
    img.style.objectPosition = `${px}% ${py}%`;
  });
}
window.addEventListener('resize', () => document.querySelector('.sxp') && fitPhotos());
function sxPage(id, L) { return `<div class="site cw1 pg sxp t${L}-page">${TPL[L - 1].f(PG_M[id])}</div>`; }
/* designs removed from one page only (they stay on the other pages) */
const PG_HIDE = { mission: [2, 3] };
const recipeName = (id, L) => { const r = RC[id][L - 1], F = { plain: 'Plain', slab: 'Slab', band: 'Soft band', boxed: 'Boxed' }, P = { n: 'no photo', l: 'photo left', r: 'photo right', t: 'wide photo', s: '3 photos' }; return `${F[r[0]]}, ${P[r[2][0]]} · ${r[3].map(x => x[1]).join(' + ')}`; };
const tplName = (id, n) => (EXTRA[id] && EXTRA[id][n]) ? EXTRA[id][n][0] : (typeof BESPOKE !== 'undefined' && BESPOKE[id]) ? BESPOKE[id].names[n - 1] : (typeof RC !== 'undefined' && RC[id]) ? recipeName(id, n) : TPL[n - 1].n;
/* designs kept per page (the user's selection); numbers stay stable, gaps are fine. Extra designs (21+) are added by extras.js */
const PG_KEEP = { mission: [1, 5, 6, 7, 8, 9, 19, 20], founder: [1, 2, 3, 6, 7, 8, 9, 19], course: [1, 3, 4, 9, 13, 19], guests: [3, 4, 12, 19], emergency: [1, 3, 6, 12, 13], impact: [4, 5, 6, 7, 9, 13, 15, 16, 18, 20], stories: [1, 3], reviews: [6, 12, 20], supporters: [5, 11], donate: [3, 5, 13], monthly: [1, 8, 19], volunteer: [2, 4, 8, 13, 14], contact: [], work: [1, 2], blog: [3, 4, 7, 17] };
const EXTRA = {};
/* designs that keep the page's original photos (the rest use the varied set in PG_M) */
const PH_OVR = { supporters: { 5: ['wa', 'p3', 'grp', 's3', 's6'] }, donate: { 5: ['wa', 'p3', 'p1b', 'don', 's4'] }, volunteer: { 4: ['wa', 'p3', 'grp', 's1', 's8'] } };
const tplVisible = id => PG_KEEP[id] ? PG_KEEP[id].slice().sort((a, b) => a - b) : TPL.map((x, i) => i + 1).filter(n => !(PG_HIDE[id] || []).includes(n));
const pgStep = (id, L, k) => { const v = tplVisible(id), i = v.indexOf(L); return v[((i < 0 ? 0 : i) + k + v.length) % v.length]; };
function pgView(id, L) {
  $('#app').innerHTML = (EXTRA[id] && EXTRA[id][L]) ? `<div class="site cw1 pg sxp cr ex ex-${id} ex${L}">${EXTRA[id][L][1]()}</div>` : (typeof BESPOKE !== 'undefined' && BESPOKE[id]) ? BESPOKE[id].f(L) : (typeof RC !== 'undefined' && RC[id]) ? pwPage(id, L) : sxPage(id, L);
  fitPhotos(); setTimeout(fitPhotos, 120); setTimeout(fitPhotos, 700);
  const pg = PGS.find(x => x.id === id);
  document.title = `${pg.n} · design ${L} — Voices Unveiled`;
  window.scrollTo(0, 0);
  if (EMBED) { $('#tb').style.display = 'none'; return; }
  $('#tb').style.display = '';
  $('#tb').innerHTML = `<a href="#/gallery/final" class="g">All designs</a><button data-go="-1" aria-label="Previous">←</button>
    <select aria-label="Design">${tplVisible(id).map(n => `<option value="${n}" ${n === L ? 'selected' : ''}>${String(n).padStart(2, '0')} · ${tplName(id, n)}</option>`).join('')}</select>
    <button data-go="1" aria-label="Next">→</button><span class="sep"></span><span class="tbn">${pg.n}</span>`;
}
const pcurr = () => {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  const id = PGS.some(x => x.id === h[1]) ? h[1] : 'mission';
  return [id, Math.min(60, Math.max(1, parseInt(h[2], 10) || 1))];
};
function pgGallery(id, num) {
  const pg = PGS.find(x => x.id === id);
  return `<div class="gpart"><h2 class="gp">${num} · ${pg.n} <small>${tplVisible(id).length} layouts kept for this page (numbers stay fixed, gaps are normal). Some extra items are examples, added only to show the design. Click a card to open it, then use ← → to flip.</small></h2>
    <div class="grid">${tplVisible(id).map(n => `<article class="gcard"><a class="shot mid" href="#/p/${id}/${n}">${frame(`index.html?embed=1#/p/${id}/${n}`, tplName(id, n))}</a><div class="gb"><h2><span>${String(n).padStart(2, '0')}</span> ${tplName(id, n)}</h2></div></article>`).join('')}</div></div>`;
}
PGS.forEach(x => GPARTS.push({ id: 'pg-' + x.id, t: x.n }));
