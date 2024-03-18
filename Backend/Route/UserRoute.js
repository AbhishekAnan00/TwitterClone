import express from "express"
import {login, Register } from "../Controllers/UserController.js";

const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(login)
export default router;