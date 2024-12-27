import express from 'express';
import Banner from '../models/Banner.js';

const router = express.Router();

// Add a new banner
router.post('/add', async (req, res) => {
  const { title, description, imageUrl, link, isActive } = req.body;

  try {
    const banner = new Banner({ title, description, imageUrl, link, isActive });
    await banner.save();
    res.status(201).json({ message: "Banner added successfully", banner });
  } catch (error) {
    res.status(500).json({ message: "Error adding banner", error });
  }
});

// Get all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find({});
    res.status(200).json({ banners });
  } catch (error) {
    res.status(500).json({ message: "Error fetching banners", error });
  }
});

// Update a banner
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedBanner = await Banner.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json({ message: "Banner updated successfully", banner: updatedBanner });
  } catch (error) {
    res.status(500).json({ message: "Error updating banner", error });
  }
});

// Delete a banner
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBanner = await Banner.findByIdAndDelete(id);
    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting banner", error });
  }
});

export default router;
