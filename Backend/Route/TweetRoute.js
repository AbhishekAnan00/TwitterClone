import express from "express"
import { CreateTweet, DeleteTweet, LikeAndDislike } from "../Controllers/TweetController.js";
import isAuthenticated from "../Config/Auth.js";

const router = express.Router();
router.route("/create").post(isAuthenticated,CreateTweet)
router.route("/delete/:id").delete(DeleteTweet)
router.route("/like/:id").put(isAuthenticated,LikeAndDislike)
export default router;