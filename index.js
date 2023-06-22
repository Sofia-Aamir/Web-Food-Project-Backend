import express from 'express'
import {connection} from './db/connection.js'
import productRouter from './routes/product.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes.js';


const app=express()



connection
.then(()=>{
    console.log("Connected")
})
.catch((e)=>{
    console.log(e)
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({extented: true}))
app.use(cors())
app.use('/product',productRouter)
// app.use('/register',registerUser)
app.use('/user',userRouter)


app.listen(5000,()=>{
    console.log("Server is running")
})

