import React from 'react';

function SupplyInventory() {
  return (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Inventory Management</h2>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Order Supplies
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-blue-800">Brackets</div>
                        <div className="text-sm text-gray-600">In Stock: 152</div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Good
                      </span>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-green-800">Wires</div>
                        <div className="text-sm text-gray-600">In Stock: 76</div>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Low
                      </span>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-purple-800">Elastics</div>
                        <div className="text-sm text-gray-600">In Stock: 34</div>
                      </div>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        Critical
                      </span>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-yellow-800">Instruments</div>
                        <div className="text-sm text-gray-600">In Stock: 103</div>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Good
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-3 px-4 text-left text-gray-600">Order ID</th>
                          <th className="py-3 px-4 text-left text-gray-600">Items</th>
                          <th className="py-3 px-4 text-left text-gray-600">Supplier</th>
                          <th className="py-3 px-4 text-left text-gray-600">Date</th>
                          <th className="py-3 px-4 text-left text-gray-600">Status</th>
                          <th className="py-3 px-4 text-left text-gray-600">Points Earned</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">#10842</td>
                          <td className="py-3 px-4">Ceramic Brackets (x50)</td>
                          <td className="py-3 px-4">DentSupply Ltd.</td>
                          <td className="py-3 px-4">May 10, 2025</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              Delivered
                            </span>
                          </td>
                          <td className="py-3 px-4">250</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">#10843</td>
                          <td className="py-3 px-4">Orthodontic Wires (x30)</td>
                          <td className="py-3 px-4">OrthoTech Sri Lanka</td>
                          <td className="py-3 px-4">May 12, 2025</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              Shipping
                            </span>
                          </td>
                          <td className="py-3 px-4">180</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">#10844</td>
                          <td className="py-3 px-4">Elastic Ligatures (x200)</td>
                          <td className="py-3 px-4">DentSupply Ltd.</td>
                          <td className="py-3 px-4">May 14, 2025</td>
                          <td className="py-3 px-4">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                              Processing
                            </span>
                          </td>
                          <td className="py-3 px-4">100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
export default SupplyInventory;