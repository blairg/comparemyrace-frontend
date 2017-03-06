const koa = require('koa');

const app = koa();

app.use(function* () {
  console.log('API started!!');
  yield this.body = 'Hello from koajs';
});

app.listen(3000);
