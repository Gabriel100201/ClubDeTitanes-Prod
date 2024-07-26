import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/LogoTitanes.png";
import "./header.css";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleClickOutside = (event) => {
    if (userRef.current && !userRef.current.contains(event.target)) {
      setShowLogout(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`bg-inherit transition-all md:justify-center body-font z-50 mb-[-10px] fixed w-full flex flex-col items-center ${isScrolled ? "scrolled" : "noscrolled"
        } ${isMenuOpen ? "h-44" : "h-24"}`}
    >
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
          <img src={Logo} alt="Logo del Club de titanes" className="w-40" />
        </a>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 transition-transform transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 transition-transform transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-between">
          <div className="flex">
            <Link to={"/cursos"} className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
              <button className="nav-button">CURSOS</button>
            </Link>
            <a href="#referencias" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
              <button className="nav-button">REFERENCIAS</button>
            </a>
            <a href="#nosotros" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
              <button className="nav-button">NOSOTROS</button>
            </a>
            <a href="#contacto" className="mr-5 px-3 py-1 hover:text-gray-900 cursor-pointer">
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
                {showLogout && (
                  <div
                    className="absolute right-0 mt-2 w-48 py-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
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
      </div>
      <nav
        className={`bg-black pb-6 w-full md:hidden md:flex-wrap items-center text-center justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "block slide-in" : "slide-out hidden"
          } md:flex`}
      >
        <a href="#referencias" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">REFERENCIAS</button>
        </a>
        <a href="#nosotros" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">NOSOTROS</button>
        </a>
        <a href="#contacto" className="block px-3 py-1 hover:text-gray-900 cursor-pointer">
          <button className="nav-button">CONTACTO</button>
        </a>
        <div className="px-12">
          <Link to={"/#contacto"}>
            <button className="flex shadow__btn h-10 w-full justify-center items-center mb-4">
              CONTÁCTATE
            </button>
          </Link>
          {isLoggedIn ? (
            <Link to={"/dashboard"}>
              <button className="flex shadow__btn_secondary h-10 w-full justify-center items-center">
                <FaUser />
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button className="flex shadow__btn_secondary h-10 w-full justify-center items-center">
                INICIAR SESIÓN
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
