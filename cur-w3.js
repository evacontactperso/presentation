/* Curriculum: weeks 15 to 24 (Course 3: essay, "dissertation"), one work per week.
   Each sheet follows the same session: reading quiz, identity and biography, summary, keywords of the theme,
   "the essay to know", introduction practice, conclusion and opening, quotation workshop. */

function diss(o) {
  const odd = o.n % 2 === 1;
  const flow = [
    [6, 'accroche', 'Reading quiz', `Five questions on the plot of ${o.short}: ${o.quiz}`],
    [10, 'cours', 'Identity card and biography', `${o.ident} The biography serves as the hook of the introduction: ${o.bio}`],
    [10, 'exo', 'Summary of the work', `Individual, 5 min: summarize ${o.short} from memory in ten lines, then compare with the summary on the sheet. ${o.resume}`],
    [10, 'cours', 'Keywords of the theme', o.kw],
    [30, 'cours', 'The essay to know', o.plan],
    [18, 'copie', 'Practice: the introduction', `Individual, 15 min, then 3-minute cross-proofreading. Five elements: hook (biography), presentation of the work (underlined title, publication date), detailed summary, central question, announcement of the outline. ${o.intro}`],
    [10, 'copie', 'Conclusion and opening', `Answer to the central question, reminder of the main parts and sub-parts, detailed opening. ${o.concl}`]
  ];
  flow.push([odd ? 20 : 15, 'exo', 'Workshop: quotations and detailed outline', `Individual, ${odd ? 15 : 10} min: choose three quotations or scenes from ${o.short} to illustrate a sub-part, with the effect or device that makes them convincing; 5-minute class discussion.`]);
  flow.push([odd ? 6 : 11, 'bilan', 'Wrap-up', o.bilan]);
  cw({
    n: o.n, f: 'f3', title: o.title, goal: o.goal, notions: o.notions, skills: o.skills, watch: o.watch,
    prep: [
      { k: 'To read before the session', t: o.read },
      { k: 'Materials', t: `The sheet on ${o.short} (biography, summary, keywords, essay to know, introduction and conclusion, other works, practice); the copy of the work; a sheet for the three-part outline.` }
    ],
    flow,
    drills: [
      { t: 'Ten-line summary', tags: ['Individual', '5 min'], how: `Summarize ${o.short} from memory in ten lines, then compare with the summary on the sheet. Omissions are underlined and rewritten.` },
      { t: 'Three-part outline with examples', tags: ['Individual', 'On paper'], how: `Write the “essay to know” outline with, under each sub-part, a precise quotation or scene from ${o.short}. Expected example: ${o.ex}` },
      { t: 'Written introduction', tags: ['Individual', 'Timed', '15 min'], how: 'Complete writing on the paper, in a single paragraph with a three-square indent, then cross-proofreading with a five-element grid.' },
      { t: 'Workshop: quotations and detailed outline', tags: ['Individual', odd ? '15 min' : '10 min'], how: `Three quotations or scenes from ${o.short} for one sub-part, with the effect to analyze; class discussion aloud.` }
    ]
  });
}

diss({
  n: 15, k: 8, short: '“Manon Lescaut”', src: 'Text of the work, chosen by the teacher (for example an episode of the flight from Amiens, the escape from Saint-Lazare or Louisiana).',
  title: '“Manon Lescaut” by Abbé Prévost: outcast characters, pleasures of the novel',
  goal: 'Build an essay outline on the reader’s pleasure and the characters’ marginality, with precise examples.',
  quiz: 'the lovers, the flight from Amiens, the seminary, Chaillot, Saint-Lazare, Louisiana.',
  ident: 'The story of the Chevalier Des Grieux and Manon Lescaut, last volume of the “Mémoires et aventures d’un homme de qualité”, 1731; memoir novel, first-person narration.',
  bio: 'Prévost was born in 1697 in Hesdin, became a priest, left the abbey without permission and went into exile in England and Holland; the novel caused a scandal in 1731 and was banned in 1733.',
  resume: 'The Chevalier Des Grieux tells of his love for Manon, an attractive and ambitious young woman. Blinded by his passion, he leaves the religious life he was destined for and slides into debauchery: cheating, theft, prison, up to deportation to Louisiana. The summary of the session lists the main episodes in order.',
  kw: 'Definitions of “character” (a fictional person created by the author), “on the margins” (from the Latin margo: edge, periphery), “pleasure” (satisfaction brought by reading), “romanesque” (the pleasure of adventures and strong emotions). Each word is defined, then linked to the work.',
  plan: 'The reader enjoys reading “Manon Lescaut” because they are: fascinated by the characters’ marginality and immorality (moral marginality, itinerary); moved by romantic passion (declarations, actions, obstacles); carried along by the adventures (fast-moving events, varied settings such as Chaillot); interested in Prévost’s moral criticism (the author’s Notice, Des Grieux as a model young man, figures of reason like Tiberge); troubled by the ambiguity of the moral lesson (characters who are both guilty and victims); interested in the social criticism (judicial system, hierarchies, the power of fortune, inequality between the sexes).',
  intro: 'Expected central question: how do the characters’ marginality and the richness of the plot make the reader’s pleasure?',
  concl: 'Opening suggested by the sheet: “La Princesse de Clèves”, where reason comes before passion, unlike Manon; other works on the sheet: “Les Misérables”, “Romeo and Juliet”.',
  bilan: 'Each student writes the six arguments of the sheet in one line. Assignment: redo the outline from memory.',
  notions: [
    'Genre: memoir novel, with a narrator who is also the central character. Theme: “Outcast characters, pleasures of the novel”.',
    'Marginality: moral (the characters do not share the norms of the rest of society), social, geographic.',
    'Pleasures of the novel: passion, adventures, plot twists, variety of places (Amiens, Saint-Lazare, Chaillot, Louisiana).',
    'Moral criticism: the “Avis de l’auteur” (Author’s Notice), the contrast between the wise Des Grieux of the beginning and his falls, the figure of Tiberge.',
    'Social criticism: the judicial system, the rigidity of hierarchies, the power of fortune.'
  ],
  skills: [
    'Write an introduction with a biographical hook, presentation and summary.',
    'Justify each sub-part with a scene or a quotation from the work.',
    'Explain the effect of first-person narration: the reader’s empathy for Des Grieux.',
    'Propose an opening comparing Manon with another heroine.'
  ],
  watch: [
    'Des Grieux is the narrator: he pleads his case, the reader is placed in a position of empathy.',
    'Do not reduce the work to a love story: moral and social criticism matter just as much.',
    'Manon is both attracted by money and capable of sincere love: the ambiguity is the key point.'
  ],
  read: 'The whole “Manon Lescaut” sheet, in particular the summary, the definitions of the theme and the “to know” outline.',
  ex: 'the escape from Saint-Lazare or the duel in Louisiana to illustrate the pleasure of adventure.'
});

diss({
  n: 16, k: 0, short: '“La Peau de chagrin”', g: 'negation (total, partial, restrictive, lexical).', e: 'politeness: practice the entrance and exit from the room, the greeting, the thank-you, with a partner who plays the examiner.',
  title: '“La Peau de chagrin” (The Magic Skin) by Balzac: novels of energy, creation and destruction',
  goal: 'Understand how Balzac contrasts the intense, destructive life with the contemplative, creative life, while keeping the ambiguity.',
  quiz: 'Raphaël de Valentin, the skin, the talisman that shrinks with each wish, the intense life, the contemplative life.',
  ident: '“La Peau de chagrin”, 1831, novel, part of “La Comédie humaine”; theme “novels of energy, creation and destruction”.',
  bio: 'Balzac was born in 1799 in Tours; his family changed his name from “Balssa” to “Balzac”; he took up law to please his father but dreamed of writing.',
  resume: 'A ruined young man receives a magic skin that grants his wishes, but shrinks with each wish, and his life grows shorter along with it. The summary of the session follows the stages of the novel, from the first wish to the hero’s death.',
  kw: 'Definitions of “novel” (a plot built with characters in a space-time setting), “energy” (the life force that animates beings, according to Balzac), “creation” and “destruction”. Each word is linked to the skin that shrinks.',
  plan: 'The intense life (based on Willing and Being able) is destructive in the long term: debauchery, exhaustion of the life energy. The contemplative life (based on Knowing) preserves energy and generates lasting intellectual creations. However, Balzac’s moral is ambiguous: the contemplative life can also lead to death through renouncing desire and pleasure, and the intense life can produce a sublime vitality. Finally, the novel is both realistic and fantastic.',
  intro: 'Expected central question: how does Balzac show that life energy can be creative or destructive depending on how it is spent?',
  concl: 'Openings on the sheet: Goethe’s “Faust”, Oscar Wilde’s “The Picture of Dorian Gray”, Balzac’s “Le Chef-d’œuvre inconnu” (The Unknown Masterpiece).',
  bilan: 'Each student writes three lines: intense life, contemplative life, ambiguity. Assignment: reread the chapters on the skin.',
  notions: [
    'Genre: novel, mixing realism (settings, Parisian society) and the fantastic (the talisman). Theme: “Novels of energy: creation and destruction”.',
    'Life energy: everyone has a limited amount, which they can spend or preserve.',
    'Intense life: willing and being able, pleasure and debauchery, destructive in the long term.',
    'Contemplative life: knowing, preserving one’s energy, creating lasting works.',
    'Ambiguity: neither of the two lives is clearly better; the reader must choose.'
  ],
  skills: [
    'Explain the skin as a symbol of life energy.',
    'Link each sub-part to a scene of the novel.',
    'Show the ambiguity of Balzac’s moral by quoting both sides.',
    'Write an opening that compares the pact with the talisman to another literary pact.'
  ],
  watch: [
    'Do not conclude that Balzac condemns the intense life: the ambiguity is intended.',
    'The novel is both realistic and fantastic: do not choose one against the other.',
    'Make the link between the shrinking of the skin and the shrinking of the hero’s life.'
  ],
  read: 'The “La Peau de chagrin” sheet, with the “to know” outline and the definitions of the theme.',
  ex: 'the skin that shrinks after each wish, to illustrate the loss of energy.'
});

diss({
  n: 17, k: 9, short: '“Sido” and “Les Vrilles de la vigne”', src: 'Text of the work, chosen by the teacher (for example a page about the garden or about Colette’s mother).',
  title: '“Sido” and “Les Vrilles de la vigne” (The Tendrils of the Vine) by Colette: the celebration of the world',
  goal: 'Show how Colette celebrates loved ones and nature, while keeping an ambiguous relationship with the city and adults.',
  quiz: 'Sido, the father, the brothers, the garden, the animals, the city, Les Vrilles de la vigne.',
  ident: '“Sido and Les Vrilles de la vigne”, 1908 for the Vrilles and 1930 for Sido; autobiographical narrative; theme “the celebration of the world”.',
  bio: 'Colette was born in 1873 in Saint-Sauveur-en-Puisaye, in a house surrounded by gardens; her mother, Sido, passed on to her a taste for nature, and she grew up between library and garden.',
  resume: 'Colette evokes her mother Sido, her father, her brothers and the garden of her childhood, then, in the Vrilles de la vigne, her memories of nature, the city and adulthood. The summary of the session distinguishes the two collections.',
  kw: 'Definitions of “celebration” (an act by which one honors a person, an event or a value), “world” (all the beings, places and things that surround Colette).',
  plan: 'A celebration of the world of loved ones: the family, including the mother, independent, charismatic, witty, strong-willed, who speaks the language of nature. A celebration of nature and wild life: plants, animals, the senses that breathe out. An ambiguous relationship to the world of the city and adults: rejection of the city, exile, nostalgia.',
  intro: 'Expected central question: how does Colette celebrate her childhood, her loved ones and nature?',
  concl: 'Openings on the sheet: George Sand’s “Histoire de ma vie”, Rousseau’s “Reveries of the Solitary Walker”, Proust’s “Swann’s Way”.',
  bilan: 'Each student cites one scene for each main part. Assignment: redo the outline from memory.',
  notions: [
    'Genre: autobiographical narrative. Theme: “The celebration of the world”.',
    'Loved ones: the mother, an independent woman with firm opinions and a strong character, symbol of freedom, who seems to speak the language of nature.',
    'Nature and wild life: slow and precise observation, richness of figures of speech, tribute to the richness of memories.',
    'The city and adults: a more ambiguous world, between rejection and nostalgia.',
    'Useful comparison: Rousseau and Colette observe nature slowly and see it as a refuge.'
  ],
  skills: [
    'Quote two passages that illustrate the celebration of the mother.',
    'Spot Colette’s sensory writing (smells, colors, sounds).',
    'Explain the ambiguity of the relationship to the city.',
    'Propose an opening comparing Colette and Rousseau.'
  ],
  watch: [
    'Do not read Sido as a simple biography: it is a celebration, so a text that chooses and embellishes.',
    'Link form to content: the precision of the figures of speech pays tribute to the richness of the memories.',
    'Do not forget the two collections in the introduction: Sido and Les Vrilles.'
  ],
  read: 'The “Sido and Les Vrilles de la vigne” sheet, with the two summaries and the three-part outline.',
  ex: 'a quotation about the mother and the garden to illustrate the celebration of loved ones.'
});

diss({
  n: 18, k: 0, short: '“Pour un oui ou pour un non”', g: 'logical analysis of a sentence from the play, from the main clause to the subordinate clauses.', e: 'relationship with the interlocutor: answer a surprise question while looking at the person, rewording, without rushing.',
  title: '“Pour un oui ou pour un non” (For Yes or For No) by Nathalie Sarraute: theater and quarrel',
  goal: 'Explain how a quarrel about speech becomes a quarrel about substance, and what theater brings to this quarrel.',
  quiz: 'the two friends, the reproach about the tone, the silences, speech, the quarrel.',
  ident: '“Pour un oui ou pour un non”, Nathalie Sarraute, 1986; play; theme “Theater and quarrel”.',
  bio: 'Sarraute was born in 1900 in Russia, grew up between Russia and France, studied in Oxford and Berlin, then settled in Paris; she is associated with the New Novel.',
  resume: 'Two friends quarrel because of a small phrase, a tone, a silence. The quarrel spreads over speech, then over the substance of their relationship. The summary of the session retraces the stages of the quarrel.',
  kw: 'Definitions of “theater” (a work written to be performed on stage in front of an audience, which directly represents the action) and of “quarrel” (a confrontation through speech, which reveals deeper disagreements).',
  plan: 'Theme 1: the evolution of the object of the quarrel, from a superficial quarrel about speech, about form, to a more fundamental quarrel about substance (reproaches, incompatible worlds). Theme 2: speech, between concealment and revelation of the truth about the reason for the quarrel. Theme 3: speech, between violence and appeasement (rise in violence, then an externalization that calms). Theme 4: theater and quarrel, what they bring each other (the quarrel is useful to theater, theater is useful to the quarrel).',
  intro: 'Expected central question: how does the quarrel move the action forward and reveal the truth about the characters?',
  concl: 'Opening to choose from the other works of the syllabus: “On ne badine pas avec l’amour” (games of speech) or “Le Menteur” (lying and comedy).',
  bilan: 'Each student writes the four themes in one line. Assignment: reread the whole play.',
  notions: [
    'Genre: play. Theme: “Theater and quarrel”.',
    'Quarrel about form: speech, the meaning of words, a tone.',
    'Quarrel about substance: reproaches, incompatible worlds.',
    'Speech reveals or conceals the truth about the reason for the quarrel.',
    'Speech can rise to violence, then calm through externalization.'
  ],
  skills: [
    'Quote one line from a quarrel about form and one from a quarrel about substance.',
    'Analyze the role of silences, repetitions and short sentences in the play.',
    'Show that theater stages the quarrel and that the quarrel feeds theater.',
    'Propose an opening comparing two theater quarrels.'
  ],
  watch: [
    'Do not sum up the play as “two friends quarreling over nothing”: the quarrel about substance is essential.',
    'Think of the staging: silences and gestures matter.',
    'Link each theme to precise lines.'
  ],
  read: 'The “Pour un oui ou pour un non” sheet, with the four themes and the definitions of the theme.',
  ex: 'a line about the tone to illustrate the quarrel about form.'
});

diss({
  n: 19, k: 10, short: '“On ne badine pas avec l’amour”', src: 'Text of the work, chosen by the teacher (for example a scene between Camille and Perdican).',
  title: '“On ne badine pas avec l’amour” (No Trifling with Love) by Musset: games of the heart and of speech',
  goal: 'Show how speech serves the game, reveals love, then becomes guilty.',
  quiz: 'Camille, Perdican, the convent, Rosette, the trifling, the tragic ending.',
  ident: '“On ne badine pas avec l’amour”, Alfred de Musset, 1834; play; theme “games of the heart and of speech”.',
  bio: 'Musset was born in 1810 into a cultured family of the lesser nobility, shone at the Lycée Henri-IV and, very young, frequented Charles Nodier’s Romantic circles.',
  resume: 'Perdican and Camille, cousins, meet again. Each hides their love out of pride and tests the other; the game makes Rosette suffer and leads to death. The summary of the session follows the three acts.',
  kw: 'Definitions of “games” (strategies, manipulations, tests between characters), “heart” (feelings) and “speech” (instrument of the games, of the confession and of the fault).',
  plan: 'Deceitful and manipulative speech: the characters use words to play with the other’s feelings (cause: wounded pride, fear of being deceived). Revealing speech: speech also reveals growing feelings, true love. Guilty speech: the trifling has tragic consequences, the work is tragic.',
  intro: 'Expected central question: how is speech both the means of the love game and the cause of the drama?',
  concl: 'Opening to choose from the other works of the syllabus: “Pour un oui ou pour un non” (quarrel through speech) or “Le Menteur” (game and lying).',
  bilan: 'Each student writes the three kinds of speech (deceitful, revealing, guilty). Assignment: redo the outline from memory.',
  notions: [
    'Genre: Romantic play, mixing comedy and tragedy. Theme: “Games of the heart and of speech”.',
    'Cause of the game: the wounded pride of Camille and Perdican, who love each other but dare not admit it.',
    'Camille fears being deceived because of the stories she heard in the convent.',
    'Speech reveals the feelings despite the game.',
    'The consequence: a drama, which makes the play tragic.'
  ],
  skills: [
    'Explain Camille and Perdican’s game by quoting precise lines.',
    'Show how the game makes Rosette suffer.',
    'Analyze the end of the play as a fault of speech.',
    'Propose an opening comparing Musset to another play on the syllabus.'
  ],
  watch: [
    'Do not treat the play as a comedy: the outcome is tragic.',
    'Insist on the link between pride and speech: the word is a weapon.',
    'Quote lines, not just scenes.'
  ],
  read: 'The “On ne badine pas avec l’amour” sheet, with the three kinds of speech and the definitions of the theme.',
  ex: 'a line by Perdican that provokes Camille to illustrate manipulative speech.'
});

diss({
  n: 20, k: 0, short: '“Le Menteur”', g: 'nature of the first five words of a sentence (an examiner’s question that checks middle-school grammar).', e: 'eyes and gestures: keep your gaze on the examiner, keep your hands visible, do not gesticulate.',
  title: '“Le Menteur” (The Liar) by Corneille: lying and comedy',
  goal: 'Show the positive and negative aspects of Dorante’s lying, and the criticism of Parisian society.',
  quiz: 'Dorante, Clarice, the Tuileries, the successive lies, the father, the outcome.',
  ident: '“Le Menteur”, Pierre Corneille, 1642; play, comedy; theme “Lying and comedy”.',
  bio: 'Corneille was born in 1606 in Rouen, became a lawyer, then devoted himself to theater; “Mélite” (1629) renewed comedy and attracted Richelieu’s attention.',
  resume: 'Dorante, a young law student, arrives in Paris and lies to seduce: he claims to be a soldier and to have been in love for a year. The lies pile up and get more complicated. The summary of the session follows the acts.',
  kw: 'Definition of “lie”: a statement contrary to the truth, made knowingly with the intent to deceive, which presupposes awareness of the falsehood and the will to deceive. Definition of “comedy”: a play that makes people laugh and stages foibles.',
  plan: 'The positive aspects of lying: its usefulness (boasting, seducing, escaping a difficulty), its mastery as an art (Dorante is a gifted director and actor: each lie is a play), its humor. The negative aspects: the criticism of Dorante’s lying and its dangers, the criticism of lying in Parisian society.',
  intro: 'Expected central question: how does lying make comedy, and what does the play say about its dangers?',
  concl: 'Opening to choose: Molière’s “L’Avare”, a comedy seen in the commentary, or “On ne badine pas avec l’amour” from the syllabus.',
  bilan: 'Each student cites three of Dorante’s lies with their usefulness. Assignment: reread the Tuileries scenes.',
  notions: [
    'Genre: comedy. Theme: “Lying and comedy”.',
    'First motivation for lying: boasting, to seduce Clarice (Dorante claims to be a great warrior).',
    'Dorante as director: the lie is a play within the play.',
    'The humor of the lie: situations, mix-ups, chains of events.',
    'The criticism: the dangers of lying for Dorante and the Parisian society that tolerates it.'
  ],
  skills: [
    'Distinguish at least three motivations for Dorante’s lying.',
    'Analyze a scene of lying as a small theater.',
    'Show the humor of words, of situation and of character.',
    'Propose an opening on another liar of comedy.'
  ],
  watch: [
    'Do not say that Corneille approves of lying: he shows its charms and its dangers.',
    'Use theater vocabulary: line, mix-up (quiproquo), aside.',
    'Cite precise lies, not just the general idea.'
  ],
  read: 'The “Le Menteur” sheet, with the definition of lying and the two-part outline.',
  ex: 'the meeting at the Tuileries, where Dorante claims to be a soldier to seduce Clarice.'
});

diss({
  n: 21, k: 11, short: '“Cahiers de Douai”', src: 'A poem from the Cahiers de Douai, chosen by the teacher (for example a sonnet about running away or about nature).',
  title: '“Cahiers de Douai” (The Douai Notebooks) by Rimbaud: creative emancipations',
  goal: 'Show that Rimbaud’s emancipation is personal, political and social, then poetic.',
  quiz: 'Charleville, the runaways, Douai, Izambard, nature, authority.',
  ident: '“Cahiers de Douai”, Arthur Rimbaud, written in 1870 and published in 1893; poetry collection; theme “Creative emancipations”.',
  bio: 'Rimbaud was born in 1854 in Charleville, a brilliant student; he wrote his first poems from 1869 and composed the Cahiers de Douai in 1870, at fifteen or sixteen.',
  resume: 'A teenager frees himself from his home, from the town and from authority, and invents a new poetry in poems of running away, of nature, of social satire. The summary of the session presents the collection by main themes.',
  kw: 'Definition of “emancipation”: from the Latin emancipare, to free from the father’s authority; a process by which an individual or a group frees itself from dependence. Definition of “creative”: that invent new forms.',
  plan: 'Rimbaud’s emancipation is first personal: he frees himself from the authority of home through his runaways, from the town by fleeing into nature, from childhood through his first romantic experiences. It is also political and social: he frees himself from royal, religious and bourgeois authority by denouncing them in his poems. Finally, it is poetic: while respecting tradition, he seeks to create his own style, through innovations.',
  intro: 'Expected central question: in what way is Rimbaud’s emancipation at once personal, political and poetic?',
  concl: 'Opening of the student’s choice: a poet of the theme who also frees himself from a tradition or an authority.',
  bilan: 'Each student writes three emancipations with one poem each. Assignment: redo the outline from memory.',
  notions: [
    'Genre: poetry collection, made of varied poems.',
    'Personal emancipation: runaways, nature, first loves.',
    'Political and social emancipation: criticism of royal, religious and bourgeois authorities.',
    'Poetic emancipation: innovations of rhythm, of language, of subjects.',
    'A teenage poet writing at fifteen or sixteen.'
  ],
  skills: [
    'Quote a poem for each form of emancipation.',
    'Analyze a precise poetic innovation (rhyme, rhythm, vocabulary).',
    'Explain why Rimbaud chooses nature as a refuge.',
    'Propose an opening toward another emancipated poet.'
  ],
  watch: [
    'For poetry, quote by verse number and name the form (sonnet, quatrain).',
    'Do not reduce Rimbaud to a rebel: he also respects tradition.',
    'The social dimension is read in the satires of authority.'
  ],
  read: 'The “Cahiers de Douai” sheet, with the three emancipations and the definition of the theme.',
  ex: 'a poem about running away into nature to illustrate personal emancipation.'
});

diss({
  n: 22, k: 0, short: '“Lettres d’une Péruvienne”', g: 'function of a group of words in a sentence from the sheet.', e: 'rhythm and silences: read a passage marking the pauses, without filling the silences with “euh” (um).',
  title: '“Lettres d’une Péruvienne” (Letters of a Peruvian Woman) by Graffigny: “a new universe opened before my eyes”',
  goal: 'Show that Zilia discovers three universes: geographic, social and cultural, then inner.',
  quiz: 'Zilia, Aza, the crossing of the Atlantic, the French countryside, Paris, the quipus.',
  ident: '“Lettres d’une Péruvienne”, Françoise de Graffigny, 1747; collection of letters; theme “a new universe opened before my eyes”.',
  bio: 'Graffigny was born in Nancy in 1695; her childhood was marked by her father’s severity, and a forced marriage at seventeen turned her life into a marital hell.',
  resume: 'Zilia, a young Peruvian woman torn from her country by the conquistadors, writes to her fiancé Aza; she discovers France and goes through exile. The summary of the session follows the letters and their progression.',
  kw: 'Definitions of “new” (never seen, unprecedented) and “universe” (Zilia’s world: geographic, social, inner). The quotation of the theme is linked to its context in the novel.',
  plan: 'The discovery of a new geographic universe, which is a travel narrative (the crossing of the Atlantic, the landscapes of the French countryside). The discovery of a new social and cultural universe, which is an outside gaze and a criticism of society (for example the objectification of women’s bodies). The discovery of a new inner universe and inner freedom: a story of apprenticeship and emancipation, the passage from dependence to autonomy.',
  intro: 'Expected central question: how does a foreign woman’s view of France criticize society and lead her to her own freedom?',
  concl: 'Possible opening: Montesquieu’s “Lettres persanes”, another foreigner’s view of French society.',
  bilan: 'Each student cites one scene for each of the three universes. Assignment: reread the letters on learning the language.',
  notions: [
    'Genre: collection of letters (epistolary novel), travel narrative, novel of apprenticeship.',
    'Geographic universe: crossing of the Atlantic, landscapes of the French countryside.',
    'Social universe: criticism of French society, outside and naive gaze.',
    'Inner universe: inner freedom, emancipation, passage from dependence to autonomy.',
    'The forced exile of an uprooted woman, overcome through writing.'
  ],
  skills: [
    'Recognize the three forms of the novel: epistolary, travel, apprenticeship.',
    'Quote a letter for each of the three universes.',
    'Explain how Zilia’s naive gaze produces criticism.',
    'Propose an opening on another foreigner’s view.'
  ],
  watch: [
    'Zilia writes for Aza: the form of the letter commands the tone.',
    'The criticism of society passes through the feigned naivety of the outside gaze.',
    'Do not forget the evolution: Zilia gains autonomy over the course of the letters.'
  ],
  read: 'The “Lettres d’une Péruvienne” sheet, with the three universes and the definitions of the theme.',
  ex: 'the crossing of the Atlantic or the discovery of the French landscapes.'
});

diss({
  n: 23, k: 12, short: '“Entretiens sur la pluralité des mondes”', src: 'Text of the work, chosen by the teacher (for example a passage from the first evening, between the philosopher and the Marquise).',
  title: '“Entretiens sur la pluralité des mondes” (Conversations on the Plurality of Worlds) by Fontenelle: the taste for science',
  goal: 'Understand how Fontenelle makes science accessible and pleasant, and what this costs the truth.',
  quiz: 'the Marquise, the philosopher, the evenings, the garden, the vortices, the inhabited worlds.',
  ident: '“Entretiens sur la pluralité des mondes”, Bernard Le Bouyer de Fontenelle, 1686; essay in the form of a dialogue; theme “The taste for science”.',
  bio: 'Fontenelle was born in 1657 in Rouen, nephew of Pierre and Thomas Corneille, gave up law for letters and became known for a limpid style that makes complex ideas clear.',
  resume: 'A philosopher explains to a marquise, over evenings in a garden, that other worlds are inhabited. The dialogue begins as amorous banter and becomes an astronomy lesson. The summary of the session follows the evenings.',
  kw: 'Definitions of “taste” (the faculty of judging well what is beautiful or harmonious) and of “science” (all the rational knowledge that explains the world). Each word is linked to the Marquise.',
  plan: 'The author’s educational project: making science and philosophy accessible, as Cicero translated Greek philosophy into Latin. A conversation that begins as amorous banter. First goal: arouse the pleasure and taste of science in the Marquise and in readers. Second goal: instruct and educate. Underlying question: to please, does the narrator sacrifice the truth?',
  intro: 'Expected central question: how does Fontenelle give a taste for science without distorting it?',
  concl: 'Possible opening: another popular-science work of the Enlightenment, or a philosophical dialogue.',
  bilan: 'Each student writes three ways of making science pleasant. Assignment: redo the outline from memory.',
  notions: [
    'Genre: essay in the form of a dialogue. Theme: “The taste for science”.',
    'Educational project: making science and philosophy accessible to a non-specialist audience.',
    'Amorous banter serves as a frame to captivate the Marquise.',
    'Two goals: to please (arouse taste) and to instruct.',
    'Critical question: is the truth sacrificed in order to please?'
  ],
  skills: [
    'Cite the devices of the dialogue (comparisons, images, gallant tone).',
    'Distinguish pleasing and instructing in an excerpt.',
    'Analyze the figure of the Marquise as a model reader.',
    'Open onto another popular-science text.'
  ],
  watch: [
    'The dialogue is not mere decor: it organizes the demonstration.',
    'The criticism that truth is sacrificed must be discussed, not asserted.',
    'Link taste to aesthetics and pleasure, not just to preference.'
  ],
  read: 'The “Entretiens sur la pluralité des mondes” sheet, with the five-point outline and the definitions of the theme.',
  ex: 'the comparison with Cicero in the preface to illustrate the educational project.'
});

diss({
  n: 24, k: 0, short: '“Discours de la servitude volontaire”', g: 'complete sequence: logical analysis, then question on nature and function.', e: 'complete sequence of the oral exam in real conditions, with a timer.',
  title: '“Discours de la servitude volontaire” (Discourse on Voluntary Servitude) by La Boétie: defending and nurturing freedom',
  goal: 'Understand how La Boétie presents a paradox, explains its causes, then seeks to awaken consciences.',
  quiz: 'the tyrant, the people, natural freedom, custom, the men who consent.',
  ident: '“Discours de la servitude volontaire”, Étienne de La Boétie, 1577; discourse; theme “Defending” and “nurturing” freedom.',
  bio: 'La Boétie was born in 1530 in Sarlat, an orphan, received a humanist education, became a councilor at the Parliament of Bordeaux at twenty-three and advocated tolerance during the Wars of Religion.',
  resume: 'La Boétie is astonished that so many men obey a single tyrant without being forced to. He analyzes the causes of this servitude and calls on his readers to regain their freedom. The summary of the session follows the three main movements of the text.',
  kw: 'Definitions of “defending” (protecting against a threat: here against tyranny) and of “nurturing” (keeping in good condition, making last). Each word is linked to natural freedom.',
  plan: 'La Boétie presents the central paradox: voluntary servitude is absurd and arouses astonishment (men have given up their natural freedom, a precious good). He then establishes that it is explained by precise causes. Finally, he seeks to awaken consciences and to persuade through numerous rhetorical devices. He passes on humanist values.',
  intro: 'Expected central question: how does La Boétie make us understand the absurdity of voluntary servitude and push us to defend freedom?',
  concl: 'Possible opening: another text of political thought from the Renaissance or the Enlightenment.',
  bilan: 'Each student writes the paradox, two causes and one persuasion device. Assignment: reread the whole discourse.',
  notions: [
    'Genre: discourse, oratorical argumentative text. Theme: “Defending” and “nurturing” freedom.',
    'Central paradox: man has given up his freedom, a precious good, without being forced to.',
    'The causes: habit, custom, the mechanisms of power.',
    'The awakening of consciences: rhetorical devices (questions, apostrophes, examples) to persuade.',
    'Humanist values: freedom, dignity, reason.'
  ],
  skills: [
    'Identify the paradox and state it in one sentence.',
    'Spot the persuasion devices in an excerpt.',
    'Explain the causes of servitude cited by La Boétie.',
    'Link the text to humanist values.'
  ],
  watch: [
    'Do not sum up the Discourse as a simple criticism of the tyrant: it calls into question the consent of men.',
    'Insist on the oratorical dimension: the text seeks to persuade.',
    'Contextualize: the Wars of Religion shed light on the aim of the text.'
  ],
  read: 'The “Discours de la servitude volontaire” sheet, with the four axes of the outline and the definitions of the theme.',
  ex: 'an apostrophe to men to illustrate the awakening of consciences.'
});
