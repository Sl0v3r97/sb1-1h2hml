import React, { useState } from 'react';
import { Building2, Users, Star, BarChart2, Settings } from 'lucide-react';

function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'overview'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <BarChart2 className="w-5 h-5" />
                  <span>Panoramica</span>
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'services'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                  <span>Servizi</span>
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'reviews'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Star className="w-5 h-5" />
                  <span>Recensioni</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-200 ${
                    activeTab === 'settings'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Impostazioni</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Panoramica</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        Richieste Totali
                      </h3>
                      <p className="text-3xl font-bold">127</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-600 mb-2">
                        Recensioni
                      </h3>
                      <p className="text-3xl font-bold">4.8</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-purple-600 mb-2">
                        Visualizzazioni
                      </h3>
                      <p className="text-3xl font-bold">1,234</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">I Tuoi Servizi</h2>
                  {/* Add service management UI here */}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Recensioni</h2>
                  {/* Add reviews management UI here */}
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Impostazioni</h2>
                  {/* Add settings UI here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;