import React from 'react';
import architecte from './image_competences/architecte.png';
import ml from './image_competences/ml.png';
import stratege from './image_competences/stratege.png';
import formation from './image_competences/formation.png';

export const Competence = () => {
  return (
    <section className="bg-gray-50 p-8 rounded-md shadow-lg text-gray-800 space-y-6 max-w-4xl mx-auto w-5/6 mt-8">
      <h2 className="text-2xl font-bold text-gray-900">Compétences</h2>
      
      <p className="text-justify">
        Mes compétences reposent sur trois piliers fondamentaux : 
        la <strong>planification stratégique</strong> pour orienter les projets vers des objectifs clairs, 
        la <strong>gestion de projet</strong> pour garantir une exécution coordonnée et efficace, 
        et les <strong>statistiques</strong> pour offrir des analyses rigoureuses et des solutions basées sur des données. 
        Ces fondations me permettent de concevoir, piloter et optimiser des projets en data science avec précision et impact.
      </p>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Branche principale 1 */}
        <div className="text-center">
          <img src={architecte} alt="Architecte de la science des données" className="w-full h-auto rounded-md shadow-md" />
          <p className="mt-4 font-semibold text-gray-800">Architecte de la science des données</p>
          <p className="text-sm text-gray-600">Conception d'infrastructures analytiques robustes et évolutives.</p>
        </div>

        {/* Branche principale 2 */}
        <div className="text-center">
          <img src={ml} alt="Ingénieur en modélisation et machine learning" className="w-full h-auto rounded-md shadow-md" />
          <p className="mt-4 font-semibold text-gray-800">Ingénieur en modélisation et machine learning</p>
          <p className="text-sm text-gray-600">Développement de modèles prédictifs pour des solutions concrètes.</p>
        </div>

        {/* Branche principale 3 */}
        <div className="text-center">
          <img src={stratege} alt="Stratège des systèmes et intelligence d'entreprise" className="w-full h-auto rounded-md shadow-md" />
          <p className="mt-4 font-semibold text-gray-800">Stratège des systèmes et intelligence d'entreprise</p>
          <p className="text-sm text-gray-600">Optimisation de la gestion des données pour la prise de décision.</p>
        </div>

        {/* Branche principale 4 */}
        <div className="text-center">
          <img src={formation} alt="Concepteur en formation et diffusion des connaissances" className="w-full h-auto rounded-md shadow-md" />
          <p className="mt-4 font-semibold text-gray-800">Concepteur en formation et diffusion des connaissances</p>
          <p className="text-sm text-gray-600">Transmission des savoirs en data science et IA pour un impact durable.</p>
        </div>
      </div>
    </section>
  );
};
