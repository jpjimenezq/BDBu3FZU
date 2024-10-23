import React from 'react';
import { Plus } from 'lucide-react';

const TeamSidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-60">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold">👥 Equipo</h3>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Plus size={20} className="text-gray-600" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <Plus size={16} className="text-gray-600" />
        </div>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
          NV
        </div>
      </div>
    </div>
  );
};

export default TeamSidebar;
