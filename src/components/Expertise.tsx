import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Expertise() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 'genie-civil',
      title: 'Génie Civil et BTP',
      subtitle: "La construction 4.0: Du BIM à l'efficacité Énergétique.",
      image: 'https://images.pexels.com/photos/33703998/pexels-photo-33703998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'industrie-maintenance',
      title: 'Industrie et Maintenance',
      subtitle: "Automatisation et Performance : L'Usine du Futur",
      image: 'https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'mine',
      title: 'Mine',
      subtitle: "Sécurité et Durabilité : L'Exploitation Responsable",
      image: 'https://images.pexels.com/photos/2101135/pexels-photo-2101135.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'petrole',
      title: 'Pétrole',
      subtitle: "Transition Énergétique : Innovation et Responsabilité",
      image: 'https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const handleExploreClick = (category: string) => {
    navigate(`/expertise?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-20 bg-gray-50" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Les Filières d'Expertises
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-56 md:h-64 lg:h-56 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* stronger overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a2940] mb-2">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{c.subtitle}</p>
                
                <button
                  onClick={() => handleExploreClick(c.title)}
                  className="w-full bg-[#f5a623] hover:bg-[#e09515] text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explorer les formations
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
