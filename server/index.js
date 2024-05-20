import express from 'express';
import appRouter from './routes/index.js';
import "./db/index.js";
import { connectToDatabase } from './db/index.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', appRouter);

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('Failed to connect to the database', error);
  process.exit(0);
});
