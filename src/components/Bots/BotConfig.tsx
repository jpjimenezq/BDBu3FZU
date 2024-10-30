import React from 'react';
import { Settings, ChevronRight } from 'lucide-react';

interface BotConfigOptionProps {
  title: string;
  onClick: () => void;
}

const BotConfigOption: React.FC<BotConfigOptionProps> = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex justify-between items-center hover:bg-gray-50 transition-colors mb-3"
  >
    <span className="font-medium text-gray-900">{title}</span>
    <ChevronRight className="w-5 h-5 text-gray-400" />
  </button>
);

const BotConfigSection: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5 text-gray-600" />
        <h2 className="text-xl font-semibold text-gray-900">Configuración de automatizaciones</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Personaliza respuestas rápidas o configura tu leadbot. Tú decides cómo interactuar con tus leads.
      </p>
      <div className="space-y-3">
        <BotConfigOption 
          title="Respuestas automáticas"
          onClick={() => console.log('Respuestas automáticas clicked')}
        />
        <BotConfigOption 
          title="Leadbot"
          onClick={() => console.log('Leadbot clicked')}
        />
      </div>
    </div>
  );
};

export default BotConfigSection;
