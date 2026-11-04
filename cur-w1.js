/* Curriculum : fiches hebdomadaires, semaines 1 à 9 (Formation 1 : outils littéraires).
   Une séance de 2 h par semaine. Chaque fiche : titre, objectif, notions, objectifs de savoir-faire, points d’attention,
   supports et ressources, déroulé minute par minute, entraînements. Source : le document « Formation - Lycée - Français ». */

const CUR_FORM = {
  f1: { n: 'Formation 1', t: 'Outils littéraires', c: '#b8460f', w: 'Semaines 1 à 9' },
  f2: { n: 'Formation 2', t: 'Commentaire composé', c: '#6b2d5c', w: 'Semaines 10 à 14' },
  f3: { n: 'Formation 3', t: 'Dissertation', c: '#1f6f6b', w: 'Semaines 15 à 24' },
  f4: { n: 'Formation 4', t: 'Oral', c: '#9a6b00', w: 'Semaines 25 à 30' },
  f5: { n: 'Partie 5', t: 'Révisions', c: '#475569', w: 'Semaines 31 à 36' }
};
const CUR_TYPES = {
  accroche: 'Ouverture', cours: 'Cours', exo: 'Exercice', corr: 'Correction', oral: 'Oral', copie: 'Rédaction', bilan: 'Bilan'
};
const CUR_WEEKS = [];
function cw(o) {
  let t = 0;
  o.flow = o.flow.map(([d, k, l, x]) => { const r = { a: t, b: t + d, k, l, x }; t += d; return r; });
  o.len = t;
  CUR_WEEKS.push(o);
}

cw({
  n: 1, f: 'f1', title: 'Lire un texte par ses mots : champs lexicaux, ponctuation, interjections',
  goal: 'Repérer trois procédés de base dans un texte court et dire ce qu’ils révèlent du thème et des émotions.',
  notions: [
    'Un champ lexical est un ensemble de termes qui renvoient au même thème (temps, amour, corps, souffrance, argent, ville, mort, liberté, colère, pouvoir…).',
    'Le tableau d’analyse a trois colonnes : citation (avec le numéro de ligne), procédé littéraire, reformulation et interprétation.',
    'Ponctuation : « ! » émotion forte (colère, peur, surprise, supplication) ; virgules multiples : rythme, dynamisme, nombre ; « : » explication ; points finaux : fermeté, dureté ; « ? » doute ; « … » hésitation, déception.',
    'Une interjection exprime une émotion brute : Ah, Hélas, Zut, Ouf, Aïe, Bon sang, Euh.',
    'Les 15 procédés : champs lexicaux, connecteurs logiques, compléments circonstanciels, ponctuation, figures de style, pronoms personnels, termes péjoratifs et mélioratifs, modes et temps, négation, longueur des phrases, interjections, singulier et pluriel, ironie, niveaux de langage, sujets et COD.'
  ],
  skills: [
    'Écrire de mémoire la liste des 15 procédés, en s’aidant des initiales (c, c, c, p, f, p, p, v, n, l, i, s, n, s).',
    'Relever au moins quatre champs lexicaux dans un extrait, en citant au moins quatre mots avec leurs lignes.',
    'Associer chaque signe de ponctuation à l’effet qu’il produit dans la phrase.',
    'Nommer l’émotion exprimée par chaque interjection d’un texte.',
    'Rédiger une interprétation en une phrase qui explique pourquoi l’auteur a choisi ce procédé.'
  ],
  watch: [
    'Toujours indiquer le numéro de ligne entre parenthèses après chaque citation.',
    'Écrire « champ lexical du vol » ne suffit pas : la colonne de droite dit ce que ce champ révèle (ici, la place de l’argent pour Harpagon).',
    'Commencer par les champs lexicaux : c’est le seul procédé qui demande une lecture globale du texte.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches « Le cours » de Formation 1 : champs lexicaux, ponctuation, interjection.' },
    { k: 'Supports', t: '« L’Avare » de Molière, cri d’Harpagon après le vol de sa cassette (exercice 1) ; textes des exercices 3 (ponctuation) et 7 (interjections) ; la liste vierge des 15 procédés ; le tableau d’analyse à trois colonnes, imprimé.' }
      ],
  flow: [
    [10, 'accroche', 'Présentation de l’année', 'Les formations de l’année et leur calendrier, l’épreuve écrite de 4 h, le rythme d’une séance de 2 h par semaine et la manière de travailler entre deux séances.'],
    [15, 'cours', 'Cours : les 15 procédés et les champs lexicaux', 'La liste des 15 procédés avec la phrase mnémotechnique des initiales ; le tableau d’analyse à trois colonnes ; définition du champ lexical, exemples de thèmes, démonstration sur un mini-texte au tableau.'],
    [15, 'exo', 'Mémo des 15 procédés et exercice 1 : champs lexicaux', 'Individuel. Cinq minutes pour écrire la liste de mémoire, puis comparaison avec la liste du cours. Dix minutes pour trouver les champs lexicaux du texte d’Harpagon dans le tableau.'],
    [10, 'corr', 'Correction de l’exercice 1', 'Cinq champs attendus : le vol, l’assassinat, le réconfort, la justice, la préméditation. Chaque interprétation est formulée à voix haute.'],
    [10, 'cours', 'Cours : ponctuation', 'Les six signes et leurs effets, avec une phrase d’exemple pour chacun.'],
    [15, 'exo', 'Exercice 3 : trouver les ponctuations', 'Individuel, 10 min : repérer chaque signe dans le texte. Correction de 5 min en confrontant avec le voisin.'],
    [5, 'cours', 'Cours : interjections', 'Une interjection exprime une émotion brute : Ah, Hélas, Zut, Ouf, Aïe, Bon sang, Euh.'],
    [30, 'exo', 'Exercice 7 et exercice de synthèse sur un texte inconnu', 'Individuel. Dix minutes sur un dialogue (Oh, Oups, Zut, Aïe, Ouf, Euh) pour nommer l’émotion de chaque interjection. Puis 14 minutes sur un texte inconnu de dix lignes : tableau à trois colonnes avec au moins quatre champs lexicaux, trois ponctuations et deux interjections. Correction de 6 min par échange de copies.'],
    [10, 'bilan', 'Bilan', 'Chacun note les trois procédés vus et un exemple. Consigne : refaire l’exercice 1 sans le corrigé.']
  ],
  drills: [
    { t: 'Mémo des 15 procédés', tags: ['Individuel', 'De mémoire', '5 min'], how: 'Feuille blanche, aucun support. Vérification avec la liste du cours ; on souligne les oublis en rouge, on les réécrit.' },
    { t: 'Exercice 1 : champs lexicaux', tags: ['Individuel', 'Chronométré', '10 min'], how: 'Texte imprimé avec numérotation des lignes ; tableau à trois colonnes à remplir. Barème : un point par champ juste, un point par interprétation.' },
    { t: 'Exercices 3 et 7 : ponctuation, interjections', tags: ['Individuel', 'Mise en commun'], how: 'Surligner chaque signe ou interjection, puis écrire l’effet en une phrase. Comparaison avec le voisin avant la correction.' },
    { t: 'Exercice de synthèse', tags: ['Individuel', '14 min'], how: 'Un texte inconnu de dix lignes ; tableau à trois colonnes : champs lexicaux, ponctuation, interjections. Les copies sont échangées pour la correction.' }
  ]
});

cw({
  n: 2, f: 'f1', title: 'Figures de style : rapprocher, substituer, insister',
  goal: 'Reconnaître les principales figures de style, les classer en trois familles et expliquer leur effet.',
  notions: [
    'Rapprochement : comparaison (outil de comparaison : comme, tel, ressemble à), métaphore (sans outil), allégorie (un concept abstrait incarné : la Faucheuse pour la Mort, Marianne pour la République, la colombe pour la Paix), personnification, animalisation.',
    'Substitution : métonymie (la ville de l’amour pour Paris, le roi-Soleil pour Louis XIV), réification (l’ouvrier devenu un simple outil, un simple numéro).',
    'Insistance : allitération (répétition d’une consonne), assonance (répétition d’une voyelle), anadiplose, répétition et anaphore, accumulation, gradation, hyperbole.',
    'Atténuation : litote (dire moins pour faire entendre plus : « ce n’est pas mal du tout »), euphémisme (adoucir une réalité dure : « elle est partie » pour « elle est morte »).',
    'Interprétations types du cours : « fait entendre… », « exagère, amplifie… », « donne de la force à… ».'
  ],
  skills: [
    'Classer une figure dans sa famille (rapprochement, substitution, insistance, atténuation).',
    'Distinguer une comparaison d’une métaphore en cherchant l’outil de comparaison.',
    'Relever au moins huit figures dans un poème ou un extrait, avec leurs lignes ou leurs vers.',
    'Formuler pour chaque figure l’effet produit sur le lecteur, en variant les verbes d’analyse.'
  ],
  watch: [
    'Ne pas appeler « métaphore » toute image : sans analogie directe, c’est peut-être une métonymie ou une personnification.',
    'Allitération = consonne, assonance = voyelle : donner le son répété (le « s » des serpents, par exemple).',
    'Ne pas confondre litote (dire moins) et euphémisme (adoucir).',
    'Une figure relevée sans interprétation ne rapporte rien dans le tableau.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'La fiche « Figures de style » du cours, en trois tableaux : rapprochement, substitution, insistance et atténuation.' },
    { k: 'Supports', t: 'Texte de l’exercice 2 de la fiche ; deux poèmes courts imprimés avec les vers numérotés ; la liste des 16 figures sur une page ; huit phrases isolées pour le jeu de classement.' }
  ],
  flow: [
    [10, 'accroche', 'Quiz sur la semaine 1', 'Cinq minutes de quiz flash sur les champs lexicaux, la ponctuation et les interjections ; cinq minutes pour remettre la liste des 15 procédés en tête.'],
    [20, 'cours', 'Cours : figures de rapprochement', 'Comparaison, métaphore, allégorie, personnification, animalisation, avec les exemples du cours. Pour chacune : définition, repère, effet.'],
    [10, 'exo', 'Jeu de classement', 'Huit phrases à classer en équipes de deux : comparaison ou métaphore ? Une ardoise levée par équipe, correction immédiate.'],
    [20, 'cours', 'Cours : substitution, insistance, atténuation', 'Métonymie, réification, allitération, assonance, anadiplose, accumulation, gradation, hyperbole, litote, euphémisme.'],
    [20, 'exo', 'Exercice 2 : relever les figures', 'Individuel, 20 min sur un extrait : au moins huit figures dans le tableau à trois colonnes.'],
    [15, 'corr', 'Correction de l’exercice 2', 'Un élève lit une ligne de son tableau ; la classe valide ou corrige. Les interprétations sont reformulées.'],
    [15, 'exo', 'Exercice : figures sur un second texte', 'Individuel, 10 min : cinq figures à relever dans un court poème, avec leur famille et leur effet ; correction de 5 min.'],
    [10, 'bilan', 'Bilan', 'Chaque élève cite trois figures nouvelles et les illustre. Consigne : relire la fiche des figures et en refaire le classement de mémoire.']
  ],
  drills: [
    { t: 'Jeu de classement', tags: ['Binôme', 'Ardoise', '10 min'], how: 'Huit phrases projetées une à une. Chaque équipe lève son ardoise avec le nom de la figure ; on justifie en une phrase avant la correction.' },
    { t: 'Exercice 2 : tableau des figures', tags: ['Individuel', 'Chronométré', '20 min'], how: 'Tableau à trois colonnes : citation avec la ligne, figure, interprétation. Au moins huit lignes. Correction par lecture orale et validation collective.' },
    { t: 'Figures sur un second texte', tags: ['Individuel', '10 min'], how: 'Cinq figures à relever dans un court poème, avec leur famille et leur effet ; autocorrection avec la fiche.' }
  ]
});

cw({
  n: 3, f: 'f1', title: 'Le verbe et la phrase : modes et temps, négation, longueur des phrases',
  goal: 'Justifier le choix d’un temps verbal, d’une négation et d’une longueur de phrase par leur effet sur le texte.',
  notions: [
    'Imparfait de second plan (décor, situation stable) et passé simple de premier plan (action, élément perturbateur) : « Tout était calme dans le château. Soudain, le roi entra brutalement. »',
    'Le passé simple seul exprime une succession d’actions ; le présent de vérité générale se reconnaît dans les proverbes ; le futur simple marque la certitude ; l’impératif exprime l’ordre, le conseil, la supplication ; la voix passive souligne la passivité du sujet.',
    'Négation : ne… pas, jamais, plus, rien, personne, aucun, guère, nulle part, ni… ni, sans, non. Elle révèle une absence ou un refus.',
    'Phrases courtes : percutantes, directes, fermes. Phrases longues : explication, développement, justification, lyrisme.'
  ],
  skills: [
    'Justifier un temps en précisant l’arrière-plan ou le premier plan, la durée, la certitude.',
    'Relever cinq négations dans un extrait et dire ce qui est absent ou refusé.',
    'Opposer, dans un dialogue, les phrases courtes d’un personnage aux phrases longues d’un autre et interpréter ce contraste.',
    'Repérer un changement de temps dans un récit et dire ce qu’il marque.'
  ],
  watch: [
    'Ne jamais écrire seulement « l’auteur utilise le passé simple » : dire ce que ce temps fait voir.',
    'La négation « ne… que » exprime une restriction : l’analyser comme telle.',
    'Pour les phrases, ne pas se contenter de les compter : chercher le contraste entre deux personnages ou deux moments.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches « Le cours » : valeur des modes et des temps des verbes, négation, phrases courtes et longues.' },
    { k: 'Supports', t: 'Texte de l’exercice 4 (château et roi), texte de l’exercice 11 (négations, narratrice trahie), dialogue de l’exercice 12 (Éléonore et Bénédicte) ; tableau des temps et de leurs valeurs.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 2', 'Dix figures de style projetées avec une phrase : nommer et classer, réponses sur ardoise.'],
    [18, 'cours', 'Cours : modes et temps', 'Passage de l’imparfait au passé simple, passé simple seul, présent de vérité générale, futur, impératif, voix passive. Un exemple par valeur.'],
    [14, 'exo', 'Exercice 4 : modes et temps', 'Individuel, 14 min : relever les temps du texte et donner la valeur de chacun dans le tableau à trois colonnes.'],
    [8, 'corr', 'Correction de l’exercice 4', 'Imparfait de second plan pour la stabilité, passé simple de premier plan pour l’irruption de l’élément perturbateur.'],
    [8, 'cours', 'Cours : négation', 'Les formes à connaître et l’effet de l’absence ou du refus.'],
    [10, 'exo', 'Exercice 11 : trouver les négations', 'Individuel, 6 min, puis correction de 4 min : pour chaque négation, la phrase « la négation révèle l’absence de… ».'],
    [8, 'cours', 'Cours : phrases courtes et longues', 'Fermeté et rythme des phrases courtes, déploiement des phrases longues.'],
    [14, 'exo', 'Exercice 12 : longueurs de phrases', 'Binôme, 8 min sur le dialogue : qui parle en phrases longues, qui en phrases courtes, pourquoi ? Correction de 6 min.'],
    [20, 'exo', 'Exercice de synthèse : temps, négation, phrases', 'Individuel, 14 min sur un extrait de roman : valeur de trois temps, deux négations, un contraste de longueur de phrases ; correction de 6 min.'],
    [12, 'bilan', 'Bilan', 'Mini-test de 8 min : une phrase avec son temps à justifier, une négation, une phrase courte. Ramassé et corrigé à la séance suivante.']
  ],
  drills: [
    { t: 'Exercice 4 : valeur des temps', tags: ['Individuel', '14 min'], how: 'Surligner chaque verbe conjugué, annoter son temps, écrire la valeur dans le tableau. Un point par valeur correcte et justifiée.' },
    { t: 'Exercice 11 : négations', tags: ['Individuel', '6 min'], how: 'Une négation = une ligne du tableau, avec la formule « la négation révèle l’absence de… ». Comparaison avec le voisin avant correction.' },
    { t: 'Exercice 12 : longueurs de phrases', tags: ['Binôme', '8 min'], how: 'Dialogue à deux voix, chacun prend un personnage et relève ses phrases courtes et longues. On rédige ensuite une interprétation commune.' },
    { t: 'Exercice de synthèse : temps, négation, phrases', tags: ['Individuel', '14 min'], how: 'Un extrait de roman : trois temps à justifier, deux négations, un contraste de longueur de phrases.' }
  ]
});

cw({
  n: 4, f: 'f1', title: 'La logique du texte : connecteurs, compléments circonstanciels, sujets et COD',
  goal: 'Lire la structure logique d’un texte et repérer qui agit et qui subit.',
  notions: [
    'Les connecteurs logiques révèlent la structure du raisonnement : addition, cause, conséquence, opposition, concession, condition, but, comparaison, illustration, explication, temps, conclusion, alternative, restriction.',
    'Compléments circonstanciels : lieu, temps, cause, conséquence, but, manière, moyen, concession, condition, chacun avec ses indices (dans, lorsque, parce que, afin de, avec, malgré, si).',
    'Le sujet est l’acteur de l’action. Le COD (ou COI) est l’objet de l’action : il la subit, il est passif.',
    'Un changement de sujet ou de COD peut montrer un retournement : Bernard, d’abord COD des geôliers, devient sujet quand il reprend son destin en main.'
  ],
  skills: [
    'Relever dans un texte au moins six connecteurs et nommer le rapport logique de chacun.',
    'Identifier le type de complément circonstanciel à l’aide de son indice.',
    'Repérer le sujet et le COD d’une phrase et interpréter qui est actif et qui est passif.',
    'Interpréter l’enchaînement des connecteurs comme le plan du raisonnement de l’auteur.'
  ],
  watch: [
    'Un même mot peut avoir deux valeurs (« comme » : cause, comparaison, temps) : se fier au contexte.',
    'Un complément circonstanciel est supprimable ; ne pas le confondre avec un complément essentiel.',
    'Pour sujets et COD, interpréter le rapport de force, ne pas s’arrêter à l’identification grammaticale.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches connecteurs logiques, compléments circonstanciels, COD et sujets.' },
    { k: 'Supports', t: 'Texte de l’exercice 5 (avenir durable), texte de l’exercice 12 sur les circonstanciels (Julien, matin d’automne), texte de l’exercice 13 (Bernard et les geôliers) ; tableau des connecteurs par rapport logique.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 3', 'Cinq phrases : donner le temps et sa valeur ; deux phrases : relever la négation.'],
    [12, 'cours', 'Cours : connecteurs logiques', 'Les quatorze rapports logiques, une liste de mots pour chacun, l’interprétation type.'],
    [15, 'exo', 'Exercice 5 : trouver les connecteurs', 'Individuel, 15 min : relever les connecteurs du texte et nommer leur rapport logique dans le tableau.'],
    [8, 'corr', 'Correction de l’exercice 5', 'On reconstitue le plan du raisonnement à partir des connecteurs.'],
    [10, 'cours', 'Cours : compléments circonstanciels', 'Neuf types, avec indices et exemples.'],
    [15, 'exo', 'Exercice sur les circonstanciels', 'Individuel, 10 min sur le texte de Julien ; mise en commun de 5 min.'],
    [8, 'corr', 'Correction', 'Un matin d’automne : temps ; tranquillement : manière. Chaque réponse est justifiée par son indice.'],
    [6, 'cours', 'Cours : sujets et COD', 'Définition par l’action : qui fait, qui subit.'],
    [10, 'exo', 'Exercice 13 : sujets et COD', 'Binôme, 6 min sur le texte des geôliers, puis correction de 4 min.'],
    [15, 'exo', 'Exercice de synthèse : connecteurs, circonstanciels, sujets', 'Individuel, 10 min sur un paragraphe argumentatif : cinq connecteurs, trois circonstanciels, qui agit et qui subit ; correction de 5 min.'],
    [13, 'bilan', 'Bilan', 'Chacun écrit les trois étapes pour lire un connecteur, un circonstanciel, un sujet. Consigne : refaire un des textes à la maison.']
  ],
  drills: [
    { t: 'Exercice 5 : connecteurs', tags: ['Individuel', 'Chronométré', '15 min'], how: 'Surligner tous les connecteurs ; écrire le rapport logique dans le tableau ; reconstituer ensuite le plan du raisonnement en trois lignes.' },
    { t: 'Exercice sur les circonstanciels', tags: ['Individuel', '10 min'], how: 'Une phrase par ligne ; le type est justifié par son indice. Mise en commun à voix haute.' },
    { t: 'Exercice 13 : sujets et COD', tags: ['Binôme', '6 min'], how: 'On souligne les sujets en rouge et les COD en bleu, puis on interprète le rapport de force entre eux.' },
    { t: 'Exercice de synthèse : connecteurs, circonstanciels, sujets', tags: ['Individuel', '10 min'], how: 'Un paragraphe argumentatif : cinq connecteurs classés, trois circonstanciels, sujets et COD.' }
  ]
});

cw({
  n: 5, f: 'f1', title: 'Le point de vue et le ton : jugement, pronoms, niveaux de langage, nombre, ironie',
  goal: 'Lire le jugement, la voix et la distance du narrateur à travers cinq procédés.',
  notions: [
    'Termes péjoratifs (laid, sale, mesquin, infidèle) et mélioratifs (beau, doux, lumineux, divin, sublime) : ils orientent le jugement du lecteur.',
    'Pronoms personnels : « je » le point de vue intime ; « tu » l’adresse directe ; « on » un groupe vague ; « nous » l’union, la solidarité ; « vous » le respect, la distance ou l’accusation ; « il, elle, ils » la mise à distance.',
    'Niveaux de langage : familier, courant, soutenu ; ils caractérisent un personnage, un milieu, ou créent un contraste.',
    'Singulier et pluriel : le singulier exprime la solitude et l’individualité, le pluriel la multitude (un seul contre plusieurs).',
    'Ironie : dire le contraire de ce que l’on pense pour critiquer ou se moquer.'
  ],
  skills: [
    'Relever les termes péjoratifs et mélioratifs et dire quel portrait ils composent.',
    'Interpréter l’emploi de chaque pronom personnel dans un monologue.',
    'Identifier le niveau de langage d’un personnage à partir de cinq expressions citées.',
    'Opposer les termes au singulier et au pluriel pour expliquer un rapport de force.',
    'Repérer une ironie en cherchant ce que l’auteur veut critiquer.'
  ],
  watch: [
    'Un adjectif n’est pas toujours péjoratif ou mélioratif par nature : tenir compte du contexte.',
    '« Vous » peut être poli ou accusateur : choisir selon la scène.',
    'Une ironie sans cible (« qui est visé ? ») n’est pas une ironie analysée.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches péjoratifs et mélioratifs, pronoms personnels, niveaux de langage, singulier et pluriel.' },
    { k: 'Supports', t: 'Texte de l’exercice 6 (Clara et Jérôme), texte de l’exercice 8 (monologue du deuil), texte de l’exercice 9 (paysan et princesse), texte de l’exercice 10 (un seul contre plusieurs) ; trois phrases ironiques pour la fin de séance.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 4', 'Dix connecteurs à classer par rapport logique, sur ardoise.'],
    [12, 'cours', 'Cours : péjoratifs et mélioratifs, pronoms personnels', 'Les termes qui orientent le jugement du lecteur (péjoratifs et mélioratifs), puis le tableau des six pronoms et leurs effets.'],
    [20, 'exo', 'Exercices 6 et 8 : jugement et pronoms', 'Individuel. Exercice 6 sur le portrait de Clara et de Jérôme (6 min), exercice 8 sur le monologue du deuil (8 min). Correction collective de 6 min.'],
    [10, 'cours', 'Cours : niveaux de langage, singulier et pluriel', 'Familier, courant, soutenu ; le singulier pour la solitude, le pluriel pour la multitude.'],
    [22, 'exo', 'Exercices 9 et 10 : niveaux de langage, nombre', 'Individuel. Exercice 9 sur le paysan et la princesse (8 min), exercice 10 sur le texte « un seul contre plusieurs » (6 min). Correction de 8 min.'],
    [8, 'cours', 'Cours : ironie', 'Dire le contraire de ce que l’on pense pour critiquer ou se moquer : repérer la cible.'],
    [30, 'exo', 'Ironie et tableau de synthèse sur un extrait', 'Individuel. Trois phrases ironiques à analyser : qui est visé, quelle critique (6 min). Puis un extrait de nouvelle : au moins un relevé par procédé de la séance, avec interprétation (15 min). Correction de 9 min.'],
    [10, 'bilan', 'Bilan de la formation procédés', 'Test de 8 min : la liste des 15 procédés de mémoire, avec un exemple pour trois d’entre eux. Annonce : le test sur texte inédit aura lieu en semaine 9.']
  ],
  drills: [
    { t: 'Exercices 6 et 9 : jugement et niveaux de langage', tags: ['Individuel', '6 à 8 min'], how: 'Souligner les termes et leurs niveaux, puis rédiger une interprétation d’une phrase qui décrit le portrait obtenu.' },
    { t: 'Exercice 8 : les six pronoms', tags: ['Individuel', '8 min'], how: 'Relever chaque pronom, indiquer sa personne et son effet (intimité, adresse, mise à distance, accusation).' },
    { t: 'Exercice 10 et ironie', tags: ['Binôme', '12 min'], how: 'On oppose singulier et pluriel dans le texte, puis chaque binôme reformule une ironie en disant ce que l’auteur critique.' },
    { t: 'Tableau de synthèse', tags: ['Individuel', '15 min'], how: 'Un extrait de nouvelle : au moins un relevé pour chacun des cinq procédés de la séance, avec interprétation.' }
  ]
});

cw({
  n: 6, f: 'f1', title: 'Les genres littéraires : poésie, récit et roman, théâtre, littérature d’idées',
  goal: 'Identifier le genre et le sous-genre d’un texte et employer le vocabulaire technique qui leur correspond.',
  notions: [
    'La poésie travaille d’abord la forme (rythme, musicalité, figures, lexique). Sous-genres : sonnet (14 vers : deux quatrains, deux tercets), épopée, ode, élégie, ballade, rondeau, madrigal, blason, calligramme. Poésie en vers (strophes) ou en prose.',
    'Le récit et le roman : composantes techniques d’un récit, types de points de vue (focalisation), narrateur.',
    'Le théâtre : œuvre écrite pour être représentée ; vocabulaire de la mise en scène, types de comique.',
    'La littérature d’idées : types d’arguments, de raisonnements et manières de convaincre.',
    'Identifier le genre précis du texte (sonnet, extrait de tragédie, pamphlet, fable) permet de choisir le vocabulaire technique dans le commentaire.'
  ],
  skills: [
    'Définir en une phrase chacun des quatre genres et donner un exemple d’œuvre.',
    'Citer les neuf sous-genres de la poésie avec leur définition.',
    'Identifier le genre et le sous-genre de six extraits inconnus et justifier.',
    'Réutiliser le vocabulaire technique du genre dans une phrase d’analyse.'
  ],
  watch: [
    'Ne pas confondre genre (la forme générale) et registre (le ton) ; la semaine suivante est consacrée aux registres.',
    'Un poème en prose n’a ni vers ni strophes : ne pas parler de rimes ou de quatrains.',
    'Un sonnet est défini par sa structure (4, 4, 3, 3), pas par son thème.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'La fiche « Les genres littéraires » : les quatre genres, les sous-genres de la poésie et le vocabulaire associé.' },
    { k: 'Supports', t: 'Tableau des sous-genres de la poésie ; six extraits courts (un sonnet, une scène de théâtre, un paragraphe de roman, un extrait d’essai, un blason, un poème en prose) ; liste du vocabulaire technique par genre.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 5', 'Cinq pronoms à interpréter dans une phrase ; deux phrases à classer selon le niveau de langage.'],
    [20, 'cours', 'Cours : la poésie', 'Définition, neuf sous-genres, vocabulaire (vers, strophe, rimes, rythme), poésie en vers et en prose.'],
    [18, 'cours', 'Cours : le récit et le roman', 'Narrateur, points de vue, composantes du récit, grandes formes (roman, mémoires, récit autobiographique).'],
    [18, 'cours', 'Cours : le théâtre', 'Texte et représentation, mise en scène, comique de mots, de gestes, de situation, de caractère.'],
    [18, 'cours', 'Cours : la littérature d’idées', 'Argumenter et convaincre : types d’arguments, raisonnements, essai, discours, lettre.'],
    [15, 'exo', 'Exercice : genre et sous-genre', 'En équipes de deux, six extraits à identifier avec trois indices justificatifs pour chacun. Correction par groupe.'],
    [15, 'exo', 'Jeu : les sous-genres de la poésie', 'En équipes de deux, neuf cartes (sonnet, épopée, ode, élégie, ballade, rondeau, madrigal, blason, calligramme) à associer à leur définition en 10 min ; correction de 5 min.'],
    [8, 'bilan', 'Bilan', 'Chacun écrit les quatre genres avec un exemple d’œuvre tirée de son programme.']
  ],
  drills: [
    { t: 'Exercice : genre et sous-genre', tags: ['Binôme', '15 min'], how: 'Six extraits ; pour chacun, nommer le genre et le sous-genre et donner trois indices. Les réponses sont comparées entre équipes.' },
    { t: 'Fiche vocabulaire par genre', tags: ['Individuel', 'À compléter'], how: 'Un tableau à quatre colonnes complété en séance avec les mots techniques de chaque genre. Il sert de référence pour le commentaire.' },
    { t: 'Jeu des sous-genres de la poésie', tags: ['Binôme', '10 min'], how: 'Neuf cartes à associer à leur définition ; correction par échange entre équipes.' }
  ]
});

cw({
  n: 7, f: 'f1', title: 'Les registres littéraires : onze tonalités et leurs indices',
  goal: 'Reconnaître le registre d’un texte à partir de ses indices et décrire l’atmosphère créée.',
  notions: [
    'Un registre est la tonalité d’un texte, l’effet que l’auteur cherche à produire sur le lecteur.',
    'Onze registres : lyrique, tragique, comique, réaliste, fantastique, dramatique, épique, pathétique, satirique, polémique, épidictique.',
    'Famille de l’émotion : lyrique (sentiments personnels, rythme poétique), tragique (fatalité, mort, devoir), dramatique (tension, attente, conflit), pathétique (pitié, compassion).',
    'Famille du rire et de la critique : comique, satirique (critique moqueuse, ironie, caricature), polémique (ton combatif, attaque d’une idée), épidictique (éloge ou blâme).',
    'Famille de l’ampleur et du réel : épique (exploits surhumains, grandeur), fantastique (hésitation entre raison et imagination, étrangeté), réaliste (réalité crue, lexique précis et concret).'
  ],
  skills: [
    'Associer chaque registre à ses indices : lexique, ponctuation, figures, rythme.',
    'Identifier le registre dominant d’un extrait et citer au moins trois indices.',
    'Repérer un registre secondaire et dire ce qu’il apporte (par exemple le pathétique dans un récit réaliste).',
    'Utiliser le registre pour formuler une problématique de commentaire.'
  ],
  watch: [
    'Un texte peut cumuler plusieurs registres : distinguer le dominant des secondaires.',
    'Le pathétique cherche à émouvoir par la pitié ; le lyrique exprime les sentiments de l’auteur : ne pas les confondre.',
    'Un registre n’est pas une opinion sur le texte : il se prouve par des indices cités.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'La fiche « Les registres littéraires » : définitions et indices de chacun des onze registres.' },
    { k: 'Supports', t: 'Onze extraits courts, un par registre, numérotés ; la grille « registre / définition / indices » ; chronomètre de classe.' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 6', 'Quatre genres, cinq sous-genres de la poésie : définition à compléter.'],
    [30, 'cours', 'Cours : les onze registres en trois familles', 'Émotion (10 min), rire et critique (10 min), ampleur et réel (10 min). Pour chacun : définition, indices, exemple.'],
    [20, 'exo', 'Exercice : associer extraits et registres', 'Individuel, 20 min : onze extraits à associer, avec trois indices pour chacun.'],
    [10, 'corr', 'Correction', 'Chaque registre est justifié par ses indices cités.'],
    [20, 'exo', 'Atelier : registre dominant et secondaire', 'En équipes de deux, un extrait long ; relevé des indices du registre dominant et d’un registre secondaire, restitution orale de 2 min.'],
    [20, 'copie', 'Atelier d’écriture : un même fait en deux registres', 'Individuel, 15 min : réécrire un fait divers de trois lignes dans deux registres au choix (comique, pathétique, épique, satirique), puis lecture de deux productions et repérage des indices (5 min).'],
    [12, 'bilan', 'Bilan', 'Les onze registres de mémoire, regroupés en trois familles. Consigne : refaire la liste des registres de mémoire.']
  ],
  drills: [
    { t: 'Exercice : associer extraits et registres', tags: ['Individuel', 'Chronométré', '20 min'], how: 'Onze extraits numérotés, onze registres. Pour chaque extrait, trois indices cités dans un tableau.' },
    { t: 'Atelier registre dominant et secondaire', tags: ['Binôme', '2 min d’oral'], how: 'Chaque équipe annonce son registre dominant, ses indices et un registre secondaire en deux minutes. Les autres relèvent un indice oublié.' },
    { t: 'Atelier d’écriture en deux registres', tags: ['Individuel', '15 min'], how: 'Réécrire un fait divers dans deux registres, puis faire repérer les indices par le voisin.' }
  ]
});

cw({
  n: 8, f: 'f1', title: 'Les mouvements littéraires I : de l’humanisme aux Lumières',
  goal: 'Situer un auteur dans son mouvement en suivant le format commun : rupture, caractéristiques formelles, thèmes.',
  notions: [
    'Format commun pour chaque mouvement : « se développe en rupture avec… », caractéristiques formelles, thèmes privilégiés.',
    'L’humanisme (XVIe siècle) : retour aux auteurs antiques, confiance dans l’homme, critique des abus politiques et religieux.',
    'La Pléiade (milieu du XVIe siècle) : renouveler la poésie française ; thèmes : l’amour, la nature, le temps qui passe, la grandeur de la France.',
    'Le baroque : instabilité du monde, fuite du temps, illusion des apparences, inconstance des sentiments.',
    'Le classicisme (XVIIe siècle) : plaire et instruire, règles, équilibre, leçon morale et réflexion sur la condition humaine.',
    'Les Lumières (XVIIIe siècle) : raison, science et éducation, recherche de la meilleure forme de gouvernement.'
  ],
  skills: [
    'Compléter le texte à trous de l’accroche d’une introduction avec un mouvement littéraire.',
    'Placer cinq mouvements sur une frise chronologique, avec un auteur pour chacun.',
    'Associer un extrait à son mouvement en s’appuyant sur ses thèmes et sa forme.',
    'Utiliser le mouvement pour situer une œuvre dans son contexte historique et littéraire.'
  ],
  watch: [
    'Ne pas retenir seulement des dates : retenir la rupture, car elle explique les thèmes.',
    'L’accroche d’une introduction doit nommer le mouvement, pas seulement l’auteur.',
    'Un auteur peut relever de plusieurs mouvements au cours de sa vie : indiquer celui qui correspond au texte.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches de l’humanisme, de la Pléiade, du baroque, du classicisme et des Lumières.' },
    { k: 'Supports', t: 'Frise chronologique vierge ; un tableau « mouvement, rupture, forme, thèmes, auteurs » ; le texte à trous d’accroche (« X est un écrivain français du … siècle appartenant au mouvement … »).' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 7', 'Onze registres : un indice est projeté, la classe nomme le registre.'],
    [15, 'cours', 'Format commun et humanisme', 'Présentation du format en trois phrases, puis l’humanisme : contexte, caractéristiques, thèmes, auteurs.'],
    [12, 'cours', 'La Pléiade', 'Rupture, formes, thèmes, poètes.'],
    [12, 'cours', 'Le baroque', 'Instabilité, illusion, fuite du temps.'],
    [15, 'cours', 'Le classicisme', 'Règles, équilibre, plaire et instruire.'],
    [15, 'cours', 'Les Lumières', 'Raison, science, éducation, gouvernement.'],
    [15, 'exo', 'Exercice : frise et accroches', 'Individuel, 15 min : placer les cinq mouvements sur la frise ; rédiger trois accroches avec le texte à trous pour trois auteurs.'],
    [15, 'exo', 'Exercice : situer trois auteurs', 'Individuel, 10 min : trois extraits courts à rattacher à leur mouvement (rupture, thèmes, forme) ; correction de 5 min.'],
    [13, 'bilan', 'Bilan', 'Chaque élève énonce un mouvement, sa rupture et un auteur. Consigne : mémoriser la frise.']
  ],
  drills: [
    { t: 'Frise des cinq mouvements', tags: ['Individuel', 'De mémoire'], how: 'Frise vierge à compléter : mouvements, siècles, auteurs, thèmes. À reproduire de mémoire à la fin de la semaine.' },
    { t: 'Accroches d’introduction', tags: ['Individuel', 'Texte à trous', '15 min'], how: 'Trois accroches à rédiger en suivant le texte à trous : auteur, siècle, mouvement, rupture, forme, thèmes.' },
    { t: 'Situer trois auteurs', tags: ['Individuel', '10 min'], how: 'Trois extraits à rattacher à leur mouvement en donnant deux indices.' }
  ]
});

cw({
  n: 9, f: 'f1', title: 'Les mouvements littéraires II : du romantisme au Nouveau Roman',
  goal: 'Replacer huit mouvements des XIXe et XXe siècles dans leur contexte et reconnaître leur style dans un extrait.',
  notions: [
    'Le romantisme : primat du moi, sentiments, nature, exotisme, fantastique, grandes interrogations sur la condition humaine.',
    'Le Parnasse : l’art pour l’art, beauté froide et immuable des formes idéalisées plutôt que les élans du moi.',
    'Le réalisme et le naturalisme : représenter la société telle qu’elle est, observation précise, déterminisme.',
    'Le symbolisme : suggérer plutôt que dire, musicalité, correspondances.',
    'Le surréalisme : libérer l’imaginaire, rêve, écriture automatique.',
    'L’absurde : le monde n’a pas de sens ; le Nouveau Roman : remise en cause du personnage, de l’intrigue et du récit traditionnel.'
  ],
  skills: [
    'Placer huit mouvements sur une frise, avec un auteur et une œuvre pour chacun.',
    'Associer huit extraits courts à leur mouvement en justifiant par deux indices.',
    'Opposer deux mouvements voisins (Parnasse et romantisme, réalisme et naturalisme) en une phrase.',
    'Mobiliser le mouvement pour situer une œuvre du programme (par exemple Musset, Balzac, Rimbaud, Sarraute).'
  ],
  watch: [
    'Beaucoup de mouvements se définissent contre le précédent : retenir cette opposition.',
    'Les œuvres du programme servent d’exemples : relier Balzac au réalisme, Musset au romantisme, Sarraute au Nouveau Roman.',
    'Ne pas confondre le Parnasse, tourné vers la forme, et le romantisme, tourné vers le moi.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches du romantisme, du Parnasse, du réalisme, du naturalisme, du symbolisme, du surréalisme, de l’absurde et du Nouveau Roman.' },
    { k: 'Supports', t: 'Frise des XIXe et XXe siècles ; huit extraits courts à associer ; tableau « mouvement, rupture, forme, thèmes, auteurs ».' }
  ],
  flow: [
    [8, 'accroche', 'Quiz sur la semaine 8', 'Cinq mouvements à reconnaître à partir d’une phrase de contexte.'],
    [15, 'cours', 'Le romantisme', 'Rupture avec le classicisme, thèmes du moi, de la nature et du fantastique, auteurs.'],
    [10, 'cours', 'Le Parnasse', 'L’art pour l’art et la forme parfaite, opposés aux élans du moi.'],
    [12, 'cours', 'Le réalisme et le naturalisme', 'Observation, société, déterminisme.'],
    [10, 'cours', 'Le symbolisme', 'Suggestion, musicalité, correspondances.'],
    [12, 'cours', 'Le surréalisme', 'Rêve, inconscient, écriture automatique.'],
    [10, 'cours', 'L’absurde', 'Un monde sans sens, des personnages en quête de sens.'],
    [8, 'cours', 'Le Nouveau Roman', 'Remise en cause du personnage et de l’intrigue.'],
    [10, 'exo', 'Exercice : associer huit extraits à leurs mouvements', 'Binôme, 10 min : deux indices par extrait, restitution rapide.'],
    [20, 'exo', 'Test de fin de formation sur texte inédit', 'Individuel, 15 min : pour un texte inédit, deux procédés avec interprétation, le genre, le registre et le mouvement ; correction de 5 min.'],
    [5, 'bilan', 'Bilan de la formation', 'Retour sur le test : chacun note les procédés qu’il confond encore. Consigne : refaire de mémoire le tableau des 15 procédés.']
  ],
  drills: [
    { t: 'Frise des huit mouvements', tags: ['Individuel', 'De mémoire'], how: 'Frise vierge : placer les huit mouvements, un auteur et une œuvre. Correction avec la fiche.' },
    { t: 'Associer huit extraits à leurs mouvements', tags: ['Binôme', '10 min'], how: 'Chaque binôme associe un extrait à un mouvement et donne deux indices (thème, forme).' },
    { t: 'Test de fin de formation', tags: ['Individuel', '15 min'], how: 'Texte inédit : deux procédés interprétés, genre, registre, mouvement. Corrigé en séance.' }
  ]
});
