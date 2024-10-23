import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

const IntegrationItem = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => (
  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
    <div className="flex items-center gap-3">
      <Icon className={color} size={24} />
      <span>{name}</span>
    </div>
    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
      Conectar
    </button>
  </div>
);

const IntegrationsSection = () => {
  const integrations = [
    { icon: MessageCircle, name: 'WhatsApp web', color: 'text-green-500' },
    { icon: MessageCircle, name: 'Messenger', color: 'text-blue-500' },
    { icon: Instagram, name: 'Instagram', color: 'text-pink-500' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Integraciones 🔗</h2>
      <div className="space-y-4">
        {integrations.map((integration, index) => (
          <IntegrationItem key={index} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default IntegrationsSection;