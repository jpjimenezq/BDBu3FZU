import React, { useEffect, useState } from 'react';

interface UserProfile {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  });

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('accessToken'); 
      if (!token) {
        console.error('Token de autenticación no encontrado');
        return;
      }

      //Con userID nos referios al email
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload.userId;

      const response = await fetch('http://localhost:5000/users/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('refreshToken')}`, // Envía el token de autenticación
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        console.error('Error en la respuesta del servidor:', response.status);
        return;
      }

      const data = await response.json();
      const userData = data.user;
      setProfile({
        nombre: userData.nombre || '',
        apellido: userData.apellido || '',
        email: userData.email,
        telefono: userData.telefono || '',
      });
    } catch (error) {
      console.error('Error al obtener los datos del perfil:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Tu Perfil</h3>
        <p className="text-sm text-gray-600">Configura tu información personal</p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          fetchProfileData();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={profile.nombre}
              onChange={(e) => setProfile({ ...profile, nombre: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              value={profile.apellido}
              onChange={(e) => setProfile({ ...profile, apellido: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              value={profile.telefono}
              onChange={(e) => setProfile({ ...profile, telefono: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Actualizar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
