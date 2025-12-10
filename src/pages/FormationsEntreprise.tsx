import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function FormationsEntreprise() {
  const navigate = useNavigate();
  const [contactName, setContactName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '237696274761';
    const text = `Bonjour CCBI, demande formation entreprise.\nContact: ${contactName}\nEntreprise: ${company}\nEmail: ${email}\nTel: ${phone}\nBesoins: ${needs}\nMessage: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <header className="relative">
        <div
          className="h-64 md:h-80 bg-cover bg-center flex items-center relative"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3182813/pexels-photo-3182813.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-white">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 inline-flex items-center gap-2 bg-black/30 hover:bg-[#f5a623] transition-colors px-3 py-2 rounded-md"
            >
              ← Retour
            </button>
            <h1 className="text-4xl font-bold drop-shadow">Formations pour Entreprises</h1>
            <p className="text-lg mt-2 max-w-3xl drop-shadow">
              Solutions de formation intra-entreprise pour renforcer les compétences techniques et managériales de vos équipes.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2940] mb-4">Nos offres entreprises</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Diagnostics de compétences et parcours sur-mesure.</li>
              <li>Sessions in situ, ateliers pratiques, et certification.</li>
              <li>Suivi post-formation et évaluation d'impact.</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-[#1a2940] mb-2">Processus</h3>
              <p className="text-gray-700">Audit des besoins → Conception du programme → Déploiement → Évaluation.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1a2940] mb-4">Demande de devis / contact</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Nom du contact" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={company} onChange={e => setCompany(e.target.value)} placeholder="Entreprise" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Téléphone (WhatsApp)" className="w-full px-4 py-3 border rounded-lg" />
              <input value={needs} onChange={e => setNeeds(e.target.value)} placeholder="Besoins principaux (ex: maintenance, HSE...)" className="w-full px-4 py-3 border rounded-lg" />
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Détails (effectifs, localisation, contraintes)" className="w-full px-4 py-3 border rounded-lg resize-none" />
              <button type="submit" className="w-full bg-[#f5a623] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Phone size={18} /> Contacter le service entreprise
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
