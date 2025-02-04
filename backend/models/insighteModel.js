import mongoose from "mongoose";

const insighteSchema = new mongoose.Schema({
    fromId: {
       type:mongoose.Schema.Types.ObjectId,
       required:true
    },
    name : {
        type:String,
        required:true,
    },
    enrollmentNo : {
        type:String,
        required:true,
        unique:true
    },
    batch : {
        type:String,
        required:true,
    },
    className : {
        type:String,
        required:true,
    },
    company : {
        type:String,
        required:true,
    },
    date : {
        type:String,
        required:true,
    },
    salary : {
        type:String,
        required:true,
    },
    rollOffered : {
        type:String,
        required:true,
    },
    techStack : {
        type:String,
        required:true,
    },
    otherDetails : {
        type:String,
        required:true,
    },
})

const insighteModel = mongoose.model.insighteModel || mongoose.model("placement_insighte",insighteSchema)

export default insighteModel;