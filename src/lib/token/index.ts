import { userData, userDatas } from "../../types/userData";

const RSS_USER_DATA = "RSS_USER_DATA" as const;

export const saveUserDataToStorage = (userDatas: userDatas) => {
  localStorage.setItem(RSS_USER_DATA, JSON.stringify(userDatas));
};

export const getUserDataFromStorage = (userData: userData) => {
  if (localStorage.getItem(RSS_USER_DATA) === null) return;
  const getUserDataRes = JSON.parse(localStorage.getItem(RSS_USER_DATA)!);

  switch (userData) {
    case "email":
      return getUserDataRes.email;
    case "refreshToken":
      return getUserDataRes.refreshToken;
    case "expiresIn":
      return getUserDataRes.expiresIn;
    case "all":
      return getUserDataRes;
    default:
      return "";
  }
};

export const removeUserDataFromStorage = () => {
  localStorage.removeItem(RSS_USER_DATA);
};
