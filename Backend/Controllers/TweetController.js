import { Tweet } from "../Model/TweetSchema.js";

export const CreateTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if ((!description, !id)) {
      return res.status(401).json({
        message: "fields are required",
        success: false,
      });
    }
    await Tweet.create({
      description,
      userId: id
    }) 
    return res.status(201).json({
      message:"Tweet Created Successfully",
      success:true
    })
  } catch (error) {
    console.error("error :", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const DeleteTweet = async (req,res) => {
  try {
    const {id} = req.params;
    await Tweet.findByIdAndDelete(id);
    return res.status(201).json({
      message:"Tweet Deleted Successfully",
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
export const LikeAndDislike = async (req,res) => {
  try {
    const LoggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId)
    if(tweet.like.includes(LoggedInUserId)){
      //dislike
      await Tweet.findByIdAndUpdate(tweetId, {$pull:{like:LoggedInUserId}})
      return res.status(200).json({
        message:"user disliked your tweet"
      })
    }else{
      //like
      await Tweet.findByIdAndUpdate(tweetId,{$push:{like:LoggedInUserId}})
      return res.status(200).json({
        message:"user liked your tweet"
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