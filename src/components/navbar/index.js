"use client"


 import seeit from "../navbar/logo.png"
 

import { logoutAction } from "@/action"
import { GlobalContext } from "@/context"
import { adminOption, navOption } from "@/utlis"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Fragment, useContext, useState } from "react"
import Image from "next/image"
import { CircleUser, LucideBaggageClaim } from "lucide-react"

const user = {
  role: 'sdj',
}


function Navitems({menubar ,setMenubar , isAuthUser , isAdminView ,router}) {
  return (
    <div className={` ${menubar?'' :'hidden'}  top-0  z-30  items-center justify-between w-full  md:flex  md:w-auto`}>
      <ul className=" bg-white flex flex-col p-4 absolute left-0 z-30 w-full h-lvh  md:h-auto md:relative   md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row 
       md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        {isAdminView ? adminOption.map((item) =>
           (<li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-8" 
           key={item.id}  onClick={()=>{router.push(item.path)}}>{item.label}</li>))
           
           : navOption.map((item) =>
            (<li
              onClick={()=>{router.push(item.path) ,setMenubar(false)}}
              className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-8" 
            key={item.id}>{item.label}</li>))},
<li>
{!isAdminView && isAuthUser ? <Fragment>
            <button  onClick={()=> router.push("/account")}   className={
                    "mt-1.5 inline-block md:hidden bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  } >Account</button>
            <button  onClick={()=> router.push("/cart-items")}   className={
                    "mt-1.5 hidden bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }>cart</button>
          </Fragment> : null}
</li>
      </ul>

    </div>
  )


}


function Navbar() {
const  router = useRouter()

const pathName = usePathname()
  const [menubar , setMenubar] = useState(false)
  const {isAuthUser ,setIsAuthUser} = useContext(GlobalContext)

    async function logoutbtn() {
      const res = await logoutAction()
      if(res?.success){
        alert("logout Successful")
        router.push("/login")
        setIsAuthUser(false)


      }
      
      
    }
            
    const isAdminView = pathName.includes("admin-view")
  return (
    <nav className='bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200 '>
      <div className=' max-w-screen-xl flex flex-wrap  z-30  items-center justify-between mx-auto p-4'>
        <div className=' flex items-center cursor-pointer'>
          {/* <span className='self-center text-2xl font-semibold whitespace-nowrap'>SeeIt</span> */}
         <Image  onClick={()=>router.push("/")} src={seeit} className=' w-[100px] max-w-[150px] self-center  font-semibold whitespace-nowrap' alt="logo"/>
        </div>
        <div className=" flex md:order-2 gap-2">
          {!isAdminView && isAuthUser ? <Fragment>
            <button  onClick={()=> router.push("/account")}   className={
                    "mt-1.5  hidden md:inline-block  px-5 py-3 text-xs font-medium upprcase tracking-wide "
                  } ><CircleUser className="w-30 h-30"/></button>
            <button  onClick={()=> router.push("/cart-items")}   className={
                    "mt-1.5 inline-block  px-5 py-3 text-xs font-medium upprcase tracking-wide "
                  }><LucideBaggageClaim/></button>
          </Fragment> : null}
          {
            user?.role === 'admin' ? (isAdminView ? (<button onClick={()=>router.push("/")}    className={
              "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
            }>client View</button>) : (<button  onClick={()=>router.push("/admin-view")}  className={
              "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
            }>Admin View</button>)) : null
          }
          {isAuthUser ? <button
          onClick={logoutbtn}
              className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }>Logout</button> :  <Link href="/login"> <button    className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }>Login</button></Link>}
{/* navbar logo */}
<button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={()=>setMenubar(!menubar)}
             
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </button>

        </div>

        <Navitems isAuthUser={isAuthUser} menubar={menubar} setMenubar={setMenubar} isAdminView={isAdminView} router={router} />
      </div>

    </nav>
  )
}

export default Navbar
