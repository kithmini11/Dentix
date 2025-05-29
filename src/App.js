import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import DoctorPortal from './components/DoctorPortal';
import PatientInterface from './components/PatientInterface';
import SupplierDashboard from './components/SupplierDashboard';
import HospitalDashboard from './components/Hospital/HospitalDashboard';
import AdminPanel from './components/AdminPanel';
import Login from './components/Common/Login';
import Signup from './components/Common/Signup/Signup';
import AboutUs from './components/Common/AboutUs';
import Features from './components/Common/Features';
import HowItWorks from './components/Common/HowItWorks';
import { AuthProvider, useAuth } from './context/AuthContext';
import './index.css';

// Protected route component
function ProtectedRoute({ children, allowedRoles }) {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/" />;
  }
  
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/doctor" element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <DoctorPortal />
              </ProtectedRoute>
            } />
            <Route path="/patient" element={
              <ProtectedRoute allowedRoles={['patient']}>
                <PatientInterface />
              </ProtectedRoute>
            } />
            <Route path="/supplier" element={
              <ProtectedRoute allowedRoles={['supplier']}>
                <SupplierDashboard />
              </ProtectedRoute>
            } />
            <Route path="/hospital" element={
              <ProtectedRoute allowedRoles={['hospital']}>
                <HospitalDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;