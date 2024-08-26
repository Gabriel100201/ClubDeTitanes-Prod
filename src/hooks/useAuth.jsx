import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../context/store';
import { loginService } from '../services/login';
import { registerService } from '../services/register';

export const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    const result = await loginService({ email, password });
    if (!result.token) {
      throw new Error(result);
    }
    const userData = { email: email, token: result.token, isProUser: result.userType };
    login(userData);
    navigate('/');
  };

  const handleRegister = async ({ username, email, password, code }) => {
    try {
      const message = await registerService({ username, email, password, code });
      return message;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return { user, login: handleLogin, logout: handleLogout, isAuthenticated, register: handleRegister };
};