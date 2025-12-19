import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page non trouvée | CCBI</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil de CCBI." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.ccbi-afrique.com/" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-[#1a2940] to-[#2d3e5f] flex items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="mb-8">
            <Search size={80} className="mx-auto text-[#f5a623] mb-4" />
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page non trouvée</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Retour à l'accueil
            </button>
            <button
              onClick={() => navigate('/expertise')}
              className="bg-white hover:bg-gray-100 text-[#1a2940] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Nos formations
            </button>
          </div>

          <div className="mt-16">
            <p className="text-gray-300 text-sm">
              Besoin d'aide ? <a href="/contact" className="text-[#f5a623] hover:underline focus:outline-none focus:ring-2 focus:ring-[#f5a623] px-1 rounded inline-block">Contactez-nous</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
