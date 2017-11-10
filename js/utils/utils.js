// 正则表达式
const regExpStr   = {
    typeStr: require('./regExp/typeStr.regExp'),
    timeStr: require('./regExp/timeStr.regExp'),
    dateStr: require('./regExp/dateStr.regExp'),
};
exports.regExpStr = regExpStr;

const getDateStr   = require('./mixins/getDateStr');
exports.getDateStr = getDateStr;

const filters   = require('./mixins/filters');
exports.filters = filters;

// 类型判定
// 基于 Object.prototype.toString.apply 的类型判定
const _typeof   = require('./mixins/_typeof');
exports._typeof = _typeof;

const isType = require('./mixins/isType');
exports.isType = isType;

let isNull     = isType.isNull;
exports.isNull = isType.isNull;

let isUndefined     = isType.isUndefined;
exports.isUndefined = isType.isUndefined;

let isString     = isType.isString;
exports.isString = isType.isString;

let isNumber     = isType.isNumber;
exports.isNumber = isType.isNumber;

let isBoolean     = isType.isBoolean;
exports.isBoolean = isType.isBoolean;

let isArray     = isType.isArray;
exports.isArray = isType.isArray;

let isFunction     = isType.isFunction;
exports.isFunction = isType.isFunction;

let isDate     = isType.isDate;
exports.isDate = isType.isDate;

let isEmpty = require('./mixins/isEmpty');
exports.isEmpty = isEmpty;


