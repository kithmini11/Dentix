import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function AboutUs() {
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About DentiX</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img src="/images/Logo2.png" alt="DentiX" className="h-48 mx-auto" />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  DentiX aims to revolutionize orthodontic care in Sri Lanka by connecting doctors, patients, suppliers, and hospitals on a single platform. We're committed to making orthodontic supplies more accessible while supporting low-income patients through our innovative points system.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                DentiX was founded in 2024 by a team of healthcare professionals and technology experts who identified a critical gap in Sri Lanka's orthodontic care system. We noticed that government hospitals faced significant challenges in managing orthodontic supplies, while low-income patients often couldn't access essential treatments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform emerged as a solution that benefits all stakeholders in the orthodontic ecosystem. By streamlining supply management, creating a loyalty points system, and facilitating community support, DentiX transforms how orthodontic care is delivered across the country.
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full bg-white p-2 shadow-lg">
                    <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-blue-600 text-3xl font-bold">MP</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Mihiri Perera</h3>
                  <p className="text-blue-600 mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Dental Surgeon with over 12 years of experience in public healthcare.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-24"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full bg-white p-2 shadow-lg">
                    <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-green-600 text-3xl font-bold">AJ</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Ashan Jayasuriya</h3>
                  <p className="text-green-600 mb-3">CTO</p>
                  <p className="text-gray-600 text-sm">
                    Software architect specializing in healthcare information systems.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-24"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="h-24 w-24 rounded-full bg-white p-2 shadow-lg">
                    <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-purple-600 text-3xl font-bold">SF</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Samanthi Fernando</h3>
                  <p className="text-purple-600 mb-3">Operations Director</p>
                  <p className="text-gray-600 text-sm">
                    Former hospital administrator with expertise in healthcare logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl inline-block">
              Join DentiX Today
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

export default AboutUs;