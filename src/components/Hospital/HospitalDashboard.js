import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoyaltyPointsChart from './tabs/LoyaltyPointsChart';
import PatientDistributionChart from './tabs/PatientDistributionChart';
import Doctors from './tabs/Doctors';
import PatientManagement from './tabs/PatientManagement';
import SupplyInventory from './tabs/SupplyInventory';

function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

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
              <span className="mr-2">Lady Ridgeway Children's Hospital</span>
              <span className="bg-blue-600 rounded-full px-2 py-1 text-xs">Admin</span>
            </div>
            <div className="bg-white rounded-full p-1 h-10 w-10 flex items-center justify-center shadow-md">
              <span className="text-blue-600 font-bold">LR</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4 mb-6 md:mb-0 md:mr-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                <h2 className="text-white font-bold text-xl">Hospital Portal</h2>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'dashboard' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('patients')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'patients' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Patients
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('inventory')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'inventory' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Inventory
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('doctors')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'doctors' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Doctors
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('loyalty')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'loyalty' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Loyalty Program
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="p-4 border-t">
                <Link to="/" className="text-red-500 hover:text-red-700 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Lady Ridgeway Hospital</h2>
                  <p className="text-gray-600 mb-6">
                    Here's your hospital overview for today, May 14, 2025
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="text-blue-500 text-4xl font-bold mb-2">24</div>
                      <div className="text-gray-600">Orthodontic Patients Today</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="text-green-500 text-4xl font-bold mb-2">5,230</div>
                      <div className="text-gray-600">Loyalty Points Balance</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="text-purple-500 text-4xl font-bold mb-2">12</div>
                      <div className="text-gray-600">Low-Income Cases</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">Loyalty Points Trend</h3>
                      <LoyaltyPointsChart />
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold mb-4">Patient Distribution</h3>
                      <PatientDistributionChart />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
                  <div className="overflow-auto max-h-80">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-2 px-4 text-left text-gray-600">Patient</th>
                          <th className="py-2 px-4 text-left text-gray-600">Doctor</th>
                          <th className="py-2 px-4 text-left text-gray-600">Treatment</th>
                          <th className="py-2 px-4 text-left text-gray-600">Time</th>
                          <th className="py-2 px-4 text-left text-gray-600">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Amara Silva</td>
                          <td className="py-2 px-4">Dr. Sarah Mendis</td>
                          <td className="py-2 px-4">Braces Adjustment</td>
                          <td className="py-2 px-4">9:30 AM</td>
                          <td className="py-2 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Dinesh Perera</td>
                          <td className="py-2 px-4">Dr. Sarah Mendis</td>
                          <td className="py-2 px-4">New Braces</td>
                          <td className="py-2 px-4">11:00 AM</td>
                          <td className="py-2 px-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              In Progress
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Malini Fernando</td>
                          <td className="py-2 px-4">Dr. Sarah Mendis</td>
                          <td className="py-2 px-4">Retainer Fitting</td>
                          <td className="py-2 px-4">2:30 PM</td>
                          <td className="py-2 px-4">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                              Waiting
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4">Low-Income Support Program</h3>
                  <div className="overflow-auto max-h-80">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-3 px-4 text-left text-gray-600">Patient</th>
                          <th className="py-3 px-4 text-left text-gray-600">Treatment</th>
                          <th className="py-3 px-4 text-left text-gray-600">Estimated Cost</th>
                          <th className="py-3 px-4 text-left text-gray-600">Points Required</th>
                          <th className="py-3 px-4 text-left text-gray-600">Status</th>
                          <th className="py-3 px-4 text-left text-gray-600">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Priya Mendis</td>
                          <td className="py-3 px-4">Full Braces Treatment</td>
                          <td className="py-3 px-4">Rs. 85,000</td>
                          <td className="py-3 px-4">850</td>
                          <td className="py-3 px-4">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                              Pending Approval
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                              Review
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Amal Fernando</td>
                          <td className="py-3 px-4">Retainer</td>
                          <td className="py-3 px-4">Rs. 15,000</td>
                          <td className="py-3 px-4">150</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              Approved
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-300">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Lakshmi Navaratne</td>
                          <td className="py-3 px-4">Palatal Expander</td>
                          <td className="py-3 px-4">Rs. 45,000</td>
                          <td className="py-3 px-4">450</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              In Review
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                              Review
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Inventory Tab */}
            {activeTab === 'inventory' && (
              <SupplyInventory/>
            )}

{/* Doctors Tab */}
            {activeTab === 'doctors' && (
              <Doctors />
            )}
            
            {/* Patients Tab */}
            {activeTab === 'patients' && (
              <PatientManagement />
            )}
            
            {/* Loyalty Program Tab */}
            {activeTab === 'loyalty' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Loyalty Program</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Available Points</h3>
                    <div className="text-5xl font-bold text-blue-600 mb-4">5,230</div>
                    <p className="text-gray-600 mb-4">These points can be used to support low-income patients requiring orthodontic care.</p>
                    <div className="flex items-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-medium">530 points earned this month</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Points Usage</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Points Used for Treatments</span>
                        <span className="font-medium">1,250</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Points Pending Approval</span>
                        <span className="font-medium">1,300</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Total Points Earned</span>
                        <span className="font-medium">7,780</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Points History</h3>
                  <LoyaltyPointsChart />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Low-Income Support Cases</h3>
                  <div className="overflow-auto max-h-96">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-3 px-4 text-left text-gray-600">Patient</th>
                          <th className="py-3 px-4 text-left text-gray-600">Treatment</th>
                          <th className="py-3 px-4 text-left text-gray-600">Doctor</th>
                          <th className="py-3 px-4 text-left text-gray-600">Points Required</th>
                          <th className="py-3 px-4 text-left text-gray-600">Status</th>
                          <th className="py-3 px-4 text-left text-gray-600">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Priya Mendis</td>
                          <td className="py-3 px-4">Full Braces Treatment</td>
                          <td className="py-3 px-4">Dr. Sarah Mendis</td>
                          <td className="py-3 px-4">850</td>
                          <td className="py-3 px-4">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                              Pending Approval
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                              Approve
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Amal Fernando</td>
                          <td className="py-3 px-4">Retainer</td>
                          <td className="py-3 px-4">Dr. Sarah Mendis</td>
                          <td className="py-3 px-4">150</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              Approved
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-300">
                              View
                            </button>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Lakshmi Navaratne</td>
                          <td className="py-3 px-4">Palatal Expander</td>
                          <td className="py-3 px-4">Dr. Sarah Mendis</td>
                          <td className="py-3 px-4">450</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              In Review
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                              Complete Review
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default HospitalDashboard;