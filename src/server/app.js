const Koa = require('koa')
const serve = require('koa-static')
const renderEJS = require('koa-ejs')
const router = require('./routes')
const path = require('path')
const app = new Koa()

//serve static assets including vue dist script
app.use(serve(path.join(__dirname, '../../public')))

//setup ejs renderer
renderEJS(app, {
  root: path.join(__dirname, './views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: true
});


//setup router
app
  .use(router.routes())
  .use(router.allowedMethods())

// app.use(ctx => {
//   ctx.body = 'Hello World'
// });

app.listen(3000)
