import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const verifyPaymentSessionId = async ({ session_id }) => {
  try {
    const results = await axios.post(
      URL_API + "/success-payment",
      { session_id },
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
