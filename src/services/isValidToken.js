import axios from "axios";

const URL_API = import.meta.env.VITE_API_URL;
export const isValidTokenService = async ({ token }) => {
  try {
    if (!token) {
      return false;
    }
    const results = await axios.post(URL_API + "/validate-token", { token });
    if (!results.data.isValidToken) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
