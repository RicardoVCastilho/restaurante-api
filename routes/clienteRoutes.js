const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.get('/clientes', clienteController.getAll);
router.get('/clientes/:id', clienteController.getById);
router.post('/clientes', clienteController.create);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes', clienteController.delete);

module.exports = router;