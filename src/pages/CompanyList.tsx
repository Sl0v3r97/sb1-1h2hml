import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, ThumbsUp } from 'lucide-react';
import CompanyCard from '../components/CompanyCard';
import ReviewList from '../components/ReviewList';

function CompanyList() {
  const { category, region } = useParams();

  // Mock data - in production, this would come from your Supabase database
  const companies = [
    {
      id: 1,
      name: "Elettricista Mario Rossi",
      rating: 4.8,
      reviewCount: 156,
      location: "Milano, Lombardia",
      description: "Servizi elettrici professionali con 20 anni di esperienza",
      services: ["Impianti elettrici", "Manutenzione", "Emergenze 24/7"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      verified: true
    },
    // Add more mock companies here
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {category} in {region}
        </h1>
        <p className="text-gray-600 mt-2">
          Professionisti verificati nella tua zona
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Filtri</h2>
            {/* Add filters here */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompanyList;