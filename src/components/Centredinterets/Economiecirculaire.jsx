import React from 'react';

const Economiecirculaire = () => {
  const ressourcesInspirantes = [
    "Économie circulaire : Une approche pour un avenir durable par Ken Webster",
    "Circular Economy: A Wealth of Flows par Gunter Pauli",
    "La réinvention de la production et de la consommation par l'économie circulaire"
  ];

  return (
    <div className="container mx-auto my-10 p-6  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Économie Circulaire</h2>
      
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Mon intérêt pour les modèles économiques durables provient de ma conviction que nous devons repenser notre rapport à la production et à la consommation. L'économie circulaire, pour moi, représente un moyen d'optimiser les ressources tout en minimisant les déchets, créant ainsi un système plus respectueux de notre environnement.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Projet en Réflexion</h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Je suis actuellement en train d'explorer des concepts tels que le recyclage des matériaux et la valorisation des déchets organiques, en envisageant des solutions innovantes pour intégrer ces idées dans les modèles d'affaires futurs.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Justification / Valeurs</h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Je m'engage à avoir un impact positif sur l'environnement en adoptant et en promouvant des pratiques durables. Je crois fermement que l'économie circulaire est le modèle de demain pour un avenir durable et responsable, permettant de protéger notre planète pour les générations futures.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Ressources Inspirantes</h3>
      <ul className="list-disc list-inside mb-4 text-lg leading-relaxed text-gray-800">
        {ressourcesInspirantes.map((ressource, index) => (
          <li key={index} className="mb-2">{ressource}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">Certification obtenue en 2022 sur l'économie circulaire.</p>
    </div>
  );
};

export default Economiecirculaire;
