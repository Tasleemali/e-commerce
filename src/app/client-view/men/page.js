

import React from 'react'
import MenProducts from './men-products/page'
import { getDataAction } from '@/action'


 async function Men() {
const menproducts = await getDataAction()

  return (
    <div>
      <MenProducts menproducts={menproducts}/>
    </div>
  )
}

export default Men