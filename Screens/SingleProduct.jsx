import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProductPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  // Simulated product data (replace with real API data)
  const product = {
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

  // Handle Block Product
  const handleBlockProduct = () => {
    const confirmBlock = window.confirm(`Та "${product.name}" бүтээгдэхүүнийг блоклохдоо итгэлтэй байна уу?`);
    if (confirmBlock) {
      alert(`"${product.name}" амжилттай блоклогдлоо!`);
      // Add API call here
    }
  };

  // Handle Edit Product
  const handleEditProduct = () => {
    navigate(`/editproduct/${productId}`);
  };

  // Handle Back to Products
  const handleBackToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white flex justify-between items-center">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <button
              className="text-white hover:text-gray-200 flex items-center"
              onClick={handleBackToProducts}
            >
              <i className="fas fa-arrow-left mr-2"></i> Back to Products
            </button>
          </div>

          {/* Main Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Image */}
            <div className="md:col-span-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Details */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-lg">
                    Category: <span className="font-semibold">{product.category}</span>
                  </p>
                  <button
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                    onClick={handleEditProduct}
                  >
                    <i className="fas fa-edit mr-2"></i> Edit
                  </button>
                </div>
                <p className="text-gray-600 text-lg mt-2">
                  Price: <span className="font-semibold text-green-600">{product.price}</span>
                </p>
                <p className="text-gray-600 text-lg mt-2">
                  Stock: <span className="font-semibold">{product.stock} items</span>
                </p>
                <p className="text-gray-600 text-lg mt-2">
                  Rating: <span className="font-semibold text-yellow-500">{product.rating} / 5</span>
                </p>
                <p className="text-gray-600 text-lg mt-2">
                  Created By: <span className="font-semibold">{product.createdBy}</span>
                </p>
                <p className="text-gray-600 text-lg mt-2">
                  Created At: <span className="font-semibold">{product.createdAt}</span>
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">Product ID: {product.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;