import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="flex items-center space-x-4">
        <span className="material-icons text-white">notifications</span>
        <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
          Sign In
        </button>
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
