import React from 'react';

const Randonnees = () => {
  const videos = [
    {
      titre: "Randonnée en Montagne de Culoz au Point de Vue Fenestrez",
      description: "Randonnée de Culoz au Point de Vue Fenestrez : 4h d'ascension pour une vue imprenable sur les Alpes de 10 km pour 1083 m de dénivelé en 3h45. À cause de ma batterie, je n'ai pas pu suivre le reste de la randonnée.",
      lien: "https://www.youtube.com/embed/s051whDLSuw"
    },
    {
      titre: "Randonnée en Montagne au-dessus de Saint-Colomban-des-Villards",
      description: "Randonnée en Montagne dans les Combes des Balmettes située au-dessus de Saint-Colomban-des-Villards pour une distance de 11,9 km avec 879 m de dénivelé pour une durée de 4h20.",
      lien: "https://www.youtube.com/embed/LpD7JAMN4bA"
    },
    {
      titre: "Randonnée en périphérie de Dijon",
      description: "Randonnée facile avec 187 m de dénivelé sur 10,6 km en 1h40.",
      lien: "https://www.youtube.com/embed/d9Oxxu-Sej4"
    }
  ];

  return (
    <div className="container mx-auto my-10 p-6 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-6 underline">Randonnée</h2>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Depuis mon plus jeune âge, j'ai toujours été passionné par la nature. Cette fascination m’a conduit à suivre une formation en agronomie avant d'obtenir mon premier master. 
        La randonnée me permet de renouer avec cet amour profond pour le monde naturel. Étant souvent plongé dans le code, l'analyse de données et l'usage intensif de l'ordinateur, 
        les randonnées offrent une véritable bouffée d'air frais. Elles me permettent non seulement de découvrir des paysages variés, mais aussi d'éprouver un grand respect pour la nature et ses merveilles.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-gray-800">
        Je m'efforce de pratiquer une petite randonnée d’une distance de moins de 10 km une fois par semaine, en privilégiant des terrains avec des dénivelés faciles à moyens, 
        comme les forêts, parcs et plaines. En plus de cela, je m'attaque à une randonnée plus difficile en montagne une fois par mois, défiant ainsi mes limites et renforçant ma connexion avec la nature.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        La randonnée est bien plus qu'un simple exercice physique pour moi. Elle joue un rôle crucial dans ma gestion du stress et favorise la réflexion et l'introspection. 
        Ces moments passés en plein air m'incitent à réfléchir sur ma relation avec la nature et sur l’évolution de l'intelligence humaine face à l'intelligence artificielle. 
        Je prends conscience de l'importance vitale de préserver notre environnement et d'intégrer cette conscience dans ma vie quotidienne.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-4 text-green-600">Mes Vidéos de Randonnée</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
            <iframe 
              className="w-full h-48" 
              src={video.lien} 
              title={video.titre} 
              frameBorder="0" 
              allowFullScreen 
            />
            <div className="p-4">
              <h4 className="font-bold text-lg text-green-800">{video.titre}</h4>
              <p className="text-gray-700">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Randonnees;
