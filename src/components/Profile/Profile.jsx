import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateInfoUserService } from '../../services/updateInfo';
import { ThreeCircles } from 'react-loader-spinner';
import { FaSave } from "react-icons/fa";

const URL_BASE = import.meta.env.VITE_WEB_URL;

export const Profile = () => {
    const { user, updateUser } = useAuth();
    const [loading,] = useState(false);
    const [error,] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imgAvatar,] = useState(`https://ui-avatars.com/api/?name=${user.username}&background=ea9e23`);

    // Manejadores de estado para los campos
    const [username, setUsername] = useState(user.username || '');
    const [email, setEmail] = useState(user.email || '');
    const [referralCode, setReferralCode] = useState(user.code || '');

    const handleForm = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const result = await updateInfoUserService({ username });
            if (result) {
                updateUser()
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleInvite = async (e) => {
        e.preventDefault();
        const link = `${URL_BASE}/register?code=${referralCode}`
        navigator.clipboard.writeText(link);
    };



    return (
        <section className="bg-textura-1 h-[calc(100vh-180px)] py-10 flex justify-center items-center">
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
                                        src={imgAvatar}
                                    alt="Perfil"
                                />
                                <h3 className="text-2xl font-bold mt-4 text-white">{user.username || 'Usuario'}</h3>
                                <p className=" text-white">{user.email || 'email@dominio.com'}</p>
                                    <p className="text-[#ea9e23] mt-2">{user.points}</p>
                            </div>


                            {/* Formulario de edición */}
                            <div className="lg:w-2/3 p-6 border-secondary-700 bg-gray-800/80 shadow rounded-lg border">
                                <h2 className="text-xl font-semibold mb-4 text-white">Editar Perfil</h2>
                                    <form className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                            <div className='w-full'>
                                                <label className="block text-white">Username</label>
                                                <div className='flex'>
                                                    <input disabled={isLoading} type="text"
                                                        className="w-full text-black px-4 py-2 border rounded-lg rounded-r-none focus:outline-none focus:border-blue-500" value={username} onChange={(e) => setUsername(e.target.value)} />
                                                    <button onClick={handleForm} className='bg-blue-600 text-white py-2 w-12 px-3 rounded-lg rounded-l-none hover:bg-blue-700 relative flex justify-center items-center'>
                                                        {
                                                            !isLoading &&
                                                            <FaSave />
                                                        }
                                                        {
                                                            isLoading && (
                                                                <div className='absolute'>
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
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                    </div>
                                    <div>
                                            <label className="block text-white font-semibold">Email</label>
                                        <input
                                            type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" disabled
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-white">Comparte tu código de referido con amigos para ganar PUNTOS!</h3>
                                        <div className="flex space-x-4 mt-4">
                                                <div className="flex items-center w-full gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Ingresa tu código de referido"
                                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                                        value={referralCode} disabled
                                                        onChange={(e) => setReferralCode(e.target.value)}
                                                />
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            navigator.clipboard.writeText(referralCode);
                                                        }}
                                                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                                                        Copiar
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                        <button onClick={handleInvite} className='bg-green-600 w-full text-white py-2 px-6 rounded-lg hover:bg-green-700'>Generar Link de Invitacion</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};
