import express from 'express';
import Order from '../models/Order.js'; // Path to your Order model

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const orderData = req.body;

    const newOrder = new Order(orderData);
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// admin get the orders from the database
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.productId').lean(); // Populating product data
    const processedOrders = orders.map(order => ({
      _id: order._id.toString(),
      createdAt: order.createdAt ? new Date(order.createdAt).toISOString() : new Date().toISOString(),
      status: order.status || 'Pending',
      shippingInfo: {
        firstName: order.shippingInfo?.firstName || 'N/A',
        lastName: order.shippingInfo?.lastName || 'N/A',
        email: order.shippingInfo?.email || 'N/A',
        phone: order.shippingInfo?.phone || 'N/A',
        address: order.shippingInfo?.address || 'N/A',
      },
      items: Array.isArray(order.items)
        ? order.items.map(item => ({
            productName: item.name || 'Unknown Product',
            price: Number(item.price || 0),
            quantity: Number(item.quantity || 0),
          }))
        : [],
      totalPrice: Number(order.totalPrice || 0),
      shippingFee: Number(order.shippingFee || 0),
      grandTotal: Number(order.grandTotal || 0),
    }));
    res.status(200).json(processedOrders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
});

// DELETE route to delete an order by ID
router.delete('/orders/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ message: 'Failed to delete order', error });
  }
});


export default router;
