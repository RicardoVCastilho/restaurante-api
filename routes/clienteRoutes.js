const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.get('/all-clientes', clienteController.getAll);
router.get('/:id', clienteController.getById);
router.post('/clientes', clienteController.create);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;