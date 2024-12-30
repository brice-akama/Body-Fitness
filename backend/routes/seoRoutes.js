import { Router } from 'express';
import mongoose from 'mongoose';
import Seo from '../models/seo.js'; // Adjust path based on your project structure

const router = Router();

// Fetch SEO data by product ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid product ID format' });
    }

    // Convert ID to ObjectId
    const productId = new mongoose.Types.ObjectId(id);

    // Fetch SEO data
    const seoData = await Seo.findOne({ productId });
    if (!seoData) {
      return res.status(404).json({ error: 'SEO data not found' });
    }

    res.status(200).json(seoData);
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
