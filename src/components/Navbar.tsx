import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PrezzoSubito</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard-azienda"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Area Aziende
            </Link>
            <Link
              to="/accedi"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-200"
            >
              Accedi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;