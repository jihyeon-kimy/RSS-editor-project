export interface authFormValue {
  email: string;
  password: string;
}

export interface userDatas {
  email: string;
  refreshToken: string;
  expiresIn: string;
}

export type userData = "email" | "refreshToken" | "expiresIn" | "all";
