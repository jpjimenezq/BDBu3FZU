import React, { forwardRef } from 'react';

const ForbesSection = forwardRef((_, ref) => (
  <section id='aboutUs' ref={ref} className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg aspect-square"></div>
          <div className="bg-gray-100 rounded-lg aspect-square mt-12"></div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-indigo-600 mb-6">
            Somos parte de las 30 Promesas de Negocios en Forbes México
          </h2>
          <blockquote className="text-gray-600 italic mb-6">
            "La plataforma que nosotros hacemos permite que pases de una lista infinita a que la puedas organizar en columnas como si fuera un archivo de Excel, y eso te permite tener visibilidad de en qué proceso se encuentra cada uno de los chats y que ofrezcas mensajes de seguimiento".
          </blockquote>
          <p className="text-gray-800 font-medium">- Roby Peñacastro.</p>
        </div>
      </div>
    </div>
  </section>
));

export default ForbesSection;
