import { Building2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    'Ministère de l\'Éducation',
    'Fédération Nationale du BTP',
    'Chambres de Commerce',
    'Ordre des Architectes',
    'Syndicat des Industries',
    'Association des Ingénieurs',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les acteurs majeurs du secteur pour garantir
            des formations reconnues et alignées avec les besoins du marché.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Building2 className="text-[#f5a623] mb-4" size={48} />
              <p className="text-center text-[#1a2940] font-semibold text-lg">
                {partner}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1a2940] rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Accréditations Internationales
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Nos formations sont reconnues par les organismes de certification internationaux
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-semibold">
            <span className="bg-[#f5a623] px-6 py-2 rounded-full">ISO 9001</span>
            <span className="bg-[#f5a623] px-6 py-2 rounded-full">QUALIOPI</span>
            <span className="bg-[#f5a623] px-6 py-2 rounded-full">AFNOR</span>
            <span className="bg-[#f5a623] px-6 py-2 rounded-full">PMI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
