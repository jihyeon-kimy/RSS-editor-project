const RSS_TOKEN_KEY = "rss-token" as const;

export const saveTokenToLocalStorage = (TokenToLocalStorage: string) => {
  localStorage.setItem(RSS_TOKEN_KEY, TokenToLocalStorage);
};
export const getTokenToLocalStorage = (): string => {
  return localStorage.getItem(RSS_TOKEN_KEY) || "";
};

export const removeTokenToLocalStorage = () => {
  localStorage.removeItem(RSS_TOKEN_KEY);
};
