import mongoose from 'mongoose';

// Cart Item Schema (Item inside the cart)
const CartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  images: {
    mainImage: { type: String, required: true },
    thumbnailImages: [String],
  }
});

// Cart Schema
const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [CartItemSchema]
}, { timestamps: true });

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;

