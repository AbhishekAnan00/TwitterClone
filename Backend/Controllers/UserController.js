import { User } from "../Model/UserSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    //validation
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "already exits email",
        success: false,
      });
    }
    //hash use for strong pass to escape of hacker
    const hashedPassword = await bcryptjs.hash(password, 16);
    //creating & varify each user
    await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "account create successfully",
      success: true,
    });
  } catch (err) {
    console.error("error : ", err);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).json({
        message: "all fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "incorrect email or password",
        success: false,
      });
    }

    // Check if password is correct
    const isPasswordValid = bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // Generate JWT token
    const tokenData = {
      userId : user._id
    }
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "3d",
    });

    // Set token in cookie and send response
    res.cookie("token", token, { expiresIn: "3d", httpOnly: true });
    return res.status(200).json({
      message: `Welcome back ${user.name}!`,
      user,
      success: true,
    });
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const Logout = (req,res) => {
  return res.cookie("token" , "" , {expiresIn: new Date(Date.now())}).json({
    message: "user logged out successsfully",
    success:true

  })
}
export const BookMarks = async (req,res) => {
  try {
    const LoggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(LoggedInUserId);
    if(user.bookmarks.includes(tweetId)){
      //remove
      await User.findByIdAndUpdate(LoggedInUserId,{$pull:{bookmarks:tweetId}})
      return res.status(200).json({
        message:"removed from bookmarks"
      })
    }else{
      //bookmark
      await User.findByIdAndUpdate(LoggedInUserId,{$push:{bookmarks:tweetId}})
      return res.status(200).json({
        message:"saved to bookmarks"
      })
    }
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}
export const GetProfile = async (req,res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-password")
    return res.status(200).json({
      user
    })
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
} 

export const GetOtherUser = async (req, res) => {
   try {
    const {id} = req.params;
    const OtherUser = await User.find({
      _id:{$ne:id}}).select("-password")
    if(!OtherUser){
      return res.status(400).json({
        message:"user not found"
      })
    }
    return res.status(200).json({
      OtherUser
    })
   } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
   }
}

export const Follow = async (req,res) => {
  try {
    const LoggedInUserId = req.body.id 
    const userId = req.params.id 
    const LoggedInUser = await User.findById(LoggedInUserId) //nilesh
    const user = await User.findById(userId) //abhishek
    if(!user.followers.includes(LoggedInUserId)){
      await user.updateOne({$push:{followers:LoggedInUserId}})
      await LoggedInUser.updateOne({$push:{following:userId}})
    }else{
      return res.status(400).json({
        message:`user already follows ${user.name}`
      })
    }
    return res.status(200).json({
      message:`${LoggedInUser.name} just followed to ${user.name}`,
      success:true
    })
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
} 

export const UnFollow = async (req,res) => {
  try {
    const LoggedInUserId = req.body.id 
    const userId = req.params.id 
    const LoggedInUser = await User.findById(LoggedInUserId) //nilesh
    const user = await User.findById(userId) //abhishek
    if(!LoggedInUser.following.includes(userId)){
      await user.updateOne({$pull:{followers:LoggedInUserId}})
      await LoggedInUser.updateOne({$pull:{following:userId}})
    }else{
      return res.status(400).json({
        message:"user has not followed yet"
      })
    }
    return res.status(200).json({
      message:`${LoggedInUser.name} unfollow to ${user.name}`,
      success:true
    })
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}