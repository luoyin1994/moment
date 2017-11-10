const typeStrRegExp = require('../regExp/typeStr.regExp');

function _typeof(inputValue) {
    let toString = Object.prototype.toString;

    let typeStr = toString.apply(inputValue);
    typeStr     = typeStrRegExp.exec(typeStr)[1].toLowerCase();
    return typeStr;
};

module.exports = _typeof;

