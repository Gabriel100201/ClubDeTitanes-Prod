import axios from "axios";
const URL_API = import.meta.env.VITE_API_URL;

export const getInfoUserService = async () => {
  try {
    const results = await axios.post(
      URL_API + "/getInfoUser",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      }
    );
    if (results.data.token) {
      const userInfo = results.data;
      const userData = { email: userInfo.email, token: userInfo.token, points: userInfo.points, isProUser: userInfo.userType, username: userInfo.username, code: userInfo.referral_code };
      return userData;
    }
    else {
      throw new Error(results.data.message[0].msg || results.data.message || "Error");
    }
  } catch (error) {
    throw error.response.data || error;
  }
};
