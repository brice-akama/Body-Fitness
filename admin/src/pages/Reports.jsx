import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this report?");
      if (confirm) {
        await axios.delete(`http://localhost:4000/api/reports/${id}`);
        setReports(reports.filter((report) => report._id !== id)); // Update state
        alert("Report deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting report:", error);
      alert("Failed to delete the report");
    }
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.type.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "All" || report.type === filterType;
    return matchesSearch && matchesType;
  });

  const headers = [
    { label: "ID", key: "_id" },
    { label: "Title", key: "title" },
    { label: "Type", key: "type" },
    { label: "Date", key: "date" },
    { label: "Status", key: "status" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Reports</h1>

      {/* Search and Filter */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or type"
          className="w-full p-2 border-gray-300 rounded-md"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border-gray-300 rounded-md"
        >
          <option value="All">All Types</option>
          <option value="Sales">Sales</option>
          <option value="User Activity">User Activity</option>
          <option value="Orders">Orders</option>
          <option value="Traffic">Traffic</option>
        </select>
      </div>

      {/* Report List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports List</h2>
        {filteredReports.length > 0 ? (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <tr key={report._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2">{report._id}</td>
                  <td className="border border-gray-300 p-2">{report.title}</td>
                  <td className="border border-gray-300 p-2">{report.type}</td>
                  <td className="border border-gray-300 p-2">{new Date(report.date).toLocaleDateString()}</td>
                  <td className="border border-gray-300 p-2">{report.status}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      onClick={() => handleDelete(report._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No reports available.</p>
        )}
      </div>

      {/* Export CSV Button */}
      <div className="mt-6 flex justify-end">
        <CSVLink
          data={filteredReports}
          headers={headers}
          filename={"reports.csv"}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Export to CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default Reports;
