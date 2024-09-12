import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const resetPasswordQuery = async ({ email }) => {
  try {
    const results = await axios.post(
      URL_API + "/resetPasswordQuery",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return results.data;
  } catch (error) {
    throw new Error(error.response?.data.message || error.message);
  }
};
