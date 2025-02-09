"use client"



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
function Products({ product }) {
  const router = useRouter()
  console.log(product)
  return (
    <div className=" bg-white py-4 sm:py-4">

      <div className="mx-auto max-w-screen-xl px-4 sm:px-5 lg:px-8 ">
        <div className=" px-5 mt-5 grid grid-cols-2 gap-2 items-start lg:grid-cols-4 lg:gap-8 place-items-center  lg:mt-16">



          {product?.data.map((item) => <div key={item._id} className=" mt-2 pt-2  border-2 border-gray-100 rounded-md shadow-lg"  >


            <CardContent onClick={() => router.push(`/client-view/all-products/products/${item._id}`)}>

              <div className="grid w-full items-center  ">

                <div className="flex flex-col space-y-1.5">

                  <img className="w-[100px]  sm:w-[150px] md:w-[300px]" src={item.imageUrl} />
                  <h1>{item.name}</h1>

                  <CardDescription className='h-10 w-[100px]  sm:w-[150px] md:w-[300px]" overflow-hidden overflow-x-hidden'>{item.description}</CardDescription>


                  <p >$<span className="line-through">{item.priceDrop}</span> <span className="text-red-500" >${item.price}</span></p>

                </div>
              </div>

            </CardContent>







          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Products
