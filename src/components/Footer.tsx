import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">PrezzoSubito</span>
            </div>
            <p className="text-sm">
              La piattaforma italiana per trovare i migliori professionisti nella tua zona
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servizi/casa" className="hover:text-white transition duration-200">
                  Servizi per la Casa
                </Link>
              </li>
              <li>
                <Link to="/servizi/aziende" className="hover:text-white transition duration-200">
                  Servizi per Aziende
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Aziende</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/registrazione-azienda" className="hover:text-white transition duration-200">
                  Registra la tua Azienda
                </Link>
              </li>
              <li>
                <Link to="/dashboard-azienda" className="hover:text-white transition duration-200">
                  Area Aziende
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contatti</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@prezzosubito.it</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+39 02 1234567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PrezzoSubito. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;