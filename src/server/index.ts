import next from 'next';
import express from 'express';
import nextBuild from 'next/dist/build';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config({
  path: path.resolve(__dirname, '../', '../', '.env.local'),
});

const PORT = Number(process.env.PORT) || 3000;

const app = express();

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  port: PORT,
});

const nextHandler = nextApp.getRequestHandler();

const start = () => {
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      console.log('Next.js building for production');
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'));

      process.exit();
    });
    return;
  }

  // middlewares
  app.use(
    cors({
      origin: ['*'],
    })
  );
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, () => {
      console.log(`Next.js started on ${PORT}`);
    });
  });
};

start();

export default serverless(app);
