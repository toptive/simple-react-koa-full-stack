const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const os = require('os');

const app = new Koa();
const router = new Router();

router.get('/api/getUsername', async (ctx) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = { username: os.userInfo().username };
});

app.use(serve('dist'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
