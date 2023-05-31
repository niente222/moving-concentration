import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.post('/getDataLake', async (req, res) => {
        //受信したユーザーIDと難易度をもとにGAMESテーブルにデータ追加
        const sql = 'SELECT * FROM GAMES_T';

        console.error("aaa");
        db.query(sql,(err, results) => {
        if (err) {
            console.error("err: \\o",err);
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