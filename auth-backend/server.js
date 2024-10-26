require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./models/db'); // Importa la conexión a la base de datos
const authMiddleware = require('./middlewares/authMiddleware'); // Middleware de autenticación
const authController = require('./controllers/authController'); // Controlador de autenticación
const userController = require('./controllers/userController'); // Importa el controlador de usuarios
const leadController = require('./controllers/leadController');


const app = express();
app.use(cors());
app.use(express.json());

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Rutas
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/token', authController.token);
app.get('/user', authMiddleware.authenticateToken, userController.getUserById);
app.post('/leads', authMiddleware.authenticateToken, leadController.addLead);
app.post('/lead', authMiddleware.authenticateToken, leadController.getLeadsByUser);
app.post('/moveLead',authMiddleware.authenticateToken,leadController.updateLead);
app.post('/leads/nuevos',leadController.getNuevosLeads);
app.get('/protected', authMiddleware.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Ruta protegida accedida con éxito', user: req.user });
});
app.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout exitoso' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
