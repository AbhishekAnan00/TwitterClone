import express from "express"
import {BookMarks, Follow, GetOtherUser, GetProfile, Login, Logout, Register } from "../Controllers/UserController.js";
import isAuthenticated from "../Config/Auth.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login)
router.route("/logout").get(Logout)
router.route("/bookmark/:id").put(isAuthenticated,BookMarks)
router.route("/getprofile/:id").get(isAuthenticated,GetProfile)
router.route("/otheruser/:id").get(isAuthenticated,GetOtherUser)
router.route("/follow/:id").post(isAuthenticated,Follow)
export default router;