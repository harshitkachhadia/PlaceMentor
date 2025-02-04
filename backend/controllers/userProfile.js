import insighteModel from "../models/insighteModel.js"

const profile = async (req,res) => {
    const id = req.body.userId;
    const userData = await insighteModel.find({fromId:id});
    res.json({
        data:userData,
        success:true,
        message:"user found!!"
    })
    
}

export {profile}