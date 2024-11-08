import React from 'react';
import { Upload } from 'lucide-react';

const StorageForm: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Almacenamiento</h3>
        <p className="text-sm text-gray-600">Gestiona tu espacio de almacenamiento</p>
      </div>

      {/* Storage Summary */}
      <div className="mb-8">
        <h4 className="text-base font-medium text-gray-900 mb-4">Resumen de tu almacenamiento</h4>
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900">0.00% usado</span>
            <span className="text-sm text-gray-600">0 bytes / 30 GB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>

      {/* Storage Distribution */}
      <div className="mb-8">
        <h4 className="text-base font-medium text-gray-900 mb-4">Distribución del almacenamiento</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            <span className="text-sm text-gray-600">Multimedia (0 bytes)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <span className="text-sm text-gray-600">Libre (30 GB)</span>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="mt-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
          <div className="text-center">
            <div className="inline-flex justify-center mb-4">
              <span role="img" aria-label="smile" className="text-4xl">😊</span>
            </div>
            <h3 className="text-lg font-medium text-indigo-600 mb-2">
              Arrastra y suelta aquí tu archivo o haz clic para buscarlo
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Puedes subir archivos: JPG, PNG, XLS, DOC, PPT, PDF
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
              <Upload className="w-4 h-4" />
              Subir archivo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageForm;