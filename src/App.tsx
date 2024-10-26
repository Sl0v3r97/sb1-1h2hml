import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompanyList from './pages/CompanyList';
import CompanyDashboard from './pages/CompanyDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aziende/:category/:region" element={<CompanyList />} />
          <Route path="/dashboard-azienda" element={<CompanyDashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;