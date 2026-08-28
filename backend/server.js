const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// PEGA AQUÍ TU ENLACE REAL DE MONGODB ATLAS (con tu usuario y contraseña)
const MONGO_URI = "mongodb+srv://espitiagerson236_db_user:5uftJmFAe8P69711@cluster0.nujv9fy.mongodb.net/?appName=Cluster0/erikertejidos?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("🔥 Conectado exitosamente a MongoDB Atlas"))
  .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

const productoSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  descripcion: String
});

const Producto = mongoose.model('Producto', productoSchema);

// Ruta para enviar los productos a tu React
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000/api/productos");
});