export default function ChatAttributesPanel() {
    return (
      <aside className="w-80 bg-white border-l border-gray-200 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Atributos</h2>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              Historial
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              🔄
            </button>
          </div>
        </div>
  
        <div className="space-y-4">
          {[
            'Nombre',
            'Medio',
            'Correo',
            'Valor',
            'Ganancia',
            'Empresa',
            'Tags'
          ].map((field) => (
            <div key={field} className="flex justify-between items-center">
              <span className="text-gray-700">{field}</span>
              <button className="text-blue-600 text-sm">
                Agregar {field}
              </button>
            </div>
          ))}
        </div>
  
        <div className="mt-8 space-y-4">
          {['Notas', 'Mensajes programados', 'Mensajes Destacados'].map((section) => (
            <div key={section} className="p-3 border border-gray-200 rounded-md">
              <h3 className="font-medium">{section}</h3>
            </div>
          ))}
        </div>
      </aside>
    );
  }