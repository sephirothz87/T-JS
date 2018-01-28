//  7.4 私有变量


console.log('===============================概念理解===============================');

function MO(nname) {
    var p1 = 'x';

    this.getName = () => {
        return nname;
    };

    this.setName = (val) => {
        nname = val;
    };

    this.getP1 = () => {
        return p1;
    };

    this.setP1 = (val) => {
        p1 = val;
    };

    var p2 = 1;

    this.getP2 = () => {
        return p2++;
    };

    this.resetP2 = () => {
        p2 = 1;
    };

    var privateMethod = () => {
        p2 += 10;
        // console.log(p2);
    };

    this.publicMethod = () => {
        privateMethod();
    } //这种方法也可以叫做特权方法
}

var m1 = new MO('m1');

console.log(m1);

// console.log(m1.p1);//报错
console.log(m1.nname); //undefined
// m1.privateMethod();//报错

console.log(m1.getName()); //m1
m1.setName('mm1');
console.log(m1.getName()); //mm1

console.log(m1.getP1()); //x
m1.setP1('y');
console.log(m1.getP1()); //y

console.log(m1.getP2()); //1
console.log(m1.getP2()); //2
console.log(m1.getP2()); //3
m1.resetP2();
console.log(m1.getP2()); //1
console.log(m1.getP2()); //2
console.log(m1.getP2()); //3

m1.publicMethod();
console.log(m1.getP2()); //14
console.log(m1.getP2()); //15


console.log('===============================静态私有变量===============================');
(function() {
    var nname = '';

    MO2 = function(value) {
        nname = value;
    };

    var p1 = 'x';

    MO2.prototype.getName = () => {
        return nname;
    };

    MO2.prototype.setName = (val) => {
        nname = val;
    };

    MO2.prototype.getP1 = () => {
        return p1;
    };

    MO2.prototype.setP1 = (val) => {
        p1 = val;
    };

    var p2 = 1;

    MO2.prototype.getP2 = () => {
        return p2++;
    };

    MO2.prototype.resetP2 = () => {
        p2 = 1;
    };

    var privateMethod = () => {
        p2 += 10;
        // console.log(p2);
    };

    MO2.prototype.publicMethod = () => {
        privateMethod();
    } //这种方法也可以叫做特权方法
})();
//总结，私有变量/函数定义方式不变，属性要通过原型来定义


var m2 = new MO2('m2');

console.log(m2.getName()); //m2
m2.setName('mm2');
console.log(m2.getName()); //mm2

console.log(m2.getP1()); //x
m2.setP1('y');
console.log(m2.getP1()); //y

console.log(m2.getP2()); //1
console.log(m2.getP2()); //2
console.log(m2.getP2()); //3
m2.resetP2();
console.log(m2.getP2()); //1
console.log(m2.getP2()); //2
console.log(m2.getP2()); //3

m2.publicMethod();
console.log(m2.getP2()); //14
console.log(m2.getP2()); //15


console.log('===============================模块模式===============================');

console.log('==================单例对象==================');
var singleton = {
    name: 'a',
    method: function() {

    }
};
//没错，这就是单例对象


//单例对象中的私有变量实现

var person = function() {
    var name = 'a';

    var p1 = 5;

    function pf1() {
        return p1++;
    }

    return {
        getName: () => {
            return name;
        },
        setName: (val) => {
            name = val;
        },
        getP1: () => {
            return pf1();
        },
        resetP1: (val) => {
            p1 = val;
        }
    };
}();

// console.log(person.name);//报错
// person.pf1();//报错

console.log(person.getName()); //a
person.setName('b');
console.log(person.getName()); //b

console.log(person.getP1()); //5
console.log(person.getP1()); //6
console.log(person.getP1()); //7
person.resetP1(2);
console.log(person.getP1()); //2
console.log(person.getP1()); //3
console.log(person.getP1()); //4