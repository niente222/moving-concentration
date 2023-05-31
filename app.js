import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import express from 'express';
import cookieSession from'cookie-session';
import cors from "cors";
import { homedir } from 'os';
import authRoutes from './src/routes/auth.js';
import gameRoutes from './src/routes/game.js';
import dataLakeRoutes from './src/routes/dataLake.js';

dotenv.config();
const app = express();

// CORSミドルウェアを使用
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);
app.use('/dataLake', dataLakeRoutes);

app.set('trust proxy', 1)
app.use(
    cookieSession({
      name: "__session",
      keys: ["_ga"],
        maxAge: 24 * 60 * 60 * 100,
        secure: true,
        httpOnly: true,
        sameSite: 'none'
    })
);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/www.ugoku-sinkesuijaku.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.ugoku-sinkesuijaku.com/fullchain.pem'),
}

var server = https.createServer(options, app);

server.listen(443, function() {
  process.setuid && process.setuid('ec2-user');
  console.log(`user was replaced to uid: ${process.getuid()} ('ec2-user')`);
  console.log('example app listening on port 443!');
});