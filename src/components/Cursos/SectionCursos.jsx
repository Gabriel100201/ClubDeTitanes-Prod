import { useEffect, useState } from "react";
import { CardCursos } from "./CardCursos"
import { getCursosService } from "../../services/getCursosServices";

export const SectionCursos = () => {

  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const getCursos = async () => {
      const res = await getCursosService();
      console.log(res);
      setCursos(data);
    }
    getCursos();
  }, [])

  return (
    <div className="py-8 px-4 mx-auto relative max-w- screen-xl sm:py-16 lg:px-6">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Primeros pasos</h1>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <CardCursos title="Primeros pasos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      </div>
    </div>
  )
}