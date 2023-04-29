import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import authRoutes from './src/routes/auth.js';
import gameRoutes from './src/routes/game.js';

dotenv.config();
const app = express();

// CORSミドルウェアを使用
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('process.env.DB_HOST: ' + process.env.DB_HOST)
    console.log('process.env.DB_USER: ' + process.env.DB_USER)
    console.log('process.env.DB_PASSWORD: ' + process.env.DB_PASSWORD)
    console.log('process.env.DB_DATABASE: ' + process.env.DB_DATABASE)
});