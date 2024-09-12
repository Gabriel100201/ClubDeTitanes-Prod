import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const resetPassword = async ({ password, token }) => {
  try {
    const results = await axios.post(
      URL_API + "/resetPassword",
      {
        password,
        token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return results.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || error);
  }
};
