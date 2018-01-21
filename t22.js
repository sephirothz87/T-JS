// 5.3  Date


console.log('===============================自动识别日期格式===============================');
//自动识别日期格式
var someDate = new Date(Date.parse('May 25, 2004'))
console.log(someDate);//Tue May 25 2004 00:00:00 GMT+0800

var someDate = new Date('May 25, 2004');
console.log(someDate);//Tue May 25 2004 00:00:00 GMT+0800

var someDate = new Date('2004/05/25');
console.log(someDate);//Tue May 25 2004 00:00:00 GMT+0800

var someDate = new Date('20040525');
console.log(someDate);//invalid

var someDate = new Date('2004-05-25');
console.log(someDate);//Tue May 25 2004 00:00:00 GMT+0800

var someDate = new Date('2004 05 25');
console.log(someDate);//Tue May 25 2004 00:00:00 GMT+0800

var someDate = new Date('2004 05');
console.log(someDate);//Sat May 01 2004 00:00:00 GMT+0800


var someDate = new Date('2004-05-25 11:12:13');
console.log(someDate);//Tue May 25 2004 11:12:13 GMT+0800
console.log(someDate.getTime());//1085454733000

var someDate = new Date('2004-05-25 11:12:13:123');
console.log(someDate);//Tue May 25 2004 11:12:13 GMT+0800
console.log(someDate.getTime());//1085454733123
console.log(someDate.toString());//Tue May 25 2004 11:12:13 GMT+0800

console.log('=============================UTC方式=============================');
// GMT 时间2000 年1 月1 日午夜零时
var y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);//Sat Jan 01 2000 08:00:00 GMT+0800
// GMT 时间2005 年5 月5 日下午5:55:55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(allFives);//Fri May 06 2005 01:55:55 GMT+0800

// 本地时间2000 年1 月1 日午夜零时
var y2k = new Date(2000, 0);
console.log(y2k);//Sat Jan 01 2000 08:00:00 GMT+0800
// 本地时间2005 年5 月5 日下午5:55:55
var allFives = new Date(2005, 4, 5, 17, 55, 55);
console.log(allFives);//Fri May 06 2005 01:55:55 GMT+0800

console.log('=============================now()=============================');

var someDate = Date.now();
console.log(someDate);//1516514964101
console.log(typeof someDate);//number   //这里注意可能存在的坑

var someDate = new Date(Date.now());
console.log(someDate);//Sun Jan 21 2018 14:10:42 GMT+0800
console.log(typeof someDate);//object

console.log(someDate.valueOf());//1516515151246
console.log(someDate.toString());//Sun Jan 21 2018 14:12:31 GMT+0800
console.log(someDate.toLocaleString());//2018/1/21 下午2:12:31
//这里可以看出chrome在控制台打印Date类型时打印的是toString
//猜想出于Date的valueOf是数字，不直观的考虑

someDate.valueOf = () => {
    return 'v o';
};
someDate.toString = () => {
    return 't s';
};
someDate.toLocaleString = () => {
    return 't l s';
};

console.log(someDate);//t s
console.log(someDate.valueOf());//v o
console.log(someDate.toString());//t s
console.log(someDate.toLocaleString());//t l s
//证据