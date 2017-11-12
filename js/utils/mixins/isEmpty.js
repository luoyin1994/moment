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
    notEmptyDefaultTypesArray = ['function', 'date', 'boolean', 'number'],
) {
    // 自定义的prototype属性
    require('../../prototype/isEmpty.prototype');
    const whetherValueTypeInTypesArray = require(
        './whetherValueTypeInTypesArray');

    if (whetherValueTypeInTypesArray(checkedValue, isEmptyDefaultTypesArray)) {
        return true;
    }

    if (whetherValueTypeInTypesArray(checkedValue, notEmptyDefaultTypesArray)) {
        return false;
    }

    // 其他类型时
    if (checkedValue.isEmpty) {
        return checkedValue.isEmpty();
    }
    return false;
}

module.exports = isEmpty;
