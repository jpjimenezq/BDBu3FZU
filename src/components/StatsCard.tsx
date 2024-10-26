import React, { useEffect, useState } from 'react';

const StatsCard = () => {
  const [nuevosLeads, setNuevosLeads] = useState(0);
  const [porcentajeCambio, setPorcentajeCambio] = useState(0);

  useEffect(() => {
    const fetchNuevosLeads = async () => {
      const userEmail = localStorage.getItem('user');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!userEmail || !refreshToken) {
        console.error('El usuario o el token no están disponibles');
        return;
      }

      const response = await fetch('http://localhost:5000/leads/nuevos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`,
        },
        body: JSON.stringify({ userEmail }),
      });

      if (response.ok) {
        const data = await response.json();
        setNuevosLeads(data.nuevosLeadsActual);
        setPorcentajeCambio(data.porcentajeCambio);
      } else {
        console.error('Error al obtener nuevos leads');
      }
    };

    fetchNuevosLeads();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 h-60">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Nuevos leads</h2>
        <span className={`px-2 py-1 rounded-full text-sm ${porcentajeCambio >= 0 ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'}`}>
          {porcentajeCambio >= 0 ? `+${porcentajeCambio}%` : `${porcentajeCambio}%`}
        </span>
      </div>
      <div className="text-4xl font-bold">{nuevosLeads}</div>
      <div className="text-gray-500 text-sm">{nuevosLeads} Leads</div>
    </div>
  );
};

export default StatsCard;
