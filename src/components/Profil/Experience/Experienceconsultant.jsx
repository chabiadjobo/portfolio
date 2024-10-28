import React from 'react';

// Tableau d'expériences en tant que consultant
const experiencesConsultant = [
  {
    titre: 'Expert en analyses économétriques',
    organisation: 'Chambre de Commerce et d’Industrie',
    date: 'Octobre - Décembre 2019',
    description: [
      'Conçu des outils de collecte et analysé les données économiques pour la Chambre de Commerce.',
      "Formé les enquêteurs à l'utilisation des outils de collecte de données.",
      'Rédigé des rapports d’analyse économique en collaboration avec les équipes internes.',
    ],
  },
  {
    titre: 'Expert Biostatisticien',
    organisation: 'GIZ, financement allemand',
    date: 'Mai - Décembre 2018',
    description: [
      'Développé la méthodologie de collecte de données et le plan d’échantillonnage.',
      'Conçu les outils de collecte et analysé les données issues des enquêtes.',
      'Co-animé un atelier d’élaboration des stratégies de mise à niveau des chaînes de valeurs du karité.',
    ],
  },
  {
    titre: 'Expert associé',
    organisation: 'Conseil National de l’Alimentation et de la Nutrition (CAN)',
    date: 'Novembre 2017 - Février 2018',
    description: [
      "Contribué à l'élaboration de l’échantillonnage et à la conception des outils de collecte via KoBoCollect.",
      'Formé et supervisé les enquêteurs et contrôleurs.',
      'Analysé les données et rédigé les rapports d’étude sur l’alimentation et la nutrition.',
    ],
  },
  {
    titre: 'Intervenant Enseignant',
    organisation: 'Université Polytechnique Internationale Dr Obiang Nguema Mbasogo',
    date: 'Octobre 2015 - Juin 2017',
    description: [
      'Animé des cours sur la gestion de bases de données (Microsoft Access) et la collecte de données électroniques (KoBoCollect, EpiData).',
      'Enseigné des modules d’inférence statistique, méthodologie de collecte de données et expérimentation.',
      'Supervisé les mémoires de fin de Licence en statistique et agronomie.',
    ],
  },
  {
    titre: 'Consultant Biostatisticien',
    organisation: 'Laboratoire de Recherche Avicole et de Zoo-Économie/UAC',
    date: 'Septembre 2015 - Septembre 2016',
    description: [
      'Étude typologique et caractérisation des systèmes d’élevage de cailles et canards au Bénin.',
      "Analyse des données d'élevage et rédaction de rapports d'étude.",
    ],
  },
  {
    titre: 'Collaborateur Externe',
    organisation: 'LABEF',
    date: 'Janvier 2016 - Mai 2016',
    description: [
      'Analyse des données de survie et géostatistiques avec MATLAB et R.',
      'Conduite d’études sur la conservation du matériel végétal dans les forêts béninoises.',
    ],
  },
];

export const Experienceconsultant = () => {
  return (
    <section id="consulting-experience" className="section bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold uppercase text-gray-800">
            <i className="fa fa-user-tie text-lg mr-2"></i>Expériences en tant que Consultant
          </h2>
        </div>

        <div id="timeline-consultant" className="space-y-10">
          {experiencesConsultant.map((exp, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <i className="fa fa-user-tie"></i>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg p-6 w-full transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-700">{exp.titre}</h3>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>{exp.organisation}</span>
                  <span>{exp.date}</span>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
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

export default Experienceconsultant;
