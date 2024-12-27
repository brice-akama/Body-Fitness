import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  images: {
    mainImage: { type: String, required: true },
    thumbnailImages: [String], // Array of URLs for thumbnail images
    relatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Related products by ID
  },
  description: { type: String, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], 
   // Reference to Review model
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
