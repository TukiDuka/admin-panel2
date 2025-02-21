import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Header({ onSearch }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const pageTitles = {
    "/dashboard": "Dashboard Overview",
    "/products": "All Products",
    "/users": "All Users",
    "/orders": "All Orders",
    "/categories": "All Categories",
    "/moderators": "All Moderators",
    "/companies": "All Companies",
    "/": "Welcome to Admin Panel",
  };

  const currentTitle = pageTitles[location.pathname] || "Admin Panel";

  // Хайлт хийх функц
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="pb-8">
      <div className="flex justify-between items-center">
        {/* Left Section: Back Button and Title */}
        <div className="flex items-center gap-6">
          <button
            className="p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-md"
            onClick={() => window.history.back()}
          >
            <span className="text-xl">←</span>
          </button>

          <div>
            <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
              {currentTitle}
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 px-5 py-3"
        >
          <input
            type="text"
            placeholder="Search across all tables..."
            className="w-72 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-gray-500 hover:text-teal-600 transition-colors duration-200"
          >
            <FaSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}