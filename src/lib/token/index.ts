const RSS_REFRESH_TOKEN_KEY = "RSS_REFRESH_TOKEN_KEY" as const;
const RSS_EXPIRATION_TIME = "RSS_EXPIRATION_TIME" as const;

interface userData {
  refreshToken: string;
  expiresIn: string;
}

export const saveUserDataToStorage = ({ refreshToken, expiresIn }: userData) => {
  localStorage.setItem(RSS_REFRESH_TOKEN_KEY, refreshToken);
  localStorage.setItem(RSS_EXPIRATION_TIME, expiresIn);
};

export const getRefreshTokenFromStorage = (): string => {
  return localStorage.getItem(RSS_REFRESH_TOKEN_KEY) || "";
};

export const getExpirationTimeFromStorage = (): string => {
  return localStorage.getItem(RSS_EXPIRATION_TIME) || "";
};

export const removeUserDataFromStorage = () => {
  localStorage.removeItem(RSS_REFRESH_TOKEN_KEY);
  localStorage.removeItem(RSS_EXPIRATION_TIME);
};
