import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TeamList from './TeamList';
import AddMemberModal from './AddMemberModal';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  inbox: boolean;
}

const TeamForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Noe Viveros',
      email: 'noe.viveros.1995@gmail.com',
      role: 'OWNER',
      inbox: true,
    },
  ]);

  const handleAddMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember = {
      ...member,
      id: Date.now().toString(),
    };
    setMembers([...members, newMember]);
    setIsModalOpen(false);
  };

  const handleEditMember = (member: TeamMember) => {
    console.log('Edit member:', member);
    // Implement edit functionality
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Mi Equipo</h3>
        <p className="text-sm text-gray-600">
          Gestiona los miembros de tu equipo y sus permisos
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-medium">Total asientos:</span> {members.length}
          <span className="mx-2">|</span>
          <span className="font-medium">Disponibles:</span> {3 - members.length}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Agregar miembro
        </button>
      </div>

      <TeamList members={members} onEdit={handleEditMember} />

      <AddMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddMember}
      />
    </div>
  );
};

export default TeamForm;