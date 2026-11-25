/* Every sub-page of voicesunveiled.org, each in 20 different layouts (shapes and arrangements, one fixed palette).
   Content comes from the live pages (trimmed where long). Routes: #/p/<page>/<1-20> · gallery parts: #/gallery/pg-<page> */

const PGS = [
  { id: 'mission', n: 'Our mission' }, { id: 'founder', n: 'Our founder' }, { id: 'course', n: 'Empowerment course' }, { id: 'guests', n: 'Guest speakers' },
  { id: 'holistic', n: 'Holistic & integrative education' }, { id: 'emergency', n: 'Emergency assistance' }, { id: 'impact', n: 'Impact report' },
  { id: 'stories', n: 'Student stories' }, { id: 'reviews', n: 'Student testimonials' }, { id: 'supporters', n: 'Supporter testimonials' },
  { id: 'donate', n: 'Donate now' }, { id: 'monthly', n: 'Monthly lifeline' }, { id: 'volunteer', n: 'Volunteer' }, { id: 'contact', n: 'Contact' },
  { id: 'work', n: 'Work with us' }, { id: 'blog', n: 'Blog' }
];

const pq = (q, by, meta) => ({ q, by, meta });
const PG_DATA = {
  mission: {
    e: 'Our mission', h: 'Every voice deserves to be heard.',
    l: 'Voices Unveiled gives Afghan women and girls free online education, mental health support, leadership development and a community that stands beside them.',
    blocks: [
      { k: 'stats', items: [['Feb 2023', 'Founded'], ['100% free', 'For every student'], ['501(c)(3)', 'US non-profit'], ['Tax-deductible', 'Donations in the US']] },
      { k: 'quotes', e: 'In her words', h: 'A student from Kabul', items: [pq('I want to know more about the rights that we girls should have.', 'Ariana', '17, Kabul')] },
      { k: 'text', e: 'Our story', h: 'It began with a request.', p: ['Voices Unveiled was launched in February 2023, after Afghan refugee women reached out. The Taliban had returned following the withdrawal of US troops, and they asked for free online education on empowerment and feminism.', 'We answered. Since then we have widened our reach to women inside Afghanistan, adding mental health support and community connections to the classroom.'] },
      { k: 'cards', e: 'Mission & vision', h: 'Why we exist', items: [{ h: 'Mission', p: 'We offer Afghan women free online education, mental health support, leadership development and community building.' }, { h: 'Vision', p: 'A world where silenced people are heard, empathy leads to action and compassionate leaders drive change: a global community rooted in justice, equality and the power of self-expression, education and empowerment.' }] },
      { k: 'cards', e: 'What we do', h: 'Four ways we stand with Afghan women.', items: [{ h: 'Free online education', p: 'Empowerment and leadership courses, free for every Afghan woman and girl who wants to learn.' }, { h: 'Mental health support', p: 'A safe space to be heard, with care that helps women and girls carry what they live through.' }, { h: 'Leadership development', p: 'Skills and confidence to speak up, lead and pass knowledge on to others.' }, { h: 'Community building', p: 'A global circle of women, inside and outside Afghanistan, who stand with each other.' }] },
      { k: 'cta', h: 'Featured on Channel 9 NBC News', p: 'See how a free online course is reaching women and girls who were shut out of school.', btn: 'Learn more' }
    ]
  },
  founder: {
    e: 'Our founder', h: 'Meet Cara Cruickshank.',
    l: 'Educator, community organizer and women’s advocate. Founder and host of Café de la Culture.',
    blocks: [
      { k: 'person', name: 'Cara Cruickshank', role: 'Founder / Program Director', p: ['Cara Cruickshank is an educator, community organizer and women’s advocate. She has lived in France, Brazil and the U.S. She is founder and host of Café de la Culture, a nonprofit organization that facilitates cultural exchange and intersectional community conversations on important topics.', 'Cara is writer, director and producer of theater for social change, including “On the Subject of Girls”, “The Alchemy of Imperfection” and “The Halloween Journey”.', 'In February 2023, Cara launched her Self-Empowerment and Feminism course for Afghan women with the Afghan Youth Leaders Assembly and later partnered with Generations of Change. She aims to continue developing and expanding this important work.'] },
      { k: 'cards', e: 'Her work', h: 'A career of listening and convening', items: [{ h: 'Theater for social change', p: 'Writer, director and producer of three productions on identity, imperfection and girlhood.' }, { h: 'Workshops around the world', p: 'Empowerment, diversity and gender studies courses in the U.S., Brazil, Turkey and France.' }, { h: 'Panels and public speaking', p: 'Panels on #MeToo, BLM, Indigenous Rights and the Refugee Crisis; talks at Bard College and the University of Michigan.' }, { h: 'Global Village Day Camp, 2022', p: 'An empowerment and holistic summer camp for refugee and immigrant youth in Aurora, Colorado.' }, { h: 'February 2023', p: 'Launch of the Self-Empowerment and Feminism course for Afghan women.' }] },
      { k: 'quotes', e: 'Her students', h: 'What they say about Cara', items: [pq('Even though you have not seen our faces, you are working very hard to amplify our voices. One of the best achievements of this year is knowing you, Ms. Cara.', 'K.N.', 'age 20'), pq('In the first days of the course, I felt so ashamed to ask questions, but Cara said that I should not be ashamed. After taking this course, I know that I am free, I am strong, I am a woman.', 'R.A.', 'age 22')] }
    ]
  },
  course: {
    e: 'Empowerment course', h: 'The Self-Empowerment Course',
    l: 'Sponsor a student in Afghanistan for a full 3-month intensive course. Women are the key to making peace that lasts.',
    blocks: [
      { k: 'quotes', e: 'A student', h: 'Why she attends', items: [pq('As a woman living in Afghanistan, I need to learn self-empowerment to help transform the current reality for my mother, sisters, and other women. I will pass on everything I learn to others.', 'F.B.', 'age 25, Kabul')] },
      { k: 'text', e: 'A lifeline', h: 'Learning where learning is banned.', p: ['In a country where education is banned, self-expression is forbidden and feminism is illegal, our course offers a lifeline. Students risk their lives to attend our underground online sessions.', 'Our course extends across Afghanistan and is offered free of charge through Café de la Culture. Our programs produce tangible improvements in knowledge of women’s studies, self-expression, self-compassion, confidence and optimism.'] },
      { k: 'stats', items: [['3 months', 'Intensive course'], ['3× a week', 'Underground online sessions'], ['15–40', 'Age of our students'], ['Free', 'For every student']] },
      { k: 'quotes', e: 'Another student', h: 'The change', items: [pq('This self-empowerment journey has been nothing short of transformative. Before this class, I was engulfed with self-doubt. Now, I stand with confidence, deeply appreciative of the person I’ve become.', 'A student', 'Afghanistan')] },
      { k: 'amounts', e: 'Sponsor a student', h: 'Sponsor a student with a tax-deductible donation', p: 'No donation is too small.', items: [['$300', 'Full scholarship for 1 trimester'], ['$900', 'Full scholarship for one year'], ['$1,500', 'Full scholarship for one year, plus food and medical funds']] },
      { k: 'cards', e: 'Other ways to help', h: 'Why volunteer with us?', items: [{ h: 'Make a tangible impact', p: 'Your knowledge and skills can directly influence the lives of women striving for education.' }, { h: 'Engage in meaningful work', p: 'Facilitate workshops and lectures that offer insights, practical skills and inspiration.' }, { h: 'Grow and learn', p: 'Share your expertise while gaining new perspectives from our diverse student body.' }] }
    ]
  },
  guests: {
    e: 'Distinguished guest speakers', h: 'Voices that open doors.',
    l: 'Global leaders, entrepreneurs, practitioners, activists and artists share their journeys with our students.',
    blocks: [
      { k: 'profiles', e: 'The line-up', h: 'Meet our guests', items: [{ img: 0, name: 'Dr. Lyla June Johnson', meta: 'Musician · Scholar · Community organizer', p: 'Indigenous musician, scholar, scientist, public speaker and community organizer of Diné (Navajo), Tsétsêhéstâhese (Cheyenne) and European lineages.' }, { img: 1, name: 'Zainab Salbi', meta: 'Founder · Author · Humanitarian', p: 'Time100 Impact Award honoree, founder of Women for Women International, co-founder of Daughters for Earth, author of Freedom Is an Inside Job and host of #MeToo, Now What?' }] },
      { k: 'quotes', e: 'A guest speaker', h: 'In their words', items: [pq('I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them.', 'A guest speaker', '')] },
      { k: 'cta', h: 'Your story could be next.', p: 'Share your journey with students who are hungry to learn.', btn: 'Get in touch' }
    ]
  },
  holistic: {
    e: 'Holistic and integrative education', h: 'Healing, learning and community.',
    l: 'Every woman and girl in Afghanistan deserves not just education, but the emotional strength, healing and community support to truly thrive.',
    blocks: [
      { k: 'text', e: 'Our approach', h: 'Trauma-informed and culturally sensitive.', p: ['Our educational approach helps students feel understood, not judged. We aim to uplift spirits while strengthening academic skills.', 'Education is not just about acquiring knowledge, it’s about healing, connecting and reclaiming self-worth and creative expression.'] },
      { k: 'cards', e: 'Support', h: 'Three pillars', items: [{ h: 'Mental health support', p: 'A safe space to share thoughts, ideas and experiences without fear of judgment, for women facing isolation, violence, uncertainty and trauma.' }, { h: 'Academic support', p: 'We help students break through barriers, set clear objectives and keep their drive, and we connect them with broader educational pathways.' }, { h: 'Elective courses', p: 'Taught by volunteer instructors from around the world, to develop skills, inspire creativity and expand opportunities.' }] },
      { k: 'quotes', e: 'Voices', h: 'What students say', items: [pq('I felt like I was a lost puzzle piece, and this course helped me find where I belong. It’s a place to heal, a safe space where you can share without fear of judgment.', 'Viana', 'age 18'), pq('This course helped me realize my worth and gave me the courage to speak up for myself.', 'Esma', 'age 13'), pq('I live in a remote area of Afghanistan where all educational institutions for girls have been shut down. Despite my deep passion for learning…', 'Mahin', 'age 23'), pq('I joined the English class to improve my speaking, but then I saw the other courses, like coding and data, and felt even more excited.', 'Najwa', 'age 20')] },
      { k: 'cards', e: 'Electives', h: 'What you can learn', items: [{ h: 'Functional skills', list: ['English (levels 1, 2, 3)', 'Data analytics', 'Computer programming'] }, { h: 'Humanities', list: ['Philosophy and physics', 'Creative writing', 'The Life of Ideas', 'Art-making: what lives within'] }, { h: 'Sciences', list: ['Medical science', 'To the stars and beyond', 'Bio science and sustainability'] }, { h: 'Wellness', list: ['Meditation', 'Stress management'] }] },
      { k: 'cta', h: 'Volunteer a workshop or elective.', p: 'Join our community of volunteer instructors.', btn: 'Become a volunteer' }
    ]
  },
  emergency: {
    e: 'Emergency assistance', h: 'Food and care for our students.',
    l: 'We raise funds to meet the critical food and medical needs of our students, because true self-empowerment includes health.',
    blocks: [
      { k: 'text', e: 'Why it matters', h: 'Health comes first.', p: ['Amid the ongoing crisis, many families are unable to provide adequate nourishment, leading to preventable health issues among our students.', 'Such health challenges make it incredibly difficult to focus on education. By contributing, you help ensure that our Afghan students not only survive but also thrive.'] },
      { k: 'amounts', e: 'Your gift in action', h: 'What your gift buys', p: 'No contribution is too big or small.', items: [['$100', 'Groceries for a family of 6 for one month'], ['$200', 'Emergency medicine and health needs for one month'], ['$400', 'Health, food and essential vitamins for one month']] },
      { k: 'quotes', e: 'A student', h: 'In her words', items: [pq('Being with my Afghan sisters gives me strength, and having a supportive person like you with us is the greatest blessing we could ask for in these challenging times.', 'R.Q.', 'age 20')] },
      { k: 'cards', e: 'More', h: 'Learn more or lend a hand', items: [{ h: 'Want to learn more?', p: 'What is the status of women in Afghanistan? Read the FAQs: Afghan women three years after the Taliban takeover.', a: 'Learn more' }, { h: 'Are you a health specialist?', p: 'Volunteer remotely with us: share your knowledge in mental health, nutrition, general healthcare or any wellness field.', a: 'Contact us' }] }
    ]
  },
  impact: {
    e: 'Impact report', h: 'What your support has built.',
    l: 'Read our annual impact reports and see the numbers behind the stories.',
    blocks: [
      { k: 'stats', items: [['250+', 'Students who learned, healed and reimagined their futures'], ['13', 'Elective courses in tech, science, humanities and arts'], ['6', 'Rounds of Self-Empowerment programs'], ['20+', 'Families given mental health support'], ['100%', 'Of graduates report transformed lives']] },
      { k: 'cards', e: 'Reports', h: 'Annual impact reports', items: [{ h: '2025 Annual Impact Report', p: 'Our latest year of classes, care and community.', a: 'Download the report' }, { h: '2024 Annual Impact Report', p: 'A full account of our programs and finances in 2024.', a: 'Download the report' }] },
      { k: 'list', e: 'Together', h: 'What we’ve built together', items: ['Free online classes for students banned from school by the Taliban', 'Mental health support during exile, isolation and trauma', '13 elective courses in tech, science, humanities and arts', '6 rounds of our Self-Empowerment Programs', 'Life-saving relief: food, medicine, financial support'] }
    ]
  },
  stories: {
    e: 'Student stories', h: 'In their own words.',
    l: 'Meet the Afghan women and girls who learn with Voices Unveiled.',
    blocks: [{ k: 'profiles', e: 'Ten students', h: 'Their dreams, their courage', items: [
      { img: U + '2025/07/1.jpg', name: 'Arezou', meta: 'Age 27 · Afghanistan', p: 'Before the Taliban returned I graduated from medical school after seven years of study. Now that I am banned from my profession, I have turned my focus to learning new skills online…' },
      { img: U + '2025/07/2.jpg', name: 'Viana', meta: 'Age 18 · Afghan girl in Pakistan', p: 'I’m a high school graduate studying Philosophy of Physics and Advanced English. I’m passionate about feminism and women’s rights. My dream is to become a diplomat…' },
      { img: U + '2025/07/3.jpg', name: 'Esther', meta: 'Age 13 · Afghanistan', p: 'I am Voices Unveiled’s youngest student. I love to read, paint, journal and play cricket. I’ve just self-published my first book, all about me!' },
      { img: U + '2025/07/4.jpg', name: 'Ladan', meta: 'Age 27 · Afghanistan', p: 'I graduated in Pharmacy before the Taliban returned. I love painting, teaching and spending time in nature, and I have set three long-term goals for myself…' },
      { img: U + '2025/07/5.jpg', name: 'Darakhshan', meta: 'Age 18 · Afghanistan', p: 'I have a deep love for the arts. Singing lifts my spirits, and I love photography and editing: capturing meaningful moments and making them come alive.' },
      { img: U + '2025/07/6.jpg', name: 'Shiva', meta: 'Age 19 · Afghanistan', p: 'I am studying painting and journaling online. I want to take the Self-Empowerment course to become more disciplined, powerful and smart.' },
      { img: U + '2025/07/7.jpg', name: 'Laleh', meta: 'Age 24 · Afghanistan', p: 'My dreams are to become a professional writer and a university lecturer. I am studying English online and love teaching, travelling and photography.' },
      { img: U + '2025/07/8.jpg', name: 'Azadeh', meta: 'Age 24 · Afghanistan', p: 'I continue my education as best I can, studying English, law and political science. My goal is a scholarship overseas to pursue writing.' },
      { img: U + '2025/07/Website-Student-Stories-Images.jpg', name: 'Laya', meta: 'Age 20 · Afghanistan', p: 'I was a medical student before the Taliban came. I always dreamed of becoming a doctor to serve my people, and I paint, draw and read novels for peace of mind.' },
      { img: U + '2025/08/Featured-Students-Website.png', name: 'Faranak', meta: 'Age 23 · Afghanistan', p: 'The self-empowerment course completely changed my life. It gave me strength, confidence and a new vision. Now I believe I have many paths to reach my dreams.' }] }]
  },
  reviews: {
    e: 'Student testimonials', h: 'What students say.',
    l: 'Words from the women and girls who have taken our courses.',
    blocks: [{ k: 'quotes', e: 'Eight voices', h: 'In their own words', items: [
      pq('Afghan women need your kind of support so that we can find ourselves, even while living through the worst possible kind of crisis. I am grateful to you as an Afghan girl.', 'B.S.', 'age 18'),
      pq('In the first days of the course, I felt so ashamed to ask questions and speak my ideas, but Cara said that I should not be ashamed. After taking this course, I know that I am free, I am strong, I am a woman.', 'R.A.', 'age 22'),
      pq('Here in our homeland, we are removed from all aspects of social life. Even though you have not seen our faces, you are working very hard to amplify our voices.', 'K.N.', 'age 20'),
      pq('When I heard my own words spoken out loud by actors I felt happy, excited and curious. I saw myself among you. I felt like I was no longer in Afghanistan. I felt that I was free.', 'A.M.', 'age 26'),
      pq('It melted my heart to hear our own words spoken out loud in public. I pinched my sister’s hand and said, “Those are MY words!!” It was an amazing moment in my life.', 'N.H.', 'age 19'),
      pq('The best part was that I was able to ask the questions in my heart for the first time, without any fear. Our teacher became like a friend to us.', 'D.Y.', ''),
      pq('Most of all, I learned to have self-confidence and defend my rights and those of my peers.', 'F.S.', 'age 24'),
      pq('Knowing you is the best thing that has happened to my life this year.', 'N.S.', '')] }]
  },
  supporters: {
    e: 'Supporter testimonials', h: 'Why they give.',
    l: 'What donors, partners and friends say about Voices Unveiled.',
    blocks: [{ k: 'quotes', e: 'Twelve voices', h: 'Reviews from our supporters', items: [
      pq('Voices Unveiled is a hugely important program. It does so much for the women it serves, women living in Afghanistan.', 'John Boylan', 'Google review'),
      pq('There isn’t a whisper of a doubt that Cara and Voices Unveiled are having a huge impact. Afghan girls and young women are being heard and seen for who they are.', 'Mary Faddick', 'Google review'),
      pq('Voices Unveiled is doing cutting edge work with Afghan women and girls, walking alongside them towards their educational goals and mental health healing. We are proud supporters!', 'Heidi Henkel', 'Broomfield Resettlement Task Force'),
      pq('This organization does a fantastic job of providing education and hope to Afghan women. I am proud to be a supporter!', 'Carol Matlack', 'Google review'),
      pq('An organization that puts its heart into its goals. I am a witness to the incredible and positive impact it has on the lives of Afghan women.', 'Coral Altamirano', 'Google review'),
      pq('An incredible organization that supports the education of women in a world where equality isn’t recognized.', 'Frank Cuevas', 'Google review'),
      pq('Hearing first hand experiences from these girls and young women who only want what our daughters take for granted is inspiring.', 'Tania Barricklo', 'Google review'),
      pq('Voices Unveiled provides crucial physical, intellectual, and emotional support to women suffering under the worst gender apartheid in history.', 'Dr. Paul Kordis', 'Google review'),
      pq('A vital life line in these dark times for Afghan women. Their battle is also ours.', 'Helen Levy', 'Google review'),
      pq('This is an amazing charity that gives support directly to Afghan women whose lives are in danger. It’s great to know exactly where your money goes.', 'Ruth Druart', 'Google review'),
      pq('Voices Unveiled is a good example of an initiative that provides education for women in Afghanistan focused on psychological, socio-political and gender-related topics.', 'Soraya Afzali', 'Ph.D. candidate, Trinity College Dublin'),
      pq('Access to knowledge and education is a fundamental right. My utmost respect to Cara Cruickshank and Voices Unveiled for their incredible work.', 'A supporter', 'Academic partner')] }]
  },
  donate: {
    e: 'Donate now', h: 'This is our moment to choose hope.',
    l: 'We must raise $50,000 to keep our programs alive. Your donation today protects their dignity, their education and their dreams.',
    blocks: [
      { k: 'amounts', e: 'Choose your impact', h: 'Every dollar keeps hope alive', p: '100% secure · Tax-deductible · Lives changed immediately', items: [['$25', 'Internet access for one student for one semester'], ['$50', 'Course materials and internet for one student'], ['$100', 'Emergency intervention'], ['$300', 'Covers one student’s trimester of transformation'], ['$600', 'Funds one trimester for two students'], ['$1,000', 'Supports one year of education, coaching, counselling and support']] },
      { k: 'stats', items: [['250+', 'Students have learned, healed and reimagined their futures'], ['100%', 'Of graduates report their lives have been transformed']] },
      { k: 'list', e: 'Together', h: 'What we’ve built together', items: ['Free online classes for students banned from school by the Taliban', 'Mental health support to 20+ families in exile', '13 elective courses in tech, science, humanities and arts', '6 rounds of our Self-Empowerment Programs', 'Life-saving relief: food, medicine, financial support'] },
      { k: 'cards', e: 'More ways to give', h: 'Other ways to donate', items: [{ h: 'Donor-advised fund (DAF)', p: 'Recommend a grant in minutes. Direct your gift to Café de la Culture, a 501(c)(3) (EIN 99-0810138).' }, { h: 'Give from your IRA', p: 'If you are 70 or older, a qualified charitable distribution counts toward your required minimum distribution and is generally excluded from taxable income.' }] }
    ]
  },
  monthly: {
    e: 'Become a monthly lifeline', h: 'Empower more women with us.',
    l: 'Join the global community that has supported 250 students and their families since 2023.',
    blocks: [
      { k: 'text', e: 'Thank you', h: 'Month after month.', p: ['Your ongoing support fuels education, safety and opportunity for Afghan women and girls. Reliable giving means we can act the moment help is needed.'] },
      { k: 'list', e: 'Your monthly support', h: 'Ensures Afghan women and girls can:', items: ['Access free online education, systematically denied to them under Taliban restrictions', 'Receive mental health support and a vital community', 'Receive urgent, life-saving support like food and medical aid', 'Reclaim their voices and build skills: self-empowerment, English, data analytics, philosophy, meditation and more'] },
      { k: 'list', e: 'Why monthly giving matters', h: 'Crisis doesn’t wait for a fundraiser.', items: ['Fund more scholarships for women and girls ready to learn', 'Provide emergency aid the moment it’s needed', 'Expand programs so no one is turned away'] },
      { k: 'quotes', e: 'Zahra', h: 'A student', items: [pq('No one has ever supported me or given me the kind of encouragement and learning opportunities that Voices Unveiled has. This course gives me strength and a reason to keep going.', 'Zahra', '')] },
      { k: 'amounts', e: 'Choose your impact', h: 'Pick a monthly amount', p: 'Or choose your own monthly amount. A generous gift of $300 sponsors a student for one trimester, or feeds a family for one month.', items: [['$20', 'Hope Sustainer: supports internet access and core materials'], ['$50', 'Freedom Builder: powers consistent education'], ['$100', 'Life Changer: funds education and major emergency interventions'], ['$200', 'Mission Champion: fuels expansion and innovation across programs']] },
      { k: 'list', e: 'What you’ll receive', h: 'In return', items: ['Annual impact report showing exactly where your gift goes', 'A personal letter from a student', 'Invitations to virtual events with Afghan women in our programs', 'Confidence that your support continues, no matter what'] }
    ]
  },
  volunteer: {
    e: 'Volunteer', h: 'Share your skills, change a life.',
    l: 'We are a grassroots organization built on volunteer work and heart.',
    blocks: [
      { k: 'list', e: 'Right now', h: 'We’re actively seeking volunteers to teach or lead sessions in:', items: ['Level 2 / B1 English', 'Entrepreneurship', 'Politics & international studies', 'Learning and organization skills', 'Blog editor'] },
      { k: 'cards', e: 'Ways to volunteer', h: 'Five ways to join us', items: [{ h: 'Guest speaker', p: 'Share your expertise in our Self-Empowerment Course.', list: ['Mental health', 'Women’s health', 'Holistic health', 'Women’s studies', 'The arts'] }, { h: 'Workshop leader', p: 'Work with a small group of students once a week or twice a month.', list: ['Conversational English tutors', 'English proficiency test preparation', 'Spanish, German and French tutors', 'Creative writing coaches', 'Essay writing mentors'] }, { h: 'Support services', list: ['Offer trauma counseling', 'Provide personal coaching sessions', 'Lead a support group'] }, { h: 'Specialized teams', list: ['Marketing', 'Fundraising', 'Administration'] }, { h: 'Custom volunteering', p: 'Have other skills you want to lend? We’re open to your unique contributions!' }] },
      { k: 'quotes', e: 'A volunteer', h: 'Bella, photographer in Melbourne', items: [pq('I was quite nervous when beginning teaching English to these students because I didn’t know if I would be able to connect with them as our lived experiences were so different…', 'Bella', 'Photographer and volunteer, Melbourne, Australia')] },
      { k: 'cta', h: 'Interested? Let’s talk.', p: 'Get in touch and we’ll share the available opportunities.', btn: 'Contact us' }
    ]
  },
  contact: {
    e: 'Contact', h: 'Get in touch.',
    l: 'Prefer email? Reach us at hello@voicesunveiled.org.',
    blocks: [
      { k: 'form', e: 'Write to us', h: 'Send a message', fields: [['Name*', 'text'], ['Email*', 'text'], ['How did you hear about us?', 'text'], ['Message (350 characters max)', 'area']] },
      { k: 'cards', e: 'Find us', h: 'Other ways to reach us', items: [{ h: 'Email', p: 'hello@voicesunveiled.org' }, { h: 'Address', p: '270 North Ave., Suite 811, New Rochelle, NY 10801' }, { h: 'Follow us', p: 'Facebook · Instagram · LinkedIn' }] }
    ]
  },
  work: {
    e: 'Work with us', h: 'Use your skills for women in crisis.',
    l: 'If you’re passionate about gender equality, digital safety and education, we’d love to hear from you.',
    blocks: [
      { k: 'text', e: 'Current opportunities', h: 'Marketing Director (part-time)', p: ['We’re looking for an experienced, creative and highly self-directed Marketing Director to lead Voices Unveiled’s communications and brand strategy: social media, digital campaigns, content creation and visual identity.', 'You’ll develop marketing strategies that grow our reach, strengthen supporter engagement and elevate the stories of our students and programs with integrity and care.'] },
      { k: 'list', e: 'Requirements', h: 'We’re ideally looking for someone with:', items: ['At least 3 years’ experience in marketing or communications', 'Experience in a nonprofit or mission-driven organisation', 'Social media management, content planning, WordPress and analytics', 'Graphic design tools (e.g. Canva)', 'Excellent content writing, storytelling and brand voice', 'Ability to work independently and manage deadlines', 'Digital fundraising, email marketing (Mailchimp) and donor communications', 'Understanding of human rights, education or international development'] },
      { k: 'cta', h: 'How to apply', p: 'Email your CV, a cover letter and your portfolio with the subject line “Marketing Director Application”.', btn: 'Apply now' }
    ]
  },
  blog: {
    e: 'Our blog', h: 'Stories from the classroom and beyond.',
    l: 'Poems, testimonies and reflections from Afghan women and girls, and from the people who learn alongside them.',
    blocks: [{ k: 'profiles', e: 'Latest stories', h: 'Read, share, be moved.', items: POSTS.map((x, i) => ({ img: i + 2, name: x.t, meta: x.tag, p: x.x })) }]
  }
};

