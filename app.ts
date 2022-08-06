import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { router as indexRouter } from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerYAML = YAML.load('./docs/swagger.yml');

console.dir(process.env);

app.use('/api/v1', indexRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerYAML));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

module.exports = app;
