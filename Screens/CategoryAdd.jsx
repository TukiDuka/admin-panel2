import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryAddPage = () => {
  const navigate = useNavigate();

  // State for new category
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmAdd = window.confirm(`Та "${category.name}" категорийг нэмэхдээ итгэлтэй байна уу?`);
    if (confirmAdd) {
      // Perform add operation here (e.g., API call)
      alert(`"${category.name}" категори амжилттай нэмэгдлээ!`);
      navigate("/categories"); // Redirect back to category list
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate("/categories"); // Redirect back without saving
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">Add New Category</h1>
            <button
              className="text-white hover:text-gray-200 flex items-center"
              onClick={handleCancel}
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Categories
            </button>
          </div>

          {/* Form Section */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={category.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={category.description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-y"
                  required
                />
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 flex items-center"
                  onClick={handleCancel}
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center"
                >
                  <i className="fas fa-plus mr-2"></i> Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAddPage;