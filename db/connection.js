import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL= process.env.MONGO_URL

const connection = mongoose.connect("mongodb+srv://sofia:123@cluster0.bo29mtp.mongodb.net/"
,{useNewUrlParser:true,useUnifiedTopology:true})

export {connection}