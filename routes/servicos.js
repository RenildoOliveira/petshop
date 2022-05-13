const express = require('express');
const router = express.Router();

router.get('/servicos', (req, res) => res.send('tipos de serviços:'));
router.get('/servicos/:id', (req, res) => res.send('Serviços estéticos: ' + req.params.id));
router.get('/servicos/:id', (req,res) => res.send('Bem-estar: ' + req.params.id));
router.get('/servicos/:id', (req, res) => res.send('Serviços Médicos: ' + res.params.id));
router.get('/servicos/:id', (req, res) => res.send('Educação: ' + res.params.id));
router.get('/servicos/:id', (req, res) => res.send('Transporte: ' + res.params.id));

module.exports = router;




