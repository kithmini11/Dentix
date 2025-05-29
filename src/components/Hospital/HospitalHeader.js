import React from 'react';
import { Link } from 'react-router-dom';

function HospitalHeader() {
  return (
    <header className="bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="mr-4 bg-white rounded-full p-1 shadow-lg">
              <img src="/images/Logo.png" alt="DentiX Logo" className="h-8 w-auto" />
            </div>
            <h1 className="text-3xl font-bold text-green-800 drop-shadow-lg">DentiX</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <span className="mr-2">Lady Ridgeway Children's Hospital</span>
            <span className="bg-green-600 rounded-full px-2 py-1 text-xs">Government Hospital</span>
          </div>
          <div className="bg-white rounded-full p-1 h-10 w-10 flex items-center justify-center shadow-md">
            <span className="text-green-600 font-bold">LR</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HospitalHeader;