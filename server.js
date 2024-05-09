const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

const mysql = require('mysql');
// const cors = require('cors'); // Importar el paquete 'cors'

// Middleware para analizar datos JSON en las solicitudes
app.use(bodyParser.json());

// app.use(cors());
app.use(express.json());

// Middleware para analizar datos de formularios en las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));  

// bcrypt
// const bcryptjs = require('bcryptjs');

// Configura Express para servir archivos estáticos desde un directorio específico
app.use(express.static(__dirname + '/'));

// // Motor de plantilla
// app.set('view engine', 'ejs');

// Var de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// ****************************
// CONEXIONES BASE DATOS
// ****************************
// RUTAS
app.get('/', (req, res) => {
    res.redirect('/home');
});

// Ruta de registro
app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html'); 
});

// Ruta de detalles de una noticia
app.get('/noticia', (req, res) => {
    res.sendFile(__dirname + '/views/detalles.html'); 
});

// Ruta para servir index.html en la ruta '/home'
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
// ****************************

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
