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
