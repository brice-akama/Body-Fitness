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
    <div className="container mx-auto py-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-600 mt-2">By {post.author}</p>
        {post.image && (
          <img
            src={`http://localhost:4000${post.image}`}
            alt={post.title}
            className="w-full h-60 object-cover mt-4"
          />
        )}
        <div className="mt-6 text-gray-700">
          {/* Rendering the HTML content safely */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
