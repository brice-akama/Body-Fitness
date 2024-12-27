import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// Sample search data combining data from different sources
const searchData = [
  { title: 'Pool Installation Guide', description: 'Step-by-step pool installation process', link: '/installation' },
  { title: 'Fiberglass Pools Overview', description: 'Detailed overview of fiberglass pools', link: '/fiberglass-pool-overview' },
  { title: 'Pool Overview', description: 'Our pools are designed for those who want durability and ease of maintenance.', link: '/pool-overview' },
];

// Function to filter search results based on user input
const handleSearch = (query) => {
  if (!query) return [];
  return searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
};

const SearchData = ({ isSearchVisible, setIsSearchVisible }) => {
  const [searchResults, setSearchResults] = useState([]);
  const MAX_RESULTS_DISPLAY = 5; // Limit the number of results shown

  return (
    <>
      {isSearchVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            {/* Close Icon */}
            <AiOutlineClose
              className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-gray-800"
              size={24}
              onClick={() => setIsSearchVisible(false)}
            />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400 bg-white"
              onChange={(e) => setSearchResults(handleSearch(e.target.value))}
            />

            {/* Display search results */}
            <div className="mt-4">
              {searchResults.length > 0 ? (
                searchResults.slice(0, MAX_RESULTS_DISPLAY).map((result, index) => (
                  <div key={index} className="p-2 border-b border-gray-200">
                    <Link
                      to={result.link}
                      className="text-blue-600 hover:underline"
                      onClick={() => setIsSearchVisible(false)}
                    >
                      <h3 className="font-semibold">{result.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No results found</p>
              )}

              {/* Show if more results exist */}
              {searchResults.length > MAX_RESULTS_DISPLAY && (
                <p className="text-gray-500 mt-2">
                  Showing {MAX_RESULTS_DISPLAY} of {searchResults.length} results. Refine your search for more specific results.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchData;
