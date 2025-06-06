const connection = require('../db/connections');

exports.getAll = (req, res) => {
    connection.query('SELECT * FROM CLIENTES', (err, result) => {
        if(err) return res.status(500).send(err);
        res.json(result);
    });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM Clientes WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.create = (req, res) => {
  const { nome, cidade, telefone } = req.body;
  connection.query(
    'INSERT INTO Clientes (nome, cidade, telefone) VALUES (?, ?, ?)',
    [nome, cidade, telefone],
    (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('Cliente criado');
    }
  );
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { nome, cidade, telefone } = req.body;
  connection.query(
    'UPDATE Clientes SET nome = ?, cidade = ?, telefone = ? WHERE id = ?',
    [nome, cidade, telefone, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('Cliente atualizado');
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM Clientes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Cliente deletado');
  });
};