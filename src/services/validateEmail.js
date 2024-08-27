import axios from "axios"

const URL_API = import.meta.env.VITE_API_URL;
export const validateEmailService = async ({ email, token, code }) => {
  try {
    const results = await axios.post(URL_API + '/validateRegister', { email, token, code });
    return results.data;
  }
  catch (error) {
    if (error.code == "ERR_NETWORK") {
      throw new Error("Error de red");
    }
    throw new Error(error.response.data.message[0].msg || error.response.data.message || error);
  }
}