import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CourseDetail from './pages/CourseDetail';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1a2940] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => navigate('/')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo ccbi.jpeg"
              alt="CCBI Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="text-white">
              <h1 className="text-xl font-bold">CCBI</h1>
              <p className="text-xs text-gray-300">Centre des Compétence BTP & Industries</p>
            </div>
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-[#f5a623] transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#f5a623] transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-white hover:text-[#f5a623] transition-colors">
              Formations
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#f5a623] transition-colors">
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1a2940] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#f5a623] transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#f5a623] transition-colors"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#f5a623] transition-colors"
            >
              Formations
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-[#f5a623] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div id="accueil">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Statistics />
      <div id="programs">
        <Programs />
      </div>
      <Testimonials />
      <Partners />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
