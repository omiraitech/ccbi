import { useState } from 'react';
import { Zap, Wrench, Award } from 'lucide-react';

export default function Pedagogy() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'elearning',
      title: 'E-learning Flexible',
      icon: Zap,
      description:
        'Accès 24/7 à notre Plateforme LMS. Cours vidéo, quiz auto-correctifs, et ressources documentaires pour étudier à votre rythme, où que vous soyez.',
      image:
        'https://images.pexels.com/photos/4443189/pexels-photo-4443189.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'pratique',
      title: 'Pratique & Présentiel',
      icon: Wrench,
      description:
        'Maitrise des gestes métiers. Ateliers pratique sur nos plateaux techniques (BTP) ou bancs d\'essai (industrie) avec l\'encadrement direct de nos formateurs.',
      image:
        'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'certification',
      title: 'Certification & Emploi',
      icon: Award,
      description:
        'Nos programmes débouchent sur des titres reconnus par la branche, garantissant une meilleure insertion professionnelle ou une évolution de carrière.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const activeTabData = tabs[activeTab];
  const ActiveIcon = activeTabData.icon;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Notre Approche Pédagogique
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pourquoi choisir le Centre de Compétences ? La force de l'hybride.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src={activeTabData.image}
                alt={activeTabData.title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-6 rounded-lg text-left transition-all duration-300 flex items-start gap-4 ${
                    activeTab === index
                      ? 'bg-[#f5a623] text-white shadow-lg'
                      : 'bg-white text-[#1a2940] hover:shadow-md'
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <tab.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{tab.title}</h3>
                    {activeTab === index && (
                      <p className="text-sm mt-2 leading-relaxed">
                        {tab.description}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <ActiveIcon className="text-[#f5a623] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="text-xl font-bold text-[#1a2940] mb-2">
                    {activeTabData.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {activeTabData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
