import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ProductEditPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  // Simulated initial product data (replace with real API data)
  const initialProduct = {
    id: productId,
    name: "Product 1",
    category: "Category 1",
    price: "$10.00",
    description: "A versatile and high-quality product designed for everyday use.",
    image: "https://storage.googleapis.com/a1aa/image/m2Uo5Ph1oI8dHOOwbFUEuvTdWcPGBDND-4Xwenwhae0.jpg",
    stock: 50,
    rating: 4.8,
    createdBy: "Tukituvshuu",
    createdAt: "2023-05-15",
  };

  // State to manage form inputs and image preview
  const [product, setProduct] = useState(initialProduct);
  const [imagePreview, setImagePreview] = useState(initialProduct.image);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Preview the new image
        setProduct((prev) => ({
          ...prev,
          image: reader.result, // Update product image (base64 for preview; use file for upload)
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmSave = window.confirm(`Та "${product.name}" бүтээгдэхүүний өөрчлөлтийг хадгалах уу?`);
    if (confirmSave) {
      // Perform save operation here (e.g., API call to update product)
      alert(`"${product.name}" амжилттай шинэчлэгдлээ!`);
      navigate(`/singleproduct/${productId}`); // Redirect back to product page
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate(`/singleproduct/${productId}`); // Redirect back without saving
  };

  return (
    <div>
      <Sidebar/>
    <div className="bg-gray-100 min-h-screen pl-70 pt-7">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-teal-600  p-6 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">Edit Product: {product.name}</h1>
            <button
              className="text-white hover:text-gray-200 flex items-center"
              onClick={handleCancel}
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Product
            </button>
          </div>

          {/* Form Section */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image Edit Section (Left Column, Larger) */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="image">
                  Product Image
                </label>
                <div className="mb-4">
                  <img
                    src={imagePreview}
                    alt="Product preview"
                    className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-teal-600 hover:file:bg-green-100"
                />
              </div>
            </div>

            {/* Form Fields (Right Columns) */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={product.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="category">
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={product.category}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="price">
                      Price
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="stock">
                      Stock
                    </label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={product.stock}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
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
                      value={product.description}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 h-40 resize-y"
                      required
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
                    <i className="fas fa-save mr-2"></i> Save Changes
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

export default ProductEditPage;