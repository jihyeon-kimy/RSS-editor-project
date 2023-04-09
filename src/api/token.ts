import axios from "axios";
import { getUserDataFromStorage } from "../lib/token";

export const FB_ReNewToken = async () => {
  return await axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_FB_API_KEY}`,
    {
      grant_type: "refresh_token",
      refresh_token: getUserDataFromStorage("refreshToken"),
    }
  );
};
