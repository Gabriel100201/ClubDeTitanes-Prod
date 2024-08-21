import  { useState } from 'react';
import { Background } from '../Global/Background';
import profile from './../../assets/icons/profile.svg';
import { MdOutlineEmail } from "react-icons/md";
import { Ranking } from './Ranking';

export const Profile = () => {
    const [userInfo,] = useState(null);
    const [loading,] = useState(false);
    const [error,] = useState(null);

    return (
        <section className="bg-alternative-950 relative h-[calc(100vh-90px)] -mt-3 w-full flex flex-col lg:flex-col justify-start p-0 sm:p-8 py-32 lg:py-48 min-h-96">
            {/* <Background /> */}
            {loading ? (
                <div className='text-white'>Cargando...</div>
            ) : (
                <>
                    {error && <div className='text-white'>{error}</div>}
                    <div className="z-10 w-full px-4 pb-11 lg:px-20">
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
                    <div className="z-10 pt-32 pb-20 w-full md:pt-10 flex justify-center align-middle ">
                        <Ranking />
                    </div>
                </>
            )}
        </section>
    );
}
