import React, { ReactElement } from 'react';

interface IntegrationCardProps {
  icon: ReactElement;
  name: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl">
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{name}</span>
      </div>
      <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
        Conectar
      </button>
    </div>
  );
};

export default IntegrationCard;