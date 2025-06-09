import React, { useState } from 'react';

function SupplyOrders() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orders, setOrders] = useState([
    { id: 101, item: 'Ceramic Brackets', quantity: 30, date: '2025-05-10', status: 'Delivered' },
    { id: 102, item: 'Orthodontic Wires 0.016"', quantity: 20, date: '2025-05-12', status: 'Processing' },
    { id: 103, item: 'Elastic Ligatures', quantity: 100, date: '2025-05-14', status: 'Pending' }
  ]);

  const handleAddOrder = (e) => {
    e.preventDefault();
    setOrders([...orders, {
      id: orders.length + 104,
      item: 'New Supply Order',
      quantity: 10,
      date: '2025-05-16',
      status: 'Pending'
    }]);
    setShowOrderForm(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Supply Orders</h2>
        <button 
          onClick={() => setShowOrderForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Order
        </button>
      </div>
      
      {/* Supply categories */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-blue-50 border border-blue-100 rounded-lg p-4 hover:bg-blue-100 transition-colors text-center">
            <div className="font-medium text-blue-800">Brackets</div>
            <div className="text-sm text-gray-600">Metal, Ceramic, Self-ligating</div>
          </button>
          <button className="bg-green-50 border border-green-100 rounded-lg p-4 hover:bg-green-100 transition-colors text-center">
            <div className="font-medium text-green-800">Wires</div>
            <div className="text-sm text-gray-600">Various sizes and materials</div>
          </button>
          <button className="bg-purple-50 border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors text-center">
            <div className="font-medium text-purple-800">Elastics</div>
            <div className="text-sm text-gray-600">Ligatures, Power chains</div>
          </button>
          <button className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 hover:bg-yellow-100 transition-colors text-center">
            <div className="font-medium text-yellow-800">Instruments</div>
            <div className="text-sm text-gray-600">Pliers, cutters, tools</div>
          </button>
        </div>
      </div>
      
      {/* Recent orders */}
      <h3 className="text-xl font-semibold mb-3">Recent Orders</h3>
      <div className="overflow-auto max-h-96">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="py-3 px-4 text-left text-gray-600">Order ID</th>
              <th className="py-3 px-4 text-left text-gray-600">Item</th>
              <th className="py-3 px-4 text-left text-gray-600">Quantity</th>
              <th className="py-3 px-4 text-left text-gray-600">Date</th>
              <th className="py-3 px-4 text-left text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">#{order.id}</td>
                <td className="py-3 px-4">{order.item}</td>
                <td className="py-3 px-4">{order.quantity}</td>
                <td className="py-3 px-4">{order.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* New Order Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">New Supply Order</h3>
              <button 
                onClick={() => setShowOrderForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleAddOrder}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">
                  Item
                </label>
                <select
                  id="item"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select item</option>
                  <option value="Ceramic Brackets">Ceramic Brackets</option>
                  <option value="Metal Brackets">Metal Brackets</option>
                  <option value="Orthodontic Wires 0.016">Orthodontic Wires 0.016"</option>
                  <option value="Orthodontic Wires 0.018">Orthodontic Wires 0.018"</option>
                  <option value="Elastic Ligatures">Elastic Ligatures</option>
                  <option value="Power Chains">Power Chains</option>
                  <option value="Retainers">Retainers</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter quantity"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                  Priority
                </label>
                <select
                  id="priority"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="3"
                  placeholder="Add any notes about the order"
                ></textarea>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupplyOrders;