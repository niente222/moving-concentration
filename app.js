require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
  
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the MySQL database');
});

app.get('/get-data', (req, res) => {
    const sql = 'SELECT * FROM your_table_name';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error fetching data from the database' });
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('process.env.DB_HOST: ' + process.env.DB_HOST);
    console.log('process.env.DB_USER: ' + process.env.DB_USER);
    console.log('process.env.DB_PASSWORD: ' + process.env.DB_PASSWORD);
});

app.post('/add-data', (req, res) => {
    const data = { key: req.body.key, value: req.body.value };
    const sql = 'INSERT INTO your_table_name SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
        res.status(500).send({ error: 'Error adding data to the database' });
        } else {
        res.send({ message: 'Data added successfully', insertId: result.insertId });
        }
    });
});

app.put('/update-data/:id', (req, res) => {
    const sql = 'UPDATE your_table_name SET value = ? WHERE id = ?';
    const data = [req.body.value, req.params.id];
    db.query(sql, data, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Error updating data in the database' });
      } else {
        res.send({ message: 'Data updated successfully', affectedRows: result.affectedRows });
      }
    });
  });

app.delete('/delete-data/:id', (req, res) => {
    const sql = 'DELETE FROM your_table_name WHERE id = ?';
    db.query(sql, req.params.id, (err, result) => {
        if (err) {
        res.status(500).send({ error: 'Error deleting data from the database' });
        } else {
        res.send({ message: 'Data deleted successfully', affectedRows: result.affectedRows });
        }
    });
});