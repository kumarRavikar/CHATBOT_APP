import express from "express";
import app from "./app.js"
import connectDB from "./db/databaseConfig.js";


 const PORT = process.env.PORT || 8080
 connectDB();
app.listen(PORT,()=>{
    console.log(`Server in ${process.env.DEV_MODE}`)
})