//  第二十二章   高级技巧

//  21.1    高级函数


console.log('===============================安全的类型检测===============================');
value1 = 2;
value2 = [1, 2, 3];

//之前说过的，建议中这种方式检测
console.log(value1 instanceof Array); //false
console.log(value2 instanceof Array); //true

//一种更好的方式
console.log(Object.prototype.toString.call(value1)); //[object Number]
console.log(Object.prototype.toString.call(value2)); //[object Array]

//所以可以这样判断
console.log(Object.prototype.toString.call(value1) === '[object Array]'); //false
console.log(Object.prototype.toString.call(value2) === '[object Array]'); //true

//同理适用于Function、RegExp、JSON等


console.log('===============================作用域安全的构造函数===============================');

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

var person = new Person("Nicholas", 29, "Software Engineer");
//上面是没问题的
console.log(person.name); //Nicholas
console.log(person.age); //29
console.log(person.job); //Software Engineer
console.log(window.name); //
console.log(window.age); //undefined
console.log(window.job); //undefined

//但如果
// var person2 = Person("Nicholas", 29, "Software Engineer");
// // console.log(person2.name);//报错
// // console.log(person2.age);//报错
// // console.log(person2.job);//报错
// console.log(window.name);//Nicholas
// console.log(window.age);//29
// console.log(window.job);//Software Engineer

//安全的写法
function Person2(name, age, job) {
    if (this instanceof Person2) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person2(name, age, job);
    }
}

var person3 = Person2("Nicholas", 29, "Software Engineer");
console.log(person3.name); //Nicholas
console.log(person3.age); //29
console.log(person3.job); //Software Engineer
console.log(window.name); //
console.log(window.age); //undefined
console.log(window.job); //undefined

//但是，这里修改了this，当对象在其他对象的原型链上的时候，可能会有问题
//例如这个例子


function Polygon(sides) {
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function() {
            return 0;
        }
    } else {
        return new Polygon(sides);
    }
}

function Rectangle(width, height) {
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 10);
console.log(rect.sides); //undefined

// 分析
// 如果用了保护作用域的机制，那么Rectangle构造函数中的Polygoncall的this还没有在Polygon的原型链中
// 因此这里call的时候Polygon会返回一个新的Polygon对象，而不是为Rectangle提供原型
// PS:这种写法在以前的原型链章节里并没有过
// 所以rect中压根就没有sides这个属性

// 改成下面这样
function Polygon2(sides) {
    if (this instanceof Polygon2) {
        this.sides = sides;
        this.getArea = function() {
            return 0;
        }
    } else {
        return new Polygon2(sides);
    }
}

function Rectangle2(width, height) {
    Polygon2.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    }
}

Rectangle2.prototype = new Polygon2();

let rect2 = new Rectangle2(5, 10);
console.log(rect2.sides); //2

// Rectangle2在new的时候，因为原型指向了Polygon2
// 所以Polygon2中的instanceof可以进去


console.log('===============================惰性载入函数===============================');

//  类似这样的函数
// function xxx()={
//     if(xx){
//         do 1
//     }else if(xx){
//         do 2
//     }else{
//         do 3
//     }
// }

// 如果条件都是某种只执行1次就可以的判断，例如判断浏览器能力之类的，就没必要每次都执行一次判断
// 这时候可以用到惰性载入

// 这样修改
// var dosthxxx = (function xxx()={
//     if(xx){
//         dosth = function() {
//             dosth1;
//         }
//     }else if(xx){
//         dosth = function() {
//             dosth2;
//         }
//     }else{
//         dosth = function() {
//             dosth3;
//         }
//     }
//
//     return dosth
//     //或者dosth有返回值的时候，直接
//     return dosth()
// })();//让函数立即执行，之后全用dosthxxx来处理就可以了


console.log('===============================函数绑定===============================');
// 类似这样的对象
// 感觉就是防止this的作用域变换，让函数必须在自己的主体中执行
// var handler = {
//     message: "Event handled",
//     handleClick: function(x){
//         console.log(this.message);
//     }
// };
//
// var message = '123';
//
// handler.handleClick();//Event handled
//
// function f2(x){
//     handler.handleClick(x);
// }
//
// var x = {
//     message:'x message',
//     xxx:'xxx',
//     handlex:handler.handleClick
// };
//
// f2(x);//Event handled
//
// var handle2 = handler.handleClick;
// handle2(x);//123
//
// x.handlex(x);//xmessage

// 不对，完全不是我说的这回事
var handler = {
    message: "Event handled",
    handleClick: function(event) {
        console.log(this.message);
    }
};
// 假设这里是一个事件的回调
// 比如
// var btn = document.getElementById("my-btn");
// EventUtil.addHandler(btn, "click", handler.handleClick);

//由于这里回调的作用域在DOM节点，也就是btn，handleClick的this指向btn（IE8指向this）
//所以要修改成一个闭包
// EventUtil.addHandler(btn, "click", function(event){
//     handler.handleClick(event);
// });


//这样写看着会有点别扭，所以正常的用法是用bind函数来先提前限定好作用域
// function bind(fn, context) {
//     return function () {
//         return fn.apply(context, arguments);
//     };
// }

// 到页面里看吧，写的非常详细了


console.log('===============================函数柯里化===============================');

// 柯里化和函数绑定的本质是一样的

// 这里感觉书里说的不好

// 自己的理解
// 1.闭包本质是函数返回函数，效果上实现了函数内部变量的保留
// 2.函数绑定中涉及闭包，但目的是为了限定函数的作用域
// 3.柯里化是一种思想，即万物皆为函数的思想
// 三者在使用上经常混用，但出于目的的不同来区分还是出于概念上来区分是不一样的
// 但归根结底都是万物皆可为函数，函数的参数返回值都可以是函数这个思想


// 最简单的，这就算柯里化
function add(num1, num2) {
    return num1 + num2;
}

function curriedAdd(num2) {
    return add(5, num2);
}

console.log(add(2, 3)); //5
console.log(curriedAdd(3)); //8

//柯里化的标准模板
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}

let curriedAdd2 = curry(add, 5); //这样就更好理解柯里化的概念了
console.log(curriedAdd2(3)); //8