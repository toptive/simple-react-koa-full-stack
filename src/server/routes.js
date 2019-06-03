const Router = require('koa-router');
const os = require('os');
const fs = require('fs');
const path = require('path');

const router = new Router();

router.get('/api/getUsername', async (ctx) => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = { username: os.userInfo().username };
});

router.get('*', async function(ctx, next) {
  var html = fs.readFileSync(path.resolve('./dist/index.html'));
  ctx.type = 'html';
  ctx.body = html;
})

module.exports = router;
