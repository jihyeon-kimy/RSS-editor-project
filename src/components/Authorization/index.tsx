import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { asyncVerifyToken } from "../../store/authSlice";

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization = ({ children }: AuthorizationProps) => {
  const { routeTo } = useRouter();
  const dispatch = useAppDispatch();

  const verifyLocalStorageToken = useCallback(async () => {
    const result = await dispatch(asyncVerifyToken());

    if (result.meta.requestStatus === "rejected") {
      return routeTo("/login");
    }
  }, [dispatch, routeTo]);

  useEffect(() => {
    verifyLocalStorageToken();
  }, []);

  return <>{children}</>;
};

export default Authorization;
