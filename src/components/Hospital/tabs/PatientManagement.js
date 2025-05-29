import React from 'react';

const PatientManagement = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Patient Management</h2>
        <div className="flex space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Patient
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600 mb-1">387</div>
            <div className="text-sm text-gray-600">Total Patients</div>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-600 mb-1">45</div>
            <div className="text-sm text-gray-600">Active Treatments</div>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-purple-600 mb-1">12</div>
            <div className="text-sm text-gray-600">Low-Income Patients</div>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-yellow-600 mb-1">23</div>
            <div className="text-sm text-gray-600">New This Month</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Patient List</h3>
          <div className="flex space-x-2">
            <select className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Patients</option>
              <option>Active Treatment</option>
              <option>Low-Income Support</option>
              <option>Completed Treatment</option>
            </select>
            <select className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by Name</option>
              <option>Sort by Date</option>
              <option>Sort by Treatment</option>
            </select>
          </div>
        </div>

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
                  Doctor
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
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">AS</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Amara Silva</div>
                      <div className="text-sm text-gray-500">asilva@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14 / F</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Metal Braces</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Sarah Mendis</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 15, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Edit</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-medium">DP</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Dinesh Perera</div>
                      <div className="text-sm text-gray-500">dperera@yahoo.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16 / M</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ceramic Braces</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Sarah Mendis</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Low-Income Support
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 20, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Edit</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-medium">MF</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Malini Fernando</div>
                      <div className="text-sm text-gray-500">mfernando@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 / F</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Retainer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Raj Perera</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Maintenance
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jul 02, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Edit</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-medium">KJ</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Kumara Jayawardene</div>
                      <div className="text-sm text-gray-500">kjaya@outlook.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">13 / M</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Palatal Expander</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Raj Perera</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    New Patient
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 05, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Edit</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-yellow-100 flex items-center justify-center">
                      <span className="text-yellow-600 font-medium">PM</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Priya Mendis</div>
                      <div className="text-sm text-gray-500">pmendis@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 / F</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full Braces Treatment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dr. Sarah Mendis</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Low-Income Support
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pending Approval</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                  <button className="text-gray-600 hover:text-gray-900">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing 5 of 387 patients</div>
          <div className="flex space-x-2">
            <button className="border rounded-md px-3 py-1 text-sm bg-gray-50 hover:bg-gray-100">Previous</button>
            <button className="border rounded-md px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700">1</button>
            <button className="border rounded-md px-3 py-1 text-sm bg-gray-50 hover:bg-gray-100">2</button>
            <button className="border rounded-md px-3 py-1 text-sm bg-gray-50 hover:bg-gray-100">3</button>
            <button className="border rounded-md px-3 py-1 text-sm bg-gray-50 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;