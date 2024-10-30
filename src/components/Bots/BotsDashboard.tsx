import React from 'react';
import Header from './BotHeader';
import ConfigSection from './BotConfig';

const BotsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Header />
        <ConfigSection />
      </div>
    </div>
  );
};

export default BotsDashboard;