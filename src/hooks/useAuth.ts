import { useCallback } from "react";
import { removeUserDataFromStorage, saveUserDataToStorage } from "../lib/token";
import { loginReducer, logoutReducer } from "../store/authSlice";
import { userDatas } from "../types/userData";
import { useAppDispatch } from "./useRedux";
import { useRouter } from "./useRouter";

const useAuth = () => {
  const { routeTo } = useRouter();
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(logoutReducer());
    removeUserDataFromStorage();
    routeTo("/login");
  }, [dispatch, routeTo]);

  const login = useCallback(
    (userData: userDatas) => {
      dispatch(loginReducer());
      saveUserDataToStorage(userData);
      routeTo("/");
    },
    [dispatch, routeTo]
  );

  return { logout, login };
};

export default useAuth;
