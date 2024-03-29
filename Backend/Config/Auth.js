import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../Model/UserSchema.js";
dotenv.config({
  path: "../config/.env",
});
//use mongo connect for stop buffering 
const connect = "./MongoConnect.js"
const isAuthenticated = async (req, res, next) => {
  try {
    const conn = await connect()
    console.log(conn);
    obj = req.body
    const data = User(obj)
    const result = await data.save()
    res.json(result)
    const token  = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "user not authenticated",
        success: false,
      });
    }
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decode);
    req.user = decode.userId;
    next();
  } catch (error) {
    console.error(error);
  }
};
export default isAuthenticated;
