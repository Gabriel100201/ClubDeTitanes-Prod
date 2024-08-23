import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { generatePaymentUrl } from '../../services/generatePaymentUrl';
import { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import Estatua from '../../assets/images/estatua.png'
import LogoTitanes from '../../assets/icons/LogoTitanes.png'
import './hero.css'

export const HeroSubscription = () => {

  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const navigate = useNavigate();

  const generateUrl = async () => {
    setIsPaymentLoading(true);
    const data = await generatePaymentUrl();
    setIsPaymentLoading(false);
    if (!data.url) {
      navigate('/login');
    }
    else window.open(data.url, "_blank");
  }

  useEffect(() => {
    setTimeout(() => {
      setImageVisible(true);
    }, 100);
  }, []);

  return (
    <section className="w-full bg-hero">
      <button
        onClick={() => navigate(-1)}
        className='bg-white/10 hover:bg-white/20 border-white border-2 absolute top-5 left-5 transition-colors flex items-center z-50 justify-center gap-5 rounded-md px-4 py-2 text-white font-semibold'
      >
        <FaArrowAltCircleLeft />
        <span>Volver</span>
      </button>

      <div className='w-full flex max-w-screen-xl mx-auto items-center justify-center py-32 relative'>
        <div className='flex flex-col justify-start items-center xl:items-start h-full w-full xl:w-2/3'>
          <div>
            <img className='w-36 mb-9' src={LogoTitanes} alt="Logo club de titanes" />
          </div>
          <h3 className='text-xl xl:text-3xl text-white font-semibold'>IMPULSA TU CRECIMEINTO</h3>
          <h2 className='bg-gradient-to-b py-3 z-[100] from-primary-200 text-center xl:text-start via-primary-400 to-primary-600 inline-block text-transparent bg-clip-text font-bold text-4xl xl:text-7xl'>PERSONAL Y PROFESIONAL</h2>
          <button onClick={generateUrl} className='w-full max-w-[90%] z-10 text-white relative bg-primary-600 hover:bg-secondary-950 transition-all hover:text-primary-400 hover:border-primary-500 border-transparent border-2 rounded-md text-base sm:text-lg font-bold sm:w-96 h-20 sm:h-16 mt-7'>
            <span>
              Subscríbete a Premium
            </span>
            {
              isPaymentLoading && <div className='absolute flex justify-center items-center h-full right-3 top-0'>
                <ThreeCircles
                  visible={true}
                  height="35"
                  width="35"
                  color="#ffffff"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            }
          </button>
          <ul className='text-white mt-10 flex flex-col gap-3 text-lg max-w-[90%]'>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              <span className='w-full'>
                Más de 10.000 personas han transformado sus vidas con nuestra ayuda
              </span>
            </li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              <span className='w-full'>
                Guiado por mentores expertos y líderes en desarrollo personal
              </span>
            </li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              <span className='w-full'>
                Contenido exlusivo en español
              </span>
            </li>
            <li className='flex items-center gap-5'>
              <div className='w-4 h-4 bg-primary-500 rounded-full' />
              <span className='w-full'>
                Para todos los niveles
              </span>
            </li>
          </ul>
        </div>
        <div className={`hidden xl:flex w-1/3 relative justify-center items-center fade-in ${imageVisible ? 'visible' : ''}`}>
          <img className='z-0 shadow-estatua' src={Estatua} alt="" />
        </div>
        <img className='absolute z-0 bottom-[-400px] left-[-200px] opacity-10 scale-150' src={Estatua} alt="" />
      </div>
    </section>
  )
}