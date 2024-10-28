import React, { useState } from 'react';
import GoogleCalendar from './GoogleCalendar';

function Hero() {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-indigo-600 mb-6">
            CRM para WhatsApp, Facebook e Instagram
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Conecta todos servicios de mensajería más populares para tener un mejor manejo de tus leads y aumentar tus ventas en muy poco tiempo 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowScheduler(true)}
              className="px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
            >
              Agendar demo comercial
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
              Crea tu cuenta
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
      </div>

      {/* Mostrar el componente GoogleCalendar si showScheduler es true */}
      {showScheduler && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <button onClick={() => setShowScheduler(false)} className="text-red-500 mb-4">Cerrar</button>
            <GoogleCalendar />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
