const isEmpty = require('../utils/utils').isEmpty;
const SimpleDate = require('./SimpleDate');

class MyDate extends SimpleDate {
    constructor(...args) {
        super(...args);
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
        return `${inputSimpleDate.date.toString()} ${inputSimpleDate.time.toString()}`;
    };
}

module.exports = MyDate;