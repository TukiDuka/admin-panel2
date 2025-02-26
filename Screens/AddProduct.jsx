import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AddProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    rating: "",
    createdBy: "Tukituvshuu", // Simulated user (replace with real auth data)
    createdAt: new Date().toISOString().split("T")[0], // Current date
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    console.log("New product data:", Object.fromEntries(formData));

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    // Simulate saving and redirect
    const confirmSave = window.confirm(`Та "${productData.name}" бүтээгдэхүүнийг нэмэхийг баталгаажуулна уу?`);
    if (confirmSave) {
      alert(`"${productData.name}" амжилттай нэмэгдлээ!`);
      navigate("/products"); // Redirect to products list
    }
  };

  const handleCancel = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    navigate("/products");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen pl-64 pt-5">
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-teal-600 p-6 text-white flex justify-between items-center">
              <h1 className="text-3xl font-bold">Add New Product</h1>
              <button
                className="text-white hover:text-gray-200 flex items-center"
                onClick={handleCancel}
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Products
              </button>
            </div>

            {/* Form Section */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Image Upload Section (Left Column) */}
              <div className="md:col-span-1">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-lg font-semibold mb-2"
                    htmlFor="image"
                  >
                    Product Image
                  </label>
                  {imagePreview && (
                    <div className="mb-4">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="w-full p-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-teal-600 hover:file:bg-green-100"
                  />
                </div>
              </div>

              {/* Form Fields (Right Columns) */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="name"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="category"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter product category"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="price"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter product price"
                        step="0.01"
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="stock"
                      >
                        Stock
                      </label>
                      <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={productData.stock}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter product stock"
                        min="0"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 h-40 resize-y"
                        placeholder="Enter product description"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="rating"
                      >
                        Rating
                      </label>
                      <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={productData.rating}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter product rating (0-5)"
                        step="0.1"
                        min="0"
                        max="5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="createdBy"
                      >
                        Created By
                      </label>
                      <input
                        type="text"
                        id="createdBy"
                        name="createdBy"
                        value={productData.createdBy}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Enter creator name"
                        readOnly // Simulated as read-only for now
                      />
                    </div>
                    <div>
                      <label
                        className="block text-gray-700 text-lg font-semibold mb-2"
                        htmlFor="createdAt"
                      >
                        Created At
                      </label>
                      <input
                        type="date"
                        id="createdAt"
                        name="createdAt"
                        value={productData.createdAt}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                        readOnly // Simulated as read-only for now
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-4 mt-6">
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 flex items-center"
                      onClick={handleCancel}
                    >
                      <i className="fas fa-times mr-2"></i> Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-800 flex items-center"
                    >
                      <i className="fas fa-save mr-2"></i> Save Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;