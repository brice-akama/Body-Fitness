import express from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import Ticket from "../models/Ticket.js";

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments(); // Added total products
    const revenue = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
    ]);
    const pendingTickets = await Ticket.countDocuments({ status: "Pending" });

    const stats = [
      { id: 1, title: "Total Users", value: totalUsers, color: "text-blue-600" },
      { id: 2, title: "Total Orders", value: totalOrders, color: "text-green-600" },
      { id: 3, title: "Total Products", value: totalProducts, color: "text-yellow-600" }, // New stat
      { id: 4, title: "Revenue", value: `$${revenue[0]?.totalRevenue || 0}`, color: "text-purple-600" },
      { id: 5, title: "Pending Tickets", value: pendingTickets, color: "text-red-600" },
    ];

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch stats", error });
  }
});

// Get Sales Overview
router.get("/sales-overview", async (req, res) => {
  try {
    const { period = "6" } = req.query; // Period in months
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - parseInt(period));

    const salesData = await Order.aggregate([
      { $match: { createdAt: { $gte: cutoffDate } } },
      {
        $group: {
          _id: { $month: "$createdAt" }, // Group by month
          totalSales: { $sum: "$totalAmount" },
        },
      },
      { $sort: { _id: 1 } }, // Sort by month
    ]);

    // Generate labels and sales array
    const labels = salesData.map((data) => `Month ${data._id}`);
    const sales = salesData.map((data) => data.totalSales);

    res.json({ labels, sales });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sales overview", error });
  }
});


// Recent Activities
router.get("/recent-activities", async (req, res) => {
  try {
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(3);
    const recentOrders = await Order.find().sort({ createdAt: -1 }).limit(3);
    const recentProducts = await Product.find().sort({ createdAt: -1 }).limit(3);

    const activities = [
      ...recentUsers.map((u) => ({
        type: "User",
        message: `User ${u.firstName || "Unknown"} signed up.`,
        createdAt: u.createdAt,
      })),
      ...recentOrders.map((o) => ({
        type: "Order",
        message: `Order #${o.orderNumber} completed.`,
        createdAt: o.createdAt,
      })),
      ...recentProducts.map((p) => ({
        type: "Product",
        message: `Product ${p.name} added.`,
        createdAt: p.createdAt,
      })),
    ];

    // Sort activities by date (most recent first) and limit to 5
    res.json(activities.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch activities", error });
  }
});


// Performance Metrics
router.get("/performance-metrics", async (req, res) => {
  try {
    const avgRevenue = await Order.aggregate([
      { $group: { _id: null, avgRevenue: { $avg: "$totalAmount" } } },
    ]);

    const topCategories = await Product.aggregate([
      { $group: { _id: "$category", totalSales: { $sum: "$sales" } } },
      { $sort: { totalSales: -1 } },
      { $limit: 3 },
    ]);

    res.json({
      avgRevenue: avgRevenue[0]?.avgRevenue || 0,
      topCategories: topCategories.map((cat) => ({
        category: cat._id,
        sales: cat.totalSales,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch metrics", error });
  }
});


export default router;
