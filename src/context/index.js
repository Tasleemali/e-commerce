"use client"

import { createContext, useState } from "react";


export const GlobalContext = createContext(null)


export default function GlobalState({children}){

    const[showNavModel , setShowNavModel]  = useState(false)
    const [isAuthUser , setIsAuthUser]  = useState(null)
    const [isAdminView ,setIsAdminView] = useState(null)
    const [cartItems ,setCartItems] =useState([])
          

// const add = (itemid ,size)=>{
//     let cartData  = structuredClone(cartItems)
//     if(cartData[itemid]){
//         if(cartData[itemid][size]){
//             cartData[itemid][size]+= 1
//         }else{
//             cartData[itemid][size] =1
//         }
//     }else{
//         cartData[itemid] ={}
//         cartData[itemid][size] =1
//     }
//     setCartItems(cartData)
// }


const addTocart  = (item ,size )=> {
    setCartItems((prev) => {
        const existingItems = prev.find((i)=> i._id === item._id) 

        if(existingItems){
            return prev.map((i)=> i._id === item._id? {...i, quantity:i.quantity + 1}: i)
        }

        return [...prev,{...item,size:size ,quantity:1}]
    })
   
};
 const reduce  =(item )=>{
    setCartItems((prev) => {

        const existingItems = prev.find((i)=> i._id === item._id) 

        if(existingItems){
            return prev.map((i)=> i._id === item._id? {...i, quantity:i.quantity - 1}: i)
        }

        return [...prev , {...item ,quantity:1}]
    })

 }
 
const removeCart =(_id) =>{
    setCartItems((prev)=> prev.filter((item)=>item._id !== _id)
)
}

   
    return (
        <GlobalContext.Provider value={{showNavModel , setShowNavModel , isAuthUser ,setIsAuthUser ,isAdminView ,setIsAdminView , cartItems ,addTocart ,removeCart ,reduce }}>
            {children}
        </GlobalContext.Provider>
    )
}