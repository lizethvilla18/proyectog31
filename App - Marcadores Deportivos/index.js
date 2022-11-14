import express from 'express';
import cors from 'cors';
import { router } from './routes/routes.js';
import pkg from 'colors';
const color = pkg;

console.log("Roar - ᓚᘏᗢ");

const app = express();
app.use(cors);
app.use(express.json());
app.use('/',router);


app.listen(5000, () =>{ 
    console.log("Servidor Corriendo en http://localhost:5000/")   
})
