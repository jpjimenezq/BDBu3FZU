import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ProfileForm from './ProfileForm';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <Navigation />
          <div className="p-6">
            <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;