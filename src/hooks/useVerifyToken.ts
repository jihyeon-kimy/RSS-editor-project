import { useCallback } from "react";
import { FB_ReNewToken } from "../api/token";
import { getUserDataFromStorage } from "../lib/token";
import useLogout from "./useAuth";

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTiem = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTiem - currentTime;

  return remainingDuration;
};

export const validateToken = async () => {
  const storedUserData = getUserDataFromStorage("all");

  // 1. localStorage에 토큰이나 유효시간이 없을 경우 early return
  if (storedUserData === "") return;

  const remainingTime = calculateRemainingTime(storedUserData?.expiresIn);
  // 2. 유효시간이 1분보다 작을 경우, refresh토큰으로 새로운 토큰 발급(refresh토큰 오류: 로그아웃)
  if (remainingTime <= 6000) {
    try {
      const verifyTokenRes = await FB_ReNewToken();
      const expirationTime = new Date(
        new Date().getTime() + +verifyTokenRes.data.expires_in * 1000
      );
      return {
        email: storedUserData.email, // 기존에 localStorage에 저장된 유저 정보
        refreshToken: verifyTokenRes.data.refresh_token, // 새로 발급된 refresh Token
        expiresIn: expirationTime.toString(), // 새로 계산된 남은 시간
      };
    } catch {
      return null;
    }
  }

  // 3. 유효시간이 1분보다 길 경우, 기존 값 유지
  return storedUserData;
};

const useVerifyToken = () => {
  const { logout } = useLogout();

  const checkTokenValidation = useCallback(async () => {
    const verifyRes = await validateToken();
    if (!verifyRes) {
      logout();
    }
  }, [logout]);
  return { checkTokenValidation };
};

export default useVerifyToken;
