// import { seeitDB } from "@/database/seeitDB"
// import Item from "@/model/Item";
// import { NextResponse } from "next/server"




// export const dynamic = 'force-dynamic'

// export async function GET(req) {

// try {
//     await seeitDB()
//     const {searchParams} = new URL(req.url)
//     const getcurrentUserId = searchParams.get("id")
//     if(!getcurrentUserId){
//         return NextResponse.json({
//             success: false,
//             meg: 'user id is rquird'
//         })
//     }
//     const getData = await Item.find({_id : getcurrentUserId})
//     if(getData && getData.length){
//         return NextResponse.json({
//             success:true,
//           data: getData[0]
//         })
//     }else{
//         return NextResponse.json({
//             success:false,
//             status:204,
//             message:'not get'
//         })
//     }
// } catch (error) {
//     return NextResponse.json({
//         success:false,
//         message: "something went wrong"
//     })
// }

// }

  

