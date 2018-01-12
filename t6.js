//Object和Function
// console.log(Object.__proto__ === Function.prototype);//true
// console.log(Function.__proto__ === Function.prototype);//true
// console.log(Function.prototype.__proto__ === Object.prototype);//true
// console.log(Object.__proto__.__proto__ === Object.prototype);//true


//JS对象
// var a = new Array([1,2,3]);
// console.log(a);


// console.log(a.__proto__ === Array.prototype);//true
// console.log(Array.prototype.__proto__ === Object.prototype);//true
// console.log(Array.__proto__ === Function.prototype);//true




//一般对象
// var o = new Object()

// console.log(o.__proto__ === Object.prototype);//true
// console.log(o.prototype);//undefined


//一般方法
// function F(){};

// var f = new F();
// console.log(f.__proto__ === F.prototype);//true
// console.log(F.__proto__ === Function.prototype);//true
// console.log(F.prototype.__proto__ === Object.prototype);//true


//方法继承
function Person(){};
function Student(){};


var p =new Person();

Student.prototype=p;//继承原型
var s=new Student();

console.log(s instanceof Student);//true
console.log(s instanceof Person);//true



// console.log(s);//Student{}
// console.log(p);//Person{}

// console.log(Student);//f Student(){}
// console.log(Person);//f Person(){}

// console.log(s.prototype);//undefined
// console.log(p.prototype);//undefined

// console.log(Student.prototype);//Person{}
// console.log(Person.prototype);//{constructor:f}

// console.log(s.__proto__);//Person{}
// console.log(p.__proto__);//{constructor:f}

// console.log(Student.__proto__);//f(){}
// console.log(Person.__proto__);//f(){}

console.log(s.__proto__ === Student.prototype);//true
console.log(s.__proto__ === p);//true
console.log(Student.prototype === p);//true


console.log(s.__proto__.__proto__ === Person.prototype);//true
console.log(s.__proto__.__proto__.__proto__ === Object.prototype);//true
