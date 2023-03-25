import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { removeUserDataFromStorage, saveUserDataToStorage } from "../lib/token";
import { loginReducer, logoutReducer } from "../store/authSlice";
import { userDatas } from "../types/userData";
import { useAppDispatch } from "./useRedux";
import { useRouter } from "./useRouter";

const useAuth = () => {
  const { routeTo } = useRouter();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const logout = useCallback(() => {
    dispatch(logoutReducer());
    removeUserDataFromStorage();
    enqueueSnackbar("로그아웃 되었습니다.", {
      autoHideDuration: 2000,
      variant: "success",
    });
    routeTo("/login");
  }, []);

  const login = useCallback((userData: userDatas) => {
    dispatch(loginReducer());
    saveUserDataToStorage(userData);
    enqueueSnackbar("로그인 되었습니다.", {
      autoHideDuration: 2000,
      variant: "success",
    });
    routeTo("/");
  }, []);

  return { logout, login };
};

export default useAuth;
