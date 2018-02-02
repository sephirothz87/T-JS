//  6.2 创建对象


console.log('===============================工厂模式===============================');

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
console.log(person1); //{name: "Nicholas", age: 29, job: "Software Engineer", sayName: ƒ}
console.log(person2); //{name: "Greg", age: 27, job: "Doctor", sayName: ƒ}


console.log('===============================构造函数模式===============================');

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
console.log(person1); //{name: "Nicholas", age: 29, job: "Software Engineer", sayName: ƒ}
console.log(person2); //{name: "Greg", age: 27, job: "Doctor", sayName: ƒ}

console.log(person1.constructor === Person); //true
console.log(person2.constructor === Person); //true

console.log(person1 instanceof Person); //true
console.log(person1 instanceof Object); //true

//今后把这种情况和函数声明要区别对待了,这种看做构造函数模式


console.log('==================老生常谈的this==================');

function tf1(x) {
    console.log(this);

    this.name = x;
    this.tf2 = function() {
        console.log(this);
        console.log(this.name);
    };
    this.tf2();
}

tf1('a'); //window   window  a
var obj1 = new tf1('b'); //tf1 {}    tf1 {name: "b", tf2: ƒ}     b
obj1.tf2(); //tf1 {name: "b", tf2: ƒ}    b

function tf3(x) {

    this.p1 = x;
    this.p2 = new tf1(x)

    this.f1 = tf1.tf2;
    this.f2 = function() {
        p2.tf2;
    };
    tf1(x);
}

var obj2 = new tf3('c');
//this.p2 = new tf1(x)  //tf1{}     tf1 {name: "c", tf2: ƒ}     c
//tf1(x);   //window  window  c
tf3('d');
//tf1{}     tf1 {name: "d", tf2: ƒ}     d
//window  window  d

console.log('==================一个小问题来引出原型模式==================');

console.log(person1.sayName == person2.sayName); //false
//即两个对象的sayName方法分别独立新建
//不是很有必要这样做


function Person2(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}

var person1 = new Person2("Nicholas", 29, "Software Engineer");
var person2 = new Person2("Greg", 27, "Doctor");

console.log(person1.sayName == person2.sayName); //true
//新的问题
//虽然sayName指向同一个函数了，但是这里要用到this，这种写法下在全局范围内做了一个方法，并且这个方法要访问this
//很容易搞出来作用域的问题
//并且这个方法要在全局定义，完全看不出封装到Person内的感觉，随便谁完全都可以调用这个函数
//原型模式登场


console.log('===============================原型模式===============================');


function Person3() {}

// Person3.prototype = {
//     'name': 'Nicholas',
//     'age': 29,
//     'job': 'SE',
//     sayName: function () {
//         console.log(this.name);
//     }
// };

Person3.prototype.name = 'Nicholas';
Person3.prototype.age = 29;
Person3.prototype.job = 'SE';
Person3.prototype.sayName = function() {
    console.log(this.name);
};

var person3 = new Person3();
person3.sayName();

var person4 = new Person3();
person4.sayName();

console.log(person3.sayName === person4.sayName); //true
//原型绑定在Person3的prototype上，即让两个函数相同，又限定了函数的范围


console.log('==================构造器==================');
console.log(Person3.prototype.constructor == Person3); //覆盖是false   修改是true
console.log(Person3.prototype.constructor === Person3.constructor); //false
console.log(Person3);
console.log(Person3.prototype); //{name: "Nicholas", age: 29, job: "SE", sayName: ƒ}
console.log(Person3.prototype.constructor); //覆盖是Object() { [native code] }      修改是ƒ Person3() {}
console.log(person3);
console.log(person3.__proto__ === Person3.prototype); //true
//这里跟书上讲的不一样呢？
//Person3的prototype的constructor，并不等于/指向Person3


//知道问题所在了，因为我没用书里的修改写法，而是用了覆盖的写法，这样构造函数被我覆盖了
//正好回顾了一个jquery源码里的知识点，用覆盖方式要强制把构造函数写成自己
//虽然这里不写并不影响person3和person4的新建

// 但是这样会有新的问题，constructor会变成可枚举的，最恰当的方式是！
// Object.defineProperty(Person.prototype, "constructor", {
//     enumerable: false,
//     value: Person
// });


console.log('==================isPrototypeOf==================');
//这里提到了一个原型链反查的方法,对应我之前常用的person3.__proto__ === Person3.prototype
console.log(Person3.prototype.isPrototypeOf(person3)); //true
console.log(Person3.prototype.isPrototypeOf(person4)); //true

console.log('==================getPrototypeOf==================');
//而我常用的.__proto__，其实是这个方法
console.log(Object.getPrototypeOf(person3) === person3.__proto__); //true
console.log(Object.getPrototypeOf(person3) === Person3.prototype); //true
console.log(Object.getPrototypeOf(person3).name); //Nicholas

console.log('==================hasOwnProperty==================');
person3.name = 'Greg';

console.log(person3.name); //Greg        先从自身得到
console.log(person4.name); //Nicholas    先从自身查找，没有再去找原型，再回顾一下

delete person3.name;
console.log(person3.name); //Nicholas    自身呗删除，查找原型

person3.name = 'Greg';

console.log(person3.hasOwnProperty('name')); //true
console.log(person4.hasOwnProperty('name')); //false 这里只查找自身属性，不会沿着原型链去找
delete person3.name;
console.log(person3.hasOwnProperty('name')); //false 自身没有name了
//因为自身属性和原型属性的访问方式都一样，所以可以用这个方法来区分


console.log('==================in==================');
person3.name = 'Greg';
console.log('name' in person3); //true
console.log('name' in person4); //true
console.log('aa' in person3); //false
//无论是自身属性还是原型链上的属性，in都会返回true


console.log('==================是否是原型属性==================');
//一个查询属性是在原型链还是在自身还是都不在的方法
//简单的说，一个查看是否只在原型中的属性
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(hasPrototypeProperty(person3, 'name')); //false
console.log(hasPrototypeProperty(person4, 'name')); //true

console.log('==================for in==================');
person3.aa = 'Greg';
for (var prop in person3) {
    console.log(prop); //name(注意只有1个)    aa    age     job     sayName
}
for (var prop in person4) {
    console.log(prop); //name    age     job     sayName
}
//只要在原型链上，只要可枚举，都可以遍历

console.log('==================Object.keys()==================');
console.log(Object.keys(person3)); //(2) ["name", "aa"]
//即只遍历自身可枚举属性并返回一个数组


console.log('===============================构造+原型模式===============================');

function Person4(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

Person4.prototype = {
    constructor: Person4,
    sayName: function() {
        console.log(this.name);
    }
};
var person1 = new Person4("Nicholas", 29, "Software Engineer");
var person2 = new Person4("Greg", 27, "Doctor");
person1.friends.push("Van");
console.log(person1.friends); //"Shelby,Count,Van"
console.log(person2.friends); //"Shelby,Count"
console.log(person1.friends === person2.friends); //false
console.log(person1.sayName === person2.sayName); //true


console.log('===============================动态构造原型模式===============================');

function Person5(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];

    if (typeof this.sayName !== 'function') {
        console.log('make sayName');
        Person5.prototype.sayName = function() {
            console.log(this.name);
        }
    } //只在构造函数第一次调用的时候会执行
}

var friend1 = new Person5("Nicholas", 29, "Software Engineer"); //make sayName
friend1.sayName();
var friend2 = new Person5("Nicholas", 29, "Software Engineer");
//这可以看做是一种习惯写法，让它更像正常的OO语言
//而不是先定义对象和构造函数，再写原型，感觉怪怪的


console.log('===============================寄生构造模式===============================');

//语法示例
function Person6(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

var friend = new Person6("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas

//那么这种语法存在的意义是什么呢？
function SpecialArray() {
    //创建数组
    var values = new Array();
    //添加值
    values.push.apply(values, arguments);
    //添加方法
    values.toPipedString = function() {
        return this.join("|");
    };
    //返回数组
    return values;
}

var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString()); //"red|blue|green"

//可以理解为一种在原有对象基础上的扩展
//修改某些不能修改原型的默认类型，让他们得到扩展
//？是否可以在这个基础上做一些库的插件呢？这样就无需修改对应库的源码来实现了


console.log('===============================稳妥构造模式===============================');

function Person7(name, age, job) {
    var o = new Object();
    o.sayName = function() {
        console.log(name);
    };
    return o;
}

var friend = new Person6("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas
//累死一般OO里面，定义一个私有变量，get/set公共方法这样