import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SupplierDashboard() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 'ORD-2025-001', hospital: 'Lady Ridgeway Children\'s Hospital', items: 'Ceramic Brackets (x50)', requestDate: '2025-05-10', status: 'Pending', priority: 'High' },
    { id: 'ORD-2025-002', hospital: 'National Dental Hospital', items: 'Orthodontic Wires 0.016" (x30)', requestDate: '2025-05-12', status: 'Processing', priority: 'Medium' },
    { id: 'ORD-2025-003', hospital: 'Colombo General Hospital', items: 'Elastic Ligatures (x100)', requestDate: '2025-05-14', status: 'Shipped', priority: 'Low' },
    { id: 'ORD-2025-004', hospital: 'Kandy Teaching Hospital', items: 'Retainers (x10)', requestDate: '2025-05-15', status: 'Delivered', priority: 'Medium' }
  ]);
  
  // Mock data for inventory
  const [inventory, setInventory] = useState([
    { id: 'INV-001', item: 'Ceramic Brackets', category: 'Brackets', stock: 120, reorderLevel: 50 },
    { id: 'INV-002', item: 'Orthodontic Wires 0.016"', category: 'Wires', stock: 45, reorderLevel: 40 },
    { id: 'INV-003', item: 'Elastic Ligatures', category: 'Accessories', stock: 350, reorderLevel: 200 },
    { id: 'INV-004', item: 'Retainers', category: 'Appliances', stock: 35, reorderLevel: 20 },
    { id: 'INV-005', item: 'Palatal Expanders', category: 'Appliances', stock: 15, reorderLevel: 10 }
  ]);

  // Handler for updating order status
  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
  };

  // Handler for updating inventory
  const handleStockUpdate = (itemId, newStock) => {
    setInventory(inventory.map(item => 
      item.id === itemId ? {...item, stock: newStock} : item
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation Bar */}
      <header className="bg-gradient-to-r from-blue-300 to-blue-400 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="mr-4 bg-white rounded-full p-1 shadow-lg">
                <img 
                  src="/images/Logo.png" 
                  alt="DentiX Logo" 
                  className="h-8 w-auto" 
                />
              </div>
              <h1 className="text-3xl font-bold text-blue-800 drop-shadow-lg">
                DentiX
              </h1>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-white">
              <span className="mr-2">OrthoTech Sri Lanka</span>
              <span className="bg-blue-600 rounded-full px-2 py-1 text-xs">Verified Supplier</span>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
              Log Out
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Supplier Dashboard Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar / Navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">OrthoTech Sri Lanka</h2>
                  <p className="text-gray-500">Premium Orthodontic Supplier</p>
                </div>
              </div>
              
              <nav>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Orders
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('inventory')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'inventory' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      Inventory
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('hospitals')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'hospitals' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Hospitals
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Analytics
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="md:w-3/4">
            {/* Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Supplier Dashboard</h2>
                
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Pending Orders</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">6</h3>
                      </div>
                      <div className="bg-orange-100 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className="text-red-500 text-sm font-medium">+2 since yesterday</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Monthly Revenue</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">₨ 825,000</h3>
                      </div>
                      <div className="bg-green-100 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className="text-green-500 text-sm font-medium">+8% from last month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Low Stock Items</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">4</h3>
                      </div>
                      <div className="bg-red-100 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className="text-gray-500 text-sm font-medium">Needs reordering</span>
                    </div>
                  </div>
                </div>
                
                {/* Recent Orders & Inventory Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
                      <button 
                        onClick={() => setActiveTab('orders')}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {orders.slice(0, 3).map(order => (
                        <div key={order.id} className="border-b pb-3">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{order.hospital}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">{order.items}</div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-gray-500">Order ID: {order.id}</span>
                            <span className="text-xs text-gray-500">{order.requestDate}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">Inventory Summary</h3>
                      <button 
                        onClick={() => setActiveTab('inventory')}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {inventory.filter(item => item.stock <= item.reorderLevel).map(item => (
                        <div key={item.id} className="flex justify-between items-center pb-3 border-b">
                          <div>
                            <div className="font-medium">{item.item}</div>
                            <div className="text-sm text-gray-500">{item.category}</div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className={`text-sm ${item.stock < item.reorderLevel/2 ? 'text-red-600' : 'text-orange-600'}`}>
                              {item.stock} in stock
                            </span>
                            <span className="text-xs text-gray-500">Reorder at {item.reorderLevel}</span>
                          </div>
                        </div>
                      ))}
                      {inventory.filter(item => item.stock <= item.reorderLevel).length === 0 && (
                        <p className="text-gray-500 text-center py-2">All inventory levels are healthy</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Top Hospitals */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Hospital Customers</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Lady Ridgeway Children's Hospital</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">Colombo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">24</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₨ 375,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">National Dental Hospital</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">Colombo</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">18</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₨ 280,000</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">Kandy Teaching Hospital</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">Kandy</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">15</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₨ 205,000</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      Export
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Process Orders
                    </button>
                  </div>
                </div>
                
                {/* Filters */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hospital</label>
                      <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Hospitals</option>
                        <option value="Lady Ridgeway">Lady Ridgeway Children's Hospital</option>
                        <option value="National Dental">National Dental Hospital</option>
                        <option value="Colombo General">Colombo General Hospital</option>
                        <option value="Kandy Teaching">Kandy Teaching Hospital</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                      <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                      <input type="date" className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Orders Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                          <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.hospital}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.requestDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.priority === 'High' ? 'bg-red-100 text-red-800' : 
                                order.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {order.priority}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                {order.status === 'Pending' && (
                                  <button onClick={() => handleStatusUpdate(order.id, 'Processing')} className="text-blue-600 hover:text-blue-900">Process</button>
                                )}
                                {order.status === 'Processing' && (
                                  <button onClick={() => handleStatusUpdate(order.id, 'Shipped')} className="text-blue-600 hover:text-blue-900">Ship</button>
                                )}
                                {order.status === 'Shipped' && (
                                  <button onClick={() => handleStatusUpdate(order.id, 'Delivered')} className="text-blue-600 hover:text-blue-900">Mark Delivered</button>
                                )}
                                <button className="text-gray-600 hover:text-gray-900">View</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Pagination */}
                <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow-md sm:px-6">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
                        <span className="font-medium">4</span> results
                      </p>
                    </div>
                    <div>
                      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                          1
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Inventory Tab */}
            {activeTab === 'inventory' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Inventory Management</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                      Export
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                      Add New Item
                    </button>
                  </div>
                </div>
                
                {/* Filters */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Categories</option>
                        <option value="Brackets">Brackets</option>
                        <option value="Wires">Wires</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Appliances">Appliances</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                      <select className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">All Statuses</option>
                        <option value="Low">Low Stock</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Overstocked">Overstocked</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                      <input type="text" placeholder="Search items..." className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Inventory Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {inventory.map(item => (
                          <tr key={item.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.item}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock} units</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                item.stock < item.reorderLevel ? 'bg-red-100 text-red-800' : 
                                item.stock < item.reorderLevel * 1.5 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.stock < item.reorderLevel ? 'Low Stock' : 
                                 item.stock < item.reorderLevel * 1.5 ? 'Moderate' : 
                                 'In Stock'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button onClick={() => handleStockUpdate(item.id, item.stock + 10)} className="text-green-600 hover:text-green-900">Add Stock</button>
                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Upcoming Deliveries */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Deliveries</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Date</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DEL-2025-045</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ceramic Brackets</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200 units</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 25, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dentsply Sirona</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DEL-2025-046</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Orthodontic Wires (Assorted)</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">150 units</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 28, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3M Unitek</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Additional tabs can be implemented similarly */}
            {activeTab === 'hospitals' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Hospital Partners</h2>
                {/* Hospital partners content would go here */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-500 mb-4">Manage your hospital partnerships and view hospital-specific data.</p>
                  
                  {/* Hospital list would go here */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg">Lady Ridgeway Children's Hospital</h3>
                      <p className="text-gray-500 text-sm">Colombo</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm">Last Order: May 10, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg">National Dental Hospital</h3>
                      <p className="text-gray-500 text-sm">Colombo</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm">Last Order: May 12, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg">Colombo General Hospital</h3>
                      <p className="text-gray-500 text-sm">Colombo</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm">Last Order: May 14, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-lg">Kandy Teaching Hospital</h3>
                      <p className="text-gray-500 text-sm">Kandy</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm">Last Order: May 15, 2025</span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'analytics' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics & Reports</h2>
                {/* Analytics content would go here */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <p className="text-gray-500 mb-4">Visualize your business performance with charts and reports.</p>
                  
                  {/* Placeholder for charts */}
                  <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center mb-4">
                    <p className="text-gray-500">Sales by Month Chart</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Product Category Distribution</p>
                    </div>
                    <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Hospital Orders by Region</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                {/* Settings content would go here */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Company Profile</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input 
                        type="text" 
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="OrthoTech Sri Lanka"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                      <input 
                        type="email" 
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="contact@orthotech.lk"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="+94 11 2345 678"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <textarea 
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="42 Hospital Road, Colombo 01, Sri Lanka"
                        rows={3}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
                      <textarea 
                        className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="OrthoTech Sri Lanka is a leading supplier of orthodontic equipment and materials in Sri Lanka, serving government hospitals and private clinics since 2010."
                        rows={4}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierDashboard;