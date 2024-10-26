import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import ItalyMap from '../components/ItalyMap';
import { categories } from '../data/categories';

function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSearch = () => {
    if (selectedCategory && selectedRegion) {
      navigate(`/aziende/${selectedCategory}/${selectedRegion}`);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Trova Professionisti nella tua zona
        </h1>
        <p className="text-xl text-gray-600">
          Confronta preventivi gratuiti e trova il miglior professionista
        </p>
      </section>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Seleziona un servizio</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">Seleziona una regione</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Cerca Professionisti
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Seleziona la tua regione
        </h2>
        <ItalyMap onRegionSelect={setSelectedRegion} />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-xl shadow-md">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Cerca</h3>
          <p className="text-gray-600">
            Trova facilmente professionisti nella tua zona
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Confronta</h3>
          <p className="text-gray-600">
            Confronta prezzi e recensioni dei professionisti
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl shadow-md">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Scegli</h3>
          <p className="text-gray-600">
            Seleziona il professionista più adatto alle tue esigenze
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;