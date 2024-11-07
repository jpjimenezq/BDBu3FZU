import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ProfileForm from './ProfileForm';
import ProfilePass from './ProfilePass';
import Suscription from './Suscription';
import Storage from './StorageForm';
import WorkSpace from './Workspace/WorkspaceForm';
import Factura from './Factura/BillingForm';
import Teams from './Teams/TeamForm';

const Settings: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Perfil');

  const handleNavigationClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <Navigation onNavClick={handleNavigationClick} activeSection={activeSection} />
          <div className="p-6">
            {activeSection === 'Perfil' && <ProfileForm />}
            {activeSection === 'Seguridad' && <ProfilePass />}
            {activeSection === 'Suscripcion' && <Suscription />}
            {activeSection === 'Almacenamiento' && <Storage />}
            {activeSection === 'Workspace' && <WorkSpace />}
            {activeSection === 'Facturacion' && <Factura />}
            {activeSection === 'Equipo' && <Teams />}
            {/* Agrega otros componentes correspondientes aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
