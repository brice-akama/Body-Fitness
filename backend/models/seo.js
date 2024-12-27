import mongoose from 'mongoose';

const seoSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, unique: true },
  metaTitle: { type: String, default: '' },
  metaDescription: { type: String, default: '' },
  metaKeywords: { type: String, default: '' },
  ogTitle: { type: String, default: '' },
  ogDescription: { type: String, default: '' },
  ogImage: { type: String, default: '' },
  robotsTxt: { type: String, default: '' },
  canonicalUrl: { type: String, default: '' },
  googleAnalyticsId: { type: String, default: '' },
  breadcrumbsEnabled: { type: Boolean, default: true },
  schemaMarkup: { type: String, default: '' },
  productDescription: { type: String, default: '' },
}, { timestamps: true });

const SeoModel = mongoose.model('Seo', seoSchema);

export default SeoModel;

