import React, { useState } from 'react';

function OrderManagement() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  
  // Mock data for orders
  const orders = [
    { 
      id: "ORD-10567",
      hospital: "Lady Ridgeway Children's Hospital",
      items: "Ceramic Brackets (x50), Orthodontic Wires (x30)",
      date: "May 14, 2025",
      value: "Rs. 42,500",
      status: "Pending",
      pointsAllocated: 425
    },
    { 
      id: "ORD-10566",
      hospital: "National Dental Hospital",
      items: "Metal Brackets (x100), Elastics (x200)",
      date: "May 12, 2025",
      value: "Rs. 36,000",
      status: "Processing",
      pointsAllocated: 360
    },
    { 
      id: "ORD-10565",
      hospital: "Colombo General Hospital",
      items: "Retainers (x20), Palatal Expanders (x5)",
      date: "May 10, 2025",
      value: "Rs. 28,750",
      status: "Shipped",
      pointsAllocated: 287
    },
    { 
      id: "ORD-10564",
      hospital: "Kandy Teaching Hospital",
      items: "Orthodontic Pliers (x5), Wire Cutters (x3)",
      date: "May 8, 2025",
      value: "Rs. 31,200",
      status: "Delivered",
      pointsAllocated: 312
    },
    { 
      id: "ORD-10563",
      hospital: "Galle Base Hospital",
      items: "Self-ligating Brackets (x30), Archwires (x20)",
      date: "May 5, 2025",
      value: "Rs. 52,600",
      status: "Delivered",
      pointsAllocated: 526
    }
  ];

  // Filter orders based on status
  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === filterStatus.toLowerCase());

  // Function to get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-md ${
              filterStatus === 'all' 
                ? 'bg-purple-100 text-purple-800 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            All Orders
          </button>
          <button 
            onClick={() => setFilterStatus('pending')}
            className={`px-4 py-2 rounded-md ${
              filterStatus === 'pending' 
                ? 'bg-yellow-100 text-yellow-800 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilterStatus('processing')}
            className={`px-4 py-2 rounded-md ${
              filterStatus === 'processing' 
                ? 'bg-blue-100 text-blue-800 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Processing
          </button>
          <button 
            onClick={() => setFilterStatus('shipped')}
            className={`px-4 py-2 rounded-md ${
              filterStatus === 'shipped' 
                ? 'bg-purple-100 text-purple-800 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Shipped
          </button>
          <button 
            onClick={() => setFilterStatus('delivered')}
            className={`px-4 py-2 rounded-md ${
              filterStatus === 'delivered' 
                ? 'bg-green-100 text-green-800 font-medium' 
                : 'hover:bg-gray-100'
            }`}
          >
            Delivered
          </button>
        </div>
        
        <div className="flex space-x-2">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="date">Sort by Date</option>
            <option value="value">Sort by Value</option>
            <option value="hospital">Sort by Hospital</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="py-3 px-4 text-left text-gray-600">Order ID</th>
              <th className="py-3 px-4 text-left text-gray-600">Hospital</th>
              <th className="py-3 px-4 text-left text-gray-600">Items</th>
              <th className="py-3 px-4 text-left text-gray-600">Date</th>
              <th className="py-3 px-4 text-left text-gray-600">Value</th>
              <th className="py-3 px-4 text-left text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-gray-600">Points</th>
              <th className="py-3 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{order.id}</td>
                <td className="py-3 px-4">{order.hospital}</td>
                <td className="py-3 px-4">{order.items}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">{order.value}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">{order.pointsAllocated}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 bg-purple-50 border border-purple-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-purple-800 mb-4">Loyalty Points Program</h3>
        <p className="text-gray-700 mb-4">
          Each order automatically allocates loyalty points to hospitals based on order value. These points can be used to support low-income patients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-lg font-medium text-gray-800">Points Allocated Today</div>
            <div className="text-3xl font-bold text-purple-600">425</div>
            <div className="text-sm text-gray-500">From 1 order</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-lg font-medium text-gray-800">This Month</div>
            <div className="text-3xl font-bold text-purple-600">1,910</div>
            <div className="text-sm text-gray-500">From 5 orders</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-lg font-medium text-gray-800">Total Points</div>
            <div className="text-3xl font-bold text-purple-600">24,350</div>
            <div className="text-sm text-gray-500">All-time allocation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagement;