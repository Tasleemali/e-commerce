
"use client"
import Navbar from '@/components/navbar'
import GlobalState from '@/context'
import React from 'react'
import Footer from '../footer'
import { BaggageClaim } from 'lucide-react'


function CommonLayout({children}) {
  return (
    <div>
        <GlobalState>
         
          <Navbar/>  
          {children}
        {/* <BaggageClaim className=' h-10 w-10 rounded-xl fixed bottom-20 right-28 bg-black text-white  '/> */}
     <Footer/>
         </GlobalState>
        
    </div>
    
  )
}
export default CommonLayout