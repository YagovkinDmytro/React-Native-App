import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsInfo: [],
};

// Створення slice для користувача
const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setCommentsInfo(state, action) {
      state.commentsInfo = action.payload;
    },
    clearCommentsInfo(state) {
      state.commentsInfo = [];
    },
  },
});

// Експорт дій для використання у компонентах
export const { setCommentsInfo, clearCommentsInfo } = commentsSlice.actions;

// Експорт ред'юсера для підключення до Store
export default commentsSlice.reducer;
