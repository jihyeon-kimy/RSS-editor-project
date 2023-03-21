import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import RSSParser from "rss-parser";
import { RootState } from ".";
import SUBSCRIBE_LIST from "../lib/constants/defaultSubscribeList";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const asyncGetPosts = createAsyncThunk("postSlice/asyncGetPosts", async () => {
  const parser = new RSSParser();
  let parsedPosts: any[] = [];

  for await (let subscribeItem of SUBSCRIBE_LIST) {
    if (!subscribeItem.enabled) continue;
    try {
      let parsedPost = await parser.parseURL(CORS_PROXY + subscribeItem.rssLink);
      parsedPosts = [...parsedPosts, ...parsedPost.items];
    } catch {
      console.log(
        `🚒삐뽀삐보🚒 ${subscribeItem.name} 피드 파싱 에러 발생! RSSLink 오타 혹은 CORS보안 이슈로 브라우저에 로드가 안되는 것인지 확인하세요!`
      );
    }
  }

  return parsedPosts;
});

interface postState {
  value: any[] | undefined;
  status: "Loading" | "Complete" | "Fail";
}

const initialState: postState = {
  value: [],
  status: "Loading",
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(asyncGetPosts.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(asyncGetPosts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "Complete";
    });
    builder.addCase(asyncGetPosts.rejected, (state) => {
      state.status = "Fail";
    });
  },
  reducers: {},
});

export const selectPosts = (state: RootState) => state.post.value;
export const selectStatus = (state: RootState) => state.post.status;

export default postSlice.reducer;
