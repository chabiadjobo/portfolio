import React from 'react';

// Tableau d'expériences
const experiences = [
  {
    titre: 'Stagiaire Data Scientist',
    entreprise: 'NH Hotellerie',
    date: 'Septembre - Décembre 2023',
    description: [
      'Contribué à l’analyse de données clients (les hôtels) pour optimiser les stratégies marketing et améliorer l’expérience utilisateur.',
      'Développé des modèles prédictifs pour anticiper les turnovers.',
      'Conception d’un SGDB des employés.',
    ],
  },
  {
    titre: "Coordinateur Chargé d'Analyse de Données et de Faisabilité",
    entreprise: 'La Caféterie du Parc de Wesserling',
    date: 'Octobre 2021 - Avril 2022',
    description: [
      "Mené des études de faisabilité pour des projets d'extension et de diversification des services.",
      'Collecté et analysé des données pour évaluer la performance opérationnelle et formuler des recommandations stratégiques.',
    ],
  },
  {
    titre: 'Biostatisticien',
    entreprise: 'LARDES, Université de Parakou',
    date: 'Janvier 2019 - Février 2020',
    description: [
      'Formé les doctorants et étudiants à l’utilisation des systèmes de collecte en mode CAPI (KoBoCollect et CSPro) et des logiciels d’analyse (R, MATLAB).',
      'Assisté les enseignants dans la supervision des mémoires en biostatistique, élaboré des protocoles expérimentaux et plans d’analyse.',
      'Animé des TP et TD sur l\'économétrie, la programmation statistique et la gestion de bases de données.',
    ],
  },
  {
    titre: 'Assistant de recherche',
    entreprise: 'SCOPA, Financement danois',
    date: 'Septembre 2017 - Février 2019',
    description: [
      'Élaboré des protocoles expérimentaux (split plot, carré latin) et coordonné les enquêtes de terrain.',
      'Réalisé des analyses statistiques complexes (analyse de survie, ATE) et géré des bases de données.',
      'Rédigé des rapports d’étude et contribué à la publication d’articles scientifiques.',
    ],
  },
  {
    titre: 'Chef adjoint du service d’économétrie et de programmation mathématique',
    entreprise: 'CIRFOSS',
    date: 'Mars 2016 - Octobre 2017',
    description: [
      'Programmation de modèles mathématiques en Python et formation des étudiants à l’utilisation de logiciels de statistiques (STATA, R, SPSS).',
      'Rédaction de guides de formation sur les logiciels de collecte et d’analyse de données.',
      'Réalisation d’études statistiques dans les secteurs de la santé, l\'agriculture, et l\'environnement.',
    ],
  },
  {
    titre: 'Stagiaire',
    entreprise: 'Programme Information Scientifique et Biométrique/INRAB',
    date: 'Juillet 2013 - Décembre 2013',
    description: [
      'Évaluation du consentement des consommateurs de poisson d’élevage.',
      'Apurement des bases de données et rédaction de revues de littérature.',
      'Formation sur la méthodologie de recherche en sciences sociales.',
    ],
  },
];

export const Experiencesalarie = () => {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase text-gray-800">
            <i className="fa fa-briefcase text-lg mr-2"></i>Carrière en Entreprise
          </h2>
          <p className="text-gray-600 mt-2">
          Découvrez les rôles que j'ai endossés et les résultats que j'ai atteints grâce à un parcours varié, enrichi par des missions dans divers secteurs et contextes, où j'ai exercé mes talents en tant que professionnelle salariée.
          </p>
        </div>

        {/* Timeline des expériences */}
        <div id="timeline-experience" className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Icône expérience */}
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <i className="fa fa-briefcase text-lg"></i>
              </div>
              
              {/* Contenu de l'expérience */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-8 w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experiencesalarie;

