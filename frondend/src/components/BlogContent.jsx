import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

const BlogContent = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/blogs/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 mt-10">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 text-center">{post.title}</h1>
     
      {post.image && (
        <img
          src={`http://localhost:4000${post.image}`}
          alt={post.title}
          className="w-full h-48 object-cover mt-4 rounded"
        />
      )}
      <div className="mt-6 text-gray-700">
        {/* Rendering the HTML content safely */}
        <div
          className="prose prose-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />
      </div>
      <p className="text-gray-800 mt-4 text-center font-bold">By {post.author}</p>
    </div>
    
  </div>
  
  );
};

export default BlogContent;
