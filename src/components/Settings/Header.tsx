import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <SettingsIcon className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-800">Ajustes</h1>
      </div>
      <h2 className="text-xl text-indigo-600 font-semibold mb-2">
        Configura tu cuenta y personaliza tu experiencia
      </h2>
      <p className="text-gray-600 max-w-3xl">
        Administra tu información personal, preferencias de seguridad, detalles de suscripción y más desde un solo lugar.
      </p>
    </div>
  );
};

export default Header;