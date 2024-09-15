import './cursos.css'
export const BannerProUser = () => {

  return (
    <div className="w-full bg-gradient-to-br relative from-secondary-950 via-secondary-950 to-secondary-800 shadow_section">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
        <p className="bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold text-xl">¡Bienvenido de nuevo!</p>
        <h2 className="mb-4 tracking-tight font-extrabold text-gray-900 dark:text-white text-2xl md:text-5xl">Explora nuevos cursos y sigue ampliando tus conocimientos</h2>
        <p className="mb-8 font-light text-gray-500 sm:text-2xl dark:text-gray-400">Aprovecha al máximo tu suscripción accediendo a contenido exclusivo diseñado para llevar tu negocio al siguiente nivel. ¡Tu viaje hacia el éxito continúa aquí!</p>
      </div>
      <div className="absolute arrow bottom-4 left-28 rotate-45 opacity-25 bg-gradient-to-r from-primary-700 to-primary-500 w-[90px] h-[90px]" />
      <div className="absolute arrow bottom-20 left-12 rotate-45 opacity-25 bg-gradient-to-r from-primary-700 to-primary-500 w-[90px] h-[90px]" />
      <div className="absolute arrow bottom-36 left-[-20px] rotate-45 opacity-25 bg-gradient-to-r from-primary-700 to-primary-500 w-[90px] h-[90px]" />
    </div>
  )
}