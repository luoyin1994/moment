/**
 * 判断是否为自定义的空
 * @param checkedValue 检测值
 * @param isEmptyDefaultTypesArray 默认为空的类型数组
 * @param notEmptyDefaultTypesArray 默认不为空的类型数组
 * @returns {boolean}
 */
function isEmpty(
    checkedValue,
    isEmptyDefaultTypesArray  = ['null', 'undefined'],
    notEmptyDefaultTypesArray = ['function', 'date', 'boolean', 'number']
) {
    const whetherValueTypeInTypesArray = require(
        './whetherValueTypeInTypesArray');

    const isObject = require('./isType').isObject;
    const isString = require('./isType').isString;
    const isArray  = require('./isType').isArray;

    if (whetherValueTypeInTypesArray(checkedValue, isEmptyDefaultTypesArray)) {
        return true;
    }

    if (whetherValueTypeInTypesArray(checkedValue, notEmptyDefaultTypesArray)) {
        return false;
    }

    // 可以验证的类型
    if (isObject(checkedValue)) {
        let length = Object.keys(checkedValue).length;
        return length === 0;
    }

    if (isArray(checkedValue)) {
        return checkedValue.length === 0;
    }

    if (isString(checkedValue)) {
        return checkedValue.toString().trim() === '';
    }

    return false;
}

module.exports = isEmpty;
