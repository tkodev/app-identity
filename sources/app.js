// ****************************************************************************************************
// Init
// ****************************************************************************************************

// use strict scoping
'use strict';

// dependencies
const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');
const koaHelmet = require('koa-helmet');
const koaJson = require('koa-json');
const koaSslify = require('koa-sslify').default;
const koaStatic = require('koa-static');
const koaViews = require('koa-views');
const routes = require('./routes.js');

// init settings
const appEnv = process.env.NODE_ENV || 'development';

// init instances
const app = new Koa();
app.proxy = true;
console.log(`Server in ${appEnv} mode.`);


// ****************************************************************************************************
// Koa Logic
// ****************************************************************************************************

// live middleware
if(appEnv === 'production'){
  app.use(koaSslify());
  app.use(koaHelmet.hsts()); // tells browsers https is preferred (does not redirect though)
}

// middleware
app.use(koaHelmet.hidePoweredBy()) // hide poweredby string
app.use(koaHelmet.ieNoOpen()) // forces browsers to treat all downloads as downloads
app.use(koaHelmet.noSniff()) // tells browsers to only use server mime types
app.use(koaHelmet.xssFilter()) // tells browsers to check for query string xss attacks
app.use(koaBodyParser()); // parses request body to json
app.use(koaJson()); // sets response body to json
app.use(koaViews(`${__dirname}/views`, { extension: 'pug' })) // template renderer

// ctx state - used in template rendering, front end window variables, routes logic
app.use(async (ctx, next) => {
  ctx.state = {
    appEnv
  }
})

// routes - main
app.use(routes.routes()).use(routes.allowedMethods());
app.use(koaStatic(`${__dirname}/public`));

// routes - 404 
app.use(async (ctx, next) => {
  try {
    await next();
		if(ctx.response.status >= 400) ctx.throw(ctx.response.status, ctx.response.message);
	} catch (error) {
		// if(error.status != 404) ctx.app.emit('error', error, ctx);
		await ctx.render('app/error', {
			error
		});
  }
});

// init server
app.listen(80);
console.log(`Ready on port: 80`)