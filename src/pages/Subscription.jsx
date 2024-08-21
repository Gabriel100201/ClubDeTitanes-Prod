import { FaArrowAltCircleLeft } from 'react-icons/fa';
import './subscriptions.css';
import { useNavigate } from 'react-router-dom';

export const Subscription = () => {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <section className="w-full bg-hero">
      <button
        onClick={() => navigate(-1)}
        className='bg-white/60 border-secondary-950/70 hover:bg-white/80 absolute top-5 left-5 transition-colors border-2 flex items-center z-50 justify-center gap-5 rounded-md px-4 py-2 text-secondary-950 font-semibold'
      >
        <FaArrowAltCircleLeft />
        <span>Volver</span>
      </button>
      <div className='flex items-center justify-center h-[80vh]'>
        SECCION PAGO
      </div>
      <div className='w-full h-16 bg-primary-100 flex justify-center items-center'>SEPARADOR</div>
      <div className='w-full bg-secondary-950 h-[500px] flex justify-center items-center'>
        SECCION PROMOCIÓN
      </div>
    </section>
  )
}
