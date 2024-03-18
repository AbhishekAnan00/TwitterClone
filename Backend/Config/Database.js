import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"
dotenv.config({
  path :"../Config/.env"
})
const DatabaseConnection = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected to MongoDB");
  }).catch((err) => {
    console.error("error :" , err);
  })
}
export default DatabaseConnection