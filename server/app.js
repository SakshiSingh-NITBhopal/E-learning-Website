import express from 'express';
import { PORT } from './config/env.js'
import { connectToDatabase } from './database/db.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import errorMiddleware from './middlewares/error.middleware.js';


const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use(errorMiddleware);

const startServer = async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
};

startServer();