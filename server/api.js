import KoaRouter from 'koa-router';
import fetch from 'request-promise';

import Config from './config';

const envVars = Config.get(process.env.ENV);
const api = KoaRouter();

api.get('/token/:code',
  async (ctx, next) => {
    const {
      code
    } = ctx.params;

    var options = {
      method: 'POST',
      uri: envVars.token_url,
      body: {
          client_id: envVars.client_id,
          client_secret: process.env.STRAVA_CLIENT_SECRET,
          code: code
      },
      json: true,
    };

    await fetch(options)
      .then(function (parsedBody) {
          console.log('performed request: ' + envVars.token_url);
          ctx.body = parsedBody;
          ctx.status = 200;
      })
      .catch(function (err) {
          console.log(err);
          ctx.body = err.message;
          ctx.status = 400;
      });
  });

export default api;
