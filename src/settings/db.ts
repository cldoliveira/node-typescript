import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const db = new Sequelize(
    process.env.DATABASE_NAME as string,
    process.env.DATABASE_USER as string,
    process.env.DATABASE_PASSWORD as string,
    {
        dialect: "mysql",
        host: process.env.DATABASE_HOST as string,
        port: +(process.env.DATABASE_PORT as string)
    }
)