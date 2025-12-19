import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function DevenirPartenaire() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '237696274761';
    const text = `Bonjour CCBI, demande partenariat.\nNom: ${name}\nEntreprise: ${company}\nEmail: ${email}\nTel: ${phone}\nMessage: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Helmet>
        <title>Devenir Partenaire | Collaborez avec CCBI</title>
        <meta name="description" content="Collaborez avec CCBI pour co-construire des programmes, recruter des talents et former vos équipes. Découvrez nos offres de partenariat." />
        <meta name="keywords" content="partenaire, partenariat, collaboration, co-construction, formations, CCBI" />
        <link rel="canonical" href="https://www.ccbi-afrique.com/devenir-partenaire" />
        <meta property="og:title" content="Devenir Partenaire - CCBI" />
        <meta property="og:description" content="Collaborez avec CCBI pour co-construire des programmes et former vos équipes" />
      </Helmet>
      <header className="relative">
        <div
          className="h-64 md:h-80 bg-cover bg-center flex items-center relative"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-5xl mx-auto px-4 text-white">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 inline-flex items-center gap-2 bg-black/30 hover:bg-[#f5a623] transition-colors px-3 py-2 rounded-md"
            >
              ← Retour
            </button>
            <h1 className="text-4xl font-bold drop-shadow">Devenir Partenaire</h1>
            <p className="text-lg mt-2 max-w-3xl drop-shadow">
              Collaborez avec CCBI pour co-construire des programmes, recruter des talents et former vos équipes.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2940] mb-4">Ce que nous proposons</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Programmes sur-mesure pour vos équipes.</li>
              <li>Co-construction de modules et validation compétence.</li>
              <li>Accès à notre vivier de formateurs et experts.</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-[#1a2940] mb-2">Types de partenariats</h3>
              <p className="text-gray-700">Partenariat pédagogique, financement, ou prestations de formation intra/extra.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1a2940] mb-4">Contact Partenariat</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required value={name} onChange={e => setName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={company} onChange={e => setCompany(e.target.value)} placeholder="Entreprise / Organisation" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Numéro WhatsApp (Avec l'indicatif du pays)" className="w-full px-4 py-3 border rounded-lg" />
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Message (intérêt, budget, calendrier)" className="w-full px-4 py-3 border rounded-lg resize-none" />
              <button type="submit" className="w-full bg-[#f5a623] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Phone size={18} /> Contacter le service partenariats
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
