import React, { useState, useEffect } from 'react';
import { Brain, Star, MessageCircle, CheckCircle } from 'lucide-react';
import NewLead from './NewLead';

interface Lead {
  idlead: string;
  name: string;
  contact: string;
  social: string;
}

interface LeadEditProps {
  lead: Lead | null;
  isOpen: boolean;                    // Propiedad requerida
  onClose: () => void;
  onSave: (updatedLead: Lead) => void;
  onDelete: (idlead: string) => void;
}

interface FunnelStageProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  leads: Lead[];
  onDropLead: (lead: Lead, target: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
}

const FunnelStage: React.FC<FunnelStageProps> = ({ title, count, icon, leads, onDropLead, onDragOver }) => (
  <div
    className="flex-1 min-w-[200px] bg-gray-50 p-2 rounded-lg"
    onDragOver={onDragOver}
    onDrop={(e) => {
      e.preventDefault();
      const leadData = e.dataTransfer.getData("lead");
      if (leadData) {
        try {
          const lead = JSON.parse(leadData) as Lead;
          onDropLead(lead, title);
        } catch (error) {
          console.error('Error parsing lead data:', error);
        }
      }
    }}
  >
    <div className="border-b-2 border-blue-600 pb-2 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          {icon}
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-400">{count}</span>
        </div>
      </div>
    </div>
    <div className="min-h-[400px] space-y-2">
      {leads.map((lead, index) => (
        <div
          key={index}
          className="border p-2 rounded cursor-pointer"
          draggable
          onDragStart={(e) => e.dataTransfer.setData("lead", JSON.stringify(lead))}
        >
          <p className="font-semibold">{lead.name}</p>
          <p className="text-sm text-gray-500">{lead.contact}</p>
          <p className="text-sm text-gray-500">{lead.social}</p>
        </div>
      ))}
    </div>
  </div>
);

const SalesFunnel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prospects, setProspects] = useState<Lead[]>([]);
  const [assigned, setAssigned] = useState<Lead[]>([]);
  const [contacted, setContacted] = useState<Lead[]>([]);
  const [closed, setClosed] = useState<Lead[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveLead = (lead: Lead) => {
    setProspects((prev) => [...prev, lead]);
  };

  const userEmail = localStorage.getItem('user');

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem('refreshToken');
        if (!token) {
          console.error('Token de autenticación no encontrado');
          return;
        }
        
        const response = await fetch(`http://localhost:5000/lead`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userEmail })
        });

        if (response.ok) {
          const data = await response.json();
          const formattedLeads = data.map((lead: any) => ({
            idlead: lead.idlead,
            name: lead.nombre,
            contact: lead.contacto,
            social: lead.red_social,
            estatus: lead.estatus,
          }));
          setProspects(formattedLeads.filter(lead => Number(lead.estatus) === 1));
          setAssigned(formattedLeads.filter(lead => Number(lead.estatus) === 2));
          setContacted(formattedLeads.filter(lead => Number(lead.estatus) === 3));
          setClosed(formattedLeads.filter(lead => Number(lead.estatus) === 4));          
        } else {
          const data = await response.json();
          console.error('Error fetching leads:', data.message || 'Error al obtener los leads');
        }
      } catch (error) {
        console.error('Error de conexión con el servidor:', error);
      }
    };

    if (userEmail) {
      fetchLeads();
    } else {
      console.error('No se encontró el email del usuario en localStorage.');
    }
  }, [userEmail]);

  const moveLead = async (lead: Lead, target: string) => {
    let newStatus = -1;
    switch (target) {
      case "Prospectos":
        newStatus = 1;
        break;
      case "Asignados":
        newStatus = 2;
        break;
      case "Contactados":
        newStatus = 3;
        break;
      case "Cierre":
        newStatus = 4;
        break;
      default:
        break;
    }

    if (newStatus !== -1) {
      try {
        const response = await fetch('http://localhost:5000/moveLead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
          },
          body: JSON.stringify({
            idlead: lead.idlead,
            estatus: newStatus,
          }),
        });

        if (!response.ok) {
          throw new Error('Error al mover el lead');
        }

        setProspects((prev) => prev.filter(l => l.idlead !== lead.idlead));
        setAssigned((prev) => prev.filter(l => l.idlead !== lead.idlead));
        setContacted((prev) => prev.filter(l => l.idlead !== lead.idlead));
        setClosed((prev) => prev.filter(l => l.idlead !== lead.idlead));

        switch (target) {
          case "Prospectos":
            setProspects((prev) => [...prev, lead]);
            break;
          case "Asignados":
            setAssigned((prev) => [...prev, lead]);
            break;
          case "Contactados":
            setContacted((prev) => [...prev, lead]);
            break;
          case "Cierre":
            setClosed((prev) => [...prev, lead]);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error al mover el lead:', error);
      }
    }
  };

  const handleDropLead = (lead: Lead, target: string) => {
    moveLead(lead, target);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-pink-500" />
          <h1 className="text-xl font-semibold">Ventas</h1>
          <Star className="w-5 h-5 text-yellow-400" />
          <button className="text-blue-600 text-sm hover:underline ml-2">
            Editar embudo
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <Star className="w-5 h-5" />
            Auto asignación
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-8">
        Descripción del embudo
      </div>

      <div className="mb-8">
        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={openModal}
        >
          Agregar nuevo lead
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        <FunnelStage 
          title="Prospectos" 
          count={prospects.length} 
          icon={<Star className="text-yellow-500" />} 
          leads={prospects} 
          onDropLead={handleDropLead} 
          onDragOver={handleDragOver} 
        />
        <FunnelStage 
          title="Asignados" 
          count={assigned.length} 
          icon={<CheckCircle className="text-green-500" />} 
          leads={assigned} 
          onDropLead={handleDropLead} 
          onDragOver={handleDragOver} 
        />
        <FunnelStage 
          title="Contactados" 
          count={contacted.length} 
          icon={<MessageCircle className="text-blue-500" />} 
          leads={contacted} 
          onDropLead={handleDropLead} 
          onDragOver={handleDragOver} 
        />
        <FunnelStage 
          title="Cierre" 
          count={closed.length} 
          icon={<CheckCircle className="text-green-500" />} 
          leads={closed} 
          onDropLead={handleDropLead} 
          onDragOver={handleDragOver} 
        />
      </div>

      <NewLead isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveLead} />
    </div>
  );
};

export default SalesFunnel;
