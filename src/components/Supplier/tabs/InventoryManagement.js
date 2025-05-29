import React, { useState } from 'react';

function InventoryManagement() {
  // Mock data for inventory
  const [inventory, setInventory] = useState([
    { id: 'INV-001', item: 'Ceramic Brackets', category: 'Brackets', stock: 120, reorderLevel: 50, unitPrice: 350 },
    { id: 'INV-002', item: 'Orthodontic Wires 0.016"', category: 'Wires', stock: 45, reorderLevel: 40, unitPrice: 220 },
    { id: 'INV-003', item: 'Elastic Ligatures', category: 'Accessories', stock: 350, reorderLevel: 200, unitPrice: 15 },
    { id: 'INV-004', item: 'Retainers', category: 'Appliances', stock: 35, reorderLevel: 20, unitPrice: 1200 },
    { id: 'INV-005', item: 'Palatal Expanders', category: 'Appliances', stock: 15, reorderLevel: 10, unitPrice: 3500 }
  ]);

  // State for form visibility
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  
  // State for new item form
  const [newItem, setNewItem] = useState({
    item: '',
    category: '',
    stock: 0,
    reorderLevel: 0,
    unitPrice: 0
  });
  
  // Handler for updating stock
  const handleStockUpdate = (itemId, newStock) => {
    setInventory(inventory.map(item => 
      item.id === itemId ? {...item, stock: newStock} : item
    ));
  };
  
  // Handler for adding new item
  const handleAddItem = (e) => {
    e.preventDefault();
    const newId = `INV-${String(inventory.length + 6).padStart(3, '0')}`;
    setInventory([...inventory, { 
      id: newId,
      ...newItem
    }]);
    setShowAddItemForm(false);
    setNewItem({
      item: '',
      category: '',
      stock: 0,
      reorderLevel: 0,
      unitPrice: 0
    });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Inventory Management</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Export Inventory
          </button>
          <button 
            onClick={() => setShowAddItemForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
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
              <option value="InStock">In Stock</option>
              <option value="LowStock">Low Stock</option>
              <option value="OutOfStock">Out of Stock</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              placeholder="Search items..." 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reorderLevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₨ {item.unitPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.stock === 0 ? 'bg-red-100 text-red-800' : 
                      item.stock < item.reorderLevel ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.stock === 0 ? 'Out of Stock' : 
                       item.stock < item.reorderLevel ? 'Low Stock' : 
                       'In Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => {
                        const newStock = prompt(`Update stock for ${item.item}:`, item.stock);
                        if (newStock !== null) {
                          handleStockUpdate(item.id, parseInt(newStock, 10));
                        }
                      }}
                    >
                      Update
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Reorder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add New Item Modal */}
      {showAddItemForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Add New Inventory Item</h3>
              <button 
                onClick={() => setShowAddItemForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleAddItem}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                  Item Name
                </label>
                <input
                  id="itemName"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem.item}
                  onChange={(e) => setNewItem({...newItem, item: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Brackets">Brackets</option>
                  <option value="Wires">Wires</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Appliances">Appliances</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                  Initial Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  min="0"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem.stock}
                  onChange={(e) => setNewItem({...newItem, stock: parseInt(e.target.value)})}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reorderLevel">
                  Reorder Level
                </label>
                <input
                  id="reorderLevel"
                  type="number"
                  min="0"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem.reorderLevel}
                  onChange={(e) => setNewItem({...newItem, reorderLevel: parseInt(e.target.value)})}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unitPrice">
                  Unit Price (₨)
                </label>
                <input
                  id="unitPrice"
                  type="number"
                  min="0"
                  step="0.01"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newItem.unitPrice}
                  onChange={(e) => setNewItem({...newItem, unitPrice: parseFloat(e.target.value)})}
                  required
                />
              </div>
              
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2 hover:bg-gray-400"
                  onClick={() => setShowAddItemForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;