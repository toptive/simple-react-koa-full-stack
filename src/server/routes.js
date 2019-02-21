const Router = require('koa-router');
const os = require('os');

const router = new Router();

router.get('/api/getUsername', async (ctx) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = { username: os.userInfo().username };
});

module.exports = router;
