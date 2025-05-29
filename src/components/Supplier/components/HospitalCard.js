import React from 'react';

function HospitalCard({ hospital, onClick, isSelected }) {
  return (
    <div 
      className={`border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
        isSelected ? 'border-blue-500 bg-blue-50' : ''
      }`}
      onClick={onClick}
    >
      <h3 className="font-semibold text-lg">{hospital.name}</h3>
      <p className="text-gray-500 text-sm">{hospital.location}</p>
      <div className="mt-2 flex justify-between">
        <span className="text-sm">Last Order: {new Date(hospital.lastOrder).toLocaleDateString()}</span>
        <span className="text-sm font-medium">₨ {hospital.revenue.toLocaleString()}</span>
      </div>
      <div className="mt-2 pt-2 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span>Total Orders: {hospital.totalOrders}</span>
          <span className="text-blue-600 hover:text-blue-800">View Details</span>
        </div>
      </div>
    </div>
  );
}

export default HospitalCard;