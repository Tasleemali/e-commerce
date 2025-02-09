

import Products from "./client-view/all-products/products/page";

import { getDataAction } from '@/action'




 async  function Home() {

  
  const product = await getDataAction()

  return (
    <div>
      
      <Products product={product}/>
    </div>
  )
}
export default Home