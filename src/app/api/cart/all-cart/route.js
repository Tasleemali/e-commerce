import { seeitDB } from "@/database/seeitDB"
import Cart from "@/model/Cart"
import { NextResponse } from "next/server"

export const dunamic ="force-dynamic"


export async function GET(req) {
    try {
        await seeitDB()
        const {searchParams} = new URL(req.url)
        const id = searchParams.get("id")
  if(!id){
    return NextResponse({
           success:true,
           message: 'product addd sucss'
          }) 
  }

      const extractAllitems = await Cart.find( {userId: id} ).populate("userId").populate('productId')
if(extractAllitems){
    return NextResponse({
        success:true,
        data:extractAllitems
       }) 
}else{
    return NextResponse({
        success:false,
        message: 'go cart items',
        status:204
       }) 
}
}
    } catch (error) {
        
    }
}