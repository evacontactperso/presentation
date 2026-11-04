/* Curriculum : fiches hebdomadaires, semaines 10 à 14 (Formation 2 : commentaire composé)
   (les révisions sont dans cur-w5.js, l’oral dans cur-w4.js). */

cw({
  n: 10, f: 'f2', title: 'La méthode du commentaire : huit étapes sur 4 heures',
  goal: 'Connaître les huit étapes du commentaire, leur durée exacte, et savoir construire un tableau d’analyse.',
  notions: [
    'Le commentaire composé est une épreuve de 4 h : comprendre le texte, analyser sa forme, interpréter l’effet voulu par l’auteur.',
    'Répartition : lecture 5 min ; tableau d’analyse 1 h 15 ; plan 20 min ; problématique 5 min ; introduction 15 min ; développement 1 h 30 ; conclusion 15 min ; relecture 15 min.',
    'Le tableau contient au moins 30 procédés. On commence par les champs lexicaux, qui demandent une lecture globale.',
    'Nombre d’éléments par sous-partie = nombre de lignes du tableau divisé par 6, à plus ou moins 1.',
    'Le développement compte deux ou trois parties, soit six sous-parties en tout. L’introduction suit cinq éléments : accroche (mouvement), présentation, résumé, problématique, annonce du plan.'
  ],
  skills: [
    'Citer de mémoire les huit étapes et leur durée.',
    'Construire un tableau à trois colonnes en commençant par les champs lexicaux.',
    'Calculer le nombre d’éléments par sous-partie à partir du nombre de lignes du tableau.',
    'Énoncer les cinq éléments d’une introduction de commentaire.'
  ],
  watch: [
    'Faire deux ou trois commentaires dans l’année ne suffit pas : l’objectif est un commentaire (au moins le brouillon de deux heures) toutes les deux semaines.',
    'Le tableau est le cœur du travail : sans trente procédés, le plan reste mince.',
    'Respecter le chronomètre : dépasser une étape appauvrit la suivante.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les pages « Présentation de l’épreuve » et « La méthode » de la Formation 2.' },
    { k: 'Supports', t: 'Tableau de répartition du temps (à afficher) ; modèle de tableau à trois colonnes ; texte à trous de l’introduction ; un poème de huit lignes pour la démonstration du tableau.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la formation 1', 'Dix questions flash : procédés, registres, mouvements. Le résultat sert de diagnostic.'],
    [15, 'cours', 'Présentation de l’épreuve et répartition du temps', 'Comprendre, analyser, interpréter ; le plan de la copie ; la répartition minute par minute des 4 heures.'],
    [15, 'cours', 'Étapes 1 et 2 : lecture et tableau', 'Les sous-étapes 2.1 (liste des procédés), 2.2 (tableau à trois colonnes), 2.3 (champs lexicaux en premier).'],
    [12, 'cours', 'Étapes 3 et 4 : plan et problématique', 'Calcul n/6, regroupement par couleurs, six sous-parties titrées avec un verbe, problématique en une phrase.'],
    [12, 'cours', 'Étape 5 : introduction', 'Les cinq éléments avec le texte à trous ; règles de mise en page (alinéa de trois carreaux, un seul paragraphe).'],
    [12, 'cours', 'Étapes 6 et 7 : développement et conclusion', 'Cinq paragraphes par partie, une ligne de tableau égale une phrase, verbes d’analyse variés, conclusion avec ouverture.'],
    [18, 'exo', 'Atelier : tableau en direct', 'Binôme, 18 min : tableau de huit lignes sur un poème court. Comparaison des tableaux entre binômes.'],
    [15, 'exo', 'Exercice : plan à partir d’un tableau fourni', 'Individuel, 10 min : un tableau de 30 lignes déjà rempli ; calcul n/6, regroupement par couleurs, trois sous-parties titrées avec un verbe ; correction de 5 min.'],
    [13, 'bilan', 'Bilan', 'Chaque élève reformule les huit étapes. Consigne : préparer un tableau de dix lignes sur le texte qui sera distribué.']
  ],
  drills: [
    { t: 'Étapes de l’épreuve de mémoire', tags: ['Individuel', 'De mémoire', '5 min'], how: 'Écrire les huit étapes avec leur durée, puis comparer avec le tableau affiché.' },
    { t: 'Atelier : tableau en direct', tags: ['Binôme', '18 min'], how: 'Huit lignes minimum sur un poème. On commence par les champs lexicaux, puis les figures. Chaque ligne : citation avec le vers, procédé, interprétation.' },
    { t: 'Plan à partir d’un tableau fourni', tags: ['Individuel', '10 min'], how: 'Calcul n/6, regroupement par couleurs, trois sous-parties titrées avec un verbe.' }
  ]
});

/* Commentaire composé : trois sujets guidés (roman, poésie, théâtre), puis un sujet en autonomie (littérature d’idées).
   Mêmes grandes étapes à chaque séance (pas de cours) : de plus en plus d’étapes sont faites en classe. */
const COMM_T = {
  roman: {
    goal: 'Appliquer la méthode à un texte de roman : « Le Père Goriot » de Balzac, Rastignac face à Paris. Premier sujet guidé.',
    notions: [
      'Le texte : à la fin du roman (1835), Rastignac, resté seul au cimetière du Père-Lachaise après l’enterrement de Goriot, regarde Paris et lui lance un défi. Genre : roman ; mouvement : le réalisme ; registres : dramatique et épique, avec une ironie dans la chute.',
      'Vocabulaire du roman : narrateur, point de vue, description, personnage, scène finale.',
      'Champs lexicaux attendus : la ville (Paris, la Seine, la colonne, le dôme), le regard (les yeux, le regard), la nourriture (la ruche, le miel, le dîner), la société et le défi.',
      'Procédés à relever : la métaphore de la ruche, la personnification de Paris, l’exclamation finale « À nous deux maintenant ! », le passé simple des actions, la majuscule de « Société ».',
      'Calcul du plan : nombre de lignes du tableau divisé par 6 (par exemple 35 procédés donnent 5 à 6 éléments par sous-partie).'
    ],
    skills: [
      'Remplir un tableau de vingt lignes en séance, avec citation, procédé et interprétation.',
      'Regrouper les lignes en six sous-parties équilibrées avec un titre à verbe.',
      'Formuler une problématique qui relie la forme (regard, métaphore, exclamation) au sens (l’ambition de Rastignac).',
      'Rédiger une introduction complète avec une accroche sur le réalisme.'
    ],
    watch: [],
    lire: 'La méthode de la Formation 2, étapes 1 à 5, et la fiche de l’introduction.',
    supports: 'Texte choisi : Balzac, « Le Père Goriot » (1835), dernières pages, du moment où Eugène de Rastignac, resté seul au Père-Lachaise, regarde Paris jusqu’à « À nous deux maintenant ! », lignes numérotées ; tableau à trois colonnes ; texte à trous de l’introduction ; liste de verbes d’analyse.',
    lecture: 'Cinq minutes, trois lectures du texte, soulignement des mots forts.',
    tableau: 'Individuel. Champs lexicaux d’abord (ville, regard, nourriture, société), puis métaphores, temps, ponctuation, phrases.',
    plan: 'Calcul n/6, regroupement des lignes par couleurs, six sous-parties titrées avec un verbe.',
    prob: 'Une phrase qui relie la forme (regard, métaphore, exclamation) au sens (l’ambition de Rastignac).',
    intro: 'Individuel, les cinq éléments, avec une accroche sur le réalisme.',
    dev: 'Une sous-partie rédigée : une phrase par ligne du tableau, verbes d’analyse variés ; lecture à voix haute et amélioration.',
    concl: 'Réponse à la problématique, récapitulatif, ouverture vers un autre roman d’ascension sociale.',
    cadre: 'Présentation du texte : la fin du « Père Goriot », la scène du cimetière.'
  },
  poesie: {
    goal: 'Appliquer la méthode à un poème : « Le vase brisé » de Sully Prudhomme, avec le vocabulaire de la poésie. Deuxième sujet guidé.',
    notions: [
      'Le poème : cinq strophes de quatre vers ; image d’un vase fêlé par un coup d’éventail, qui devient la métaphore d’un cœur blessé par la main qu’on aime.',
      'Champs lexicaux attendus : la fleur et le vase, le cœur et l’amour, la fêlure et la blessure.',
      'Vocabulaire de la poésie : vers, strophe, rimes, rythme, refrain, métaphore filée.',
      'Sully Prudhomme est associé au Parnasse : exemple d’accroche de mouvement littéraire.',
      'Registre dominant : lyrique, avec une tonalité pathétique.'
    ],
    skills: [
      'Relever au moins 30 procédés dans un poème, avec leurs vers.',
      'Reconnaître la métaphore filée et l’interpréter.',
      'Construire un plan à partir de la progression du poème : le vase, puis le cœur, puis la blessure cachée.',
      'Rédiger une introduction et une sous-partie du développement.'
    ],
    watch: [],
    lire: 'Les étapes 5 à 8 de la Formation 2 et le corrigé rédigé du sujet de poésie.',
    supports: 'Le poème « Le vase brisé » avec numérotation des vers (Sully Prudhomme, « Stances et poèmes ») ; tableau à trois colonnes ; fiche de vocabulaire de la poésie.',
    lecture: 'Trois lectures du poème, dont une à voix haute.',
    tableau: 'Individuel. Champs lexicaux d’abord (fleur, cœur, blessure), puis figures, rythme, temps, ponctuation. Citer par numéro de vers ; la métaphore filée du vase et du cœur est reconstruite.',
    plan: 'Six sous-parties à partir de la progression du poème : le vase, le cœur, la blessure cachée.',
    prob: 'Une phrase qui relie la métaphore filée au sens.',
    intro: 'Individuel : accroche sur le Parnasse, présentation, résumé, problématique, annonce du plan.',
    dev: 'Une sous-partie rédigée sur « Le vase brisé », relue avec une grille de cinq critères.',
    concl: 'Réponse à la problématique, récapitulatif, ouverture vers un autre poème sur la souffrance amoureuse.',
    cadre: 'Présentation du texte : « Le vase brisé » de Sully Prudhomme.'
  },
  theatre: {
    goal: 'Appliquer la méthode à un extrait de théâtre : « L’Avare » de Molière, le cri d’Harpagon. Troisième sujet guidé.',
    notions: [
      'Le texte : Harpagon, seul, crie au voleur dès le jardin et vient sans chapeau. Genre : théâtre ; registre comique, avec une dimension pathétique et tragique pour le personnage.',
      'Champs lexicaux attendus : le vol, l’assassinat, le réconfort, la justice, la préméditation.',
      'Procédés à relever : interrogations, exclamations, répétitions, accumulation, hyperbole, rythme saccadé, adresse à soi-même et au public, didascalie « À lui-même, se prenant par le bras ».',
      'Vocabulaire du théâtre : réplique, didascalie, monologue, aparté, comique de mots et de caractère.',
      'Accroche d’introduction sur le classicisme : Molière et la comédie de caractère.'
    ],
    skills: [
      'Remplir un tableau d’au moins 30 lignes dans le temps (en séance : un tableau amorcé).',
      'Regrouper les lignes en six sous-parties équilibrées, avec un titre à verbe pour chacune.',
      'Formuler une problématique qui relie la forme (cris, accumulations) au sens (l’attachement d’Harpagon à son argent).',
      'Rédiger l’introduction, une sous-partie et la conclusion avec ouverture.'
    ],
    watch: [],
    lire: 'Le sujet de théâtre dans la Formation 2 : texte, étapes 1 à 7 appliquées et correction.',
    supports: 'Le texte d’Harpagon, lignes numérotées ; tableau à trois colonnes ; liste de verbes d’analyse ; grille de relecture.',
    lecture: 'Cinq minutes, trois lectures du texte, soulignement des mots forts.',
    tableau: 'Individuel. Champs lexicaux d’abord (vol, assassinat, réconfort, justice, préméditation), puis figures, ponctuation, temps, pronoms, phrases, interjections.',
    plan: 'Calcul n/6, regroupement des lignes par couleurs, six sous-parties titrées avec un verbe.',
    prob: 'Une phrase qui relie la forme (cris, accumulations) au sens (l’attachement d’Harpagon à son argent).',
    intro: 'Individuel : les cinq éléments, avec une accroche sur le classicisme.',
    dev: 'Une sous-partie rédigée sur le cri d’Harpagon : une phrase par ligne du tableau, verbes variés.',
    concl: 'Réponse à la problématique, récapitulatif, ouverture vers une autre comédie de l’argent ou de l’avarice.',
    cadre: 'Présentation du texte : « L’Avare » de Molière, le cri d’Harpagon.'
  }
};
function comm(n, t, st, title, quiz) {
  const WATCH = [
    'Ne pas faire de plan avant d’avoir fini le tableau.',
    'Une sous-partie sans verbe dans le titre est souvent un thème, pas un argument.',
    'Citer avec la ligne (ou le vers) et ne retenir que les procédés que l’on peut interpréter.'
  ];
  const A = [8, 'accroche', 'Consignes et rappel de la méthode', `${quiz} ${t.cadre}`];
  const L = [5, 'exo', 'Étape 1 : lecture', t.lecture];
  const T = (d, extra) => [d, 'exo', 'Étape 2 : tableau d’analyse et d’interprétation', `${t.tableau} ${extra}`];
  const P = d => [d, 'exo', 'Étape 3 : plan', t.plan];
  const Q = d => [d, 'exo', 'Étape 4 : problématique', t.prob];
  const I = (d, extra) => [d, 'copie', 'Étape 5 : introduction', `${t.intro} ${extra}`];
  const D = d => [d, 'copie', 'Étape 6 : développement', t.dev];
  const C = d => [d, 'copie', 'Étape 7 : conclusion', t.concl];
  const flow = {
    1: [A, L, T(40, 'Objectif : 20 lignes en séance, la suite à la maison. Correction partagée de 10 min.'), P(20), Q(7), I(30, 'Relecture croisée de 10 min avec une grille.'), [10, 'bilan', 'Conclusion de la séance', 'Chacun note ce qu’il a oublié dans le tableau. Consigne : terminer le tableau à 30 lignes et rédiger le développement de la première partie.']],
    2: [A, L, T(35, 'Objectif : 20 lignes. Correction partagée de 8 min.'), P(15), Q(5), I(20, 'Relecture croisée de 5 min.'), D(22), [10, 'bilan', 'Conclusion de la séance', 'Chacun note l’étape qui lui coûte le plus de temps. Consigne : terminer le tableau jusqu’à trente lignes et rédiger la suite du développement.']],
    3: [A, L, T(35, 'Objectif : 20 lignes. Correction partagée de 8 min.'), P(15), Q(5), I(15, 'Relecture croisée.'), D(15), C(12), [10, 'bilan', 'Conclusion de la séance', 'Comparaison des trois sujets (roman, poésie, théâtre) : ce qui change dans le tableau. Consigne : terminer le développement du commentaire.']]
  }[st];
  cw({ n, f: 'f2', title, goal: t.goal, notions: t.notions, skills: t.skills, watch: WATCH,
    prep: [{ k: 'À lire avant la séance', t: t.lire }, { k: 'Supports', t: t.supports }], flow, drills: [] });
}
comm(11, COMM_T.roman, 1, 'Sujet n°1 (roman) : « Le Père Goriot » de Balzac, de la lecture à l’introduction', 'Les huit étapes et leur durée : tour de table, une étape par élève.');
comm(12, COMM_T.poesie, 2, 'Sujet n°2 (poésie) : « Le vase brisé » de Sully Prudhomme, du tableau au développement', 'Rappel du plan et de la problématique du sujet n°1 ; ramassage du développement rédigé à la maison.');
comm(13, COMM_T.theatre, 3, 'Sujet n°3 (théâtre) : « L’Avare » de Molière, jusqu’à la conclusion', 'Rappel du sujet n°2 ; ramassage du travail rédigé à la maison.');

cw({
  n: 14, f: 'f2', title: 'Sujet n°4 (littérature d’idées) : « Lettres persanes » de Montesquieu, commentaire en autonomie',
  goal: 'Mener seul, sur un texte que les élèves n’ont jamais étudié, les cinq premières étapes en deux heures : la lettre XXX des « Lettres persanes ».',
  notions: [
    'Le texte : lettre XXX des « Lettres persanes » (Montesquieu, 1721), « Comment peut-on être Persan ? » : Rica raconte la curiosité des Parisiens à son égard. Roman épistolaire, siècle des Lumières, registre satirique.',
    'Le brouillon complet de deux heures comprend les étapes 1 à 5 : lecture (5 min), tableau (1 h 15), plan (20 min), problématique (5 min), introduction (15 min).',
    'Le rythme conseillé : un commentaire toutes les deux semaines, au moins en brouillon de deux heures.',
    'Les annales du baccalauréat fournissent des sujets : tenir un agenda avec un sujet toutes les deux semaines.',
    'Grille d’auto-évaluation : nombre de procédés, équilibre des sous-parties, qualité de la problématique, cinq éléments de l’introduction.'
  ],
  skills: [
    'Respecter la répartition du temps sans rappel du professeur.',
    'Atteindre trente lignes dans le tableau en 1 h 15.',
    'Proposer une problématique qui relie forme et sens.',
    'S’auto-évaluer avec une grille et fixer deux objectifs de progression.'
  ],
  watch: [
    'Pas de téléphone, pas de support : conditions d’examen.',
    'Si le tableau n’atteint pas trente lignes, ne pas passer au plan avant la fin des 1 h 15.',
    'Garder cinq minutes de lecture, même si le texte semble facile : le contresens coûte plus cher.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les étapes 1 à 5 de la Formation 2 et la liste des 15 procédés.' },
    { k: 'Supports', t: 'Texte choisi : Montesquieu, « Lettres persanes » (1721), lettre XXX (Rica à Ibben, à Smyrne), du début de la lettre jusqu’à « Comment peut-on être Persan ? », présentée comme texte inédit, lignes numérotées ; copie double ; brouillon ; chronomètre affiché.' }
  ],
  flow: [
    [5, 'accroche', 'Consignes de la séance', 'Conditions d’examen, répartition du temps affichée au tableau, texte distribué : la lettre XXX des « Lettres persanes ».'],
    [5, 'exo', 'Étape 1 : lecture', 'Cinq minutes, trois lectures, sans stylo au début.'],
    [75, 'exo', 'Étape 2 : tableau d’analyse et d’interprétation', 'Individuel, 1 h 15 : trente lignes minimum, champs lexicaux en premier.'],
    [20, 'exo', 'Étape 3 : plan', 'Calcul n/6, regroupement, six sous-parties titrées.'],
    [5, 'exo', 'Étape 4 : problématique', 'Une phrase, rédigée sur le brouillon.'],
    [15, 'copie', 'Étape 5 : introduction', 'Rédigée directement sur la copie.'],
    [20, 'copie', 'Étape 6 : développement', 'Une sous-partie rédigée, d’après le tableau.'],
    [15, 'exo', 'Étape 8 : relecture croisée et auto-évaluation', 'Binôme : échange des copies, grille de dix critères à cocher, deux remarques écrites, puis deux objectifs de progression.'],
    [20, 'bilan', 'Conclusion de la séance', 'Retour collectif sur le texte, présentation du plan attendu, planification d’un commentaire toutes les deux semaines pendant les trois mois suivants.']
  ],
  drills: [
    { t: 'Brouillon complet de deux heures', tags: ['Individuel', 'Conditions d’examen', '2 h'], how: 'Étapes 1 à 5 sur un texte inédit, sans aide. Le tableau, le plan, la problématique et l’introduction sont ramassés.' },
    { t: 'Auto-évaluation', tags: ['Individuel', '15 min'], how: 'Grille de dix critères : nombre de procédés, équilibre des sous-parties, problématique, cinq éléments de l’introduction, orthographe. Deux objectifs de progression.' },
    { t: 'Relecture croisée', tags: ['Binôme', '15 min'], how: 'Grille des cinq éléments de l’introduction à cocher, deux remarques écrites.' }
  ],
  special: 'Séance longue de 3 heures.'
});

