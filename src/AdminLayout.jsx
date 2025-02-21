import React, { useState, useEffect } from "react";
import Header from "../components/HeaderProduct";
import { Outlet } from "react-router-dom"; // Routing ашиглаж байна гэж үзье

// Жишээ дата (Эндээс API-аас татна)
const mockData = {
  products: [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
  ],
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ],
  orders: [
    { id: 1, orderNumber: "ORD001", total: 1500 },
    { id: 2, orderNumber: "ORD002", total: 800 },
  ],
};

export default function AdminLayout() {
  const [searchResults, setSearchResults] = useState([]);
  const [allData, setAllData] = useState([]);

  // Бүх датаг нэгтгэх
  useEffect(() => {
    const combinedData = [
      ...mockData.products.map((item) => ({ ...item, type: "product" })),
      ...mockData.users.map((item) => ({ ...item, type: "user" })),
      ...mockData.orders.map((item) => ({ ...item, type: "order" })),
    ];
    setAllData(combinedData);
  }, []);

  // Хайлтын функц
  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = allData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerQuery)
      );
    });
    setSearchResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header onSearch={handleSearch} />

      {/* Хайлтын үр дүн */}
      {searchResults.length > 0 && (
        <div className="mt-4 px-4 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800">Search Results:</h2>
          <ul className="mt-2 space-y-2">
            {searchResults.map((item, index) => (
              <li
                key={index}
                className="p-3 bg-white rounded-lg shadow-sm border flex justify-between items-center"
              >
                <span>
                  {item.type === "product" && `${item.name} - $${item.price}`}
                  {item.type === "user" && `${item.name} - ${item.email}`}
                  {item.type === "order" && `${item.orderNumber} - $${item.total}`}
                </span>
                <span className="text-sm text-gray-500">({item.type})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Бусад хуудсуудын контент */}
      <div className="mt-8 px-4">
        <Outlet /> {/* Энд таны routing-аар ирсэн хуудсууд харагдана */}
      </div>
    </div>
  );
}