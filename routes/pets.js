const express = require('express')
const router = express.Router()

router.get('/pets', (req, res) => res.send('Lista de pets'));
router.get('/pets/:id', (req, res) => res.send('Detalhes do pet' + req.params.id));
router.get('/pets', (req, res) => res.send('Cadastro de pet'));
router.get('/pets/:id', (req, res) => res.send('Atualização de pet' + req.params.id));
router.get('/pets/:id', (req, res) => res.send('exclusão de pet' + req.params.id));

module.exports = router;