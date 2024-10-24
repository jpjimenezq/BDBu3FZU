const db = require('../models/db');

exports.addLead = (req, res) => {
    const { nombre, contacto, redSocial, usuario } = req.body;

    if (!nombre || !contacto || !redSocial || !usuario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const query = 'INSERT INTO leads (nombre, contacto, red_social, usuario) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, contacto, redSocial, usuario], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        res.status(201).json({ message: 'Lead registrado correctamente' });
    });
};
