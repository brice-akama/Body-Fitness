import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    quantity: '',
    description: '',
    relatedProducts: '',
    mainImage: null,
    thumbnailImages: []
  });

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/products/listProducts');
      setProducts(response.data);
    } catch (error) {
      toast.error('Error fetching products!');
    }
  };

  // Handle editing product
  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      category: product.category,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      relatedProducts: product.images.relatedProducts.join(', '), // Convert array to string
      mainImage: null, // Clear main image for editing
      thumbnailImages: [] // Clear thumbnail images for editing
    });
  };

  // Handle file change (main image or thumbnail images)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'mainImage') {
      setFormData({ ...formData, mainImage: files[0] });
    } else if (name === 'thumbnailImages') {
      setFormData({ ...formData, thumbnailImages: Array.from(files) });
    }
  };

  // Handle product deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/deleteProduct/${id}`);
      toast.success('Product deleted successfully!');
      fetchProducts(); // Refresh the product list
    } catch (error) {
      toast.error('Error deleting product!');
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (for adding or editing)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('category', formData.category);
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('price', formData.price);
    formDataToSubmit.append('quantity', formData.quantity);
    formDataToSubmit.append('description', formData.description);
    formDataToSubmit.append('relatedProducts', formData.relatedProducts);

    if (formData.mainImage) {
      formDataToSubmit.append('mainImage', formData.mainImage);
    }

    formData.thumbnailImages.forEach((image, index) => {
      formDataToSubmit.append('thumbnailImages', image);
    });

    try {
      if (editProduct) {
        // Update existing product
        await axios.put(`http://localhost:4000/api/products/editProduct/${editProduct._id}`, formDataToSubmit);
        toast.success('Product updated successfully!');
      } else {
        // Add new product
        await axios.post('http://localhost:4000/api/products/addProduct', formDataToSubmit);
        toast.success('Product added successfully!');
      }

      fetchProducts(); // Refresh the product list
      setEditProduct(null); // Reset editing state
      setFormData({
        category: '',
        name: '',
        price: '',
        quantity: '',
        description: '',
        relatedProducts: '',
        mainImage: null,
        thumbnailImages: []
      });
    } catch (error) {
      toast.error('Error submitting form!');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {/* Product List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        <table className="table-auto w-full bg-white shadow-md">
          <thead>
            <tr>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Category</th>
              <th className="p-4 border">Price</th>
              <th className="p-4 border">Quantity</th>
              <th className="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="p-4 border">{product.name}</td>
                <td className="p-4 border">{product.category}</td>
                <td className="p-4 border">${product.price}</td>
                <td className="p-4 border">{product.quantity}</td>
                <td className="p-4 border">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Form for Add/Edit */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">{editProduct ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" encType="multipart/form-data">
          {/* Category */}
          <div>
            <label className="block mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          {/* Related Products */}
          <div>
            <label className="block mb-2">Related Products (comma separated IDs)</label>
            <input
              type="text"
              name="relatedProducts"
              value={formData.relatedProducts}
              onChange={handleInputChange}
              className="w-full p-3 border rounded"
            />
          </div>

          {/* Main Image */}
          <div>
            <label className="block mb-2">Main Image</label>
            <input
              type="file"
              name="mainImage"
              onChange={handleFileChange}
              className="w-full p-3 border rounded"
              accept="image/*"
            />
          </div>

          {/* Thumbnail Images */}
          <div>
            <label className="block mb-2">Thumbnail Images (multiple)</label>
            <input
              type="file"
              name="thumbnailImages"
              onChange={handleFileChange}
              className="w-full p-3 border rounded"
              accept="image/*"
              multiple
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded mt-4"
          >
            {editProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageProduct;
