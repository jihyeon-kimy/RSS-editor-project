import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    // 로그인 실패 시
    logoutReducer: (state) => {
      state.isLoggedIn = false;
    },
    // 로그인 성공시
    loginReducer: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;

export const { loginReducer, logoutReducer } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
