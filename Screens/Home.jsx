// Home.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UserTable from "../components/UserTable";
import ProductTable from "../components/ProductTable";
import CategoryTable from "../components/CategoryTable";
import ModeratorDetails from "../components/ModeratorDetails";
import CompanyInfo from "../components/CompanyInfo";
import Header from "../components/Header";

export default function Home() {
  // Жишээ өгөгдөл (API-аас ирнэ гэж үзье)
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
  ]);
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ]);

  // Шүүсэн өгөгдлийн төлөв
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filteredCategories, setFilteredCategories] = useState(categories);

  // Хайлтын функцийг тодорхойлох
  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();

    // Хэрэглэгчдийг шүүх
    const filteredU = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(filteredU);

    // Бүтээгдэхүүнийг шүүх
    const filteredP = products.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredProducts(filteredP);

    // Ангиллыг шүүх
    const filteredC = categories.filter((category) =>
      category.name.toLowerCase().includes(lowerQuery)
    );
    setFilteredCategories(filteredC);
  };

  return (
    <div className="font-roboto bg-gray-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 ml-64">
          <div className="container mx-auto p-4">
            <Header onSearch={handleSearch} />
            <UserTable users={filteredUsers} />
            <ProductTable products={filteredProducts} />
            <CategoryTable categories={filteredCategories} />
            <ModeratorDetails />
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
}