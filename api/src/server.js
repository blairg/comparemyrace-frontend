const koa = require('koa');

const app = koa();

app.use(function*(){
  this.body = 'Hello from koajs';
  console.log('Hello world!');
});

app.listen(3000);
