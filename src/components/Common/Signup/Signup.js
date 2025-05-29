import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DoctorSignupForm from './DoctorSignupForm';
import PatientSignupForm from './PatientSignupForm';
import HospitalSignupForm from './HospitalSignupForm';
import SupplierSignupForm from './SupplierSignupForm';
import { useAuth } from '../../../context/AuthContext';

function Signup() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  // User role options with their details
  const userRoles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Manage patient treatments, order supplies, and coordinate with hospitals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-50'
    },
    {
      id: 'patient',
      title: 'Patient',
      description: 'Track your treatments, appointments, and manage your orthodontic care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      hoverColor: 'hover:bg-green-50'
    },
    {
      id: 'hospital',
      title: 'Hospital',
      description: 'Manage doctors, inventory, and coordinate orthodontic care services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      hoverColor: 'hover:bg-red-50'
    },
    {
      id: 'supplier',
      title: 'Supplier',
      description: 'Manage inventory, fulfill orders, and coordinate with hospitals',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-50'
    }
  ];

 const handleSignupSubmit = (formData) => {
    console.log('Signup data:', formData);
    
    // Create a simplified user object
    const user = {
      ...formData,
      role: selectedRole,
      name: formData.name || formData.hospitalName || formData.companyName || 'New User'
    };
    
    // Login the user automatically after signup
    login(user);
    
    // Redirect to the appropriate dashboard
    navigate(`/${selectedRole}`);
  };

  // If user hasn't selected a role, show the role selection cards
  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-10">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <img 
                    src="/images/Logo.png" 
                    alt="DentiX Logo" 
                    className="h-16 w-auto" 
                  />
                </div>
              </div>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Join DentiX</h1>
            <p className="text-gray-600 mt-2">Select your role to get started with registration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRoles.map((role) => (
              <div 
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`bg-white rounded-xl shadow-md p-6 border ${role.borderColor} ${role.hoverColor} transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {role.icon}
                  </div>
                  <h2 className={`text-xl font-bold mb-2 ${role.textColor}`}>{role.title}</h2>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </Link>
            </p>
            <Link to="/" className="block mt-4 text-sm text-gray-500 hover:text-gray-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If a role is selected, show the appropriate form
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className={`bg-gradient-to-r ${userRoles.find(r => r.id === selectedRole).color} py-6 px-6`}>
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <img 
                src="/images/Logo.png" 
                alt="DentiX Logo" 
                className="h-12 w-auto" 
              />
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold text-white mt-4">
            {userRoles.find(r => r.id === selectedRole).title} Registration
          </h2>
          <p className="text-center text-white text-opacity-90 mt-1">
            Create your DentiX account
          </p>
        </div>
        
        <div className="py-8 px-6">
          {selectedRole === 'doctor' && <DoctorSignupForm onSubmit={handleSignupSubmit} />}
          {selectedRole === 'patient' && <PatientSignupForm onSubmit={handleSignupSubmit} />}
          {selectedRole === 'hospital' && <HospitalSignupForm onSubmit={handleSignupSubmit} />}
          {selectedRole === 'supplier' && <SupplierSignupForm onSubmit={handleSignupSubmit} />}
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => setSelectedRole(null)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to role selection
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;