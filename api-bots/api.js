const fs = require("fs");
const path = require("path");
require("dotenv").config();
const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");
const QRCode = require("qrcode");
const WebSocket = require("ws");
const db = require("../auth-backend/models/db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const wss = new WebSocket.Server({ noServer: true });

// Mapa para almacenar los clientes de WhatsApp y WebSocket por `userId`
const clients = {};
const sockets = {};

// Función para iniciar un bot y enviar el QR actualizado a través de WebSocket
const startBotAndGetQR = async (port, ws, userId) => {
  const client = new Client({
    authStrategy: new LocalAuth({ clientId: `bot_${userId}` }),
  });

  client.on("qr", (qr) => {
    QRCode.toDataURL(qr, (err, url) => {
      if (err) {
        console.error("Error generando el QR:", err);
        return;
      }
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "qr", data: url }));
      }
    });
  });

  client.on("ready", () => {
    console.log(`Bot para el usuario ${userId} en puerto ${port}: Conexión exitosa`);
    clients[userId] = client; // Guarda el cliente para este usuario
    sockets[userId] = ws; // Guarda el WebSocket para enviar mensajes recibidos

    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "connected", data: "Bot conectado exitosamente" }));
    }
  });

  client.on("disconnected", async () => {
    console.log(`Bot para el usuario ${userId} desconectado`);
    delete clients[userId];
    delete sockets[userId];
    await db.query("UPDATE ports SET estado = 0 WHERE port = ?", [port]);
  });

  // Escucha mensajes entrantes
  client.on("message", (msg) => {
    console.log(`Mensaje recibido de ${msg.from}: ${msg.body}`); // Log para confirmar recepción en el servidor
    const userWs = sockets[userId];
    
    if (userWs && userWs.readyState === WebSocket.OPEN) {
      // Enviar el mensaje al cliente de React (frontend)
      const messageData = {
        type: "message",
        from: msg.from,
        body: msg.body,
      };
      console.log("Enviando mensaje al WebSocket del cliente:", messageData); // Log para confirmar envío
      userWs.send(JSON.stringify(messageData));
    } else {
      console.log("WebSocket no está abierto, no se puede enviar el mensaje.");
    }
  });

  client.initialize();
};

// Endpoint para iniciar el WebSocket
app.post("/api/bot/start", async (req, res) => {
  const { userEmail } = req.body;

  try {
    const [rows] = await db.query("SELECT id FROM usuarios WHERE email = ?", [userEmail]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const userId = rows[0].id;

    const [ports] = await db.query("SELECT port FROM ports WHERE estado = 0 LIMIT 1");
    if (ports.length === 0) {
      return res.status(500).json({ error: "No hay puertos disponibles." });
    }

    const port = ports[0].port;

    await db.query("UPDATE ports SET estado = 1 WHERE port = ?", [port]);

    res.json({ port, userId });
  } catch (error) {
    console.error("Error al obtener el userId:", error);
    res.status(500).json({ error: "Error al obtener el userId" });
  }
});

// Endpoint para enviar mensajes
app.post("/api/bot/send-message", async (req, res) => {
  const { userId, phoneNumber, message } = req.body;

  if (!clients[userId]) {
    return res.status(404).json({ error: "Bot no conectado para este usuario" });
  }

  try {
    const client = clients[userId];
    const chatId = `${phoneNumber}@c.us`;

    await client.sendMessage(chatId, message);
    res.json({ success: true, message: "Mensaje enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    res.status(500).json({ error: "Error al enviar el mensaje" });
  }
});

const server = app.listen(3000, () => {
  console.log("API escuchando en http://localhost:3000");
});

// WebSocket para cada cliente
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

wss.on("connection", (ws) => {
  ws.on("message", async (message) => {
    const { port, userId } = JSON.parse(message);
    await startBotAndGetQR(port, ws, userId);
  });
});
