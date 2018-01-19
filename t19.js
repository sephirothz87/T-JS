// 4    对象及作用域

// 4.1  基本类型和引用类型


console.log('===============================复制普通类型和对象类型===============================');
var num1 = 5;
var num2 = num1;

num1 = 6;

console.log(num1); //6
console.log(num2); //5

obj_1 = {
    a: 5,
    b: 6
};

obj_2 = obj_1;

obj_1.a = 7;
obj_2.b = 8;

console.log(obj_1); //{a:7,b:8}
console.log(obj_2); //{a:7,b:8}


console.log('===============================参数传递中的值和对象===============================');
//普通类型作参数肯定是值传递这个不用说了

function setName(obj) {
    obj.name = "Nicholas";
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"

function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object(); //关键在于这一句，此时obj被定义为一个新的局部变量，不再引用person
    console.log(obj); //{}
    obj.name = "Greg";
    console.log(obj); //{name:'Greg'}
    console.log(arguments[0]); //{name:'Greg'}
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"

//setName(person)		栈中的person->堆中的Object1
//setName(obj)   		栈中产生一个obj->堆中的Object1 不违反值传递的原则
//obj.name=xxx	 		修改了堆中Object1的值
//obj = new Object()	obj->堆中一个新的Object2
//obj.name = xxx		修改了堆中Object2的值
//person.setName		person->Object1,name="Nicholas"


console.log('===============================instanceof初探/复习===============================');
var ins_obj = {};
var ins_arr = [];
var ins_fun = function() {};
var ins_reg = /\s/;

console.log(typeof RegExp); //function
console.log(typeof Object); //function
console.log(typeof Array); //function

console.log(typeof ins_obj) //object
console.log(typeof ins_arr) //object
console.log(typeof ins_fun) //function
console.log(typeof ins_reg) //object

console.log(ins_obj instanceof Object); //true
console.log(ins_arr instanceof Array); //true
console.log(ins_fun instanceof Function); //true
console.log(ins_reg instanceof RegExp); //true

//初步理解，找到该变量的构造函数

var ins_var = new ins_fun();
console.log(ins_var instanceof ins_fun); //true
console.log(ins_var instanceof Function); //false
console.log(ins_var instanceof Object); //true
//顺着原型链一层一层找
console.log(ins_var);

console.log('===================ins_var instanceof ins_fun===================');
// ins_var instanceof ins_fun		//true
console.log(ins_var.__proto__ == ins_fun.prototype); //true	命中

console.log('===================ins_var instanceof Function===================');
// ins_var instanceof Function      //false
// ins_var instanceof Object      //true
console.log(ins_var.__proto__ == ins_fun.prototype);
console.log(ins_var.__proto__.__proto__ == ins_fun.prototype.__proto__);
console.log(ins_var.__proto__.__proto__ == Object.prototype) //命中Object

console.log(ins_var.__proto__.__proto__.__proto__ == Object.prototype.__proto__);
console.log(ins_var.__proto__.__proto__.__proto__ == null); //查询结束,整个路径上并没有Function

console.log(Object.prototype.__proto__); //null

console.log(ins_obj instanceof Object); //true
//ins_obj.__proto__ == Object.prototype
console.log(ins_obj instanceof Function); //false
//ins_obj.__proto__.__proto__ == Object.prototype.__proto__ == null

console.log(ins_fun instanceof Function); //true
//ins_fun.__proto__ == Function.prototype