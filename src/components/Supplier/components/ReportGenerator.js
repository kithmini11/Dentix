import React, { useState } from 'react';

function ReportGenerator() {
  const [reportType, setReportType] = useState('sales');
  const [dateRange, setDateRange] = useState('month');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // In a real implementation, this would connect to your backend
    console.log("Generating report:", { reportType, dateRange, customStartDate, customEndDate });
    // Placeholder for report generation logic
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Report Generator</h2>
      
      <div className="mb-8">
        <p className="text-gray-600 mb-4">
          Generate detailed reports about your supply chain, sales performance, and customer satisfaction metrics.
        </p>
        
        <form onSubmit={handleGenerateReport}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reportType">
                Report Type
              </label>
              <select
                id="reportType"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              >
                <option value="sales">Sales Report</option>
                <option value="inventory">Inventory Status</option>
                <option value="customers">Customer Analysis</option>
                <option value="loyalty">Loyalty Points Allocation</option>
                <option value="performance">Product Performance</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateRange">
                Date Range
              </label>
              <select
                id="dateRange"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
          
          {dateRange === 'custom' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={customStartDate}
                  onChange={(e) => setCustomStartDate(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required={dateRange === 'custom'}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={customEndDate}
                  onChange={(e) => setCustomEndDate(e.target.value)}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required={dateRange === 'custom'}
                />
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Reports are generated in PDF format and can be downloaded or emailed.
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Generate Report
            </button>
          </div>
        </form>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-4 text-left text-gray-600">Report Name</th>
                <th className="py-3 px-4 text-left text-gray-600">Type</th>
                <th className="py-3 px-4 text-left text-gray-600">Date Generated</th>
                <th className="py-3 px-4 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">May 2025 Sales Report</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Sales
                  </span>
                </td>
                <td className="py-3 px-4">May 14, 2025</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Download</button>
                  <button className="text-gray-600 hover:text-gray-800">Email</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">Q1 2025 Inventory Status</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    Inventory
                  </span>
                </td>
                <td className="py-3 px-4">April 02, 2025</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Download</button>
                  <button className="text-gray-600 hover:text-gray-800">Email</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">2025 Q1 Customer Analysis</td>
                <td className="py-3 px-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                    Customer
                  </span>
                </td>
                <td className="py-3 px-4">April 15, 2025</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Download</button>
                  <button className="text-gray-600 hover:text-gray-800">Email</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportGenerator;