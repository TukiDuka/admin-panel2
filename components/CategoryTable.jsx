import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllCategoriesPage = location.pathname === "/categories";

  const handleDeleteCategory = (categoryId, categoryName) => {
    const confirmDelete = window.confirm(
      `Та "${categoryName}" категорийг устгахдаа итгэлтэй байна уу?`
    );
    if (confirmDelete) {
      alert(`"${categoryName}" категори амжилттай устгагдлаа!`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Category Details
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
            onClick={() => navigate("/categories/add")}
          >
            <i className="fas fa-plus mr-2"></i> Add Category
          </button>
          {!isAllCategoriesPage && (
            <button
              className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
              onClick={() => navigate("/categories")}
            >
              <i className="fas fa-eye mr-2"></i> View All
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Count
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="py-4 px-6 text-gray-900 font-medium">Category 1</td>
              <td className="py-4 px-6 text-gray-700">Description of Category 1</td>
              <td className="py-4 px-6 text-gray-700">15</td>
              <td className="py-4 px-6">
                <button
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  onClick={() => navigate("/categories/edit/1")}
                >
                  <i className="fas fa-edit"></i>
                </button>
              </td>
              <td className="py-4 px-6">
                <button
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  onClick={() => handleDeleteCategory(1, "Category 1")}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;