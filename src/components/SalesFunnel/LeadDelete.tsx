import React from 'react';

interface LeadDeleteProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LeadDelete: React.FC<LeadDeleteProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Confirmar Eliminación</h2>
                <p>¿Estás seguro de que deseas eliminar este lead?</p>
                <div className="flex justify-between mt-6">
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Eliminar
                    </button>
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeadDelete;