import React, { useState } from "react";
import { MessageCircle, Instagram, CheckCircle } from "lucide-react";

const IntegrationItem = ({ icon: Icon, name, color, isConnected, onClick }) => (
  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
    <div className="flex items-center gap-3">
      <Icon className={color} size={24} />
      <span>{name}</span>
    </div>
    <button onClick={onClick} className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
      {isConnected ? "Conectado" : "Conectar"}
    </button>
  </div>
);

const IntegrationsSection = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [connections, setConnections] = useState({
    whatsapp: false,
    messenger: false,
    instagram: false,
  });

  const connectWhatsAppBot = async () => {
    try {
      setIsLoading(true);
      setIsModalOpen(true);

      const userEmail = localStorage.getItem('user');
      const response = await fetch("http://localhost:3000/api/bot/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail }),
      });
      const { port, userId } = await response.json();

      const socket = new WebSocket(`ws://localhost:3000`);

      socket.onopen = () => {
        console.log("WebSocket abierto");
        socket.send(JSON.stringify({ port, userId }));
      };

      socket.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (message.type === "qr") {
          setQrCodeUrl(message.data);
          setIsLoading(false);
        } else if (message.type === "connected") {
          setConnections((prev) => ({ ...prev, whatsapp: true }));
          setQrCodeUrl(null);
          setIsModalOpen(false);
        }
      };

      socket.onclose = () => {
        console.log("WebSocket cerrado");
      };
    } catch (error) {
      console.error("Error conectando con el bot de WhatsApp:", error);
      setIsLoading(false);
    }
  };

  const integrations = [
    { icon: MessageCircle, name: "WhatsApp Web", color: "text-green-500", onClick: connectWhatsAppBot, isConnected: connections.whatsapp },
    { icon: MessageCircle, name: "Messenger", color: "text-blue-500", onClick: () => setConnections((prev) => ({ ...prev, messenger: true })), isConnected: connections.messenger },
    { icon: Instagram, name: "Instagram", color: "text-pink-500", onClick: () => setConnections((prev) => ({ ...prev, instagram: true })), isConnected: connections.instagram },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Integraciones 🔗</h2>
      <div className="space-y-4">
        {integrations.map((integration, index) => (
          <IntegrationItem key={index} {...integration} />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-center">
              {qrCodeUrl ? "Escanea el código QR para conectar WhatsApp" : "Conectando..."}
            </h2>
            {isLoading && !qrCodeUrl && (
              <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin mb-4"></div>
            )}
            {qrCodeUrl && <img src={qrCodeUrl} alt="Código QR" className="mb-4" />}
            <button
              onClick={() => { setIsModalOpen(false); setQrCodeUrl(null); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationsSection;
