import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import api from '../api';

const app = new Koa()
  .use(cors())
  .use(async (ctx, next) => {
    await next();
  })
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods());

export default app;
