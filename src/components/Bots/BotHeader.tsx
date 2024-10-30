import React from 'react';
import { Zap } from 'lucide-react';

const BotHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-yellow-500" />
        <h1 className="text-2xl font-bold text-gray-800">Automatizaciones</h1>
      </div>
      <h2 className="text-xl text-indigo-600 font-semibold mb-2">
        Ofrecer la mejor atención a tus leads incluso cuando no estás presente.
      </h2>
      <p className="text-gray-600 max-w-3xl">
        Aquí puedes crear respuestas personalizadas o menús de opciones para aquellos leads que te contacten por primera vez.
        Puedes activas o desactivas cuando quieras, optimiza tus interacciones con tus leads.
      </p>
    </div>
  );
};

export default BotHeader;