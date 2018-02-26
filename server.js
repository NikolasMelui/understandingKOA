const Koa = require('koa'),
	co = require('co'),
	Router = require('koa-router');

const server = new Koa(),
	router = new Router();

router.get('/user', ctx => {
	ctx.body = 'Hello';
});
server
	.use(router.allowedMethods())
	.use(router.routes())
	.use(require('koa-body')());

server.listen(3000);
