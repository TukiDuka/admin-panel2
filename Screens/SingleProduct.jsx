// SingleProductPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SingleProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

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

  const handleBlockProduct = () => {
    const confirmBlock = window.confirm(`Та "${product.name}" бүтээгдэхүүнийг блоклохдоо итгэлтэй байна уу?`);
    if (confirmBlock) {
      alert(`"${product.name}" амжилттай блоклогдлоо!`);
    }
  };

  const handleEditProduct = () => {
    navigate(`/editproduct/${productId}`);
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="flex min-h-screen">
      {/* Хажуугийн самбар */}
      <Sidebar />

      {/* Гол агуулга */}
      <div className="flex-1 p-10 ml-64 mt-10"> {/* ml-64 нэмэв */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden min-h-[745px]">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 text-white flex justify-between items-center">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <button
                className="text-white hover:text-gray-200 flex items-center text-lg"
                onClick={handleBackToProducts}
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </button>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:col-span-2">
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 text-xl">
                      Category: <span className="font-semibold">{product.category}</span>
                    </p>
                    <button
                      className="text-blue-500 hover:text-blue-700 flex items-center text-lg"
                      onClick={handleEditProduct}
                    >
                      <i className="fas fa-edit mr-2"></i> Edit
                    </button>
                  </div>
                  <p className="text-gray-600 text-xl mt-4">
                    Price: <span className="font-semibold text-green-600">{product.price}</span>
                  </p>
                  <p className="text-gray-600 text-xl mt-4">
                    Stock: <span className="font-semibold">{product.stock} ширхэг</span>
                  </p>
                  <p className="text-gray-600 text-xl mt-4">
                    Rating: <span className="font-semibold text-yellow-500">{product.rating} / 5</span>
                  </p>
                  <p className="text-gray-600 text-xl mt-4">
                  CreatedBy: <span className="font-semibold">{product.createdBy}</span>
                  </p>
                  <p className="text-gray-600 text-xl mt-4">
                  createdAt: <span className="font-semibold">{product.createdAt}</span>
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Description</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 border-t border-gray-200 text-center mt-[100px] ">
              <p className="text-gray-600 text-lg">Product ID: {product.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;