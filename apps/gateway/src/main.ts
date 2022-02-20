/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { authRouter } from './app/routes/auth';

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
