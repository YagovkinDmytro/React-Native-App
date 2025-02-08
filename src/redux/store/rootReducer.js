import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import postsReducer from "../reducers/postsSlice";
import commentsReducer from "../reducers/commentsSlice";
// імпортуйте інші ред'юсери

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  comments: commentsReducer,
  // додайте інші ред'юсери
});

export default rootReducer;
