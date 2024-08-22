import { FaArrowAltCircleLeft } from 'react-icons/fa';
import './subscriptions.css';
import { useNavigate } from 'react-router-dom';
import LogoTitanes from '../assets/icons/LogoTitanes.png'

export const Subscription = () => {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <section className="w-full bg-hero">
      <button
        onClick={() => navigate(-1)}
        className='bg-white/10 hover:bg-white/20 border-white border-2 absolute top-5 left-5 transition-colors flex items-center z-50 justify-center gap-5 rounded-md px-4 py-2 text-white font-semibold'
      >
        <FaArrowAltCircleLeft />
        <span>Volver</span>
      </button>

      <div className='w-full  flex max-w-screen-xl mx-auto items-center justify-center py-32'>
        <div className='flex flex-col justify-start items-start h-full w-2/3'>
          <div>
            <img className='w-36 mb-9' src={LogoTitanes} alt="Logo club de titanes" />
          </div>
          <h3 className='text-3xl text-white font-semibold'>IMPULSA TU CRECIMEINTO</h3>
          <h2 className='bg-gradient-to-b py-3 z-[100] from-primary-200 via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold text-7xl'>PERSONAL Y PROFESIONAL</h2>
          <button className='w-full text-white bg-primary-600 hover:bg-secondary-950 transition-all hover:text-primary-400 hover:border-primary-500 border-transparent border-2 rounded-md text-base sm:text-lg font-bold sm:w-96 h-20 sm:h-16 mt-7'>Subscríbete a Premium</button>
          <ul className='text-white mt-10 flex flex-col gap-3 text-lg'>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              Más de 10.000 personas han transformado sus vidas con nuestra ayuda</li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              Guiado por mentores expertos y líderes en desarrollo personal</li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              Contenido exlusivo en español</li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              Para todos los niveles</li>
          </ul>
        </div>
        <div className='w-1/3 flex justify-center items-center'>

        </div>
      </div>

      <div className='w-full h-16 bg-primary-100 flex justify-center items-center'>SEPARADOR</div>
      <div className='w-full bg-secondary-950 h-[500px] flex justify-center items-center'>
        SECCION PROMOCIÓN
      </div>
    </section>
  )
}
