const router = require('koa-router')();
const keyWorldApi = require('./../controller/keyworld');

const routers = router
    .post('/saveKeyWorld',keyWorldApi.saveKeyworlds)
    .post('/getKeyWorldByName',keyWorldApi.getKeyWorldByName)
    .post('/getKeyWorldList',keyWorldApi.getKeyWorldList);

module.exports = routers;
