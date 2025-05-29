import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DoctorPortal from './components/DoctorPortal';
import PatientInterface from './components/PatientInterface';
import SupplierDashboard from './components/SupplierDashboard';
import HospitalDashboard from './components/HospitalDashboard';
import AdminPanel from './components/AdminPanel';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor" element={<DoctorPortal />} />
          <Route path="/patient" element={<PatientInterface />} />
          <Route path="/supplier" element={<SupplierDashboard />} />
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;