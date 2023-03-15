import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
