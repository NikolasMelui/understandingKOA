const Koa = require('koa'),
	co = require('co'),
	Router = require('koa-router');

const server = new Koa(),
	router = new Router();

router.get('/user', ctx => {
	ctx.body = ctx.request.body;
});
server
	.use(require('koa-body')())
	.use(router.allowedMethods())
	.use(router.routes());

server.listen(3000);
