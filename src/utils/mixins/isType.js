const _typeof = require('./_typeof');

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


function isObject(inputValue) {
    return _typeof(inputValue) === 'object';
}

exports.isObject = isObject;

function isFunction(inputValue) {
    return _typeof(inputValue) === 'function';
}

exports.isFunction = isFunction;

function isDate(inputValue) {
    return _typeof(inputValue) === 'date';
}

exports.isDate = isDate;