import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleViewAll = () => {
    navigate("/companies");
  };

  const handleAddCompany = () => {
    navigate("/companies/add");
  };

  const isCompaniesPage = location.pathname === "/companies";

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Company Details
        </h1>
        <div className="flex space-x-4">
          <button
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium transition-colors duration-200"
            onClick={() => navigate("/companies/edit/1")}
          >
            <i className="fas fa-pencil-alt mr-2"></i> Modify
          </button>
          {!isCompaniesPage && (
            <button
              className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
              onClick={handleViewAll}
            >
              <i className="fas fa-list mr-2"></i> All Companies
            </button>
          )}
          <button
            className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
            onClick={handleAddCompany}
          >
            <i className="fas fa-building mr-2"></i> New Company
          </button>
        </div>
      </div>

      {/* Company Image */}
      <div className="mb-6">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Company Building"
          className="w-full h-48 object-cover rounded-lg border border-gray-200"
        />
      </div>

      <div className="space-y-4">
        {/* Company Name */}
        <div className="flex items-center py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">Name</span>
          <span className="w-4/5 text-sm text-gray-900 font-medium">Eco Innovations Inc.</span>
        </div>

        {/* Location */}
        <div className="flex items-center py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">Location</span>
          <span className="w-4/5 text-sm text-gray-900">
            456 Sustainability Ave, Green Town, Planet
          </span>
        </div>

        {/* Contact */}
        <div className="flex items-center py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">Contact</span>
          <span className="w-4/5 text-sm text-gray-900">contact@eco-innovations.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">Tel</span>
          <span className="w-4/5 text-sm text-gray-900">+1 (555) 123-4567</span>
        </div>

        {/* Website */}
        <div className="flex items-center py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">Website</span>
          <span className="w-4/5 text-sm text-teal-600 hover:underline">
            <a href="https://www.eco-innovations.com" target="_blank" rel="noopener noreferrer">
              www.eco-innovations.com
            </a>
          </span>
        </div>

        {/* About */}
        <div className="flex items-start py-2">
          <span className="w-1/5 text-sm font-medium text-gray-600">About</span>
          <span className="w-4/5 text-sm text-gray-900">
            Eco Innovations Inc. specializes in developing cutting-edge sustainable solutions 
            for modern businesses, focusing on renewable energy and green technology advancements.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;