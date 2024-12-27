import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {post.image && (
        <img
          src={`http://localhost:4000${post.image}`}
          alt={post.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 text-sm mt-2">By {post.author}</p>
        <Link
          to={`/blog/${post._id}`}
          className="mt-4 inline-block text-blue-500 hover:underline text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
