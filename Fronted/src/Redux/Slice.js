import {configureStore} from "@reduxjs/toolkit"
import UserSlice from "./UserSlice";
import TweetSlice from "./TweetSlice";

const store = configureStore({
  reducer:{
   user:UserSlice,
   tweet:TweetSlice
  }
})
export default store;