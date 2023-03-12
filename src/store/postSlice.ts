import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import RSSParser from "rss-parser";
import { RootState } from ".";
import subscribeList from "../components/PostList/subscribeList";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const asyncGetPosts = createAsyncThunk("postSlice/asyncGetPosts", async () => {
  const parser = new RSSParser();
  let parsedPosts: any[] = [];

  for await (let subscribeItem of subscribeList) {
    if (!subscribeItem.enabled) return;

    let parsedPost = await parser.parseURL(CORS_PROXY + subscribeItem.rssLink);
    parsedPosts = [...parsedPosts, ...parsedPost.items];
  }

  return parsedPosts;
});

interface postState {
  value: any[] | undefined;
  status: string;
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
      state.status = "fail";
    });
  },
  reducers: {},
});

export const selectPost = (state: RootState) => state.post.value;

export default postSlice.reducer;
