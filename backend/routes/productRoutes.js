import express from 'express';
import multer from 'multer';
import path from 'path';
import Product from '../models/Product.js';


const router = express.Router();

// Setup file storage for images using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/addProduct', upload.fields([
  { name: 'mainImage' },
  { name: 'thumbnailImages' },
]), async (req, res) => {
  const { category, name, price, quantity, description } = req.body;
  
  const mainImage = req.files['mainImage'] ? req.files['mainImage'][0].path : '';
  const thumbnailImages = req.files['thumbnailImages'] ? req.files['thumbnailImages'].map(file => file.path) : [];

  try {
    // Step 1: Create the new product
    const newProduct = new Product({
      category,
      name,
      price,
      quantity,
      description,
      images: { mainImage, thumbnailImages },
       // Link to the SEO data
    });

    // Step 2: Find related products (for example, by matching category)
    const relatedProducts = await Product.find({ category }).limit(3); // You can change the limit as needed

    // Step 3: Add related products to the new product
    newProduct.images.relatedProducts = relatedProducts.map(product => product._id);

    // Step 4: Save the new product
    await newProduct.save();

    res.status(201).json({
      message: 'Product added successfully!',
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding product',
      error: error.message,
    });
  }
});

// Edit product route
router.put('/editProduct/:id', upload.fields([
  { name: 'mainImage' },
  { name: 'thumbnailImages' },
]), async (req, res) => {
  const { category, name, price, quantity, description, relatedProducts } = req.body;
  const { id } = req.params;

  const updateData = {
    category,
    name,
    price,
    quantity,
    description,
    relatedProducts: relatedProducts.split(','),
  };

  if (req.files['mainImage']) {
    updateData.images = { ...updateData.images, mainImage: req.files['mainImage'][0].path };
  }

  if (req.files['thumbnailImages']) {
    updateData.images.thumbnailImages = req.files['thumbnailImages'].map(file => file.path);
  }

  try {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
    res.json({ message: 'Product updated successfully!', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product route
router.delete('/deleteProduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// List all products route
router.get('/listProducts', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// POST route for fetching related products
router.post("/related", async (req, res) => {
  try {
    const { ids } = req.body; // Expecting an array of product IDs
    const relatedProducts = await Product.find({ _id: { $in: ids } });
    res.json(relatedProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch related products" });
  }
});
// Route to get a single product by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id); // Use the correct model method

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
