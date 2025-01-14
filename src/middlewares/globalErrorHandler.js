

import { config } from '../config/envConfig.js';
import { HttpError } from 'http-errors';

const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let data = {
        message: "Internal Server Error",
        ...(config.NODE_ENV === "development" && {
            originalMessage: err.message,
        }),
    };

    if (err instanceof HttpError) {
        statusCode = err.statusCode;
        data = {
            message: err.message,
        };
    }

    res.status(statusCode).json(data);
};

export default globalErrorHandler;