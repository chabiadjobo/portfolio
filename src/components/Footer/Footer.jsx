import React from 'react';

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-gray-800 p-4 text-gray-400">
      <div className="text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} CHABI ADJOBO Marc Aurèle. Tous droits réservés.</p>
        <p className="text-sm">chabiadjobo.marcaurele@gmail.com</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="#m"
          className="hover:text-white"
          title="Ce site présente mon portfolio et mes travaux. Tous les contenus sont protégés par les lois sur la propriété intellectuelle. Si vous souhaitez utiliser ou partager des éléments de ce site en dehors d'un processus de recrutement, merci de me contacter pour obtenir l'autorisation."
        >
          Terms of Service
        </a>
        <a
          href="#m"
          className="hover:text-white"
          title="Ce site ne collecte aucune donnée personnelle des visiteurs. Si, à l'avenir, des données sont collectées, une mise à jour de cette politique sera fournie pour informer les utilisateurs de la nature des données collectées et de leur utilisation."
        >
          Privacy Policy
        </a>
        <a
          href="#mm"
          className="hover:text-white"
          title="Aucun cookie n'est utilisé sur ce site. Votre vie privée est respectée."
        >
          Cookies
        </a>
      </div>
    </footer>
  );
};

