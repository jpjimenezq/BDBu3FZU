import React, { useState, useEffect } from "react";

interface ChatMainContactProps {
  searchQuery: string; // Número de contacto al que se enviarán los mensajes
}

export default function ChatMainContact({ searchQuery }: ChatMainContactProps) {
  const [messages, setMessages] = useState([]); // Mensajes en el chat
  const [newMessage, setNewMessage] = useState(""); // Mensaje nuevo para enviar
  const [isConnected, setIsConnected] = useState(localStorage.getItem("whatsappConnected") === "true");

  useEffect(() => {
    // Conectar WebSocket para recibir mensajes
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket conectado");
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Mensaje recibido en WebSocket:", message); // Log para verificar el tipo de mensaje recibido

      if (message.type === "qr") {
        setIsConnected(false);
      } else if (message.type === "connected") {
        setIsConnected(true);
        localStorage.setItem("whatsappConnected", "true");
      } else if (message.type === "message" || message.type === "sent") {
        console.log(`Procesando mensaje ${message.type === "sent" ? "enviado" : "recibido"}:`, message.body);

        // Diferenciar el tipo de mensaje para el frontend
        const messageType = message.type === "sent" ? "sent" : "received";

        // Agregar el mensaje al estado de mensajes
        setMessages((prev) => [
          ...prev,
          { type: messageType, text: message.body, from: message.from }
        ]);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket desconectado");
      setIsConnected(false);
      localStorage.removeItem("whatsappConnected");
    };

    return () => ws.close(); // Cierra el WebSocket al desmontar el componente
  }, []);

  const handleSendMessage = async () => {
    if (!searchQuery || !newMessage.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/api/bot/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 1, phoneNumber: searchQuery, message: newMessage }),
      });

      if (response.ok) {
        console.log("Mensaje enviado:", newMessage);

        // Agregar el mensaje enviado al estado de mensajes
        setMessages((prev) => [...prev, { type: "sent", text: newMessage }]);
        setNewMessage(""); // Limpiar el campo de entrada
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error en la conexión al enviar el mensaje:", error);
    }
  };

  return (
    <main className="flex-1 bg-gray-50 p-6">
      {/* Encabezado con el contacto */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
          C
        </div>
        <div>
          <h1 className="text-xl font-semibold">Contacto</h1>
          <p className="text-sm text-gray-500">{searchQuery || "No asignado"}</p>
        </div>
      </div>

      {/* Área para mostrar mensajes */}
      <div className="bg-white rounded-lg shadow p-6 h-[400px] overflow-y-auto">
        {console.log("Mensajes en el estado:", messages)}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md ${
              msg.type === "sent" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Área de entrada para escribir y enviar el mensaje */}
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded-r-md">
          Enviar
        </button>
      </div>
    </main>
  );
}
