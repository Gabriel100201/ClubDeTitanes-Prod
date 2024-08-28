import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { verifyPaymentSessionId } from "../services/verifySubsciprionId";
import PaymentSuccess from "../assets/images/PaymentSuccess.png";
import Confetti from 'react-confetti'

export const SuccessPayment = () => {
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const query = new URLSearchParams(useLocation().search);
  const session_id = query.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const results = await verifyPaymentSessionId({ session_id });
        if (results) {
          setUserEmail(results);
        }
      }
      catch (error) {
        setError(error.message || 'Error en la solicitud');
      }
    }
    verifyPayment(session_id);
  }, [session_id])

  return (
    <section className="w-full flex h-[100vh] justify-center items-center">
      <Confetti
        width={window.innerWidth - 20}
      />
      <div className="lg:max-w-[450px] h-[600px] max-w-[90vw]">
        <div className="bg-green-400 p-12 h-[300px] flex rounded-t-2xl justify-center items-center">
          <img src={PaymentSuccess} alt="" className="w-56" />
        </div>
        <div className="w-full bg-gray-200 p-12 flex flex-col gap-12 justify-center rounded-b-2xl items-center">
          <span className="text-center font-semibold text-alternative-800 text-md lg:text-lg">Pago realizado con éxito, su email registrado es: {userEmail}</span>
          <Link to={"/profile"} className="bg-green-600 px-12 py-3 text-white rounded-full hover:bg-green-500 transition-colors">Ir al perfil</Link>
        </div>
      </div>
    </section>
  )
}