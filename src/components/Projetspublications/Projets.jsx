import React from 'react';

const projets = [
  {
    titre: 'Le Bon Diagnostic : Comment Choisir les Transformations Idéales pour Vos Données',
    annee: 2024,
    description: 'Article explorant les meilleures pratiques pour choisir les transformations de données, en mettant l\'accent sur l\'importance d\'un diagnostic approprié.',
    lienArticle: 'https://medium.com/@chamaurele/le-bon-diagnostic-comment-choisir-les-transformations-id%C3%A9ales-pour-vos-donn%C3%A9es-dd857f01fce2'
  },
  {
    titre: 'correlationinspector : Un Package Python pour Analyser les Corrélations Publié sur PyPI',
    annee: 2024,
    description: 'Conception de package Python facilitant l\'analyse des corrélations entre variables. Rédigé un article sur Medium expliquant son utilisation et ses fonctionnalités.',
    lienArticle: 'https://medium.com/@chamaurele/analysez-les-corr%C3%A9lations-facilement-avec-correlationinspector-un-package-python-9037c664dffb',
    lienProjet: 'https://github.com/chabiadjobo/correlationinsight'
  },
  {
    titre: 'Typologie des Chansons Françaises',
    annee: 2024,
    description: 'Développé une typologie des chansons françaises à l\'aide de techniques de machine learning (Manuscrit en cours d’évaluation). Rédigé un article sur Medium décrivant la méthodologie et les résultats.',
    lienArticle: 'https://medium.com/@chamaurele/from-data-to-insight-how-to-create-a-typology-using-machine-learning-8e6b48734a06',
    lienProjet: 'https://github.com/chabiadjobo/typologie_chansons_francaises'
  },
  {
    titre: 'Analyse et prédiction du comportement d’achat de consommateurs d’épices issues du circuit court',
    annee: 2024,
    description: 'Conduit une analyse approfondie des données consommateurs pour modéliser les tendances d\'achat, en utilisant des techniques de NLP.'
  },
  {
    titre: 'Application de gestion de ressources humaines',
    annee: 2023,
    description: 'Développé une application visant à optimiser la gestion des ressources humaines, intégrant des fonctionnalités de suivi des performances et d\'analyse des données.'
  }
];

export const Projets = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Projets</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          NB : Il s'agit uniquement des projets de 2023 et 2024 pour lesquels j'ai l'autorisation de publication.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700">{projet.titre}</h3>
              <p className="text-sm text-gray-600 mb-4">{projet.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {projet.lienArticle && (
                  <a href={projet.lienArticle} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Lire l'article</a>
                )}
                {projet.lienProjet && (
                  <a href={projet.lienProjet} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Voir le projet sur GitHub</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
