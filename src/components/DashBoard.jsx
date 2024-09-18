
import React from 'react';


function DashBoard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Resume Builder
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Manage your account and explore features by clicking the button below.
        </p>
        <button className="px-8 py-4 text-lg md:text-xl bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    
   
  

    </div>
  );
}

export default DashBoard;
