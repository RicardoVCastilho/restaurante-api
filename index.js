const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());

const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

app.use(express.json());
app.use('/api/clientes', clienteRoutes);
app.use('/api/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});