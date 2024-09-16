import { Link } from "react-router-dom";
import './cursos.css'

export const BannerFree = () => {

  return (
    <div className="w-full bg-gradient-to-br from-secondary-950 via-secondary-950 to-secondary-800 shadow_section">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <p className="bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold">CURSOS</p>
        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">La plataforma donde aprenderás todo acerca de negocios, mentalidad y expansión empresarial</h2>
        <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Accede a nuestro exclusivo contenido diseñado para transformar tu mentalidad y expandir tu negocio. Conviértete en un líder empresarial invirtiendo en tu crecimiento hoy mismo.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link to={"/subscription"} className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-gradient-to-br from-primary-700 to-primary-500 rounded-lg hover:from:to-proimary-500 hover:to-primary-400 focus:ring-4 focus:ring-primary-300">
            Empezá hoy
          </Link>
        </div>
      </div>
    </div>
  )
}