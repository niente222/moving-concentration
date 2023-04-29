import express from 'express';
import bcrypt from 'bcryptjs';
import * as consts from '../assets/js/const.js';
import * as validation from '../assets/js/validation.js';
import * as util from '../assets/js/util.js';
import User from "../assets/js/models/User.js";
import db from '../config/db.js';

const router = express.Router();

router.post('/assigned', async (req, res) => {
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
        util.sendErrorResponse(res, 'Your message here', validationMessage);
        return;
    }

    //ユーザーID重複チェック
    const user = await User.getUserId(req.body.userId);

    if(user !== null){
        validationMessage.push(consts.greetingValidMessageDuplication(consts.VALID_USER_ID));
        util.sendErrorResponse(res, 'Your message here', validationMessage);

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

router.post('/login', async (req, res) => {
    let validationMessage = [];

    //ユーザーID存在チェック
    const loginUser = await User.getUserId(req.body.userId);
  
    if(loginUser === null){
      validationMessage.push(consts.VALID_MESSAGE_LOGIN_FAILURE);
      util.sendErrorResponse(res, 'Your message here', validationMessage);
  
      return;
    }
  
    // パスワードの検証
    const validPassword = await bcrypt.compare(req.body.password, loginUser.password);
  
    if (!validPassword) {
      validationMessage.push(consts.VALID_MESSAGE_LOGIN_FAILURE);
      util.sendErrorResponse(res, 'Your message here', validationMessage);
    }else{
      //ログイン成功
      //フロントにjson形式でデータを送信
      res.json({
        success: true,
        message: 'Your message here',
        user_id: loginUser.userId,
        token:loginUser.PASSWORD
      });
    }
});

export default router;
