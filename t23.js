// 5.4  RegExp



console.log('===============================例子1===============================');
var re = null,
    i;
for (i=0; i < 10; i++){
    re = /cat/g;
    console.log(re.test("catastrophe"));
}
for (i=0; i < 10; i++){
    re = new RegExp("cat", "g");
    // re.test("catastrophe");
    console.log(re.test("catastrophe"));
}

//按照书上讲的，第一个例子会打印1个true，9个false
//老版本的ES在test一次后就从下一个起始点开始

//实际上第一个例子中已经不会这样了，ES5中做出了修改，每次都为字符串创建新的正则对象


//  /g全局模式，不写全局模式，匹配到1个结果立即返回，不会查询完整个字符串
//  /i大小写忽略模式
//  /m多行模式
//  3种模式可以混用


console.log('===============================exec===============================');
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);

console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); // " and baby"


console.log('=============================/g=============================');
var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0

matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern1.lastIndex); //0

var pattern2 = /.at/g;

var matches = pattern2.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat
console.log(pattern2.lastIndex); //3

matches = pattern2.exec(text);
console.log(matches.index); //5
console.log(matches[0]); //bat
console.log(pattern2.lastIndex); //8
//全局模式，1个1个找


console.log('===============================test===============================');
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
    console.log("The pattern was matched.");
}

log4(pattern);
// /\d{3}-\d{2}-\d{4}/
// t23.js:80 valueOf() /\d{3}-\d{2}-\d{4}/  regexp本身，不是字符串
// t23.js:81 toString() '/\d{3}-\d{2}-\d{4}/'
// t23.js:82 toLocalString() '/\d{3}-\d{2}-\d{4}/'


console.log('===============================构造函数属性===============================');
var text = "this has been a short summer";
var pattern = /(.)hort/g;
/*
* 注意：Opera 不支持input、lastMatch、lastParen 和multiline 属性
* Internet Explorer 不支持multiline 属性
*/
if (pattern.test(text)){
    console.log(RegExp.input); // this has been a short summer
    console.log(RegExp.leftContext); // this has been a     后面有个空格
    console.log(RegExp.rightContext); //  summer    前面有个空格
    console.log(RegExp.lastMatch); // short
    console.log(RegExp.lastParen); // s
    console.log(RegExp.multiline); // undefined
    //chrome不支持，所以这里不是false而是undefined？

    //简写
    console.log(RegExp.$_); // this has been a short summer
    console.log(RegExp["$`"]); // this has been a
    console.log(RegExp["$'"]); // summer
    console.log(RegExp["$&"]); // short
    console.log(RegExp["$+"]); // s
    console.log(RegExp["$*"]); // undefined
}

var text = "this has been a short summer";

var pattern = /(..)or(.)/g;
if (pattern.test(text)){
    console.log(RegExp.$1);//sh
    console.log(RegExp.$2);//t
}






