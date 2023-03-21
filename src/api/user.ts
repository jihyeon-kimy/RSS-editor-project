import { customDatabaseAxios } from "../lib/axios";
import SUBSCRIBE_LIST from "../lib/constants/defaultSubscribeList";

// 회원가입 완료 시, 유저의 기본 정보를 firebase에 저장
export const FB_AddNewUser = async (email: string) => {
  const userName = email?.replace(".", "");
  return await customDatabaseAxios.put(`/${userName}.json`, {
    user_id: email,
    like: {},
    subscribe_list: SUBSCRIBE_LIST,
  });
};
