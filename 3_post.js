const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let data = '';
    //监听data事件，收到表单数据就会执行
    ctx.req.on('data', chunk =>{
        data +=chunk; //二进制
    });

    ctx.req.on('end',() =>{
        data = decodeURI(data);//对data数据进行解码
        console.log(data);
    });
    
    ctx.body = data;
});



app.listen(3000,() =>{
    console.log("server listening port 3000");
});