import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function DevenirFormateur() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('formation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '237696274761';
    const text = `Bonjour CCBI, je souhaite devenir formateur.\nNom: ${name}\nEmail: ${email}\nTel: ${phone}\nSujet: ${topic}\nMessage: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Helmet>
        <title>Devenir Formateur | Rejoignez CCBI</title>
        <meta name="description" content="Rejoignez notre réseau de formateurs. Intervenez en entreprise, concevez des parcours et transmettez votre savoir chez CCBI." />
        <meta name="keywords" content="formateur, expertise, intervention, formation, partenariat, CCBI" />
        <link rel="canonical" href="https://www.ccbi-afrique.com/devenir-formateur" />
        <meta property="og:title" content="Devenir Formateur - CCBI" />
        <meta property="og:description" content="Rejoignez notre réseau d'experts : intervenez en entreprise et transmettez votre savoir" />
      </Helmet>
      <header className="relative">
        <div
          className="h-64 md:h-80 bg-cover bg-center flex items-center relative"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        >
          {/* stronger opaque overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-5xl mx-auto px-4 text-white">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 inline-flex items-center gap-2 bg-black/30 hover:bg-[#f5a623] transition-colors px-3 py-2 rounded-md"
            >
              ← Retour
            </button>
            <h1 className="text-4xl font-bold drop-shadow">Devenir Formateur</h1>
            <p className="text-lg mt-2 max-w-3xl drop-shadow">
              Rejoignez notre réseau d'experts : intervenez en entreprise, concevez des parcours et transmettez votre savoir.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2940] mb-4">Pourquoi devenir formateur ?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Partager votre expertise et élargir votre réseau professionnel.</li>
              <li>Rémunération attractive et missions ponctuelles ou récurrentes.</li>
              <li>Accès à nos outils pédagogiques et accompagnement à la conception.</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-[#1a2940] mb-2">Profil recherché</h3>
              <p className="text-gray-700">Professionnels expérimentés, consultants, ingénieurs et formateurs certifiés souhaitant intervenir sur des programmes techniques.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1a2940] mb-4">Manifestation d'intérêt</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required value={name} onChange={e => setName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Numéro WhatsApp (Avec l'indicatif du pays)" className="w-full px-4 py-3 border rounded-lg" />
              <div>
                <label htmlFor="topic-select" className="block text-sm font-semibold text-gray-700 mb-2">Sujet d'intérêt</label>
                <select id="topic-select" value={topic} onChange={e => setTopic(e.target.value)} className="w-full px-4 py-3 border rounded-lg">
                  <option value="formation">Proposition de module</option>
                  <option value="intervention">Intervention en intra</option>
                  <option value="partenariat">Partenariat pédagogique</option>
                </select>
              </div>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Message (expérience, domaines, disponibilités)" className="w-full px-4 py-3 border rounded-lg resize-none" />
              <button type="submit" className="w-full bg-[#f5a623] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Phone size={18} /> Nous contacter via WhatsApp
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
