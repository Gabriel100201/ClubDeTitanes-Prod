import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../context/store';
import { loginService } from '../services/login';

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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return { user, login: handleLogin, logout: handleLogout, isAuthenticated };
};