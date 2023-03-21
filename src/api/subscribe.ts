import uuid from "react-uuid";
import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { subscribeItem } from "../types/subscribe";

export const FB_GetSubscribeList = async () => {
  let userSubscribeList = await customDatabaseAxios.get(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`
  );
  return userSubscribeList.data;
};

export const FB_AddSubscribeItem = async (
  subscribItem: subscribeItem,
  subscribeList: subscribeItem[]
) => {
  const updatedSubscribeList = [
    ...subscribeList!,
    { ...subscribItem, id: uuid(), enabled: true },
  ];
  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`,
    updatedSubscribeList
  );
};

export const FB_DeleteSubscribeItem = async (
  id: string,
  subscribeList: subscribeItem[]
) => {
  const updatedSubscribeList = subscribeList?.filter((item) => item.id !== id);
  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`,
    updatedSubscribeList
  );
};

export const FB_ChangeActiveStatusOfSubscribeItem = async (
  id: string,
  subscribeList: subscribeItem[]
) => {
  const updatedSubscribeList = subscribeList.map((item) => {
    if (item.id !== id) return item;
    return { ...item, enabled: !item.enabled };
  });
  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/subscribe_list.json`,
    updatedSubscribeList
  );
};
