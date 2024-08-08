import { useAuthStore } from '../context/store';
import { loginService } from '../services/login';

export const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useAuthStore();

  const handleLogin = async ({ email, password }) => {
    const result = await loginService({ email, password });
    if (!result.token) {
      throw new Error(result.message);
    }
    const userData = { email: email, token: result.token };
    login(userData);
  };

  const handleLogout = () => {
    logout();
  };

  return { user, login: handleLogin, logout: handleLogout, isAuthenticated };
};