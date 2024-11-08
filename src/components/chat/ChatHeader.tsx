// src/components/chat/ChatHeader.tsx
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SearchProps } from '../../types';

export default function ChatHeader({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="relative flex-1 max-w-2xl">
          <input
            type="text"
            placeholder="Ingresa número de contacto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Búsqueda avanzada
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Agregar lead
        </button>
      </div>
    </header>
  );
}
