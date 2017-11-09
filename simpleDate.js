let time = '2017-11-06 10:23:35';

function SimpleDate(dateStr) {
    if (typeof dateStr !== 'string') {
        console.log('typeof dateStr must be string!');
        return;
    }

    this.date = {
        year : undefined,
        month: undefined,
        day  : undefined,
        toString() {
            let year  = this.year !== undefined ? this.year : '';
            let month = (year !== '' && this.month !== undefined)
                ? `-${this.month}`
                : '';
            let day   = (month !== '' && this.day !== undefined)
                ? `-${this.day}`
                : '';
            return `${year}${month}${day}`;
        },
    };

    this.time = {
        hour  : undefined,
        minute: undefined,
        second: undefined,
        toString() {
            let hour   = this.hour !== undefined ? this.hour : '';
            let minute = (hour !== '' && this.minute !== undefined)
                ? `:${this.minute}`
                : '';
            let second = (minute !== '' && this.second !== undefined)
                ? `:${this.second}`
                : '';
            return `${hour}${minute}${second}`;
        },
    };

    // 分离日期和时间
    dateStr = dateStr.split(' ');

    let date = dateStr[0] || '-';
    let time = dateStr[1] || ':';

    // 分离年月日
    date = date.split('-');

    // 赋值年月日
    this.date.year  = date[0];
    this.date.month = date[1];
    this.date.day   = date[2];

    // 分离时分秒
    time = time.split(':');

    // 赋值时分秒
    this.time.hour   = time[0];
    this.time.minute = time[1];
    this.time.second = time[2];

    this.format = function(inputDateStr, formatDateStr) {
        let inputSimpleDate = new SimpleDate(inputDateStr);
        let formatSimpleDate = new SimpleDate(formatDateStr);
        for (let x in formatSimpleDate) {
            for (let y in formatSimpleDate[x]) {
                if (typeof formatSimpleDate[x][y] === 'undefined') {
                    inputSimpleDate[x][y] = undefined;
                }
            }
        }
        return `${inputSimpleDate.date.toString()} ${inputSimpleDate.time.toString()}`;
    };
}

function moment(inputDateStr, oldFormat = 'YYYY-MM-DD') {
    let inputDate = new SimpleDate(inputDateStr);
    let result    = {
        date  : inputDate.date,
        time  : inputDate.time,
        format: (formatStr = oldFormat) => {
            console.log(2);
            console.log(inputDate.format(inputDateStr, formatStr));
        },
    };

    return result;
}

let timeToYYYYMMDDHHmm = (time) => {
    let result = '';

    moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
    return result;
};
let timeToYYYYMMDD     = (time) => {
    let result = '';

    moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    return result;
};
// let b                  = new SimpleDate('YYYY-MM-DD HH:mm');
// let b                  = new SimpleDate(time);
let a = moment(time).format();
console.log(a);

