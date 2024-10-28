import React, { useState } from 'react';
import Experiencesalarie from './Experiencesalarie';
import Experiencesconsultant from './Experienceconsultant';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('salarié');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="experience" className="bg-gray-100 py-12  w-5/6 rounded-md shadow-lg max-w-4xl mx-auto mt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold uppercase text-gray-800">Expériences</h2>
          <div className="mt-6">
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'salarié' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} 
              onClick={() => handleTabClick('salarié')}
            >
              Expériences Salarié
            </button>
            <button 
              className={`px-4 py-2 rounded-lg ${activeTab === 'consultant' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} 
              onClick={() => handleTabClick('consultant')}
            >
              Expériences Consultant
            </button>
          </div>
        </div>

        <div className="mt-8">
          {activeTab === 'salarié' ? <Experiencesalarie /> : <Experiencesconsultant />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
