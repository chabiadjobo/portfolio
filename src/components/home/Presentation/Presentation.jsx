import React from 'react';
import logo from '../../../logo.svg'

export const Presentation = () => {
  return (
    <div className="bg-green-800 p-6 mx-auto my-2 w-5/6 rounded-lg shadow-md flex items-center ">
      <div className="flex flex-col text-left w-1/2"> 
        <h1 className="text-4xl font-bold text-white mb-2">CHABI ADJOBO Marc Aurèle</h1>
        <h2 className="text-2xl text-white mb-4">Expert en Science des Données et Analyse Statistique</h2>
        <p className="text-lg text-white italic mb-2">
          "Transformer les données en actions concrètes, c'est révéler des opportunités cachées et créer un impact durable."
        </p>
      </div>
      <div className="w-1/2 pl-6"> 
        <img 
          src={logo}
          alt="Portrait de CHABI ADJOBO" 
          className="rounded-full h-48 w-48 object-cover" // Ajuste la taille de l'image
        />
      </div>
    </div>
  );
}
