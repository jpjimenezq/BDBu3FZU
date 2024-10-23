import React from 'react';
import { Plus } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium flex items-center gap-2">
          👥 Equipo
        </h2>
        <button className="text-gray-600 hover:text-gray-800">
          Comprar Asiento
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-500 transition">
          <Plus className="w-5 h-5" />
        </button>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
          NV
        </div>
      </div>
    </div>
  );
};

export default TeamSection;