// 自定义的prototype属性
require('../../prototype/isEmpty.prototype');
const isNull      = require('./isType').isNull;
const isUndefined = require('./isType').isUndefined;
const isFunction  = require('./isType').isFunction;

function isEmpty(inputValue) {
    // null 和 undefined 类型时
    if (isNull(inputValue) || isUndefined(inputValue)) {
        return true;
    }
    if (isFunction(inputValue)) {
        return false;
    }
    // 其他类型时
    return inputValue.isEmpty();
}

module.exports = isEmpty;
