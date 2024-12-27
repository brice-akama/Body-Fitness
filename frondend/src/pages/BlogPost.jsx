import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/blogs/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching the blog post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
        
        <p className="text-gray-600 mt-2">By {post.author}</p>
        <img
          src={post.image || "https://via.placeholder.com/600"}
          alt={post.title}
          className="w-full h-auto object-cover mt-4 rounded"
        />
        <p className="mt-6 text-gray-700">{post.content}</p>
      </div>
      
    </div>
  );
};

export default BlogPost;
