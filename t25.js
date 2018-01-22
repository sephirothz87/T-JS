// 5.6  基本包装类型


console.log('===============================例子1===============================');
// var s = 'abc';
// var s = true;
var s = 5;
s.x = 'bcd';


console.log(s);//abc    true    5
console.log(s.x);//undefined
//三大基本类型不可以扩展

// var a = [1,2,3,4];
var a = function () {
    return 0;
};
a.x = 'bcd';

console.log(a);//(4) [1, 2, 3, 4, x: "bcd"]     ƒ (){return 0;}
console.log(a.x);//bcd
//数组函数就可以了

//更简单的理解，栈内存值引用就是不可扩展，堆内存指针引用就可以扩展


console.log('===============================例子2===============================');

var s_2 = new String('abc');
// var s_2 = new Boolean(true);
// var s_2 = new Number(10);
s_2.x = 'bcd';

console.log(s_2);//String {"abc", x: "bcd"}
console.log(typeof s_2);//object
console.log(s_2 instanceof String);//true
console.log(s_2 instanceof Object);//true

var s_3 = new String('abc');
// var s_3 = new Boolean(true);
// var s_3 = new Number(10);
var s_4 = String(s_3);

console.log(s_4);
console.log(typeof s_4);//string
console.log(s_4 instanceof String);//false
console.log(s_4 instanceof Object);//false

//Number和Boolean同理，就不再一一列举了
//这种new出来的叫做包装类型


console.log('===============================Number===============================');

var num = 10;
console.log(num.toFixed(2));//10.00

var num_2 = 10.005;
console.log(num_2.toFixed(2));//10.01

var num_3 = 100;
console.log(num_3.toExponential(1));//1.0e+2
console.log(num_3.toExponential(2));//1.00e+2

var num_4 = 99;
console.log(num_4.toPrecision(1)); //"1e+2"
console.log(num_4.toPrecision(2)); //"99"
console.log(num_4.toPrecision(3)); //"99.0"
//有效数字？

console.log('===============================String===============================');
var stringValue = "hello world";
console.log(stringValue.length);
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
console.log(stringValue[1]);


console.log('=============================concat=============================');

var str_1 = 'hello ';
console.log(str_1.concat('world'));
console.log(str_1.concat('world', '!'));
console.log(str_1);


console.log('=============================截取=============================');
var str_2 = 'hello world';
console.log(str_2.slice(3));//lo world
console.log(str_2.substring(3));//lo world
console.log(str_2.substr(3));//lo world
console.log(str_2.slice(3, 7));//lo w
console.log(str_2.substring(3, 7));//lo w
console.log(str_2.substr(3, 7));//lo worl    前面的是到第n位，这个方法是取n位

console.log(str_2.slice(-3)); //"rld"
console.log(str_2.substring(-3)); //"hello world"
console.log(str_2.substr(-3)); //"rld"
console.log(str_2.slice(3, -4)); //"lo w"
console.log(str_2.substring(3, -4)); //"hel"
console.log(str_2.substr(3, -4)); //""（空字符串）

console.log(str_2);//hello world
//全都不改变原字符串


//indexOf和lastIndexOf和数组一样
console.log('=============================trim=============================');
var str_3 = '     hello worlD          ';

console.log(str_3.trim());//hello worlD
console.log(str_3);//     hello worlD

console.log(str_3.toLocaleUpperCase());//     HELLO WORLD
console.log(str_3.toUpperCase());//     HELLO WORLD
console.log(str_3.toLocaleLowerCase());//     hello world
console.log(str_3.toLowerCase());//     hello world


console.log('=============================字符串调reg=============================');
var text = "cat, bat, sat, fat";
var pattern = /.at/;
//与pattern.exec(text)相同
var matches = text.match(pattern);
console.log(matches.index); //0
console.log(matches[0]); //"cat"
console.log(pattern.lastIndex); //0

console.log(text.search(/at/));//1  第一次出现的位置


console.log('=============================替换=============================');
console.log(text.replace('at', 'ond'));//cond, bat, sat, fat
//没用正则，只替换第一个

console.log(text.replace(/at/, 'ond'));//cond, bat, sat, fat
//用了正则，没用全局模式，还是只查找并替换第一个

console.log(text.replace(/at/g, 'ond'));//cond, bond, sond, fond

console.log(text.replace(/(.at)/g, 'word ($1)'));//word (cat), word (bat), word (sat), word (fat)
//参数替换


function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function (match, pos, originalText) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;


console.log('=============================split=============================');
var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(","); //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2); //["red", "blue"]
var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]

console.log((colors1));//(4) ["red", "blue", "green", "yellow"]
console.log((colors2));//(2) ["red", "blue"]
console.log((colors3));//(5) ["", ",", ",", ",", ""]


console.log('=============================localeCompare()=============================');
var stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); //1
console.log(stringValue.localeCompare("yello")); //1
console.log(stringValue.localeCompare("yellow")); //0
console.log(stringValue.localeCompare("yellowa")); //-1
console.log(stringValue.localeCompare("zoo")); //-1
console.log(stringValue.localeCompare("Zoo")); //-1     //可以理解为这样写简化了需要先全转小写再比较的方式


console.log('=============================localeCompare()=============================');
console.log(String.fromCharCode(104, 101, 108, 108, 111));  //hello