import express from "express"
import {BookMarks, Follow, GetOtherUser, GetProfile, Login, Logout, Register, UnFollow } from "../Controllers/UserController.js";
import isAuthenticated from "../Config/Auth.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login)
router.route("/logout").get(Logout)
router.route("/bookmark/:id").put(isAuthenticated,BookMarks)
router.route("/getprofile/:id").get(isAuthenticated,GetProfile)
router.route("/otheruser/:id").get(isAuthenticated,GetOtherUser)
router.route("/follow/:id").post(isAuthenticated,Follow)
router.route("/unfollow/:id").post(isAuthenticated,UnFollow)
export default router;