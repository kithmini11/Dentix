import React from 'react';

function HospitalCoordination() {
  return (
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
  );
}

export default HospitalCoordination;