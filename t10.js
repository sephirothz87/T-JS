function Person() {
    this.say = (x)=>{console.log('person say ' + x)};
    this.dosth = (x)=>{console.log('person do ' + x)};
    this.doo = function(x){console.log('doo ' + x)};
};

// 这样写也OK，但比较麻烦
// Person.prototype.p_say = (x)=>{console.log('person p_say ' + x)};
// Person.prototype.p_dosth = (x)=>{console.log('person p_do ' + x)};

Person.prototype = {
    p_say : (x)=>{console.log('person p_say ' + x)},
    p_dosth : (x)=>{console.log('person p_do ' + x)}
}

function Student() {
    this.say = (x)=>{console.log('student say ' + x)};
    this.study = (x)=>{console.log('student study ' + x)};
};

Student.prototype.p_say = (x)=>{console.log('student p_say ' + x)};
Student.prototype.p_study = (x)=>{console.log('student p_study ' + x)};

var p = new Person();

Student.prototype = p;//这里

var s = new Student();




p.say('hello');//person say hello
p.dosth('work');//person do work

// console.log(p.say);//(x)=>{console.log('person say ' + x)}
// console.log(Person.say);//undefined
// Person.doo('x');//报错

//p.say YYY stop


p.p_say('hello');//person p_say hello
p.p_dosth('work');//person p_do work

//p.p_say XXX
//p.__proto__.p_say === Person.prototype.p_say YYY stop

console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__.p_say === Person.prototype.p_say);//true



s.say('hello');//student say hello
s.dosth('work');//person do work
s.study('math');//student study math

//s.say YYY stop

//s.dosth XXX
//s.__proto__.dosth === Student.prototype.dosth === p.dosth YYY stop



s.p_say('hello');//person p_say hello
s.p_dosth('work');//person p_do work
// s.p_say XXX
// s.__proto__.p_say === Student.prototype.p_say === p.p_say XXX
// s.__proto__.__proto__.p_say === Student.prototype.__proto__.p_say === p.__proto__.p_say === Person.prototype.p_say YYY stop

console.log(s.__proto__.__proto__ === Person.prototype);//true
console.log(s.__proto__.__proto__.p_say === Person.prototype.p_say);//true


// s.p_study('math'); //报错
// 第一次查找
// s.p_study XXX
// 第二次查找
// s.__proto__.p_study === Student.prototype.p_study === p.p_study XXX
// 第三次查找
// s.__proto__.__proto__.p_study === Student.prototype.__proto__.p_study === p.__proto__.p_study === Person.prototype.p_study XXX
// 第四次查找
// s.__proto__.__proto__.__proto__.p_study === Student.prototype.__proto__.__proto__.p_study === p.__proto__.__proto__.p_study === Person.prototype.__proto__.p_study
// === Object.prototype.p_study   XXX

console.log(s.__proto__.__proto__.__proto__ === Object.prototype);//true
console.log(s.__proto__.__proto__.__proto__ === null);//false

// 第五次查找
//     s.__proto__.__proto__.__proto__.__proto__.p_study
// === Student.prototype.__proto__.__proto__.__proto__.p_study
// === p.__proto__.__proto__.__proto__.p_study
// === Person.prototype.__proto__.__proto__.p_study
// === Object.prototype.__proto__.p_study   null  stop

console.log(s.__proto__.__proto__.__proto__.__proto__ === Object.prototype.__proto__);//true
console.log(s.__proto__.__proto__.__proto__.__proto__ === null);//true


console.log(s);
console.log(p);
console.log(Student);
console.log(Person);


console.log(p.__proto__ === Person.prototype);//true
console.log(Person.__proto__ === Function.prototype);//true
console.log(Person.__proto__.__proto__ === Object.prototype);//true

console.log(s.__proto__ === Student.prototype);//true
console.log(Student.prototype === p);//true


console.log(Student.__proto__ === Function.prototype);//true
console.log(Student.__proto__.__proto__ === Object.prototype);//true

