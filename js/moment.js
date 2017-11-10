const SimpleDate = require('./class/SimpleDate');
const MyDate     = require('./class/MyDate');

// todo 暂时没有处理'2017-11-06 11:255:0' 错误格式的提示
function moment(inputDate, oldFormat = 'YYYY-MM-DD HH:MM:SS') {
    inputDate  = new MyDate(inputDate);
    let result = {
        date  : inputDate.date,
        time  : inputDate.time,
        format: (formatStr = oldFormat) => {
            return inputDate.format(inputDate, new SimpleDate(formatStr));
        },
    };
    return result;
}

module.exports = moment;