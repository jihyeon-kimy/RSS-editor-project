import { useEffect } from "react";
import useVerifyToken from "../../hooks/useVerifyToken";

interface AuthorizationProps {
  children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  const { checkTokenValidation } = useVerifyToken();

  useEffect(() => {
    checkTokenValidation();
  }, [checkTokenValidation, children]);

  return <>{children}</>;
};

export default Authorization;
