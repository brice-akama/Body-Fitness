import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the latest 3 blog posts
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogs/latest");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-lg p-4">
            {blog.image && (
              <img
                src={`http://localhost:4000${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h3 className="text-lg font-bold text-gray-700 mb-2">{blog.title}</h3>
            <p className="text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
            <button
              onClick={() => navigate(`/blog/${blog._id}`)}
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;


