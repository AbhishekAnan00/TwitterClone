import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweet: null,
  },
  reducers: {
    getAllTweet: (state, action) => {
      state.tweet = action.payload;
    },
  },
});
export const { getAllTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
