import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { verifyPaymentSessionId } from "../services/verifySubsciprionId";
import PaymentSuccess from "../assets/images/PaymentSuccess.png";
import Confetti from 'react-confetti'
import { ThreeCircles } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuth";

export const SuccessPayment = () => {
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [conffeti, setConffeti] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useAuth();

  const query = new URLSearchParams(useLocation().search);
  const session_id = query.get('session_id');

  useEffect(() => {
    setIsLoading(true);
    const verifyPayment = async () => {
      try {
        const results = await verifyPaymentSessionId({ session_id });
        if (results) {
          setUserEmail(results);
          setConffeti(true);
          updateUser();
        }
      }
      catch (error) {
        setError(error.message || 'Error en la solicitud');
      }
      finally {
        setIsLoading(false);
      }
    }
    verifyPayment(session_id);
  }, [session_id]);

  return (
    <section className="w-full flex min-h-[calc(100vh-180px)] justify-center items-center bg-gradient-to-b from-alternative-950 via-alternative-700 to-alternative-950">
      {
        conffeti &&
        <Confetti
        width={window.innerWidth - 20}
        />
      }
      {
        isLoading &&
        <ThreeCircles
          visible={true}
          height="85"
          width="75"
          color="#ea9e23"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }
      {
        !isLoading &&
        <div className="lg:max-w-[450px] h-[600px] max-w-[90vw] flex flex-col items-center justify-center">
          <div className={conffeti ? "bg-green-500 w-full p-12 h-[240px] flex rounded-t-2xl justify-center items-center" : "bg-red-500 z-50 h-[30px] w-full flex rounded-t-2xl justify-center items-center"}>
            {
              !error &&
              <img src={PaymentSuccess} alt="" className="w-56" />
              }
            </div>
            <div className="w-full bg-gray-200 p-5 md:p-12 flex flex-col gap-12 justify-center rounded-b-2xl items-start">
              {
                !error &&
                <div className="flex flex-col gap-4 text-wrap w-full">
                  <span className="text-start w-full font-semibold text-alternative-800 text-md lg:text-2xl">Pago realizado con éxito</span>
                  <span className="text-start w-full">Su email registrado es: {userEmail}</span>
                  <span className="text-green-600 font-bold">¡Ya puedes disfutar de los beneficios de la suscripción!</span>
                    <span className="text-green-600 font-bold">Tu acceso a los cursos puede tardar unos minutos, ¡gracias!</span>
                </div>
              }
              {
                error &&
                <div className="flex flex-col gap-4 w-full">
                  <span className="text-start font-semibold text-red-500 text-md lg:text-lg">{error}</span>
                  <span className="text-start">Comprueba que tu cuenta no posea una subscription activa. Si continuas con problemas comunicate con nuestro equipo.</span>
                  <a href="mailto:technodevscontacto@gmail.com" className="text-start overflow-clip text-blue-600 hover:underline-offset-1 hover:underline cursor-pointer">technodevscontacto@gmail.com</a>
                  </div>
              }
              <Link to={"/profile"} className="bg-green-600 w-full text-center px-12 py-3 text-white rounded-lg hover:bg-green-500 transition-colors">Ir al perfil</Link>
        </div>
      </div>
      }
    </section>
  )
}