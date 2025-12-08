import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2940] mb-4">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-[#f5a623] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet de formation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#1a2940] mb-6">
              Informations de Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#f5a623] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1a2940] mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    123 Avenue John Doe<br />
                    Yaoundé, Cameroun
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f5a623] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1a2940] mb-1">Téléphone</h4>
                  <p className="text-gray-600">
                    +237 6XXXXXXXX<br />
                    +237 6XXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f5a623] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1a2940] mb-1">Email</h4>
                  <p className="text-gray-600">
                    contact@ccbi.com<br />
                    info@ccbi.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f5a623] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#1a2940] mb-1">Horaires</h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 8h30 - 18h00<br />
                    Samedi: 9h00 - 13h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1a2940] mb-6">
              Envoyez-nous un message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#f5a623] focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#f5a623] focus:outline-none transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Numéro de téléphone (Avec l'indicatif du pays)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#f5a623] focus:outline-none transition-colors"
                  placeholder="WhatsApp"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Motif
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#f5a623] focus:outline-none transition-colors">
                  
                      <option id="training">Formation</option>
                      <option id="partnership">Partenariat</option>
                      <option id="funding">Sponsoring</option>
                      <option id="trainingPartner">Devenir Formateur</option>
                  
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#f5a623] focus:outline-none transition-colors"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f5a623] hover:bg-[#e09515] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
