import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";
import { postVerifyToken } from "../api/auth";
import {
  saveTokenToLocalStorage,
  getTokenToLocalStorage,
  removeTokenToLocalStorage,
} from "../lib/token";

export const asyncVerifyToken = createAsyncThunk(
  "authSlice/asyncVerifyToken",
  async () => {
    const verifyTokenRes = await postVerifyToken();
    return verifyTokenRes.data.refresh_token;
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: !!getTokenToLocalStorage(),
  },
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      removeTokenToLocalStorage();
    },
    login: (state, action) => {
      state.isLoggedIn = true;
      saveTokenToLocalStorage(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncVerifyToken.pending, (state) => {
      state.isLoggedIn = !!getTokenToLocalStorage();
    });
    builder.addCase(asyncVerifyToken.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      saveTokenToLocalStorage(action.payload);
    });
    builder.addCase(asyncVerifyToken.rejected, (state) => {
      state.isLoggedIn = false;
      removeTokenToLocalStorage();
    });
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
