import { Link, useNavigate } from 'react-router-dom';
import  error404  from './../../assets/images/404error.svg';
export const Error404 = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <section className=" bg-alternative-950 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Página no encontrada</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Lo sentimos, la página que estás buscando no existe. Aquí tienes algunos enlaces útiles:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Volver atrás</span>
                        </button>
                        <Link to={"/"}>
                            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Ir al inicio
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={error404} alt="" />
                </div>
            </div>
        </section>
    );
}