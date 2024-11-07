import React from 'react';
import { Receipt } from 'lucide-react';
import BillingFAQ from './BillingFAQ';

const BillingForm: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Facturación</h3>
        <p className="text-sm text-gray-600">Gestiona tus facturas y datos fiscales</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
        <span role="img" aria-label="cool" className="text-4xl mb-4 inline-block">
          😎
        </span>
        <h4 className="text-xl font-semibold mb-4">¿Necesitas tu factura?</h4>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          <Receipt className="w-5 h-5" />
          Solicita tu factura aquí
        </button>
      </div>

      <BillingFAQ />

      <div className="mt-6 text-sm text-gray-600">
        Para más información consulta nuestro siguiente enlace:{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          Información sobre facturación
        </a>{' '}
        o contáctanos por medio del soporte.
      </div>
    </div>
  );
};

export default BillingForm;