import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { LoginForm } from './components/LoginForm';
import Dashboard from './components/Dashboard';
import SalesFunnel from './components/SalesFunnel';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('Home');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Estado para controlar si el Sidebar está expandido

  const handleLogin = (email: string, password: string) => {
    // Cambia este manejo según tu lógica de autenticación
    setIsAuthenticated(true); // Asume que las credenciales son correctas si no se lanza un error
  };

  const handleSelect = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded); // Actualizamos el estado cuando se expande el Sidebar
  };

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
    <div className="min-h-screen">
      {isAuthenticated ? (
        <div className="flex">
          {/* Sidebar con los iconos */}
          <Sidebar selected={selectedIcon} onSelect={handleSelect} onExpand={handleSidebarToggle} />

          {/* Contenido principal con espacio dinámico según el ancho del Sidebar */}
          <div className={`flex-1 p-8 transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-16'}`}>
            {renderContent()}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
