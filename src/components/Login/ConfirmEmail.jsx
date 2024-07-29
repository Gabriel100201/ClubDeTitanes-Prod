import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Background } from './../Global/Background';

export const ConfirmEmail = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState('');
    const query = new URLSearchParams(useLocation().search);
    const email = query.get('email');
    const token = query.get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post('http://localhost:3000/v1/validateRegister', { email, token });
                setIsVerified(true);
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        verifyEmail();
    }, [email, token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-alternative-950">
            <Background />
            {isVerified ? (
                <div className="text-center text-green-500">
                    <h1 className="text-2xl font-bold">¡Correo verificado exitosamente!</h1>
                    <p>Ahora puedes iniciar sesión.</p>
                    <Link to="/login">
                    <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 mt-8">Iniciar Sesión</button>
                    </Link>
                </div>
            ) : (
                <div className="text-center text-red-500">
                    <h1 className="text-2xl font-bold">Verificación fallida</h1>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};
