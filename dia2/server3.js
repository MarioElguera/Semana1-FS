const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Ruta para servir un archivo dependiendo del parámetro 'file'
app.get('/archivo/:file', (req, res) => {
    const fileName = req.params.file;  // Obtener el nombre del archivo desde el parámetro 'file'
    const filePath = path.join(__dirname, 'public', `${fileName}.html`);  // Construir la ruta del archivo

    // Intentar enviar el archivo si existe
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Archivo no encontrado');  // Si el archivo no existe, mostrar un error 404
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
