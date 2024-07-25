import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const DashboardHome = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.post('http://localhost:3000/v1/getInfoUser',
                { token }, 
                { headers: { 'Content-Type': 'application/json' } });

                setUserInfo(response.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);


    return (
        <section className="bg-alternative-950 relative h-[calc(100vh-90px)] -mt-3 w-full flex justify-center items-center p-0 sm:p-8 py-32 lg:py-48 min-h-96">
            {error && <div className='text-white'>{error}</div>}
            <div className="text-white">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">Dashboard Home</h1>
                {userInfo && (
                    <div>
                        <p>Nombre de usuario: {userInfo.username}</p>
                        <p>Email: {userInfo.email}</p>
                        {/* Muestra más información del usuario según sea necesario */}
                    </div>
                )}
            </div>
        </section>
    );
}
