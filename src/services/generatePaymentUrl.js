import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const generatePaymentUrl = async () => {
  try {
    const results = await axios.post(
      URL_API + "/create-payment",
      {
        email: JSON.parse(localStorage.getItem("user")).email,
        name: "",
      },
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
