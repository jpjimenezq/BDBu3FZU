import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const ProfilePass: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log('Contraseña actualizada');
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Seguridad</h3>
        <p className="text-sm text-gray-600">Elige la contraseña más segura</p>
      </div>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>
              Contraseña
            </label>
            <input 
              type="text" 
              id="password"
              value={''}
              /*onChange={(e) => setProfile}*/
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
              Confirmación
            </label>
            <input
              type="text"
              id="apellido"
              value={''}
              /*onChange={(e) => setProfile({ ...profile, apellido: e.target.value })}*/
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <button 
            type='submit'
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Actualizar cambios
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePass;
