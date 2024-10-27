import React from 'react';

function CentralizeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-xl aspect-video"></div>
          
          <div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-6">
              Con ConectaCRM centraliza tus mensajes de WhatsApp, Facebook e Instagram en un solo lugar 💻
            </h2>
            
            <p className="text-lg font-medium text-gray-800 mb-4">
              ¡Tuvimos el mismo problema en nuestra empresa!
            </p>
            
            <p className="text-gray-600">
              Muchos negocios batallan por atender a múltiples clientes en WhatsApp. Por esta razón, creamos un CRM para WhatsApp que garantiza un buen seguimiento evitando perder oportunidades de venta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CentralizeSection;