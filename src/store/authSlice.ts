import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logoutReducer: (state) => {
      state.isLoggedIn = false;
    },
    loginReducer: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;

export const { loginReducer, logoutReducer } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
