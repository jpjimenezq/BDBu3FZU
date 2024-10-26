const db = require('../models/db');

exports.addLead = (req, res) => {
    const { nombre, contacto, redSocial, usuario } = req.body;

    if (!nombre || !contacto || !redSocial || !usuario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'INSERT INTO leads (nombre, contacto, red_social, usuario, estatus) VALUES (?, ?, ?, ?, 1)';
    db.query(query, [nombre, contacto, redSocial, usuario], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        res.status(201).json({ message: 'Lead registrado correctamente' });
    });
};

exports.getLeadsByUser = (req, res) => {
    const { userEmail } = req.body; // Asegúrate de obtener el userEmail del cuerpo

    if (!userEmail) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'SELECT idlead, nombre, contacto, red_social, estatus FROM leads WHERE usuario = ?';

    db.query(query, [userEmail], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        res.status(200).json(results); 
    });
};

exports.updateLead = (req, res) => {
    const { estatus, idlead } = req.body;

    if (!estatus) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios ' });
    }

    const query = 'update leads set estatus = ? where idlead = ?';
    
    // Sustituir las variables en la consulta
    const queryWithValues = db.format(query, [estatus, idlead]);

    db.query(query, [estatus, idlead], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        res.status(200).json(result);
    });
};

exports.getNuevosLeads = (req, res) => {
    const { userEmail } = req.body;

    if (!userEmail) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Calcular las fechas de las dos semanas
    const hoy = new Date();
    const inicioSemanaActual = new Date(hoy.setDate(hoy.getDate() - hoy.getDay())); // Inicio de la semana actual (domingo)
    const inicioSemanaAnterior = new Date(inicioSemanaActual);
    inicioSemanaAnterior.setDate(inicioSemanaAnterior.getDate() - 7); // Inicio de la semana anterior

    const inicioSemanaActualStr = inicioSemanaActual.toISOString().slice(0, 19).replace('T', ' ');
    const inicioSemanaAnteriorStr = inicioSemanaAnterior.toISOString().slice(0, 19).replace('T', ' ');

    // Consulta para obtener los nuevos leads de la semana actual
    const queryActual = `
        SELECT COUNT(*) AS totalNuevosLeads 
        FROM leads 
        WHERE usuario = ? AND fecha_registro >= ?`;

    // Consulta para obtener los nuevos leads de la semana anterior
    const queryAnterior = `
        SELECT COUNT(*) AS totalNuevosLeads 
        FROM leads 
        WHERE usuario = ? AND fecha_registro >= ? AND fecha_registro < ?`;

    db.query(queryActual, [userEmail, inicioSemanaActualStr], (err, resultsActual) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        db.query(queryAnterior, [userEmail, inicioSemanaAnteriorStr, inicioSemanaActualStr], (err, resultsAnterior) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }

            const nuevosLeadsActual = resultsActual[0].totalNuevosLeads || 0;
            const nuevosLeadsAnterior = resultsAnterior[0].totalNuevosLeads || 0;

            // Calcular el porcentaje de cambio
            let porcentajeCambio = 0;
            if (nuevosLeadsAnterior === 0 && nuevosLeadsActual > 0) {
                porcentajeCambio = 100; // Si la semana anterior fue 0 y esta semana tiene leads, es 100%
            } else if (nuevosLeadsAnterior > 0) {
                porcentajeCambio = ((nuevosLeadsActual - nuevosLeadsAnterior) / nuevosLeadsAnterior) * 100;
            }

            res.status(200).json({ nuevosLeadsActual, porcentajeCambio: Math.round(porcentajeCambio) });
        });
    });
};

