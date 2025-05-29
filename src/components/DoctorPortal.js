import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorPortal() {
  // State for active tab and forms
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  // Mock data for patients
  const [patients, setPatients] = useState([
    { id: 1, name: 'Amara Silva', age: 16, treatment: 'Braces Adjustment', nextAppointment: '2025-05-15', status: 'Active' },
    { id: 2, name: 'Dinesh Perera', age: 14, treatment: 'New Braces', nextAppointment: '2025-05-18', status: 'Pending' },
    { id: 3, name: 'Malini Fernando', age: 12, treatment: 'Retainer Fitting', nextAppointment: '2025-05-20', status: 'Active' },
    { id: 4, name: 'Tharushi Jayawardena', age: 15, treatment: 'Wire Replacement', nextAppointment: '2025-05-22', status: 'Waiting for supplies' }
  ]);
  
  // Mock data for supply orders
  const [orders, setOrders] = useState([
    { id: 101, item: 'Ceramic Brackets', quantity: 30, date: '2025-05-10', status: 'Delivered' },
    { id: 102, item: 'Orthodontic Wires 0.016"', quantity: 20, date: '2025-05-12', status: 'Processing' },
    { id: 103, item: 'Elastic Ligatures', quantity: 100, date: '2025-05-14', status: 'Pending' }
  ]);

  // Handler for adding a new patient
  const handleAddPatient = (e) => {
    e.preventDefault();
    // Mock implementation - would connect to backend in real app
    setPatients([...patients, {
      id: patients.length + 5,
      name: 'New Patient',
      age: 15,
      treatment: 'Initial Consultation',
      nextAppointment: '2025-05-25',
      status: 'New'
    }]);
    setShowNewPatientForm(false);
  };

  // Handler for adding a new order
  const handleAddOrder = (e) => {
    e.preventDefault();
    // Mock implementation - would connect to backend in real app
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
              <span className="mr-2">Dr. Sarah Mendis</span>
              <span className="bg-blue-600 rounded-full px-2 py-1 text-xs">Orthodontist</span>
            </div>
            <div className="bg-white rounded-full p-1 h-10 w-10 flex items-center justify-center shadow-md">
              <span className="text-blue-600 font-bold">SM</span>
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
                <h2 className="text-white font-bold text-xl">Doctor Portal</h2>
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
                      onClick={() => setActiveTab('supplies')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'supplies' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Supply Orders
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('appointments')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'appointments' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Appointments
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('hospital')}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        activeTab === 'hospital' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      Hospital Coordination
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Dr. Sarah</h2>
                  <p className="text-gray-600 mb-6">
                    Here's your practice overview for today, May 14, 2025
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <div className="text-blue-500 text-4xl font-bold mb-2">7</div>
                      <div className="text-gray-600">Appointments Today</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="text-green-500 text-4xl font-bold mb-2">3</div>
                      <div className="text-gray-600">Pending Orders</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="text-purple-500 text-4xl font-bold mb-2">12</div>
                      <div className="text-gray-600">Treatment Plans to Review</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">Recent Patient Updates</h3>
                  <div className="overflow-auto max-h-80">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-2 px-4 text-left text-gray-600">Patient</th>
                          <th className="py-2 px-4 text-left text-gray-600">Update</th>
                          <th className="py-2 px-4 text-left text-gray-600">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Amara Silva</td>
                          <td className="py-2 px-4">Braces tightened</td>
                          <td className="py-2 px-4">9:30 AM</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Dinesh Perera</td>
                          <td className="py-2 px-4">Treatment plan approved</td>
                          <td className="py-2 px-4">10:15 AM</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Malini Fernando</td>
                          <td className="py-2 px-4">Waiting for retainer</td>
                          <td className="py-2 px-4">11:45 AM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Supply Status</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span>Ceramic Brackets</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Orthodontic Wires 0.016"</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Low Stock</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Elastic Ligatures</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Out of Stock</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Retainers</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
                      </li>
                    </ul>
                    <button 
                      onClick={() => setActiveTab('supplies')}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all supplies →
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-3">Today's Schedule</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between border-l-4 border-blue-500 pl-3">
                        <div>
                          <div className="font-medium">Amara Silva</div>
                          <div className="text-sm text-gray-500">Braces Adjustment</div>
                        </div>
                        <div className="text-gray-600">9:30 AM</div>
                      </li>
                      <li className="flex justify-between border-l-4 border-green-500 pl-3">
                        <div>
                          <div className="font-medium">Dinesh Perera</div>
                          <div className="text-sm text-gray-500">New Braces</div>
                        </div>
                        <div className="text-gray-600">11:00 AM</div>
                      </li>
                      <li className="flex justify-between border-l-4 border-purple-500 pl-3">
                        <div>
                          <div className="font-medium">Malini Fernando</div>
                          <div className="text-sm text-gray-500">Retainer Fitting</div>
                        </div>
                        <div className="text-gray-600">2:30 PM</div>
                      </li>
                    </ul>
                    <button 
                      onClick={() => setActiveTab('appointments')}
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View full schedule →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Patients Tab */}
            {activeTab === 'patients' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Patients</h2>
                  <button 
                    onClick={() => setShowNewPatientForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Patient
                  </button>
                </div>
                
                {/* Search and filter */}
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="relative w-full sm:w-64">
                    <input 
                      type="text" 
                      placeholder="Search patients..." 
                      className="w-full border rounded-md py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <select className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                    <select className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>All Treatments</option>
                      <option>Braces</option>
                      <option>Retainers</option>
                      <option>Aligners</option>
                    </select>
                  </div>
                </div>
                
                {/* Patients table */}
                <div className="overflow-auto max-h-96">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="py-3 px-4 text-left text-gray-600">Name</th>
                        <th className="py-3 px-4 text-left text-gray-600">Age</th>
                        <th className="py-3 px-4 text-left text-gray-600">Treatment</th>
                        <th className="py-3 px-4 text-left text-gray-600">Next Appointment</th>
                        <th className="py-3 px-4 text-left text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map(patient => (
                        <tr key={patient.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{patient.name}</td>
                          <td className="py-3 px-4">{patient.age}</td>
                          <td className="py-3 px-4">{patient.treatment}</td>
                          <td className="py-3 px-4">{patient.nextAppointment}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              patient.status === 'Active' ? 'bg-green-100 text-green-800' : 
                              patient.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                              patient.status === 'Waiting for supplies' ? 'bg-red-100 text-red-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {patient.status}
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
                              <button className="text-green-600 hover:text-green-800">
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
                
                {/* Add New Patient Modal */}
                {showNewPatientForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Add New Patient</h3>
                        <button 
                          onClick={() => setShowNewPatientForm(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <form onSubmit={handleAddPatient}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Patient Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter patient name"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                              Age
                            </label>
                            <input
                              id="age"
                              type="number"
                              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              placeholder="Age"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointment">
                              First Appointment
                            </label>
                            <input
                              id="appointment"
                              type="date"
                              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="treatment">
                            Treatment Type
                          </label>
                          <select
                            id="treatment"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                          >
                            <option value="">Select treatment type</option>
                            <option value="Initial Consultation">Initial Consultation</option>
                            <option value="Braces">Braces</option>
                            <option value="Retainer">Retainer</option>
                            <option value="Aligners">Aligners</option>
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
                            placeholder="Add any notes about the patient"
                          ></textarea>
                        </div>
                        <div className="flex justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => setShowNewPatientForm(false)}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          >
                            Add Patient
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Supply Orders Tab */}
            {activeTab === 'supplies' && (
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
            )}

            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div className="flex space-x-2">
                    <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium">Today</button>
                    <button className="hover:bg-gray-100 px-4 py-2 rounded-md">Week</button>
                    <button className="hover:bg-gray-100 px-4 py-2 rounded-md">Month</button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      + New Appointment
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="py-3 px-4 text-left text-gray-600">Time</th>
                        <th className="py-3 px-4 text-left text-gray-600">Patient</th>
                        <th className="py-3 px-4 text-left text-gray-600">Type</th>
                        <th className="py-3 px-4 text-left text-gray-600">Duration</th>
                        <th className="py-3 px-4 text-left text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">9:30 AM</td>
                        <td className="py-3 px-4">Amara Silva</td>
                        <td className="py-3 px-4">Braces Adjustment</td>
                        <td className="py-3 px-4">30 min</td>
                        <td className="py-3 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Completed
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
                            <button className="text-green-600 hover:text-green-800">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">11:00 AM</td>
                        <td className="py-3 px-4">Dinesh Perera</td>
                        <td className="py-3 px-4">New Braces</td>
                        <td className="py-3 px-4">45 min</td>
                        <td className="py-3 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            In Progress
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
                            <button className="text-green-600 hover:text-green-800">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">2:30 PM</td>
                        <td className="py-3 px-4">Malini Fernando</td>
                        <td className="py-3 px-4">Retainer Fitting</td>
                        <td className="py-3 px-4">30 min</td>
                        <td className="py-3 px-4">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                            Waiting
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
                            <button className="text-green-600 hover:text-green-800">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">4:00 PM</td>
                        <td className="py-3 px-4">Rajiv Kumar</td>
                        <td className="py-3 px-4">Follow-up</td>
                        <td className="py-3 px-4">20 min</td>
                        <td className="py-3 px-4">
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                            Scheduled
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
                            <button className="text-green-600 hover:text-green-800">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Hospital Coordination Tab */}
            {activeTab === 'hospital' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Hospital Coordination</h2>
                
                <div className="mb-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Current Hospital: Lady Ridgeway Children's Hospital</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-lg font-medium text-gray-800">Hospital Points</div>
                        <div className="text-3xl font-bold text-blue-600">5,230</div>
                        <div className="text-sm text-gray-500">Available for low-income support</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-lg font-medium text-gray-800">Pending Cases</div>
                        <div className="text-3xl font-bold text-orange-500">12</div>
                        <div className="text-sm text-gray-500">Waiting for approvals</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-lg font-medium text-gray-800">Active Treatments</div>
                        <div className="text-3xl font-bold text-green-600">48</div>
                        <div className="text-sm text-gray-500">Currently ongoing</div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Hospital Contact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Chief Dental Officer</div>
                          <div>Dr. Nilantha Rathnayake</div>
                          <div className="text-blue-600">+94 11 2635 912</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Supply Coordinator</div>
                          <div>Ms. Kumari Perera</div>
                          <div className="text-blue-600">kumari.lrh@health.gov.lk</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule coordination meeting
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Low-Income Support Cases</h3>
                  <div className="overflow-auto max-h-96">
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
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Recommend Low-Income Patient</h3>
                  <p className="text-gray-600 mb-4">
                    Use this form to recommend patients who need financial assistance for their orthodontic treatment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient-name">
                        Patient Name
                      </label>
                      <input
                        id="patient-name"
                        type="text"
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter patient name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="treatment-type">
                        Treatment Type
                      </label>
                      <select
                        id="treatment-type"
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select treatment</option>
                        <option value="Braces">Braces</option>
                        <option value="Retainer">Retainer</option>
                        <option value="Palatal Expander">Palatal Expander</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                      Reason for Recommendation
                    </label>
                    <textarea
                      id="reason"
                      className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows="3"
                      placeholder="Explain why this patient needs financial support"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Submit Recommendation
                    </button>
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

export default DoctorPortal;