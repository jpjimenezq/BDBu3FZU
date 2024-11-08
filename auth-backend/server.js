require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./models/db');
const authMiddleware = require('./middlewares/authMiddleware');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const leadController = require('./controllers/leadController');
const checkout = require('./checkout/paypal')


const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/token', authController.token);
app.post('/checkout/paypal',checkout.POST);

//leads
app.post('/leads', authMiddleware.authenticateToken, leadController.addLead);
app.post('/lead', authMiddleware.authenticateToken, leadController.getLeadsByUser);
app.post('/leads/nuevos',leadController.getNuevosLeads);
app.put('/leads/:id', authMiddleware.authenticateToken, leadController.updateLead);
app.post('/moveLead',authMiddleware.authenticateToken,leadController.updateLead);
app.post('/leads/nuevos',leadController.getNuevosLeads);

// Usuarios
app.post('/users/getUser',authMiddleware.authenticateToken,userController.getUserData);
app.post('/users/updateUser', authMiddleware.authenticateToken, userController.updateUserData);
app.get('/user', authMiddleware.authenticateToken, userController.getUserById);

app.get('/protected', authMiddleware.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Ruta protegida accedida con éxito', user: req.user });
});
app.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout exitoso' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
