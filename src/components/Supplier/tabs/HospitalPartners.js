import React, { useState } from 'react';

function HospitalPartners() {
  // Mock data for hospital partners
  const [hospitals, setHospitals] = useState([
    { 
      id: 1, 
      name: 'Lady Ridgeway Children\'s Hospital', 
      location: 'Colombo', 
      contactPerson: 'Dr. Nilantha Rathnayake',
      email: 'nilantha@lrch.health.gov.lk',
      phone: '+94 11 2635 912',
      lastOrder: '2025-05-10',
      totalOrders: 24,
      revenue: 375000
    },
    { 
      id: 2, 
      name: 'National Dental Hospital', 
      location: 'Colombo', 
      contactPerson: 'Dr. Priyanka De Silva',
      email: 'priyanka@ndh.health.gov.lk',
      phone: '+94 11 2678 452',
      lastOrder: '2025-05-12',
      totalOrders: 18,
      revenue: 280000
    },
    { 
      id: 3, 
      name: 'Colombo General Hospital', 
      location: 'Colombo', 
      contactPerson: 'Dr. Manoj Fernando',
      email: 'manoj@cgh.health.gov.lk',
      phone: '+94 11 2689 732',
      lastOrder: '2025-05-14',
      totalOrders: 12,
      revenue: 205000
    },
    { 
      id: 4, 
      name: 'Kandy Teaching Hospital', 
      location: 'Kandy', 
      contactPerson: 'Dr. Laksiri Bandara',
      email: 'laksiri@kth.health.gov.lk',
      phone: '+94 81 2234 561',
      lastOrder: '2025-05-15',
      totalOrders: 15,
      revenue: 245000
    }
  ]);
  
  // State for selected hospital details
  const [selectedHospital, setSelectedHospital] = useState(null);
  
  // State for filter
  const [locationFilter, setLocationFilter] = useState('');
  
  // Filtered hospitals
  const filteredHospitals = locationFilter 
    ? hospitals.filter(hospital => hospital.location === locationFilter)
    : hospitals;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Hospital Partners</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add New Hospital
        </button>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Galle">Galle</option>
              <option value="Jaffna">Jaffna</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              placeholder="Search hospitals..." 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hospital List */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hospital List</h3>
            <div className="space-y-4">
              {filteredHospitals.map(hospital => (
                <div 
                  key={hospital.id}
                  className={`border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
                    selectedHospital?.id === hospital.id ? 'border-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedHospital(hospital)}
                >
                  <h3 className="font-semibold text-lg">{hospital.name}</h3>
                  <p className="text-gray-500 text-sm">{hospital.location}</p>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm">Last Order: {new Date(hospital.lastOrder).toLocaleDateString()}</span>
                    <span className="text-sm font-medium">₨ {hospital.revenue.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Hospital Details */}
        <div className="md:w-1/2">
          {selectedHospital ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{selectedHospital.name}</h3>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{selectedHospital.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Person</p>
                  <p className="font-medium">{selectedHospital.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-blue-600">{selectedHospital.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{selectedHospital.phone}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">Order Summary</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="text-xl font-semibold text-blue-600">{selectedHospital.totalOrders}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-xl font-semibold text-green-600">₨ {selectedHospital.revenue.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Last Order</p>
                    <p className="text-xl font-semibold text-gray-800">{new Date(selectedHospital.lastOrder).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  View Order History
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                  Contact Hospital
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <p className="text-gray-500">Select a hospital to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HospitalPartners;