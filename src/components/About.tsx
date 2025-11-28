import { Target, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Former des professionnels qualifiés pour répondre aux besoins du secteur du BTP et de l\'industrie',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Des formations certifiées et reconnues par les professionnels du secteur',
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Un suivi personnalisé pour garantir la réussite de chaque apprenant',
    },
    {
      icon: TrendingUp,
      title: 'Évolution',
      description: '90% de nos apprenants évoluent ou changent de carrière dans les 6 mois',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            À Propos de CCBI
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le Centre des Compétence BTP & Industries est dédié à la formation professionnelle
            d'excellence. Nous préparons les talents de demain avec des programmes adaptés
            aux exigences du marché.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-[#f5a623] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a2940] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
