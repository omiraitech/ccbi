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
      >
        <div className="absolute inset-0 bg-[#1a2940] bg-opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => navigate('/expertise')} className="bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Découvrir notre catalogue
            <ChevronRight className="ml-2" size={20} />
          </button>
          <button onClick={HandleSessionRegClick} className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a2940] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            S'inscrire à une session d'information
          </button>
        </div>
      </div>
    </div>
  );
}
