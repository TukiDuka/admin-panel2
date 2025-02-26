// Sidebar.js
import React from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaTags,
  FaUsers,
  FaBuilding,
  FaUserShield,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-gray-100 w-64 h-screen fixed top-0 left-0 flex flex-col shadow-lg">
      {/* Header */}
      <div className="text-2xl font-semibold text-white text-center py-6 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-800">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 overflow-y-auto"> {/* Scroll хийхийг зөвшөөрнө */}
        <Link
          to="/"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaTachometerAlt className="inline-block mr-3" /> Dashboard
        </Link>
        <Link
          to="/products"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/products" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaBox className="inline-block mr-3" /> Products
        </Link>
        <Link
          to="/categories"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/categories" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaTags className="inline-block mr-3" /> Categories
        </Link>
        <Link
          to="/users"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/users" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaUsers className="inline-block mr-3" /> Users
        </Link>
        <Link
          to="/companies"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/companies" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaBuilding className="inline-block mr-3" /> Company Info
        </Link>
        <Link
          to="/super-admin"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/super-admin" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaUserShield className="inline-block mr-3" /> Super Admin
        </Link>
        <Link
          to="/moderators"
          className={`block py-3 px-6 text-sm font-medium transition-colors duration-200 hover:bg-gray-800 hover:text-white ${
            location.pathname === "/moderators" ? "bg-gray-800 text-teal-400" : "text-gray-300"
          }`}
        >
          <FaUserShield className="inline-block mr-3" /> Moderators
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Admin Panel
      </div>
    </div>
  );
};

export default Sidebar;