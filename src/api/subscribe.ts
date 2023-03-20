import uuid from "react-uuid";
import SUBSCRIBE_LIST from "../lib/constants/defaultSubscribeList";
import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { subscribeItem } from "../types/subscribe";

const getUserName = (email: string) => {
  return email?.split("@")[0];
};

// 회원가입 완료 시, 유저의 기본 정보 저장
export const addNewUser = async (email: string) => {
  const userName = getUserName(email);
  return await customDatabaseAxios.put(`/${userName}.json`, {
    user_id: email,
    like: {},
    subscribe_list: SUBSCRIBE_LIST,
  });
};

export const getSubscribeList = async () => {
  const userName = getUserName(getUserDataFromStorage("email"));
  let userSubscribeList = await customDatabaseAxios.get(
    `/${userName}/subscribe_list.json`
  );
  return userSubscribeList.data;
};

export const addSubscribeItem = async (
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

export const deleteSubscribeItem = async (id: string, subscribeList: subscribeItem[]) => {
  const userName = getUserName(getUserDataFromStorage("email"));
  const updatedSubscribeList = subscribeList?.filter((item) => item.id !== id);
  return await customDatabaseAxios.put(
    `/${userName}/subscribe_list.json`,
    updatedSubscribeList
  );
};

export const changeActiveStatusOfSubscribeItem = async (
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
