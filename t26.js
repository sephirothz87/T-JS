// 5.7  单体内置对象


console.log('===============================Global===============================');
var uri = "http://www.wrox.com/illegal value.htm#start";
console.log(encodeURI(uri));
//"http://www.wrox.com/illegal%20value.htm#start"
console.log(encodeURIComponent(uri));
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"

console.log(decodeURIComponent(encodeURIComponent(uri)));
//http://www.wrox.com/illegal value.htm#start


console.log('===============================eval===============================');
eval("function sayHi() { console.log('hi'); }");
sayHi(); //hi

eval('sayHi()'); //hi
//即把字符串解析为js代码


console.log('===============================Math===============================');
console.log(Math.ceil(25.9)); //26
console.log(Math.ceil(25.5)); //26
console.log(Math.ceil(25.1)); //26
console.log(Math.round(25.9)); //26
console.log(Math.round(25.5)); //26
console.log(Math.round(25.1)); //25
console.log(Math.floor(25.9)); //25
console.log(Math.floor(25.5)); //25
console.log(Math.floor(25.1)); //25

console.log('=============================random=============================');

function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
var color = colors[selectFrom(0, colors.length - 1)];
console.log(color); // 可能是数组中包含的任何一个字符串