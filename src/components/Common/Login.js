import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password || !role) {
      setError('Please fill in all fields');
      return;
    }
    
    // Demo credentials for each role
    const validCredentials = {
      doctor: { email: 'doctor@example.com', password: 'password123' },
      patient: { email: 'patient@example.com', password: 'password123' },
      hospital: { email: 'hospital@example.com', password: 'password123' },
      supplier: { email: 'supplier@example.com', password: 'password123' },
      admin: { email: 'admin@example.com', password: 'password123' }
    };
    
    // Check if credentials match for the selected role
    if (validCredentials[role].email === email && validCredentials[role].password === password) {
      // Create a user object with minimal information for the prototype
      const user = {
        email,
        role,
        name: role === 'doctor' ? 'Dr. Sarah Mendis' : 
              role === 'patient' ? 'Amara Silva' :
              role === 'hospital' ? 'Lady Ridgeway Hospital' :
              role === 'supplier' ? 'MedSupply Lanka' : 'Admin User',
      };
      
      login(user);
      navigate(`/${role}`);
    } else {
      setError('Invalid credentials. Try using the demo account.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-6 px-6">
          <div className="flex justify-center">
            <Link to="/">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <img 
                  src="/images/Logo.png" 
                  alt="DentiX Logo" 
                  className="h-12 w-auto" 
                />
              </div>
            </Link>
          </div>
          <h2 className="text-center text-3xl font-bold text-white mt-4">
            Welcome Back
          </h2>
          <p className="text-center text-white text-opacity-90 mt-1">
            Sign in to your DentiX account
          </p>
        </div>
        
        <div className="py-8 px-6">
          {error && (
            <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                I am a:
              </label>
              <select 
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your role</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="hospital">Hospital</option>
                <option value="supplier">Supplier</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Demo Accounts:
            </p>
            <div className="text-xs text-gray-500 mb-4">
              <p>Doctor: doctor@example.com / password123</p>
              <p>Patient: patient@example.com / password123</p>
              <p>Hospital: hospital@example.com / password123</p>
              <p>Supplier: supplier@example.com / password123</p>
            </div>
            
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
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

export default Login;