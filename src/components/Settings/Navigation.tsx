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

const Navigation: React.FC = () => {
  return (
    <div className="flex items-center border-b border-gray-200 overflow-x-auto">
      <NavItem
        icon={<User className="w-4 h-4" />}
        label="Perfil"
        isActive={true}
        onClick={() => console.log('Perfil clicked')}
      />
      <NavItem
        icon={<Shield className="w-4 h-4" />}
        label="Seguridad"
        onClick={() => console.log('Seguridad clicked')}
      />
      <NavItem
        icon={<CreditCard className="w-4 h-4" />}
        label="Suscripción"
        onClick={() => console.log('Suscripción clicked')}
      />
      <NavItem
        icon={<Database className="w-4 h-4" />}
        label="Almacenamiento"
        onClick={() => console.log('Almacenamiento clicked')}
      />
      <NavItem
        icon={<Briefcase className="w-4 h-4" />}
        label="Workspace"
        onClick={() => console.log('Workspace clicked')}
      />
      <NavItem
        icon={<Building2 className="w-4 h-4" />}
        label="Facturación"
        onClick={() => console.log('Facturación clicked')}
      />
      <NavItem
        icon={<Users className="w-4 h-4" />}
        label="Equipo"
        onClick={() => console.log('Equipo clicked')}
      />
    </div>
  );
};

export default Navigation;