export default function Sidebar() {
    return (
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Ningún embudo seleccionado</option>
          </select>
          <div className="mt-4 space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-md bg-gray-100 font-medium">
              Todos
            </button>
            <button className="w-full text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-50">
              Asignados a mí
            </button>
          </div>
        </div>
      </aside>
    );
  }