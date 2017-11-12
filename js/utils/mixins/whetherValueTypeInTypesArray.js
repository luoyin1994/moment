/**
 * 判断 checkedValue 的类型是否存在于 typesArray 中
 * @param checkedValue
 * @param typesArray
 * @returns {boolean}
 */
function whetherValueTypeInTypesArray(checkedValue, typesArray) {
    const _typeof = require('./_typeof');
    let result    = typesArray.find(
        ignoreType => _typeof(checkedValue) === ignoreType);
    return result !== undefined;
}

module.exports = whetherValueTypeInTypesArray;