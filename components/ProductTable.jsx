// ProductTable.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllProductsPage = location.pathname === "/products";

  const handleViewProduct = (productId) => {
    navigate(`/singleproduct/${productId}`);
  };

  const handleViewAll = () => {
    navigate("/products");
  };

  const handleEditProduct = (productId) => {
    navigate(`/editproduct/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      alert(`Product ${productId} deleted successfully!`);
    }
  };

  const handleAddCategory = () => {
    navigate("/add-category");
  };

  // НЭМЭГДСЭН: Add Product функц
  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Product Details
        </h1>
        <div className="flex space-x-4">
        <button
            className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
            onClick={handleAddProduct}
          >
            <i className="fas fa-plus mr-2"></i> Add Product
          </button>
          {!isAllProductsPage && (
            <button
              className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
              onClick={handleViewAll}
            >
              <i className="fas fa-eye mr-2"></i> View All
            </button>
          )}
          
          {/* НЭМЭГДСЭН: Add Product товч */}
          
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                View
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
              <td className="py-4 px-6">
                <img
                  alt="Product image"
                  className="rounded-lg w-10 h-10 border border-gray-200 object-cover"
                  src="https://storage.googleapis.com/a1aa/image/m2Uo5Ph1oI8dHOOwbFUEuvTdWcPGBDND-4Xwenwhae0.jpg"
                />
              </td>
              <td className="py-4 px-6 text-gray-900 font-medium">Product 1</td>
              <td className="py-4 px-6 text-gray-700">Category 1</td>
              <td className="py-4 px-6 text-gray-700">$10.00</td>
              <td className="py-4 px-6">
                <button
                  className="text-teal-600 hover:text-teal-800 transition-colors duration-200"
                  onClick={() => handleViewProduct(1)}
                >
                  <i className="fas fa-eye"></i>
                </button>
              </td>
              <td className="py-4 px-6">
                <button
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  onClick={() => handleEditProduct(1)}
                >
                  <i className="fas fa-edit"></i>
                </button>
              </td>
              <td className="py-4 px-6">
                <button
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  onClick={() => handleDeleteProduct(1)}
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

export default ProductTable;