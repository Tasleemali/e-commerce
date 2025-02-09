"use client"
// import { addTocart } from '@/app/services/cart'
import { useState } from 'react'
import { GlobalContext } from '@/context'

import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
function AddCartButton({ product}) {
  const [size ,setSize ] = useState([])
  const { addTocart} = useContext(GlobalContext)
  const router = useRouter()
  const handlebtn = () => {


    addTocart(product,size)
    router.push("/cart-items")

  }

  
  console.log(size)
  return (
    <div>


      <div className='flex mb-5'>
      {product.sizes.map((item ,index)=>
               
                  (<button key={index} onClick={()=>setSize(item)} className= {`w-auto px-5 bg-white border-2 border-gray-200 ${size === item ? 'bg-red-500':'bg-black'}`  }>{item}</button>)
   
              
                
                )}
      </div>
      <Button onClick={handlebtn}> Add To Cart</Button>
    </div>
  )
}

export default AddCartButton
