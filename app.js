require('dotenv').config();
const axios = require('express');
const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const app = express();
const User = require("./src/assets/js/models/User.js");

// CORSミドルウェアを使用
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
  
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the MySQL database');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('process.env.DB_HOST: ' + process.env.DB_HOST)
    console.log('process.env.DB_USER: ' + process.env.DB_USER)
    console.log('process.env.DB_PASSWORD: ' + process.env.DB_PASSWORD)
    console.log('process.env.DB_DATABASE: ' + process.env.DB_DATABASE)
});

app.post('/assigned', async (req, res) => {
    //パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //ここで入力チェック

    const data = [req.body.userId,hashedPassword];
    const sql = 'INSERT INTO USER_T VALUES (?, ?, NOW(), NOW())';
    db.query(sql, data, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error fetching data from the database' });
        } else {
            res.status(200).json({ success: true, message: 'Request processed successfully.' });
        }
    });
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM USER_T WHERE USER_ID = ?';
    const data = [req.body.userId];

    db.query(sql, data, async (err, results) => {
      if (err) {
        res.status(500).send({ error: 'Error updating data in the database' });
        console.log('err: ' + err)
      } else {
        //アカウントが存在しない
        if(results.length === 0){
          //ログイン失敗処理
        }
        const loginUser = new User(results[0].USER_ID, results[0].PASSWORD, results[0].INSDATE, results[0].UPDDATE);
        
        // パスワードの検証
        const validPassword = await bcrypt.compare(req.body.password, loginUser.password);

        if (!validPassword) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        // JWTトークンの生成
        const token = jwt.sign({ userId: loginUser.userId }, 'your_secret_key', { expiresIn: '24h' });

        res.json({ token });
      }
    });
  });