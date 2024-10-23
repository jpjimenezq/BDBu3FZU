import React from 'react';

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 h-60">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Nuevos leads</h2>
        <span className="text-green-500 bg-green-50 px-2 py-1 rounded-full text-sm">+100%</span>
      </div>
      <div className="text-4xl font-bold">0</div>
      <div className="text-gray-500 text-sm">0 Leads</div>
    </div>
  );
};

export default StatsCard;
