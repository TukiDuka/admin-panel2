import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg transform transition-all hover:scale-105">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Admin Login</h2>
        <form action="#" method="POST">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-gray-700 text-sm cursor-pointer">Remember me</label>
            </div>
            <a href="#" className="text-teal-600 hover:text-teal-800 text-sm transition duration-200">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-medium text-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
