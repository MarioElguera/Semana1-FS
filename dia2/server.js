const express = require('express');
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
const WebSocket = require('ws');  // Importar WebSocket

const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Nueva ruta para saludar usando un parámetro 'name' en la URL
app.get('/saludo/:name', (req, res) => {
    const name = req.params.name;  // Obtener el valor del parámetro 'name'
    res.send(`<h1>Hola ${name}!!</h1>`);  // Mostrar el saludo con el nombre
});

// Iniciar el servidor Express
const server = app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ server });

// Enviar mensaje a todos los clientes conectados para que recarguen la página
wss.on('connection', (ws) => {
    console.log('Cliente WebSocket conectado');

    // Enviar un mensaje a todos los clientes para que recarguen la página
    ws.send('reload');
});

// Configuración de chokidar para observar cambios en los archivos de la carpeta 'public'
const watcher = chokidar.watch('public/**/*', {
    ignored: /node_modules/,
    persistent: true
});

// Detectar cambios y avisar a los clientes
watcher.on('change', (filePath) => {
    console.log(`Archivo cambiado: ${filePath}`);

    // Enviar señal de recarga a todos los clientes
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('reload');
        }
    });
});
