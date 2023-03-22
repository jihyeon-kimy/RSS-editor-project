import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { bookmarkItem } from "../types/bookmark";

export const FB_GetBookmarkList = async () => {
  let userSubscribeList = await customDatabaseAxios.get(
    `/${getUserDataFromStorage("email")}/like.json`
  );
  return userSubscribeList.data;
};

export const FB_UpdateSubscribeList = async (updatedBookmarkList: bookmarkItem[]) => {
  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/like.json`,
    updatedBookmarkList
  );
};
