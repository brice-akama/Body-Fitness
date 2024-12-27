import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [filter, setFilter] = useState("Last 6 Months");
  const [stats, setStats] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [salesData, setSalesData] = useState({ labels: [], sales: [] });
  const [performanceMetrics, setPerformanceMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [statsRes, activitiesRes, salesRes, metricsRes] = await Promise.all([
          fetch("http://localhost:4000/api/dashboard/stats"),
          fetch("http://localhost:4000/api/dashboard/recent-activities"),
          fetch(`http://localhost:4000/api/dashboard/sales-overview?period=${filter}`),
          fetch("http://localhost:4000/api/dashboard/performance-metrics"),
        ]);

        const statsData = await statsRes.json();
        const activitiesData = await activitiesRes.json();
        const salesData = await salesRes.json();
        const metricsData = await metricsRes.json();

        // Validate and process stats
        if (!Array.isArray(statsData)) throw new Error("Invalid data format for stats");
        setStats(statsData);

        // Validate recent activities
        setRecentActivities(Array.isArray(activitiesData) ? activitiesData : []);

        // Validate sales data structure
        if (!salesData.labels || !salesData.sales) {
          throw new Error("Invalid data format for sales overview");
        }
        setSalesData(salesData);

        // Validate performance metrics
        setPerformanceMetrics(Array.isArray(metricsData) ? metricsData : []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  const lineChartData = {
    labels: salesData.labels,
    datasets: [
      {
        label: "Sales",
        data: salesData.sales,
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Top Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{stat.title}</h2>
            <p className={`text-2xl sm:text-3xl font-bold ${stat.color} mt-2 sm:mt-4`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="col-span-2 bg-white shadow-md rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-0">
              Sales Overview
            </h2>
            <select
              aria-label="Filter sales data"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-gray-600"
            >
              <option value="6">Last 6 Months</option>
              <option value="12">Last Year</option>
              <option value="36">Last 3 Years</option>
            </select>
          </div>
          <div className="relative" style={{ height: "250px" }}>
            {salesData.sales.length > 0 ? (
              <Line data={lineChartData} options={lineChartOptions} />
            ) : (
              <p className="text-center text-gray-500">No sales data available.</p>
            )}
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Recent Activities</h2>
          <ul className="mt-4 space-y-3 sm:space-y-4">
            {recentActivities.map((activity, index) => (
              <li key={index} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-gray-400`}
                >
                  {activity.icon || "?"}
                </div>
                <p className="text-sm sm:text-base text-gray-600">{activity.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700">Performance Metrics</h2>
        <ul className="mt-4 space-y-3 sm:space-y-4">
          {performanceMetrics.map((metric, index) => (
            <li key={index} className="flex justify-between items-center">
              <p className="text-sm sm:text-base text-gray-600">{metric.name || "Metric"}</p>
              <p className="text-sm sm:text-base font-bold text-gray-700">{metric.value || 0}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
