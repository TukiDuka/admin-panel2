import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const ProfilePage = () => {
  const { username } = useParams();

  const isModerator = username.toLowerCase().includes("admin") || username === "Tukituvshuu";

  const handleBlockUser = () => {
    const confirmBlock = window.confirm(`Та "${username}" хэрэглэгчийг блоклохдоо итгэлтэй байна уу?`);
    if (confirmBlock) {
      alert(`"${username}" хэрэглэгч амжилттай блоклогдлоо!`);
    }
  };

  const handleModeratorAction = () => {
    if (isModerator) {
      const confirmRemove = window.confirm(`Та "${username}" хэрэглэгчийн moderator-ийн эрхийг хасах уу?`);
      if (confirmRemove) {
        alert(`"${username}" хэрэглэгчийн moderator-ийн эрх амжилттай хасагдлаа!`);
      }
    } else {
      const confirmModerator = window.confirm(`Та "${username}" хэрэглэгчийг moderator болгох уу?`);
      if (confirmModerator) {
        alert(`"${username}" хэрэглэгч амжилттай moderator боллоо!`);
      }
    }
  };

  return (
    <div>
      <Sidebar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 ml-80 mt-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-teal-600 p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  alt={`Profile picture of ${username}`}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg mr-6"
                  src="https://scontent.fuln5-1.fna.fbcdn.net/v/t1.6435-1/96909814_167526811394681_2262715696406331392_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=0AcXzIq_lS0Q7kNvgFxkkB4&_nc_oc=Adhz7qhuG6fUp-IUUHRu2hHb1Yw1FT9JBsKWf4EWkCwVPpjfGsaE-Gq2wIEwQ7xoIhQ&_nc_zt=24&_nc_ht=scontent.fuln5-1.fna&_nc_gid=AtJHgPx96yF2yg5YtDmXoOc&oh=00_AYDmnapcdTte14RZ037JTQiJmDSVjkqRXljNfmwgJcDwbw&oe=67E33DDE"
                />
                <div>
                  <h2 className="text-3xl font-bold text-white">{username}</h2>
                  <p className="text-indigo-100 text-lg">Product Designer</p>
                  <p className="text-indigo-200">Los Angeles, California, USA</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200"
                  onClick={handleBlockUser}
                >
                  <i className="fas fa-ban mr-2"></i> Block
                </button>
                <button
                  className={`${
                    isModerator ? "bg-yellow-500 hover:bg-yellow-600" : "bg-teal-600 hover:bg-teal-700"
                  } text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200`}
                  onClick={handleModeratorAction}
                >
                  {isModerator ? (
                    <>
                      <i className="fas fa-user-shield mr-2"></i> Remove Moderator
                    </>
                  ) : (
                    <>
                      <i className="fas fa-plus mr-2"></i> Make Moderator
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-200">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Full Name</p>
                  <p className="text-gray-900 font-medium text-lg">{username}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Email Address</p>
                  <p className="text-gray-900 font-medium text-lg">{username.toLowerCase()}@gmail.com</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Phone</p>
                  <p className="text-gray-900 font-medium text-lg">(213) 555-1234</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Bio</p>
                  <p className="text-gray-900 font-medium text-lg">Product Designer</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-gray-200">
                Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Country</p>
                  <p className="text-gray-900 font-medium text-lg">United States of America</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">City/State</p>
                  <p className="text-gray-900 font-medium text-lg">California, USA</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">Postal Code</p>
                  <p className="text-gray-900 font-medium text-lg">ERT 62574</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm uppercase tracking-wide">TAX ID</p>
                  <p className="text-gray-900 font-medium text-lg">AS564178969</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;