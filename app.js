import dotenv from 'dotenv';
import express from 'express';
import cookieSession from'cookie-session';
import cors from "cors";
import { homedir } from 'os';
import LEX from 'letsencrypt-express';
import authRoutes from './src/routes/auth.js';
import gameRoutes from './src/routes/game.js';
import dataLakeRoutes from './src/routes/dataLake.js';


var DOMAIN = 'localhost';
var EMAIL = 'nienteyuta`gmail.com';

var lex = LEX.create({
  configDir: homedir() + '/letsencrypt/etc',
  server: 'staging',  // テスト環境の場合
  approveRegistration: function (hostname, approve) { // leave `null` to disable automatic registration
    if (hostname === DOMAIN) { // Or check a database or list of allowed domains
      approve(null, {
        domains: [DOMAIN]
      , email: EMAIL
      , agreeTos: true
      });
    }
  }
});

dotenv.config();
const app = express();

// CORSミドルウェアを使用
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);
app.use('/dataLake', dataLakeRoutes);

lex.onRequest = app;

/*lex.listen([80], [443, 5001], function () {
  var protocol = ('requestCert' in this) ? 'https': 'http';
  console.log("Listening at " + protocol + '://localhost:' + this.address().port);
});*/

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

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('process.env.DB_HOST: ' + process.env.DB_HOST)
    console.log('process.env.DB_USER: ' + process.env.DB_USER)
    console.log('process.env.DB_PASSWORD: ' + process.env.DB_PASSWORD)
    console.log('process.env.DB_DATABASE: ' + process.env.DB_DATABASE)
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  });