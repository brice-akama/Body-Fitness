import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }
    res.status(500).json({ message: "Error subscribing to newsletter", error });
  }
});

// Fetch all subscribers (for admin use)
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Newsletter.find({});
    res.status(200).json({ subscribers });
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscribers", error });
  }
});

// Unsubscribe from newsletter
router.delete('/unsubscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await Newsletter.findOneAndDelete({ email });
    if (!result) {
      return res.status(404).json({ message: "Email not found" });
    }
    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unsubscribing", error });
  }
});

export default router;
