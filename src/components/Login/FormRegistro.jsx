import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Background } from './../Global/Background';
import { useAuth } from '../../hooks/useAuth';


export const FormRegistro = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');

    const { register } = useAuth();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!username || !email || !password || !passwordConfirm) {
            setError('Todos los campos son obligatorios');
            return;
        }
        if (password !== passwordConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        }
        try {
            console.log(code);
            await register({ username, email, password, code });
            setIsRegistered(true);
        }
        catch (error) {
            setError(error.message || 'Error en la solicitud');
        }
    }

    return (
        <section className="bg-alternative-950 relative w-full flex justify-center items-center p-0 sm:p-8 h-[calc(100vh-196px)]">
            <Background />

            <div className="flex flex-col items-center justify-center px-6  mx-auto   z-10">
                <div className="w-full rounded-lg shadow border    bg-gray-800 border-gray-700 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {isRegistered ? (
                            <div className="text-center text-white">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl mb-4">Hemos enviado un correo de verificación a tu casilla.</h1>
                                <p className='mb-4'>Por favor revisa tu correo.</p>
                                <Link to="/">
                                    <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 mt-8">Volver</button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                    {
                                        error && <div className="text-center text-red-500 mb-4">{error}</div>
                                    }
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                                    Registrate en nuestro club
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nombre de usuario</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="JuanPerez"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

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
                                    <div>
                                            <label htmlFor="passwordConfirm" autoComplete='new-password' className="block mb-2 text-sm font-medium text-white">Confirmar Contraseña</label>
                                        <input
                                            type="password"
                                            name="passwordConfirm"
                                            id="passwordConfirm"
                                            placeholder="••••••••"
                                            className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                            required
                                            value={passwordConfirm}
                                            onChange={(e) => setPasswordConfirm(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Crear cuenta</button>
                                    <p className="text-sm font-light text-gray-400">
                                        Ya tienes una cuenta?
                                        <Link to={"/login"} className='font-medium hover:underline text-primary-500 ml-2'>
                                            Inicia Sesión
                                        </Link>
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
