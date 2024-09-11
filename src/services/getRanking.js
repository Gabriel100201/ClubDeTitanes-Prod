import axios from "axios"

const URL_API = import.meta.env.VITE_API_URL;
export const getRanking = async () => {
  try {
    const results = await axios.post(URL_API + '/getRanking');
    if (!results.data) {
      throw new Error(results.data.message);
    }
    return results.data;
  }
  catch (error) {
    if (error.code == "ERR_NETWORK") {
      throw new Error("Error de red");
    }
    return error.response.data.message[0].msg || error.response.data.message || error;
  }
}