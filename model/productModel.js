import mongoose from 'mongoose'

const product=mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
)

const productModel=mongoose.model('product',product)

export {productModel}