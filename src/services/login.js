import axios from "axios"

const URL_API = import.meta.env.VITE_API_URL;
export const loginService = async ({ email, password }) => {
  try {
    const results = await axios.post(URL_API + '/login', { email, password });
    if (!results.data.token) {
      throw new Error(results.data.message);
    }
    return results.data;
  }
  catch (error) {
    if (error.code == "ERR_NETWORK") {
      throw new Error("Error de red");
    }
    return error.response.data || error;
  }
}