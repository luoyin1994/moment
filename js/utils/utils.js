// 自定义的prototype属性
require('../prototype/isEmpty.prototype');

// 正则表达式
const regExpStr   = {
    typeStr: require('./regExp/typeStr.regExp'),
};
exports.regExpStr = regExpStr;

// 类型判定
// 基于 Object.prototype.toString.apply 的类型判定
const _typeof   = require('./mixins/typeof');
exports._typeof = _typeof;

function isNull(inputValue) {
    return _typeof(inputValue) === 'null';
}

exports.isNull = isNull;

function isUndefined(inputValue) {
    return _typeof(inputValue) === 'undefined';
}

exports.isUndefined = isUndefined;

function isString(inputValue) {
    return _typeof(inputValue) === 'string';
}

exports.isString = isString;

function isNumber(inputValue) {
    return _typeof(inputValue) === 'number';
}

exports.isNumber = isNumber;

function isBoolean(inputValue) {
    return _typeof(inputValue) === 'boolean';
}

exports.isBoolean = isBoolean;

function isArray(inputValue) {
    return _typeof(inputValue) === 'array';
}

exports.isArray = isArray;

function isFunction(inputValue) {
    return _typeof(inputValue) === 'function';
}

exports.isFunction = isFunction;

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

exports.isEmpty = isEmpty;



