import React from 'react';

// Tableau d'expériences
// Tableau d'expériences amélioré
const experiences = [
  {
    titre: 'Stagiaire Data Scientist',
    entreprise: 'NH Hotellerie',
    date: 'Septembre - Décembre 2023',
    description: [
      'Développé des modèles prédictifs permettant de réduire de 15 % le taux de turnover des employés grâce à une meilleure anticipation des risques.',
      'Conçu un système de gestion de base de données (SGDB) des employés, facilitant la gestion RH.',
    ],
    competences: {
      technique: [
        "Modèles prédictifs pour l'analyse des turnovers : Régression logistique, Modèle de Cox (Cox Proportional Hazards)",
        "Analyse exploratoire des données (EDA)",
        "Feature engineering et traitement des données manquantes"
      ],
      outils: ["Python (pandas, scikit-learn)", "SQL", "Power BI", "Microsoft Excel ", "MySQL"],
      discipline: [
        'Analyse des données RH', 'Data Engineering', 
        "Data Science appliquée au marketing",
      ]
    },
  },
  {
    titre: "Coordinateur Chargé d'Analyse de Données et de Faisabilité",
    entreprise: 'La Caféterie du Parc de Wesserling',
    date: 'Octobre 2021 - Avril 2022',
    description: [
      'Mené des études de faisabilité pour des projets d’extension, identifiant des opportunités ayant généré une hausse de 10 % des revenus annuels.',
      'Collecté et analysé des données de performance opérationnelle, proposant des recommandations stratégiques, dont l’optimisation de l’espace de vente qui a augmenté l’afflux client de 30 %.',
    ],
    competences: {
      technique: [
        "Étude de faisabilité basée sur les données",
        "Optimisation des processus opérationnels",
        "Rédaction de recommandations stratégiques"
      ],
      outils: ['Trello', 'Microsoft Office', 'Tableau'],
      discipline: ['Gestion de projet', 'Business Intelligence', 'Analyse économique'],
    },
  },
  {
    titre: 'Biostatisticien',
    entreprise: 'LARDES, Université de Parakou',
    date: 'Janvier 2019 - Février 2020',
    description: [
      'Formé plus de 50 doctorants et étudiants sur des systèmes de collecte en mode CAPI (KoBoCollect, CSPro) et logiciels d’analyse (R, MATLAB).',
      'Développé des protocoles expérimentaux et des plans d’analyse, facilitant la réalisation de 15 études scientifiques.',
      'Supervisé des mémoires en biostatistique, avec des résultats publiés dans des revues académiques à comité de lecture.',
    ],
    
    competences: {
      technique: [
        "Analyse statistique avancée, incluant des modèles paramétriques, non paramétriques, probabilistes, bayésiens et économétriques",
        "Conception et optimisation de protocoles expérimentaux",
        "Supervision et coordination de projets de recherche en biostatistique"
      ],
      outils: ["R", "MATLAB", "CSPro", 'KoBoCollect', 'CSPro', 'LATEX'],
      discipline: ['Biostatistique', 'Formation et recherche académique'],
    },
  },
  {
    titre: 'Assistant de Recherche',
    entreprise: 'SCOPA, Financement Danois',
    date: 'Septembre 2017 - Février 2019',
    description: [
      'Élaboré des protocoles expérimentaux et coordonné des enquêtes sur le terrain auprès de 500+ répondants.',
      'Effectué des analyses statistiques complexes, incluant des analyses de survie et des analyses d’impact (ATE), influençant les politiques locales.',
      'Contribué à la rédaction de 3 articles scientifiques publiés.',
    ],
    competences: {
      technique: [
        "Analyse économétrique avancée (modèles causaux, ATE)",
        "Élaboration de protocoles expérimentaux (split plot, carré latin)",
        "Coordination des enquêtes de terrain", 'Data cleaning', 'Bases de données relationnelles'
        ],
      outils: ['STATA', 'Python', 'SPSS'],
      discipline: ['Statistiques avancées', 'Économie expérimentale',
        "Recherche appliquée", 
        "Analyse statistique pour l'agriculture et l'environnement"
      ],
    },
  },
  {
    titre: 'Chef adjoint du service d’économétrie et de programmation mathématique',
    entreprise: 'CIRFOSS',
    date: 'Mars 2016 - Octobre 2017',
    description: [
      'Programmation de modèles économétriques en Python et formation des étudiants et professionnels sur des logiciels statistiques avancés.',
      'Contribution à plus de 60 projets de recherche, avec des analyses statistiques robustes.',
    ],
    competences: {
      technique: ['Python', 'STATA', 'R', 'SPSS'],
      outils: ['Visualisation de données', 'Économétrie appliquée'],
      discipline: ['Économétrie', 'Analyse statistique', 'Algorithmique', 'Programmation'],
    },
  },
  {
    titre: 'Stagiaire',
    entreprise: 'Programme Information Scientifique et Biométrique/INRAB',
    date: 'Juillet - Décembre 2013',
    description: [
      'Nettoyage des bases de données et évaluation du consentement des consommateurs de poisson d’élevage.',
      'Élaboration de rapports et revue de littérature pour soutenir les politiques publiques.',
    ],
    competences: {
      technique: [
        'Régression troncaturée (Tobit, Logit)',
        'Gestion de bases de données',
        'Recherche documentaire',
        'Analyse quantitative'
      ],
      outils: ['Excel', 'SPSS'],
      discipline: ['Statistiques appliquées', 'Recherche sociale'],
    },
  },
];


export const Experiencesalarie = () => {
  return (
    <section id="experience" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase text-gray-800">
            <i className="fa fa-briefcase text-lg mr-2"></i>Carrière en Entreprise
          </h2>
          <p className="text-gray-600 mt-2">
            Découvrez les rôles que j'ai endossés et les résultats atteints au cours de ma carrière en entreprise.
          </p>
        </div>

        {/* Timeline des expériences */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icône */}
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <i className="fa fa-briefcase text-lg" aria-hidden="true"></i>
              </div>

              {/* Détails de l'expérience */}
              <div className="bg-white shadow-md rounded-lg p-8 w-full">
                <h3 className="text-2xl font-semibold text-gray-800">{exp.titre}</h3>
                <div className="flex justify-between text-gray-500 mb-4">
                  <span className="font-medium">{exp.entreprise}</span>
                  <span className="italic">{exp.date}</span>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Compétences */}
                <div className="mt-6 space-y-4">
                  {Object.entries(exp.competences).map(([key, values], i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-800 capitalize">
                        {key.replace(/_/g, ' ')} :
                      </h4>
                      <div className="flex flex-wrap mt-2 gap-2">
                        {values.map((item, j) => (
                          <span
                            key={j}
                            className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencesalarie;
