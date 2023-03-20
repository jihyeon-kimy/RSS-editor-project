import { customAuthAxios } from "../lib/axios";

interface formValues {
  email: string;
  password: string;
}

export const FB_Signup = async ({ email, password }: formValues) => {
  return await customAuthAxios.post(
    `/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};

export const FB_Login = async ({ email, password }: formValues) => {
  return await customAuthAxios.post(
    `/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
