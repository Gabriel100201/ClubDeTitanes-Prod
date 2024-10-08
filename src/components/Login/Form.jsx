import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ThreeCircles } from 'react-loader-spinner';

export const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('error') === 'invalid_token') {
      setError('Tu sesión ha expirado, por favor inicia sesión de nuevo');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError('');
    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      setError(error.message || 'Error en la solicitud');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-alternative-950 relative h-[calc(100vh-170px)] -mt-3 w-full flex justify-center items-center p-0 sm:p-8 py-32 lg:py-48">
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[300px] -left-12 z-0 opacity-50'></Parallax>
      <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[428px] -left-16 opacity-50'></Parallax>

      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[100px] right-0 z-0'></Parallax>
      <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[228px] right-0'></Parallax>

      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto -left-[20px] right-0 z-0 -bottom-20 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-0 right-0 z-0 bottom-0 opacity-50'></div>
      <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-[250px] right-0 z-0 -bottom-20 opacity-50'></div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10">
        {error && <div className="text-white text-l p-2 mb-3 bg-red-500 rounded-md">{error}</div>}
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Iniciar sesión en su cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Tu correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@mail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5 mb-4">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300 text-sm">Recordar contraseña</label>
                  </div>
                </div> */}
              </div>
              <Link to={"/recuperar"} className='font-medium hover:underline text-primary-500 text-[14px]'>
                Olvidaste tu contraseña?
              </Link>
              <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 relative focus:ring-primary-800 flex">
                <span>
                  Iniciar sesión
                </span>
                {
                  loading &&
                  <div className='absolute right-2'>
                    <ThreeCircles
                      visible={true}
                      height="20"
                      width="20"
                      color="#fff"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                }
              </button>

              <p className="text-sm font-light text-gray-400">
                Aún no tienes cuenta?
                <Link to={"/register"} className='font-medium hover:underline text-primary-500 ml-2'>
                  Regístrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
