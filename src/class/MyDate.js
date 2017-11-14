const isEmpty    = require('../utils/utils').isEmpty;
const SimpleDate = require('./SimpleDate');
const isString   = require('../utils/mixins/isType').isString;

class MyDate extends SimpleDate {
    constructor(inputDate) {
        if (!isString(inputDate)) {
            throw 'Parameter Error: type of arguments[0] should be String';
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