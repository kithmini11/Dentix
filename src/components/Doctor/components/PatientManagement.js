import React, { useState } from 'react';

function PatientManagement() {
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);
  const [patients, setPatients] = useState([
    { id: 1, name: 'Amara Silva', age: 16, treatment: 'Braces Adjustment', nextAppointment: '2025-05-15', status: 'Active' },
    { id: 2, name: 'Dinesh Perera', age: 14, treatment: 'New Braces', nextAppointment: '2025-05-18', status: 'Pending' },
    { id: 3, name: 'Malini Fernando', age: 12, treatment: 'Retainer Fitting', nextAppointment: '2025-05-20', status: 'Active' },
    { id: 4, name: 'Tharushi Jayawardena', age: 15, treatment: 'Wire Replacement', nextAppointment: '2025-05-22', status: 'Waiting for supplies' }
  ]);

  const handleAddPatient = (e) => {
    e.preventDefault();
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

  return (
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
  );
}

export default PatientManagement;