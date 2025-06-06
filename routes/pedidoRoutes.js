const express = require('express');
const router = express.Router();
const pedidoController = require('../controller/pedidoController');

router.get('/all-pedidos', pedidoController.getAllPedidos);
router.post('/pedidos', pedidoController.createPedido);

module.exports = router;