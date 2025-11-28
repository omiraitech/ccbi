import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, DollarSign, Award, Users, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import { programsData } from '../data/programs';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const program = programsData.find(p => p.id === courseId);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1a2940] mb-4">Formation non trouvée</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#f5a623] hover:bg-[#e09515] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <button
        onClick={() => navigate('/#programs')}
        className="fixed top-24 left-4 md:left-8 z-40 bg-[#1a2940] text-white p-2 rounded-lg hover:bg-[#f5a623] transition-colors flex items-center gap-2"
      >
        <ChevronLeft size={20} />
        <span className="hidden md:inline">Retour</span>
      </button>

      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2940] via-[#1a2940]/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {program.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#1a2940] to-[#2d3e5f] rounded-lg p-6 text-white">
            <div className="flex items-center mb-2">
              <Clock className="text-[#f5a623] mr-3" size={24} />
              <h3 className="text-sm font-semibold text-gray-300">Durée</h3>
            </div>
            <p className="text-3xl font-bold">{program.hours}h</p>
            <p className="text-gray-300 text-sm mt-1">{program.duration}</p>
          </div>

          <div className="bg-gradient-to-br from-[#f5a623] to-[#e09515] rounded-lg p-6 text-white">
            <div className="flex items-center mb-2">
              <DollarSign className="text-white mr-3" size={24} />
              <h3 className="text-sm font-semibold">Tarif</h3>
            </div>
            <p className="text-3xl font-bold">{program.cost.toLocaleString()} FCFA</p>
            <p className="text-white text-sm mt-1">Investissement formation</p>
          </div>

          <div className="bg-gradient-to-br from-[#1a2940] to-[#2d3e5f] rounded-lg p-6 text-white">
            <div className="flex items-center mb-2">
              <Award className="text-[#f5a623] mr-3" size={24} />
              <h3 className="text-sm font-semibold text-gray-300">Certification</h3>
            </div>
            <p className="text-xl font-bold">{program.certification}</p>
            {program.credits && <p className="text-gray-300 text-sm mt-1">{program.credits}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a2940] mb-6 flex items-center">
                <div className="w-1 h-8 bg-[#f5a623] mr-4"></div>
                À Propos de cette Formation
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {program.description}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a2940] mb-6 flex items-center">
                <div className="w-1 h-8 bg-[#f5a623] mr-4"></div>
                Objectifs de la Formation
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {program.objectives.map((objective, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="text-[#f5a623] flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a2940] mb-6 flex items-center">
                <div className="w-1 h-8 bg-[#f5a623] mr-4"></div>
                Programme (Modules)
              </h2>
              <div className="space-y-3">
                {program.modules.map((module, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#f5a623] hover:shadow-md transition-shadow"
                  >
                    <p className="font-semibold text-[#1a2940]">
                      {index + 1}. {module}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1a2940] mb-6 flex items-center">
                <div className="w-1 h-8 bg-[#f5a623] mr-4"></div>
                Public Cible
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {program.targetAudience.map((audience, index) => (
                  <div key={index} className="flex gap-3">
                    <Users className="text-[#f5a623] flex-shrink-0" size={20} />
                    <p className="text-gray-700">{audience}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#1a2940] mb-6 flex items-center">
                <div className="w-1 h-8 bg-[#f5a623] mr-4"></div>
                Détails du Programme
              </h2>
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-[#f5a623]" size={24} />
                      <h3 className="font-semibold text-[#1a2940] text-lg">Stage Professionnel</h3>
                    </div>
                    <p className="text-gray-700 ml-9">
                      Durée: {program.internshipDuration}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="text-[#f5a623]" size={24} />
                      <h3 className="font-semibold text-[#1a2940] text-lg">Format d'Apprentissage</h3>
                    </div>
                    <p className="text-gray-700 ml-9">
                      En ligne et en présentiel
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gradient-to-b from-[#1a2940] to-[#2d3e5f] rounded-lg p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Informations Clés</h3>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-600">
                  <p className="text-sm text-gray-300 mb-2">Niveau</p>
                  <p className="text-lg font-semibold text-[#f5a623]">{program.level}</p>
                </div>

                <div className="pb-6 border-b border-gray-600">
                  <p className="text-sm text-gray-300 mb-2">Durée Totale</p>
                  <p className="text-lg font-semibold">{program.months} mois</p>
                </div>

                <div className="pb-6 border-b border-gray-600">
                  <p className="text-sm text-gray-300 mb-2">Volume Horaire</p>
                  <p className="text-lg font-semibold">{program.hours} heures</p>
                </div>

                <div className="pb-6 border-b border-gray-600">
                  <p className="text-sm text-gray-300 mb-2">Coût Total</p>
                  <p className="text-2xl font-bold text-[#f5a623]">{program.cost.toLocaleString()}</p>
                  <p className="text-xs text-gray-300 mt-1">FCFA</p>
                </div>

                {program.credits && (
                  <div className="pb-6 border-b border-gray-600">
                    <p className="text-sm text-gray-300 mb-2">Crédits ECTS</p>
                    <p className="text-lg font-semibold">{program.credits}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm text-gray-300 mb-2">Certification</p>
                  <p className="text-lg font-semibold text-[#f5a623]">{program.certification}</p>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#f5a623] hover:bg-[#e09515] text-white font-bold py-3 rounded-lg transition-colors">
                S'inscrire Maintenant
              </button>

              <button className="w-full mt-3 border-2 border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-[#1a2940] font-bold py-2 rounded-lg transition-colors">
                Demander des Informations
              </button>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-r from-[#1a2940] to-[#2d3e5f] rounded-lg p-12 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Votre Carrière?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Rejoignez des centaines de professionnels qui ont développé leurs compétences avec nos formations certifiées et reconnues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#f5a623] hover:bg-[#e09515] text-white px-8 py-3 rounded-lg font-bold transition-colors">
              S'inscrire à cette formation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#1a2940] px-8 py-3 rounded-lg font-bold transition-colors">
              Télécharger la Brochure
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
