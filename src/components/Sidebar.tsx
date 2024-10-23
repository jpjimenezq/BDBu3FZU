import React, { ReactElement } from 'react';
import { Home, Filter, MessageSquare, Users, Settings, Search } from 'lucide-react';

interface SidebarIconProps {
  icon: ReactElement;
  active?: boolean;
  onSelect: () => void;  // Agregamos esta prop para manejar la selección
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, active = false, onSelect }) => (
  <button 
    onClick={onSelect}  // Detectamos cuando se selecciona el ícono
    className={`p-3 rounded-xl hover:bg-gray-100 transition ${
      active ? 'bg-gray-100' : ''
    }`}
  >
    {React.cloneElement(icon, { 
      className: `w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-500'}`
    })}
  </button>
);

interface SidebarProps {
  selected: string;
  onSelect: (iconName: string) => void;  // Prop para manejar la selección desde App.tsx
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-16 bg-white border-r flex flex-col items-center py-4 fixed h-full left-0 top-0">
      <div className="w-8 h-8 bg-blue-600 rounded-lg mb-8 flex items-center justify-center text-white font-bold">
        L
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        <SidebarIcon icon={<Home />} active={selected === 'Home'} onSelect={() => onSelect('Home')} />
        <SidebarIcon icon={<Filter />} active={selected === 'Filter'} onSelect={() => onSelect('Filter')} />
        <SidebarIcon icon={<MessageSquare />} active={selected === 'MessageSquare'} onSelect={() => onSelect('MessageSquare')} />
        <SidebarIcon icon={<Users />} active={selected === 'Users'} onSelect={() => onSelect('Users')} />
        <SidebarIcon icon={<Settings />} active={selected === 'Settings'} onSelect={() => onSelect('Settings')} />
      </nav>

      <div className="mt-auto">
        <SidebarIcon icon={<Search />} active={selected === 'Search'} onSelect={() => onSelect('Search')} />
      </div>
    </div>
  );
};

export default Sidebar;
