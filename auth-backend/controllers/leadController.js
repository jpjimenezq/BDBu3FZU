const db = require('../models/db');

exports.addLead = async (req, res) => {
    const { nombre, contacto, redSocial, usuario } = req.body;

    if (!nombre || !contacto || !redSocial || !usuario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'INSERT INTO leads (nombre, contacto, red_social, usuario, estatus) VALUES (?, ?, ?, ?, 1)';
    const values = [nombre, contacto, redSocial, usuario];

    try {
        const [result] = await db.query(query, values);
        res.status(201).json({ message: 'Lead registrado correctamente' });
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.getLeadsByUser = async (req, res) => {
    const { userEmail } = req.body;

    if (!userEmail) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'SELECT idlead, nombre, contacto, red_social, estatus FROM leads WHERE usuario = ?';

    try {
        const [results] = await db.query(query, [userEmail]);
        res.status(200).json(results);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.updateLead = async (req, res) => {
    const { estatus, idlead } = req.body;

    if (!estatus || !idlead) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'UPDATE leads SET estatus = ? WHERE idlead = ?';

    try {
        const [result] = await db.query(query, [estatus, idlead]);
        res.status(200).json({ message: 'Lead actualizado correctamente' });
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.getNuevosLeads = async (req, res) => {
    const { userEmail } = req.body;

    if (!userEmail) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const hoy = new Date();
    const inicioSemanaActual = new Date(hoy.setDate(hoy.getDate() - hoy.getDay()));
    const inicioSemanaAnterior = new Date(inicioSemanaActual);
    inicioSemanaAnterior.setDate(inicioSemanaAnterior.getDate() - 7);

    const inicioSemanaActualStr = inicioSemanaActual.toISOString().slice(0, 19).replace('T', ' ');
    const inicioSemanaAnteriorStr = inicioSemanaAnterior.toISOString().slice(0, 19).replace('T', ' ');

    const queryActual = `
        SELECT COUNT(*) AS totalNuevosLeads 
        FROM leads 
        WHERE usuario = ? AND fecha_registro >= ?`;

    const queryAnterior = `
        SELECT COUNT(*) AS totalNuevosLeads 
        FROM leads 
        WHERE usuario = ? AND fecha_registro >= ? AND fecha_registro < ?`;

    try {
        const [resultsActual] = await db.query(queryActual, [userEmail, inicioSemanaActualStr]);
        const [resultsAnterior] = await db.query(queryAnterior, [userEmail, inicioSemanaAnteriorStr, inicioSemanaActualStr]);

        const nuevosLeadsActual = resultsActual[0].totalNuevosLeads || 0;
        const nuevosLeadsAnterior = resultsAnterior[0].totalNuevosLeads || 0;

        let porcentajeCambio = 0;
        if (nuevosLeadsAnterior === 0 && nuevosLeadsActual > 0) {
            porcentajeCambio = 100;
        } else if (nuevosLeadsAnterior > 0) {
            porcentajeCambio = ((nuevosLeadsActual - nuevosLeadsAnterior) / nuevosLeadsAnterior) * 100;
        }

        res.status(200).json({ nuevosLeadsActual, porcentajeCambio: Math.round(porcentajeCambio) });
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
