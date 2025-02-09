"use client"

import { loginAction } from '@/action'
import { GlobalContext } from '@/context'

import { inputlogin } from '@/utlis'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useContext, useState } from 'react'

function Login() {


  const router = useRouter()
  const [loginData ,setloginData] = useState(inputlogin)
  const {isAuthUser, setIsAuthUser} = useContext(GlobalContext)

async function loginbtn() {
  const result = await loginAction(loginData)
  console.log(result)
  if(result?.success){
    alert("login successfull")
      setIsAuthUser(true)
      setloginData('')
    router.push("/")
  }else{
    setIsAuthUser(false)
  }
}

  console.log(loginData)
  return (
    <div className='bg-white relative'>
      <div className=' flex flex-col items-center justify-between pr-10 pt-0 pl-10 pb-0 mt-8 mr-auto  xl:px-5 lg:flex-row'>
        <div className='flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row'>
          <div className='w-full mt-10 mr-0 ml-0 mb-0 relative max-2xl  lg:mt-0 lg:w-5/12'>
            <div className=' flex flex-col justify-start items-center pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl relative z-10 '>
              <p className='w-full font-medium text-center text-4xl font-serif'>
               Login
              </p>
                  
                <form action={loginbtn} className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
              
           <label className='flex flex-col'>
            email
            <input type='email' placeholder='email' 
            value={loginData.email}
            onChange={(e)=> setloginData({...loginData ,email:e.target.value})}
             className=' border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mr-0 mt-0 ml-0 bg-white border-gray-300 rounded-md '
             />
           </label> 
           
             <label className='flex flex-col'>
            password
            <input type='password' placeholder='password'
            value={loginData.password}
            onChange={(e)=> setloginData({...loginData ,password:e.target.value})}
           
             className=' border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-3 pb-3 pl-3 mr-0 mt-0 ml-0 bg-white border-gray-300 rounded-md '
             />
           </label>

           <button type='submit'
            className='  focus:outline-none focus:border-black w-full pt-2 pr-2 pb-2 pl-2 mr-0 mt-0 ml-0 bg-black text-white  rounded-md '>login</button>

                <p className='text-sky-500 text-center'> new to seeit? <Link href="/register"><span>SignUp</span></Link> </p>

                </form>



            


            </div>

          </div>
        </div>


      </div>
    

    </div>
  )
}

export default Login