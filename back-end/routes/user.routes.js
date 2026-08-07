import express from "express";
import { registerUser } from "../controller/user.controller.js";

const userRouter = express.Router();


userRouter.post("/user/register", registerUser)


export default userRouter