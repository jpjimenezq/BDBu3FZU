import React from 'react';
import { Building2 } from 'lucide-react';

interface Company {
  id: number;
  name: string;
  phone: string;
}

interface CompanyListProps {
  companies: Company[];
}

const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
  if (companies.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300 p-8 text-center">
        <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-500">No hay empresas asociadas</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {companies.map((company) => (
        <div
          key={company.id}
          className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center"
        >
          <div>
            <h5 className="font-medium text-gray-900">{company.name}</h5>
            <p className="text-sm text-gray-600">+52 {company.phone}</p>
          </div>
          <button className="text-red-500 hover:text-red-700 text-sm">
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;