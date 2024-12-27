// routes/contactRoutes.js
import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

// Handle Contact Form Submission
router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Thank you for your message. We will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting your message', error });
  }
});

// Fetch all contact messages (for admin use)
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find({});
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages', error });
  }
});

// Delete a contact message
router.delete('/messages/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting message', error });
  }
});


export default router;
