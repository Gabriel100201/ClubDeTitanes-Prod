import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await axios.get('http://localhost:3000/v1/validateToken', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setIsLoggedIn(true);
        } catch (error) {
          if (error.code === 'ERR_BAD_REQUEST') {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            navigate('/login');
          }
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    checkToken();
  }, [navigate]);

  return isLoggedIn;
};

export default useAuth;
