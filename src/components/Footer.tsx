import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2940] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo-ccbi.jpeg"
                alt="CCBI Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">CCBI</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Former les bâtisseurs de demain avec excellence et innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Filières d'Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#expertise" className="hover:text-[#f5a623] transition-colors">Génie Civil & BTP</a></li>
              <li><a href="#expertise" className="hover:text-[#f5a623] transition-colors">Industrie & Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#f5a623] transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-[#f5a623] transition-colors">Actualités</a></li>
              <li><a href="#" className="hover:text-[#f5a623] transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-[#f5a623] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Restez connectés pour les dernières actualités et offres de formation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CCBI - Centre des Compétence BTP & Industries. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
