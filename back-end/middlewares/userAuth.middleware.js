 import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const userAuthMiddleware = (req, res, next)=>{
   try {
     const token = req.cookies.token;

     if(!token){
        return res.status(401).json({
            success:false,
            message:"UnAuthorized access !! Please login first"
        })
     }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
   } catch (error) {
      return res.status(401).json({
         success:false,
         message:"Invalid or expire token"
      })
   }
    
}