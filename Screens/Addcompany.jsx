// AddCompany.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AddCompany = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [companyData, setCompanyData] = useState({
    name: "",
    location: "",
    contact: "",
    phone: "",
    website: "",
    about: "",
  });

  // State for image file and preview
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(companyData).forEach((key) => {
      formData.append(key, companyData[key]);
    });
    if (imageFile) {
      formData.append("image", imageFile);
    }

    console.log("New company data:", Object.fromEntries(formData));
    
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    
    navigate("/companies");
  };

  return (
    <div className="flex min-h-screen"> {/* flex ба min-h-screen нэмэв */}
      <Sidebar />
      <div className="flex-1 p-8 ml-64 bg-gray-100"> {/* ml-64 ба bg-gray-100 хэсгийг гаднаас шилжүүлэв */}
        <div className="rounded-xl shadow-md mt-8">
          <div className="flex justify-between items-center mb-6 p-5">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Add New Company</h1>
            </div>
            <div className="flex space-x-6">
              <button
                className="text-teal-600 hover:text-teal-800 ml-[25px]"
                onClick={() => {
                  if (imagePreview) URL.revokeObjectURL(imagePreview);
                  navigate("/companies");
                }}
              >
                <i className="fas fa-arrow-left"></i> Back to Companies
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-10">
            {/* Company Name */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={companyData.name}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter company name"
                required
              />
            </div>

            {/* Location */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Location:</label>
              <input
                type="text"
                name="location"
                value={companyData.location}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter company location"
                required
              />
            </div>

            {/* Contact */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Contact:</label>
              <input
                type="email"
                name="contact"
                value={companyData.contact}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter contact email"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Tel:</label>
              <input
                type="tel"
                name="phone"
                value={companyData.phone}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Website */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Website:</label>
              <input
                type="url"
                name="website"
                value={companyData.website}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                placeholder="Enter website URL"
              />
            </div>

            {/* About */}
            <div className="flex items-start">
              <label className="w-1/5 text-base font-medium text-gray-700">About:</label>
              <textarea
                name="about"
                value={companyData.about}
                onChange={handleChange}
                className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                rows="4"
                placeholder="Enter company description"
              />
            </div>

            {/* Image Upload */}
            <div className="flex items-center">
              <label className="w-1/5 text-base font-medium text-gray-700">Image:</label>
              <div className="w-4/5">
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors duration-200"
              >
                <i className="fas fa-save mr-2"></i> Save Company
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;