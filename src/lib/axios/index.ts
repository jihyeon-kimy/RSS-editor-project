import axios from "axios";

const Auth_URL = "https://identitytoolkit.googleapis.com/v1";
const Database_URL = `https://${process.env.REACT_APP_FB_PROJECT_ID}.firebasedatabase.app/users`;

export const customAuthAxios = axios.create({
  baseURL: Auth_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const customDatabaseAxios = axios.create({
  baseURL: Database_URL,
  headers: { "Content-Type": "application/json" },
});
