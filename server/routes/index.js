const router = require('koa-router')();

const api = require('./keyworld');

router.use('/api',api.routes(),api.allowedMethods());

module.exports = router;