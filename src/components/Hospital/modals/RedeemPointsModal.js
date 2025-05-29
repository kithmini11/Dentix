import React from 'react';

function RedeemPointsModal({ showRedeemForm, setShowRedeemForm, handleRedeemPoints }) {
  if (!showRedeemForm) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Redeem Points</h3>
          <button
            onClick={() => setShowRedeemForm(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleRedeemPoints}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient">
              Patient Name
            </label>
            <input
              id="patient"
              type="text"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter patient name"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowRedeemForm(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Submit Redemption
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RedeemPointsModal;