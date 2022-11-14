import express from 'express';


export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Esta es la raiz ☀️')
})

router.get('/login', (req, res) => {
    res.send('Esta es el login ☀️')
})

router.get('/add', (req, res) => {
    res.send('Añades.. ? ☀️')
})

router.get('/delete', (req, res) => {
    res.send('Borras ☀️')
})

export default router;