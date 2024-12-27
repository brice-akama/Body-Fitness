import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react"; // Replacing ReactQuill with TinyMCE Editor
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
    status: "Draft",
  });
  const [selectedPost, setSelectedPost] = useState(null);
  const [editPost, setEditPost] = useState(null); // For editing
  const [search, setSearch] = useState("");

  // Fetch posts from the backend
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

  // Handle post creation
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/blogs", newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: "", content: "", author: "", image: "", status: "Draft" });
      toast.success("New blog post created!");
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create a new post. Please try again.");
    }
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:4000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setNewPost({ ...newPost, image: response.data.imagePath });
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image. Please try again.");
    }
  };

  // Handle post edit
  const handleEditPost = (post) => {
    setEditPost(post); // Open modal with selected post
  };

  // Handle saving changes to a post
  const handleSavePost = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/blogs/${editPost._id}`,
        editPost
      );
      setPosts(posts.map((post) => (post._id === editPost._id ? response.data : post)));
      setEditPost(null); // Close the modal
      toast.success("Post updated successfully!");
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Failed to update the post. Please try again.");
    }
  };

  // Handle delete post
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/api/blogs/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
      toast.success("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete the post. Please try again.");
    }
  };

  // Handle search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Blog Management</h1>

      {/* Create New Post Form */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Create New Post</h2>
        <form onSubmit={handleCreatePost}>
          <div>
            <label htmlFor="newTitle" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="newTitle"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="newContent" className="block text-gray-700 font-medium mb-2">
              Content
            </label>
            <Editor
              apiKey="a9q81rwokp1bh9keceb4zjt9xmmog2dvzs9rn6naf521e7l4"
              value={newPost.content}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "autoresize",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | bullist numlist | link image | preview | code",
              }}
              onEditorChange={(content) => setNewPost({ ...newPost, content })}
              required
            />
          </div>
          <div className="mt-12">
            <label htmlFor="newAuthor" className="block text-gray-700 font-medium mb-2">
              Author
            </label>
            <input
              type="text"
              id="newAuthor"
              value={newPost.author}
              onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="newImage" className="block text-gray-700 font-medium mb-2">
              Image
            </label>
            <input
              type="file"
              id="newImage"
              onChange={handleImageUpload}
              className="w-full border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="newStatus" className="block text-gray-700 font-medium mb-2">
              Status
            </label>
            <select
              id="newStatus"
              value={newPost.status}
              onChange={(e) => setNewPost({ ...newPost, status: e.target.value })}
              className="w-full border-gray-300 rounded-md p-2"
              required
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or author"
          className="w-full p-2 border-gray-300 rounded-md"
        />
      </div>

      {/* Posts List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">All Blog Posts</h2>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post._id} className="border-b p-4">
              <h3 className="text-lg font-bold">{post.title}</h3>
              {post.image && (
                <img
                  src={`http://localhost:4000${post.image}`}
                  alt={post.title}
                  className="w-full h-48 object-cover mt-2"
                />
              )}
              <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Status:</strong> {post.status}</p>
              <div className="mt-2">
                <button
                  onClick={() => handleEditPost(post)}
                  className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
      {editPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit Post</h2>
            <input
              type="text"
              value={editPost.title}
              onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
              className="w-full border-gray-300 rounded-md p-2 mb-4"
            />
            <Editor
              apiKey="a9q81rwokp1bh9keceb4zjt9xmmog2dvzs9rn6naf521e7l4"
              value={editPost.content}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "autoresize",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | bullist numlist | link image | preview | code",
              }}
              onEditorChange={(content) => setEditPost({ ...editPost, content })}
              className="mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSavePost}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditPost(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default BlogManagement;
