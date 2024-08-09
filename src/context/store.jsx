import { create } from 'zustand';
import { isValidTokenService } from "../services/isValidToken";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  login: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
  isAuthenticated: async () => {
    const isValidToken = await isValidTokenService({ token: JSON.parse(localStorage.getItem("user"))?.token });
    if (isValidToken) {
      return isValidToken;
    }
    else {
      localStorage.removeItem("user");
      set({ user: null });
      return false;
    }
  }

}));

