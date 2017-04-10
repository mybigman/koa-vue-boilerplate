const router = require('koa-router')()
const render = require('koa-ejs')
router.get('/user', async function(ctx,next){

  await ctx.render("index")

})

router.get('/api', async function(ctx,next){

  await ctx.render("index")

})

router.get('*', async function(ctx,next){

  await ctx.render('vue', {});

})

module.exports = router
