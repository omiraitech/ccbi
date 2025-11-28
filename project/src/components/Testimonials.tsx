import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Bennani',
      role: 'Chef de Chantier',
      company: 'Construction Moderna',
      text: 'La formation en gestion de chantier m\'a permis d\'évoluer rapidement dans ma carrière. Les formateurs sont des professionnels expérimentés qui partagent leur savoir-faire.',
    },
    {
      name: 'Fatima El Amrani',
      role: 'Ingénieure Industrielle',
      company: 'TechnoIndustrie',
      text: 'Grâce au programme d\'automatisation industrielle, j\'ai acquis les compétences techniques nécessaires pour diriger des projets complexes. Une formation de qualité exceptionnelle.',
    },
    {
      name: 'Mohamed Idrissi',
      role: 'Architecte',
      company: 'Design & Build Co.',
      text: 'Le CCBI offre une approche pédagogique moderne et pratique. J\'ai pu appliquer immédiatement mes nouvelles compétences sur le terrain.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Témoignages
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de nos anciens apprenants qui ont transformé
            leur carrière grâce à nos formations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 relative hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-[#f5a623] absolute top-4 right-4 opacity-20" size={48} />
              <p className="text-gray-700 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t-2 border-[#f5a623] pt-4">
                <p className="font-bold text-[#1a2940] text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">
                  {testimonial.role}
                </p>
                <p className="text-[#f5a623] text-sm font-semibold">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
