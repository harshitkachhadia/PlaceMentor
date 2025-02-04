import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import userValidator from "../utils/validator.js";


//login user
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        // console.log(token);
        
        res.cookie("token",token)
        res.status(200).json({success:true,token})

    } catch (error) {
        console.log(error);
         res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res) => {
    try {
        //validating email formate & storng password
        const validationError = userValidator(req,res);
        if(validationError) return;
              
        const {name,email,password} = req.body;
        //cheking is user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user =  await newUser.save()
       const token = createToken(user._id)

       res.status(301).json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser}