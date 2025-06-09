import React from 'react';

function DashboardOverview({ setActiveTab }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Dr. Sarah</h2>
        <p className="text-gray-600 mb-6">
          Here's your practice overview for today, May 14, 2025
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="text-blue-500 text-4xl font-bold mb-2">7</div>
            <div className="text-gray-600">Appointments Today</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <div className="text-green-500 text-4xl font-bold mb-2">3</div>
            <div className="text-gray-600">Pending Orders</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <div className="text-purple-500 text-4xl font-bold mb-2">12</div>
            <div className="text-gray-600">Treatment Plans to Review</div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">Recent Patient Updates</h3>
        <div className="overflow-auto max-h-80">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 px-4 text-left text-gray-600">Patient</th>
                <th className="py-2 px-4 text-left text-gray-600">Update</th>
                <th className="py-2 px-4 text-left text-gray-600">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">Amara Silva</td>
                <td className="py-2 px-4">Braces tightened</td>
                <td className="py-2 px-4">9:30 AM</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">Dinesh Perera</td>
                <td className="py-2 px-4">Treatment plan approved</td>
                <td className="py-2 px-4">10:15 AM</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Malini Fernando</td>
                <td className="py-2 px-4">Waiting for retainer</td>
                <td className="py-2 px-4">11:45 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Supply Status</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span>Ceramic Brackets</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Orthodontic Wires 0.016"</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Low Stock</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Elastic Ligatures</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Out of Stock</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Retainers</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
            </li>
          </ul>
          <button 
            onClick={() => setActiveTab('supplies')}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View all supplies →
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Today's Schedule</h3>
          <ul className="space-y-3">
            <li className="flex justify-between border-l-4 border-blue-500 pl-3">
              <div>
                <div className="font-medium">Amara Silva</div>
                <div className="text-sm text-gray-500">Braces Adjustment</div>
              </div>
              <div className="text-gray-600">9:30 AM</div>
            </li>
            <li className="flex justify-between border-l-4 border-green-500 pl-3">
              <div>
                <div className="font-medium">Dinesh Perera</div>
                <div className="text-sm text-gray-500">New Braces</div>
              </div>
              <div className="text-gray-600">11:00 AM</div>
            </li>
            <li className="flex justify-between border-l-4 border-purple-500 pl-3">
              <div>
                <div className="font-medium">Malini Fernando</div>
                <div className="text-sm text-gray-500">Retainer Fitting</div>
              </div>
              <div className="text-gray-600">2:30 PM</div>
            </li>
          </ul>
          <button 
            onClick={() => setActiveTab('appointments')}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            View full schedule →
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;