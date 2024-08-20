/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FaCrown } from "react-icons/fa";

export const DesktopNav = ({ isLoggedIn, toggleLogout, userRef, showLogout, navigate }) => {

  const { logout } = useAuth();
  const { user } = useAuth();

  const handleLogoutClick = () => {
    toggleLogout();
    logout();
  };

  const handlePremiumClick = () => {
    navigate("/subscription");
  }

  return (
    <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center">
      <div className="flex">
        {
          isLoggedIn ? (
            <Link to={"/cursos"} className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
              <button className="nav-button">CURSOS</button>
            </Link>
          ) : null
        }
        <a href="/#referencias" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">REFERENCIAS</button>
        </a>
        <a href="/#nosotros" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">NOSOTROS</button>
        </a>
        <a href="/#contacto" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">CONTACTO</button>
        </a>
      </div>
      <div className="flex items-center relative">
        <a href="#contacto" className="hidden md:flex mr-2">
          <button className="flex shadow__btn h-10 md:px-3 md:text-xs lg:px-5 lg:text-sm justify-center items-center">
            CONTÁCTATE
          </button>
        </a>
        {isLoggedIn ? (
          <div className="relative" ref={userRef}>
            <button
              className="flex shadow__btn_secondary h-10 py-4 px-4 w-full justify-center items-center"
              onClick={toggleLogout}
            >
              <FaUser />
            </button>
            {showLogout === true && (
              <div className="relative">
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {!user.isProUser && (
                    <button
                      className="w-full text-left flex justify-between items-center px-4 py-2 text-sm bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-t-md"
                      onClick={handlePremiumClick}
                    >
                      Hacete premium
                      <FaCrown />
                    </button>
                  )}
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => navigate("/profile")}
                  >
                    Ver perfil
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mt-2"
                    onClick={handleLogoutClick}
                  >
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="flex shadow__btn_secondary h-10 py-4 px-4 w-full justify-center items-center">
              INICIAR SESIÓN
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}