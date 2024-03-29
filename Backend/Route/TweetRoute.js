import express from "express"
import { CreateTweet, DeleteTweet, GetTweets, LikeAndDislike,GetFollwingTweet } from "../Controllers/TweetController.js";
import isAuthenticated from "../Config/Auth.js";

const router = express.Router();
router.route("/create").post(isAuthenticated,CreateTweet)
router.route("/delete/:id").delete(DeleteTweet)
router.route("/like/:id").put(isAuthenticated,LikeAndDislike)
router.route("/alltweet/:id").get(isAuthenticated,GetTweets)
router.route("/followingtweet/:id").get(isAuthenticated,GetFollwingTweet)
export default router;