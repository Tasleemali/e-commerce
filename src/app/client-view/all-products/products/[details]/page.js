
"use server"
import { getCurrentDataAction } from '@/action'
import AddCartButton from '@/components/addcartbtn'




async function Details({ params }) {
  const product = await getCurrentDataAction(params?.details)


  return (
    <div className=" bg-white py-4 sm:py-4">

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className='flex flex-wrap  justify-center gap-2 sm:gap-4 md:gap-4 lg:gap-2 items-start'   >


          <div className=' lg:w-[450px]'>
            <img className='w-[300px] lg:w-[400px]' src={product?.data?.imageUrl} />
          </div>


          <div className='lg:w-[450px]'>
            <div className=' pt-5'>
              <h1 className='font-medium text-3xl'>{product?.data?.name}</h1>
              <p className='text-gray-500' >{product?.data?.description}</p>

              <p>{product?.data?.category}</p>
            </div>
            <hr className='mt-5' />
            <div className='mt-5'>
              <p className='text-lg' >$<span className="line-through">{product?.data?.priceDrop}</span> <span className="text-red-500" >${product?.data?.price}</span></p>
              <p className='text-gray-500'>{product?.data?.deliveryInfo}</p>

            </div>
            <div className=' mt-5 inline-flex gap-5 '>
            
            </div>

            <div className='pt-5 w-full text-left md:w-auto'>

              <AddCartButton product={product && product?.data }   />

            </div>








          </div>
















        </div>
      </div>
    </div>
  )
}

export default Details
