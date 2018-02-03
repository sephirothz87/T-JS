console.log('=============================let=============================');
console.log('================初识let================'); {
    let a = 10;
    var b = 1;
}

// console.log(a);//报错     Uncaught ReferenceError: a is not defined
console.log(b); //1

for (let i = 0; i < 4; i++) {;
}
// console.log(i);//报错     Uncaught ReferenceError: a is not defined


console.log('================在循环体中理解================');
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); //10

// 改成这样
var a2 = [];
for (let i = 0; i < 10; i++) {
    a2[i] = function() {
        console.log(i);
    };
}
a2[6](); //6


//还需要注意的是，for语句中条件和主体是在两个块里，所以如果
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
//abc
//abc
//abc

// 循环可以正确走3次
// 打印也可以打印出对应作用域内的i


console.log('================不存在变量提升================');
console.log(val1); //undefined
var val1 = 10;
// console.log(val2);//报错  ReferenceError: val2 is not defined
let val2 = 100;


console.log('================暂时性死区================');
var val3 = 123;

// if(true){
//     console.log(val3);//报错  ReferenceError: val3 is not defined
//     let val3 = 456;
// }

if (true) {
    console.log(val3); //123
    var val3 = 456;
}

// 联系上个例子，也就是即使全局定义了变量，也优先在块级作用域查找
// 查找到了，但是没定义，就不去作用域链上再查找了，直接报错
// 没查到，再回到作用域链上去差

// 甚至曾经百分百安全的typeof也不行了
// console.log(typeof val4);//ReferenceError: val4 is not defined
console.log(typeof val_undefined); //undefined
let val4 = 100;

function f1(x = y, y = 2) {
    return [x, y];
}

// console.log(f1());//报错  ReferenceError: y is not defined
//也就是说函数声明中的变量默认就是let？

function f2(x = 2, y = x) {
    return [x, y];
}

console.log(f2()); //[2,2]


var val5 = val5; //不报错
// let val6 = val6;//报错    ReferenceError: val6 is not defined

// 总之别写这种会导致变量提升的代码就好，看到的话要知道是什么问题


console.log('================不允许重复声明================');

// if(true){
//     let val7 = 10;//报错  Identifier 'val7' has already been declared
//     var val7 = 1;
// }

// if(true){
//     let val8 = 10;//报错  Identifier 'val7' has already been declared
//     let val8 = 1;
// }

// if(true){
//     var val9 = 10;//报错  Identifier 'val7' has already been declared
//     let val9 = 1;
// }


console.log('=============================块级作用域=============================');
console.log('================为什么要用块级作用域================');

//解决变量提升的问题
var val10 = new Date();

function f3() {
    console.log(val10);
    if (false) {
        var val10 = 'hello val10';
    }
}

f3(); //undefined

//防止局部变量泄露到全局
var s1 = 'hello';

for (var i = 0; i < s1.length; i++) {;
}

console.log(i); //5


//ES允许随意定义代码块，并且let都能限定住代码块的位置
{
    {
        {
            {
                let val11 = 'hello';
            }
            // console.log(val11);//ReferenceError: val11 is not defined
        }
    }
}


//某些场景不在需要IIFE了，类似上面的循环定义函数
//或者下面这个例子
(function() {
    var val12 = '';;
}());

//这样写就好了
{
    let val13 = '';;
}


console.log('================块级作用域与函数声明================');
//ES5中这样的写法是非法的，能运行只是浏览器兼容了这种写法所以才没有报错
if (true) {
    function f3() {
        console.log('f3');
    }
}
f3(); //f3

//ES6中，块级作用域的函数声明类似let

function f4() {
    console.log('out f4');
}

(function() {
    if (true) {
        function f4() {
            console.log('in f4');
        }

        f4(); //in f4
    }
    f4(); //in f4
}());
f4(); //out f4
//和变量提升同理

function f5() {
    console.log('out f5');
}

{
    if (true) {
        function f5() {
            console.log('in f5');
        }
        f5(); //in f5
    }
    f5(); //in f5
}
f5(); //in f5
//各个浏览器的表现可能不同，因为这里ES6没有强制规定，交给浏览器自己理解了

//如果用了if(false),则直接因为没有内部声明f5的调用而报错了
//f4/5 is not a function


function f6() {
    console.log('out f6');
}

{
    if (false) {
        function f6() {
            console.log('in f6');
        }
        f6();
    }
    f6(); //out f6
}
f6(); //out f6


console.log('=============================const命令=============================');
console.log('================基本用法================');

//定义常量
const con1 = 'hello';
console.log(con1); //hello

// con1 = 'hel';//Assignment to constant variable.

//不可以只声明不赋值
// const con2;//Missing initializer in const declaration

//const同样限定了块级作用域
if (true) {
    const con3 = 'hello';
}

// console.log(con3);//con3 is not defined

// 因此同样存在变量不提升和死区问题
// if(true){
//     console.log(con4);//ReferenceError: con4 is not defined
//     const con4 = 'hello';
// }

//同样不能重复声明

const con5 = 'hello';

// var con5 = 'h';//Identifier 'con5' has already been declared
// let con5 = 'h';//Identifier 'con5' has already been declared
// const con5 = 'h';//Identifier 'con5' has already been declared


console.log('================本质================');
//本质是保持栈内存指针不变，比如保存一个对象时

const con6 = {};

con6.prop1 = 'a'; //可以进行堆内存修改
console.log(con6); //{prop1: "a"}

// con6 = {};//TypeError: Assignment to constant variable.
//不能修改栈内存的指向

// ES5中，变量的声明只有var和function两种方法
// 到了ES6增加了4种，除了刚刚理解的let和const，后面还有import和class
// 一共6种


console.log('=============================顶层对象属性=============================');
//ES5中浏览器是window，Nodejs是global

window.val14 = 1;
console.log(val14); //1

val14 = 2;
console.log(window.val14); //2

// 在ES6中
let val15 = 3;
console.log(window.val15); //undefined

//即，顶层用let声明的变量不再直接应用到window或global