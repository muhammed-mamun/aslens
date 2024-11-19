import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">ASLens</h2>
            <p className="text-gray-400 mt-2">Building innovative solutions for tomorrow.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#products" className="text-gray-400 hover:text-white">Products</a>
            <a href="#team" className="text-gray-400 hover:text-white">Teams</a>
            
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
