import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Media = () => {
  const [mediaList, setMediaList] = useState([]); // Initialize as an empty array
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch media files from the backend
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/media");
        if (Array.isArray(response.data)) {
          setMediaList(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setMediaList([]);
        }
      } catch (err) {
        console.error("Failed to fetch media:", err);
        toast.error("Failed to load media files.");
        setMediaList([]); // Ensure it defaults to an empty array
      }
    };

    fetchMedia();
  }, []);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Use "file" to match backend

    try {
      setIsUploading(true);
      const response = await axios.post("http://localhost:4000/api/media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedMedia = response.data;
      setMediaList((prev) => [...prev, uploadedMedia]); // Add new media to the list
      toast.success("File uploaded successfully!");
      setSelectedFile(null); // Reset file input
    } catch (error) {
      console.error("File upload failed:", error);
      toast.error("Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  // Handle file deletion
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;

    try {
      await axios.delete(`http://localhost:4000/api/media/${id}`);
      setMediaList((prev) => prev.filter((media) => media._id !== id)); // Remove deleted file from list
      toast.success("File deleted successfully!");
    } catch (error) {
      console.error("Failed to delete file:", error);
      toast.error("Failed to delete file. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Media Manager</h1>

      {/* Upload Section */}
      <form onSubmit={handleUpload} className="mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              isUploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.isArray(mediaList) && mediaList.length > 0 ? (
          mediaList.map((media) => (
            <div key={media._id} className="border rounded p-2 relative">
              <img
                src={media.url}
                alt={media.filename}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <p className="text-sm truncate">{media.filename}</p>
              <button
                onClick={() => handleDelete(media._id)}
                className="absolute top-1 right-1 text-white bg-red-500 rounded-full px-2 py-1"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No media files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Media;
