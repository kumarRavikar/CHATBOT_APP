import express from "express";
import { loginUser, logOutUser, registerUser } from "../controller/user.controller.js";
import { userAuthMiddleware } from "../middlewares/userAuth.middleware.js";

const userRouter = express.Router();


userRouter.post("/user/register", registerUser)
userRouter.post("/user/login",loginUser)
userRouter.get("/user/logout",userAuthMiddleware, logOutUser)
export default userRouter