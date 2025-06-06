const connection = require('../db/connections');

const getAllPedidos = (req, res) => {
  const query = `
    SELECT 
      p.id, p.descricao, p.valor, p.data_pedido, c.nome AS cliente_nome
    FROM pedidos p
    JOIN clientes c ON p.cliente_id = c.id
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar pedidos:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.json(results);
  });
};

const createPedido = (req, res) => {
  const { cliente_id, descricao, valor } = req.body;

  if (!cliente_id || !descricao || !valor) {
    return res.status(400).json({ error: 'Campos cliente_id, descricao e valor são obrigatórios' });
  }

  const query = 'INSERT INTO pedidos (cliente_id, descricao, valor) VALUES (?, ?, ?)';
  connection.query(query, [cliente_id, descricao, valor], (err, result) => {
    if (err) {
      console.error('Erro ao criar pedido:', err);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
    res.status(201).json({ message: 'Pedido criado com sucesso', id: result.insertId });
  });
};

module.exports = {
  getAllPedidos,
  createPedido,
};