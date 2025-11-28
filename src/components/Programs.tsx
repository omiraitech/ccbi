import { Clock, DollarSign, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { programsData } from '../data/programs';

export default function Programs() {
  const navigate = useNavigate();

  const handleCourseClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Nos Formations
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des programmes adaptés aux besoins du marché, conçus par des experts
            et reconnus par les professionnels du secteur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program) => (
            <div
              key={program.id}
              onClick={() => handleCourseClick(program.id)}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-[#f5a623] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {program.level}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a2940] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {program.shortDescription}
                </p>

                <div className="space-y-3 mb-6 py-4 border-y border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} className="text-[#f5a623]" />
                      <span>Durée</span>
                    </div>
                    <span className="font-semibold text-[#1a2940]">{program.hours}h</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={16} className="text-[#f5a623]" />
                      <span>Prix</span>
                    </div>
                    <span className="font-semibold text-[#1a2940]">{program.cost.toLocaleString()} FCFA</span>
                  </div>
                </div>

                <button className="w-full bg-[#f5a623] hover:bg-[#e09515] text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                  En savoir plus
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
