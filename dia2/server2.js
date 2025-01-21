const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    // Usamos path.join para obtener la ruta completa del archivo 'index.html'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
