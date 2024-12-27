import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/database.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectDB(); // Database connection


app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

export default app;