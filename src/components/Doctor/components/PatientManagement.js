import React, { useState } from 'react';

function PatientManagement() {
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [patients, setPatients] = useState([
    { 
      id: 1, 
      name: 'Amara Silva', 
      email: 'asilva@gmail.com',
      age: 16, 
      gender: 'F',
      treatment: 'Metal Braces', 
      nextAppointment: '2025-06-15', 
      status: 'Active',
      isLowIncome: false,
      phone: '+94 77 123 4567'
    },
    { 
      id: 2, 
      name: 'Dinesh Perera', 
      email: 'dperera@yahoo.com',
      age: 14, 
      gender: 'M',
      treatment: 'Ceramic Braces', 
      nextAppointment: '2025-06-18', 
      status: 'Active',
      isLowIncome: true,
      phone: '+94 71 987 6543'
    },
    { 
      id: 3, 
      name: 'Malini Fernando', 
      email: 'mfernando@gmail.com',
      age: 15, 
      gender: 'F',
      treatment: 'Retainer', 
      nextAppointment: '2025-07-02', 
      status: 'Maintenance',
      isLowIncome: false,
      phone: '+94 76 555 7890'
    },
    { 
      id: 4, 
      name: 'Tharushi Jayawardena', 
      email: 'tjaya@gmail.com',
      age: 13, 
      gender: 'F',
      treatment: 'Palatal Expander', 
      nextAppointment: '2025-06-22', 
      status: 'Waiting for Supplies',
      isLowIncome: false,
      phone: '+94 70 444 1234'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    treatment: '',
    appointment: '',
    notes: '',
    isLowIncome: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    const newPatient = {
      id: patients.length + 1,
      name: formData.name,
      email: formData.email,
      age: parseInt(formData.age),
      gender: formData.gender,
      treatment: formData.treatment,
      nextAppointment: formData.appointment,
      status: 'New Patient',
      isLowIncome: formData.isLowIncome,
      phone: formData.phone
    };
    
    setPatients([...patients, newPatient]);
    setShowNewPatientForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      treatment: '',
      appointment: '',
      notes: '',
      isLowIncome: false
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-blue-100 text-blue-800';
      case 'New Patient':
        return 'bg-indigo-100 text-indigo-800';
      case 'Waiting for Supplies':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getInitialsColor = (name) => {
    const colors = [
      'bg-blue-100 text-blue-600',
      'bg-green-100 text-green-600',
      'bg-purple-100 text-purple-600',
      'bg-yellow-100 text-yellow-600',
      'bg-red-100 text-red-600'
    ];
    return colors[name.length % colors.length];
  };

  // Statistics
  const totalPatients = patients.length;
  const activePatients = patients.filter(p => p.status === 'Active').length;
  const lowIncomePatients = patients.filter(p => p.isLowIncome).length;
  const waitingForSupplies = patients.filter(p => p.status === 'Waiting for Supplies').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Patient Management</h2>
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

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="text-3xl font-bold text-blue-600 mb-1">{totalPatients}</div>
          <div className="text-sm text-gray-600">Total Patients</div>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-lg p-4">
          <div className="text-3xl font-bold text-green-600 mb-1">{activePatients}</div>
          <div className="text-sm text-gray-600">Active Treatments</div>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
          <div className="text-3xl font-bold text-purple-600 mb-1">{lowIncomePatients}</div>
          <div className="text-sm text-gray-600">Low-Income Patients</div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-lg p-4">
          <div className="text-3xl font-bold text-red-600 mb-1">{waitingForSupplies}</div>
          <div className="text-sm text-gray-600">Waiting for Supplies</div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search patients by name or email..." 
              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex space-x-2">
            <select className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Patients</option>
              <option>Active Treatment</option>
              <option>Low-Income Support</option>
              <option>Maintenance</option>
              <option>Waiting for Supplies</option>
            </select>
            <select className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by Name</option>
              <option>Sort by Date</option>
              <option>Sort by Treatment</option>
              <option>Sort by Status</option>
            </select>
          </div>
        </div>

        {/* Patient List */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age/Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Treatment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Appointment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients.map(patient => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`h-10 w-10 flex-shrink-0 rounded-full flex items-center justify-center ${getInitialsColor(patient.name)}`}>
                        <span className="font-medium">{getInitials(patient.name)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">{patient.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.age} / {patient.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.treatment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(patient.status)}`}>
                        {patient.status}
                      </span>
                      {patient.isLowIncome && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Low-Income Support
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {patient.nextAppointment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing {patients.length} patients</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
      
      {/* Add New Patient Modal */}
      {showNewPatientForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
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

              <form onSubmit={handleAddPatient} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter patient's full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="patient@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+94 XX XXX XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                      Age *
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Age"
                      min="1"
                      max="100"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="treatment">
                      Treatment Type *
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select treatment type</option>
                      <option value="Initial Consultation">Initial Consultation</option>
                      <option value="Metal Braces">Metal Braces</option>
                      <option value="Ceramic Braces">Ceramic Braces</option>
                      <option value="Clear Aligners">Clear Aligners</option>
                      <option value="Retainer">Retainer</option>
                      <option value="Palatal Expander">Palatal Expander</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointment">
                      First Appointment *
                    </label>
                    <input
                      id="appointment"
                      name="appointment"
                      type="date"
                      value={formData.appointment}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Add any notes about the patient's condition or special requirements"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="isLowIncome"
                    name="isLowIncome"
                    type="checkbox"
                    checked={formData.isLowIncome}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isLowIncome" className="ml-2 block text-sm text-gray-900">
                    Mark as low-income patient (eligible for support program)
                  </label>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
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
        </div>
      )}
    </div>
  );
}

export default PatientManagement;