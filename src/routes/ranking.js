import express from 'express';
import bcrypt from 'bcryptjs';
import * as validation from '../assets/js/validation.js';
import * as util from '../assets/js/util.js';
import * as consts from '../assets/js/const.js';
import User from "../assets/js/models/User.js";
import db from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res) => {
        //受信したユーザーIDと難易度をもとにGAMESテーブルにデータ追加
        const sql = 'SELECT * FROM GAMES_T';

        db.query(sql,(err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            //フロントにjson形式でデータを送信
            res.json({
                success: true,
                message: 'Your message here',
                ranking_data:results
            });
        }
    });
});

export default router;