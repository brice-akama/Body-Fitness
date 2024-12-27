import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { authenticateAdmin } from '../middleware/authMiddleware.js'; // Import the middleware

const router = express.Router();

// Admin login route
router.post('/login', adminLogin);

// Example of a protected route that requires authentication
router.get('/dashboard', authenticateAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

export default router;
