const isString = require('./isType').isString;
const isNumber = require('./isType').isNumber;
const isEmpty = require('./isEmpty');

/**
 * 添加“0”前缀
 * @param string 需要验证添加的值
 * @param validateLength 需要验证的位数
 * @returns {*}
 */
function prefix_0(string, validateLength) {
    if(isEmpty(string)) return string;
    if (!isString(string)) {
        throw 'Parameter Error: type of arguments[0] should be String';
    }
    if (!isNumber(validateLength)) {
        throw 'Parameter Error: type of arguments[1] should be Number';
    }
    let length = string.length;
    while (length < validateLength) {
        string = `0${string}`;
        length += 1;
    }
    return string;
}

exports.prefix_0 = prefix_0;