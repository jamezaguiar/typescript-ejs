import express from 'express';
import { resolve } from 'path';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(express.static(resolve(__dirname, '..', 'public')));

app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, 'views'));

export default app;
