// 5.5  Function


console.log('===============================例子1===============================');
var sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐，但要知道
console.log(sum(1, 2));//3


console.log('===============================堆内存===============================');
//先看对象
console.log('=============================对象=============================');
var obj_1 = {a: 'a', b: 'b'};
var obj_2 = obj_1;

console.log(obj_1);//{a: "a", b: "b"}
console.log(obj_2);//{a: "a", b: "b"}

obj_1.a = 'aa';

console.log(obj_1);//{a: "aa", b: "b"}
console.log(obj_2);//{a: "aa", b: "b"}

obj_1 = null;

console.log(obj_1);//null
console.log(obj_2);//{a: "aa", b: "b"}

//再看函数
console.log('=============================函数=============================');
var func_1 = (x, y) => {
    return x + y;
};
var func_2 = func_1;

console.log(func_1(3, 2));//5
console.log(func_2(3, 2));//5

var func_1 = (x, y) => {
    return x * y;
};
console.log(func_1(3, 2));//6
console.log(func_2(3, 2));//5    **注意这里和对象不同，因为func_1的修改是在堆内存新起一个对象然后修改指针

func_1 = null;
// func_1 = 5;//一样

// console.log(func_1(3,2));//报错    func_1已经不再是函数了
console.log(func_2(3, 2));//5


//再次理解JS的函数没有重载
//1.语法松散致使函数的参数不限定类型，无法根据类型实现重载
//2.参数个数是动态的，无法根据参数数目实现重载


console.log('===============================函数声明和函数表达式===============================');

console.log(func_3(2, 3));//5
function func_3(x, y) {
    return x + y;
}//这是一个函数声明，会因变量提升而被提前解析

// console.log(func_4(2,3));//报错
func_4 = function (x, y) {
    return x + y;
};//这是一个函数表达式
console.log(func_4(2, 3));//报错

// console.log(func_5(2,3));//5
func_5 = (x, y) => {
    return x + y;
};//同理
console.log(func_5(2, 3));//5


console.log(func_3);//ƒ func_3(x,y){return x+y;}
console.log(func_4);//ƒ (x,y){return x+y;}
console.log(func_5);//(x,y)=>{return x+y;}  *这里先标记一下，貌似没有被当做函数打印？typeof确实是function没问题的

// logAll(func_3);
// logAll(func_4);
// logAll(func_5);

// 只要函数表达式提前定义，基本和函数声明没有区别


console.log('===============================函数内部属性===============================');

//这里有一个理解，this就是个函数级的东西？
console.log('=============================callee=============================');

function func_6() {
    console.log(arguments);
}

func_6();//可以看到有个cellee的属性

function factorial1(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial1(num - 1)
    }
}

function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1)
    }
}

//两种方法是一样的，递归函数求阶乘，用arguments.callee可以实现解耦

//例如这样做
var factorial3 = factorial1;

factorial1 = function (num) {
    return 0;
};

console.log(factorial3(5));//0  因为1内部的factorial1递归变成了return 0
console.log(factorial1(5));//0

var factorial4 = factorial2;

factorial2 = function (num) {
    return 0;
};

console.log(factorial4(5));//120    2内部的arguments.callee还会调用4，不会跑到修改后的2去
console.log(factorial1(5));//0


console.log('=============================再谈this=============================');


//一个比之前所有瞎试都好的例子
//书还是比博客靠谱

var color = "red";

function sayColor1() {
    console.log(this.color);
}

sayColor2 = function () {
    console.log(this.color);
};

sayColor3 = () => {
    console.log(this.color);
};

var o = {
    color: "blue",
    sayColor1: sayColor1,
    sayColor2: sayColor2,
    sayColor3: sayColor3,
    say: {
        sayColor4: sayColor3
    }
};

sayColor1(); //"red"
o.sayColor1(); //"blue"

sayColor2(); //"red"
o.sayColor2(); //"blue"     //函数声明和函数定义中，在哪个对象作用域内执行，this就是谁

sayColor3(); //"red"
o.sayColor3(); //"red"      //箭头函数定义在哪个对象域内，this就是谁，和调用无关
o.say.sayColor4(); //"red"  //箭头函数定义在哪个对象域内，this就是谁，和调用无关


console.log('=============================caller=============================');

//简单理解就是谁调用我了
function outer() {
    inner();
}

function inner() {
    console.log(inner.caller);
}

outer();//ƒ outer(){inner();}

//解决类似之前的解耦问题

function outer2() {
    inner();
}

function inner2() {
    console.log(arguments.callee.caller);
}

outer2();//ƒ outer(){inner();}

console.log('===============================函数属性/方法===============================');
console.log('=============================length=============================');

function sayName(name) {
    console.log(name);
}

function sum(num1, num2) {
    return num1 + num2;
}

function sayHi() {
    console.log("hi");
}

console.log(sayName.length); //1
console.log(sum.length); //2
console.log(sayHi.length); //0


console.log('=============================apply=============================');

//其实就是给之前this作用域的问题填坑

function sum2(num1, num2) {
    console.log(this);
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum2.apply(this, arguments); // 传入arguments 对象
}

function callSum2(num1, num2) {
    return sum2.apply(this, [num1, num2]); // 传入数组
}

console.log(sum2(10, 10));//window 20
console.log(callSum1(10, 10)); //window 20
console.log(callSum2(10, 10)); //window 20

obj_4 = {a: 'a', b: 'b'};

function callSum3(num1, num2) {
    return sum2.apply(callSum1, arguments); // 传入arguments 对象
}

function callSum4(num1, num2) {
    return sum2.apply(obj_4, [num1, num2]); // 传入数组
}

console.log(sum2(10, 10));//window 20
console.log(callSum3(10, 10)); //ƒ callSum1(num1, num2){...}     20
console.log(callSum4(10, 10)); //{a: "a", b: "b"}    20
//成功指定sum的this

console.log('=============================call=============================');
//call和apply的不同就是参数传递方式不同
console.log(sum2.call(this, 10, 20));//window 30
console.log(sum2.call(callSum1, 10, 20));//ƒ callSum1(num1, num2){...}     30
console.log(sum2.call(obj_4, 10, 20));//{a: "a", b: "b"}    30

console.log('=============================bind=============================');
console.log(sum2.bind(this)(10, 20));//window 30
console.log(sum2.bind(callSum1)(10, 20));//ƒ callSum1(num1, num2){...}     30
console.log(sum2.bind(obj_4)(10, 20));//{a: "a", b: "b"}     30

//更多的要这样用
var sum3 = sum2.bind(obj_4);
console.log(sum3(10, 20));//{a: "a", b: "b"}     30

























