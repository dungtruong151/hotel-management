import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

export const pool = createPool({
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE_NAME,
});

export const connectToDatabase = async () => {
  try {
    await pool.getConnection();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
};
