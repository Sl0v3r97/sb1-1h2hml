import React from 'react';

interface ItalyMapProps {
  onRegionSelect: (region: string) => void;
}

const ItalyMap: React.FC<ItalyMapProps> = ({ onRegionSelect }) => {
  const regions = [
    'Valle d\'Aosta', 'Piemonte', 'Liguria', 'Lombardia', 'Trentino-Alto Adige',
    'Veneto', 'Friuli-Venezia Giulia', 'Emilia-Romagna', 'Toscana', 'Umbria',
    'Marche', 'Lazio', 'Abruzzo', 'Molise', 'Campania', 'Puglia', 'Basilicata',
    'Calabria', 'Sicilia', 'Sardegna'
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {regions.map((region) => (
        <button
          key={region}
          onClick={() => onRegionSelect(region)}
          className="p-4 text-left hover:bg-blue-50 rounded-lg transition duration-200"
        >
          {region}
        </button>
      ))}
    </div>
  );
}

export default ItalyMap;