import React from 'react';

function InventoryItem({ item, onStockUpdate }) {
  // Get stock status
  const getStockStatus = (stock, reorderLevel) => {
    if (stock === 0) {
      return {
        label: 'Out of Stock',
        className: 'bg-red-100 text-red-800'
      };
    } else if (stock < reorderLevel) {
      return {
        label: 'Low Stock',
        className: 'bg-yellow-100 text-yellow-800'
      };
    } else {
      return {
        label: 'In Stock',
        className: 'bg-green-100 text-green-800'
      };
    }
  };
  
  const stockStatus = getStockStatus(item.stock, item.reorderLevel);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-800">{item.item}</h3>
          <p className="text-sm text-gray-500">{item.category}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.className}`}>
          {stockStatus.label}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <div className="text-xs text-gray-500">Current Stock</div>
          <div className="font-medium">{item.stock} units</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Reorder Level</div>
          <div className="font-medium">{item.reorderLevel} units</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Unit Price</div>
          <div className="font-medium">₨ {item.unitPrice}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Item ID</div>
          <div className="font-medium">{item.id}</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => onStockUpdate(item.id)}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Stock
        </button>
        {item.stock < item.reorderLevel && (
          <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Reorder
          </button>
        )}
      </div>
    </div>
  );
}

export default InventoryItem;