import Express from "express";
import cors from 'cors';

//import blogRoutes from './routes/reoutes.js

const app = Express()
app.use(cors())
app.use(Express.json())
//app.use(´/usarios'.blogRoutes)

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(8000,()=>{
    console.log('servidor en http://localhost:8000/')
})