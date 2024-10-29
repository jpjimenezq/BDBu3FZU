// src/components/chat/ChatDashboard.tsx
import React from 'react';
import ChatSidebar from './ChatSideBar';
import ChatHeader from './ChatHeader'; 
import ChatMainContent from './ChatMainContact';
import ChatAttributesPanel from './ChatAttributesPanel';

const ChatDashboard: React.FC = () => {
  return (
    <div className="flex h-full">
      

      {/* Espacio para otros componentes del dashboard */}
      <div className="flex-1 flex flex-col">
        {/* Renderiza otros componentes, como ChatHeader o una ventana de chat */}
        <ChatHeader searchQuery="" setSearchQuery={() => {}} /> {/* Asegúrate de pasar las props requeridas */}
        {/* Aquí puedes agregar otros componentes como ChatWindow */}
        {/* Renderiza el ChatSidebar */}
        <div className="flex-1 flex">
            <ChatSidebar />
            <ChatMainContent />
            <ChatAttributesPanel />
        </div>
        
        
      </div>
    </div>
  );
};

export default ChatDashboard;
