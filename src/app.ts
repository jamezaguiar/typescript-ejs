import express from 'express';
import { resolve } from 'path';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'views'));

export default app;
