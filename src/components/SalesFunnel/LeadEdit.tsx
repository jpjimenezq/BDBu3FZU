// LeadEdit.tsx
import React, { useState } from 'react';

interface Lead {
  idlead: string;
  name: string;
  contact: string;
  social: string;
}

// LeadEdit.tsx
interface LeadEditProps {
    lead: Lead | null;
    isOpen?: boolean;  // Cambia aquí para hacerla opcional
    onClose: () => void;
    onSave: (updatedLead: Lead) => void;
    onDelete: (idlead: string) => void;
  }
  

const LeadEdit: React.FC<LeadEditProps> = ({ lead, isOpen, onClose, onSave, onDelete }) => {
  const [updatedLead, setUpdatedLead] = useState<Lead>(lead || { idlead: '', name: '', contact: '', social: '' });

  if (!isOpen || !lead) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedLead((prevLead) => ({ ...prevLead, [name]: value }));
  };

  const handleSave = () => {
    onSave(updatedLead);
    onClose();
  };

  const handleDelete = () => {
    onDelete(updatedLead.idlead);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Editar Lead</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={updatedLead.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="contact"
            value={updatedLead.contact}
            onChange={handleInputChange}
            placeholder="Contacto"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="social"
            value={updatedLead.social}
            onChange={handleInputChange}
            placeholder="Red Social"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Guardar
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Eliminar
          </button>
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          X
        </button>
      </div>
    </div>
  );
};

export default LeadEdit;
