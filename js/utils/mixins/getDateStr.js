const filters = require('./filters');
const isDate  = require('./isType').isDate;

/**
 * 获取 Date 对象的 String
 * @param dateObj 传入date对象
 * @returns {string} 格式为 YYYY-MM-DD HH:MM:SS
 */
function getDateStr(dateObj) {
    if (!isDate(dateObj)) {
        throw 'Parameter Error: type of arguments[0] should be Date';
    }

    let year  = dateObj.getFullYear().toString();
    let month = (dateObj.getMonth() + 1).toString();
    let day   = dateObj.getDate().toString();

    let hour   = dateObj.getHours().toString();
    let minute = dateObj.getMinutes().toString();
    let second = dateObj.getSeconds().toString();

    // 添加 0 前缀
    year  = filters.prefix_0(year, 4);
    month = filters.prefix_0(month, 2);
    day   = filters.prefix_0(day, 2);

    hour  = filters.prefix_0(hour, 2);
    minute = filters.prefix_0(minute, 2);
    second   = filters.prefix_0(second, 2);

    let dateStr = `${year}-${month}-${day}`;
    let timeStr = `${hour}:${minute}:${second}`;

    return `${dateStr} ${timeStr}`;
}

module.exports = getDateStr;
