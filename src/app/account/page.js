
"use server"
import { getlogedUserAction } from '@/action'
import React from 'react'

 async function Account() {
    const User = await getlogedUserAction();
    console.log(User);
  return (
    <div className='bg-white py-5 md:py-10'>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-5 lg:px-8 ' >
         <div className='' >
            <h1>User Profile</h1>
            <h1>{User?.data?.username}</h1>
            <p>{User?.data?.email}</p> 

         </div>
        </div>
      
    </div>
  );
}

export default Account
