export default class Config {
  static dev = {
    token_url: 'https://www.strava.com/oauth/token',
    client_id: 15787,
    redis: {
      host: 'comparemyrace-frontend-redis',
      port: 6379,
      password: '65d77368-eb5a-48aa-99a2-729ab2f081d0',
      expiry: 60,
    }
  };

  static stage = {};
  static prod = {};

  static get(env) {
    switch (env) {
      case 'dev':
        return this.dev;
      case 'stage':
        return this.stage;
      case 'prod':
        return this.prod;
      default:
        return this.dev;
    }
  }
}
