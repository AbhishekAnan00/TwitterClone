import express from "express"
import dotenv from "dotenv"
import DatabaseConnection from "./Config/Database.js"
import cookieParser from "cookie-parser"
import userRoute from "./Route/UserRoute.js"
dotenv.config({
  path :".env"
})
DatabaseConnection()
const app = express()

//middlewares
app.use(express.urlencoded({
  extended :true
}))
app.use(express.json())
app.use(cookieParser())

//creating api
app.use("/api/v1/user" , userRoute);

app.get("/home" , (req , res) => {
  res.status(200).json({
    message : "coming from backend....."
  })
})

app.listen(process.env.PORT , () => {
  console.log(`server listen at port ${process.env.PORT}`);
}) 