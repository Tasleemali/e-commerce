import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.carts || mongoose.model("carts", CartSchema);
export default Cart;