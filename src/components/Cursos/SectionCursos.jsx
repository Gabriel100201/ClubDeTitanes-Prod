import { useEffect, useState } from "react";
import { CardCursos } from "./CardCursos";
import { getCursosService } from "../../services/getCursosServices";

export const SectionCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Desarrollo Personal"); // Estado para la categoría seleccionada

  const categories = ['Desarrollo Personal', 'Finanzas', 'Trading']; // Array de categorías

  useEffect(() => {
    const getCursos = async () => {
      const results = await getCursosService();
      if (results?.status == 402) {
        setError("Regístrate ahora mismo para ver los cursos");
        return;
      }
      setCursos(results);
    };
    getCursos();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada
  };

  return (
    <div className="py-8 px-4 relative sm:py-16 lg:px-6 max-w-screen-xl mx-auto flex flex-col gap-8">
      <nav aria-label="Page navigation" className="flex flex-col">
        <span className="bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold">CATEGORÍAS</span>
        <ul className="inline-flex -space-x-px text-base h-10">
          {categories.map((category) => (
            <li key={category}>
              <button
                href="#"
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center justify-center px-4 h-10 transition-all ms-0 leading-tight font-medium border border-primary-200 ${selectedCategory === category
                  ? 'bg-secondary-800 transition-all text-white'
                  : 'bg-secondary-900/30 text-gray-200'
                  } ${category === 'Desarrollo Personal' ? 'rounded-s-lg' : ''} ${category === 'Trading' ? 'rounded-e-lg' : ''
                  }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="text-2xl font-semibold text-gray-200 capitalize lg:text-4xl">{selectedCategory}</h1>

      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-2 md:grid-cols-2">
        {error && <p className="text-white">{error}</p>}
        {cursos && cursos.length > 0 && cursos.map((curso) => (
          <CardCursos key={curso.id} title={curso.name} desc={curso.description} url={curso.url} />
        ))}
      </div>
    </div>
  );
};
