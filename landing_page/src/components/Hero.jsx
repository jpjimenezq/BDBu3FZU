import React from 'react';

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-indigo-600 mb-6">
            CRM para WhatsApp, Facebook e Instagram
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ayudamos a tu negocio a organizar las conversaciones en WhatsApp, Facebook e Instagram en un solo lugar para que tripliques tus ventas en 90 días 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Agendar demo comercial
            </button>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
              Crea tu cuenta
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
      </div>
    </div>
  );
}

export default Hero;