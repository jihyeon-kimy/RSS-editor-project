import { customDatabaseAxios } from "../lib/axios";
import SUBSCRIBE_LIST from "../lib/constants/defaultSubscribeList";

export const FB_AddNewUser = async (email: string) => {
  const userName = email?.replace(".", "");
  return await customDatabaseAxios.put(`/${userName}.json`, {
    user_id: email,
    like: {},
    subscribe_list: SUBSCRIBE_LIST,
  });
};
