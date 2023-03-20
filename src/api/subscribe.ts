import uuid from "react-uuid";
import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { subscribeItem } from "../types/subscribe";

const getUserName = (email: string) => {
  return email?.split("@")[0];
};

export const FB_GetSubscribeList = async () => {
  const userName = getUserName(getUserDataFromStorage("email"));
  let userSubscribeList = await customDatabaseAxios.get(
    `/${userName}/subscribe_list.json`
  );
  return userSubscribeList.data;
};

export const FB_AddSubscribeItem = async (
  subscribItem: subscribeItem,
  subscribeList: subscribeItem[]
) => {
  const userName = getUserName(getUserDataFromStorage("email"));
  const updatedSubscribeList = [
    ...subscribeList!,
    { ...subscribItem, id: uuid(), enabled: true },
  ];
  return await customDatabaseAxios.put(
    `/${userName}/subscribe_list.json`,
    updatedSubscribeList
  );
};

export const FB_DeleteSubscribeItem = async (
  id: string,
  subscribeList: subscribeItem[]
) => {
  const userName = getUserName(getUserDataFromStorage("email"));
  const updatedSubscribeList = subscribeList?.filter((item) => item.id !== id);
  return await customDatabaseAxios.put(
    `/${userName}/subscribe_list.json`,
    updatedSubscribeList
  );
};

export const FB_ChangeActiveStatusOfSubscribeItem = async (
  id: string,
  subscribeList: subscribeItem[]
) => {
  const userName = getUserName(getUserDataFromStorage("email"));
  const updatedSubscribeList = subscribeList.map((item) => {
    if (item.id !== id) return item;
    return { ...item, enabled: !item.enabled };
  });
  return await customDatabaseAxios.put(
    `/${userName}/subscribe_list.json`,
    updatedSubscribeList
  );
};
