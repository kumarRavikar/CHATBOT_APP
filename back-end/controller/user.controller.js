import UserModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
   try {
     const {name, email, password} = req.body;
     if(!email || !password || !name){
        return res.status(400).json({
             success:false,
             message:"Please Enter valid data"
         })
     }
     const userExist = await UserModel.findOne({email});
     if(userExist){
        return res.status(400).json({
            success:false,
            message:"User Already exist"
        })
     }
     const hasPassword = await bcrypt.hash(password,10)
     console.log(`hasPasswors:-- ${hasPassword}`)
     const user = await UserModel.create({
         name,
         email,
         password:hasPassword
     })
     return res.status(200).json({
         success:true,
         user
     })
   } catch (error) {
     return res.status(500).json({
        success:false,
        message:`Internal server error:- ${error} `
      })
   }
}
export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Email and password are required"
            })
        }
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User Not Found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Password does not match !!"
            })
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        res.cookie("token",token);
        return res.status(200).json({
            success:true,
            message:"User Logged In",
            user:{
                id:user._id,
                email:user.email
            }
        })
       
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:`Internal Server Error :- ${error}`
        })
    }
}