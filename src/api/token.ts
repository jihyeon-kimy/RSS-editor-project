import axios from "axios";
import { getRefreshTokenFromStorage } from "../lib/token";

export const postReNewToken = async () => {
  return await axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_API_KEY}`,
    {
      grant_type: "refresh_token",
      refresh_token: getRefreshTokenFromStorage(),
    }
  );
};

// Refresh 토큰 응답 오류 코드
// TOKEN_EXPIRED: 사용자의 자격 증명이 더 이상 유효하지 않습니다. 사용자는 다시 로그인해야 합니다.
// USER_DISABLED: 관리자가 사용자 계정을 비활성화했습니다.
// USER_NOT_FOUND: 갱신 토큰에 해당하는 사용자를 찾을 수 없습니다. 사용자가 삭제되었을 가능성이 있습니다.
// API 키가 유효하지 않습니다. 유효한 API 키를 전달하십시오. (잘못된 API 키 제공)
// INVALID_REFRESH_TOKEN: 잘못된 새로 고침 토큰이 제공되었습니다.
// 잘못된 JSON 페이로드가 수신되었습니다. 알 수 없는 이름 \"refresh_tokens\": 쿼리 매개 변수를 바인딩할 수 없습니다. 요청 메시지에서 'refresh_tokens' 필드를 찾을 수 없습니다.
// INVALID_GRANT_TYPE: 지정된 부여 유형이 잘못되었습니다.
// MISSING_REFRESH_TOKEN: 새로 고침 토큰이 제공되지 않았습니다.
