import avatar1 from "../../assets/images/avatar1.webp"
import avatar2 from "../../assets/images/avatar2.webp"
import avatar3 from "../../assets/images/avatar3.webp"

export const Testimonial = () => {
  return (
    <section id='referencias' className="text-gray-400 bg-alternative-950/80 body-font flex flex-col py-40 gap-28 justify-center items-center">
      <h1 className="bg-gradient-to-b px-7 espacio-titanes from-primary-200 via-primary-400 to-primary-600 inline-block text-center text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold">
        TU PRIMER ESPACIO DE TRANSFORMACIÓN
      </h1>

      <div className="container flex justify-center flex-col sm:flex-row items-center gap-12 sm:gap-16 px-7">
        <div className="flex sm:mb-20 max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow flex-col gap-3 hover:bg-gray-800 text-center transition-all cursor-pointer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Sigue los pasos de los mejores</h5>
          <p className="font-normal text-gray-400 text-lg">Nuestros estudiantes aprenden a generar ingresos siguiendo los pasos de aquellos que ya lo están logrando, a obtener el cuerpo que desean, a superar sus miedos y, sobre todo, a convertirse en auténticos TITANES.</p>
        </div>
        <div className="flex sm:mt-20 max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow flex-col gap-3 hover:bg-gray-800 text-center transition-all cursor-pointer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Mision</h5>
          <p className="font-normal text-gray-400 text-lg">Nuestra misión es guiarte hacia la libertad financiera y ayudarte a alcanzar tus metas, ya sean físicas, mentales o económicas. Basamos nuestro éxito en los testimonios de quienes han transformado sus vidas con nosotros.</p>
        </div>
      </div>

      <div className="container px-5 py-0 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={avatar1} />
              <p className="leading-relaxed text-gray-200">El Club de Titanes ha transformado mi vida. Gracias a las enseñanzas de Brandon Lee y su equipo, he logrado independencia financiera y una mentalidad ganadora. ¡Recomendado 100%!</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">Carlos Gómez</h2>
              <p className="text-gray-500">Emprendedor, Buenos Aires</p>
            </div>
          </div>
          <div className="lg:w-1/3 mb-6 lg:mt-20 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={avatar2} />
              <p className="leading-relaxed text-gray-200">Unirme al Club de Titanes fue la mejor decisión que pude tomar. No solo he aprendido a generar ingresos, sino que también he mejorado mi salud física y mental.</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">María López</h2>
              <p className="text-gray-500">Diseñadora Gráfica, Córdoba</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={avatar3} />
              <p className="leading-relaxed text-gray-200">El Club de Titanes me enseñó a vencer mis miedos y a transformar mi vida. Ahora, tengo una mentalidad inquebrantable y estoy generando ingresos que nunca imaginé posibles. ¡Es una experiencia increíble!</p>
              <span className="inline-block h-1 w-10 rounded bg-primary-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">Lucas Fernández</h2>
              <p className="text-gray-500">Contador, Rosario</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}