import mongoose from "mongoose";


const connectDB = async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log(`database connected :- ${mongoose.connection.host}`)
    } catch (error) {
        console.log("error from database connection :-" + error )
    }
}

export default connectDB;