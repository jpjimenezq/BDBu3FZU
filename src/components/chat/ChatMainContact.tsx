export default function ChatMainContent() {
    return (
      <main className="flex-1 bg-gray-50 p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
            C
          </div>
          <div>
            <h1 className="text-xl font-semibold">Contacto</h1>
            <p className="text-sm text-gray-500">No asignado</p>
          </div>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <select className="p-2 border border-gray-300 rounded-md min-w-[200px]">
            <option>Na.</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md min-w-[200px]">
            <option>Pendiente</option>
          </select>
        </div>
  
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center h-[400px] text-gray-500">
          No hay contactos.
        </div>
  
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-800">
            Tu sesión de Whatsapp está desconectada. Para volver a enviar mensajes,{' '}
            <button className="text-yellow-900 font-medium">
              Haz click para reconectar.
            </button>
          </p>
        </div>
      </main>
    );
  }