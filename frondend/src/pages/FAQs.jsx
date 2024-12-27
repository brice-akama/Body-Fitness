import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'What is your warranty policy?',
      answer: `All Fitness Gear equipment comes with a one-year limited warranty that covers manufacturing defects. 
      This means if there are issues like faulty materials or poor workmanship, we’ll repair or replace the equipment at no cost to you. 
      Additionally, you can purchase extended warranty options for longer coverage, offering you peace of mind for years to come.`,
    },
    {
      question: 'Do you offer assembly services?',
      answer: `Yes, we offer professional assembly services to ensure your fitness equipment is set up correctly and safely. 
      During the checkout process, you can choose the "Assembly Service" option, which will add a small fee to your order. 
      Once your equipment arrives, our expert technicians will schedule a convenient time to assemble the equipment at your location.`,
    },
    {
      question: 'Can I finance my purchase?',
      answer: `Absolutely! We understand that fitness equipment can be a significant investment, which is why we’ve partnered with 
      trusted financial institutions to offer flexible financing options. Depending on your eligibility, you can choose between 
      monthly installments or interest-free plans, making it easier to get the equipment you need without breaking the bank.`,
    },
    {
      question: 'How can I maintain my fitness equipment?',
      answer: `Maintaining your fitness equipment ensures it stays in excellent condition for years. 
      Here are a few key tips:
      - **Cleaning:** Regularly wipe down your equipment with a damp cloth to remove sweat and dust. 
      - **Lubrication:** Use the lubricant recommended in your product manual to keep moving parts like belts or hinges running smoothly.
      - **Inspection:** Periodically check for loose bolts, worn parts, or any unusual noises.
      Following these steps will not only extend the life of your equipment but also ensure safe and effective workouts.`,
    },
    {
      question: 'What is the return policy?',
      answer: `We offer a hassle-free return policy to make sure you’re completely satisfied with your purchase. 
      You can return any unused equipment within 30 days of purchase for a full refund, excluding shipping fees. 
      Please ensure the item is in its original packaging and condition. For more details, contact our customer support team.`,
    },
    {
      question: 'Do you ship internationally?',
      answer: `At the moment, we ship only within the United States and Canada. 
      However, we are actively working on expanding our shipping regions to include other countries. 
      For customers outside our shipping zones, feel free to reach out to discuss potential special arrangements.`,
    },
    {
      question: 'Are there discounts for bulk orders?',
      answer: `Yes, we value our customers who purchase in bulk and offer special discounts to accommodate their needs. 
      Whether you’re outfitting a commercial gym or making a large personal purchase, you can contact our sales team for 
      personalized pricing and shipping quotes.`,
    },
    {
      question: 'Can I track my order?',
      answer: `Yes, once your order has been processed and shipped, you’ll receive an email with a tracking number. 
      This number allows you to monitor the status of your shipment in real-time, so you know exactly when it will arrive.`,
    },
    {
      question: 'What payment methods do you accept?',
      answer: `We accept a variety of payment methods to make your shopping experience convenient. 
      You can use major credit cards such as Visa, MasterCard, and American Express. 
      Additionally, we accept PayPal for secure online payments and financing options through our partners.`,
    },
    {
      question: 'Is technical support available?',
      answer: `Yes, we provide technical support for all our products. 
      If you encounter any issues or have questions about using your equipment, our knowledgeable team is here to help. 
      You can reach us by email, phone, or our online chat support for prompt assistance.`,
    },
  ];

  return (
    <div className="w-full mx-auto p-6 space-y-6 mt-12 lg:max-w-screen-lg mt-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-10 whitespace-nowrap">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-700">{faq.question}</h2>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
