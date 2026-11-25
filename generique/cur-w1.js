/* Curriculum: weekly sheets, weeks 1 to 9 (Course 1: literary tools).
   One 2-hour session per week. Each sheet: title, goal, concepts, practical skills, points to watch,
   materials and resources, minute-by-minute flow, drills. Source: the document "Training - High School - French". */

const CUR_FORM = {
  f1: { n: 'Course 1', t: 'Literary tools', c: '#b8460f', w: 'Weeks 1 to 9' },
  f2: { n: 'Course 2', t: 'Guided commentary (commentaire composé)', c: '#6b2d5c', w: 'Weeks 10 to 14' },
  f3: { n: 'Course 3', t: 'Essay (dissertation)', c: '#1f6f6b', w: 'Weeks 15 to 24' },
  f4: { n: 'Course 4', t: 'Oral exam', c: '#9a6b00', w: 'Weeks 25 to 30' },
  f5: { n: 'Part 5', t: 'Review', c: '#475569', w: 'Weeks 31 to 36' }
};
const CUR_TYPES = {
  accroche: 'Opening', cours: 'Lesson', exo: 'Exercise', corr: 'Correction', oral: 'Oral', copie: 'Writing', bilan: 'Wrap-up'
};
const CUR_WEEKS = [];
function cw(o) {
  let t = 0;
  o.flow = o.flow.map(([d, k, l, x]) => { const r = { a: t, b: t + d, k, l, x }; t += d; return r; });
  o.len = t;
  CUR_WEEKS.push(o);
}

cw({
  n: 1, f: 'f1', title: 'Reading a text through its words: lexical fields, punctuation, interjections',
  goal: 'Spot three basic devices in a short text and say what they reveal about its theme and emotions.',
  notions: [
    'A lexical field is a set of terms that point to the same theme (time, love, body, suffering, money, city, death, freedom, anger, power…).',
    'The analysis table has three columns: quotation (with line number), literary device, rewording and interpretation.',
    'Punctuation: “!” strong emotion (anger, fear, surprise, pleading); multiple commas: rhythm, momentum, number; “:” explanation; full stops: firmness, harshness; “?” doubt; “…” hesitation, disappointment.',
    'An interjection expresses raw emotion: Ah, Hélas (alas), Zut (darn), Ouf (phew), Aïe (ouch), Bon sang (good grief), Euh (um).',
    'The 15 devices: lexical fields, logical connectors, adverbial complements, punctuation, figures of speech, personal pronouns, pejorative and positive terms, moods and tenses, negation, sentence length, interjections, singular and plural, irony, levels of language, subjects and direct objects.'
  ],
  skills: [
    'Write the list of the 15 devices from memory, using the initials as a help (c, c, c, p, f, p, p, v, n, l, i, s, n, s: the initials of the French terms).',
    'Pick out at least four lexical fields in an excerpt, quoting at least four words with their line numbers.',
    'Match each punctuation mark with the effect it produces in the sentence.',
    'Name the emotion expressed by each interjection in a text.',
    'Write a one-sentence interpretation explaining why the author chose this device.'
  ],
  watch: [
    'Always give the line number in parentheses after each quotation.',
    'Writing “lexical field of theft” is not enough: the right-hand column says what this field reveals (here, the place of money for Harpagon).',
    'Start with the lexical fields: it is the only device that requires reading the whole text.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The “Lesson” sheets of Course 1: lexical fields, punctuation, interjection.' },
    { k: 'Materials', t: '“L’Avare” (The Miser) by Molière, Harpagon’s cry after the theft of his strongbox (exercise 1); texts for exercises 3 (punctuation) and 7 (interjections); the blank list of the 15 devices; the three-column analysis table, printed.' }
  ],
  flow: [
    [10, 'accroche', 'Presentation of the year', 'The courses of the year and their schedule, the 4-hour written exam, the rhythm of one 2-hour session a week and how to work between two sessions.'],
    [15, 'cours', 'Lesson: the 15 devices and lexical fields', 'The list of the 15 devices with the memory aid made of initials; the three-column analysis table; definition of the lexical field, examples of themes, demonstration on a mini-text on the board.'],
    [15, 'exo', 'Memo of the 15 devices and exercise 1: lexical fields', 'Individual. Five minutes to write the list from memory, then comparison with the list from the lesson. Ten minutes to find the lexical fields of Harpagon’s text in the table.'],
    [10, 'corr', 'Correction of exercise 1', 'Five expected fields: theft, murder, comfort, justice, premeditation. Each interpretation is stated aloud.'],
    [10, 'cours', 'Lesson: punctuation', 'The six marks and their effects, with an example sentence for each.'],
    [15, 'exo', 'Exercise 3: finding the punctuation', 'Individual, 10 min: spot each mark in the text. 5-minute correction by checking with a neighbor.'],
    [5, 'cours', 'Lesson: interjections', 'An interjection expresses raw emotion: Ah, Hélas, Zut, Ouf, Aïe, Bon sang, Euh.'],
    [30, 'exo', 'Exercise 7 and a synthesis exercise on an unseen text', 'Individual. Ten minutes on a dialogue (Oh, Oups, Zut, Aïe, Ouf, Euh) to name the emotion of each interjection. Then 14 minutes on an unseen ten-line text: three-column table with at least four lexical fields, three punctuation marks and two interjections. 6-minute correction by swapping papers.'],
    [10, 'bilan', 'Wrap-up', 'Everyone notes the three devices covered and an example. Assignment: redo exercise 1 without the answer key.']
  ],
  drills: [
    { t: 'Memo of the 15 devices', tags: ['Individual', 'From memory', '5 min'], how: 'Blank sheet, no materials. Check against the list from the lesson; underline the omissions in red and write them again.' },
    { t: 'Exercise 1: lexical fields', tags: ['Individual', 'Timed', '10 min'], how: 'Printed text with numbered lines; three-column table to fill in. Scoring: one point per correct field, one point per interpretation.' },
    { t: 'Exercises 3 and 7: punctuation, interjections', tags: ['Individual', 'Class discussion'], how: 'Highlight each mark or interjection, then write its effect in one sentence. Compare with a neighbor before the correction.' },
    { t: 'Synthesis exercise', tags: ['Individual', '14 min'], how: 'An unseen ten-line text; three-column table: lexical fields, punctuation, interjections. Papers are swapped for the correction.' }
  ]
});

cw({
  n: 2, f: 'f1', title: 'Figures of speech: bringing together, substituting, emphasizing',
  goal: 'Recognize the main figures of speech, sort them into three families and explain their effect.',
  notions: [
    'Bringing together: simile (comparison word: like, as, resembles), metaphor (no comparison word), allegory (an abstract concept embodied: the Grim Reaper for Death, Marianne for the Republic, the dove for Peace), personification, animalization.',
    'Substitution: metonymy (the city of love for Paris, the Sun King for Louis XIV), reification (the worker turned into a mere tool, a mere number).',
    'Emphasis: alliteration (repetition of a consonant), assonance (repetition of a vowel), anadiplosis, repetition and anaphora, accumulation, gradation, hyperbole.',
    'Attenuation: litotes (saying less to suggest more: “it’s not bad at all”), euphemism (softening a harsh reality: “she’s gone” for “she died”).',
    'Typical interpretations from the lesson: “makes us hear…”, “exaggerates, amplifies…”, “gives strength to…”.'
  ],
  skills: [
    'Sort a figure into its family (bringing together, substitution, emphasis, attenuation).',
    'Tell a simile from a metaphor by looking for the comparison word.',
    'Pick out at least eight figures in a poem or an excerpt, with their lines or verses.',
    'Describe for each figure the effect produced on the reader, varying the analysis verbs.'
  ],
  watch: [
    'Do not call every image a “metaphor”: without a direct analogy, it may be a metonymy or a personification.',
    'Alliteration = consonant, assonance = vowel: give the repeated sound (the “s” of the snakes, for example).',
    'Do not confuse litotes (saying less) with euphemism (softening).',
    'A figure picked out without an interpretation earns nothing in the table.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The “Figures of speech” sheet from the lesson, in three tables: bringing together, substitution, emphasis and attenuation.' },
    { k: 'Materials', t: 'Text for exercise 2 of the sheet; two short poems printed with numbered verses; the list of the 16 figures on one page; eight isolated sentences for the sorting game.' }
  ],
  flow: [
    [10, 'accroche', 'Quiz on week 1', 'Five minutes of flash quiz on lexical fields, punctuation and interjections; five minutes to bring the list of the 15 devices back to mind.'],
    [20, 'cours', 'Lesson: figures of bringing together', 'Simile, metaphor, allegory, personification, animalization, with the examples from the lesson. For each: definition, marker, effect.'],
    [10, 'exo', 'Sorting game', 'Eight sentences to sort in teams of two: simile or metaphor? One slate raised per team, immediate correction.'],
    [20, 'cours', 'Lesson: substitution, emphasis, attenuation', 'Metonymy, reification, alliteration, assonance, anadiplosis, accumulation, gradation, hyperbole, litotes, euphemism.'],
    [20, 'exo', 'Exercise 2: picking out the figures', 'Individual, 20 min on an excerpt: at least eight figures in the three-column table.'],
    [15, 'corr', 'Correction of exercise 2', 'A student reads one line of their table; the class confirms or corrects. The interpretations are reworded.'],
    [15, 'exo', 'Exercise: figures in a second text', 'Individual, 10 min: five figures to pick out in a short poem, with their family and their effect; 5-minute correction.'],
    [10, 'bilan', 'Wrap-up', 'Each student names three new figures and illustrates them. Assignment: reread the sheet of figures and redo the classification from memory.']
  ],
  drills: [
    { t: 'Sorting game', tags: ['Pairs', 'Slate', '10 min'], how: 'Eight sentences shown one at a time. Each team raises its slate with the name of the figure; justify in one sentence before the correction.' },
    { t: 'Exercise 2: table of figures', tags: ['Individual', 'Timed', '20 min'], how: 'Three-column table: quotation with the line, figure, interpretation. At least eight rows. Correction by reading aloud and group validation.' },
    { t: 'Figures in a second text', tags: ['Individual', '10 min'], how: 'Five figures to pick out in a short poem, with their family and their effect; self-correction with the sheet.' }
  ]
});

cw({
  n: 3, f: 'f1', title: 'The verb and the sentence: moods and tenses, negation, sentence length',
  goal: 'Justify the choice of a verb tense, a negation and a sentence length by their effect on the text.',
  notions: [
    'Imperfect for the background (setting, stable situation) and passé simple for the foreground (action, disruptive element): “Tout était calme dans le château. Soudain, le roi entra brutalement.” (Everything was calm in the castle. Suddenly, the king burst in.)',
    'The passé simple alone expresses a succession of actions; the present of general truth is recognized in proverbs; the simple future marks certainty; the imperative expresses an order, advice, pleading; the passive voice stresses the passivity of the subject.',
    'Negation: ne… pas, jamais, plus, rien, personne, aucun, guère, nulle part, ni… ni, sans, non. It reveals an absence or a refusal.',
    'Short sentences: punchy, direct, firm. Long sentences: explanation, development, justification, lyricism.'
  ],
  skills: [
    'Justify a tense by specifying background or foreground, duration, certainty.',
    'Pick out five negations in an excerpt and say what is absent or refused.',
    'In a dialogue, contrast one character’s short sentences with another’s long sentences and interpret this contrast.',
    'Spot a change of tense in a narrative and say what it marks.'
  ],
  watch: [
    'Never write only “the author uses the passé simple”: say what this tense makes us see.',
    'The negation “ne… que” expresses a restriction: analyze it as such.',
    'For sentences, do not just count them: look for the contrast between two characters or two moments.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The “Lesson” sheets: value of verb moods and tenses, negation, short and long sentences.' },
    { k: 'Materials', t: 'Text of exercise 4 (castle and king), text of exercise 11 (negations, betrayed narrator), dialogue of exercise 12 (Éléonore and Bénédicte); table of tenses and their values.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 2', 'Ten figures of speech shown with a sentence: name and sort them, answers on slates.'],
    [18, 'cours', 'Lesson: moods and tenses', 'From the imperfect to the passé simple, passé simple alone, present of general truth, future, imperative, passive voice. One example per value.'],
    [14, 'exo', 'Exercise 4: moods and tenses', 'Individual, 14 min: pick out the tenses of the text and give the value of each in the three-column table.'],
    [8, 'corr', 'Correction of exercise 4', 'Imperfect for the background to show stability, passé simple for the foreground to show the disruptive element breaking in.'],
    [8, 'cours', 'Lesson: negation', 'The forms to know and the effect of absence or refusal.'],
    [10, 'exo', 'Exercise 11: finding the negations', 'Individual, 6 min, then 4-minute correction: for each negation, the sentence “the negation reveals the absence of…”.'],
    [8, 'cours', 'Lesson: short and long sentences', 'Firmness and rhythm of short sentences, unfolding of long sentences.'],
    [14, 'exo', 'Exercise 12: sentence lengths', 'Pairs, 8 min on the dialogue: who speaks in long sentences, who in short ones, and why? 6-minute correction.'],
    [20, 'exo', 'Synthesis exercise: tenses, negation, sentences', 'Individual, 14 min on a novel excerpt: value of three tenses, two negations, one sentence-length contrast; 6-minute correction.'],
    [12, 'bilan', 'Wrap-up', '8-minute mini-test: one sentence whose tense must be justified, one negation, one short sentence. Collected and corrected at the next session.']
  ],
  drills: [
    { t: 'Exercise 4: value of the tenses', tags: ['Individual', '14 min'], how: 'Highlight each conjugated verb, annotate its tense, write the value in the table. One point per correct and justified value.' },
    { t: 'Exercise 11: negations', tags: ['Individual', '6 min'], how: 'One negation = one row of the table, with the formula “the negation reveals the absence of…”. Compare with a neighbor before the correction.' },
    { t: 'Exercise 12: sentence lengths', tags: ['Pairs', '8 min'], how: 'Two-voice dialogue: each person takes a character and picks out their short and long sentences. Then write a joint interpretation.' },
    { t: 'Synthesis exercise: tenses, negation, sentences', tags: ['Individual', '14 min'], how: 'A novel excerpt: three tenses to justify, two negations, one sentence-length contrast.' }
  ]
});

cw({
  n: 4, f: 'f1', title: 'The logic of the text: connectors, adverbial complements, subjects and direct objects',
  goal: 'Read the logical structure of a text and spot who acts and who is acted upon.',
  notions: [
    'Logical connectors reveal the structure of the reasoning: addition, cause, consequence, opposition, concession, condition, purpose, comparison, illustration, explanation, time, conclusion, alternative, restriction.',
    'Adverbial complements: place, time, cause, consequence, purpose, manner, means, concession, condition, each with its clues (dans, lorsque, parce que, afin de, avec, malgré, si: in, when, because, in order to, with, despite, if).',
    'The subject is the actor of the action. The direct object (COD) or indirect object (COI) is the object of the action: it undergoes it, it is passive.',
    'A change of subject or direct object can show a reversal: Bernard, first the direct object of his jailers, becomes the subject when he takes his fate back in his hands.'
  ],
  skills: [
    'Pick out at least six connectors in a text and name the logical relation of each.',
    'Identify the type of adverbial complement using its clue.',
    'Spot the subject and the direct object of a sentence and interpret who is active and who is passive.',
    'Interpret the sequence of connectors as the plan of the author’s reasoning.'
  ],
  watch: [
    'The same word can have two values (“comme”: cause, comparison, time): rely on the context.',
    'An adverbial complement can be removed; do not confuse it with an essential complement.',
    'For subjects and direct objects, interpret the balance of power, do not stop at the grammatical identification.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheets on logical connectors, adverbial complements, direct objects and subjects.' },
    { k: 'Materials', t: 'Text of exercise 5 (sustainable future), text of exercise 12 on adverbials (Julien, autumn morning), text of exercise 13 (Bernard and the jailers); table of connectors by logical relation.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 3', 'Five sentences: give the tense and its value; two sentences: pick out the negation.'],
    [12, 'cours', 'Lesson: logical connectors', 'The fourteen logical relations, a list of words for each, the typical interpretation.'],
    [15, 'exo', 'Exercise 5: finding the connectors', 'Individual, 15 min: pick out the connectors of the text and name their logical relation in the table.'],
    [8, 'corr', 'Correction of exercise 5', 'We reconstruct the plan of the reasoning from the connectors.'],
    [10, 'cours', 'Lesson: adverbial complements', 'Nine types, with clues and examples.'],
    [15, 'exo', 'Exercise on adverbials', 'Individual, 10 min on Julien’s text; 5-minute class discussion.'],
    [8, 'corr', 'Correction', 'Un matin d’automne (one autumn morning): time; tranquillement (calmly): manner. Each answer is justified by its clue.'],
    [6, 'cours', 'Lesson: subjects and direct objects', 'Definition through action: who does, who undergoes.'],
    [10, 'exo', 'Exercise 13: subjects and direct objects', 'Pairs, 6 min on the jailers’ text, then 4-minute correction.'],
    [15, 'exo', 'Synthesis exercise: connectors, adverbials, subjects', 'Individual, 10 min on an argumentative paragraph: five connectors, three adverbials, who acts and who is acted upon; 5-minute correction.'],
    [13, 'bilan', 'Wrap-up', 'Everyone writes the three steps to read a connector, an adverbial, a subject. Assignment: redo one of the texts at home.']
  ],
  drills: [
    { t: 'Exercise 5: connectors', tags: ['Individual', 'Timed', '15 min'], how: 'Highlight all the connectors; write the logical relation in the table; then reconstruct the plan of the reasoning in three lines.' },
    { t: 'Exercise on adverbials', tags: ['Individual', '10 min'], how: 'One sentence per row; the type is justified by its clue. Class discussion aloud.' },
    { t: 'Exercise 13: subjects and direct objects', tags: ['Pairs', '6 min'], how: 'Underline the subjects in red and the direct objects in blue, then interpret the balance of power between them.' },
    { t: 'Synthesis exercise: connectors, adverbials, subjects', tags: ['Individual', '10 min'], how: 'An argumentative paragraph: five connectors sorted, three adverbials, subjects and direct objects.' }
  ]
});

cw({
  n: 5, f: 'f1', title: 'Point of view and tone: judgment, pronouns, levels of language, number, irony',
  goal: 'Read the narrator’s judgment, voice and distance through five devices.',
  notions: [
    'Pejorative terms (ugly, dirty, petty, unfaithful) and positive terms (beautiful, soft, luminous, divine, sublime): they steer the reader’s judgment.',
    'Personal pronouns: “I” the intimate point of view; “you” (tu) direct address; “one/we” (on) a vague group; “we” (nous) union, solidarity; “you” (vous) respect, distance or accusation; “he, she, they” putting at a distance.',
    'Levels of language: informal, standard, formal; they characterize a character, a milieu, or create a contrast.',
    'Singular and plural: the singular expresses solitude and individuality, the plural the multitude (one against many).',
    'Irony: saying the opposite of what one thinks in order to criticize or mock.'
  ],
  skills: [
    'Pick out the pejorative and positive terms and say what portrait they compose.',
    'Interpret the use of each personal pronoun in a monologue.',
    'Identify a character’s level of language from five quoted expressions.',
    'Contrast singular and plural terms to explain a balance of power.',
    'Spot an irony by looking for what the author wants to criticize.'
  ],
  watch: [
    'An adjective is not always pejorative or positive by nature: take the context into account.',
    '“Vous” can be polite or accusatory: choose according to the scene.',
    'An irony without a target (“who is aimed at?”) is not an analyzed irony.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheets on pejorative and positive terms, personal pronouns, levels of language, singular and plural.' },
    { k: 'Materials', t: 'Text of exercise 6 (Clara and Jérôme), text of exercise 8 (monologue of mourning), text of exercise 9 (peasant and princess), text of exercise 10 (one against many); three ironic sentences for the end of the session.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 4', 'Ten connectors to sort by logical relation, on slates.'],
    [12, 'cours', 'Lesson: pejorative and positive terms, personal pronouns', 'The terms that steer the reader’s judgment (pejorative and positive), then the table of the six pronouns and their effects.'],
    [20, 'exo', 'Exercises 6 and 8: judgment and pronouns', 'Individual. Exercise 6 on the portrait of Clara and Jérôme (6 min), exercise 8 on the monologue of mourning (8 min). 6-minute class correction.'],
    [10, 'cours', 'Lesson: levels of language, singular and plural', 'Informal, standard, formal; the singular for solitude, the plural for the multitude.'],
    [22, 'exo', 'Exercises 9 and 10: levels of language, number', 'Individual. Exercise 9 on the peasant and the princess (8 min), exercise 10 on the text “one against many” (6 min). 8-minute correction.'],
    [8, 'cours', 'Lesson: irony', 'Saying the opposite of what one thinks in order to criticize or mock: find the target.'],
    [30, 'exo', 'Irony and synthesis table on an excerpt', 'Individual. Three ironic sentences to analyze: who is targeted, what criticism (6 min). Then a short-story excerpt: at least one finding per device of the session, with interpretation (15 min). 9-minute correction.'],
    [10, 'bilan', 'Wrap-up of the devices course', '8-minute test: the list of the 15 devices from memory, with an example for three of them. Announcement: the test on an unseen text will take place in week 9.']
  ],
  drills: [
    { t: 'Exercises 6 and 9: judgment and levels of language', tags: ['Individual', '6 to 8 min'], how: 'Underline the terms and their levels, then write a one-sentence interpretation describing the resulting portrait.' },
    { t: 'Exercise 8: the six pronouns', tags: ['Individual', '8 min'], how: 'Pick out each pronoun, indicate its person and its effect (intimacy, address, distance, accusation).' },
    { t: 'Exercise 10 and irony', tags: ['Pairs', '12 min'], how: 'Contrast singular and plural in the text, then each pair rewords an irony by saying what the author criticizes.' },
    { t: 'Synthesis table', tags: ['Individual', '15 min'], how: 'A short-story excerpt: at least one finding for each of the five devices of the session, with interpretation.' }
  ]
});

cw({
  n: 6, f: 'f1', title: 'Literary genres: poetry, narrative and novel, theater, literature of ideas',
  goal: 'Identify the genre and sub-genre of a text and use the technical vocabulary that goes with them.',
  notions: [
    'Poetry works first on form (rhythm, musicality, figures, vocabulary). Sub-genres: sonnet (14 lines: two quatrains, two tercets), epic, ode, elegy, ballad, rondeau, madrigal, blason, calligram. Poetry in verse (stanzas) or in prose.',
    'Narrative and novel: technical components of a narrative, types of point of view (focalization), narrator.',
    'Theater: a work written to be performed; vocabulary of staging, types of comedy.',
    'Literature of ideas: types of arguments, of reasoning and ways of convincing.',
    'Identifying the precise genre of the text (sonnet, excerpt from a tragedy, pamphlet, fable) makes it possible to choose the technical vocabulary in the commentary.'
  ],
  skills: [
    'Define each of the four genres in one sentence and give an example of a work.',
    'Name the nine sub-genres of poetry with their definition.',
    'Identify the genre and sub-genre of six unseen excerpts and justify.',
    'Reuse the technical vocabulary of the genre in a sentence of analysis.'
  ],
  watch: [
    'Do not confuse genre (the general form) with register (the tone); the following week is devoted to registers.',
    'A prose poem has neither verses nor stanzas: do not speak of rhymes or quatrains.',
    'A sonnet is defined by its structure (4, 4, 3, 3), not by its theme.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheet “Literary genres”: the four genres, the sub-genres of poetry and the associated vocabulary.' },
    { k: 'Materials', t: 'Table of the sub-genres of poetry; six short excerpts (a sonnet, a theater scene, a novel paragraph, an essay excerpt, a blason, a prose poem); list of technical vocabulary by genre.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 5', 'Five pronouns to interpret in a sentence; two sentences to classify by level of language.'],
    [20, 'cours', 'Lesson: poetry', 'Definition, nine sub-genres, vocabulary (verse, stanza, rhymes, rhythm), poetry in verse and in prose.'],
    [18, 'cours', 'Lesson: narrative and novel', 'Narrator, points of view, components of the narrative, major forms (novel, memoirs, autobiographical narrative).'],
    [18, 'cours', 'Lesson: theater', 'Text and performance, staging, comedy of words, of gestures, of situation, of character.'],
    [18, 'cours', 'Lesson: literature of ideas', 'Arguing and convincing: types of arguments, reasoning, essay, speech, letter.'],
    [15, 'exo', 'Exercise: genre and sub-genre', 'In teams of two, six excerpts to identify with three supporting clues for each. Correction by group.'],
    [15, 'exo', 'Game: the sub-genres of poetry', 'In teams of two, nine cards (sonnet, epic, ode, elegy, ballad, rondeau, madrigal, blason, calligram) to match with their definition in 10 min; 5-minute correction.'],
    [8, 'bilan', 'Wrap-up', 'Everyone writes the four genres with an example of a work from their syllabus.']
  ],
  drills: [
    { t: 'Exercise: genre and sub-genre', tags: ['Pairs', '15 min'], how: 'Six excerpts; for each, name the genre and sub-genre and give three clues. Answers are compared between teams.' },
    { t: 'Vocabulary sheet by genre', tags: ['Individual', 'To complete'], how: 'A four-column table completed during the session with the technical words of each genre. It serves as a reference for the commentary.' },
    { t: 'Game of the sub-genres of poetry', tags: ['Pairs', '10 min'], how: 'Nine cards to match with their definition; correction by exchange between teams.' }
  ]
});

cw({
  n: 7, f: 'f1', title: 'Literary registers: eleven tones and their clues',
  goal: 'Recognize the register of a text from its clues and describe the atmosphere created.',
  notions: [
    'A register is the tone of a text, the effect the author seeks to produce on the reader.',
    'Eleven registers: lyrical, tragic, comic, realistic, fantastic, dramatic, epic, pathetic, satirical, polemical, epideictic.',
    'Family of emotion: lyrical (personal feelings, poetic rhythm), tragic (fate, death, duty), dramatic (tension, waiting, conflict), pathetic (pity, compassion).',
    'Family of laughter and criticism: comic, satirical (mocking criticism, irony, caricature), polemical (combative tone, attack on an idea), epideictic (praise or blame).',
    'Family of scale and reality: epic (superhuman feats, grandeur), fantastic (hesitation between reason and imagination, strangeness), realistic (raw reality, precise and concrete vocabulary).'
  ],
  skills: [
    'Match each register with its clues: vocabulary, punctuation, figures, rhythm.',
    'Identify the dominant register of an excerpt and quote at least three clues.',
    'Spot a secondary register and say what it adds (for example the pathetic in a realistic narrative).',
    'Use the register to formulate a commentary question (problématique).'
  ],
  watch: [
    'A text can combine several registers: tell the dominant one from the secondary ones.',
    'The pathetic seeks to move through pity; the lyrical expresses the author’s feelings: do not confuse them.',
    'A register is not an opinion about the text: it is proved by quoted clues.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheet “Literary registers”: definitions and clues of each of the eleven registers.' },
    { k: 'Materials', t: 'Eleven short excerpts, one per register, numbered; the “register / definition / clues” grid; classroom timer.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 6', 'Four genres, five sub-genres of poetry: definition to complete.'],
    [30, 'cours', 'Lesson: the eleven registers in three families', 'Emotion (10 min), laughter and criticism (10 min), scale and reality (10 min). For each: definition, clues, example.'],
    [20, 'exo', 'Exercise: matching excerpts and registers', 'Individual, 20 min: eleven excerpts to match, with three clues for each.'],
    [10, 'corr', 'Correction', 'Each register is justified by its quoted clues.'],
    [20, 'exo', 'Workshop: dominant and secondary register', 'In teams of two, a long excerpt; list of the clues of the dominant register and of a secondary register, 2-minute oral report.'],
    [20, 'copie', 'Writing workshop: the same fact in two registers', 'Individual, 15 min: rewrite a three-line news item in two registers of choice (comic, pathetic, epic, satirical), then reading of two pieces and identification of the clues (5 min).'],
    [12, 'bilan', 'Wrap-up', 'The eleven registers from memory, grouped into three families. Assignment: redo the list of registers from memory.']
  ],
  drills: [
    { t: 'Exercise: matching excerpts and registers', tags: ['Individual', 'Timed', '20 min'], how: 'Eleven numbered excerpts, eleven registers. For each excerpt, three quoted clues in a table.' },
    { t: 'Workshop on dominant and secondary register', tags: ['Pairs', '2 min oral'], how: 'Each team announces its dominant register, its clues and a secondary register in two minutes. The others pick out a forgotten clue.' },
    { t: 'Writing workshop in two registers', tags: ['Individual', '15 min'], how: 'Rewrite a news item in two registers, then have a neighbor identify the clues.' }
  ]
});

cw({
  n: 8, f: 'f1', title: 'Literary movements I: from humanism to the Enlightenment',
  goal: 'Place an author in their movement by following the common format: break, formal characteristics, themes.',
  notions: [
    'Common format for each movement: “develops in break with…”, formal characteristics, favored themes.',
    'Humanism (16th century): return to ancient authors, confidence in man, criticism of political and religious abuses.',
    'The Pléiade (mid-16th century): renewing French poetry; themes: love, nature, passing time, the greatness of France.',
    'The Baroque: instability of the world, flight of time, illusion of appearances, inconstancy of feelings.',
    'Classicism (17th century): to please and to instruct, rules, balance, moral lesson and reflection on the human condition.',
    'The Enlightenment (18th century): reason, science and education, search for the best form of government.'
  ],
  skills: [
    'Complete the fill-in-the-blank hook of an introduction with a literary movement.',
    'Place five movements on a timeline, with one author for each.',
    'Match an excerpt to its movement using its themes and form.',
    'Use the movement to place a work in its historical and literary context.'
  ],
  watch: [
    'Do not remember only dates: remember the break, because it explains the themes.',
    'The hook of an introduction must name the movement, not just the author.',
    'An author may belong to several movements during their life: indicate the one that matches the text.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheets on humanism, the Pléiade, the Baroque, classicism and the Enlightenment.' },
    { k: 'Materials', t: 'Blank timeline; a “movement, break, form, themes, authors” table; the fill-in-the-blank hook text (“X is a French writer of the … century belonging to the … movement”).' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 7', 'Eleven registers: a clue is shown, the class names the register.'],
    [15, 'cours', 'Common format and humanism', 'Presentation of the format in three sentences, then humanism: context, characteristics, themes, authors.'],
    [12, 'cours', 'The Pléiade', 'Break, forms, themes, poets.'],
    [12, 'cours', 'The Baroque', 'Instability, illusion, flight of time.'],
    [15, 'cours', 'Classicism', 'Rules, balance, pleasing and instructing.'],
    [15, 'cours', 'The Enlightenment', 'Reason, science, education, government.'],
    [15, 'exo', 'Exercise: timeline and hooks', 'Individual, 15 min: place the five movements on the timeline; write three hooks with the fill-in-the-blank text for three authors.'],
    [15, 'exo', 'Exercise: placing three authors', 'Individual, 10 min: three short excerpts to link to their movement (break, themes, form); 5-minute correction.'],
    [13, 'bilan', 'Wrap-up', 'Each student states a movement, its break and an author. Assignment: memorize the timeline.']
  ],
  drills: [
    { t: 'Timeline of the five movements', tags: ['Individual', 'From memory'], how: 'Blank timeline to complete: movements, centuries, authors, themes. To be reproduced from memory at the end of the week.' },
    { t: 'Introduction hooks', tags: ['Individual', 'Fill in the blanks', '15 min'], how: 'Three hooks to write following the fill-in-the-blank text: author, century, movement, break, form, themes.' },
    { t: 'Placing three authors', tags: ['Individual', '10 min'], how: 'Three excerpts to link to their movement by giving two clues.' }
  ]
});

cw({
  n: 9, f: 'f1', title: 'Literary movements II: from Romanticism to the New Novel',
  goal: 'Put eight movements of the 19th and 20th centuries back in their context and recognize their style in an excerpt.',
  notions: [
    'Romanticism: primacy of the self, feelings, nature, exoticism, the fantastic, great questions about the human condition.',
    'The Parnassian movement: art for art’s sake, cold and unchanging beauty of idealized forms rather than the outpourings of the self.',
    'Realism and naturalism: representing society as it is, precise observation, determinism.',
    'Symbolism: suggesting rather than saying, musicality, correspondences.',
    'Surrealism: freeing the imagination, dream, automatic writing.',
    'The absurd: the world has no meaning; the New Novel: questioning of character, plot and traditional narrative.'
  ],
  skills: [
    'Place eight movements on a timeline, with an author and a work for each.',
    'Match eight short excerpts to their movement, justifying with two clues.',
    'Contrast two neighboring movements (Parnassian and Romanticism, realism and naturalism) in one sentence.',
    'Use the movement to place a syllabus work (for example Musset, Balzac, Rimbaud, Sarraute).'
  ],
  watch: [
    'Many movements define themselves against the previous one: remember this opposition.',
    'The syllabus works serve as examples: link Balzac to realism, Musset to Romanticism, Sarraute to the New Novel.',
    'Do not confuse the Parnassian movement, turned toward form, with Romanticism, turned toward the self.'
  ],
  prep: [
    { k: 'To read before the session', t: 'The sheets on Romanticism, the Parnassian movement, realism, naturalism, symbolism, surrealism, the absurd and the New Novel.' },
    { k: 'Materials', t: 'Timeline of the 19th and 20th centuries; eight short excerpts to match; “movement, break, form, themes, authors” table.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz on week 8', 'Five movements to recognize from a context sentence.'],
    [15, 'cours', 'Romanticism', 'Break with classicism, themes of the self, nature and the fantastic, authors.'],
    [10, 'cours', 'The Parnassian movement', 'Art for art’s sake and perfect form, opposed to the outpourings of the self.'],
    [12, 'cours', 'Realism and naturalism', 'Observation, society, determinism.'],
    [10, 'cours', 'Symbolism', 'Suggestion, musicality, correspondences.'],
    [12, 'cours', 'Surrealism', 'Dream, unconscious, automatic writing.'],
    [10, 'cours', 'The absurd', 'A world without meaning, characters in search of meaning.'],
    [8, 'cours', 'The New Novel', 'Questioning of character and plot.'],
    [10, 'exo', 'Exercise: matching eight excerpts to their movements', 'Pairs, 10 min: two clues per excerpt, quick report.'],
    [20, 'exo', 'End-of-course test on an unseen text', 'Individual, 15 min: for an unseen text, two devices with interpretation, the genre, the register and the movement; 5-minute correction.'],
    [5, 'bilan', 'Wrap-up of the course', 'Review of the test: each person notes the devices they still confuse. Assignment: redo the table of the 15 devices from memory.']
  ],
  drills: [
    { t: 'Timeline of the eight movements', tags: ['Individual', 'From memory'], how: 'Blank timeline: place the eight movements, an author and a work. Correction with the sheet.' },
    { t: 'Matching eight excerpts to their movements', tags: ['Pairs', '10 min'], how: 'Each pair matches an excerpt to a movement and gives two clues (theme, form).' },
    { t: 'End-of-course test', tags: ['Individual', '15 min'], how: 'Unseen text: two interpreted devices, genre, register, movement. Corrected during the session.' }
  ]
});
