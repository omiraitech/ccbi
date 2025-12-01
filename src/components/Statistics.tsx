import { Users, GraduationCap, Award } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      value: '1 500+',
      label: 'Stagiaires Formés',
    },
    {
      icon: Award,
      value: '92%',
      label: 'Taux de réussite aux certifications',
    },
    {
      icon: GraduationCap,
      value: '20+',
      label: 'Formateurs Experts Métier',
    },
  ];

  return (
    <section className="py-20 bg-[#1a2940]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#f5a623] w-20 h-20 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={36} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
