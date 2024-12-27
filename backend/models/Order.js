import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      image: { type: String },
    },
  ],
  shippingInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  shippingFee: { type: Number, required: true },
  grandTotal: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // e.g., pending, completed, canceled
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
