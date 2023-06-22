import mongoose from 'mongoose'

const users=mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    }
)

const usersModel=mongoose.model('user',users)

export {usersModel}