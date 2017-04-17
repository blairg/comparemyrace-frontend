export default class Config {
  static dev = {
    stravaUrl: 'https://www.strava.com/oauth/authorize?client_id=15787&response_type=code&redirect_uri=http://localhost:8080/token_exchange&scope=view_private&state=&approval_prompt=auto',
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
