import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const getCategoriesService = async () => {
  try {
    const results = await axios.post(
      URL_API + "/getCategories",
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
    return error.response.data || error;
  }
};
