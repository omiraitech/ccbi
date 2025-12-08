import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Clock, DollarSign, CalendarDays, ChevronRight } from 'lucide-react';
import { programsData } from '../data/programs';

export default function ExpertiseDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  // Get category from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
    }
  }, [searchParams]);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(programsData.map(p => p.category))).sort();
  }, []);

  // Get subcategories for selected category
  const subCategories = useMemo(() => {
    if (!selectedCategory) return [];
    return Array.from(
      new Set(
        programsData
          .filter(p => p.category === selectedCategory)
          .map(p => p.subCategory)
      )
    ).sort();
  }, [selectedCategory]);

  // Filter programs based on selections
  const filteredPrograms = useMemo(() => {
    let filtered = programsData;

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedSubCategory) {
      filtered = filtered.filter(p => p.subCategory === selectedSubCategory);
    }

    return filtered;
  }, [selectedCategory, selectedSubCategory]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubCategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubCategory(null);
    }
  };

  const handleSubCategoryClick = (subCategory: string) => {
    if (selectedSubCategory === subCategory) {
      setSelectedSubCategory(null);
    } else {
      setSelectedSubCategory(subCategory);
    }
  };

  const handleCourseClick = (courseId: string, isVisible: boolean, title: string) => {
    if (!isVisible) {
      const phone = '237696274761';
      const message = `Bonjour CCBI, je souhaite en savoir plus sur la formation ${title}, pouvez-vous m'en dire plus?`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      navigate(`/course/${courseId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <button
        onClick={() => navigate('/')}
        className="fixed top-24 left-4 md:left-8 z-40 bg-[#1a2940] text-white p-2 rounded-lg hover:bg-[#f5a623] transition-colors flex items-center gap-2"
      >
        <ChevronLeft size={20} />
        <span className="hidden md:inline">Retour</span>
      </button>

      <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-r from-[#1a2940] to-[#2d3e5f]">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Filières d'Expertise
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explorez toutes nos formations par filière et domaine de spécialisation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#1a2940] mb-6">Filtres</h3>

              {/* Category Filters */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#1a2940] mb-4 flex items-center">
                  <div className="w-1 h-6 bg-[#f5a623] mr-3"></div>
                  Filières
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-[#f5a623] text-white font-semibold'
                          : 'bg-gray-100 text-[#1a2940] hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* SubCategory Filters */}
              {selectedCategory && subCategories.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[#1a2940] mb-4 flex items-center">
                    <div className="w-1 h-6 bg-[#f5a623] mr-3"></div>
                    Volets
                  </h4>
                  <div className="space-y-2">
                    {subCategories.map((subCategory) => (
                      <button
                        key={subCategory}
                        onClick={() => handleSubCategoryClick(subCategory)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedSubCategory === subCategory
                            ? 'bg-[#f5a623] text-white font-semibold'
                            : 'bg-gray-100 text-[#1a2940] hover:bg-gray-200'
                        }`}
                      >
                        {subCategory}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#1a2940] mb-2">
                Résultats
              </h2>
              <p className="text-gray-600">
                {filteredPrograms.length} formation{filteredPrograms.length !== 1 ? 's' : ''} disponible{filteredPrograms.length !== 1 ? 's' : ''}
                {selectedCategory && ` dans ${selectedCategory}`}
                {selectedSubCategory && ` - ${selectedSubCategory}`}
              </p>
            </div>

            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPrograms.map((program) => (
                  <div
                    key={program.id}
                    onClick={() => handleCourseClick(program.id, program.isVisible, program.title)}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <span className="absolute top-4 right-4 bg-[#f5a623] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {program.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-gray-100 text-[#1a2940] px-3 py-1 rounded-full text-xs font-semibold">
                          {program.subCategory}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1a2940] mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {program.shortDescription}
                      </p>

                      <div className="space-y-2 mb-6 py-4 border-y border-gray-200">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={16} className="text-[#f5a623]" />
                            <span>Durée</span>
                          </div>
                          <span className="font-semibold text-[#1a2940]">
                            {program.hours}h
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign size={16} className="text-[#f5a623]" />
                            <span>Prix</span>
                          </div>
                          <span className="font-semibold text-[#1a2940]">
                            {program.cost.toLocaleString()} 
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <CalendarDays size={16} className="text-[#f5a623]" />
                            <span>Prochaine Session</span>
                          </div>
                          <span className="font-semibold text-[#1a2940]">
                            {program.startDate.toLocaleDateString('fr-FR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      <button className="w-full bg-[#f5a623] hover:bg-[#e09515] text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                        {program.isVisible ? 'En savoir plus' : 'Demander des informations'}
                        <ChevronRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <p className="text-lg text-gray-600 mb-4">
                  Aucune formation ne correspond à vos critères de recherche.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubCategory(null);
                  }}
                  className="bg-[#f5a623] hover:bg-[#e09515] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
