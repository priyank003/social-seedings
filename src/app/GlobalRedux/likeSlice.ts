import { createSlice } from "@reduxjs/toolkit";
const likesSlice = createSlice({
  name: "likes",
  initialState: {
    photos: [],
  },
  reducers: {
    add: (state, action) => {
      const itemExists = state.photos.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.photos.push(action.payload);
      }
    },
  },
});
export const { add } = likesSlice.actions;
export default likesSlice.reducer;
