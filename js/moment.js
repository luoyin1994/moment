const SimpleDate = require('./class/SimpleDate');
const MyDate     = require('./class/MyDate');

function moment(inputDateStr, oldFormat = 'YYYY-MM-DD HH:MM:SS') {
    let inputDate = new MyDate(inputDateStr);
    let result    = {
        date  : inputDate.date,
        time  : inputDate.time,
        format: (formatStr = oldFormat) => {
            return inputDate.format(inputDate, new SimpleDate(formatStr));
        },
    };

    return result;
}

module.exports = moment;