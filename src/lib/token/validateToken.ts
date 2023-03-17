import { getExpirationTimeFromStorage, getRefreshTokenFromStorage } from ".";
import { postReNewToken } from "../../api/token";

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTiem = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTiem - currentTime;

  return remainingDuration;
};

export const validateToken = async () => {
  const storedRefreshToken = getRefreshTokenFromStorage();
  const storedExpirationDate = getExpirationTimeFromStorage();

  // 1. localStorage에 토큰이나 유효기간이 없을 경우 early return
  if (storedRefreshToken === "" || storedExpirationDate === "") return;

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  // 2. 남은 시간이 1분보다 작을 경우, refresh토큰으로 새로운 토큰 발급(refresh토큰 오류: 로그아웃)
  if (remainingTime <= 6000) {
    try {
      const verifyTokenRes = await postReNewToken();
      const expirationTime = new Date(
        new Date().getTime() + +verifyTokenRes.data.expiresIn * 1000
      );

      return {
        refreshToken: verifyTokenRes.data.refresh_token,
        expiresIn: expirationTime.toString(),
      };
    } catch {
      return null;
    }
  }

  // 3. 남은 시간이 1분보다 길 경우, 기존 값 유지
  return {
    refreshToken: storedRefreshToken,
    expiresIn: storedExpirationDate.toString(),
  };
};
