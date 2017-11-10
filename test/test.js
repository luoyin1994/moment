const utils = require('../js/utils/utils');
{
    // 测试 ## typeStr.regExp.js ##
    const typeStr = utils.regExpStr.typeStr;
    console.log('\n');
    console.log('测试 ## typeStr.regExp.js ## ');
    console.log(typeStr.exec('[object String]'));
    console.log(typeStr.exec('[object Number]'));
}
{
    // 测试 ## _typeof.js ##
    const _typeof = utils._typeof;
    console.log('\n');
    console.log('测试 ## _typeof.js ## ');
    console.log(_typeof(undefined));
    console.log(_typeof(null));
    console.log(_typeof('123'));
    console.log(_typeof(123));
    console.log(_typeof(true));
    console.log(_typeof({}));
    console.log(_typeof([]));
    console.log(_typeof(function() {}));
    console.log(_typeof(new Date));

}
{
    // 测试 ## isEmpty.prototype.js ##
    require('../js/prototype/isEmpty.prototype');
    console.log('\n');
    console.log('测试 ## isEmpty.prototype.js ## ');
    console.log('   '.isEmpty());
    console.log('123'.isEmpty());
    console.log(''.isEmpty());
}
{
    // 测试 ## moment.js ##
    let moment = require('../js/moment');
    let time   = '2017-11-06 10:23:35';
    console.log('\n');
    console.log('测试 ## moment.js ## ');
    console.log(moment(time).format(''));
    console.log(moment(time).format('YYYY'));
    console.log(moment(time).format('YYYY-MM'));
    console.log(moment(time).format('YYYY-MM-DD'));
    console.log(moment(time).format('YYYY-MM-DD HH'));
    console.log(moment(time).format('YYYY-MM-DD HH:mm'));
    console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'));
}
{
    // 测试 ## main.js ##
    let moment             = require('../main');
    let time               = '2017-11-06 10:23:35';
    let timeToYYYYMMDDHHmm = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
    };
    let timeToYYYYMMDD     = (time) => {
        return moment(time, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    };

    console.log('\n');
    console.log('测试 ## main.js ## ');
    console.log('\n');
    console.log('1. 测试 ## timeToYYYYMMDDHHmm 方法 ## ');
    console.log(timeToYYYYMMDDHHmm(time));
    console.log('\n');
    console.log('2. 测试 ## timeToYYYYMMDD 方法 ## ');
    console.log(timeToYYYYMMDD(time));
}