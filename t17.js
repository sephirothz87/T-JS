// JS面向对象编程 object中constructor的问题


// console.log('===============================Obj的基本定义、调用===============================');
// function Obj(){
//     console.log(this);
//
//     this.name = 'name';
//     this.age = 30;
//     this.get_name = function(){console.log(this.name);}
//     this.get_age = function(){console.log(this.age);}
//
//     console.log('obj start');
// }
//
// Obj.prototype.p_name = 'p_name';
// Obj.prototype.p_age = 40;
// Obj.prototype.p_get_name = function(){console.log(this.name);};
// Obj.prototype.p_get_age = function(){console.log(this.age);};
// Obj.prototype.p_get_p_name = function(){console.log(this.p_name);};
// Obj.prototype.p_get_p_age = function(){console.log(this.p_age);};
//
//
// var obj = new Obj();
// //Obj{}
// //obj start
//
// console.log(obj.name);//name
// console.log(obj.age);//30
// obj.get_name();//name
// obj.get_age();//30
//
// console.log(obj.p_name);//p_name
// console.log(obj.p_age);//40
//
// obj.p_get_name();//name
// obj.p_get_age();//30
//
// obj.p_get_p_name();//p_name
// obj.p_get_p_age();//40
//
//
//
// console.log(Obj.age);//undefined
// console.log(Obj.p_name);//undefined
// console.log(Obj.get_name);//undefined
// // console.log(Obj.get_name());//报错
// console.log(Obj.p_get_name);//undefined
// // console.log(Obj.p_get_name());//报错


console.log('===============================Obj的构造函数===============================');
function Obj(){
    console.log(this);

    this.name = 'name';
    this.age = 30;
    this.get_name = function(){console.log(this.name);}
    this.get_age = function(){console.log(this.age);}

    console.log('obj start');
}

Obj.prototype.p_name = 'p_name';
Obj.prototype.p_age = 40;
Obj.prototype.p_get_name = function(){console.log(this.name);};
Obj.prototype.p_get_age = function(){console.log(this.age);};
Obj.prototype.p_get_p_name = function(){console.log(this.p_name);};
Obj.prototype.p_get_p_age = function(){console.log(this.p_age);};

console.log(Obj.constructor);//Function(){...}

var obj = new Obj();

console.log(obj.constructor);//Obj(){...}
//即对象的构造函数自动绑定到函数声明本身

// JS会自动执行这句
// Obj.prototype.constructor = Obj;
console.log(obj.__proto__ === Obj.prototype);//true
console.log(obj.__proto__.constructor === Obj.prototype.constructor);//true
console.log(obj.constructor === Obj.prototype.constructor);//true

//但如果我手动修改了Obj的构造函数
Obj.prototype.constructor = Array;

console.log(obj.constructor);//Array(){...}

//或者我用对象指定的方式来修改Obj.prototype
Obj.prototype = {
    p_name:'p_name',
    p_age:40,
    p_get_name : function(){console.log(this.name);},
    p_get_age : function(){console.log(this.age);},
    p_get_p_name : function(){console.log(this.p_name);},
    p_get_p_age : function(){console.log(this.p_age);},
};

var obj_2 = new Obj();
console.log(obj_2.constructor);//Object(){...}

//这里构造函数不再指向Obj本身，原因是这种prototype的定义虽然方便，但是是覆盖prototype，同时也覆盖掉了JS自动生成constructor


// 所以通常的写法是这样的
Obj.prototype = {
    constructor:Obj,
    p_name:'p_name',
    p_age:40,
    p_get_name : function(){console.log(this.name);},
    p_get_age : function(){console.log(this.age);},
    p_get_p_name : function(){console.log(this.p_name);},
    p_get_p_age : function(){console.log(this.p_age);},
};
var obj_3 = new Obj();
console.log(obj_3.constructor);//Obj(){...}
