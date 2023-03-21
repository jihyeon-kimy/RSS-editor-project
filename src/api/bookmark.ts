import uuid from "react-uuid";
import { customDatabaseAxios } from "../lib/axios";
import { getUserDataFromStorage } from "../lib/token";
import { bookmarkItem } from "../types/bookmark";

export const FB_GetBookmarkList = async () => {
  let userSubscribeList = await customDatabaseAxios.get(
    `/${getUserDataFromStorage("email")}/like.json`
  );
  return userSubscribeList.data;
};

export const FB_GetBookmarkItem = async (id: number) => {
  let userSubscribeList = await customDatabaseAxios.get(
    `/${getUserDataFromStorage("email")}/like.json`
  );
  return userSubscribeList.data[id];
};

export const FB_AddBookmarkItem = async (post: any) => {
  const bookmarkList = await FB_GetBookmarkList();
  const filteredPost = {
    id: uuid(),
    title: post?.title,
    author: post?.creator || post?.author,
    date: post?.isoDate?.substr(0, 10),
    summary: post?.["content:encodedSnippet"] || post?.contentSnippet,
    content: post?.["content:encoded"] || post?.content,
    link: post?.link,
  };

  let updatedBookmarkList;
  if (bookmarkList === null) {
    updatedBookmarkList = [filteredPost];
  } else {
    const checkSamePost = bookmarkList.filter(
      (item: any) => item.link === filteredPost.link
    );
    if (checkSamePost.length !== 0) {
      console.log("동일한 피드가 북마크에 존재합니다.");
      return;
    }
    updatedBookmarkList = [...bookmarkList, filteredPost];
  }

  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/like.json`,
    updatedBookmarkList
  );
};

export const FB_DeleteBookmarkItem = async (id: string, bookmarkList: bookmarkItem[]) => {
  const updatedBookmarkList = bookmarkList?.filter((item) => item.id !== id);

  return await customDatabaseAxios.put(
    `/${getUserDataFromStorage("email")}/like.json`,
    updatedBookmarkList
  );
};
