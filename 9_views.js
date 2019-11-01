const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const path = require('path')

app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async ctx=>{
    let title = 'views';
    await ctx.render('index',{
        title,
        list:[
            {name:'zs',age:20},
            {name:'ls',age:19}
        ]
    })
});

app.listen(3000,()=>{
    console.log("server listening port 3000");
})