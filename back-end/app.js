import express from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js";
dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api",userRouter)


export default app;