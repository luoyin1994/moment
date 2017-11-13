const SimpleDate = require('./class/SimpleDate');
const MyDate     = require('./class/MyDate');
const utils = require('./utils/utils');
const regExpStr = utils.regExpStr;
const isString = utils.isString;
const isDate = utils.isDate;
const getDateStr = utils.getDateStr;

function moment(inputDate, oldFormatStr = 'YYYY-MM-DD HH:MM:SS') {
    // 验证输入字符串与格式是否匹配
    if(isString(inputDate) && !regExpStr.allowedInputStringFormat.test(oldFormatStr)) {
        throw 'Parameter Error: invalid arguments[0] format';
    }
    // 如果是 Date 对象，转换为字符串，格式为'YYYY-MM-DD HH:MM:SS'
    if (isDate(inputDate)) {
        inputDate = getDateStr(inputDate);
    }
    inputDate  = new MyDate(inputDate);
    let result = {
        date  : inputDate.date,
        time  : inputDate.time,
        format: (formatStr = oldFormatStr) => {
            return inputDate.format(inputDate, new SimpleDate(formatStr));
        },
    };
    return result;
}

module.exports = moment;