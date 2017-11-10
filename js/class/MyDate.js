const isEmpty    = require('../utils/utils').isEmpty;
const getDateStr = require('../utils/utils').getDateStr;
const SimpleDate = require('./SimpleDate');
const isString   = require('../utils/mixins/isType').isString;
const isDate     = require('../utils/mixins/isType').isDate;

class MyDate extends SimpleDate {
    constructor(inputDate) {
        if (!(isDate(inputDate) || isString(inputDate))) {
            throw 'Parameter Error: type of arguments[0] should be Date or String';
        }
        if (isDate(inputDate)) {
            inputDate = getDateStr(inputDate);
        }
        super(inputDate);
    }

    /**
     * 获得匹配的日期格式
     * @param inputDateStr 输入日期字符串
     * @param formatDateStr 日期格式字符串
     * @returns {string} 返回格式后的日期
     */
    format(inputSimpleDate, formatSimpleDate) {
        for (let x in formatSimpleDate) {
            for (let y in formatSimpleDate[x]) {
                if (isEmpty(formatSimpleDate[x][y])) {
                    inputSimpleDate[x][y] = '';
                }
            }
        }
        let dateString = inputSimpleDate.date.toString();
        let timeString = inputSimpleDate.time.toString();
        return `${dateString} ${timeString}`.trim();
    };
}

module.exports = MyDate;