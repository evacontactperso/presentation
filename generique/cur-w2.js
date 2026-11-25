/* Curriculum: weekly sheets, weeks 10 to 14 (Course 2: guided commentary, "commentaire composé")
   (review is in cur-w5.js, the oral exam in cur-w4.js). */

cw({
  n: 10, f: 'f2', title: 'The commentary method: eight steps over 4 hours',
  goal: 'Know the eight steps of the commentary, their exact duration, and know how to build an analysis table.',
  notions: [
    'The commentaire composé is a 4-hour exam: understand the text, analyze its form, interpret the effect the author intends.',
    'Time split: reading 5 min; analysis table 1 h 15; outline 20 min; central question 5 min; introduction 15 min; body 1 h 30; conclusion 15 min; proofreading 15 min.',
    'The table contains at least 30 devices. Start with the lexical fields, which require a reading of the whole text.',
    'Number of items per sub-part = number of rows in the table divided by 6, plus or minus 1.',
    'The body has two or three parts, six sub-parts in all. The introduction follows five elements: hook (movement), presentation, summary, central question, announcement of the outline.'
  ],
  skills: [
    'Recite the eight steps and their duration from memory.',
    'Build a three-column table, starting with the lexical fields.',
    'Calculate the number of items per sub-part from the number of rows in the table.',
    'State the five elements of a commentary introduction.'
  ],
  watch: [
    'Doing two or three commentaries a year is not enough: the goal is one commentary (at least the two-hour draft) every two weeks.',
    'The table is the heart of the work: without thirty devices, the outline stays thin.',
    'Respect the timer: running over one step impoverishes the next.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The pages “Presentation of the exam” and “The method” of Course 2.' },
    { k: 'Materials', t: 'Time-split table (to display); three-column table template; fill-in-the-blank introduction text; an eight-line poem for the table demonstration.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on course 1', 'Ten flash questions: devices, registers, movements. The result serves as a diagnostic.'],
    [15, 'cours', 'Presentation of the exam and time split', 'Understand, analyze, interpret; the plan of the paper; the minute-by-minute split of the 4 hours.'],
    [15, 'cours', 'Steps 1 and 2: reading and table', 'Sub-steps 2.1 (list of devices), 2.2 (three-column table), 2.3 (lexical fields first).'],
    [12, 'cours', 'Steps 3 and 4: outline and central question', 'Calculation n/6, grouping by colors, six sub-parts titled with a verb, central question in one sentence.'],
    [12, 'cours', 'Step 5: introduction', 'The five elements with the fill-in-the-blank text; layout rules (three-square indent, a single paragraph).'],
    [12, 'cours', 'Steps 6 and 7: body and conclusion', 'Five paragraphs per part, one table row equals one sentence, varied analysis verbs, conclusion with an opening.'],
    [18, 'exo', 'Workshop: live table', 'Pairs, 18 min: eight-row table on a short poem. Comparison of the tables between pairs.'],
    [15, 'exo', 'Exercise: outline from a provided table', 'Individual, 10 min: a 30-row table already filled in; calculation n/6, grouping by colors, three sub-parts titled with a verb; 5-minute correction.'],
    [13, 'bilan', 'Wrap-up', 'Each student rewords the eight steps. Assignment: prepare a ten-row table on the text that will be handed out.']
  ],
  drills: [
    { t: 'Steps of the exam from memory', tags: ['Individual', 'From memory', '5 min'], how: 'Write the eight steps with their duration, then compare with the displayed table.' },
    { t: 'Workshop: live table', tags: ['Pairs', '18 min'], how: 'Eight rows minimum on a poem. Start with the lexical fields, then the figures. Each row: quotation with the verse, device, interpretation.' },
    { t: 'Outline from a provided table', tags: ['Individual', '10 min'], how: 'Calculation n/6, grouping by colors, three sub-parts titled with a verb.' }
  ]
});

/* Commentary: three guided topics (novel, poetry, theater), then one topic done independently (literature of ideas).
   Same main steps in each session (no lesson): more and more steps are done in class. */
const COMM_T = {
  roman: {
    goal: 'Apply the method to a novel text: “Le Père Goriot” (Old Goriot) by Balzac, Rastignac facing Paris. First guided topic.',
    notions: [
      'The text: at the end of the novel (1835), Rastignac, left alone in Père-Lachaise cemetery after Goriot’s burial, looks at Paris and throws it a challenge. Genre: novel; movement: realism; registers: dramatic and epic, with irony in the final line.',
      'Novel vocabulary: narrator, point of view, description, character, final scene.',
      'Expected lexical fields: the city (Paris, the Seine, the column, the dome), the gaze (eyes, look), food (the hive, the honey, the dinner), society and the challenge.',
      'Devices to pick out: the metaphor of the hive, the personification of Paris, the final exclamation “À nous deux maintenant !” (Now it’s between the two of us!), the passé simple of the actions, the capital letter of “Société”.',
      'Outline calculation: number of rows in the table divided by 6 (for example 35 devices give 5 to 6 items per sub-part).'
    ],
    skills: [
      'Fill in a twenty-row table during the session, with quotation, device and interpretation.',
      'Group the rows into six balanced sub-parts with a verb title.',
      'Formulate a central question that links form (gaze, metaphor, exclamation) to meaning (Rastignac’s ambition).',
      'Write a complete introduction with a hook on realism.'
    ],
    watch: [],
    lire: 'The method of Course 2, steps 1 to 5, and the introduction sheet.',
    supports: 'Chosen text: Balzac, “Le Père Goriot” (1835), last pages, from the moment Eugène de Rastignac, left alone at Père-Lachaise, looks at Paris up to “À nous deux maintenant !”, lines numbered; three-column table; fill-in-the-blank introduction text; list of analysis verbs.',
    lecture: 'Five minutes, three readings of the text, underlining of the strong words.',
    tableau: 'Individual. Lexical fields first (city, gaze, food, society), then metaphors, tenses, punctuation, sentences.',
    plan: 'Calculation n/6, grouping of the rows by colors, six sub-parts titled with a verb.',
    prob: 'One sentence that links form (gaze, metaphor, exclamation) to meaning (Rastignac’s ambition).',
    intro: 'Individual, the five elements, with a hook on realism.',
    dev: 'One sub-part written out: one sentence per table row, varied analysis verbs; reading aloud and improvement.',
    concl: 'Answer to the central question, summary, opening toward another novel of social ascent.',
    cadre: 'Presentation of the text: the end of “Le Père Goriot”, the cemetery scene.'
  },
  poesie: {
    goal: 'Apply the method to a poem: “Le vase brisé” (The Broken Vase) by Sully Prudhomme, with the vocabulary of poetry. Second guided topic.',
    notions: [
      'The poem: five stanzas of four lines; the image of a vase cracked by a blow of a fan becomes the metaphor of a heart wounded by the hand one loves.',
      'Expected lexical fields: the flower and the vase, the heart and love, the crack and the wound.',
      'Vocabulary of poetry: verse, stanza, rhymes, rhythm, refrain, extended metaphor.',
      'Sully Prudhomme is associated with the Parnassian movement: an example of a literary-movement hook.',
      'Dominant register: lyrical, with a pathetic tone.'
    ],
    skills: [
      'Pick out at least 30 devices in a poem, with their verses.',
      'Recognize the extended metaphor and interpret it.',
      'Build an outline from the progression of the poem: the vase, then the heart, then the hidden wound.',
      'Write an introduction and one sub-part of the body.'
    ],
    watch: [],
    lire: 'Steps 5 to 8 of Course 2 and the written model answer of the poetry topic.',
    supports: 'The poem “Le vase brisé” with numbered verses (Sully Prudhomme, “Stances et poèmes”); three-column table; poetry vocabulary sheet.',
    lecture: 'Three readings of the poem, one of them aloud.',
    tableau: 'Individual. Lexical fields first (flower, heart, wound), then figures, rhythm, tenses, punctuation. Quote by verse number; the extended metaphor of the vase and the heart is reconstructed.',
    plan: 'Six sub-parts from the progression of the poem: the vase, the heart, the hidden wound.',
    prob: 'One sentence that links the extended metaphor to the meaning.',
    intro: 'Individual: hook on the Parnassian movement, presentation, summary, central question, announcement of the outline.',
    dev: 'One sub-part written on “Le vase brisé”, reread with a five-criteria grid.',
    concl: 'Answer to the central question, summary, opening toward another poem about the pain of love.',
    cadre: 'Presentation of the text: “Le vase brisé” by Sully Prudhomme.'
  },
  theatre: {
    goal: 'Apply the method to a theater excerpt: “L’Avare” (The Miser) by Molière, Harpagon’s cry. Third guided topic.',
    notions: [
      'The text: Harpagon, alone, cries “thief!” from the garden and comes in without a hat. Genre: theater; comic register, with a pathetic and tragic dimension for the character.',
      'Expected lexical fields: theft, murder, comfort, justice, premeditation.',
      'Devices to pick out: questions, exclamations, repetitions, accumulation, hyperbole, jerky rhythm, address to himself and to the audience, the stage direction “À lui-même, se prenant par le bras” (To himself, grabbing his own arm).',
      'Theater vocabulary: line, stage direction, monologue, aside, comedy of words and of character.',
      'Introduction hook on classicism: Molière and the comedy of character.'
    ],
    skills: [
      'Fill in a table of at least 30 rows within the time (in session: a table that is started).',
      'Group the rows into six balanced sub-parts, with a verb title for each.',
      'Formulate a central question that links form (cries, accumulations) to meaning (Harpagon’s attachment to his money).',
      'Write the introduction, one sub-part and the conclusion with an opening.'
    ],
    watch: [],
    lire: 'The theater topic in Course 2: text, steps 1 to 7 applied and correction.',
    supports: 'Harpagon’s text, lines numbered; three-column table; list of analysis verbs; proofreading grid.',
    lecture: 'Five minutes, three readings of the text, underlining of the strong words.',
    tableau: 'Individual. Lexical fields first (theft, murder, comfort, justice, premeditation), then figures, punctuation, tenses, pronouns, sentences, interjections.',
    plan: 'Calculation n/6, grouping of the rows by colors, six sub-parts titled with a verb.',
    prob: 'One sentence that links form (cries, accumulations) to meaning (Harpagon’s attachment to his money).',
    intro: 'Individual: the five elements, with a hook on classicism.',
    dev: 'One sub-part written on Harpagon’s cry: one sentence per table row, varied verbs.',
    concl: 'Answer to the central question, summary, opening toward another comedy of money or avarice.',
    cadre: 'Presentation of the text: “L’Avare” by Molière, Harpagon’s cry.'
  }
};
function comm(n, t, st, title, quiz) {
  const WATCH = [
    'Do not make an outline before the table is finished.',
    'A sub-part without a verb in the title is often a theme, not an argument.',
    'Quote with the line (or verse) and keep only the devices you can interpret.'
  ];
  const A = [8, 'accroche', 'Instructions and reminder of the method', `${quiz} ${t.cadre}`];
  const L = [5, 'exo', 'Step 1: reading', t.lecture];
  const T = (d, extra) => [d, 'exo', 'Step 2: analysis and interpretation table', `${t.tableau} ${extra}`];
  const P = d => [d, 'exo', 'Step 3: outline', t.plan];
  const Q = d => [d, 'exo', 'Step 4: central question', t.prob];
  const I = (d, extra) => [d, 'copie', 'Step 5: introduction', `${t.intro} ${extra}`];
  const D = d => [d, 'copie', 'Step 6: body', t.dev];
  const C = d => [d, 'copie', 'Step 7: conclusion', t.concl];
  const flow = {
    1: [A, L, T(40, 'Goal: 20 rows in the session, the rest at home. 10-minute shared correction.'), P(20), Q(7), I(30, '10-minute cross-proofreading with a grid.'), [10, 'bilan', 'End of the session', 'Everyone notes what they forgot in the table. Assignment: finish the table to 30 rows and write the body of the first part.']],
    2: [A, L, T(35, 'Goal: 20 rows. 8-minute shared correction.'), P(15), Q(5), I(20, '5-minute cross-proofreading.'), D(22), [10, 'bilan', 'End of the session', 'Everyone notes the step that costs them the most time. Assignment: finish the table up to thirty rows and write the rest of the body.']],
    3: [A, L, T(35, 'Goal: 20 rows. 8-minute shared correction.'), P(15), Q(5), I(15, 'Cross-proofreading.'), D(15), C(12), [10, 'bilan', 'End of the session', 'Comparison of the three topics (novel, poetry, theater): what changes in the table. Assignment: finish the body of the commentary.']]
  }[st];
  cw({ n, f: 'f2', title, goal: t.goal, notions: t.notions, skills: t.skills, watch: WATCH,
    prep: [{ k: 'To read before the session', t: t.lire }, { k: 'Materials', t: t.supports }], flow, drills: [] });
}
comm(11, COMM_T.roman, 1, 'Topic no. 1 (novel): “Le Père Goriot” by Balzac, from reading to introduction', 'The eight steps and their duration: round table, one step per student.');
comm(12, COMM_T.poesie, 2, 'Topic no. 2 (poetry): “Le vase brisé” by Sully Prudhomme, from table to body', 'Reminder of the outline and central question of topic no. 1; collecting the body written at home.');
comm(13, COMM_T.theatre, 3, 'Topic no. 3 (theater): “L’Avare” by Molière, up to the conclusion', 'Reminder of topic no. 2; collecting the work written at home.');

cw({
  n: 14, f: 'f2', title: 'Topic no. 4 (literature of ideas): “Lettres persanes” by Montesquieu, independent commentary',
  goal: 'Carry out alone, on a text the students have never studied, the first five steps in two hours: letter XXX of the “Lettres persanes” (Persian Letters).',
  notions: [
    'The text: letter XXX of the “Lettres persanes” (Montesquieu, 1721), “Comment peut-on être Persan ?” (How can one be Persian?): Rica tells of the Parisians’ curiosity about him. Epistolary novel, Age of Enlightenment, satirical register.',
    'The complete two-hour draft includes steps 1 to 5: reading (5 min), table (1 h 15), outline (20 min), central question (5 min), introduction (15 min).',
    'The recommended rhythm: one commentary every two weeks, at least as a two-hour draft.',
    'The past baccalauréat exams provide topics: keep a schedule with one topic every two weeks.',
    'Self-assessment grid: number of devices, balance of the sub-parts, quality of the central question, five elements of the introduction.'
  ],
  skills: [
    'Respect the time split without prompting from the teacher.',
    'Reach thirty rows in the table in 1 h 15.',
    'Propose a central question that links form and meaning.',
    'Self-assess with a grid and set two progress goals.'
  ],
  watch: [
    'No phone, no materials: exam conditions.',
    'If the table does not reach thirty rows, do not move on to the outline before the end of the 1 h 15.',
    'Keep five minutes of reading, even if the text seems easy: a misreading costs more.'
  ],
  prep: [
    { k: 'To read before the session', t: 'Steps 1 to 5 of Course 2 and the list of the 15 devices.' },
    { k: 'Materials', t: 'Chosen text: Montesquieu, “Lettres persanes” (1721), letter XXX (Rica to Ibben, in Smyrna), from the beginning of the letter up to “Comment peut-on être Persan ?”, presented as an unseen text, lines numbered; double sheet; draft paper; timer displayed.' }
  ],
  flow: [
    [5, 'accroche', 'Instructions for the session', 'Exam conditions, time split displayed on the board, text handed out: letter XXX of the “Lettres persanes”.'],
    [5, 'exo', 'Step 1: reading', 'Five minutes, three readings, no pen at first.'],
    [75, 'exo', 'Step 2: analysis and interpretation table', 'Individual, 1 h 15: thirty rows minimum, lexical fields first.'],
    [20, 'exo', 'Step 3: outline', 'Calculation n/6, grouping, six titled sub-parts.'],
    [5, 'exo', 'Step 4: central question', 'One sentence, written on the draft.'],
    [15, 'copie', 'Step 5: introduction', 'Written directly on the paper.'],
    [20, 'copie', 'Step 6: body', 'One sub-part written out, from the table.'],
    [15, 'exo', 'Step 8: cross-proofreading and self-assessment', 'Pairs: exchange of papers, ten-criteria grid to tick, two written remarks, then two progress goals.'],
    [20, 'bilan', 'End of the session', 'Class review of the text, presentation of the expected outline, planning of one commentary every two weeks for the next three months.']
  ],
  drills: [
    { t: 'Complete two-hour draft', tags: ['Individual', 'Exam conditions', '2 h'], how: 'Steps 1 to 5 on an unseen text, without help. The table, outline, central question and introduction are collected.' },
    { t: 'Self-assessment', tags: ['Individual', '15 min'], how: 'Ten-criteria grid: number of devices, balance of the sub-parts, central question, five elements of the introduction, spelling. Two progress goals.' },
    { t: 'Cross-proofreading', tags: ['Pairs', '15 min'], how: 'Grid of the five elements of the introduction to tick, two written remarks.' }
  ],
  special: 'Long 3-hour session.'
});

