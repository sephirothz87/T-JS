// 几个运行题


console.log('===============================Q1===============================');

function f1() {
    var a = b = 10;
}

// console.log(a);//
// console.log(b);//
f1();
// console.log(a);//
// console.log(b);//


// 答案
// // console.log(a);//报错
// // console.log(b);//报错
// f1();
// // console.log(a);//报错
// console.log(b);//10

// b = 10;  b是全局
// var a = b;  a是局部


console.log('===============================Q2===============================');
// console.log(a3);
// console.log(a2);
var a2 = 10;

function f2() {
    console.log(a2);
    var a2 = 20;
}

f2();


// 答案
// 报错
// undefined
// undefined
// 局部变量的声明会提前解析，类似函数声明但不完全一样    打印外部a2的同理