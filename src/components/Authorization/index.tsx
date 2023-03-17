import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { validateToken } from "../../lib/token/validateToken";
import { login, logout } from "../../store/authSlice";

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization = ({ children }: AuthorizationProps) => {
  const { routeTo } = useRouter();
  const dispatch = useAppDispatch();

  const verifyStorageToken = useCallback(async () => {
    const verifyRes = await validateToken();
    if (!verifyRes) {
      dispatch(logout());
      routeTo("/login");
    }
    dispatch(login(verifyRes));
  }, [dispatch, routeTo]);

  useEffect(() => {
    verifyStorageToken();
  }, [children]);

  return <>{children}</>;
};

export default Authorization;
