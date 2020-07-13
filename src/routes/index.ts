import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.render('index');
});

export default routes;
