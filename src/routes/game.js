import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.post('/clear', async (req, res) => {
    //受信したユーザーIDと難易度をもとにGAMESテーブルにデータ追加
    const data = [req.body.userId,req.body.gameLevel,req.body.turn,req.body.clearTime];
    const sql = 'INSERT INTO GAMES_T (USER_ID, GAME_LEVEL, TURNS, CLEAR_TIME, INSDATE, UPDDATE) VALUES (?, ?, ?, ?, NOW(), NOW())';

    db.query(sql, data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            //フロントにjson形式でデータを送信
            res.json({
                success: true,
                message: 'Your message here',
            });
        }
    });
});

export default router;
