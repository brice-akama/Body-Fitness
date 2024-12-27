import React from 'react';

const ShippingInfo = () => {
  return (
    <div className="w-full mx-auto p-6 space-y-6 mt-12 lg:max-w-screen-lg mt-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-16">Shipping Information</h1>
      <ul className="mt-6 space-y-4">
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Domestic Shipping</h2>
          <p className="mt-2 text-gray-600">
            Orders within the United States are processed within 1-2 business days. 
            Once processed, packages are shipped and typically delivered within 3-5 business days. 
            We partner with reliable shipping carriers to ensure timely delivery. During peak seasons or holidays, delivery times may vary slightly.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">International Shipping</h2>
          <p className="mt-2 text-gray-600">
            International shipping is available to select countries, with estimated delivery times of 7-14 business days. 
            Customs clearance can sometimes extend delivery times, and any applicable duties or taxes are the customer's responsibility. 
            We work with global logistics providers to ensure your package reaches you safely.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Shipping Costs</h2>
          <p className="mt-2 text-gray-600">
            Shipping fees are calculated at checkout based on the weight, size, and destination of your order. 
            We aim to keep costs affordable, and any available promotions, such as free shipping, will be displayed during the checkout process.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Tracking Your Order</h2>
          <p className="mt-2 text-gray-600">
            Once your order is shipped, you’ll receive an email with a tracking number. 
            Use this number to monitor the status of your delivery through our shipping partner’s website. 
            For any issues with tracking, our customer support team is ready to assist you.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Order Processing Times</h2>
          <p className="mt-2 text-gray-600">
            All orders are processed within 1-2 business days after payment confirmation. 
            Orders placed over the weekend or on holidays will be processed on the next business day. 
            You will be notified via email once your order is prepared for shipment.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Returns and Refunds Shipping</h2>
          <p className="mt-2 text-gray-600">
            If you need to return an item, the shipping cost for returns will be the customer's responsibility unless the product was damaged or defective. 
            We recommend using a trackable shipping service to ensure safe delivery of the return. 
            Refunds are processed after the returned item is received and inspected.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Delayed Shipments</h2>
          <p className="mt-2 text-gray-600">
            While we strive for prompt delivery, occasional delays may occur due to unforeseen factors like weather conditions, carrier issues, or high order volumes. 
            In such cases, we’ll keep you informed with regular updates via email. You can also reach out to our support team for further assistance.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-700">Lost or Missing Packages</h2>
          <p className="mt-2 text-gray-600">
            If your package is lost or doesn’t arrive within the estimated timeframe, please contact us immediately. 
            We will work with the carrier to locate your package and ensure a resolution, whether that’s a replacement or a refund. 
            Your satisfaction is our top priority, and we’re here to help.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ShippingInfo;
