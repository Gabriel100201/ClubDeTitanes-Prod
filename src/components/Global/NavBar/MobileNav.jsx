/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const MobileNav = ({ isMenuOpen, isLoggedIn }) => {
  const { logout } = useAuth();
  const { user } = useAuth();
  const navigate = useNavigate(); // Hook para navegar

  const handleLogoutClick = () => {
    logout();
  };

  const handlePremiumClick = () => {
    navigate("/subscription");
  };

  return (
    <nav
      className={`pb-6 z-50 w-full md:hidden flex-wrap text-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block slide-in" : "slide-out hidden"}`}
    >
      {isLoggedIn ? (
        <Link to={"/cursos"} className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">CURSOS</button>
        </Link>
      ) : null}
      <a href="/#referencias" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
        <button className="nav-button">REFERENCIAS</button>
      </a>
      <a href="/#nosotros" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
        <button className="nav-button">NOSOTROS</button>
      </a>
      <a href="/#contacto" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
        <button className="nav-button">CONTACTO</button>
      </a>
      <div className="px-12">
        <Link to={"/#contacto"}>
          <button className="flex shadow__btn h-10 w-full justify-center items-center mb-4">
            CONTÁCTATE
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="mt-4 space-y-2">
            {!user.isProUser && (
              <button
                className="flex shadow__btn h-10 w-full justify-center items-center text-white bg-gradient-to-r from-primary-400 to-primary-600"
                onClick={handlePremiumClick}
              >
                Hacete premium
                <FaCrown className="ml-2" />
              </button>
            )}
            <button
              className="flex shadow__btn h-10 w-full justify-center items-center hover:bg-gray-100"
              onClick={() => navigate("/ranking")}
            >
              Ranking
            </button>
            <button
              className="flex shadow__btn h-10 w-full justify-center items-center hover:bg-gray-100"
              onClick={() => navigate("/profile")}
            >
              Ver perfil
            </button>
            <button
              className="flex shadow__btn_secondary h-10 w-full justify-center items-center hover:bg-gray-100 mt-2"
              onClick={handleLogoutClick}
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="flex shadow__btn_secondary h-10 w-full justify-center items-center">
              INICIAR SESIÓN
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
