const koa = require('koa');

const app = koa();

app.use(function* () {
  this.body = 'Hello from koajs';
  console.log('API started!!');
});

app.listen(3000);
