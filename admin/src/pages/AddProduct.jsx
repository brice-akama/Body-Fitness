import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    quantity: '',
    images: { mainImage: '', thumbnailImages: [], relatedProducts: [] },
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('relatedProducts', formData.relatedProducts);

      formDataToSend.append('mainImage', formData.images.mainImage);
      formData.images.thumbnailImages.forEach((file) => {
        formDataToSend.append('thumbnailImages', file);
      });

      const response = await axios.post('http://localhost:4000/api/products/addProduct', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success(response.data.message || 'Product added successfully!');
      setFormData({
        category: '',
        name: '',
        price: '',
        quantity: '',
        images: { mainImage: '', thumbnailImages: [], relatedProducts: [] },
        description: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding product!');
    }
  };

  const handleFileChange = (e, parentKey, key) => {
    setFormData({
      ...formData,
      [parentKey]: {
        ...formData[parentKey],
        [key]: e.target.files[0],
      },
    });
  };

  const handleFileArrayChange = (e, index, parentKey, key) => {
    const updatedArray = [...formData[parentKey][key]];
    updatedArray[index] = e.target.files[0];
    setFormData({
      ...formData,
      [parentKey]: {
        ...formData[parentKey],
        [key]: updatedArray,
      },
    });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Image Uploads */}
        <div>
          <label className="block mb-2">Main Image</label>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, 'images', 'mainImage')}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
        </div>

        <div>
          <label className="block mb-2 mt-4">Thumbnail Images</label>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="mb-4">
              <label className="block mb-2">Thumbnail {index + 1}</label>
              <input
                type="file"
                onChange={(e) => handleFileArrayChange(e, index, 'images', 'thumbnailImages')}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleDescriptionChange}
            rows="10"
            className="w-full p-3 border rounded resize-none"
            placeholder="Enter a detailed description for the product..."
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
