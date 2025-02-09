

import { getDataAction } from '@/action'
import React from 'react'
import KidsProducts from './kid-products/page'


async  function Kids() {
  const kidsProduct = await getDataAction()
  return (
    <div>
      <KidsProducts kidsProduct={kidsProduct}/>
    </div>
  )
}

export default Kids