import React from 'react';

const Ecriture = () => {
  const mangasPreferes = [
    "One Piece",
    "Attack on Titan",
    "My Hero Academia",
    "Death Note",
    "Black Clover",
    "Solo Leveling",
    "Bleach"
  ];

  return (
    <div className="container mx-auto my-10 p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 underline">Écriture Créative</h2>

      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Mon amour pour l'écriture s'est éveillé dès mon enfance, un besoin de créer et de raconter des histoires qui reflètent mes émotions et mes pensées. 
        La passion pour les mangas a enrichi cette expérience, me permettant d'explorer des mondes fantastiques et des narrations complexes. 
        À travers mes écrits, je m'efforce de transmettre des sentiments authentiques et d'immerger le lecteur dans un univers vivant et captivant.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-4 text-blue-600">Mon Projet en Cours</h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
      Je suis en train d'écrire un manga inspiré par Le Voyageur du Temps, qui explore les richesses et les 
      défis des différentes cultures. À travers l’histoire d’un protagoniste voyageant à travers des régions 
      variées, je mets en lumière le choc des générations et l'interaction entre traditions et modernité. 
      Chaque rencontre révèle des histoires fascinantes et souligne l'importance de la tolérance. 
      Ce projet allie ma passion pour la narration et mon désir d'approfondir ma connaissance des cultures, 
      tout en incitant à la réflexion.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-4 text-blue-600">Justification et Objectifs</h3>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        L'écriture créative est une voie pour développer ma créativité et mon imagination. Elle me permet de travailler sur l'art du storytelling, 
        en explorant des idées, des cultures et des styles narratifs variés. Chaque récit que je compose est une occasion d'apprendre et de grandir en tant qu'auteur.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-4 text-blue-600">Exemples et Inspirations</h3>
      <div className="mb-6">
          <p className="mb-4 text-lg text-gray-800">
              Je fais partie de la team Naruto, mais cela ne m'empêche pas de me délecter avec d'autres œuvres captivantes. Voici quelques-uns de mes mangas préférés :
          </p>
          <ul className="list-disc list-inside mb-4 text-lg leading-relaxed text-gray-800">
            {mangasPreferes.map((manga, index) => (
              <li key={index} className="mb-2">{manga}</li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Ecriture;
