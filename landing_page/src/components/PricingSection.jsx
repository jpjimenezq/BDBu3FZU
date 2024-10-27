import React, { forwardRef } from 'react';

const PricingSection = forwardRef((props, ref) => (
  <section id='precios' ref={ref} className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">
          ¿Cuál es el precio de ConectaCRM?
        </h2>
        <p className="text-gray-600">¡Una suscripción, acceso ilimitado y sin contrato forzoso!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Trial Plan */}
        <div className="border-2 border-indigo-200 rounded-lg p-8 relative">
          <div className="absolute -top-3 left-4">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              PRUÉBALO
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">PERIODO SETUP</h3>
          <div className="mb-4">
            <span className="text-5xl font-bold">$7</span>
            <span className="text-gray-600 ml-2">USD</span>
          </div>
          <p className="text-gray-600 mb-6">por 14 días, y luego $83.99 USD mensual</p>
          
          <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors mb-6">
            REGÍSTRATE Y CONTRATA
          </button>

          <ul className="space-y-3">
            {[
              '3 usuarios',
              'Mensajes ilimitados',
              'Embudos ilimitados',
              'Integración WhatsApp',
              'Integración Facebook Messenger e Instagram',
              'Leadbot con Marca de Agua',
              'Acceso a ConectaCRM Academy'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Monthly Plan */}
        <div className="border-2 border-indigo-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-2">PLAN MENSUAL</h3>
          <div className="mb-4">
            <span className="text-5xl font-bold">$83.99</span>
            <span className="text-gray-600 ml-2">USD</span>
          </div>
          <p className="text-gray-600 mb-6">Suscripción mensual</p>
          
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors mb-6">
            REGÍSTRATE Y CONTRATA
          </button>

          <ul className="space-y-3">
            {[
              '3 usuarios',
              'Mensajes ilimitados',
              'Embudos ilimitados',
              'Integración WhatsApp',
              'Integración Facebook Messenger e Instagram',
              'Leadbot con Marca de Agua',
              'Acceso a ConectaCRM Academy',
              'Soporte por Chat'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
));

export default PricingSection;
