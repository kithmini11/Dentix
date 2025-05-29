import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function HowItWorks() {
  const { currentUser } = useAuth();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-gradient-to-r from-blue-300 to-blue-400 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
          
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <Link to={`/${currentUser.role}`} className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                Dashboard
              </Link>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-white hover:text-blue-100">
                  Login
                </Link>
                <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">How DentiX Works</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our innovative platform connects all stakeholders in the orthodontic ecosystem
          </p>
          
          {/* Process Steps */}
          <div className="mb-16">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Hospitals Order Supplies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Government hospitals place orders for orthodontic supplies through our platform. Each purchase earns loyalty points that can be used to support low-income patients.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-full border-4 border-blue-400 p-2 w-16 h-16 flex items-center justify-center z-10">
                  <span className="text-blue-600 text-2xl font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <img 
                    src="/images/img1.jpg" 
                    alt="Hospital Order" 
                    className="rounded-lg shadow-md w-80 h-48 object-cover mx-auto"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-center mb-12">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-bold text-green-600 mb-3">Suppliers Fulfill Orders</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Registered suppliers receive and fulfill the orders, providing high-quality orthodontic supplies to hospitals through our efficient logistics system.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-full border-4 border-green-400 p-2 w-16 h-16 flex items-center justify-center z-10">
                  <span className="text-green-600 text-2xl font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <img 
                    src="/images/img3.jpg" 
                    alt="Supplier Fulfillment" 
                    className="rounded-lg shadow-md w-80 h-48 object-cover mx-auto"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-purple-600 mb-3">Doctors Provide Treatment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Doctors use the supplies to provide quality orthodontic care to patients. They can manage appointments, track treatment progress, and coordinate with hospitals.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-full border-4 border-purple-400 p-2 w-16 h-16 flex items-center justify-center z-10">
                  <span className="text-purple-600 text-2xl font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <img 
                    src="/images/img2.jpg" 
                    alt="Doctor Treatment" 
                    className="rounded-lg shadow-md w-80 h-48 object-cover mx-auto"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-bold text-red-600 mb-3">Patients Receive Care</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patients receive treatment, with low-income individuals benefiting from subsidized care through the loyalty points system. Everyone can track their treatment progress through the platform.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-full border-4 border-red-400 p-2 w-16 h-16 flex items-center justify-center z-10">
                  <span className="text-red-600 text-2xl font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <img 
                    src="/images/img5.jpg" 
                    alt="Patient Care" 
                    className="rounded-lg shadow-md w-80 h-48 object-cover mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Role-based Information */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Platform for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-blue-500">
              <div className="bg-blue-50 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-10 h-10 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800">For Doctors</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Manage patient records and treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schedule and track appointments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Request supplies from hospital inventory</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support low-income patients with point allocations</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                    Sign Up as Doctor
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-green-500">
              <div className="bg-green-50 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800">For Hospitals</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Order and manage orthodontic supplies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Earn and manage loyalty points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordinate doctor schedules and patient assignments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Allocate points to subsidize low-income patient care</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup" className="inline-block px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                    Sign Up as Hospital
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How does the loyalty points system work?</h3>
                <p className="text-gray-700">
                  Hospitals earn loyalty points with every purchase of orthodontic supplies through our platform. These points can then be allocated to subsidize treatment for low-income patients, making quality orthodontic care accessible to everyone.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How are low-income patients identified?</h3>
                <p className="text-gray-700">
                  Doctors and hospitals can identify patients who need financial assistance and submit applications for support. The system reviews the applications and allocates points based on need and availability.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">How do suppliers join the platform?</h3>
                <p className="text-gray-700">
                  Suppliers can register through our website and undergo a verification process. Once approved, they can list their products and fulfill orders from hospitals.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Is the platform secure?</h3>
                <p className="text-gray-700">
                  Yes, DentiX employs industry-standard security measures to protect all user data and transactions. Patient information is handled in compliance with healthcare privacy regulations.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Join DentiX?</h3>
            <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl inline-block">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/images/Logo2.png" alt="DentiX" className="h-10 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 DentiX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HowItWorks;