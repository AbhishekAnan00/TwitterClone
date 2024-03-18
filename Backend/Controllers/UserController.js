import { User } from "../Model/UserSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
export const Register = async (req , res) => {
  try{
     const {name , username , email , password} = req.body;
     //validation
     if(!name || !username || !email || !password){
      return res.status(401).json({
        message : "all fields are required",
        success : false
      })
     }
     const user = await User.findOne({email});
     if(user){
      return res.status(401).json({
        message : "already exits email",
        success : false
      })
     }
     //hash use for strong pass to escape of hacker
     const hashedPassword = await bcryptjs.hash(password,16)
     //creating & varify each user
     await User.create({
      name,
      username,
      email,
      password : hashedPassword
     })
     return res.status(201).json({
      message : "account create successfully",
      success: true
     })
  }catch(err){
    console.error("error : " ,err);
  }

}
export const login = async (req , res) => {
  try {
    const {email , password} = req.body;
    //validation
    if(!email || !password){
     return res.status(401).json({
       message : "all fields are required",
       success : false
     })
    }
    const user = await User.findOne({email});
    if(!user){
     return res.status(401).json({
       message : "already exits user",
       success : false
     })
    }
    const isMatch = await bcryptjs.compare(user.password , password);
    if(!isMatch){
      return res.status(401).json({
        message : "incorrect email or password",
        success : false
      })
    }
    const tokenData = {
      userId : user._id
    }
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET ,{expiresIn:"1d"})
    return res.status(201).cookie("token" , token , {expiresIn:"1d" , httpOnly:true}).json({
      message: `welcome back ${user.name}`,
      success: true
    })
  } catch (error) {
    console.error("error :", error);
  }
}