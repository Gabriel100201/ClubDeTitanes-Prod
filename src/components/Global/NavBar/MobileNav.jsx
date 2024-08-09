/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const MobileNav = ({ isMenuOpen, isLoggedIn }) => {
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };


  return (
    <nav
      className={`pb-6 z-50 w-full md:hidden md:flex-wrap items-center text-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block slide-in" : "slide-out hidden"
        } md:flex`}
    >
      {
        isLoggedIn ? (
          <Link to={"/cursos"} className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
            <button className="nav-button">CURSOS</button>
          </Link>
        ) : null
      }
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
          <>
            <button className="flex shadow__btn_secondary h-10 w-full justify-center items-center">
              <FaUser />
            </button>
            <button
              className="block w-full text-center px-4 py-2 text-sm text-primary-400 font-bold hover:bg-gray-200 mt-2"
              onClick={handleLogoutClick}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="flex shadow__btn_secondary h-10 w-full justify-center items-center">
              INICIAR SESIÓN
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
};