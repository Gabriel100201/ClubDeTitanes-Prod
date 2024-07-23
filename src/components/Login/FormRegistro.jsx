import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const FormRegistro = () => {
    return (
        <>
            <section className=" bg-alternative-950 relative h-[calc(100vh-90px)] -mt-3 w-full flex justify-center items-center p-0 sm:p-8 py-32 lg:py-48">
                <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[300px] -left-12 z-0 opacity-50'></Parallax>
                <Parallax speed={0} className='polygon bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-32 absolute top-[428px] -left-16 opacity-50'></Parallax>

                <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[100px] right-0 z-0'></Parallax>
                <Parallax speed={0} className='polygon hidden lg:block bg-gradient-to-b from-primary-500 to-primary-700 opacity-50 w-32 h-32 absolute top-[228px] right-0'></Parallax>

                <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto -left-[20px] right-0 z-0 -bottom-20 opacity-50'></div>
                <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-0 right-0 z-0 bottom-0 opacity-50'></div>
                <div className='polygon hidden lg:block bg-gradient-to-b from-secondary-950 to-secondary-900 w-32 h-20 absolute m-auto left-[250px] right-0 z-0 -bottom-20 opacity-50'></div>

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 z-10 sm:mt-32">
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 mt-16">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight   md:text-2xl text-white">
                                Registrate en nuestro club
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium   text-white">Nombre de usuario</label>
                                    <input type="email" name="email" id="email" className="  rounded-lg  block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400 text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="JuanPerez" required="" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium   text-white">Tu correo electrónico</label>
                                    <input type="email" name="email" id="email" className="  rounded-lg  block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400 text-white  focus:ring-blue-500  focus:border-blue-500" placeholder="tu@mail.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium   text-white">Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border    rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400 text-white  focus:ring-blue-500  focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium   text-white">Contraseña</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="border    rounded-lg block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400 text-white  focus:ring-blue-500  focus:border-blue-500" required="" />
                                </div>
                                <button type="submit" className="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800">Crear cuenta</button>
                                <p className="text-sm font-light   text-gray-400">
                                    Ya tienes una cuenta?
                                    <Link to={"/login"}>
                                        <a className="font-medium hover:underline  text-primary-500"> Inicia Sesión</a>
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}