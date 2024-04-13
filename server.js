const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Permite todas las solicitudes CORS
app.use(express.json()); // Middleware para parsear JSON

let likeCount = 0; // Contador de likes almacenado en el servidor

// Ruta para obtener el número actual de likes
app.get('/likes', (req, res) => {
    res.status(200).send({ likes: likeCount });
});

// Ruta para incrementar los likes
app.post('/likes', (req, res) => {
    likeCount++; // Incrementa el contador de likes
    res.status(200).send({ likes: likeCount });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});