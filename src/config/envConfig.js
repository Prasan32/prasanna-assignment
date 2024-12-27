import { config as conf } from 'dotenv';
conf();

const _config = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};

export const config = Object.freeze(_config);