import redis from 'redis';
import bluebird from 'bluebird';

import Config from './../config';

const envVars = Config.get(process.env.ENV);

const client = redis.createClient(envVars.redis.port, envVars.redis.host, {
  retryStrategy: function retry() {
    return 2000;
  },
  noReadyCheck: true,
});

client.auth(envVars.redis.password);

client.on('error', (err) => {
  throw new Error(`Redis connection error: ${err}`);
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

export const redisGet = key => client.getAsync(key).then(res => res);

export const redisSet = (key, value) => client.setAsync(key, value, 'EX', envVars.redis.expiry).then(() => {
  // eslint-disable-next-line
  console.log(`setting key: ${key}`);
});
