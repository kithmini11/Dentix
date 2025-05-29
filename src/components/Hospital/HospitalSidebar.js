import React from 'react';
import { Link } from 'react-router-dom';

function HospitalSidebar({ activeTab, setActiveTab }) {
  return (
    <div className="md:w-1/4 mb-6 md:mb-0 md:mr-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
          <h2 className="text-white font-bold text-xl">Hospital Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeTab === 'dashboard' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                aria-label="Go to Dashboard"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeTab === 'inventory' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                aria-label="Go to Inventory Management"
              >
                Inventory Management
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('doctors')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeTab === 'doctors' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                aria-label="Go to Doctors"
              >
                Doctors
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('cases')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeTab === 'cases' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                aria-label="Go to Patient Cases"
              >
                Patient Cases
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('points')}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  activeTab === 'points' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
                aria-label="Go to Loyalty Points"
              >
                Loyalty Points
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Link to="/" className="text-red-500 hover:text-red-700 flex items-center" aria-label="Logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HospitalSidebar;