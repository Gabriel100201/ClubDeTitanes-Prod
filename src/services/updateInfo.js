import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const updateInfoUserService = async ({ username }) => {
  try {
    const results = await axios.post(
      URL_API + "/updateInfoUser",
      { username },
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
