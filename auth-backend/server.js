require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh_secret';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'Access token required' });

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' });
        
        req.user = user;
        next();
    });
};

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'El usuario ya existe' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al registrar el usuario' });
                }

                res.status(201).json({ message: 'Usuario registrado con éxito' });
            });
        });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error en el servidor' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Error en el servidor' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Credenciales incorrectas' });
            }

            const accessToken = jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
            const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '24h' });

            res.status(200).json({
                message: 'Autenticación exitosa',
                accessToken,
                refreshToken,
                user: { email: user.email }
            });
        });
    });
});

app.post('/token', (req, res) => {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: 'Refresh token required' });

    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired refresh token' });

        const accessToken = jwt.sign({ userId: user.userId }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
    });
});

app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Ruta protegida accedida con éxito', user: req.user });
});

app.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout exitoso' });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
