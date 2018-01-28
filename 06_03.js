//  6.3 继承


console.log('===============================原型链===============================');


console.log('==================基础回顾==================');

function Father() {
    this.name = 'f_name';
    this.sayName = function() {
        console.log(`father ${this.name}`);
    }
}

Father.prototype.pName = 'f_p_name';
Father.prototype.doSth = function(sth) {
    console.log(`${this.name} do ${sth}`);
};

var f = new Father();

console.log(f.name); //f_name
console.log(f.pName); //f_p_name
f.sayName(); //father f_name
f.doSth('shopping'); //f_name do shopping

function Son() {
    this.name = 's_name';
}

Son.prototype = new Father();

// var f_p = new Father();
// Son.prototype = f_p;

var s = new Son();

console.log(s.name); //s_name
console.log(s.pName); //f_p_name
s.sayName(); //father s_name
s.doSth('cooking'); //s_name do cooking


console.log(s instanceof Son); //true
console.log(s instanceof Father); //true

console.log(typeof Father); //function
console.log(typeof Son); //function
console.log(typeof f); //object
console.log(typeof s); //object


console.log('==================修改原型链会发生什么==================');
//Son.prototype仍然可以修改
//就要继续注意修改和重写的区别，重写会覆盖原有的原型链

//那么如果修改了父类的原型呢？
Father.prototype.eatSth = function(sth) {
    console.log(`${this.name} eat ${sth}`);
};

f.eatSth('cake'); //f_name eat cake
s.eatSth('dum'); //s_name eat dum
//可以正确访问

Son.prototype.eatSth = function(sth) {
    console.log(`son ${this.name} eat ${sth}`);
};

s.eatSth('dum'); //son s_name eat dum
// console.log(f_p);    //如果用f_p那种方式定义，这里的f_p会被添加一个eatSth的方法


console.log('==================原型链的问题==================');

function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {}

SubType.prototype = new SuperType();

var sub1 = new SubType();
var sub2 = new SubType();

sub1.colors.push('yellow');

console.log(sub1.colors); //(4) ["red", "blue", "green", "yellow"]
console.log(sub2.colors); //(4) ["red", "blue", "green", "yellow"]
// 他们都被修改了

// 还有一个问题是子类原型指向父类对象时，不能传参，所以在实际应用中用的很少
// 从而引出借用构造函数的概念

console.log(SubType.prototype.__proto__ === SuperType.prototype);


console.log('===============================借用构造函数===============================');
//constructor stealing
//老外总是这么直接啊，想到了金手指


function SuperType2() {
    this.colors = ['red', 'blue', 'green'];
}

SuperType2.prototype.names = ['a', 'b', 'c'];

function SubType2() {
    SuperType2.call(this);
}

var sub3 = new SubType2();
var sub4 = new SubType2();

sub3.colors.push('yellow');
console.log(sub3.colors); //(4) ["red", "blue", "green", "yellow"]
console.log(sub4.colors); //(3) ["red", "blue", "green"]


//这里理解为每次在new SubType2()的时候新规一个SuperType2的对象
//这样就保证了每个子类的父类是一个独立的父类对象，从而修改父类属性时不会相互影响

//但是从而也引发了一些问题
console.log(SubType2.prototype.__proto__ === SuperType2.prototype); //false
//但是这个打印的结果是false
//也就是说此时没有了原型链作用

console.log(sub3.names); //undefined
console.log(sub4.names); //undefined

//所以说这种方式用的也不多


console.log('===============================组合继承===============================');

// combination inheritance

function SPT(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    this.sayName = function() {
        console.log(`SPT say name ${this.name}`);
    }
}

SPT.prototype.pps = { a: 'a', b: 'b', c: 'c' };
SPT.prototype.doSth = function(sth) {
    console.log(`SPT ${this.name} do ${sth}`);
};
SPT.prototype.showColors = function() {
    console.log(this.colors);
};

function SBT(name, age) {
    SPT.call(this, name);
    this.age = age;
    this.sayName = function() {
        console.log(`SBT say name ${this.name}`);
    }
}

SBT.prototype = new SPT();
SBT.prototype.constructor = SBT;
SBT.prototype.sayAge = function() {
    console.log(`SBT say age ${this.age}`);
};


var sbt1 = new SBT('A', 20);
var sbt2 = new SBT('B', 30);

console.log(sbt1.name); //A
console.log(sbt1.colors); //(3) ["red", "blue", "green"]
sbt1.sayName(); //SBT say name A
console.log(sbt1.pps); //{a: "a", b: "b", c: "c"}
sbt1.doSth('sports'); //SPT A do sports
sbt1.showColors(); //(3) ["red", "blue", "green"]

console.log(sbt1.age); //20
sbt1.sayAge(); //SBT say age 20

sbt1.colors.push('yellow');
sbt1.pps.d = 'd';

console.log(sbt1.colors); //(4) ["red", "blue", "green", "yellow"]
sbt1.showColors(); //(4) ["red", "blue", "green", "yellow"]
console.log(sbt1.pps); //{a: "a", b: "b", c: "c", d: "d"}


console.log(sbt2.colors); //(3) ["red", "blue", "green"]
sbt2.showColors(); //(3) ["red", "blue", "green"]
console.log(sbt2.pps); //{a: "a", b: "b", c: "c", d: "d"}    注意，原型中的属性也被修改了
//即这种方式保证了
//1.对象内部的属性不再复用，即每个示例有单独的父类对象（解决了之前说到了原型链问题）
//2.父类对象和原型仍然在原型链上，即原型链仍然存在（解决了之前说的原型链消失的问题）
//3.修改父类原型仍然会作用到所有的子类实例上（虽然是个问题，但感觉这样更好让在什么位置定义什么样的属性有了区别）


//*******这种方式是最常见的实现继承的方式


console.log('===============================原型式继承===============================');

//可以理解为一种语法糖，直接在构造函数中将原型对象生成并返回

// 模板
function object(o) {
    function F() {}

    F.prototype = o;
    return new F();
}


var person1 = {
    name: 'Nicholas',
    friends: ["Shelby", "Court", "Van"]
};


var person2 = object(person1);

person2.name = 'Greg';
person2.friends.push('Sheldon');

var person3 = object(person1);

person3.name = 'Linda';
person3.friends.push('Lenard');

console.log(person1); //{name: "Nicholas", friends: Array(5)}
console.log(person2); //F {name: "Greg"}
console.log(person3); //F {name: "Linda"}

console.log(person2.name);
console.log(person2.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
console.log(person3.name);
console.log(person3.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]

console.log(person1.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
//可以看到这个语法并不解决什么问题，只是帮我们省略了原型链定义那一步


console.log('==================ES5规范后的写法==================');

var personX = {
    name: 'Nicholas',
    friends: ["Shelby", "Court", "Van"]
};

var person4 = Object.create(personX);

person4.name = 'Greg';
person4.friends.push('Sheldon');

var person5 = Object.create(personX);

person5.name = 'Linda';
person5.friends.push('Lenard');


console.log(personX); //{name: "Nicholas", friends: Array(5)}
console.log(person4); //F {name: "Greg"}
console.log(person5); //F {name: "Linda"}

console.log(person4.name);
console.log(person4.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
console.log(person5.name);
console.log(person5.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]

console.log(personX.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
//这种写法依然不解决引用的问题，只是不再需要那个倒霉的object函数了


console.log('===============================寄生式继承===============================');


function ctO(ori) {
    var clone = object(ori); //前面写过
    clone.sayHi = function() {
        console.log('ctO say hi');
    };
    return clone;
}

var personY = {
    name: 'Nicholas',
    friends: ["Shelby", "Court", "Van"]
};

var person6 = ctO(personY);
var person7 = ctO(personY);


person6.name = 'Greg';
person6.friends.push('Sheldon');

person7.name = 'Linda';
person7.friends.push('Lenard');

person6.sayHi(); //ctO say hi
person7.sayHi(); //ctO say hi

console.log(personY); //{name: "Nicholas", friends: Array(5)}
console.log(person6); //F {sayHi: ƒ, name: "Greg"}
console.log(person7); //F {sayHi: ƒ, name: "Linda"}

console.log(person6.name);
console.log(person6.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
console.log(person7.name);
console.log(person7.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]

console.log(personY.friends); //(5) ["Shelby", "Court", "Van", "Sheldon", "Lenard"]
//同样不解决引用的问题

//恍然大悟，上面这两种继承的本质是不再需要把父类定义成一个函数了
//即，前几节的继承都是写一个函数对象，然后实例化成一个具体的对象
//这两节的方式是，定义一个常规的对象，然后实例化成一个函数对象，正好相反

console.log(typeof personY); //object
console.log(typeof person6); //object
//都是对象


console.log('===============================寄生组合式继承===============================');
//顾名思义，结合两者特点
//并不是。。。


function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

//把之前组合继承的例子搬过来就是

function SPT2(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    this.sayName = function() {
        console.log(`SPT2 say name ${this.name}`);
    }
}

SPT2.prototype.pps = { a: 'a', b: 'b', c: 'c' };
SPT2.prototype.doSth = function(sth) {
    console.log(`SPT2 ${this.name} do ${sth}`);
};
SPT2.prototype.showColors = function() {
    console.log(this.colors);
};

function SBT2(name, age) {
    SPT2.call(this, name);
    this.age = age;
    this.sayName = function() {
        console.log(`SBT2 say name ${this.name}`);
    }
}

inheritPrototype(SBT2, SPT2);
// 取代了应有的这两句
// SBT2.prototype = new SPT2();
// SBT2.prototype.constructor = SBT2;

SBT2.prototype.sayAge = function() {
    console.log(`SBT2 say age ${this.age}`);
};

var sbt1 = new SBT2('A', 20);
var sbt2 = new SBT2('B', 30);

console.log(sbt1.name); //A
console.log(sbt1.colors); //(3) ["red", "blue", "green"]
sbt1.sayName(); //SBT2 say name A
console.log(sbt1.pps); //{a: "a", b: "b", c: "c"}
sbt1.doSth('sports'); //SPT2 A do sports
sbt1.showColors(); //(3) ["red", "blue", "green"]

console.log(sbt1.age); //20
sbt1.sayAge(); //SBT2 say age 20

sbt1.colors.push('yellow');
sbt1.pps.d = 'd';

console.log(sbt1.colors); //(4) ["red", "blue", "green", "yellow"]
sbt1.showColors(); //(4) ["red", "blue", "green", "yellow"]
console.log(sbt1.pps); //{a: "a", b: "b", c: "c", d: "d"}


console.log(sbt2.colors); //(3) ["red", "blue", "green"]
sbt2.showColors(); //(3) ["red", "blue", "green"]
//运行结果和之前用组合模式是一样的
//这里再写一遍

//1.对象内部的属性不再复用，即每个示例有单独的父类对象（解决了之前说到了原型链问题）
//2.父类对象和原型仍然在原型链上，即原型链仍然存在（解决了之前说的原型链消失的问题）
//3.修改父类原型仍然会作用到所有的子类实例上（虽然是个问题，但感觉这样更好让在什么位置定义什么样的属性有了区别）


//组合模式种虽然解决了各种问题，但是两个对象的继承关系仍然粗暴的通过prototype赋值的方式被指定
// SBT2.prototype = new SPT2();
// SBT2.prototype.constructor = SBT2;
//即寄生组合模式修改了纯组合模式中的不太优雅的代码，让两个对象通过原型式结成和寄生继承函数来发生关系
//是一种理想的方式，但是实际使用中还是以组合继承为主比较好