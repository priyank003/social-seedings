import { createSlice } from "@reduxjs/toolkit";
const likesSlice = createSlice({
  name: "likes",
  initialState: {
    photos: [],
  },
  reducers: {
    add: (state: any, action: any) => {
      const itemExists = state.photos.find(
        (item: any) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.photos.push(action.payload);
      }
    },
  },
});
export const { add } = likesSlice.actions;
export default likesSlice.reducer;
