import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Toast notifications
import 'react-toastify/dist/ReactToastify.css';

const SeoSettingsPage = () => {
  const { id } = useParams(); // Extract product ID from the URL parameters
  const [seoData, setSeoData] = useState({
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    robotsTxt: '',
    canonicalUrl: '',
    googleAnalyticsId: '',
    breadcrumbsEnabled: true,
    schemaMarkup: '',
    productDescription: '',
  });

  // Fetch SEO settings for the specific product using its ID
  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/seo/${id}`);
        setSeoData(response.data); // Update the state with the fetched data
      } catch (error) {
        toast.error('Error fetching SEO data');
        console.error('Error fetching SEO data:', error);
      }
    };
    fetchSeoData();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSeoData({
      ...seoData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission to update the SEO data for the product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/seo/${id}`, seoData);
      toast.success('SEO settings updated successfully!');
    } catch (error) {
      toast.error('Error updating SEO settings!');
      console.error('Error updating SEO settings:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">SEO Settings for Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {/* Input fields */}
        {[
          {
            label: 'Meta Title',
            name: 'metaTitle',
            type: 'text',
            tooltip: 'Provide a concise title (50-60 characters) that includes primary keywords for better ranking.',
          },
          {
            label: 'Meta Description',
            name: 'metaDescription',
            type: 'textarea',
            large: true,
            tooltip: 'Write a compelling summary (150-160 characters) of the page to attract clicks in search results.',
          },
          {
            label: 'Meta Keywords',
            name: 'metaKeywords',
            type: 'text',
            tooltip: 'Enter relevant keywords separated by commas. Avoid keyword stuffing.',
          },
          {
            label: 'Open Graph Title',
            name: 'ogTitle',
            type: 'text',
            tooltip: 'Provide a title for social sharing (60-90 characters) that captures the essence of the page.',
          },
          {
            label: 'Open Graph Description',
            name: 'ogDescription',
            type: 'textarea',
            large: true,
            tooltip: 'Provide a description for social media (100-200 characters) to encourage engagement.',
          },
          {
            label: 'Open Graph Image URL',
            name: 'ogImage',
            type: 'text',
            tooltip: 'Enter the URL of an image (1200x630px) for optimal display on social platforms.',
          },
          {
            label: 'Robots.txt',
            name: 'robotsTxt',
            type: 'text',
            tooltip: 'Specify rules for web crawlers (e.g., "Disallow: /admin") to control indexing.',
          },
          {
            label: 'Canonical URL',
            name: 'canonicalUrl',
            type: 'text',
            tooltip: 'Enter the preferred URL to prevent duplicate content issues.',
          },
          {
            label: 'Google Analytics ID',
            name: 'googleAnalyticsId',
            type: 'text',
            tooltip: 'Provide the tracking ID (e.g., UA-12345678-1) to monitor website traffic.',
          },
          {
            label: 'Schema Markup',
            name: 'schemaMarkup',
            type: 'textarea',
            large: true,
            tooltip: 'Add JSON-LD code to enhance SERP display with rich snippets.',
          },
          {
            label: 'Product Description',
            name: 'productDescription',
            type: 'textarea',
            large: true,
            tooltip: 'Provide a detailed and keyword-rich description to improve search visibility.',
          },
        ].map(({ label, name, type, large, tooltip }) => (
          <div key={name} className="flex flex-col relative group">
            <label htmlFor={name} className="text-sm font-medium mb-1">
              {label}
            </label>
            <div
              className="absolute top-0 right-0 bg-gray-200 text-sm p-2 rounded-lg shadow-md hidden group-hover:block z-10 w-72"
              style={{ transform: 'translateY(-50%)' }}
            >
              {tooltip}
            </div>
            {type === 'textarea' ? (
              <textarea
                id={name}
                name={name}
                value={seoData[name]}
                onChange={handleInputChange}
                className={`input-field w-full p-3 border rounded-md focus:outline-none focus:ring ${
                  large ? 'h-32' : 'h-20'
                }`}
              />
            ) : (
              <input
                id={name}
                type={type}
                name={name}
                value={seoData[name]}
                onChange={handleInputChange}
                className="input-field w-full p-3 border rounded-md focus:outline-none focus:ring"
              />
            )}
          </div>
        ))}

        {/* Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="breadcrumbsEnabled"
            checked={seoData.breadcrumbsEnabled}
            onChange={handleInputChange}
            className="h-5 w-5"
          />
          <label htmlFor="breadcrumbsEnabled" className="text-sm font-medium">
            Enable Breadcrumbs
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save SEO Settings
        </button>
      </form>
    </div>
  );
};

export default SeoSettingsPage;
