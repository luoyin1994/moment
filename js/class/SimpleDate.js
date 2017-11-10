const isEmpty = require('../utils/utils').isEmpty;

class SimpleDate {
    constructor(dateStr) {
        if (typeof dateStr !== 'string') {
            console.log('typeof dateStr must be string!');
            return;
        }

        this.date = {
            year : '',
            month: '',
            day  : '',
            toString() {
                let year  = !isEmpty(this.year) ? this.year : '';
                let month = (!isEmpty(year) && !isEmpty(this.month))
                    ? `-${this.month}`
                    : '';
                let day   = (!isEmpty(month) && !isEmpty(this.day))
                    ? `-${this.day}`
                    : '';
                return `${year}${month}${day}`;
            },
        };

        this.time = {
            hour  : '',
            minute: '',
            second: '',
            toString() {
                let hour   = !isEmpty(this.hour) ? this.hour : '';
                let minute = (!isEmpty(hour) && !isEmpty(this.minute))
                    ? `:${this.minute}`
                    : '';
                let second = (!isEmpty(minute) && !isEmpty(this.second))
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
    }
}

module.exports = SimpleDate;