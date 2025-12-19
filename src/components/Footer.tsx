import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  
  const handleExploreClick = (category: string) => {
    navigate(`/expertise?category=${encodeURIComponent(category)}`);
  };

  return (
    <footer className="bg-[#1a2940] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo-ccbi.jpeg"
                alt="CCBI Logo - Centre des Compétences BTP & Industries"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">CCBI</h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Former les bâtisseurs de demain avec excellence et innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Filières d'Expertises</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => handleExploreClick('Génie Civil et BTP')} className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded" aria-label="Explorer Génie Civil et BTP">Génie Civil et BTP</button></li>
              <li><button onClick={() => handleExploreClick('Industrie et Maintenance')} className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded" aria-label="Explorer Industrie et Maintenance">Industrie et Maintenance</button></li>
              <li><button onClick={() => handleExploreClick('Mine')} className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded" aria-label="Explorer Mine">Mine</button></li>
              <li><button onClick={() => handleExploreClick('Pétrole')} className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded" aria-label="Explorer Pétrole">Pétrole</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Aller à la section À Propos">À Propos</a></li>
              <li><a href="#programs" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Aller à la section Formations">Formations</a></li>
              <li><a href="#expertise" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Aller à la section Filières">Filières</a></li>
              <li><a href="/devenir-formateur" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Devenir Formateur chez CCBI">Devenir Formateur</a></li>
              <li><a href="/devenir-partenaire" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Devenir Partenaire de CCBI">Devenir Partenaire</a></li>
              <li><a href="/entreprises" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Solutions de formations pour entreprises">Formations pour entreprises</a></li>
              <li><a href="/contact" className="hover:text-[#f5a623] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-2 py-1 rounded inline-block" title="Contacter CCBI">Contactez-nous</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#f5a623]">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61580924086854&mibextid=wwXIfr&mibextid=wwXIfr" target='_blank' rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623]" aria-label="Suivez CCBI sur Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/ccbi-centre-des-comp%C3%A9tences-btp-industrie/" target='_blank' rel="noopener noreferrer" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623]" aria-label="Suivez CCBI sur LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623]" aria-label="Suivez CCBI sur Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#f5a623] w-10 h-10 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#f5a623]" aria-label="Suivez CCBI sur Twitter">
                <Twitter size={20} aria-hidden="true" />
              </a>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Restez connectés pour les dernières actualités et offres de formation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} CCBI - Centre des Compétence BTP & Industries. Tous droits réservés. Powered by{' '}
            <a
              href="https://www.omiraitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5a623] hover:underline focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-1 rounded"
              title="Visiter le site omirai"
            >
              omirai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
