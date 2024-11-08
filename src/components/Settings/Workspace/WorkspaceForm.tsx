import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CompanyInfo from './CompanyInfo';
import CompanyList from './CompanyList';
import AddCompanyModal from './AddCompanyModal';

const WorkspaceForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companies, setCompanies] = useState<Array<{ id: number; name: string; phone: string }>>([]);

  const handleAddCompany = (company: { name: string; phone: string }) => {
    setCompanies([...companies, { id: Date.now(), ...company }]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900">Workspace</h3>
        <p className="text-sm text-gray-600">Gestiona la información de tu empresa y workspace</p>
      </div>

      <div className="space-y-8">
        <CompanyInfo />
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-base font-medium text-gray-900">Empresas asociadas</h4>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Agregar empresa
            </button>
          </div>
          
          <CompanyList companies={companies} />
        </div>
      </div>

      <AddCompanyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCompany}
      />
    </div>
  );
};

export default WorkspaceForm;