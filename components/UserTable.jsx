// UserTable.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserTable = ({ searchQuery = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllUsersPage = location.pathname === "/users";

  const initialUsers = [
    {
      id: 1,
      name: "Marsha Hogan",
      location: "Illinois, United States",
      phone: "+01 3214 6522",
      email: "chadengle@dummy.com",
      username: "Tukituvshuu",
      image:
        "https://scontent.fuln5-1.fna.fbcdn.net/v/t1.6435-1/96909814_167526811394681_2262715696406331392_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=0AcXzIq_lS0Q7kNvgFxkkB4&_nc_oc=Adhz7qhuG6fUp-IUUHRu2hHb1Yw1FT9JBsKWf4EWkCwVPpjfGsaE-Gq2wIEwQ7xoIhQ&_nc_zt=24&_nc_ht=scontent.fuln5-1.fna&_nc_gid=AtJHgPx96yF2yg5YtDmXoOc&oh=00_AYDmnapcdTte14RZ037JTQiJmDSVjkqRXljNfmwgJcDwbw&oe=67E33DDE",
    },
    {
      id: 2,
      name: "John Doe",
      location: "California, United States",
      phone: "+01 9876 5432",
      email: "john.doe@example.com",
      username: "JohnDoe123",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredUsers(initialUsers);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = initialUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerQuery) ||
          user.email.toLowerCase().includes(lowerQuery) ||
          user.username.toLowerCase().includes(lowerQuery)
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery]);

  const handleViewProfile = (username) => {
    navigate(`/profile/${username}`);
  };

  const handleViewAll = () => {
    navigate("/users");
  };

  const handleBlockUser = (username) => {
    const confirmBlock = window.confirm(
      `Та "${username}" хэрэглэгчийг блоклохдоо итгэлтэй байна уу?`
    );
    if (confirmBlock) {
      alert(`${username} хэрэглэгч амжилттай блоклогдлоо!`);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          User Details
        </h1>
        {!isAllUsersPage && (
          <button
            className="text-teal-600 hover:text-teal-800 flex items-center text-sm font-medium transition-colors duration-200"
            onClick={handleViewAll}
          >
            <i className="fas fa-eye mr-2"></i> All Users
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                View
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Block
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="py-4 px-6">
                    <img
                      alt="User profile"
                      className="rounded-full w-10 h-10 border border-gray-200"
                      src={user.image}
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.location}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{user.phone}</td>
                  <td className="py-4 px-6 text-gray-700">{user.email}</td>
                  <td className="py-4 px-6 text-gray-700">{user.username}</td>
                  <td className="py-4 px-6">
                    <button
                      className="text-teal-600 hover:text-teal-800 transition-colors duration-200"
                      onClick={() => handleViewProfile(user.username)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      onClick={() => handleBlockUser(user.username)}
                    >
                      <i className="fas fa-ban"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="py-4 px-6 text-center text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;