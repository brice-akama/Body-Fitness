import express from 'express';
import { adminLogin } from '../controllers/authController.js'; // Import adminLogin

const router = express.Router();



// Admin Login Route (For Admin)
router.post('/admin/login', adminLogin); // New route for admin login

export default router;