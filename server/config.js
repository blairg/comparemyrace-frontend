export default class Config {
  static dev = {
    token_url: 'https://www.strava.com/oauth/token',
    client_id: 15787,
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
