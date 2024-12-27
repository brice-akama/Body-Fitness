import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  content: { type: String, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;
