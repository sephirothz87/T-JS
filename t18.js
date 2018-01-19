// 3.7	函数


//理解参数
console.log('===============================理解参数===============================');

function sayHi(name, message) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log('hi, ' + name + ', ' + message);
}

sayHi('zzc', 'web', '3');
//zzc
//web
//3
//hi, zzc, web

//实现缺省
console.log('===============================实现缺省===============================');

// function doAdd(num1, num2) {
//     if (arguments.length == 1) {
//         console.log(num1 + 10);
//     } else if (arguments.length == 2) {
//         console.log(arguments[0] + num2);
//     }
// }

// doAdd(10); //20
// doAdd(10, 20); //30

//错误示范，理解值传递
function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(arguments[0] + num2);
}

doAdd(10); //NaN	10 + undefined = NaN
doAdd(10, 20); //20		10 + 10 = 20

console.log('===============================没有重载===============================');

function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}
console.log(addSomeNumber(100)); //300