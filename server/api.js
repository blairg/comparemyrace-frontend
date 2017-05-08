import KoaRouter from 'koa-router';
import fetch from 'request-promise';

import { redisGet, redisSet } from './dataAccess/redis';
import Config from './config';

const envVars = Config.get(process.env.ENV);
const api = KoaRouter();

api.get('/token/:code',
  async (ctx, next) => {
    const {
      code
    } = ctx.params;

    const getPromise = redisGet(code);
    let redisValue;

    getPromise.then((result) => {
      redisValue = result;  
    });

    if (redisValue != null) {
      ctx.body = JSON.parse(redisValue);
      ctx.status = 304;
    } else {
      const options = {
        method: 'POST',
        uri: envVars.token_url,
        body: {
          client_id: envVars.client_id,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          code,
        },
        json: true,
      };

      await fetch(options)
        .then((parsedBody) => {
          redisSet(code, JSON.stringify(parsedBody));
          redisSet(parsedBody.access_token, parsedBody.access_token);
          redisSet(`${parsedBody.access_token}-athlete`, JSON.stringify(parsedBody.athlete));

          console.log(`Redis Key - ${parsedBody.access_token}`);
          console.log('Redis Key - ' + `${parsedBody.access_token}-athlete`);
          console.log(`performed request: ${envVars.token_url}`);
          ctx.body = parsedBody;
          ctx.status = 200;
        })
        .catch((err) => {
          //console.log(err);
          console.log(err.message);
          ctx.body = err.message;
          ctx.status = 400;
        });
    }
  });

export default api;
