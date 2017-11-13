const isEmpty   = require('../utils/utils').isEmpty;
const regExpStr = require('../utils/utils').regExpStr;
const filters   = require('../utils/utils').filters;

class SimpleDate {
    constructor(inputDateStr) {
        if (typeof inputDateStr !== 'string') {
            throw 'Parameter Error: type of arguments[0] should be String';
        }

        this.date = {
            year : '',
            month: '',
            day  : '',
            toString() {
                let year  = isEmpty(this.year) ? '' : this.year;
                let month = (isEmpty(year) || isEmpty(this.month))
                    ? ''
                    : `-${this.month}`;
                let day   = (isEmpty(month) || isEmpty(this.day))
                    ? ''
                    : `-${this.day}`;
                return `${year}${month}${day}`;
            },
        };

        this.time = {
            hour  : '',
            minute: '',
            second: '',
            toString() {
                let hour   = isEmpty(this.hour) ? '' : this.hour;
                let minute = (isEmpty(hour) || isEmpty(this.minute))
                    ? ''
                    : `:${this.minute}`;
                let second = (isEmpty(minute) || isEmpty(this.second))
                    ? ''
                    : `:${this.second}`;
                return `${hour}${minute}${second}`;
            },
        };

        // 分离日期和时间
        let dateStr = inputDateStr.split(' ');

        // 日期和时间仅有一个
        if (dateStr.length === 1) {
            this._hasOne(dateStr);
        }

        // 日期时间都有
        if (dateStr.length === 2) {
            this._hasBoth(dateStr);
        }

        this._format();
    }

    _hasOne(dateStr) {
        dateStr = dateStr[0];
        // 仅为日期
        if (regExpStr.dateStr.test(dateStr)) {
            let date        = dateStr.split('-');
            this.date.year  = date[0];
            this.date.month = date[1];
            this.date.day   = date[2];
            // console.log('仅为日期#######################');
        }

        // 仅为时间
        if (regExpStr.timeStr.test(dateStr)) {
            let time         = dateStr.split(':');
            // 添加 0 前缀
            this.time.hour   = time[0];
            this.time.minute = time[1];
            this.time.second = time[2];
            // console.log('仅为时间#######################');
        }

        // 仅为月份
        if (dateStr.length === 4) {
            this.date.year = dateStr;
            // console.log('仅为月份#######################');
        }

        // 仅为小时
        if (dateStr.length === 2) {
            this.time.hour = dateStr;
            // console.log('仅为小时#######################');
        }

    }

    _hasBoth(dateStr) {
        // console.log('日期时间都有#######################');
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

    _format() {
        // 添加 0 前缀
        this.date.year   = filters.prefix_0(this.date.year, 4);
        this.date.month  = filters.prefix_0(this.date.month, 2);
        this.date.day    = filters.prefix_0(this.date.day, 2);
        this.time.hour   = filters.prefix_0(this.time.hour, 2);
        this.time.minute = filters.prefix_0(this.time.minute, 2);
        this.time.second = filters.prefix_0(this.time.second, 2);
    }
}

module.exports = SimpleDate;