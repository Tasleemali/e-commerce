

import React from 'react'
import { getDataAction } from '@/action'
import Products from './products/page'

 async function AllProducts() {
   const product = await getDataAction()

  return (
    <div>
      
      <Products product={product}/>
    </div>
  )
}

export default AllProducts
