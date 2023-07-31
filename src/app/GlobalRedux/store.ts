import { configureStore } from "@reduxjs/toolkit";
// Import your reducers
import likeReducer from "./likeSlice";
const store = configureStore({
  reducer: {
    likeHandler: likeReducer,
    // Add more reducers as needed
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
