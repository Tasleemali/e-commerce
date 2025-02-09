import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    category: String,
    sizes: Array,
    deliveryInfo: String,
    onSale: String,
    priceDrop: String,
    imageUrl: String,


})
const Item = mongoose.models.seeits || mongoose.model("seeits", UserSchema)

export default Item;