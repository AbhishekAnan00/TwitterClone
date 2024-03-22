import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUser: null,
    profile:null
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    getProfile: (state,action) => {
      state.profile = action.payload
    }
  },
});

export const { getUser, getOtherUser,getProfile } = UserSlice.actions;
export default UserSlice.reducer;
