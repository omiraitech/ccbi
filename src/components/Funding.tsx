import { Phone } from 'lucide-react';

export default function Funding() {
  const handleContactClick = () => {
    const phone = '237696274761';
    const message = `Bonjour CCBI, je souhaite bénéficier d'une aide pour ma formation, pouvez-vous m'en dire plus sur la procédure?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-[#1a2940]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Financement
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a2940] mb-4">
              Besoin d'aide pour le financement de votre formation ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Que vous soyez salarié, demandeur d'emploi ou dirigeant d'entreprise, nos conseillers vous accompagnent dans la mobilisation de vos droits ( CPF, OPCO, Pôle Emploi, etc. )
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-3 bg-[#f5a623] hover:bg-[#e09515] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              Contacter le service Financement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
