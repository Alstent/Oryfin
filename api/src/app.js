import express from 'express';
// import cors from 'cors';

import { nextErrors } from './errors/nextErrors.js';

import {
  baseRoutes,
  //loginRoutes,
} from './routes/index.js';

const app = express();

// app.use(cors());
app.use(express.json());

app.use('/base', baseRoutes);
// app.use('/login', loginRoutes);

app.use(nextErrors);

export default app;
