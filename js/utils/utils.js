// 正则表达式
const regExpStr   = {
    typeStr: require('./regExp/typeStr.regExp'),
    timeStr: require('./regExp/timeStr.regExp'),
    dateStr: require('./regExp/dateStr.regExp'),
};
exports.regExpStr = regExpStr;

// 转换时间对象为字符串
exports.getDateStr = require('./mixins/getDateStr');

// 过滤函数
exports.filters = require('./mixins/filters');

// 类型判定
// 基于 Object.prototype.toString.apply 的类型判定
exports._typeof = require('./mixins/_typeof');

const isType = require('./mixins/isType');

exports.isNull = isType.isNull;

exports.isUndefined = isType.isUndefined;

exports.isString = isType.isString;

exports.isNumber = isType.isNumber;

exports.isBoolean = isType.isBoolean;

exports.isArray = isType.isArray;

exports.isObject = isType.isObject;

exports.isFunction = isType.isFunction;

exports.isDate = isType.isDate;

// 判断是否为自定义的空
exports.isEmpty = require('./mixins/isEmpty');

// 判断 checkedValue 的类型是否存在于 typesArray 中
exports.whetherValueTypeInTypesArray = require('./mixins/whetherValueTypeInTypesArray');

