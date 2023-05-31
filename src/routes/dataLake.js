import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.post('/getDataLake', async (req, res) => {
        //受信したユーザーIDと難易度をもとにGAMESテーブルにデータ追加
        const sql = 'SELECT * FROM GAMES_T';

        db.query(sql,(err, results) => {
        if (err) {
            res.json({
            success: false,
            err: err
        });
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