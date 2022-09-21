import express, { Request, Response, Application } from 'express';
import nocache from 'nocache';
import { config } from './config';
const app: Application = express();

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { databaseConnection } from './database/dbConnection';
import countRoutes from './routes/countRoutes';
import cookieRoutes from './routes/cookieRoutes';

databaseConnection();

// app.use(cors({ origin: true, credentials: true }));
app.disable('x-powered-by');

app.set('trust proxy', 1);
app.set('etag', false);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.WALKERS_SHORTBREAD));
app.use(helmet());
app.use(nocache());

app.use(
  cors({
    // origin: '*',
    // origin: config.frontendPort,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.get('/', (req: Request, res: Response): void => {
  res.send('Restoplus Challenge MongoDB Backend');
});

app.use(`${config.URL}`, countRoutes);
app.use(`${config.URL}`, cookieRoutes);

app.listen(config.port, (): void => {
  console.log(`Server Running here 👉 https://localhost:${config.port}`);
});
