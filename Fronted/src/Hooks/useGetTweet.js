import axios from "axios";
import { TWEET_API_END_POINT } from "../Utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweet } from "../Redux/TweetSlice";

const useGetTweet = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const res = await axios.get(`${TWEET_API_END_POINT}/alltweet/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getAllTweet(res.data.tweet));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTweet();
  }, [id, dispatch]);
};
export default useGetTweet;
