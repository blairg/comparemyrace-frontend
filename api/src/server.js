const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/', function* base(next) {
  this.status = 200;
  this.body = 'Hello from Koa!';

  yield next;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
