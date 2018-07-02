/**
 * 关键字对象信息
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const KeyWorldSchema = new Schema({
    chinaName: {
        type: String,
        unique: true,
        require: true
    },
    englishName: {
        type: String,
    },
    simpleName: {
        type: String,
    },
    remark: {
        type: String,
    },
    sqlName: {
        type: String,
    }
});

module.exports = mongoose.model('KeyWorld',KeyWorldSchema);