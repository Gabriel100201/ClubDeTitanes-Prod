import { useEffect, useState } from "react";
import { CardCursos } from "./CardCursos";
import { getCursosService } from "../../services/getCursosServices";
import { getCategoriesService } from "../../services/getCategories";

export const SectionCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const results = await getCategoriesService();
      setCategories(results);
      if (results.length > 0) {
        setSelectedCategory(results[0].id);
      }
    };

    const getCursos = async () => {
      const results = await getCursosService();
      if (results?.status === 402) {
        setError("Regístrate ahora mismo para ver los cursos");
        return;
      }
      setCursos(results);
    };

    getCategories();
    getCursos();
  }, []);
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId); // Actualiza la categoría seleccionada
  };

  return (
    <div className="py-8 px-4 relative sm:py-16 lg:px-6 max-w-screen-xl mx-auto flex flex-col gap-8">
      <nav aria-label="Page navigation" className="flex flex-col">
        <span className="bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold">CATEGORÍAS</span>
        <ul className="inline-flex -space-x-px text-base h-10">
          {categories && categories.map((category, index) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center justify-center px-4 h-10 transition-all ms-0 leading-tight font-medium border border-primary-200 ${selectedCategory === category.id
                  ? 'bg-secondary-800 transition-all text-white'
                  : 'bg-secondary-900/30 text-gray-200'
                  } ${index == 0 ? 'rounded-l-lg' : ''} ${index == categories.length - 1 ? 'rounded-r-lg' : ''
                  }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="text-2xl font-semibold text-gray-200 capitalize lg:text-4xl">
        {categories.find(cat => cat.id === selectedCategory)?.name || 'Categoría'}
      </h1>

      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-2 md:grid-cols-2">
        {error && <p className="text-white">{error}</p>}
        {cursos && cursos.length > 0 && cursos.map((curso) => {
          if (curso.category == selectedCategory) return (
          <CardCursos key={curso.id} title={curso.name} desc={curso.description} url={curso.url} imageUrl={curso.image} />
          )
        })}
      </div>
    </div>
  );
};
