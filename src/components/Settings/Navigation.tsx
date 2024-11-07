import React from 'react';
import { User, Shield, CreditCard, Database, Briefcase, Building2, Users } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-4 flex items-center gap-2 text-sm transition-colors border-b-2 ${
      isActive
        ? 'text-indigo-600 border-indigo-600 font-medium'
        : 'text-gray-600 border-transparent hover:text-gray-800'
    }`}
  >
    {icon}
    {label}
  </button>
);

interface NavigationProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavClick, activeSection }) => {
  return (
    <div className="flex items-center border-b border-gray-200 overflow-x-auto">
      <NavItem
        icon={<User className="w-4 h-4" />}
        label="Perfil"
        isActive={activeSection === 'Perfil'}
        onClick={() => onNavClick('Perfil')}
      />
      <NavItem
        icon={<Shield className="w-4 h-4" />}
        label="Seguridad"
        isActive={activeSection === 'Seguridad'}
        onClick={() => onNavClick('Seguridad')}
      />
      <NavItem
        icon={<CreditCard className="w-4 h-4" />}
        label="Suscripción"
        isActive={activeSection === 'Suscripcion'}
        onClick={() => onNavClick('Suscripcion')}
      />
      <NavItem
        icon={<Database className="w-4 h-4" />}
        label="Almacenamiento"
        isActive={activeSection === 'Almacenamiento'}
        onClick={() => onNavClick('Almacenamiento')}
      />
      <NavItem
        icon={<Briefcase className="w-4 h-4" />}
        label="Workspace"
        isActive={activeSection === 'Workspace'}
        onClick={() => onNavClick('Workspace')}
      />
      <NavItem
        icon={<Building2 className="w-4 h-4" />}
        label="Facturación"
        isActive={activeSection === 'Facturación'}
        onClick={() => onNavClick('Facturación')}
      />
      <NavItem
        icon={<Users className="w-4 h-4" />}
        label="Equipo"
        isActive={activeSection === 'Equipo'}
        onClick={() => onNavClick('Equipo')}
      />
    </div>
  );
};

export default Navigation;
