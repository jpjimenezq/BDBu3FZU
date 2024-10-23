import React, { useState } from 'react';
import { Crown, Zap } from 'lucide-react';
import Sidebar from './components/Sidebar';
import SalesFunnel from './components/SalesFunnel';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState('Home');

  const renderContent = () => {
    switch (selectedIcon) {
      case 'Home':
        return <Dashboard />;
      case 'Filter':
        return <SalesFunnel />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar selected={selectedIcon} onSelect={setSelectedIcon} />

      <main className="flex-1 pl-24 pr-8 py-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              Hola, Noe<Crown className="w-5 h-5 text-yellow-400" />
            </h1>
            <p className="text-blue-600">¡Bienvenido a Leadsales!</p>
          </div>
          <div className="text-gray-600">
            Martes, 22 de Octubre de 2024
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default App;
