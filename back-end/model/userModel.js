import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String, required:[true, "Name is required"]},
    email:{type:String, required:[true, "Email is required"], unique:true},
    password:{type:String, required:[true, "password is required"], minLenght:4},
    customerId:{type:String, default:""},
    subscription:{type:String, default:""}
})




 const UserModel = mongoose.model("User", userSchema)
 export default UserModel;