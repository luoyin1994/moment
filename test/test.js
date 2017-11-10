const expect = require('chai').expect;

const utils = require('../js/utils/utils');

describe('测试 ## js/prototype/ ##',function() {
    it('测试 ## isEmpty.prototype.js ##', function() {
        require('../js/prototype/isEmpty.prototype');
        expect(''.isEmpty()).to.be.equal(true);
        expect('   '.isEmpty()).to.be.equal(true);
        expect('123'.isEmpty()).to.be.equal(false);
    });
});

describe('测试 ## js/utils/mixins/ ##', function() {
    it('测试 ## _typeof.js ##', function() {
        const _typeof = utils._typeof;
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
        const getDateStr = utils.getDateStr;
        const time   = '2017-11-06 10:23:35';
        expect(getDateStr(new Date(time))).to.be.equal('2017-11-06 10:23:35');
    });
});


describe('测试 ## js/utils/mixins/filters.js ##', function() {
    let filters = utils.filters;
    it('测试方法 ## prefix_0 ##', function() {
        const prefix_0 = filters.prefix_0;
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
    it('测试 ## typeStr.regExp.js ##', function() {
        const typeStr = utils.regExpStr.typeStr;
        expect(typeStr.exec('[object String]')[1]).to.be.equal('String');
        expect(typeStr.exec('[object Number]')[1]).to.be.equal('Number');
    });
});

describe('测试 ## js/moment.js ##',function() {
    it('测试 ## js/moment.js ##', function() {
        const moment = require('../js/moment');
        const time   = '2017-11-06 10:23:35';
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
    const moment = require('../main');
    const time   = '2017-11-06 10:23:35';
    const timeToYYYYMMDDHHmm = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
    };
    const timeToYYYYMMDD     = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    };
    it('测试 ## timeToYYYYMMDDHHmm 方法 ##', function() {
        expect(timeToYYYYMMDDHHmm(time)).to.be.equal('2017-11-06 10:23');
    });
    it('测试 ## timeToYYYYMMDD 方法 ##', function() {
        expect(timeToYYYYMMDD(time)).to.be.equal('2017-11-06');
    });
});