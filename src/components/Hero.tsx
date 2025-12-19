import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  
  const HandleSessionRegClick = () => {
    const phone = '237696274761';
    const message = "Bonjour CCBI, je souhaite m'inscrire à une session d'information.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/banner-ccbi.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
        role="img"
        aria-label="Banner CCBI"
      >
        <div className="absolute inset-0 bg-[#1a2940] bg-opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontDisplay: 'swap' }}>
          Former les Bâtisseurs de Demain
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
          Avec Excellence et Innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/expertise')} 
            className="bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f5a623]"
            aria-label="Découvrir notre catalogue de formations"
          >
            Découvrir notre catalogue
            <ChevronRight className="ml-2" size={20} aria-hidden="true" />
          </button>
          <button 
            onClick={HandleSessionRegClick} 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a2940] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label="S'inscrire à une session d'information via WhatsApp"
          >
            S'inscrire à une session d'information
          </button>
        </div>
      </div>
    </div>
  );
}
