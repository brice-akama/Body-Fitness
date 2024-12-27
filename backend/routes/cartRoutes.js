import express from 'express';
import { addToCart, updateCart, removeFromCart, getCart } from '../controllers/cartController.js'; // Correct import of all necessary functions
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = express.Router();

// Protect the routes with the authenticateUser middleware
router.post('/add-item', authenticateUser, addToCart); // Add item to cart
router.put('/update', authenticateUser, updateCart); // Use PUT for updating the cart
router.delete('/remove', authenticateUser, removeFromCart); 
// Add a new GET route for fetching cart details
router.get('/getCart', authenticateUser, getCart);

export default router;

