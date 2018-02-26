const Koa = require('koa'),
	co = require('co'),
	Router = require('koa-router');

const server = new Koa(),
	router = new Router();

router.get('/user/:id', ctx => {
	ctx.body = ctx.params.id;
});
server
	.use(router.allowedMethods())
	.use(router.routes())
	.use(require('koa-body')());

server.listen(3000);
