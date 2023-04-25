import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import RSSParser from "rss-parser";
import { RootState } from ".";
import { subscribeItem } from "../types/subscribe";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const parseFeed = async (url: string): Promise<any> => {
  const parser = new RSSParser();
  try {
    const parsedPost = await parser.parseURL(url);
    return parsedPost.items;
  } catch {
    const parsedPost = await parser.parseURL(CORS_PROXY + url);
    return parsedPost.items;
  }
};

export const getPostsReducer = createAsyncThunk(
  "postSlice/asyncGetPosts",
  async (subscribeList: subscribeItem[]) => {
    const currentTime = new Date().toString();
    let parsedPosts: any[] = [];

    for await (let subscribeItem of subscribeList) {
      if (!subscribeItem.enabled) continue;
      try {
        const parsedPost = await parseFeed(subscribeItem.rssLink);
        parsedPosts = [...parsedPosts, ...parsedPost];
      } catch {
        console.log(
          `🚒삐뽀삐보🚒 ${subscribeItem.name} 피드 파싱 에러 발생! RSSLink 오타 혹은 CORS보안 이슈로 브라우저에 로드가 안되는 것인지 확인하세요!`
        );
      }
    }

    return { parsedPosts, lastUpdated: currentTime };
  }
);

interface postState {
  value: any[] | undefined;
  status: "Loading" | "Complete" | "Fail";
  lastUpdated: string;
}

const initialState: postState = {
  value: [],
  status: "Loading",
  lastUpdated: "",
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPostsReducer.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(getPostsReducer.fulfilled, (state, action) => {
      state.value = action.payload.parsedPosts;
      state.lastUpdated = action.payload.lastUpdated;
      state.status = "Complete";
    });
    builder.addCase(getPostsReducer.rejected, (state) => {
      state.status = "Fail";
    });
  },
  reducers: {},
});

export const selectPosts = (state: RootState) => state.post.value;
export const selectStatus = (state: RootState) => state.post.status;
export const selectLastUpdated = (state: RootState) => state.post.lastUpdated;

export default postSlice.reducer;
