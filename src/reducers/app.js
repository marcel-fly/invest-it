import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos } from "../api";

const initialState = {
  list: [],
  page: 1,
  loading: false,
  error: null,
  darkMode: localStorage.getItem("dark-mode") === "true" || false,
};

export const fetchPhotosThunk = createAsyncThunk(
  "app/fetchPhotos",
  async (params) => {
    const response = await fetchPhotos(params);
    return response.images;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("dark-mode", state.darkMode.toString());
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPhotosThunk.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchPhotosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { incrementPage, toggleDarkMode } = appSlice.actions;
export default appSlice.reducer;
