"use server"

import { connectDB } from "@/database/connectDB"
import User from "@/model/User"
import bcryptjs from "bcryptjs"
import { cookies } from "next/headers" 
import jwt from "jsonwebtoken"
import Cart from "@/model/Cart"
import Item from "@/model/Item"
import { seeitDB } from "@/database/seeitDB"
import axios from "axios"



// siggnup method
export async function signupAction(formData) {
    await connectDB()
    try {

        const {username , email ,password} = formData;
        const checkUser = await User.findOne({email})
        if(checkUser){
            return{
                success:false,
                message:'this email already exist'
            }
        }
        const  salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password, salt)
        const newUser = new User({username ,email ,password:hashpassword })
        const saved = await newUser.save()
        if (saved) {
            return {
            
                success: true,
                data: JSON.parse(JSON.stringify(saved))
            }
        }
        
    } catch (error) {
        return{
            success:false,
            message:'signup Data not getting'
        }
    }
    
}

// login method

export async function  loginAction(formData) {
    await connectDB()
    try {
        const { email, password } = formData;

        const checkUser = await User.findOne({ email })

        if (!checkUser) {
            return {
                success: false,
                message: "this email is inorrect plz try again"
            }
        }

        const checkpassword = await bcryptjs.compare(password, checkUser.password)
        if (!checkpassword) {
            return {
                success: false,
                message: "password is incorrect pl try again"
            }
        }

        const createTokenData = {
            id: checkUser._id,
            username: checkUser.username,
            email: checkUser.email,
            
        


        }
        const token = jwt.sign(createTokenData,"DEFAULT_KEY", { expiresIn: "1d" })

        // const getCookies = cookies();
        // getCookies.set(token, "token")
      const getCookies = cookies()
          getCookies.set("token" ,token);

          console.log("token not geting", getCookies)

        return {
            success: true,
            message: 'login successfull'
        }

        
    } catch (error) {
        return{
            success:false,
            message:'login Data not getting'
        }
    }
    
}

// logout method

export async function logoutAction() {
    try {
        const getCookies = cookies()
        getCookies.set("token", "")
        return {
            success: true,
            message: 'logout sucessfull'
        }
    } catch (error) {
        return{
            success:false,
            message:"logout data not getting"
        }
    }
    
}

// post data to db
export async function addDataAction(formData) {
    await seeitDB()
    try {
        const addData = await Item.create(formData)
        if(addData){
            return{
                success:true,
                message: 'data added succfully'
            }
        }else{
            return{
                success:false,
               message:'something  wrong occoured'
                       }
        }

    } catch (error) {
        return{
         success:false,
        message:'something went wrong'
                }
    }
    
}

// get data from db


export async function getDataAction() {
await seeitDB()
    try {
        const result = await Item.find()
        if(result){
            return{
                success:true,
                data: JSON.parse(JSON.stringify(result))
            }
        }



    } catch (error) {
        return{
            success:false,
            message:"data not getting"
        }
    }
    
}


// get single data from db


export async function getCurrentDataAction(currentId) {
    await seeitDB()
    try {
            const result = await Item.findById({_id:currentId})
            if(result){
                return{
                    success:true,
                    data: JSON.parse(JSON.stringify(result))
                }
            }else{
                return{
                    success:false,
                    message:"something erooor pl ry gaggain"
                }
            }
    } catch (error) {
        return{
            success:false,
            message:"data not getting"
        }
    }
    
}
// /cart functionality

// export async function AddtoCart(productId, userId) {
//     try {
//         const response = await fetch('/api/cart/add', {
//             userId,
//             productId,
//             quantity:1
//     })
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.log("errror getting", error)
 
//     }
    
// }

export async function addCartAction(formData) {
await seeitDB()
    try {
        const [userId ,productId ,quantity] = formData


        const product = await Item.findById({productId})
        if(!product){
            return{
                success:false,
                message:'product not found'
            }
        }
        let cart = await Cart.findOne({userId})
        if(!cart){
               cart = new Cart({userId, items:[]})
        }
const existingIndex = cart.items.find((item)=> item.productId.toString()=== productId)
if(existingIndex >= 0){
    cart .items[existingIndex].quantity += quantity
}else{
    cart.items.push({productId , quantity});
}
 const data =  await cart.save()

if(data){
    return{
        success:true,
        message:'product added'
    }
}


    } catch (error) {
        return{
            success:false,
            message:'product not get'
        }
    }
    
}


// user

export async function getlogedUserAction() {
    await connectDB()
    try {
        const getCookies = cookies()
      const token =  getCookies.get("token")?.value || "";
        if (token === "") {
            return {
                success: false,
                message: 'token is empty'
            }
        }
    const decodedToken = jwt.verify(token , "DEFAULT_KEY");
        const getuserinfo = await User.findOne({_id: decodedToken.id })
        if (getuserinfo) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(getuserinfo))
            }
        } else {
            return {
                success: false,
                data: 'something went wrong'

            }
        }
    } catch (error) {
        console.log("user not getting")
        return {
            success: false,
            message: 'loged user not geting'
        }
    }
}