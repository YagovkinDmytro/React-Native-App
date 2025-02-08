import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsInfo: [],
};

// Створення slice для користувача
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsInfo(state, action) {
      state.postsInfo = action.payload;
    },
    clearPostsInfo(state) {
      state.postsInfo = [];
    },
  },
});

// Експорт дій для використання у компонентах
export const { setPostsInfo, clearPostsInfo } = postsSlice.actions;

// Експорт ред'юсера для підключення до Store
export default postsSlice.reducer;
