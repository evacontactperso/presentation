/* Curriculum : semaines 15 à 24 (Formation 3 : dissertation), une œuvre par semaine.
   Chaque fiche suit la même séance : quiz de lecture, identité et biographie, résumé, mots-clés du parcours,
   « la dissertation à connaître », entraînement à l’introduction, conclusion et ouverture, atelier de citations. */

function diss(o) {
  const odd = o.n % 2 === 1;
  const flow = [
    [6, 'accroche', 'Quiz de lecture', `Cinq questions sur l’intrigue de ${o.short} : ${o.quiz}`],
    [10, 'cours', 'Fiche d’identité et biographie', `${o.ident} La biographie sert d’accroche à l’introduction : ${o.bio}`],
    [10, 'exo', 'Le résumé de l’œuvre', `Individuel, 5 min : résumer ${o.short} de mémoire en dix lignes, puis comparer avec le résumé de la fiche. ${o.resume}`],
    [10, 'cours', 'Les mots-clés du parcours', o.kw],
    [30, 'cours', 'La dissertation à connaître', o.plan],
    [18, 'copie', 'Entraînement : l’introduction', `Individuel, 15 min, puis relecture croisée de 3 min. Cinq éléments : accroche (biographie), présentation de l’œuvre (titre souligné, date de publication), résumé détaillé, problématique, annonce du plan. ${o.intro}`],
    [10, 'copie', 'Conclusion et ouverture', `Réponse à la problématique, rappel des grandes parties et sous-parties, ouverture détaillée. ${o.concl}`]
  ];
  flow.push([odd ? 20 : 15, 'exo', 'Atelier : citations et plan détaillé', `Individuel, ${odd ? 15 : 10} min : choisir trois citations ou scènes de ${o.short} pour illustrer une sous-partie, avec l’effet ou le procédé qui les rend probantes ; mise en commun de 5 min.`]);
  flow.push([odd ? 6 : 11, 'bilan', 'Bilan', o.bilan]);
  cw({
    n: o.n, f: 'f3', title: o.title, goal: o.goal, notions: o.notions, skills: o.skills, watch: o.watch,
    prep: [
      { k: 'À lire avant la séance', t: o.read },
      { k: 'Supports', t: `La fiche de ${o.short} (biographie, résumé, mots-clés, dissertation à connaître, introduction et conclusion, autres œuvres, entraînement) ; l’exemplaire de l’œuvre ; une feuille pour le plan en trois parties.` }
    ],
    flow,
    drills: [
      { t: 'Résumé en dix lignes', tags: ['Individuel', '5 min'], how: `Résumer ${o.short} de mémoire en dix lignes, puis comparer avec le résumé de la fiche. Les oublis sont soulignés et réécrits.` },
      { t: 'Plan en trois parties avec exemples', tags: ['Individuel', 'Sur feuille'], how: `Écrire le plan « à connaître » avec, sous chaque sous-partie, une citation ou une scène précise de ${o.short}. Exemple attendu : ${o.ex}` },
      { t: 'Introduction rédigée', tags: ['Individuel', 'Chronométré', '15 min'], how: 'Rédaction complète sur copie, en un seul paragraphe avec alinéa de trois carreaux, puis relecture croisée avec une grille de cinq éléments.' },
      { t: 'Atelier : citations et plan détaillé', tags: ['Individuel', odd ? '15 min' : '10 min'], how: `Trois citations ou scènes de ${o.short} pour une sous-partie, avec l’effet à analyser ; mise en commun à voix haute.` }
    ]
  });
}

diss({
  n: 15, k: 8, short: '« Manon Lescaut »', src: 'Texte de l’œuvre, au choix du professeur (par exemple un épisode de la fuite d’Amiens, de l’évasion de Saint-Lazare ou de la Louisiane).',
  title: '« Manon Lescaut », de l’abbé Prévost : personnages en marge, plaisirs du romanesque',
  goal: 'Construire un plan de dissertation sur le plaisir du lecteur et la marginalité des personnages, avec exemples précis.',
  quiz: 'les amants, la fuite d’Amiens, le séminaire, Chaillot, Saint-Lazare, la Louisiane.',
  ident: 'Histoire du chevalier Des Grieux et de Manon Lescaut, dernier tome des « Mémoires et aventures d’un homme de qualité », 1731 ; roman-mémoires, narration à la première personne.',
  bio: 'Prévost naît en 1697 à Hesdin, devient prêtre, quitte l’abbaye sans autorisation et s’exile en Angleterre et en Hollande ; le roman fait scandale en 1731 et est interdit en 1733.',
  resume: 'Le chevalier Des Grieux raconte son amour pour Manon, jeune femme séduisante et ambitieuse. Aveuglé par sa passion, il quitte la vie religieuse à laquelle il était destiné et glisse vers la débauche : tricheries, vol, prison, jusqu’à la déportation en Louisiane. Le résumé de la séance relève les grands épisodes dans l’ordre.',
  kw: 'Définitions de « personnage » (une personne fictive créée par l’auteur), « en marge » (du latin margo : bord, périphérie), « plaisir » (satisfaction suscitée par la lecture), « romanesque » (le plaisir des aventures et des émotions fortes). Chaque mot est défini puis relié à l’œuvre.',
  plan: 'Le lecteur a du plaisir à lire « Manon Lescaut » car il est : fasciné par la marginalité et l’immoralité des personnages (marginalité morale, itinéraire) ; touché par la passion amoureuse (déclarations, actions, obstacles) ; entraîné par les aventures (péripéties rapides, espaces variés comme Chaillot) ; intéressé par la critique morale de Prévost (Avis de l’auteur, Des Grieux jeune homme modèle, figures de raison comme Tiberge) ; troublé par l’ambiguïté de la leçon morale (des personnages à la fois fautifs et victimes) ; intéressé par la critique sociale (système judiciaire, hiérarchies, pouvoir de la fortune, inégalité entre les sexes).',
  intro: 'Problématique attendue : en quoi la marginalité des personnages et la richesse de l’intrigue font-elles le plaisir du lecteur ?',
  concl: 'Ouverture suggérée par la fiche : « La Princesse de Clèves », où la raison passe avant la passion, à l’inverse de Manon ; autres œuvres de la fiche : « Les Misérables », « Roméo et Juliette ».',
  bilan: 'Chaque élève écrit les six arguments de la fiche en une ligne. Consigne : refaire le plan de mémoire.',
  notions: [
    'Genre : roman-mémoires, avec un narrateur qui est aussi le personnage central. Parcours : « Personnages en marge, plaisirs du romanesque ».',
    'Marginalité : morale (les personnages n’ont pas les mêmes normes que le reste de la société), sociale, géographique.',
    'Plaisirs du romanesque : passion, aventures, rebondissements, variété des lieux (Amiens, Saint-Lazare, Chaillot, la Louisiane).',
    'Critique morale : l’« Avis de l’auteur », le contraste entre le Des Grieux sage du début et ses chutes, la figure de Tiberge.',
    'Critique sociale : le système judiciaire, la rigidité des hiérarchies, la puissance de la fortune.'
  ],
  skills: [
    'Rédiger une introduction avec accroche biographique, présentation et résumé.',
    'Justifier chaque sous-partie par une scène ou une citation de l’œuvre.',
    'Expliquer l’effet de la narration à la première personne : l’empathie du lecteur pour Des Grieux.',
    'Proposer une ouverture comparant Manon et une autre héroïne.'
  ],
  watch: [
    'Des Grieux est narrateur : il plaide sa cause, le lecteur est placé en position d’empathie.',
    'Ne pas réduire l’œuvre à une histoire d’amour : la critique morale et sociale compte autant.',
    'Manon est à la fois attirée par l’argent et capable d’un amour sincère : l’ambiguïté est le point-clé.'
  ],
  read: 'La fiche « Manon Lescaut » en entier, en particulier le résumé, les définitions du parcours et le plan « à connaître ».',
  ex: 'l’évasion de Saint-Lazare ou le duel en Louisiane pour illustrer le plaisir de l’aventure.'
});

diss({
  n: 16, k: 0, short: '« La Peau de chagrin »', g: 'négation (totale, partielle, restrictive, lexicale).', e: 'politesse : travailler l’entrée et la sortie de la salle, la salutation, le remerciement, avec un binôme qui joue l’examinateur.',
  title: '« La Peau de chagrin », de Balzac : les romans de l’énergie, création et destruction',
  goal: 'Comprendre comment Balzac oppose la vie intense, destructrice, et la vie contemplative, créatrice, tout en entretenant l’ambiguïté.',
  quiz: 'Raphaël de Valentin, la peau, le talisman qui rétrécit à chaque désir, la vie intense, la vie contemplative.',
  ident: '« La Peau de chagrin », 1831, roman, qui fait partie de « La Comédie humaine » ; parcours « les romans de l’énergie, création et destruction ».',
  bio: 'Balzac naît en 1799 à Tours ; sa famille change son nom de « Balssa » en « Balzac » ; il se lance dans le droit pour faire plaisir à son père mais rêve d’écrire.',
  resume: 'Un jeune homme ruiné reçoit une peau magique qui exauce ses désirs, mais rétrécit à chaque souhait, et sa vie se raccourcit avec elle. Le résumé de la séance suit les étapes du roman, depuis le vœu initial jusqu’à la mort du héros.',
  kw: 'Définitions de « roman » (une intrigue construite avec personnages dans un cadre spatio-temporel), « énergie » (la force vitale qui anime les êtres, selon Balzac), « création » et « destruction ». Chaque mot est relié à la peau qui rétrécit.',
  plan: 'La vie intense (fondée sur le Vouloir et le Pouvoir) est destructrice à long terme : débauche, épuisement de l’énergie vitale. La vie contemplative (fondée sur le Savoir) préserve l’énergie et génère des créations intellectuelles durables. Cependant, la morale de Balzac est ambiguë : la vie contemplative peut aussi mener à la mort par renoncement au désir et au plaisir, et la vie intense peut produire une vitalité sublime. Le roman est enfin à la fois réaliste et fantastique.',
  intro: 'Problématique attendue : comment Balzac montre-t-il que l’énergie vitale peut être créatrice ou destructrice selon la manière de la dépenser ?',
  concl: 'Ouvertures de la fiche : « Faust » de Goethe, « Le Portrait de Dorian Gray » d’Oscar Wilde, « Le Chef-d’œuvre inconnu » de Balzac.',
  bilan: 'Chaque élève écrit trois lignes : vie intense, vie contemplative, ambiguïté. Consigne : relire les chapitres sur la peau.',
  notions: [
    'Genre : roman, qui mêle réalisme (décors, société parisienne) et fantastique (le talisman). Parcours : « Les romans de l’énergie : création et destruction ».',
    'Énergie vitale : chacun en possède une quantité limitée, qu’il peut dépenser ou préserver.',
    'Vie intense : vouloir et pouvoir, plaisir et débauche, destructrice à long terme.',
    'Vie contemplative : savoir, préserver son énergie, créer des œuvres durables.',
    'Ambiguïté : aucune des deux vies n’est clairement meilleure ; le lecteur doit choisir.'
  ],
  skills: [
    'Expliquer la peau comme symbole de l’énergie vitale.',
    'Relier chaque sous-partie à une scène du roman.',
    'Montrer l’ambiguïté de la morale de Balzac en citant les deux faces.',
    'Écrire une ouverture qui compare le pacte avec le talisman à un autre pacte littéraire.'
  ],
  watch: [
    'Ne pas conclure que Balzac condamne la vie intense : l’ambiguïté est voulue.',
    'Le roman est à la fois réaliste et fantastique : ne pas choisir l’un contre l’autre.',
    'Faire le lien entre le rétrécissement de la peau et celui de la vie du héros.'
  ],
  read: 'La fiche « La Peau de chagrin », avec le plan « à connaître » et les définitions du parcours.',
  ex: 'la peau qui rétrécit après chaque désir, pour illustrer la perte d’énergie.'
});

diss({
  n: 17, k: 9, short: '« Sido » et « Les Vrilles de la vigne »', src: 'Texte de l’œuvre, au choix du professeur (par exemple une page sur le jardin ou sur la mère de Colette).',
  title: '« Sido » et « Les Vrilles de la vigne », de Colette : la célébration du monde',
  goal: 'Montrer comment Colette célèbre les êtres chers et la nature, tout en gardant une relation ambiguë avec la ville et les adultes.',
  quiz: 'Sido, le père, les frères, le jardin, les animaux, la ville, les Vrilles de la vigne.',
  ident: '« Sido et Les Vrilles de la vigne », 1908 pour les Vrilles et 1930 pour Sido ; récit autobiographique ; parcours « la célébration du monde ».',
  bio: 'Colette naît en 1873 à Saint-Sauveur-en-Puisaye, dans une maison entourée de jardins ; sa mère, Sido, lui transmet le goût de la nature, et elle grandit entre bibliothèque et jardin.',
  resume: 'Colette évoque sa mère Sido, son père, ses frères et le jardin de son enfance, puis, dans les Vrilles de la vigne, ses souvenirs de la nature, de la ville et de l’âge adulte. Le résumé de la séance distingue les deux recueils.',
  kw: 'Définitions de « célébration » (un acte par lequel on honore une personne, un événement ou une valeur), « monde » (l’ensemble des êtres, des lieux et des choses qui entourent Colette).',
  plan: 'Une célébration du monde des êtres chers : la famille, dont la mère, indépendante, charismatique, spirituelle, au fort caractère, qui parle le langage de la nature. Une célébration de la nature et de la vie sauvage : les plantes, les animaux, les sens qui s’exhalent. Une relation ambiguë au monde de la ville et des adultes : le rejet de la ville, l’exil, la nostalgie.',
  intro: 'Problématique attendue : comment Colette célèbre-t-elle son enfance, les êtres chers et la nature ?',
  concl: 'Ouvertures de la fiche : « Histoire de ma vie » de George Sand, « Rêveries du promeneur solitaire » de Rousseau, « Du côté de chez Swann » de Proust.',
  bilan: 'Chaque élève cite une scène pour chaque grande partie. Consigne : refaire le plan de mémoire.',
  notions: [
    'Genre : récit autobiographique. Parcours : « La célébration du monde ».',
    'Les êtres chers : la mère, femme indépendante, qui a des avis tranchés et un fort caractère, symbole de liberté, qui semble parler le langage de la nature.',
    'La nature et la vie sauvage : observation lente et précise, richesse des figures de style, hommage à la richesse des souvenirs.',
    'La ville et les adultes : un monde plus ambigu, entre rejet et nostalgie.',
    'Comparaison utile : Rousseau et Colette observent la nature avec lenteur et la voient comme un refuge.'
  ],
  skills: [
    'Citer deux passages qui illustrent la célébration de la mère.',
    'Repérer l’écriture sensorielle de Colette (odeurs, couleurs, sons).',
    'Expliquer l’ambiguïté de la relation à la ville.',
    'Proposer une ouverture comparant Colette et Rousseau.'
  ],
  watch: [
    'Ne pas lire Sido comme une simple biographie : c’est une célébration, donc un texte qui choisit, embellit.',
    'Relier la forme au fond : la précision des figures de style rend hommage à la richesse des souvenirs.',
    'Ne pas oublier les deux recueils dans l’introduction : Sido et Les Vrilles.'
  ],
  read: 'La fiche « Sido et Les Vrilles de la vigne », avec les deux résumés et le plan en trois parties.',
  ex: 'une citation sur la mère et le jardin pour illustrer la célébration des êtres chers.'
});

diss({
  n: 18, k: 0, short: '« Pour un oui ou pour un non »', g: 'analyse logique d’une phrase de la pièce, de la proposition principale aux subordonnées.', e: 'relation avec l’interlocuteur : répondre à une question surprise en regardant la personne, en reformulant, sans précipitation.',
  title: '« Pour un oui ou pour un non », de Nathalie Sarraute : théâtre et dispute',
  goal: 'Expliquer comment une dispute sur la parole devient une dispute sur le fond, et ce que le théâtre apporte à cette dispute.',
  quiz: 'les deux amis, le reproche sur le ton, les silences, la parole, la dispute.',
  ident: '« Pour un oui ou pour un non », Nathalie Sarraute, 1986 ; pièce de théâtre ; parcours « Théâtre et dispute ».',
  bio: 'Sarraute naît en 1900 en Russie, grandit entre la Russie et la France, étudie à Oxford et à Berlin, puis s’installe à Paris ; elle est associée au Nouveau Roman.',
  resume: 'Deux amis se disputent à cause d’une petite phrase, d’un ton, d’un silence. La dispute se déploie sur la parole, puis sur le fond de leur relation. Le résumé de la séance reprend les étapes de la dispute.',
  kw: 'Définitions de « théâtre » (œuvre écrite pour être représentée sur scène devant un public, qui représente directement l’action) et de « dispute » (un affrontement par la parole, qui révèle des désaccords plus profonds).',
  plan: 'Thème 1 : l’évolution de l’objet de la dispute, d’une dispute superficielle sur la parole, sur la forme, à une dispute plus fondamentale sur le fond (reproches, mondes incompatibles). Thème 2 : la parole, entre dissimulation et révélation de la vérité de la raison de la dispute. Thème 3 : la parole, entre violence et apaisement (montée en violence, puis extériorisation qui apaise). Thème 4 : théâtre et dispute, ce qu’ils s’apportent mutuellement (la dispute est utile au théâtre, le théâtre est utile à la dispute).',
  intro: 'Problématique attendue : comment la dispute fait-elle avancer l’action et révèle-t-elle la vérité des personnages ?',
  concl: 'Ouverture à choisir parmi les autres œuvres du programme : « On ne badine pas avec l’amour » (jeux de parole) ou « Le Menteur » (mensonge et comédie).',
  bilan: 'Chaque élève écrit les quatre thèmes en une ligne. Consigne : relire la pièce en entier.',
  notions: [
    'Genre : pièce de théâtre. Parcours : « Théâtre et dispute ».',
    'Dispute sur la forme : la parole, le sens des mots, un ton.',
    'Dispute sur le fond : reproches, mondes incompatibles.',
    'La parole révèle ou dissimule la vérité de la raison de la dispute.',
    'La parole peut monter en violence, puis apaiser par l’extériorisation.'
  ],
  skills: [
    'Citer une réplique de dispute sur la forme et une de dispute sur le fond.',
    'Analyser le rôle des silences, des répétitions et des phrases courtes dans la pièce.',
    'Montrer que le théâtre met la dispute en scène et que la dispute nourrit le théâtre.',
    'Proposer une ouverture comparant deux disputes de théâtre.'
  ],
  watch: [
    'Ne pas résumer la pièce par « deux amis qui se disputent pour rien » : la dispute sur le fond est essentielle.',
    'Penser à la mise en scène : les silences et les gestes comptent.',
    'Relier chaque thème à des répliques précises.'
  ],
  read: 'La fiche « Pour un oui ou pour un non », avec les quatre thèmes et les définitions du parcours.',
  ex: 'une réplique sur le ton pour illustrer la dispute sur la forme.'
});

diss({
  n: 19, k: 10, short: '« On ne badine pas avec l’amour »', src: 'Texte de l’œuvre, au choix du professeur (par exemple une scène entre Camille et Perdican).',
  title: '« On ne badine pas avec l’amour », de Musset : les jeux du cœur et de la parole',
  goal: 'Montrer comment la parole sert le jeu, révèle l’amour, puis devient coupable.',
  quiz: 'Camille, Perdican, le couvent, Rosette, le badinage, la fin tragique.',
  ident: '« On ne badine pas avec l’amour », Alfred de Musset, 1834 ; pièce de théâtre ; parcours « les jeux du cœur et de la parole ».',
  bio: 'Musset naît en 1810 dans une famille cultivée de la petite noblesse, brille au lycée Henri-IV et fréquente très jeune les cercles romantiques de Charles Nodier.',
  resume: 'Perdican et Camille, cousins, se retrouvent. Chacun cache son amour par orgueil et teste l’autre ; le jeu fait souffrir Rosette et mène à la mort. Le résumé de la séance suit les trois actes.',
  kw: 'Définitions de « jeux » (stratégies, manipulations, mises à l’épreuve entre personnages), « cœur » (sentiments) et « parole » (instrument des jeux, de l’aveu et de la faute).',
  plan: 'La parole mensongère et manipulatrice : les personnages utilisent les mots pour jouer avec les sentiments de l’autre (cause : l’orgueil blessé, la peur d’être trompée). La parole révélatrice : la parole révèle aussi des sentiments croissants, l’amour véritable. La parole coupable : le badinage a des conséquences tragiques, l’œuvre est tragique.',
  intro: 'Problématique attendue : comment la parole est-elle à la fois le moyen du jeu amoureux et la cause du drame ?',
  concl: 'Ouverture à choisir parmi les autres œuvres du programme : « Pour un oui ou pour un non » (dispute par la parole) ou « Le Menteur » (jeu et mensonge).',
  bilan: 'Chaque élève écrit les trois paroles (mensongère, révélatrice, coupable). Consigne : refaire le plan de mémoire.',
  notions: [
    'Genre : pièce de théâtre romantique, mêlant comique et tragique. Parcours : « Les jeux du cœur et de la parole ».',
    'Cause du jeu : l’orgueil blessé de Camille et de Perdican, qui s’aiment mais n’osent l’avouer.',
    'Camille a peur d’être trompée à cause des récits entendus au couvent.',
    'La parole révèle les sentiments malgré le jeu.',
    'La conséquence : un drame, qui rend la pièce tragique.'
  ],
  skills: [
    'Expliquer le jeu de Camille et de Perdican en citant des répliques précises.',
    'Montrer comment le jeu fait souffrir Rosette.',
    'Analyser la fin de la pièce comme une faute de la parole.',
    'Proposer une ouverture comparant Musset à une autre pièce du programme.'
  ],
  watch: [
    'Ne pas traiter la pièce comme une comédie : le dénouement est tragique.',
    'Insister sur le lien entre orgueil et parole : le mot est une arme.',
    'Citer des répliques, pas seulement des scènes.'
  ],
  read: 'La fiche « On ne badine pas avec l’amour », avec les trois paroles et les définitions du parcours.',
  ex: 'une réplique de Perdican qui provoque Camille pour illustrer la parole manipulatrice.'
});

diss({
  n: 20, k: 0, short: '« Le Menteur »', g: 'nature des cinq premiers mots d’une phrase (question de l’examinateur qui contrôle le programme du collège).', e: 'regard et gestes : tenir son regard sur l’examinateur, garder les mains visibles, ne pas gesticuler.',
  title: '« Le Menteur », de Corneille : mensonge et comédie',
  goal: 'Montrer les aspects positifs et négatifs du mensonge de Dorante, et la critique de la société parisienne.',
  quiz: 'Dorante, Clarice, les Tuileries, les mensonges successifs, le père, le dénouement.',
  ident: '« Le Menteur », Pierre Corneille, 1642 ; pièce de théâtre, comédie ; parcours « Mensonge et comédie ».',
  bio: 'Corneille naît en 1606 à Rouen, devient avocat, puis se consacre au théâtre ; « Mélite » (1629) renouvelle la comédie et attire l’attention de Richelieu.',
  resume: 'Dorante, jeune étudiant en droit, arrive à Paris et ment pour séduire : il se prétend soldat et amoureux depuis un an. Les mensonges s’enchaînent et se compliquent. Le résumé de la séance suit les actes.',
  kw: 'Définition de « mensonge » : une affirmation contraire à la vérité, faite sciemment dans l’intention de tromper, qui suppose la conscience de la fausseté et la volonté de tromper. Définition de « comédie » : une pièce qui fait rire et met en scène des travers.',
  plan: 'Les aspects positifs du mensonge : son utilité (se vanter, séduire, échapper à une difficulté), sa maîtrise comme un art (Dorante est un metteur en scène et un comédien talentueux : chaque mensonge est une pièce de théâtre), son comique. Les aspects négatifs : la critique du mensonge de Dorante et de ses dangers, la critique du mensonge dans la société parisienne.',
  intro: 'Problématique attendue : comment le mensonge fait-il la comédie, et que dit la pièce de ses dangers ?',
  concl: 'Ouverture à choisir : « L’Avare » de Molière, comédie vue en commentaire, ou « On ne badine pas avec l’amour » du programme.',
  bilan: 'Chaque élève cite trois mensonges de Dorante avec leur utilité. Consigne : relire les scènes des Tuileries.',
  notions: [
    'Genre : comédie. Parcours : « Mensonge et comédie ».',
    'Première motivation du mensonge : la vantardise, pour séduire Clarice (Dorante prétend être un grand guerrier).',
    'Dorante comme metteur en scène : le mensonge est une pièce dans la pièce.',
    'Le comique du mensonge : situations, quiproquos, enchaînements.',
    'La critique : les dangers du mensonge pour Dorante et la société parisienne qui le tolère.'
  ],
  skills: [
    'Distinguer au moins trois motivations du mensonge de Dorante.',
    'Analyser une scène de mensonge comme un petit théâtre.',
    'Montrer le comique de mots, de situation et de caractère.',
    'Proposer une ouverture sur un autre menteur de comédie.'
  ],
  watch: [
    'Ne pas dire que Corneille approuve le mensonge : il montre ses charmes et ses dangers.',
    'Utiliser le vocabulaire du théâtre : réplique, quiproquo, aparté.',
    'Citer des mensonges précis, pas seulement l’idée générale.'
  ],
  read: 'La fiche « Le Menteur », avec la définition du mensonge et le plan en deux parties.',
  ex: 'la rencontre aux Tuileries, où Dorante se prétend soldat pour séduire Clarice.'
});

diss({
  n: 21, k: 11, short: '« Cahiers de Douai »', src: 'Un poème des Cahiers de Douai, au choix du professeur (par exemple un sonnet de fugue ou de nature).',
  title: '« Cahiers de Douai », de Rimbaud : émancipations créatrices',
  goal: 'Montrer que l’émancipation de Rimbaud est personnelle, politique et sociale, puis poétique.',
  quiz: 'Charleville, les fugues, Douai, Izambard, la nature, l’autorité.',
  ident: '« Cahiers de Douai », Arthur Rimbaud, rédigé en 1870 et publié en 1893 ; recueil de poésie ; parcours « Émancipations créatrices ».',
  bio: 'Rimbaud naît en 1854 à Charleville, élève brillant, il écrit ses premiers poèmes à partir de 1869 et compose les Cahiers de Douai en 1870, à quinze ou seize ans.',
  resume: 'Un adolescent s’affranchit de son foyer, de la ville et de l’autorité, et invente une poésie nouvelle dans des poèmes de fugue, de nature, de satire sociale. Le résumé de la séance présente le recueil par grands thèmes.',
  kw: 'Définition d’« émancipation » : du latin emancipare, affranchir de l’autorité du père ; processus par lequel un individu ou un groupe se libère d’une dépendance. Définition de « créatrices » : qui inventent des formes nouvelles.',
  plan: 'L’émancipation de Rimbaud est d’abord personnelle : il s’émancipe de l’autorité du foyer par ses fugues, de la ville en fuyant dans la nature, de l’enfance par ses premières expériences amoureuses. Elle est également politique et sociale : il s’émancipe de l’autorité royale, religieuse et bourgeoise, en les dénonçant dans ses poèmes. Elle est enfin poétique : tout en respectant la tradition, il cherche à créer son propre style, à l’aide d’innovations.',
  intro: 'Problématique attendue : en quoi l’émancipation de Rimbaud est-elle à la fois personnelle, politique et poétique ?',
  concl: 'Ouverture au choix de l’élève : un poète du parcours qui s’émancipe aussi d’une tradition ou d’une autorité.',
  bilan: 'Chaque élève écrit trois émancipations avec un poème chacune. Consigne : refaire le plan de mémoire.',
  notions: [
    'Genre : recueil de poésie, composé de poèmes variés.',
    'Émancipation personnelle : fugues, nature, premières amours.',
    'Émancipation politique et sociale : critique des autorités royales, religieuses et bourgeoises.',
    'Émancipation poétique : innovations de rythme, de langue, de sujets.',
    'Un poète adolescent qui écrit à quinze ou seize ans.'
  ],
  skills: [
    'Citer un poème pour chaque forme d’émancipation.',
    'Analyser une innovation poétique précise (rime, rythme, vocabulaire).',
    'Expliquer pourquoi Rimbaud choisit la nature comme refuge.',
    'Proposer une ouverture vers un autre poète émancipé.'
  ],
  watch: [
    'Pour la poésie, citer par numéro de vers et nommer la forme (sonnet, quatrain).',
    'Ne pas réduire Rimbaud à un révolté : il respecte aussi la tradition.',
    'La dimension sociale se lit dans les satires de l’autorité.'
  ],
  read: 'La fiche « Cahiers de Douai », avec les trois émancipations et la définition du parcours.',
  ex: 'un poème de fugue dans la nature pour illustrer l’émancipation personnelle.'
});

diss({
  n: 22, k: 0, short: '« Lettres d’une Péruvienne »', g: 'fonction d’un groupe de mots dans une phrase de la fiche.', e: 'rythme et silences : lire un passage en marquant les pauses, sans combler les silences par des « euh ».',
  title: '« Lettres d’une Péruvienne », de Graffigny : « un nouvel univers s’est offert à mes yeux »',
  goal: 'Montrer que Zilia découvre trois univers : géographique, social et culturel, puis intérieur.',
  quiz: 'Zilia, Aza, la traversée de l’Atlantique, la campagne française, Paris, la quipos.',
  ident: '« Lettres d’une Péruvienne », Françoise de Graffigny, 1747 ; recueil de lettres ; parcours « un nouvel univers s’est offert à mes yeux ».',
  bio: 'Graffigny naît à Nancy en 1695 ; son enfance est marquée par la sévérité de son père, et un mariage forcé à dix-sept ans fait de sa vie un enfer conjugal.',
  resume: 'Zilia, une jeune Péruvienne arrachée à son pays par les conquistadors, écrit à son fiancé Aza ; elle découvre la France et traverse l’exil. Le résumé de la séance suit les lettres et leur progression.',
  kw: 'Définitions de « nouvel » (jamais vu, inédit) et « univers » (le monde de Zilia : géographique, social, intérieur). La citation du parcours est reliée à son contexte dans le roman.',
  plan: 'La découverte d’un nouvel univers géographique, qui est un récit de voyage (la traversée de l’Atlantique, les paysages de la campagne française). La découverte d’un nouvel univers social et culturel, qui est un regard extérieur et une critique de la société (par exemple l’objectivation du corps des femmes). La découverte d’un nouvel univers intérieur et de la liberté intérieure : un récit d’apprentissage et d’émancipation, le passage de la dépendance à l’autonomie.',
  intro: 'Problématique attendue : comment le regard d’une étrangère sur la France critique-t-il la société et conduit-elle à sa propre liberté ?',
  concl: 'Ouverture possible : « Les Lettres persanes » de Montesquieu, autre regard d’étranger sur la société française.',
  bilan: 'Chaque élève cite une scène pour chacun des trois univers. Consigne : relire les lettres sur l’apprentissage de la langue.',
  notions: [
    'Genre : recueil de lettres (roman épistolaire), récit de voyage, roman d’apprentissage.',
    'Univers géographique : traversée de l’Atlantique, paysages de la campagne française.',
    'Univers social : critique de la société française, regard extérieur et naïf.',
    'Univers intérieur : liberté intérieure, émancipation, passage de la dépendance à l’autonomie.',
    'L’exil forcé d’une déracinée, surmonté par l’écriture.'
  ],
  skills: [
    'Reconnaître les trois formes du roman : épistolaire, voyage, apprentissage.',
    'Citer une lettre pour chacun des trois univers.',
    'Expliquer comment le regard naïf de Zilia produit une critique.',
    'Proposer une ouverture sur un autre regard d’étranger.'
  ],
  watch: [
    'Zilia écrit pour Aza : la forme de la lettre commande le ton.',
    'La critique de la société passe par la naïveté feinte du regard extérieur.',
    'Ne pas oublier l’évolution : Zilia gagne en autonomie au fil des lettres.'
  ],
  read: 'La fiche « Lettres d’une Péruvienne », avec les trois univers et les définitions du parcours.',
  ex: 'la traversée de l’Atlantique ou la découverte des paysages français.'
});

diss({
  n: 23, k: 12, short: '« Entretiens sur la pluralité des mondes »', src: 'Texte de l’œuvre, au choix du professeur (par exemple un passage de la première soirée, entre le philosophe et la Marquise).',
  title: '« Entretiens sur la pluralité des mondes », de Fontenelle : le goût de la science',
  goal: 'Comprendre comment Fontenelle rend la science accessible et plaisante, et ce que cela coûte à la vérité.',
  quiz: 'la Marquise, le philosophe, les soirées, le jardin, les tourbillons, les mondes habités.',
  ident: '« Entretiens sur la pluralité des mondes », Bernard Le Bouyer de Fontenelle, 1686 ; essai sous forme de dialogue ; parcours « Le goût de la science ».',
  bio: 'Fontenelle naît en 1657 à Rouen, neveu de Pierre et Thomas Corneille, abandonne le droit pour les lettres et se fait remarquer par un style limpide qui rend claires des idées complexes.',
  resume: 'Un philosophe explique à une marquise, au fil de soirées dans un jardin, que d’autres mondes sont habités. Le dialogue commence en badinage amoureux et devient leçon d’astronomie. Le résumé de la séance suit les soirées.',
  kw: 'Définitions de « goût » (la faculté de bien juger ce qui est beau ou harmonieux) et de « science » (l’ensemble des connaissances rationnelles qui expliquent le monde). Chaque mot est relié à la Marquise.',
  plan: 'Le projet pédagogique de l’auteur : rendre la science et la philosophie accessibles, comme Cicéron traduisait la philosophie grecque en latin. Une conversation qui commence comme un badinage amoureux. Premier objectif : susciter le plaisir et le goût de la science chez la Marquise et ses lecteurs. Deuxième objectif : instruire et éduquer. Question de fond : pour plaire, le narrateur sacrifie-t-il la vérité ?',
  intro: 'Problématique attendue : comment Fontenelle donne-t-il le goût de la science sans la déformer ?',
  concl: 'Ouverture possible : un autre ouvrage de vulgarisation du siècle des Lumières, ou un dialogue philosophique.',
  bilan: 'Chaque élève écrit trois façons de rendre la science plaisante. Consigne : refaire le plan de mémoire.',
  notions: [
    'Genre : essai sous forme de dialogue. Parcours : « Le goût de la science ».',
    'Projet pédagogique : rendre accessibles la science et la philosophie à un public non spécialiste.',
    'Le badinage amoureux sert de cadre pour captiver la Marquise.',
    'Deux objectifs : plaire (susciter le goût) et instruire.',
    'Question critique : la vérité est-elle sacrifiée pour plaire ?'
  ],
  skills: [
    'Citer les procédés du dialogue (comparaisons, images, ton galant).',
    'Distinguer plaire et instruire dans un extrait.',
    'Analyser la figure de la Marquise comme lectrice modèle.',
    'Ouvrir sur un autre texte de vulgarisation.'
  ],
  watch: [
    'Le dialogue n’est pas un simple décor : il organise la démonstration.',
    'La critique de la vérité sacrifiée doit être discutée, pas affirmée.',
    'Relier le goût à l’esthétique et au plaisir, pas seulement à la préférence.'
  ],
  read: 'La fiche « Entretiens sur la pluralité des mondes », avec le plan en cinq points et les définitions du parcours.',
  ex: 'la comparaison avec Cicéron dans la préface pour illustrer le projet pédagogique.'
});

diss({
  n: 24, k: 0, short: '« Discours de la servitude volontaire »', g: 'enchaînement complet : analyse logique puis question de nature et fonction.', e: 'enchaînement complet de l’oral en conditions réelles, avec chronomètre.',
  title: '« Discours de la servitude volontaire », de La Boétie : défendre et entretenir la liberté',
  goal: 'Comprendre comment La Boétie présente un paradoxe, en explique les causes, puis cherche à éveiller les consciences.',
  quiz: 'le tyran, le peuple, la liberté naturelle, la coutume, les hommes qui consentent.',
  ident: '« Discours de la servitude volontaire », Étienne de La Boétie, 1577 ; discours ; parcours « Défendre » et « entretenir » la liberté.',
  bio: 'La Boétie naît en 1530 à Sarlat, orphelin, reçoit une éducation humaniste, devient conseiller au parlement de Bordeaux à vingt-trois ans et prône la tolérance pendant les guerres de Religion.',
  resume: 'La Boétie s’étonne que tant d’hommes obéissent à un seul tyran sans y être forcés. Il analyse les causes de cette servitude et appelle ses lecteurs à retrouver leur liberté. Le résumé de la séance suit les trois grands mouvements du texte.',
  kw: 'Définitions de « défendre » (protéger contre une menace : ici contre la tyrannie) et d’« entretenir » (maintenir en bon état, faire durer). Chaque mot est relié à la liberté naturelle.',
  plan: 'La Boétie présente le paradoxe central : la servitude volontaire est absurde et éveille l’étonnement (les hommes ont renoncé à leur liberté naturelle, un bien précieux). Il établit ensuite qu’elle s’explique par des causes précises. Il cherche enfin à éveiller les consciences et à persuader par de nombreux procédés rhétoriques. Il transmet les valeurs humanistes.',
  intro: 'Problématique attendue : comment La Boétie fait-il comprendre l’absurdité de la servitude volontaire et pousse-t-il à défendre la liberté ?',
  concl: 'Ouverture possible : un autre texte de pensée politique de la Renaissance ou des Lumières.',
  bilan: 'Chaque élève écrit le paradoxe, deux causes et un procédé de persuasion. Consigne : relire le discours en entier.',
  notions: [
    'Genre : discours, texte argumentatif oratoire. Parcours : « Défendre » et « entretenir » la liberté.',
    'Paradoxe central : l’homme a renoncé à sa liberté, un bien précieux, sans y être contraint.',
    'Les causes : l’habitude, la coutume, les mécanismes du pouvoir.',
    'L’éveil des consciences : procédés rhétoriques (questions, apostrophes, exemples) pour persuader.',
    'Valeurs humanistes : liberté, dignité, raison.'
  ],
  skills: [
    'Identifier le paradoxe et le formuler en une phrase.',
    'Repérer les procédés de persuasion dans un extrait.',
    'Expliquer les causes de la servitude citées par La Boétie.',
    'Relier le texte aux valeurs humanistes.'
  ],
  watch: [
    'Ne pas résumer le Discours à une simple critique du tyran : il met en cause le consentement des hommes.',
    'Insister sur la dimension oratoire : le texte cherche à persuader.',
    'Contextualiser : les guerres de Religion éclairent la visée du texte.'
  ],
  read: 'La fiche « Discours de la servitude volontaire », avec les quatre axes du plan et les définitions du parcours.',
  ex: 'une apostrophe aux hommes pour illustrer l’éveil des consciences.'
});
