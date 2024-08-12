import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const getCursosService = async () => {
  try {
    const results = await axios.get(URL_API + "/getCursos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("user").token}`,
      },
    });
    console.log(results);
    return results.data.cursos;
  } catch (error) {
    console.log(error);
    return error.response.data || error;
  }
};
