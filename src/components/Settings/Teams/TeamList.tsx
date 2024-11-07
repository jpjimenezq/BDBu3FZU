import React from 'react';
import { User, Mail, Shield } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  inbox: boolean;
}

interface TeamListProps {
  members: TeamMember[];
  onEdit: (member: TeamMember) => void;
}

const TeamList: React.FC<TeamListProps> = ({ members, onEdit }) => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 rounded-t-lg border border-gray-200 text-sm font-medium text-gray-600">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          NOMBRE
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          CORREO ELECTRÓNICO
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4" />
          ROL
        </div>
        <div className="text-center">INBOX</div>
      </div>

      <div className="border-x border-b border-gray-200 rounded-b-lg divide-y divide-gray-200">
        {members.map((member) => (
          <div key={member.id} className="grid grid-cols-4 gap-4 px-6 py-4 items-center">
            <div className="text-gray-900">{member.name}</div>
            <div className="text-gray-600">{member.email}</div>
            <div className="text-gray-600">{member.role}</div>
            <div className="flex justify-between items-center">
              <div className="flex justify-center flex-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={member.inbox}
                    className="sr-only peer"
                    readOnly
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <button
                onClick={() => onEdit(member)}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;