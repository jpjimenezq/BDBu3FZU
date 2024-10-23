import React from 'react';

const LeadsalesAcademy: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">¿Tienes dudas?</h2>
        <p className="text-gray-600 mb-4">
          Resuelve todas tus dudas en
          <br />
          <span className="text-blue-600 font-medium">Leadsales Academy</span>
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Ingresa y aprende
        </button>
      </div>
    </div>
  );
};

export default LeadsalesAcademy;