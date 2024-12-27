import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'; // For the close icon

const SearchWithBackend = ({ isSearchVisible, setIsSearchVisible }) => {
  const [query, setQuery] = useState(''); // Track the user's input
  const [searchResults, setSearchResults] = useState([]); // Store fetched results
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const RESULTS_PER_PAGE = 3; // Number of results per page

  // Fetch search results from the backend
  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]); // Clear results if the query is empty
      return;
    }
    try {
      const response = await axios.get(`http://localhost:4000/api/search?q=${query}`);
      setSearchResults(response.data.results); // Update search results
      setCurrentPage(1); // Reset pagination when a new query is entered
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Calculate the results to display based on the current page
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  // Handle "Load More" functionality
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {isSearchVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            {/* Close Icon */}
            <AiOutlineClose
              className="absolute top-3 right-3 text-gray-900 cursor-pointer hover:text-gray-800"
              size={24}
              onClick={() => setIsSearchVisible(false)}
            />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name or category..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-900"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handleSearch(e.target.value); // Trigger search on input change
              }}
            />

            {/* Search Results */}
            <div className="mt-4">
              {paginatedResults.length > 0 ? (
                <>
                  {paginatedResults.map((result) => (
                    <div key={result._id} className="p-2 border-b border-gray-200">
                      {/* Link to product page */}
                      <Link
                        to={`/product/${result._id}`}
                        className="text-blue-600 hover:underline"
                        onClick={() => setIsSearchVisible(false)}
                      >
                        <h3 className="font-semibold">{result.name}</h3>
                      </Link>
                      <p className="text-gray-600 text-sm">Category: {result.category}</p>
                    </div>
                  ))}

                  {/* Show "Load More" button if there are more results */}
                  {currentPage * RESULTS_PER_PAGE < searchResults.length && (
                    <button
                      onClick={handleLoadMore}
                      className="mt-2 p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Load More
                    </button>
                  )}
                </>
              ) : (
                <p className="text-gray-500">No results found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchWithBackend;
