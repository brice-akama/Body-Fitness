import express from 'express';
import { registerUser, loginUser, forgotPassword, getAllUsers, deleteUser } from '../controllers/userController.js';



const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
// Fetch all users (protected route, admin only)
router.get('/all',   getAllUsers);

// Delete a user by ID (protected route, admin only)
router.delete('/:id',   deleteUser);


export default router;
