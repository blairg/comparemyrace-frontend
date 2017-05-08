const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const src = env === 'production' ? './build/app' : './src/app.js';

// eslint-disable-next-line
require('babel-polyfill');
if (env === 'development') {
  // for development use babel/register for faster runtime compilation
  // eslint-disable-next-line
  require('babel-register');
}

// eslint-disable-next-line
const app = require(src).default;
app.listen(port);
// eslint-disable-next-line
console.log(`listening on port: ${port}`);
