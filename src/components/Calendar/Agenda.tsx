import React, { useState } from 'react';
import { Calendar, Users, List as ListIcon, Plus, Layout } from 'lucide-react';

interface TabProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-2 text-sm transition-colors ${
      isActive
        ? 'text-indigo-600 border-b-2 border-indigo-600'
        : 'text-gray-600 hover:text-gray-800'
    }`}
  >
    {icon}
    {label}
  </button>
);

const Agenda: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lista');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">Agenda</h1>
        </div>
        <h2 className="text-xl text-indigo-600 font-semibold mb-2">
          Organiza tu tiempo de manera eficiente en tu módulo de agenda
        </h2>
        <p className="text-gray-600 max-w-3xl">
          Crea, edita y elimina eventos, tareas o recordatorios fácilmente. Consulta tu agenda diaria, semanal o mensual y gestiona tus eventos de forma sencilla. Además, acepta o rechaza fácilmente los eventos asignados o a los que estés invitado.
        </p>
      </div>

      {/* Navigation and Actions */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200">
        <div className="flex">
          <Tab
            label="Lista"
            icon={<ListIcon className="w-4 h-4" />}
            isActive={activeTab === 'lista'}
            onClick={() => setActiveTab('lista')}
          />
          <Tab
            label="Calendario"
            icon={<Calendar className="w-4 h-4" />}
            isActive={activeTab === 'calendario'}
            onClick={() => setActiveTab('calendario')}
          />
          <Tab
            label="Equipo"
            icon={<Users className="w-4 h-4" />}
            isActive={activeTab === 'equipo'}
            onClick={() => setActiveTab('equipo')}
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <Plus className="w-4 h-4" />
            Agregar Evento
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            <Layout className="w-4 h-4" />
            Templates
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h3 className="text-lg font-medium text-gray-900 mb-8">
          Lista de eventos
        </h3>
        
        {/* Empty State */}
        <div className="text-center py-12 px-4">
          <Calendar className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Bienvenido a tu agenda
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Para empezar, crea un template que te permitirá gestionar, editar y organizar tus eventos, tareas o recordatorios
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <Layout className="w-5 h-5" />
            Crear un template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agenda;