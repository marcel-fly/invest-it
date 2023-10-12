import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  darkMode: localStorage.getItem("dark-mode") === "true" || false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("dark-mode", state.darkMode.toString());
    },
  },
});
export const { toggleDarkMode } = appSlice.actions;
export default appSlice.reducer;
