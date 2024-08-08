import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Background } from '../Global/Background';
import profile from './../../assets/icons/profile.svg';
import { MdOutlineEmail } from "react-icons/md";
import { Ranking } from './Ranking';

export const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    const error = new Error('No token found');
                    error.status = 401;
                    throw error;
                }

                const response = await axios.post('http://localhost:3000/v1/getInfoUser',
                    { token },
                    { headers: { 'Content-Type': 'application/json' } });

                setUserInfo(response.data);
            } catch (error) {
                if (error.status === 401 || (error.response && error.response.status === 401)) {
                    localStorage.removeItem('token');
                    navigate('/login?error=invalid_token');
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [navigate]);

    return (
        <section className="bg-alternative-950 relative h-[calc(100vh-90px)] -mt-3 w-full flex flex-col lg:flex-row justify-start p-0 sm:p-8 py-32 lg:py-48 min-h-96">
            <Background />
            {loading ? (
                <div className='text-white'>Cargando...</div>
            ) : (
                <>
                    {error && <div className='text-white'>{error}</div>}
                    <div className="z-10 w-full lg:w-1/2 px-4 pb-11 lg:px-20 order-2 lg:order-1">
                        {userInfo && (
                            <div className="max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                <div className="px-4 pb-6">
                                    <div className="text-center my-4">
                                        <img className="h-32 w-32 rounded-full border-4 border-gray-800 mx-auto my-4"
                                            src={profile} alt="" />
                                        <div className="py-2">
                                            <h3 className="font-bold text-2xl text-white mb-1 capitalize">{userInfo.username}</h3>
                                            <div className="inline-flex text-gray-300 items-center">
                                                <MdOutlineEmail className='mr-2'/>
                                                {userInfo.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 px-2">
                                        <button
                                            className="flex-1 rounded-full bg-blue-800 text-white font-bold hover:bg-blue-900 px-4 py-2">
                                            Ver Perfil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="z-10 pt-32 pb-20 w-full md:pt-10 lg:w-1/2 order-1 lg:order-2">
                        <Ranking />
                    </div>
                </>
            )}
        </section>
    );
}
