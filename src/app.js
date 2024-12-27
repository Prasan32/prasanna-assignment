import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/database.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import appRoutes from "../src/routes/app.routes.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

connectDB(); // Database connection

app.use(appRoutes); // Routes configuration

app.use(globalErrorHandler); // error handler

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

export default app;