const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas del backend
app.get('/', (req, res) => {
  res.send('¡Bienvenido a ABS DEL ÉXITO!');
});

// Ruta para obtener el progreso de los retos
app.get('/api/progreso', (req, res) => {
  res.json([
    { nombre: 'Camina 10,000 pasos al día', progreso: 75 },
    { nombre: 'Usa la técnica Pomodoro', progreso: 60 },
    { nombre: 'Ahorra el 10% de tus ingresos', progreso: 40 },
  ]);
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
