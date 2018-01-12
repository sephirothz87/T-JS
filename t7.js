// 1.instanceof的普通的用法，
// obj instanceof Object 
// 检测Object.prototype是否存在于参数obj的原型链上。
// function Person(){};
// var p =new Person();
// console.log(p instanceof Person);//true


// 2.继承中判断实例是否属于它的父类
// function Person(){};
// function Student(){};
// var p =new Person();
// Student.prototype=p;//继承原型
// var s=new Student();
// console.log(s instanceof Student);//true
// console.log(s instanceof Person);//true
// //Student和Person都在s的原型链中


// 3.复杂用法
function Person() {}
console.log(Object instanceof Object);     //true
//第一个Object的原型链：Object=>
//Object.__proto__ => Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Object的原型：Object=> Object.prototype

console.log(Function instanceof Function); //true
//第一个Function的原型链：Function=>Function.__proto__ => Function.prototype
//第二个Function的原型：Function=>Function.prototype

console.log(Function instanceof Object);   //true
//Function=>
//Function.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//Object => Object.prototype

console.log(Person instanceof Function);      //true
//Person=>Person.__proto__=>Function.prototype
//Function=>Function.prototype

console.log(String instanceof String);   //false
//第一个String的原型链：String=>
//String.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个String的原型链：String=>String.prototype

console.log(Boolean instanceof Boolean); //false
//第一个Boolean的原型链：Boolean=>
//Boolean.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Boolean的原型链：Boolean=>Boolean.prototype

console.log(Person instanceof Person); //false
//第一个Person的原型链：Person=>
//Person.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Person的原型链：Person=>Person.prototype


// 自己的理解，instanceof方法就是一级一级的用__proto__去找是否等于
// 后者的prototype，一直找到Object.prototype，如果没有相等的情况，则返回false
// 一旦某一次相等，立刻返回true