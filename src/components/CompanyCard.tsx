import React from 'react';
import { Star, MapPin, Phone, Mail, ThumbsUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompanyCardProps {
  company: {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    location: string;
    description: string;
    services: string[];
    image: string;
    verified: boolean;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
              {company.verified && (
                <CheckCircle className="w-5 h-5 text-blue-500" />
              )}
            </div>
            
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-900 font-semibold">{company.rating}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600">{company.reviewCount} recensioni</span>
            </div>

            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{company.location}</span>
            </div>

            <p className="mt-3 text-gray-600">{company.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {company.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <img
            src={company.image}
            alt={company.name}
            className="w-24 h-24 rounded-lg object-cover ml-4"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Phone className="w-4 h-4 mr-1" />
              <span>Chiama</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Mail className="w-4 h-4 mr-1" />
              <span>Email</span>
            </button>
          </div>

          <Link
            to={`/azienda/${company.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Richiedi Preventivo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;