import express from "express";
import dotenv from "dotenv";
import DatabaseConnection from "./Config/Database.js";
import cookieParser from "cookie-parser";
import userRoute from "./Route/UserRoute.js";
import TweetRoute from "./Route/TweetRoute.js";
import cors from "cors";
dotenv.config({
  path: ".env",
});
DatabaseConnection();
const app = express();

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//creating api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", TweetRoute);

app.listen(process.env.PORT, () => {
  console.log(`server listen at port ${process.env.PORT}`);
});
