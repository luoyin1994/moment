var expect = require('chai').expect;

var utils = require('../build/utils/utils');
var moment = require('../build/moment');


describe('测试 ## js/utils/mixins/ ##', function() {
    it('测试 ## _typeof.js ##', function() {
        var _typeof = utils._typeof;
        expect(_typeof(undefined)).to.be.equal('undefined');
        expect(_typeof(null)).to.be.equal('null');
        expect(_typeof('123')).to.be.equal('string');
        expect(_typeof(123)).to.be.equal('number');
        expect(_typeof(true)).to.be.equal('boolean');
        expect(_typeof({})).to.be.equal('object');
        expect(_typeof([])).to.be.equal('array');
        expect(_typeof(function() {})).to.be.equal('function');
        expect(_typeof(new Date)).to.be.equal('date');
    });
    it('测试 ## getDateStr.js ##', function() {
        var getDateStr = utils.getDateStr;
        var time   = '2017-11-06 10:23:35';
        expect(getDateStr(new Date(time))).to.be.equal('2017-11-06 10:23:35');
    });
    it('测试 ## isEmpty.js ##', function() {
        var isEmpty = utils.isEmpty;
        expect(isEmpty('')).to.be.equal(true);
        expect(isEmpty(' ')).to.be.equal(true);
        expect(isEmpty('123')).to.be.equal(false);
        expect(isEmpty(123)).to.be.equal(false);
        expect(isEmpty(0)).to.be.equal(false);
        expect(isEmpty(undefined)).to.be.equal(true);
        expect(isEmpty(null)).to.be.equal(true);
        expect(isEmpty(false)).to.be.equal(false);
        expect(isEmpty(true)).to.be.equal(false);
        expect(isEmpty([])).to.be.equal(true);
        expect(isEmpty([1,2])).to.be.equal(false);
        expect(isEmpty({a:1})).to.be.equal(false);
        expect(isEmpty(function(){})).to.be.equal(false);
        expect(isEmpty(new Date())).to.be.equal(false);
    });
    it('测试 ## whetherValueTypeInTypesArray.js ##', function() {
        var whetherValueTypeInTypesArray = utils.whetherValueTypeInTypesArray;
        expect(whetherValueTypeInTypesArray(134, ['number', 'string'])).to.be.equal(true);
        expect(whetherValueTypeInTypesArray('', ['number', 'string'])).to.be.equal(true);
        expect(whetherValueTypeInTypesArray(undefined, ['number', 'string'])).to.be.equal(false);
        expect(whetherValueTypeInTypesArray(null, ['number', 'string'])).to.be.equal(false);
        expect(whetherValueTypeInTypesArray(undefined, ['undefined', 'string'])).to.be.equal(true);
        expect(whetherValueTypeInTypesArray(null, ['undefined', 'string'])).to.be.equal(false);
    });
});

describe('测试 ## js/utils/mixins/isType.js ##', function() {
    it('测试方法 ## isNumber ##', function() {
        expect(utils.isNumber(123)).to.be.equal(true);
        expect(utils.isNumber(0)).to.be.equal(true);
        expect(utils.isNumber(true)).to.be.equal(false);
        expect(utils.isNumber(false)).to.be.equal(false);
        expect(utils.isNumber(null)).to.be.equal(false);
        expect(utils.isNumber('')).to.be.equal(false);
        expect(utils.isNumber(' ')).to.be.equal(false);
        expect(utils.isNumber('123')).to.be.equal(false);
        expect(utils.isNumber(undefined)).to.be.equal(false);
        expect(utils.isNumber([])).to.be.equal(false);
        expect(utils.isNumber([1,2])).to.be.equal(false);
        expect(utils.isNumber({a:1})).to.be.equal(false);
        expect(utils.isNumber(function(){})).to.be.equal(false);
        expect(utils.isNumber(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isUndefined ##', function() {
        expect(utils.isUndefined(undefined)).to.be.equal(true);
        expect(utils.isUndefined(null)).to.be.equal(false);
        expect(utils.isUndefined('')).to.be.equal(false);
        expect(utils.isUndefined(' ')).to.be.equal(false);
        expect(utils.isUndefined('123')).to.be.equal(false);
        expect(utils.isUndefined(123)).to.be.equal(false);
        expect(utils.isUndefined(true)).to.be.equal(false);
        expect(utils.isUndefined(false)).to.be.equal(false);
        expect(utils.isUndefined(0)).to.be.equal(false);
        expect(utils.isUndefined([])).to.be.equal(false);
        expect(utils.isUndefined([1,2])).to.be.equal(false);
        expect(utils.isUndefined({a:1})).to.be.equal(false);
        expect(utils.isUndefined(function(){})).to.be.equal(false);
        expect(utils.isUndefined(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isString ##', function() {
        expect(utils.isString('')).to.be.equal(true);
        expect(utils.isString(' ')).to.be.equal(true);
        expect(utils.isString('123')).to.be.equal(true);
        expect(utils.isString(true)).to.be.equal(false);
        expect(utils.isString(false)).to.be.equal(false);
        expect(utils.isString(null)).to.be.equal(false);
        expect(utils.isString(123)).to.be.equal(false);
        expect(utils.isString(0)).to.be.equal(false);
        expect(utils.isString(undefined)).to.be.equal(false);
        expect(utils.isString([])).to.be.equal(false);
        expect(utils.isString([1,2])).to.be.equal(false);
        expect(utils.isString({a:1})).to.be.equal(false);
        expect(utils.isString(function(){})).to.be.equal(false);
        expect(utils.isString(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isNull ##', function() {
        expect(utils.isNull(null)).to.be.equal(true);
        expect(utils.isNull('')).to.be.equal(false);
        expect(utils.isNull(' ')).to.be.equal(false);
        expect(utils.isNull('123')).to.be.equal(false);
        expect(utils.isNull(true)).to.be.equal(false);
        expect(utils.isNull(false)).to.be.equal(false);
        expect(utils.isNull(123)).to.be.equal(false);
        expect(utils.isNull(0)).to.be.equal(false);
        expect(utils.isNull(undefined)).to.be.equal(false);
        expect(utils.isNull([])).to.be.equal(false);
        expect(utils.isNull([1,2])).to.be.equal(false);
        expect(utils.isNull({a:1})).to.be.equal(false);
        expect(utils.isNull(function(){})).to.be.equal(false);
        expect(utils.isNull(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isArray ##', function() {
        expect(utils.isArray([])).to.be.equal(true);
        expect(utils.isArray([1,2])).to.be.equal(true);
        expect(utils.isArray(null)).to.be.equal(false);
        expect(utils.isArray(true)).to.be.equal(false);
        expect(utils.isArray(false)).to.be.equal(false);
        expect(utils.isArray('')).to.be.equal(false);
        expect(utils.isArray(' ')).to.be.equal(false);
        expect(utils.isArray('123')).to.be.equal(false);
        expect(utils.isArray(123)).to.be.equal(false);
        expect(utils.isArray(0)).to.be.equal(false);
        expect(utils.isArray(undefined)).to.be.equal(false);
        expect(utils.isArray({a:1})).to.be.equal(false);
        expect(utils.isArray(function(){})).to.be.equal(false);
        expect(utils.isArray(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isObject ##', function() {
        expect(utils.isObject({a:1})).to.be.equal(true);
        expect(utils.isObject(null)).to.be.equal(false);
        expect(utils.isObject(true)).to.be.equal(false);
        expect(utils.isObject(false)).to.be.equal(false);
        expect(utils.isObject('')).to.be.equal(false);
        expect(utils.isObject(' ')).to.be.equal(false);
        expect(utils.isObject('123')).to.be.equal(false);
        expect(utils.isObject(123)).to.be.equal(false);
        expect(utils.isObject(0)).to.be.equal(false);
        expect(utils.isObject(undefined)).to.be.equal(false);
        expect(utils.isObject([])).to.be.equal(false);
        expect(utils.isObject([1,2])).to.be.equal(false);
        expect(utils.isObject(function(){})).to.be.equal(false);
        expect(utils.isObject(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isFunction ##', function() {
        expect(utils.isFunction(function(){})).to.be.equal(true);
        expect(utils.isFunction({a:1})).to.be.equal(false);
        expect(utils.isFunction(null)).to.be.equal(false);
        expect(utils.isFunction(true)).to.be.equal(false);
        expect(utils.isFunction(false)).to.be.equal(false);
        expect(utils.isFunction('')).to.be.equal(false);
        expect(utils.isFunction(' ')).to.be.equal(false);
        expect(utils.isFunction('123')).to.be.equal(false);
        expect(utils.isFunction(123)).to.be.equal(false);
        expect(utils.isFunction(0)).to.be.equal(false);
        expect(utils.isFunction(undefined)).to.be.equal(false);
        expect(utils.isFunction([])).to.be.equal(false);
        expect(utils.isFunction([1,2])).to.be.equal(false);
        expect(utils.isFunction(new Date())).to.be.equal(false);
    });

    it('测试方法 ## isDate ##', function() {
        expect(utils.isDate(new Date())).to.be.equal(true);
        expect(utils.isDate({a:1})).to.be.equal(false);
        expect(utils.isDate(null)).to.be.equal(false);
        expect(utils.isDate(true)).to.be.equal(false);
        expect(utils.isDate(false)).to.be.equal(false);
        expect(utils.isDate('')).to.be.equal(false);
        expect(utils.isDate(' ')).to.be.equal(false);
        expect(utils.isDate('123')).to.be.equal(false);
        expect(utils.isDate(123)).to.be.equal(false);
        expect(utils.isDate(0)).to.be.equal(false);
        expect(utils.isDate(undefined)).to.be.equal(false);
        expect(utils.isDate([])).to.be.equal(false);
        expect(utils.isDate([1,2])).to.be.equal(false);
        expect(utils.isDate(function(){})).to.be.equal(false);
    });

    it('测试方法 ## isBoolean ##', function() {
        expect(utils.isBoolean({a:1})).to.be.equal(false);
        expect(utils.isBoolean(null)).to.be.equal(false);
        expect(utils.isBoolean(true)).to.be.equal(true);
        expect(utils.isBoolean(false)).to.be.equal(true);
        expect(utils.isBoolean('')).to.be.equal(false);
        expect(utils.isBoolean(' ')).to.be.equal(false);
        expect(utils.isBoolean('123')).to.be.equal(false);
        expect(utils.isBoolean(123)).to.be.equal(false);
        expect(utils.isBoolean(0)).to.be.equal(false);
        expect(utils.isBoolean(undefined)).to.be.equal(false);
        expect(utils.isBoolean([])).to.be.equal(false);
        expect(utils.isBoolean([1,2])).to.be.equal(false);
        expect(utils.isBoolean(function(){})).to.be.equal(false);
        expect(utils.isBoolean(new Date())).to.be.equal(false);
    });
});

describe('测试 ## js/utils/mixins/filters.js ##', function() {
    var filters = utils.filters;
    it('测试方法 ## prefix_0 ##', function() {
        var prefix_0 = filters.prefix_0;
        expect(prefix_0('7', 4)).to.be.equal('0007');
        expect(prefix_0('07', 4)).to.be.equal('0007');
        expect(prefix_0('007', 4)).to.be.equal('0007');
        expect(prefix_0('0007', 4)).to.be.equal('0007');
        expect(prefix_0('2007', 4)).to.be.equal('2007');
        expect(prefix_0('20077', 4)).to.be.equal('20077');
        expect(prefix_0('3', 2)).to.be.equal('03');
        expect(prefix_0('03', 2)).to.be.equal('03');
        expect(prefix_0('33', 2)).to.be.equal('33');
    });
});

describe('测试 ## js/utils/regExp/ ##',function() {
    var regExpStr = utils.regExpStr;
    it('测试 ## typeStr.regExp.js ##', function() {
        expect(regExpStr.typeStr.exec('[object String]')[1]).to.be.equal('String');
        expect(regExpStr.typeStr.exec('[object Number]')[1]).to.be.equal('Number');
    });

    it('测试 ## allowedInputStringFormat.regExp.js ##', function() {
        expect(regExpStr.allowedInputStringFormat.test('YYYY-MM-DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('yyyy-mm-dd hh:mm:ss')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYYY-mm-DD HH:MM:ss')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YyYy-mM-Dd hH:mM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYYY/MM/DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyY/MM/dD HH:mM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYYY/MM-DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyY/Mm-DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyY.Mm-DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyY.Mm.DD HH:MM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyY.Mm.dD HH:mM:SS')).to.be.equal(true);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.Mm.dD HH:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.dd.dD HH:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.ddd.dD HH:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.mmm.dDd HH:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.mm.dDd HH:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.mm.dd HHh:mM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy.mm.dd Hh:mmM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy/mm/dd Hh:mmM:SS')).to.be.equal(false);
        expect(regExpStr.allowedInputStringFormat.test('YYyYy-mm-dd Hh:mmM:SS')).to.be.equal(false);
    });

    it('测试 ## dateStr.regExp.js ##', function() {
        expect(regExpStr.dateStr.test('2012.10.17')).to.be.equal(true);
        expect(regExpStr.dateStr.test('2012.10')).to.be.equal(true);
        expect(regExpStr.dateStr.test('2012/10/17')).to.be.equal(true);
        expect(regExpStr.dateStr.test('2012/10')).to.be.equal(true);
        expect(regExpStr.dateStr.test('2012-10-17')).to.be.equal(true);
        expect(regExpStr.dateStr.test('2012-10')).to.be.equal(true);
        expect(regExpStr.dateStr.test('201210')).to.be.equal(false);
        expect(regExpStr.dateStr.test('2012*10')).to.be.equal(false);
    });

    it('测试 ## timeStr.regExp.js ##', function() {
        expect(regExpStr.timeStr.test('12:56:33')).to.be.equal(true);
        expect(regExpStr.timeStr.test('12:56')).to.be.equal(true);
        expect(regExpStr.timeStr.test('12/56')).to.be.equal(false);
        expect(regExpStr.timeStr.test('12*56')).to.be.equal(false);
    });
});

describe('测试 ## js/moment.js ##',function() {
    it('测试 ## 传入 string 类型 ##', function() {
        var time   = '2017-11-06 10:23:35';
        expect(moment(time).format('')).to.be.equal('');
        expect(moment(time).format('YYYY')).to.be.equal('2017');
        expect(moment(time).format('YYYY-MM')).to.be.equal('2017-11');
        expect(moment(time).format('YYYY-MM-DD')).to.be.equal('2017-11-06');
        expect(moment(time).format('YYYY-MM-DD HH')).to.be.equal('2017-11-06 10');
        expect(moment(time).format('YYYY-MM-DD HH:MM')).to.be.equal('2017-11-06 10:23');
        expect(moment(time).format('YYYY-MM-DD HH:mm')).to.be.equal('2017-11-06 10:23');
        expect(moment(time).format('YYYY-MM-DD HH:MM:SS')).to.be.equal('2017-11-06 10:23:35');
        expect(moment(time).format('YYYY-MM-DD HH:mm:ss')).to.be.equal('2017-11-06 10:23:35');
        expect(moment(time).format('HH:MM:SS')).to.be.equal('10:23:35');
        expect(moment(time).format('hh:mm:ss')).to.be.equal('10:23:35');
        expect(moment(time).format('hh:mm')).to.be.equal('10:23');
        expect(moment(time).format('hh')).to.be.equal('10');
        expect(moment(time, 'YYYY-MM-DD HH:MM:SS').format()).to.be.equal('2017-11-06 10:23:35');
    });

    it('测试 ## 传入 date 类型 ##', function() {
        var time   = new Date('2017-11-06 10:23:35');
        expect(moment(time).format('')).to.be.equal('');
        expect(moment(time).format('YYYY')).to.be.equal('2017');
        expect(moment(time).format('YYYY-MM')).to.be.equal('2017-11');
        expect(moment(time).format('YYYY-MM-DD')).to.be.equal('2017-11-06');
        expect(moment(time).format('YYYY-MM-DD HH')).to.be.equal('2017-11-06 10');
        expect(moment(time).format('YYYY-MM-DD HH:MM')).to.be.equal('2017-11-06 10:23');
        expect(moment(time).format('YYYY-MM-DD HH:mm')).to.be.equal('2017-11-06 10:23');
        expect(moment(time).format('YYYY-MM-DD HH:MM:SS')).to.be.equal('2017-11-06 10:23:35');
        expect(moment(time).format('YYYY-MM-DD HH:mm:ss')).to.be.equal('2017-11-06 10:23:35');
        expect(moment(time).format('HH:MM:SS')).to.be.equal('10:23:35');
        expect(moment(time).format('hh:mm:ss')).to.be.equal('10:23:35');
        expect(moment(time).format('hh:mm')).to.be.equal('10:23');
        expect(moment(time).format('hh')).to.be.equal('10');
    });
});

describe('测试 ## main.js ##',function() {
    var moment = require('../main');
    var time   = '2017-11-06 10:23:35';
    var timeToYYYYMMDDHHmm = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
    };
    var timeToYYYYMMDD     = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    };
    it('测试 ## timeToYYYYMMDDHHmm 方法 ##', function() {
        expect(timeToYYYYMMDDHHmm(time)).to.be.equal('2017-11-06 10:23');
    });
    it('测试 ## timeToYYYYMMDD 方法 ##', function() {
        expect(timeToYYYYMMDD(time)).to.be.equal('2017-11-06');
    });
});