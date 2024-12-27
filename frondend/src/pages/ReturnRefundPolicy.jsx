import React from 'react';

const ReturnRefundPolicy = () => {
  return (
    <div className="w-full px-6 py-10 mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-16">Return & Refund Policy</h1>
      <div className="w-full p-6 border rounded-lg shadow-sm bg-gray-50 mt-8">
        <p className="mt-4 text-gray-600">
          We understand that sometimes a product may not meet your expectations. Our Return & Refund Policy is designed to ensure a smooth and hassle-free process for you.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-gray-700">Eligibility for Returns</h2>
        <p className="mt-2 text-gray-600">
          Products can be returned within **30 days of receiving the order** if they are unused and in their original condition. To qualify for a return:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>The product must be in its original packaging, complete with all accessories and tags.</li>
          <li>You need to provide proof of purchase, such as a receipt or order confirmation.</li>
          <li>Items marked as "final sale" or "clearance" cannot be returned or refunded.</li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">Processing Refunds</h2>
        <p className="mt-2 text-gray-600">
          Once we receive your returned item, we will inspect it to ensure it meets the return criteria. Refunds will be processed within **7-10 business days** and credited to your original payment method. 
        </p>
        <p className="mt-2 text-gray-600">
          Please note that shipping fees for the return are your responsibility, except in cases where the product was damaged or defective upon arrival.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">Steps to Initiate a Return</h2>
        <p className="mt-2 text-gray-600">
          To start a return, contact our support team at **returns@yourstore.com** with your order number and reason for the return. Our team will provide a return shipping label and instructions for sending back the product.
        </p>
        <p className="mt-2 text-gray-600">
          For added security, we recommend using a trackable shipping method. This ensures you can monitor the progress of your return.
        </p>
      </div>
    </div>
  );
};

export default ReturnRefundPolicy;
