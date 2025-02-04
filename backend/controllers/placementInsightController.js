import insighteModel from "../models/insighteModel.js";

const createPlacementInsightData = async (req,res) => {
try {
    const {name,enrollmentNo,className,batch,company,date,salary,rollOffered,techStack,otherDetails} = req.body;
    // console.log(req);
    await insighteModel.create({
        fromId:req.body.userId,
        name,
        enrollmentNo,
        className,
        batch,
        company,
        date,
        salary,
        rollOffered,
        techStack,
        otherDetails
    })
    res.send({
        success:true,
        message:"data inserted successfully"
    })
    
} catch (error) {
    console.log("ERROR : ",error.message);
    return res.json({
        success:false,
        message:"ERROR"
    })
}

}

const getPlacementInsightData = async (req,res) => {
   try {
    const data = await insighteModel.find({});
    if(!data){
       return res.json({
            success:false,
            message:"no data available"
        })
    }else{
        res.json({
            data : data,
            success:true,
            message:"data get successfully"
        })
    }

    
   } catch (error) {
    return res.json({
        success:false,
        message:"ERROR"
    })
   }
}

const updatePlacementInsightData = async (req,res) => {
   try {
    const id = req.params.placementId;
    const fId = req.body.userId
    console.log(id);
    await insighteModel.findOneAndUpdate({_id:id},req.body)
    const user = await insighteModel.find({fromId:fId})
    res.json({
        data:user,
        success:true,
        message:"data updated successfully"
    })
    
   } catch (error) {
    return res.json({
        success:false,
        message:"ERROR"
    })
   }
}

const deletePlacementInsightData = async (req,res) => {
 try {
    const id = req.params.placementId;
    console.log("deleted id:",id);
    await insighteModel.findOneAndDelete({_id:id})
    const users = await insighteModel.find({})
    res.json({
        data: users,
        success:true,
        message:"deleted successfully!!"
    })
 } catch (error) {
    return res.json({
        success:false,
        message:"ERROR"
    })
 }
    
}

export {
    createPlacementInsightData,
    getPlacementInsightData,
    updatePlacementInsightData,
    deletePlacementInsightData
}