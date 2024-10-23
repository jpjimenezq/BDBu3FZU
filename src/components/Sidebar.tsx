import React, { ReactElement } from 'react';
import { Home, Filter, MessageSquare, Users, Settings, Search } from 'lucide-react';

interface SidebarIconProps {
  icon: ReactElement;
  active?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active = false }) => (
  <button 
    className={`p-3 rounded-xl hover:bg-gray-100 transition ${
      active ? 'bg-gray-100' : ''
    }`}
  >
    {React.cloneElement(icon, { 
      className: `w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-500'}`
    })}
  </button>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 bg-white border-r flex flex-col items-center py-4 fixed h-full left-0 top-0">
      <div className="w-8 h-8 bg-blue-600 rounded-lg mb-8 flex items-center justify-center text-white font-bold">
        L
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        <SidebarIcon icon={<Home />} />
        <SidebarIcon icon={<Filter />} active />
        <SidebarIcon icon={<MessageSquare />} />
        <SidebarIcon icon={<Users />} />
        <SidebarIcon icon={<Settings />} />
      </nav>

      <div className="mt-auto">
        <SidebarIcon icon={<Search />} />
      </div>
    </div>
  );
};

export default Sidebar;