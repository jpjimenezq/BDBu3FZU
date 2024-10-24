const db = require('../models/db'); // Importa la conexión a la base de datos

// Obtener información de un usuario por ID
const getUserById = (req, res) => {
    const userId = req.user.userId; // Asumiendo que el ID del usuario se establece en el token

    db.query('SELECT email FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ user: results[0] });
    });
};

// Otras funciones pueden incluirse aquí según sea necesario

module.exports = {
    getUserById,
    // Puedes exportar más funciones aquí
};
