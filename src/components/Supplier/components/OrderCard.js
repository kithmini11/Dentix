import React from 'react';

function OrderCard({ order, onStatusUpdate }) {
  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get priority color
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-800">{order.id}</h3>
          <p className="text-sm text-gray-500">{order.hospital}</p>
        </div>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(order.priority)}`}>
            {order.priority}
          </span>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="text-sm font-medium text-gray-700">Items:</div>
        <div className="text-sm">{order.items}</div>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <div className="text-gray-500">
          Requested: {new Date(order.requestDate).toLocaleDateString()}
        </div>
        <button 
          onClick={() => onStatusUpdate(order.id)}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Update Status
        </button>
      </div>
    </div>
  );
}

export default OrderCard;