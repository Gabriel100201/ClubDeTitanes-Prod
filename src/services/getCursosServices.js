import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const getCursosService = async () => {
  try {
    const results = await axios.post(
      URL_API + "/getCursos",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      }
    );
    return results.data;
  } catch (error) {
    if (error.response.status === 402) {
      const results = await axios.post(
        URL_API + "/getFreeCursos",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
          },
        }
      );
      return results.data;
    }
  }
};
