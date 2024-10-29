import React, { useState } from 'react';
import { Search, Filter, UserPlus, Download, Upload, Trash2, Users, Filter as FilterIcon } from 'lucide-react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm transition-colors ${
      isActive
        ? 'text-indigo-600 border-b-2 border-indigo-600 font-medium'
        : 'text-gray-600 hover:text-gray-800'
    }`}
  >
    {label}
  </button>
);

const LeadsManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('activos');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm rounded-lg mb-6">
        <div className="flex justify-between items-center p-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Search className="w-4 h-4" />
              Búsqueda avanzada
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <FilterIcon className="w-4 h-4" />
              Filtros avanzados
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <UserPlus className="w-4 h-4" />
              Agregar lead
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-gray-200">
          <Tab
            label="Activos"
            isActive={activeTab === 'activos'}
            onClick={() => setActiveTab('activos')}
          />
          <Tab
            label="Archivados"
            isActive={activeTab === 'archivados'}
            onClick={() => setActiveTab('archivados')}
          />
          <Tab
            label="Todos"
            isActive={activeTab === 'todos'}
            onClick={() => setActiveTab('todos')}
          />
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-gray-300" />
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Users className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Upload className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Mostrando: 0 de 0 leads</span>
          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <Upload className="w-4 h-4" />
            Importar leads
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <Download className="w-4 h-4" />
            Descargar todos los leads
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Arch.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de último mensaje recibido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de primer mensaje
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asesor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Embudo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Etapa
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-16 text-center text-gray-500" colSpan={7}>
                No hay contactos
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsManager;