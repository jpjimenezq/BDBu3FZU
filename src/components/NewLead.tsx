import React, { useState } from 'react';

interface NewLeadProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lead: { name: string; contact: string; social: string }) => void;
}

const NewLead: React.FC<NewLeadProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [social, setSocial] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Evitar que el formulario recargue la página

    const lead = {
      nombre: name,
      contacto: contact,
      redSocial: social,
      usuario: 'usuario@example.com', // Cambia esto para enviar el usuario correcto
    };

    try {
      const response = await fetch('http://localhost:5000/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Envía el token de autenticación
        },
        body: JSON.stringify(lead),
      });

      if (response.ok) {
        // Mapea las propiedades antes de enviarlas a la función onSave
        onSave({ name: lead.nombre, contact: lead.contacto, social: lead.redSocial }); // Mapea las propiedades
        onClose(); // Cierra el modal después de guardar
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Error al registrar el lead');
      }
    } catch (error) {
      setErrorMessage('Error de conexión con el servidor');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Lead</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nombre completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contacto</label>
            <input 
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Número de teléfono o email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Red Social</label>
            <input 
              type="text"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Instagram, Facebook, etc."
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button 
              type="button" 
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLead;
