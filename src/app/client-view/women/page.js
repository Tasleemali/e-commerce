

import { getDataAction } from '@/action'
import React from 'react'
import WomenProducts from './women-products/page'


  async function Women() {
 const womenitems = await getDataAction()
  return (
    <div>
  <WomenProducts womenitems={womenitems}/>
    </div>
  )
}

export default Women