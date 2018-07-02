const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('koa-cors');

const routers = require('./routes');

const app = new Koa();
//使用ctx.body解析
app.use(bodyParser());

//配置服务端渲染引擎中间件
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}));

app.use(convert(koaStatic(path.join(__dirname,'./static'))));


mongoose.Promise = global.Promise;
mongoose.connect(config.database,(err)=>{
    if(err){
        console.log('数据库链接失败');
    }else{
        console.log('数据库链接成功');
    }
});
app.use(cors());

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3003,()=>{
    console.log('server 3003 is starting');
})
