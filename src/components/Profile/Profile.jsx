import { useState } from 'react';
import profile from './../../assets/icons/profile.svg';
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

export const Profile = () => {
    const { user } = useAuth();
    const [loading,] = useState(false);
    const [error,] = useState(null);

    return (
        <section className="bg-textura-1 h-[calc(100vh-180px)] py-10 flex justify-center">
            {loading ? (
                <div className='text-black'>Cargando...</div>
            ) : (
                <>
                    {error && <div className='text-red-600'>{error}</div>}
                    <div className="max-w-4xl w-full rounded-lg shadow-lg p-6">
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Perfil del usuario */}
                            <div className="rounded-lg p-10 flex flex-col items-center border border-secondary-700 bg-gray-800/80 shadow lg:w-1/3  px-6">
                                <img
                                    className="h-32 w-32 rounded-full border-4 border-gray-300"
                                    src={profile}
                                    alt="Perfil"
                                />
                                <h3 className="text-2xl font-bold mt-4 text-white">{user.username || 'Usuario'}</h3>
                                <p className=" text-white">{user.email || 'email@dominio.com'}</p>
                                <p className="text-[#ea9e23] mt-2">102 Puntos</p>

                            </div>

                            {/* Formulario de edición */}
                            <div className="lg:w-2/3 p-6 border-secondary-700 bg-gray-800/80 shadow rounded-lg border">
                                <h2 className="text-xl font-semibold mb-4 text-white">Editar Perfil</h2>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-white">Username</label>
                                            <input
                                                type="text"
                                                className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                                value={user.username || ''}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white">Nombre y Apellido</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        {/* <div>
                                            <label className="block text-white">Cumpleaños</label>
                                            <input 
                                            type="date" 
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                                            />
                                            </div>
                                            <div>
                                            <label className="block text-white">Rol de Trabajo</label>
                                            <input 
                                                type="text" 
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
                                                />
                                                </div> */}
                                    </div>
                                    <div>
                                        <label className="block text-white">Email</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            value={user.email || ''}
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-white">Comparte tu código de referido con amigos para ganar PUNTOS!</h3>
                                        <div className="flex space-x-4 mt-4">
                                            <div className="flex items-center w-full">
                                                <input
                                                    type="text"
                                                    placeholder="Ingresa tu código de referido"
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                                />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <button className='mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700'>Guardar cambios</button>


                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};
