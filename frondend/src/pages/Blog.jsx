import React, { useEffect, useState } from "react";
import axios from "axios";
import backyard from '../assets/workout6.webp'; // Hero image
import BlogCart from "../components/BlogCart";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/blogs");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[500px] lg:h-[720px]">
        <img
          src={backyard}
          alt="Hero Image"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.1)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Blog Post
          </h1>
        </div>
      </section>

      {/* Blog Cards */}
      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCart key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
