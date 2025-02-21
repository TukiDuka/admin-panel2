import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAllUsersPage = location.pathname === "/users";

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
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="py-4 px-6">
                <img
                  alt="User profile"
                  className="rounded-full w-10 h-10 border border-gray-200"
                  src="https://storage.googleapis.com/a1aa/image/5SvUUCuJw-jWhm5-CRd75ELeVPpV9JhGiZE_vvtE0-k.jpg"
                />
              </td>
              <td className="py-4 px-6">
                <div className="font-medium text-gray-900">Marsha Hogan</div>
                <div className="text-sm text-gray-500">Illinois, United States</div>
              </td>
              <td className="py-4 px-6 text-gray-700">+01 3214 6522</td>
              <td className="py-4 px-6 text-gray-700">chadengle@dummy.com</td>
              <td className="py-4 px-6 text-gray-700">Tukituvshuu</td>
              <td className="py-4 px-6">
                <button
                  className="text-teal-600 hover:text-teal-800 transition-colors duration-200"
                  onClick={() => handleViewProfile("Tukituvshuu")}
                >
                  <i className="fas fa-eye"></i>
                </button>
              </td>
              <td className="py-4 px-6">
                <button
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  onClick={() => handleBlockUser("Tukituvshuu")}
                >
                  <i className="fas fa-ban"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;