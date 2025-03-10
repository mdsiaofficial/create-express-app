import { Sequelize } from "sequelize";
import { models } from '../models/index.js';

/**
 * Configure Database
 * nb:
 * - if you face any issues with process.env, try to declare constant 
 * - variables and place values by dotenv and export to use
 */

export const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: false,
  models: models,
});
