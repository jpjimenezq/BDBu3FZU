import React from 'react';
import { Check } from 'lucide-react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const SubscriptionForm: React.FC = () => {
    initMercadoPago('YOUR_PUBLIC_KEY',{
        locale: "es-MX"
    });
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
          ¡Mejora tu experiencia con nuestro Plan Acceso Completo!
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Disfruta de todas las herramientas desde el primer día, te ofrecemos nuestro plan Set up por 14 días para poder configurar tu cuenta y aprender a usar todas las herramientas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {/* Business Plan */}
        <div className="relative bg-white rounded-lg border-2 border-indigo-100 p-6">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full">
            Recomendado
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Business Plan</h4>
              <p className="text-sm text-gray-600">Suscripción mensual</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-bold text-indigo-600">$699</span>
            <span className="text-gray-600 ml-1">MXN</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Todo el acompañamiento necesario para ayudarte a crecer tu negocio con nuestra plataforma, junto con un asesor y email 24/7 y nuestro foro.
          </p>
          <button className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition-colors">
            Contratar ahora
          </button>
        </div>

        {/* Personal Plan */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span role="img" aria-label="pencil" className="text-2xl">✏️</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Personal Plan</h4>
              <p className="text-sm text-gray-600">Suscripción mensual</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-bold text-indigo-600">$180</span>
            <span className="text-gray-600 ml-1">MXN</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Tutoriales y documentación para ayudarte a crecer tu negocio con nuestra plataforma. Contacto vía email 24/7 y nuestro foro.
          </p>
          <button className="w-full border border-indigo-600 text-indigo-600 rounded-md py-2 hover:bg-indigo-50 transition-colors">
            Contratar ahora
          </button>
        </div>

        {/* Free Plan */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span role="img" aria-label="pencil" className="text-2xl">✏️</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Free Plan</h4>
              <p className="text-sm text-gray-600">De por vida</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-4xl font-bold text-indigo-600">Free</span>
            <span className="text-gray-600 ml-1"></span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Tutoriales y documentación para ayudarte a entender la plataforma, contacto de soporte vía email y nuestro foro.
          </p>
          <button className="w-full border border-indigo-600 text-indigo-600 rounded-md py-2 hover:bg-indigo-50 transition-colors">
            Actual
          </button>
        </div>
      </div>

      

      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-4">
            <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Tu plan incluye:</h4>
                <Feature text="Integración con WhatsApp, Instagram y Messenger" />
                <Feature text="Automatización de mensajes (Leadbot)" />
                <Feature text="3 usuarios (Administrador + 2 asesores)" />
                <Feature text="Agenda de eventos" />
                <Feature text="Gestión de leads a través de embudos ilimitados" />
                <Feature text="Analítica de datos" />
                <Feature text="Gestión de tu equipo" />
                <Feature text="Soporte técnico por Chat" />
                <Feature text="Acceso a Academy" />
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Tu plan incluye:</h4>
                <Feature text="Integración con WhatsApp, Instagram y Messenger" />
                <Feature text="Automatización de mensajes (Leadbot)" />
                <Feature text="3 usuarios (Administrador + 2 asesores)" />
                <Feature text="Agenda de eventos" />
                <Feature text="Gestión de leads a través de embudos ilimitados" />
                <Feature text="Analítica de datos" />
                <Feature text="Gestión de tu equipo" />
                <Feature text="Soporte técnico por Chat" />
                <Feature text="Acceso a Academy" />
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Tu plan incluye:</h4>
                <Feature text="Integración con WhatsApp, Instagram y Messenger" />
                <Feature text="Automatización de mensajes (Leadbot)" />
                <Feature text="3 usuarios (Administrador + 2 asesores)" />
                <Feature text="Agenda de eventos" />
                <Feature text="Gestión de leads a través de embudos ilimitados" />
                <Feature text="Analítica de datos" />
                <Feature text="Gestión de tu equipo" />
                <Feature text="Soporte técnico por Chat" />
                <Feature text="Acceso a Academy" />
            </div>
        </div>
      </div>
      <div className="m-3 flex justify-center items-center">
        <PayPalScriptProvider options={{ clientId: "AYFlhL6AJ-XFXJ38nKfhw0Oeqok4y_-CdhpQihpI6ar5KsEW4bz2CCVhktKyAaBInOdiECSKNzCYO-gp" }}>
          <PayPalButtons
              style={{ layout: "horizontal",
                color: "blue"
               }}
              createOrder={async () => {
                  try {
                      const res = await fetch('http://localhost:5000/checkout/paypal', {
                          method: "POST"
                      });

                      // Verifica si la respuesta fue exitosa
                      if (!res.ok) {
                          throw new Error('Error al crear el pedido en el servidor');
                      }

                      const order = await res.json();
                      console.log(order)
                      return order.id
                  } catch (error) {
                      console.error('Error al crear el pedido:', error);
                      // Puedes manejar el error de otra forma si es necesario
                      throw error; // Opcional: Lanza el error si quieres manejarlo externamente
                  }
              }}
          />
        </PayPalScriptProvider>
      </div>

    </div>
  );
};

const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
    <span className="text-gray-600">{text}</span>
  </div>
);

export default SubscriptionForm;

