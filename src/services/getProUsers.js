import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const getProUsers = async () => {
  try {
    const results = await axios.post(
      URL_API + "/getProUsers",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      }
    );
    if (results.data) {
      const usersInfo = results.data;
      return usersInfo;
    }
    else {
      throw new Error(results.data.message[0].msg || results.data.message || "Error");
    }
  } catch (error) {
    throw error.response.data || error;
  }
};
