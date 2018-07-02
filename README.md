# memorization-of-words
基于koa+mongodb+react+redux实现用来保存开发系统中经常用到的关键字以防止重复，也可以作为中文单词记忆本

单词记忆本
==========================

前言
--------------
公司针对系统开发中，开发人员可能针对同一个名词有歧义，开发此系统主要是实现 名词的记忆以及查询，防止开发过程中不必要的重复定义，从开发到部署上线差不多花了三四天时间,主要功能是名词的新增、编辑、模糊搜素、分页；，后续对react 中的数据流持续优化......

技术站
-------------
react + redux + koa2 + mongodb + axios + es6 +webpack 

后续待用技术： react-router  服务端渲染  less/sass 

服务端
==========
服务端地址：<a href="https://github.com/snailsph/memorization-of-words/tree/master/server">server</a> 主要是 koa2 + mongodb  数据库名称：keyworld

接口主要是 新增、编辑、获取列表、获取单个数据

部署
==========
  1、<a href="https://www.cnblogs.com/liuqi/p/6483317.html">nodejs安装</a> ,我使用的版本号：v8.9.0;
  
  2、<a href="https://www.cnblogs.com/grimm/p/5301135.html">mongodb安装</a>;
    启动命令： 1>、/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data/db --fork --port 27017  --logpath=/usr/local/mongodb/data/mongodb_logs/mongodb.log--logappend  --bind_ip(对应的IP地址)   （--auth 是启动数据库认证，暂时不需要）;
              2>、/usr/local/mongodb/bin/mongo;
              
  3、直接关闭防火墙：systemctl stop firewalld（具体运维可能要要针对ip 设置 iptables）;
    
  4、nginx做反向代理，解决跨域问题
  
    1>、安装nginx
    
    2>、server 目录 cnpm install 安装依赖包，上传client  npm run build打包在build文件夹静态页面
    
    3>、 使用pm2启动 此时会打开一个端口 假设 3333
    
    4>、配置反向代理
        找到Nginx配置文件，如果不知道在哪,可以上百度搜一下有命令提示
        一般默认是在 /usr/local/nginx/conf/nginx.conf
        修改配置 找到 server 如图
        
        
    5>、重启 /usr/local/nginx/sbin/nginx -s reload
    
    
项目运行
========
git clone https://github.com/snailsph/memorization-of-words

cd client/server  

cnpm install

client:npm run start

server:nodejs app.js (确保mongndb已启动，keywolrd数据库已创建）

http://localhost:3000


说明
=======

如果对您有帮助，您可以点右上角 "Star" 支持一下 十分感谢!

如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR
      
