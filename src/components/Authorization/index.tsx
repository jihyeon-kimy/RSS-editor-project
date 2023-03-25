import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { selectIsLoggedIn } from "../../store/authSlice";

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  const { routeTo } = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return routeTo("/login");
    }
  }, [isLoggedIn, routeTo]);

  if (!isLoggedIn) return <></>;

  return <>{children}</>;
};

export default Authorization;
