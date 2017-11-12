const typeStrRegExp = require('../regExp/typeStr.regExp');

/**
 * 扩展的 typeof
 * 可以进行的类型检测包括但不限于：
 * null、undefined、string、number、array、boolean、object、function、date
 * @param inputValue
 * @returns {*}
 */
function _typeof(inputValue) {
    let toString = Object.prototype.toString;

    let typeStr = toString.apply(inputValue);
    typeStr     = typeStrRegExp.exec(typeStr)[1].toLowerCase();
    return typeStr;
};

module.exports = _typeof;

