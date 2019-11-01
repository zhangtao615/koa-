const Koa = require('koa');
const app = new Koa();
 

app.use(async ctx => {
    if(ctx.url === '/cookies'){
        ctx.cookies.set(
            'name','cookies',{
                domain:'localhost',
                path:'/cookies',
                maxAge:24*60*60*1000,
                expries:new Date('2019-11-3'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body = 'cookies'
    }else{
        ctx.body = 'err'
    }
});

app.listen(3000,()=>{
    console.log("server listening port 3000");
})