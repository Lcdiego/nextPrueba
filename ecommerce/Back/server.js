import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import coneccionDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';




dotenv.config();

coneccionDB();

const app =express();

app.use(cors());
app.use(express.json());


// Servir imágenes estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);








const PORT = process.env.PORT
app.listen(PORT, console.log(`conectado al puerto ${PORT}`))