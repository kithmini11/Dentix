import React from 'react';

const DashboardCard = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-50">{icon}</div>
      </div>
      <p className="text-xs font-medium text-gray-500 mt-2">{trend}</p>
    </div>
  );
};

export default DashboardCard;