import express from "express";
import cors from 'cors';
import { router } from './routes/routes.js'
import cookieParser from "cookie-parser";
//import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//app.use('/usuarios',blogRoutes)
app.use(cookieParser());
//app.use('/',router);
app.use('/usuarios',router);



app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})