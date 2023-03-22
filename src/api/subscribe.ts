import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { subscribeItem } from "../types/subscribe";

export const FB_GetSubscribeList = async () => {
  let userSubscribeList = await customDatabaseAxios.get(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`
  );
  return userSubscribeList.data;
};

export const FB_UpdateSubscribeList = async (
  updatedSubscribeList: string | subscribeItem[]
) => {
  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`,
    updatedSubscribeList
  );
};
