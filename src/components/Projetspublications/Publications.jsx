import React from 'react';

const publications = [
  {
    titre: 'Comparative analysis of quantitative phenotypic parameters of Djallonke and hybrid Djallonke Sahelian goats in Benin',
    lien: 'https://www.researchgate.net/publication/350236102_Comparative_analysis_of_quantitative_phenotypic_parameters_of_Djallonke_and_hybrid_Djallonke_Sahelian_goats_in_Benin'
  },
  {
    titre: 'Effet du pourghère (Jatropha curcas L.) sur la performance agronomique du maïs (Zea mays L.) et du manioc (Manihot esculenta Crantz) et sur la fertilité du sol au Sud-Bénin',
    lien: 'https://www.researchgate.net/publication/322554498_EFFET_DU_POURGHERE_JATROPHA_CURCAS_L_SUR_LA_PERFORMANCE_AGRONOMIQUE_DU_MAIS_ZEA_MAYS_L_ET_DU_MANIOC_MANIHOT_ESCULENTA_CRANTZ_ET_SUR_LA_FERTILITE_DU_SOL_AU_SUD-BENIN'
  },
  {
    titre: 'Effets des changements climatiques sur les activités agricoles dans la commune de Banikoara, Nord-Bénin',
    lien: 'https://www.researchgate.net/publication/320486301_Effets_des_changements_climatiques_sur_les_activites_agricoles_dans_la_commune_de_banikoara_Nord-Benin'
  }
];

export const Publications = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Publications scientifiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{publication.titre}</h3>
              <a href={publication.lien} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Lire sur ResearchGate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
