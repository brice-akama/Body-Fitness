import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full px-6 py-10 mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-16">Privacy Policy</h1>
      <div className="w-full p-6 border rounded-lg shadow-sm bg-gray-50 mt-8">
        <p className="mt-4 text-gray-600">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">What Information We Collect</h2>
        <p className="mt-2 text-gray-600">
          We collect personal details such as your name, email address, shipping address, phone number, and payment information when you place an order or create an account. Additionally, we may collect non-personal data like your IP address or browsing preferences to enhance your experience.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">How We Use Your Information</h2>
        <p className="mt-2 text-gray-600">
          The information you provide is used to:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Process your orders and manage your account.</li>
          <li>Send updates on your orders, promotional offers, and newsletters (if you opt-in).</li>
          <li>Analyze website performance and improve our services.</li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">How We Protect Your Data</h2>
        <p className="mt-2 text-gray-600">
          We implement advanced security measures such as encryption and secure servers to safeguard your information from unauthorized access. Payment information is processed through secure third-party payment gateways.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">Sharing Your Information</h2>
        <p className="mt-2 text-gray-600">
          Your information is shared only with trusted third-party services for payment processing, shipping, and analytics. We do not sell or trade your personal data to external parties.
        </p>

        <h2 className="mt-6 text-lg font-semibold text-gray-700">Your Rights</h2>
        <p className="mt-2 text-gray-600">
          You have the right to:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Access and review the personal information we hold about you.</li>
          <li>Request corrections to inaccurate information.</li>
          <li>Withdraw consent for data processing at any time.</li>
        </ul>

        <p className="mt-4 text-gray-600">
          For questions or requests related to your privacy, contact us at **privacy@yourstore.com**.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
