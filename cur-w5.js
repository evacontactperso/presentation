/* Curriculum : semaines 31 à 36 (partie 5 : révisions, bacs blancs écrits, oraux blancs). */

cw({
  n: 31, f: 'f5', title: 'Bac blanc écrit n°1 : le commentaire en conditions réelles',
  goal: 'Passer l’épreuve de commentaire en quatre heures, avec la répartition exacte de l’examen.',
  notions: [
    'Répartition : lecture 5 min, tableau 1 h 15 (jusqu’à 1 h 20), plan 20 min (1 h 40), problématique 5 min (1 h 45), introduction 15 min (2 h), développement 1 h 30 (3 h 30), conclusion 15 min (3 h 45), relecture 15 min (4 h).',
    'Règles visuelles de la copie : trois lignes de saut entre les blocs, alinéa de trois carreaux.',
    'Grille de correction : compréhension, nombre et justesse des procédés, interprétation, plan, problématique, rédaction.'
  ],
  skills: [
    'Rendre une copie complète dans le temps.',
    'Réaliser un tableau d’au moins trente procédés.',
    'Soigner la mise en page et la relecture.',
    'Se tenir au chronomètre affiché.'
  ],
  watch: [
    'Ne pas sacrifier la relecture : quinze minutes de relecture valent plusieurs points.',
    'Ne pas écrire le développement avant d’avoir une problématique claire.',
    'Respecter les horaires intermédiaires, notés au tableau toutes les demi-heures.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les étapes 1 à 8 de la Formation 2 et le planning de l’épreuve.' },
    { k: 'Supports', t: 'Texte inédit tiré des annales ; copies doubles ; brouillons ; chronomètre affiché ; salle d’examen.' }
  ],
  flow: [
    [10, 'accroche', 'Consignes d’examen', 'Installation en salle, rappel de la répartition du temps et des règles visuelles de la copie, distribution du texte.'],
    [5, 'exo', 'Lecture', 'Activation du chronomètre, lecture du texte, plusieurs fois.'],
    [75, 'exo', 'Tableau d’analyse', 'Au moins trente procédés, champs lexicaux en premier.'],
    [20, 'exo', 'Plan', 'Six sous-parties, titres avec verbe.'],
    [5, 'exo', 'Problématique', 'Une phrase.'],
    [15, 'copie', 'Introduction', 'Cinq éléments.'],
    [90, 'copie', 'Développement', 'Deux ou trois parties, six sous-parties en tout ; introduction partielle et conclusion partielle de chaque partie.'],
    [15, 'copie', 'Conclusion', 'Réponse à la problématique, ouverture.'],
    [15, 'copie', 'Relecture', 'Propreté, syntaxe, orthographe.'],
    [5, 'bilan', 'Ramassage des copies', 'Les copies sont ramassées ; consigne : noter à chaud les trois difficultés rencontrées.']
  ],
  drills: [
    { t: 'Commentaire sur texte inédit', tags: ['Individuel', 'Examen', '4 h'], how: 'Conditions réelles : salle d’examen, horaires intermédiaires affichés, copie double, sans aide. Corrigé la semaine suivante avec la grille officielle.' }
  ],
  special: 'Séance longue : 4 h d’épreuve et 15 min de consignes et de ramassage.'
});

cw({
  n: 32, f: 'f5', title: 'Correction du commentaire et remédiation',
  goal: 'Repérer ses erreurs à l’aide de copies anonymisées et corriger les trois faiblesses les plus fréquentes.',
  notions: [
    'Le corrigé type : problématique, plan et tableau attendus.',
    'Les trois types de faiblesse : tableau pauvre (moins de trente procédés), plan déséquilibré, introduction ou conclusion incomplète.',
    'La grille de correction sert aussi d’outil de révision.'
  ],
  skills: [
    'Évaluer sa copie avec la grille.',
    'Réécrire une introduction à partir des remarques reçues.',
    'Compléter un tableau avec les procédés oubliés.',
    'Refaire un tableau d’analyse de quinze lignes sur un texte court.'
  ],
  watch: [
    'Se corriger, c’est d’abord chercher ses erreurs récurrentes.',
    'Une copie anonymisée sert d’exemple : on ne juge pas la personne.',
    'La séance se termine par un atelier de tableau : on retrouve ses procédés manquants.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Sa propre copie corrigée, avec l’annotation du professeur.' },
    { k: 'Supports', t: 'Corrigé type du bac blanc ; trois copies anonymisées (bonne, moyenne, fragile) ; grille de correction ; un texte court pour l’atelier de tableau.' }
  ],
  flow: [
    [10, 'accroche', 'Retour global', 'Notes, répartition, trois forces et trois faiblesses de la classe.'],
    [30, 'corr', 'Corrigé type', 'Tableau, problématique, plan : comparaison avec les productions des élèves.'],
    [25, 'exo', 'Analyse de trois copies', 'Binôme : évaluer trois copies anonymisées avec la grille, justifier chaque note.'],
    [20, 'exo', 'Atelier de remédiation', 'Par profil : tableau, plan, introduction ou conclusion à réécrire, avec un tuteur.'],
    [25, 'exo', 'Atelier : refaire un tableau', 'Individuel : un texte court, un tableau de quinze lignes en 20 minutes, comparaison avec le corrigé en 5 minutes.'],
    [10, 'bilan', 'Bilan', 'Chacun écrit un objectif de progression pour la dissertation.']
  ],
  drills: [
    { t: 'Analyse de trois copies anonymisées', tags: ['Binôme', '25 min'], how: 'Chaque binôme note les copies avec la grille de correction et justifie chaque critère à l’oral.' },
    { t: 'Remédiation par profil', tags: ['Individuel', 'Tuteur', '20 min'], how: 'Réécriture ciblée : introduction, tableau complété, plan rééquilibré ou conclusion avec ouverture.' },
    { t: 'Atelier : refaire un tableau', tags: ['Individuel', '25 min'], how: 'Un texte court, quinze lignes de tableau en 20 minutes, puis comparaison avec le corrigé.' }
  ]
});

cw({
  n: 33, f: 'f5', title: 'Bac blanc écrit n°2 : la dissertation sur une œuvre au programme',
  goal: 'Rédiger une dissertation complète en quatre heures, sur l’une des œuvres étudiées.',
  notions: [
    'Une dissertation suit un plan en trois grandes parties, chacune avec deux ou trois sous-parties étayées par des exemples précis de l’œuvre.',
    'L’introduction suit cinq éléments : accroche (biographie de l’auteur), présentation de l’œuvre (titre souligné, date de publication), résumé, problématique, annonce du plan.',
    'La conclusion récapitule la réponse et ouvre sur d’autres œuvres.',
    'Répartition conseillée des 4 heures (à ajuster) : sujet et mots-clés 15 min, plan détaillé 30 min, problématique 15 min, introduction 30 min, développement 1 h 45, conclusion 20 min, relecture 25 min.'
  ],
  skills: [
    'Analyser un sujet de dissertation et définir ses mots-clés.',
    'Construire un plan équilibré en trois parties.',
    'Mobiliser au moins deux citations ou scènes précises par sous-partie.',
    'Rédiger dans le temps avec une mise en page propre.'
  ],
  watch: [
    'Ne pas réciter la fiche de l’œuvre : répondre au sujet précis.',
    'Définir tous les mots-clés avant de construire le plan.',
    'Prévoir des exemples précis de l’œuvre pour chaque sous-partie, sans généralités.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches « La dissertation à connaître » de chaque œuvre étudiée, et les introductions et conclusions modèles.' },
    { k: 'Supports', t: 'Trois sujets au choix portant sur trois œuvres du programme ; copies doubles ; brouillons ; chronomètre affiché.' }
  ],
  flow: [
    [10, 'accroche', 'Consignes d’examen', 'Installation en salle, présentation des trois sujets, rappel de la répartition conseillée des quatre heures.'],
    [15, 'exo', 'Analyse du sujet', 'Choix du sujet, définition des mots-clés, reformulation du sujet.'],
    [30, 'exo', 'Plan détaillé', 'Trois parties, deux ou trois sous-parties, exemples précis de l’œuvre.'],
    [15, 'exo', 'Problématique', 'Une question qui découle des mots-clés.'],
    [30, 'copie', 'Introduction', 'Cinq éléments, rédigée sur la copie.'],
    [105, 'copie', 'Développement', 'Trois parties rédigées avec introductions et conclusions partielles.'],
    [20, 'copie', 'Conclusion', 'Réponse et ouverture sur une autre œuvre.'],
    [25, 'copie', 'Relecture', 'Orthographe, syntaxe, propreté, cohérence du plan.'],
    [5, 'bilan', 'Ramassage des copies', 'Les copies sont ramassées ; consigne : noter à chaud les trois difficultés rencontrées.']
  ],
  drills: [
    { t: 'Dissertation sur une œuvre au programme', tags: ['Individuel', 'Examen', '4 h'], how: 'Conditions réelles. Un sujet au choix sur trois. Corrigé la semaine suivante avec la grille de dissertation.' }
  ],
  special: 'Séance longue : 4 h d’épreuve et 15 min de consignes et de ramassage.'
});

cw({
  n: 34, f: 'f5', title: 'Correction de la dissertation et remédiation',
  goal: 'Corriger la dissertation à l’aide du corrigé type et reprendre un plan avec des exemples précis.',
  notions: [
    'Le corrigé type : définition des mots-clés, problématique, plan en trois parties.',
    'Les erreurs les plus fréquentes : plan descriptif, exemples vagues, introduction sans problématique, conclusion sans ouverture.',
    'La grille de dissertation : analyse du sujet, plan, exemples, rédaction.'
  ],
  skills: [
    'Évaluer sa dissertation avec la grille.',
    'Rédiger une introduction corrigée.',
    'Compléter un plan avec des exemples précis de l’œuvre.',
    'Reprendre un plan avec deux exemples précis par sous-partie.'
  ],
  watch: [
    'Relier chaque sous-partie à la problématique.',
    'Reprendre en priorité l’erreur la plus fréquente de sa copie.',
    'Un plan sans exemple précis de l’œuvre ne répond pas à la problématique.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Sa copie corrigée et la fiche « La dissertation à connaître » de son œuvre.' },
    { k: 'Supports', t: 'Corrigé type ; trois copies anonymisées ; grille de dissertation ; son plan de dissertation.' }
  ],
  flow: [
    [10, 'accroche', 'Retour global', 'Notes, trois forces et trois faiblesses de la classe.'],
    [25, 'corr', 'Corrigé type', 'Mots-clés, problématique, plan en trois parties, exemples.'],
    [25, 'exo', 'Analyse de trois copies', 'Binôme : notation avec la grille, justification orale.'],
    [20, 'exo', 'Atelier de remédiation', 'Réécriture d’une introduction ou d’un plan par profil.'],
    [25, 'exo', 'Atelier : plan détaillé avec exemples', 'Individuel : reprendre son plan de dissertation et ajouter deux exemples précis de l’œuvre par sous-partie.'],
    [15, 'bilan', 'Bilan et plan des deux dernières semaines', 'Calendrier des oraux blancs, liste des textes à apprendre.']
  ],
  drills: [
    { t: 'Analyse de trois copies anonymisées', tags: ['Binôme', '25 min'], how: 'Notation avec la grille de dissertation ; chaque critère justifié à l’oral.' },
    { t: 'Atelier de remédiation', tags: ['Individuel', '20 min'], how: 'Réécriture d’une introduction avec problématique, ou d’un plan avec exemples précis.' },
    { t: 'Plan détaillé avec exemples', tags: ['Individuel', '25 min'], how: 'Deux exemples précis de l’œuvre par sous-partie, avec la citation ou la scène.' }
  ]
});

cw({
  n: 35, f: 'f5', title: 'Oral blanc n°1 : 30 minutes de préparation et 20 minutes de passage',
  goal: 'Passer l’épreuve orale dans les conditions de l’examen : analyse linéaire, grammaire, œuvre choisie.',
  notions: [
    'Déroulé du passage de 20 minutes : analyse linéaire (10 min : présentation 30 s, lecture 1 min, problématique et plan 30 s, analyse 7 min 30, conclusion 30 s), question de grammaire (2 min), œuvre choisie (8 min : présentation 3 min, entretien 5 min).',
    'Préparation de 30 minutes : tirage du texte, brouillon de la problématique et du plan.',
    'Œuvre choisie : présentation de 3 minutes, dont une introduction de 30 secondes et trois raisons précises, illustrées d’exemples.',
    'Entretien : auteur, mouvement, histoire en détail, personnage ou passage préféré, couverture, titre alternatif, lien avec la vie personnelle ou l’actualité.'
  ],
  skills: [
    'Tenir 20 minutes dans le temps imparti.',
    'Lire avec précision et expressivité.',
    'Répondre à une question de grammaire en deux minutes.',
    'Présenter l’œuvre choisie avec trois raisons précises et des exemples.'
  ],
  watch: [
    'Soigner l’entrée, le sourire et la politesse : l’examinateur observe dès le seuil.',
    'Ne pas lire le brouillon : s’appuyer sur les mots-clés.',
    'Gestion du temps : surveiller le chronomètre de l’examinateur.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'Les fiches de ses 16 textes et la fiche de son œuvre choisie.' },
    { k: 'Supports', t: 'Les 16 textes tirés au sort ; chronomètre ; grille d’oral ; salle dédoublée, groupes de trois élèves.' }
  ],
  flow: [
    [10, 'accroche', 'Consignes et tirage des textes', 'Rappel du déroulé (trente minutes de préparation, vingt minutes de passage) et de la grille ; tirage au sort des textes.'],
    [30, 'oral', 'Préparation', 'Trente minutes de préparation en salle, brouillon de la problématique et du plan.'],
    [60, 'oral', 'Trois passages de 20 minutes', 'Chaque passage : analyse linéaire, question de grammaire, œuvre choisie. Un observateur remplit la grille.'],
    [20, 'bilan', 'Bilan collectif', 'Retour sur les trois passages ; trois constats pour la classe. Les élèves qui ne passent pas travaillent en autonomie sur leurs fiches ; la séance est dédoublée en groupes de trois.']
  ],
  drills: [
    { t: 'Passage de 20 minutes', tags: ['Individuel', 'Examen', '20 min'], how: 'Analyse linéaire de 10 minutes, question de grammaire de 2 minutes, œuvre choisie de 8 minutes. Grille remplie par l’examinateur.' },
    { t: 'Préparation de 30 minutes', tags: ['Individuel', 'Brouillon'], how: 'Problématique et plan rédigés en 30 minutes sur le texte tiré au sort ; lecture préparée à voix haute.' }
  ]
});

cw({
  n: 36, f: 'f5', title: 'Oral blanc n°2 et bilan de l’année',
  goal: 'Passer un deuxième oral blanc, mesurer sa progression et fixer la dernière ligne droite.',
  notions: [
    'La progression se mesure en comparant la grille du premier oral blanc avec celle du second.',
    'Points d’éloquence à valoriser : lecture précise, articulation, présence ancrée, sourire, politesse, clarté de la structure.',
    'La dernière ligne droite : relire les 16 fiches, refaire les tableaux, entraîner la grammaire.'
  ],
  skills: [
    'Améliorer les deux points faibles du premier oral blanc.',
    'Enchaîner analyse linéaire, grammaire et œuvre choisie sans temps mort.',
    'Planifier ses révisions jusqu’à l’examen.'
  ],
  watch: [
    'Se concentrer sur deux axes de progression, pas sur dix.',
    'Ne pas apprendre par cœur au point de perdre la spontanéité.',
    'S’organiser : l’organisation est le nerf de la guerre de l’oral.'
  ],
  prep: [
    { k: 'À lire avant la séance', t: 'La grille du premier oral blanc, avec ses deux points faibles soulignés.' },
    { k: 'Supports', t: 'Les 16 textes tirés au sort, chronomètre, grille d’oral, tableau d’organisation.' }
  ],
  flow: [
    [10, 'accroche', 'Consignes et tirage des textes', 'Rappel des deux points faibles du premier oral blanc ; tirage au sort d’un nouveau texte.'],
    [30, 'oral', 'Préparation', 'Trente minutes de préparation en salle, brouillon de la problématique et du plan.'],
    [60, 'oral', 'Trois passages de 20 minutes', 'Mêmes conditions que la séance précédente, comparaison avec la première grille.'],
    [20, 'bilan', 'Bilan de l’année', 'Chaque élève rédige son plan de révision jusqu’à l’épreuve : textes à apprendre, tableaux à refaire, grammaire.']
  ],
  drills: [
    { t: 'Passage de 20 minutes', tags: ['Individuel', 'Examen', '20 min'], how: 'Mêmes conditions que l’oral blanc n°1 ; comparaison des deux grilles pour mesurer la progression.' },
    { t: 'Plan de révision', tags: ['Individuel', '10 min'], how: 'Un tableau jusqu’à l’examen : textes à apprendre, tableaux à refaire, séances de grammaire, calendrier.' }
  ]
});
