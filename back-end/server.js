import express from "express";
import app from "./app.js"


 const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server in ${process.env.DEV_MODE}`)
})