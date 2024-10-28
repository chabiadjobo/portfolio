import React from 'react';
import ia_school from './image_formation/ia_school.png';
import labef from './image_formation/labef.jpg';
import ucao from './image_formation/ucao.jpg';


const formations = [
  {
    logo: ia_school,
    date: '2023',
    title: 'Mastère Chef de Projet Data et IA - Parcours Data Scientist',
    school: 'IA School Groupe GEMA',
    description: "Obtention du diplôme de Mastère spécialisé avec une expertise en Data Science et Intelligence Artificielle.",
  },
  {
    logo: labef,
    date: '2016',
    title: 'Master scientifique en Statistiques - Parcours Biostatistique',
    school: 'Faculté des Sciences Agronomiques',
    description: "Diplôme spécialisé en Biostatistique pour les sciences agronomiques.",
  },
  {
    logo: ucao,
    date: '2013',
    title: 'Master en Gestion d’Entreprises Rurales Agricoles',
    school: 'Université Catholique de l’Afrique de l’Ouest',
    description: "Formation complète en gestion d’entreprises agricoles.",
  },
];

export const Formation = () => {
  return (
    <section id="career" className="bg-white py-12 w-5/6 rounded-md shadow-lg max-w-4xl mx-auto mt-8">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-gray-800">Parcours</h2>
          <hr className="mx-auto w-24 border-gray-400 mt-4" />
        </div>

        {/* Timeline */}
        <ul className="timeline p-0 space-y-12">
          {formations.map((formation, index) => (
            <li
              key={index}
              className={`timeline-item flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center space-x-8`}
            >
              {/* Logo Image */}
              <div className="timeline-image bg-white p-3 shadow-lg rounded-full w-24 h-24 flex items-center justify-center transform transition-transform duration-300 hover:scale-105">
                <img
                  className="rounded-full w-20 h-20 object-cover"
                  src={formation.logo}
                  alt={`Logo de ${formation.school}`}
                />
              </div>

              {/* Timeline Panel */}
              <div className="timeline-panel bg-white p-6 shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2">
                <div className="timeline-heading mb-2">
                  <h3 className="text-sm font-medium text-gray-500">{formation.date}</h3>
                  <h3 className="text-lg font-semibold text-gray-800">{formation.title}</h3>
                  <span className="text-sm text-gray-500">{formation.school}</span>
                </div>
                <div className="timeline-body mt-2">
                  <p className="text-gray-700">{formation.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Formation;
