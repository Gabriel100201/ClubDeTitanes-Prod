import { useState } from 'react';
import { generatePaymentUrl } from '../../services/generatePaymentUrl';
import { ThreeCircles } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import './pricing.css';

export const Pricing = () => {

  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const navigate = useNavigate();
  const generateUrl = async (ev) => {
    const type = ev.target.id;
    setIsPaymentLoading(true);
    const data = await generatePaymentUrl(type);
    setIsPaymentLoading(false);
    if (!data.url) {
      navigate('/profile');
    }
    else window.open(data.url, "_blank");
  }
  return (
    <div className='w-full bg-gradient-to-t from-alternative-950 to-secondary-900 flex justify-center items-center z-10 relative'>
      <div className="absolute z-0 polygon left-0 top-0 w-32 h-32 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>
      <div className="absolute z-0 polygon left-0 top-16 w-48 h-48 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>
      <div className="absolute z-0 polygon left-0 top-32 w-60 h-60 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>

      <div className="absolute z-0 polygon rotate-180 right-0 bottom-40 w-32 h-32 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>
      <div className="absolute z-0 polygon rotate-180 right-0 bottom-20 w-48 h-48 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>
      <div className="absolute z-0 polygon rotate-180 right-0 bottom-0 w-60 h-60 bg-gradient-to-r from-secondary-900 to-secondary-950"></div>
      <section className="text-gray-200 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-3xl title-font mb-2 text-primary-400 font-semibold z-50">Precios</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200 z-10">Accedé a nuestro plan mensual para disfrutar de los beneficios de la membresía de nuestra comunidad</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/3 w-full backdrop-blur-sm">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm trackingWidest title-font mb-1 font-medium">START</h2>
                <h1 className="text-5xl text-gray-200 pb-4 mb-4 border-b border-gray-200 leading-none font-semibold">Free</h1>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Acceso a la comuniudad de discord
                </p>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Contenido premium por 500 puntos
                </p>
                <p className="flex items-center text-gray-200 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Participación en sorteos
                </p>
                <Link to="/login" className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Acceder
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="text-xs text-gray-200 mt-3">Reservado a cambios con el transcurso del tiempo</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/3 w-full backdrop-blur-sm">
              <div className="h-full p-6 rounded-lg border-2 border-primary-500 flex flex-col relative overflow-hidden">
                <span className="bg-primary-500 text-white px-3 py-1 trackingWidest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="text-sm trackingWidest title-font mb-1 font-medium">PRO</h2>
                <h1 className="text-5xl text-primary-400 font-semibold leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$29.99</span>
                  <span className="text-lg ml-1 font-normal text-gray-200">/mes</span>
                </h1>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Acceso a la comuniudad de discord
                </p>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Acceso a todos los cursos
                </p>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Participación en sorteos premium
                </p>
                <button onClick={generateUrl} id='mensual' className="flex relative items-center mt-auto text-white bg-primary-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-600 rounded">
                  <span>
                    Subscríbete
                  </span>
                  {!isPaymentLoading &&
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  }
                  {
                    isPaymentLoading && (
                      <div className='absolute right-5'>
                        <ThreeCircles
                          visible={true}
                          height="25"
                          width="25"
                          color="#ffffff"
                          ariaLabel="three-circles-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </div>
                    )
                  }
                </button>
                <p className="text-xs text-gray-200 mt-3">Renovación mensual</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/3 w-full backdrop-blur-sm">
              <div className="h-full p-6 rounded-lg border-2 border-primary-500 flex flex-col relative overflow-hidden">
                <span className="bg-primary-500 text-white px-3 py-1 trackingWidest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="text-sm trackingWidest title-font mb-1 font-medium">PRO</h2>
                <h1 className="text-5xl text-primary-400 font-semibold leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$200</span>
                  <span className="text-lg ml-1 font-normal text-gray-200">/mes</span>
                </h1>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Acceso a la comuniudad de discord
                </p>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Acceso a todos los cursos
                </p>
                <p className="flex items-center text-gray-200 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Participación en sorteos premium
                </p>
                <button onClick={generateUrl} id='anual' className="flex relative items-center mt-auto text-white bg-primary-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-primary-600 rounded">
                  <span>
                    Subscríbete
                  </span>
                  {!isPaymentLoading &&
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  }
                  {
                    isPaymentLoading && (
                      <div className='absolute right-5'>
                        <ThreeCircles
                          visible={true}
                          height="25"
                          width="25"
                          color="#ffffff"
                          ariaLabel="three-circles-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </div>
                    )
                  }
                </button>
                <p className="text-xs text-gray-200 mt-3">Renovación anual</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}