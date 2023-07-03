import { db } from '../db.js'

export const getUsers = (_, res) => {
  const q = 'SELECT * FROM tarefa';

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = 'INSERT INTO tarefa (afazer, data) VALUES (?, ?)';
  const values = [req.body.tarefa, req.body.data];

  db.query(q, values, (err) => {
    if (err) return res.json(err);
    return res.status(200).json('Tarefa criada com sucesso!');
  });
};

export const updateUser = (req, res) => {
  const q = 'UPDATE tarefa SET afazer = ?, data = ? WHERE id = ?';
  const values = [req.body.tarefa, req.body.data, req.params.id];

  db.query(q, values, (err) => {
    if (err) return res.json(err);
    return res.status(200).json('Tarefa atualizada com sucesso!');
  });
};

export const deleteUser = (req, res) => {
  const q = 'DELETE FROM tarefa WHERE id = ?';

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json('Tarefa deletada com sucesso!');
  });
};
