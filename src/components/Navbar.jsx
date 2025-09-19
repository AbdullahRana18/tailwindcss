import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Dummy product list
  const products = ["Shoes", "Shirt", "Jeans", "Cap", "Watch"];

  // Search handler
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = products.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results.length > 0 ? results : ["No results found"]);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold">tailwindcss</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              Products
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="px-3 py-1 rounded-full text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Search Dropdown */}
              {searchQuery && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-2 z-50">
                  {searchResults.map((result, index) => (
                    <p
                      key={index}
                      className={`px-2 py-1 rounded cursor-pointer ${
                        result === "No results found"
                          ? "text-gray-500 cursor-default"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {result}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded hover:bg-blue-500"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              Products
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </div>
        )}
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-4 top-16 w-64 bg-white text-black shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="font-bold">My Bag</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-gray-600">
            You have no items in your bag.
          </p>
        </div>
      )}
    </nav>
  );
}
