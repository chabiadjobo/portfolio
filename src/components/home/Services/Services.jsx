import React from 'react';

export const Services = () => {
  return (
    <div className="bg-gray-100 p-6 mx-auto w-5/6 my-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">Mes services</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Conduite et management de projets IA et recherche data</h3>
          <p className="text-justify text-gray-700">
            Gestion complète de projets IA et data science, de la structuration à la mise en œuvre, avec des
            méthodologies rigoureuses et outils d'analyse avancés pour répondre aux objectifs de recherche.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Analyse de données et modélisation statistique</h3>
          <p className="text-justify text-gray-700">
            Exploration et interprétation de données complexes pour générer des insights stratégiques, en intégrant
            des méthodes statistiques et de machine learning.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Développement et déploiement de modèles ML</h3>
          <p className="text-justify text-gray-700">
            Création, optimisation et déploiement de modèles machine learning performants, adaptés aux applications
            spécifiques, avec expertise en Python et R.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">NLP et analyse des sentiments</h3>
          <p className="text-justify text-gray-700">
            Application des techniques de traitement du langage naturel pour analyser textes et feedbacks, fournissant
            des insights exploitables en temps réel.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Data visualisation et tableaux de bord interactifs</h3>
          <p className="text-justify text-gray-700">
            Conception de tableaux de bord intuitifs (PowerBI, autres outils) pour rendre les données clés accessibles
            aux équipes non-techniques.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">Formation et accompagnement en data science</h3>
          <p className="text-justify text-gray-700">
            Création et animation de formations pratiques, ateliers et séances de tutorat en data science et
            biostatistique.
          </p>
        </div>
      </div>
    </div>
  );
};

