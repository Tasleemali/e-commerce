import mongoose from "mongoose"
export async function cartDB() {
    let isConnected = false
    if(isConnected) return 'db is already connected'
    try {
        let connected = await mongoose.connect(process.env.MONGO_URC)
        console.log('db is connectd ')
        if( connected.connection.readyState == 1) isConnected = true
    } catch (error) {
        console.log(error)
    }
    
}