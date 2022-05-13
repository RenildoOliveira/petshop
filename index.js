const express = require('express');
const app = express();
const petsRouter = require('.routes/pets');
const servicosRouter = require('routes/servicos');

app.use(petsRouter);
app.use(servicosRouter);

//rotas dos serviços

app.get('/', (req, res) => {
    res.send('Olá mundo');
})

app.listen(3000, () => console.log('Rodand...'));