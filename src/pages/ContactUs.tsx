import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactUs() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motif, setMotif] = useState('Formation');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '237696274761';
    const text = `Bonjour CCBI,Je vous contacte depuis le formulaire Contact.\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMotif: ${motif}\nMessage: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Helmet>
        <title>Contactez-nous | CCBI - Centre des Compétences BTP & Industries</title>
        <meta name="description" content="Contactez CCBI pour toute question sur nos formations, nos services ou pour prendre rendez-vous. Nous sommes à votre écoute." />
        <meta name="keywords" content="contact, CCBI, formations, support, WhatsApp, email" />
        <link rel="canonical" href="https://www.ccbi-afrique.com/contact" />
        <meta property="og:title" content="Contactez-nous - CCBI" />
        <meta property="og:description" content="Besoin d'information ? Écrivez-nous ou contactez-nous directement via WhatsApp." />
      </Helmet>
      <header className="relative">
        <div
          className="h-64 md:h-80 bg-cover bg-center flex items-center relative"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3182767/pexels-photo-3182767.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-white">
            <button
              onClick={() => navigate(-1)}
              className="mb-4 inline-flex items-center gap-2 bg-black/30 hover:bg-[#f5a623] transition-colors px-3 py-2 rounded-md"
            >
              ← Retour
            </button>
            <h1 className="text-4xl font-bold drop-shadow">Contactez-nous</h1>
            <p className="text-lg mt-2 max-w-3xl drop-shadow">
              Besoin d'information ? Écrivez-nous ou contactez-nous directement via WhatsApp.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            {/* compact contact/info card to occupy left column */}
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <img src="https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="contact" width={1200} height={300} loading="lazy" className="w-full h-40 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-bold text-[#1a2940] mb-2">Nos coordonnées</h3>
              <p className="text-gray-700 mb-3">Adresse: 123 Avenue John Doe, Yaoundé</p>
              <p className="text-gray-700 mb-3">Tel: +237 6XXXXXXXX</p>
              <p className="text-gray-700 mb-3">Email: contact@ccbi.com</p>
              <div className="mt-auto">
                <h4 className="font-semibold text-[#1a2940] mb-2">Horaires</h4>
                <p className="text-gray-700">Lun - Ven: 08:30 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1a2940] mb-4">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required value={name} onChange={e => setName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-3 border rounded-lg" />
              <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Numéro WhatsApp (Avec l'indicatif du pays)" className="w-full px-4 py-3 border rounded-lg" />
              <div>
                <label htmlFor="motif-select" className="block text-sm font-semibold text-gray-700 mb-2">Motif de contact</label>
                <select id="motif-select" value={motif} onChange={e => setMotif(e.target.value)} className="w-full px-4 py-3 border rounded-lg">
                  <option>Formation</option>
                  <option>Partenariat</option>
                  <option>Sponsoring</option>
                  <option>Devenir Formateur</option>
                  <option>Formations pour entreprises</option>
                </select>
              </div>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} placeholder="Votre message..." className="w-full px-4 py-3 border rounded-lg resize-none" />
              <button type="submit" className="w-full bg-[#f5a623] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                <Phone size={18} /> Contacter via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
