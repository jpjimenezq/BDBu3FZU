import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  const [workspaceData, setWorkspaceData] = useState({
    phone: '755 557 0238',
    name: 'CodeGame'
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Building2 className="w-5 h-5 text-red-500" />
        <h4 className="text-lg font-medium text-gray-900">Información de tu empresa</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
            Whatsapp de contacto
          </label>
          <div className="flex">
            <select className="rounded-l-md border border-r-0 border-gray-300 px-3 py-2 text-gray-500">
              <option>+52</option>
            </select>
            <input
              type="tel"
              id="whatsapp"
              value={workspaceData.phone}
              onChange={(e) => setWorkspaceData({ ...workspaceData, phone: e.target.value })}
              className="flex-1 rounded-r-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="workspace" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del Workspace
          </label>
          <input
            type="text"
            id="workspace"
            value={workspaceData.name}
            onChange={(e) => setWorkspaceData({ ...workspaceData, name: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;