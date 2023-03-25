import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRouter = () => {
  const router = useNavigate();

  return {
    currentPath: window.location.pathname,
    routeTo: useCallback((path: string) => router(path), [router]),
  };
};
