import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import SalesFunnel from './components/SalesFunnel';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ChatDashboard from './components/Chat/ChatDashboard';
import Agenda from './components/Calendar/Agenda';
import LeadsDashboard from './components/LeadsManager/LeadsDashboard';
import BotConfigSection from './components/Bots/BotConfig';
import Settings from './components/Settings/Settings';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState('Home');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const getRefreshToken = () => localStorage.getItem('refreshToken');

  const verifyToken = useCallback(() => {
    const token = getRefreshToken();
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('refreshToken');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('refreshToken', data.refreshToken);
        setIsAuthenticated(true);
      } else {
        console.error('Error en login:', data.message);
      }
    } catch (error) {
      console.error('Error en el login:', error);
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.token);
        setIsAuthenticated(true);
      } else {
        console.error('Register error:', data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const toggleAuthForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSelect = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  const renderContent = () => {
    switch (selectedIcon) {
      case 'Home':
        return <Dashboard />;
      case 'Filter':
        return <SalesFunnel />;
      case 'MessageSquare':
        return <ChatDashboard />;
      case 'CalendarCheck':
        return <Agenda />;
      case 'Contact2':
        return <LeadsDashboard />;
      case 'BotMessageSquare':
        return <BotConfigSection />;
      case 'Settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {isAuthenticated ? (
        <div className="flex">
          <Sidebar selected={selectedIcon} onSelect={handleSelect} onExpand={handleSidebarToggle} />
          <div className={`flex-1 p-8 transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-16'}`}>
            <Routes>
              <Route path="/" element={renderContent()} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sales-funnel" element={<SalesFunnel />} />
              </Route>
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {isRegistering ? (
            <RegisterForm onRegister={handleRegister} onToggleAuthForm={toggleAuthForm} />
          ) : (
            <LoginForm onLogin={handleLogin} onToggleAuthForm={toggleAuthForm} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
