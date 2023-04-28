import dotenv from 'dotenv';
import axios from 'axios';
import express from 'express';
import cors from "cors";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2';
import User from "./src/assets/js/models/User.js";
import * as util from './src/assets/js/util.js';
import * as consts from './src/assets/js/const.js';
import * as validation from './src/assets/js/validation.js';

const app = express();
dotenv.config();

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
  let validationMessage = [];

    //パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //入力チェック
    const validUserId = validation.validUserId(req.body.userId);
    const validPassword = validation.validPassword(req.body.password);

    if(!util.isEmpty(validUserId)){
      validationMessage.push(validUserId);
    }  

    if(!util.isEmpty(validPassword)){
      validationMessage.push(validPassword);
    }  

    if(validationMessage.length > 0){
      res.json({
        success: false,
        message: 'Your message here',
        validMessage: validationMessage
      });

      return;
    }

    //ユーザーID重複チェック
    const user = await getUserId(req.body.userId);

    if(user !== null){
      validationMessage.push(consts.greetingValidMessageDuplication(consts.VALID_USER_ID));
      res.json({
        success: false,
        message: 'Your message here',
        validMessage: validationMessage
      });

      return;
    }

    //ユーザー登録
    const data = [req.body.userId,hashedPassword];
    const sql = 'INSERT INTO USER_T VALUES (?, ?, NOW(), NOW())';
    db.query(sql, data, (err, result) => {
        if (err) {
            res.status(500).send({ error: 'Error fetching data from the database' });
        } else {
            //フロントにjson形式でデータを送信
            res.json({
              success: true,
              message: 'Your message here',
              user_id: req.body.userId,
              token:hashedPassword
            });
        }
    });
});

app.post('/login', async (req, res) => {
  let validationMessage = [];

  //ユーザーID存在チェック
  const loginUser = await getUserId(req.body.userId);

  if(loginUser === null){
    validationMessage.push(consts.validMessageLoginFailure);
    res.json({
      success: false,
      message: 'Your message here',
      validMessage: validationMessage
    });

    return;
  }

  // パスワードの検証
  const validPassword = await bcrypt.compare(req.body.password, loginUser.password);

  if (!validPassword) {
    validationMessage.push(consts.validMessageLoginFailure);
    res.json({
      success: false,
      message: 'Your message here',
      validMessage: validationMessage
    });
  }else{
    //ログイン成功
    //フロントにjson形式でデータを送信
    res.json({
      success: true,
      message: 'Your message here',
      user_id: loginUser.USER_ID,
      token:loginUser.PASSWORD
    });
  }
});

async function getUserId(userId) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM USER_T WHERE USER_ID = ?';
    const data = [userId];

    db.query(sql, data, (err, results) => {
      if (err || results.length === 0) {
        resolve(null);
      } else {
        resolve(new User(results[0].USER_ID, results[0].PASSWORD, results[0].INSDATE, results[0].UPDDATE));
      }
    });
  });
}