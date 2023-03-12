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
