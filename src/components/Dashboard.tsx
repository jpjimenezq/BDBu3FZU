import React from 'react';
import StatsCard from './StatsCard';
import IntegrationsSection from './IntegrationsSection';
import TeamSidebar from './TeamSidebar';
import LeadsalesAcademy from './LeadsalesAcademy';

const Dashboard = () => {
  const today = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="flex-1 p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="text-gray-600">{today}</div>
      </header>

      <div className="flex space-x-4">
        <div className="flex-1">
          <StatsCard />
        </div>
        <div className="w-1/4">
          <TeamSidebar />
        </div>
      </div>

      <IntegrationsSection />
      <LeadsalesAcademy />
    </main>
  );
};

export default Dashboard;
