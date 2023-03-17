import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { saveUserDataToStorage, removeUserDataFromStorage } from "../lib/token";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      removeUserDataFromStorage();
    },
    login: (state, action) => {
      state.isLoggedIn = true;
      saveUserDataToStorage(action.payload);
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
