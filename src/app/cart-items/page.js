"use client"


import { GlobalContext } from "@/context"
import { useRouter } from "next/navigation"
import { useContext } from "react"



function Cart() {
  const { cartItems, removeCart ,addTocart,reduce ,isAuthUser } = useContext(GlobalContext)

 const router = useRouter()

 
  return (

    <div className="  bg-white py-5 md:py-5">
      <div className=" mx-auto max-w-screen-xl px-4 sm:px-5 lg:px-8 ">
        
     


          
          <div className=" flex flex-col justify-center items-center">

         
          <div className="w-full" >

          
            {cartItems.length === 0 ? (<p>cart is empty</p>) :
              cartItems.map((item) => (
                <div key={item._id} className="flex  justify-start items-start gap-2 md:gap-5 border-2 border-gray-50 ">
                  <img className="  w-[150px] md:w-[200px]" src={item.imageUrl} />

                  <div>
                    <h1 className="">{item.name}</h1>
                    <p className="text-red-400">Rs{item.price}</p>
                    <p>Size:{item?.size}</p>


                    <div className="flex-col justify-start "> <button onClick={()=>{ item.quantity > 1 ? reduce(item ): null}} >-</button>  <p className=" bg-slate-100"> {item.quantity}</p> <button onClick={()=>addTocart(item)}>+</button> </div>
                    <button onClick={() => removeCart(item._id)}>remove</button> 


                  </div>


                </div>
              ))

            }
            </div>
<div className=" w-full reletive bottom-0 mx-auto max-w-screen-xl px-4 sm:px-5 lg:px-8 ">

{
    isAuthUser?  (cartItems.length === 0 ? <button  className="bg-neutral-900 text-white w-full h-10 rounded-lg "> 
 cart is empty</button> : <button onClick={()=> router.push("/checkout")} className="bg-neutral-900 text-white w-full h-10 rounded-lg ">
CheckOut</button>)         :
<button onClick={()=> router.push("/login")}  className="bg-neutral-900 text-white w-full h-10 rounded-lg "> 
 login  to go checkout page</button>
  }

</div>
           
           
      
         




</div>
       

      </div>



    </div>



  )
}

export default Cart
