import React, { useState } from 'react';

function Analytics() {
  // State for date range
  const [dateRange, setDateRange] = useState('month');
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
            Export Reports
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Generate New Report
          </button>
        </div>
      </div>
      
      {/* Date Range Selector */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-gray-700 font-medium">Time Period:</span>
          <div className="flex rounded-md shadow-sm">
            <button 
              className={`px-4 py-2 text-sm font-medium border ${
                dateRange === 'week' 
                  ? 'bg-blue-50 border-blue-500 text-blue-700' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              } rounded-l-md`}
              onClick={() => setDateRange('week')}
            >
              Weekly
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border-t border-b ${
                dateRange === 'month' 
                  ? 'bg-blue-50 border-blue-500 text-blue-700' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('month')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border ${
                dateRange === 'quarter' 
                  ? 'bg-blue-50 border-blue-500 text-blue-700' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('quarter')}
            >
              Quarterly
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border ${
                dateRange === 'year' 
                  ? 'bg-blue-50 border-blue-500 text-blue-700' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              } rounded-r-md`}
              onClick={() => setDateRange('year')}
            >
              Yearly
            </button>
          </div>
          <div className="flex-1 min-w-[200px]">
            <input 
              type="date" 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="mx-2">to</span>
            <input 
              type="date" 
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-gray-500 mb-1">Total Orders</div>
          <div className="text-3xl font-bold text-gray-800">68</div>
          <div className="flex items-center mt-2 text-sm">
            <span className="text-green-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              12%
            </span>
            <span className="text-gray-500 ml-1">vs. last period</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-gray-500 mb-1">Revenue</div>
          <div className="text-3xl font-bold text-gray-800">₨ 1.1M</div>
          <div className="flex items-center mt-2 text-sm">
            <span className="text-green-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              8%
            </span>
            <span className="text-gray-500 ml-1">vs. last period</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-gray-500 mb-1">Top Product</div>
          <div className="text-xl font-bold text-gray-800">Ceramic Brackets</div>
          <div className="flex items-center mt-2 text-sm">
            <span className="text-gray-700">550 units sold</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm text-gray-500 mb-1">Top Hospital</div>
          <div className="text-xl font-bold text-gray-800">Lady Ridgeway</div>
          <div className="flex items-center mt-2 text-sm">
            <span className="text-gray-700">₨ 375,000 in orders</span>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Orders by Hospital</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Hospital Orders Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue by Product Category</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Product Category Chart Placeholder</p>
          </div>
        </div>
      </div>
      
      {/* Additional Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Order Trends</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Order Trends Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Status</h3>
          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Inventory Status Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;