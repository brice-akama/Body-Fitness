import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already accepted or rejected cookies
    if (localStorage.getItem('cookies-accepted')) {
      setIsVisible(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't show the popup if cookies are already accepted/rejected

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-500 text-black p-4 flex flex-col sm:flex-row sm:justify-between items-center z-50">
      <div className="flex items-center mb-2 sm:mb-0">
        <p className="text-center sm:text-left">
          This website uses cookies to enhance the user experience. By using our website, you agree to our cookie policy.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <button className="bg-green-500 text-white py-2 px-4 rounded mb-2 sm:mb-0" onClick={handleAcceptCookies}>
          Accept
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded sm:mb-0 whitespace-nowrap" onClick={handleRejectCookies}>
          Reject All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
