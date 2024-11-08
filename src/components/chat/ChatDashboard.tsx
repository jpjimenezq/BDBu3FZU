// src/components/chat/ChatDashboard.tsx
import React, { useState } from 'react';
import ChatSidebar from './ChatSideBar';
import ChatHeader from './ChatHeader';
import ChatMainContact from './ChatMainContact';
import ChatAttributesPanel from './ChatAttributesPanel';

const ChatDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para el número de contacto buscado

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        {/* Renderiza el ChatHeader con búsqueda de contactos */}
        <ChatHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex-1 flex">
          {/* Barra lateral */}
          <ChatSidebar />

          {/* Contenido principal del chat */}
          <ChatMainContact searchQuery={searchQuery} /> {/* Pasamos el número de contacto */}

          {/* Panel de atributos del chat */}
          <ChatAttributesPanel />
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
