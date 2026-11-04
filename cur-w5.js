/* Curriculum: weeks 31 to 36 (part 5: review, written mock exams, oral mock exams). */

cw({
  n: 31, f: 'f5', title: 'Written mock exam no. 1: the commentary in real conditions',
  goal: 'Take the commentary exam in four hours, with the exact time split of the real exam.',
  notions: [
    'Time split: reading 5 min, table 1 h 15 (up to 1 h 20), outline 20 min (1 h 40), central question 5 min (1 h 45), introduction 15 min (2 h), body 1 h 30 (3 h 30), conclusion 15 min (3 h 45), proofreading 15 min (4 h).',
    'Visual rules of the paper: three blank lines between blocks, three-square indent.',
    'Grading grid: comprehension, number and accuracy of devices, interpretation, outline, central question, writing.'
  ],
  skills: [
    'Hand in a complete paper within the time.',
    'Produce a table of at least thirty devices.',
    'Take care of layout and proofreading.',
    'Keep to the displayed timer.'
  ],
  watch: [
    'Do not sacrifice proofreading: fifteen minutes of proofreading are worth several points.',
    'Do not write the body before having a clear central question.',
    'Respect the intermediate times, written on the board every half hour.'
  ],
  prep: [
    { k: 'To read before the session', t: 'Steps 1 to 8 of Course 2 and the exam schedule.' },
    { k: 'Materials', t: 'Unseen text taken from past exams; double sheets; draft paper; timer displayed; exam room.' }
  ],
  flow: [
    [10, 'accroche', 'Exam instructions', 'Seating in the room, reminder of the time split and of the visual rules of the paper, handing out the text.'],
    [5, 'exo', 'Reading', 'Start the timer, read the text, several times.'],
    [75, 'exo', 'Analysis table', 'At least thirty devices, lexical fields first.'],
    [20, 'exo', 'Outline', 'Six sub-parts, titles with a verb.'],
    [5, 'exo', 'Central question', 'One sentence.'],
    [15, 'copie', 'Introduction', 'Five elements.'],
    [90, 'copie', 'Body', 'Two or three parts, six sub-parts in all; partial introduction and partial conclusion of each part.'],
    [15, 'copie', 'Conclusion', 'Answer to the central question, opening.'],
    [15, 'copie', 'Proofreading', 'Neatness, syntax, spelling.'],
    [5, 'bilan', 'Collecting the papers', 'The papers are collected; assignment: note down, while it is fresh, the three difficulties encountered.']
  ],
  drills: [
    { t: 'Commentary on an unseen text', tags: ['Individual', 'Exam', '4 h'], how: 'Real conditions: exam room, intermediate times displayed, double sheet, no help. Corrected the following week with the official grid.' }
  ],
  special: 'Long session: 4 h of exam and 15 min of instructions and collecting.'
});

cw({
  n: 32, f: 'f5', title: 'Correction of the commentary and remediation',
  goal: 'Spot your mistakes using anonymized papers and fix the three most frequent weaknesses.',
  notions: [
    'The model answer: expected central question, outline and table.',
    'The three types of weakness: poor table (fewer than thirty devices), unbalanced outline, incomplete introduction or conclusion.',
    'The grading grid also serves as a review tool.'
  ],
  skills: [
    'Assess your paper with the grid.',
    'Rewrite an introduction based on the remarks received.',
    'Complete a table with the forgotten devices.',
    'Redo a fifteen-row analysis table on a short text.'
  ],
  watch: [
    'Correcting yourself means first looking for your recurring mistakes.',
    'An anonymized paper serves as an example: we do not judge the person.',
    'The session ends with a table workshop: you find your missing devices.'
  ],
  prep: [
    { k: 'To read before the session', t: 'Your own corrected paper, with the teacher’s annotations.' },
    { k: 'Materials', t: 'Model answer of the mock exam; three anonymized papers (good, average, fragile); grading grid; a short text for the table workshop.' }
  ],
  flow: [
    [10, 'accroche', 'Overall feedback', 'Grades, distribution, three strengths and three weaknesses of the class.'],
    [30, 'corr', 'Model answer', 'Table, central question, outline: comparison with the students’ work.'],
    [25, 'exo', 'Analysis of three papers', 'Pairs: assess three anonymized papers with the grid, justify each grade.'],
    [20, 'exo', 'Remediation workshop', 'By profile: table, outline, introduction or conclusion to rewrite, with a tutor.'],
    [25, 'exo', 'Workshop: redoing a table', 'Individual: a short text, a fifteen-row table in 20 minutes, comparison with the model answer in 5 minutes.'],
    [10, 'bilan', 'Wrap-up', 'Everyone writes a progress goal for the essay.']
  ],
  drills: [
    { t: 'Analysis of three anonymized papers', tags: ['Pairs', '25 min'], how: 'Each pair grades the papers with the grading grid and justifies each criterion orally.' },
    { t: 'Remediation by profile', tags: ['Individual', 'Tutor', '20 min'], how: 'Targeted rewriting: introduction, completed table, rebalanced outline or conclusion with an opening.' },
    { t: 'Workshop: redoing a table', tags: ['Individual', '25 min'], how: 'A short text, fifteen table rows in 20 minutes, then comparison with the model answer.' }
  ]
});

cw({
  n: 33, f: 'f5', title: 'Written mock exam no. 2: the essay on a work from the syllabus',
  goal: 'Write a complete essay in four hours, on one of the works studied.',
  notions: [
    'An essay follows an outline in three main parts, each with two or three sub-parts supported by precise examples from the work.',
    'The introduction follows five elements: hook (author’s biography), presentation of the work (underlined title, publication date), summary, central question, announcement of the outline.',
    'The conclusion recaps the answer and opens onto other works.',
    'Recommended split of the 4 hours (to adjust): topic and keywords 15 min, detailed outline 30 min, central question 15 min, introduction 30 min, body 1 h 45, conclusion 20 min, proofreading 25 min.'
  ],
  skills: [
    'Analyze an essay topic and define its keywords.',
    'Build a balanced three-part outline.',
    'Use at least two precise quotations or scenes per sub-part.',
    'Write within the time with a neat layout.'
  ],
  watch: [
    'Do not recite the sheet on the work: answer the precise topic.',
    'Define all the keywords before building the outline.',
    'Plan precise examples from the work for each sub-part, no generalities.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The “The essay to know” sheets of each work studied, and the model introductions and conclusions.' },
    { k: 'Materials', t: 'Three topics to choose from, on three works of the syllabus; double sheets; draft paper; timer displayed.' }
  ],
  flow: [
    [10, 'accroche', 'Exam instructions', 'Seating in the room, presentation of the three topics, reminder of the recommended split of the four hours.'],
    [15, 'exo', 'Analysis of the topic', 'Choice of the topic, definition of the keywords, rewording of the topic.'],
    [30, 'exo', 'Detailed outline', 'Three parts, two or three sub-parts, precise examples from the work.'],
    [15, 'exo', 'Central question', 'A question that follows from the keywords.'],
    [30, 'copie', 'Introduction', 'Five elements, written on the paper.'],
    [105, 'copie', 'Body', 'Three parts written out with partial introductions and conclusions.'],
    [20, 'copie', 'Conclusion', 'Answer and opening onto another work.'],
    [25, 'copie', 'Proofreading', 'Spelling, syntax, neatness, coherence of the outline.'],
    [5, 'bilan', 'Collecting the papers', 'The papers are collected; assignment: note down, while it is fresh, the three difficulties encountered.']
  ],
  drills: [
    { t: 'Essay on a work from the syllabus', tags: ['Individual', 'Exam', '4 h'], how: 'Real conditions. One topic to choose from three. Corrected the following week with the essay grid.' }
  ],
  special: 'Long session: 4 h of exam and 15 min of instructions and collecting.'
});

cw({
  n: 34, f: 'f5', title: 'Correction of the essay and remediation',
  goal: 'Correct the essay using the model answer and rework an outline with precise examples.',
  notions: [
    'The model answer: definition of the keywords, central question, three-part outline.',
    'The most frequent mistakes: descriptive outline, vague examples, introduction without a central question, conclusion without an opening.',
    'The essay grid: analysis of the topic, outline, examples, writing.'
  ],
  skills: [
    'Assess your essay with the grid.',
    'Write a corrected introduction.',
    'Complete an outline with precise examples from the work.',
    'Rework an outline with two precise examples per sub-part.'
  ],
  watch: [
    'Link each sub-part to the central question.',
    'Fix first the most frequent mistake in your paper.',
    'An outline without precise examples from the work does not answer the central question.'
  ],
  prep: [
    { k: 'To read before the session', t: 'Your corrected paper and the “The essay to know” sheet of your work.' },
    { k: 'Materials', t: 'Model answer; three anonymized papers; essay grid; your essay outline.' }
  ],
  flow: [
    [10, 'accroche', 'Overall feedback', 'Grades, three strengths and three weaknesses of the class.'],
    [25, 'corr', 'Model answer', 'Keywords, central question, three-part outline, examples.'],
    [25, 'exo', 'Analysis of three papers', 'Pairs: grading with the grid, oral justification.'],
    [20, 'exo', 'Remediation workshop', 'Rewriting an introduction or an outline by profile.'],
    [25, 'exo', 'Workshop: detailed outline with examples', 'Individual: rework your essay outline and add two precise examples from the work per sub-part.'],
    [15, 'bilan', 'Wrap-up and plan for the last two weeks', 'Calendar of the oral mock exams, list of texts to learn.']
  ],
  drills: [
    { t: 'Analysis of three anonymized papers', tags: ['Pairs', '25 min'], how: 'Grading with the essay grid; each criterion justified orally.' },
    { t: 'Remediation workshop', tags: ['Individual', '20 min'], how: 'Rewriting of an introduction with a central question, or of an outline with precise examples.' },
    { t: 'Detailed outline with examples', tags: ['Individual', '25 min'], how: 'Two precise examples from the work per sub-part, with the quotation or the scene.' }
  ]
});

cw({
  n: 35, f: 'f5', title: 'Oral mock exam no. 1: 30 minutes of preparation and a 20-minute presentation',
  goal: 'Take the oral exam in exam conditions: linear analysis, grammar, chosen work.',
  notions: [
    'Flow of the 20-minute presentation: linear analysis (10 min: presentation 30 s, reading 1 min, central question and outline 30 s, analysis 7 min 30, conclusion 30 s), grammar question (2 min), chosen work (8 min: presentation 3 min, interview 5 min).',
    'Preparation of 30 minutes: drawing of the text, draft of the central question and the outline.',
    'Chosen work: 3-minute presentation, including a 30-second introduction and three precise reasons, illustrated with examples.',
    'Interview: author, movement, the story in detail, favorite character or passage, cover, alternative title, link to personal life or current events.'
  ],
  skills: [
    'Keep within 20 minutes in the time allowed.',
    'Read with precision and expressiveness.',
    'Answer a grammar question in two minutes.',
    'Present the chosen work with three precise reasons and examples.'
  ],
  watch: [
    'Take care with the entrance, the smile and politeness: the examiner is watching from the threshold.',
    'Do not read the draft: rely on the keywords.',
    'Time management: keep an eye on the examiner’s timer.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheets of your 16 texts and the sheet of your chosen work.' },
    { k: 'Materials', t: 'The 16 texts drawn by lot; timer; oral grid; split room, groups of three students.' }
  ],
  flow: [
    [10, 'accroche', 'Instructions and drawing of the texts', 'Reminder of the flow (thirty minutes of preparation, twenty minutes of presentation) and of the grid; drawing of the texts by lot.'],
    [30, 'oral', 'Preparation', 'Thirty minutes of preparation in the room, draft of the central question and the outline.'],
    [60, 'oral', 'Three 20-minute presentations', 'Each presentation: linear analysis, grammar question, chosen work. An observer fills in the grid.'],
    [20, 'bilan', 'Group review', 'Feedback on the three presentations; three findings for the class. Students who are not presenting work independently on their sheets; the session is split into groups of three.']
  ],
  drills: [
    { t: '20-minute presentation', tags: ['Individual', 'Exam', '20 min'], how: '10-minute linear analysis, 2-minute grammar question, 8-minute chosen work. Grid filled in by the examiner.' },
    { t: '30-minute preparation', tags: ['Individual', 'Draft'], how: 'Central question and outline written in 30 minutes on the text drawn by lot; reading prepared aloud.' }
  ]
});

cw({
  n: 36, f: 'f5', title: 'Oral mock exam no. 2 and review of the year',
  goal: 'Take a second oral mock exam, measure your progress and set the final stretch.',
  notions: [
    'Progress is measured by comparing the grid of the first oral mock exam with that of the second.',
    'Public-speaking points to highlight: precise reading, articulation, grounded presence, smile, politeness, clarity of structure.',
    'The final stretch: reread the 16 sheets, redo the tables, practice grammar.'
  ],
  skills: [
    'Improve the two weak points of the first oral mock exam.',
    'Chain linear analysis, grammar and chosen work without dead time.',
    'Plan your review up to the exam.'
  ],
  watch: [
    'Focus on two axes of progress, not on ten.',
    'Do not learn by heart to the point of losing spontaneity.',
    'Get organized: organization is the backbone of the oral exam.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The grid of the first oral mock exam, with its two weak points underlined.' },
    { k: 'Materials', t: 'The 16 texts drawn by lot, timer, oral grid, organization table.' }
  ],
  flow: [
    [10, 'accroche', 'Instructions and drawing of the texts', 'Reminder of the two weak points of the first oral mock exam; drawing of a new text by lot.'],
    [30, 'oral', 'Preparation', 'Thirty minutes of preparation in the room, draft of the central question and the outline.'],
    [60, 'oral', 'Three 20-minute presentations', 'Same conditions as the previous session, comparison with the first grid.'],
    [20, 'bilan', 'Review of the year', 'Each student writes their review plan up to the exam: texts to learn, tables to redo, grammar.']
  ],
  drills: [
    { t: '20-minute presentation', tags: ['Individual', 'Exam', '20 min'], how: 'Same conditions as oral mock exam no. 1; comparison of the two grids to measure progress.' },
    { t: 'Review plan', tags: ['Individual', '10 min'], how: 'A table up to the exam: texts to learn, tables to redo, grammar sessions, calendar.' }
  ]
});
