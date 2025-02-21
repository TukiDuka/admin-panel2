import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

export default function Header() {
  return (
    <div className="pb-8">
      <div className="flex justify-between items-center">
        {/* Welcome Message */}
        <div>
          <div className="bg-gray-100 text-4xl text-gray-800 font-bold">Welcome to Admin Panel</div>
          <p className="text-gray-600 text-sm">Your web management browser site</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-64 px-2"
          />
          <button className="text-gray-500 hover:text-gray-700">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}