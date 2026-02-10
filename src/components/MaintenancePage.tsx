import { Hammer } from 'lucide-react';

export default function MaintenancePage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '237696274761';
    const text = 'Bonjour CCBI, j\'aimerais avoir des informations sur vos services ou formations.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1a2940] via-[#2c3e50] to-[#1a2940] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a623] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#f5a623] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/logo-ccbi.jpeg" 
            alt="CCBI Logo" 
            className="h-24 w-auto drop-shadow-lg"
          />
        </div>

        {/* Maintenance Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-[#f5a623] p-6 rounded-full shadow-2xl animate-bounce">
            <Hammer className="text-white" size={48} />
          </div>
        </div>

        {/* Main text */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Site en Maintenance
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-4">
          Nous travaillons actuellement pour améliorer votre expérience.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Le site sera bientôt de retour. Merci de votre patience !
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center justify-center gap-3 bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-4 md:px-12 md:py-5 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f5a623] shadow-lg"
          aria-label="Contactez-nous via WhatsApp"
        >
          <svg
            className="w-6 h-6 md:w-7 md:h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.6915026,14.4744748 C17.4788374,14.3718508 16.5143769,13.8818508 16.3272231,13.8161741 C16.1400692,13.7505035 16.0088471,13.8161741 15.8776231,13.9188025 C15.7464034,14.0214309 15.2311126,14.5589566 15.1219788,14.6915722 C15.0107722,14.8250048 14.8988699,14.8441316 14.6862047,14.7415032 C14.4735396,14.6388718 13.7461226,14.3995426 12.8721038,13.6188722 C12.1887853,13.0155101 11.7161545,12.2737322 11.603644,12.0605483 C11.4924334,11.8479645 11.5923069,11.7438851 11.6943938,11.6418624 C11.7850831,11.5532937 11.893765,11.4136868 11.9948192,11.3028452 C12.0958734,11.1920035 12.1305192,11.0893821 12.2416631,10.9567632 C12.3528031,10.8241443 12.2682025,10.6915254 12.1957827,10.5888909 C12.1232678,10.4862565 11.6510957,9.52036395 11.4726526,9.13378055 C11.2991816,8.75346081 11.1218706,8.80028282 10.9969637,8.79504035 C10.8814859,8.79023976 10.7499354,8.78893605 10.6183848,8.78893605 C10.4868343,8.78893605 10.2741691,8.85460672 10.0870152,9.04576993 C9.90013543,9.23693315 9.347088,9.72693315 9.347088,10.6928557 C9.347088,11.6587783 10.1038617,12.5903326 10.2050159,12.7229485 C10.30587,12.8555675 11.6887815,15.0799979 13.7676501,15.9619036 C14.3058367,16.2133577 14.7166953,16.3719265 15.0185218,16.4801579 C15.5555648,16.6808435 16.0513171,16.6521504 16.4397852,16.5792701 C16.8738962,16.4990065 17.7690208,16.0352147 17.9475622,15.5302886 C18.1261001,15.0253625 18.1261001,14.6008322 18.0536853,14.4974294 C17.9810705,14.3945327 17.9043106,14.3577234 17.6915026,14.4744748" />
          </svg>
          Nous Contacter via WhatsApp
        </button>

        {/* Additional info */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-sm md:text-base text-gray-400">
            Pour toute question urgente, veuillez nous contacter via WhatsApp
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-20"></div>
    </div>
  );
}
