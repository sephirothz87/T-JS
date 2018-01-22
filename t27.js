// 6.1  理解对象


console.log('===============================例子1===============================');
var Person = new Object();
Person.name = "Nicholas";
Person.age = 29;
Person.job = "Software Engineer";
Person.sayName = function () {
    console.log(this.name);
};

logAll(Person);
//{name: "Nicholas", age: 29, job: "Software Engineer", sayName: ƒ}
//object
//valueOf() {name: "Nicholas", age: 29, job: "Software Engineer", sayName: ƒ}
//toString() [object Object]
//toLocalString() [object Object]

Person.sayName();//Nicholas
// console.log(Person.this);//没有this，undefined


console.log('===============================属性类型===============================');
// 干货
//  [[Configurable]]：表示能否通过delete 删除属性从而重新定义属性，能否修改属性的特
// 性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的
// 这个特性默认值为true。

//  [[Enumerable]]：表示能否通过for-in 循环返回属性。像前面例子中那样直接在对象上定
// 义的属性，它们的这个特性默认值为true。

//  [[Writable]]：表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的
// 这个特性默认值为true。

//  [[Value]]：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，
// 把新值保存在这个位置。这个特性的默认值为undefined。

console.log('=============================通常=============================');
var person = {};
person.name = "Nicholas";
console.log(person.name); //"Nicholas"
person.name = "Greg";
console.log(person.name); //"Greg"
delete person.name;
console.log(person.name); //undefined


console.log('=============================writable=============================');
var person_1 = {};
Object.defineProperty(person_1, "name", {
    configurable: true,
    writable: false,
    value: "Nicholas"
});
console.log(person_1.name); //"Nicholas"
person_1.name = "Greg";
console.log(person_1.name); //"Nicholas"
//name不可修改,严格模式会报错

delete person_1.name;
console.log(person_1.name); //undefined //configurable: true,   删除还是可以的

// Object.defineProperty(person_1, "name", {
//     writable: true,//不可以，会报错，即定义后不可再修改
//     value: "Nicholas"
// });

console.log('=============================configurable=============================');
var person_2 = {};
Object.defineProperty(person_2, "name", {
    configurable: false,
    writable: true,
    value: "Nicholas"
});
console.log(person_2.name); //"Nicholas"
person_2.name = "Greg";
console.log(person_2.name); //"Greg"    //writable: true,   修改可以

delete person_2.name;
console.log(person_2.name); //"Greg"
//删除不行,严格模式会报错

person_2.name = {a: 'a', b: 'b'};
console.log(person_2.name);//{a: "a", b: "b"}}     修改成其他类型也可以

// Object.defineProperty(person_2, "name", {
//     configurable: true,//不可以，会报错，即定义后不可再修改
//     value: "Nicholas"
// });


//没看出configurable和writable有什么区别啊
//搞明白了，defineProperty一旦调用，就默认全是false，修改了一下代码就好理解了


console.log('=============================get/set=============================');
var book1 = {
    _year: 2004,//这种原则上只能通过访问器访问的属性一般用下划线开头
    _edition: 1
};

Object.defineProperty(book1, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this._edition += newValue - 2004;
        }
    }
});
//严格模式下必须同时有getter和setter

console.log(book1);//{_year: 2004, _edition: 1}

book1._year = 2007;
book1._edition = 2;

console.log(book1);//{_year: 2007, _edition: 2}  普通的修改

book1.year = 2008;//这里要调用set方法
console.log(book1);//{_year: 2008, _edition: 6}   调用了year的set方法，执行对应操作

book1.year = 2003;
console.log(book1);//{_year: 2008, _edition: 6}   调用了year的set方法，不满足条件直接跳出

// Object.defineProperty(book1,"year",{
//     get : function(){
//         return '第' + this._edition + '版';
//     },
//     set: function(newValue){
//         this._edition = newValue;
//     }
// });
// 同样再次定义会报错

Object.defineProperty(book1, "edition", {
    get: function () {
        return '第' + this._edition + '版';
    },
    set: function (newValue) {
        this._year = newValue + 2000;
        this._edition = newValue;
    }
});
//定义其他的属性没问题

console.log(book1);//{_year: 2008, _edition: 6}

book1.edition = 5;//这里同样要调用set方法
console.log(book1);//{_year: 2005, _edition: 5}
console.log(book1.year);//2005
console.log(book1.edition);//第5版
//即这两个属性的访问是调用自定义的get方法得到的

console.log(book1._year);//2005
console.log(book1._edition);//5
//这里调用的就还是默认的get方法


//定义访问器的旧有方法    另一种实现方式 和上面的效果是一样的
// book1.__defineGetter__("year", function(){
//     return this._year;
// });
// book1.__defineSetter__("year", function(newValue){
//     if (newValue > 2004) {
//         this._year = newValue;
//         this.edition += newValue - 2004;
//     }
// });


//ES5下还可以这样写

var book2 = {};
Object.defineProperties(book2, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
//这样_year和edition默认就是不可以修改的了
//这种设计方式正式想要这个效果，看下面的例子


console.log('===============================读取属性特性===============================');
var descriptor = Object.getOwnPropertyDescriptor(book2, "_year");
console.log(descriptor.value); //2004
console.log(descriptor.configurable); //false
console.log(descriptor.writable); //false
console.log(typeof descriptor.get); //"undefined"

book2._year = 2008;
console.log(book2);//{_year: 2004, edition: 1}  不可修改
var descriptor = Object.getOwnPropertyDescriptor(book2, "year");
console.log(descriptor.value); //undefined
console.log(descriptor.enumerable); //false
console.log(descriptor.configurable); //false
console.log(descriptor.writable); //undefined
console.log(typeof descriptor.get); //"function"
console.log(descriptor.get); //ƒ () {return this._year;}















