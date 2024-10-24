import React, { ReactElement, useState } from 'react';
import { Home, Filter, MessageSquare, Users, Settings, Search } from 'lucide-react';

interface SidebarIconProps {
  icon: ReactElement;
  name: string;
  active?: boolean;
  onSelect: () => void;
  isExpanded: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, name, active = false, onSelect, isExpanded }) => (
  <button
    onClick={onSelect}
    className={`flex items-center p-3 rounded-xl hover:bg-gray-100 transition ${
      active ? 'bg-gray-100' : ''
    } ${isExpanded ? 'justify-start' : 'justify-center'}`}
  >
    {React.cloneElement(icon, {
      className: `w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-500'}`
    })}
    {isExpanded && <span className="ml-2 text-gray-600">{name}</span>}
  </button>
);

interface SidebarProps {
  selected: string;
  onSelect: (iconName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let timer: number;

  const handleMouseEnter = () => {
    timer = window.setTimeout(() => setIsExpanded(true), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsExpanded(false);
  };

  return (
    <div
      className={`bg-white border-r flex flex-col py-4 fixed h-full left-0 top-0 transition-all duration-300 ${isExpanded ? 'w-40' : 'w-16'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-8 h-8 bg-blue-600 rounded-lg mb-8 flex items-center justify-center text-white font-bold mx-auto">
        L
      </div>

      <nav className="flex-1 flex flex-col gap-4">
        <SidebarIcon
          icon={<Home />}
          name="Home"
          active={selected === 'Home'}
          onSelect={() => onSelect('Home')}
          isExpanded={isExpanded}
        />
        <SidebarIcon
          icon={<Filter />}
          name="Clientes"
          active={selected === 'Filter'}
          onSelect={() => onSelect('Filter')}
          isExpanded={isExpanded}
        />
        <SidebarIcon
          icon={<MessageSquare />}
          name="Mensajes"
          active={selected === 'MessageSquare'}
          onSelect={() => onSelect('MessageSquare')}
          isExpanded={isExpanded}
        />
        <SidebarIcon
          icon={<Users />}
          name="Usuarios"
          active={selected === 'Users'}
          onSelect={() => onSelect('Users')}
          isExpanded={isExpanded}
        />
        <SidebarIcon
          icon={<Settings />}
          name="Configuraciones"
          active={selected === 'Settings'}
          onSelect={() => onSelect('Settings')}
          isExpanded={isExpanded}
        />
      </nav>

      <div className="mt-auto">
        <SidebarIcon
          icon={<Search />}
          name="Buscar"
          active={selected === 'Search'}
          onSelect={() => onSelect('Search')}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};

export default Sidebar;
