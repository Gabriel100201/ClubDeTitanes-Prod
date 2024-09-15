/* eslint-disable react/prop-types */
import "./header.css";
import Logo from "../../assets/icons/LogoTitanes.png";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DesktopNav } from "./NavBar/DesktopNav";
import { MobileNav } from "./NavBar/MobileNav";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const userRef = useRef(null);
  const location = useLocation();

  const { user: isAuthenticated } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  }, [showLogout]);

  // Add event listener to detect scroll
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const verifyToken = () => {
      const auth = isAuthenticated;
      setIsLoggedIn(auth);
    }
    verifyToken();
  }, [isAuthenticated]);

  useEffect(() => {
    if (location.pathname === "/subscription") {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleClickOutside = (event) => {
    if (userRef.current && !userRef.current.contains(event.target)) {
      setShowLogout(false);
    }
  };

  return (
    <>
      {!hidden && (
        <>
          <div className="w-full h-24 sm:h-20"></div>
      <header
        className={`transition-all md:justify-center body-font z-50 top-0 fixed w-full flex flex-col items-center ${isScrolled ? "scrolled" : "noscrolled"}`}
      >
        <div className="container mx-auto flex p-5 md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <img src={Logo} alt="Logo del Club de titanes" className="w-40" />
          </a>
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
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
          <DesktopNav
            isLoggedIn={isLoggedIn}
            toggleLogout={toggleLogout}
            userRef={userRef}
            showLogout={showLogout}
            navigate={navigate}
          />
        </div>
        <MobileNav isMenuOpen={isMenuOpen} isLoggedIn={isLoggedIn} showLogout={showLogout} />
      </header>
      </>
      )}
    </>
  );
};
