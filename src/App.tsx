import React from 'react';
import { Crown } from 'lucide-react';
import Sidebar from './components/Sidebar';
import SalesFunnel from './components/SalesFunnel';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
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

        <SalesFunnel />
      </main>
    </div>
  );
};

export default App;