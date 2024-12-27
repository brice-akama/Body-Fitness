import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/orders/orders');
        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch orders.');
        setLoading(false);
        toast.error('Failed to fetch orders.'); // Error toast
      }
    };

    fetchOrders();
  }, []);

  // Handle the delete action
  const handleDelete = async (orderId) => {
    try {
      const confirmation = window.confirm('Are you sure you want to delete this order?');
      if (!confirmation) return;

      await axios.delete(`http://localhost:4000/api/orders/orders/${orderId}`);
      setOrders(orders.filter(order => order._id !== orderId)); // Update the orders list after deletion
      toast.success('Order deleted successfully!'); // Success toast
    } catch (err) {
      setError('Failed to delete order.');
      toast.error('Failed to delete order.'); // Error toast
    }
  };

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customer Orders</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Products</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th> {/* Added a column for actions */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.shippingInfo ? `${order.shippingInfo.firstName} ${order.shippingInfo.lastName}` : 'N/A'}
                </td>
                <td className="border border-gray-300 px-4 py-2">{order.shippingInfo?.email}</td>
                <td className="border border-gray-300 px-4 py-2">{order.shippingInfo?.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{order.shippingInfo?.address}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.productName} - ${item.price.toFixed(2)} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${order.grandTotal ? order.grandTotal.toFixed(2) : '0.00'}
                </td>
                <td className="border border-gray-300 px-4 py-2 capitalize">{order.status || 'Pending'}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Delete Button */}
                  <button 
                    onClick={() => handleDelete(order._id)} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
