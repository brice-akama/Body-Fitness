import Cart from '../models/cartModel.js';
import Product from '../models/Product.js';
import jwt from 'jsonwebtoken';

export const addToCart = async (req, res) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { productId, quantity } = req.body;

    // Fetch product details
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find or create cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if product is already in cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to cart
      cart.items.push({
        productId,
        quantity,
        name: product.name,
        price: product.price,
        images: { mainImage: product.images.mainImage },
      });
    }

    // Save cart
    await cart.save();
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add item to cart', error });
  }
};
// Update cart item quantity
export const updateCart = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Update the quantity of the item in the cart
    cart.items[existingItemIndex].quantity = quantity;

    await cart.save();
    res.status(200).json({ message: 'Cart updated', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update cart', error });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (existingItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Remove the item from the cart
    cart.items.splice(existingItemIndex, 1);

    await cart.save();
    res.status(200).json({ message: 'Item removed from cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to remove item from cart', error });
  }
};
export const getCart = async (req, res) => {
  try {
    // Extract token from headers
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Fetch the user's cart
    const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price images');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch cart', error });
  }
};
