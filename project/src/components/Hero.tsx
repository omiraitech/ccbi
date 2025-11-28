import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/banner ccbi.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#1a2940] bg-opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          CCBI – Centre des Compétence BTP & Industries
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-8">
          Former les bâtisseurs de demain
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Excellence en formation professionnelle pour le secteur du BTP et de l'industrie.
          Développez vos compétences avec des programmes certifiés et reconnus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Découvrir nos formations
            <ChevronRight className="ml-2" size={20} />
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a2940] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
