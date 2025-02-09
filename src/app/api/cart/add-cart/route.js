import { seeitDB } from "@/database/seeitDB"
import Cart from "@/model/Cart"
import Joi from "joi"
import { NextResponse } from "next/server"


export const dunamic ="force-dynamic"

const addTocart = Joi.object({
    userId: Joi.string().required(),
    productId: Joi.string().required()
})


export async function  POST(req) {
    
    try {
       await seeitDB() 
const data  =await req.json()
const {productId , userId}= data

const {error} = addTocart.validate({userId, productId})
   
if(error ){
    return NextResponse({
        success:false,
        message: error.details[0].message
       }) 
}
const iscurrentCartItemAlreadyExists =await Cart.find({
    
    productId: productId,
    userId:userId
})

if(iscurrentCartItemAlreadyExists){
    return NextResponse({
        success:false,
        message: 'product alredy exist'
       }) 
}
const saveproductCart = await Cart.create(data)
if(saveproductCart){  
    return NextResponse({
        success:true,
        message: 'product addd sucss'
       }) 
}else{
    return NextResponse({
        success:false,
        message: 'product failed to add'
       }) 
}

    } catch (error) {
       return NextResponse({
        success:false,
        message:"something went wrong plz  try again"
       }) 
    }
}