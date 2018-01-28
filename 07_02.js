// 7.2  闭包


console.log('===============================概念理解===============================');
//书里给出的这个闭包的概念非常好
//闭包就是：有权访问另一个函数作用域中的变量的函数

//常用返回一个内部匿名函数声明的方式来实现

function createComparisonFunction(propName) {
    return function (obj1, obj2) {
        var val1 = obj1[propName],
            val2 = obj2[propName];

        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    };
}

// 这里需要再捋一下作用域链
// 函数内部变量->全局变量->其他函数内部变量

var compare = createComparisonFunction('name');
console.log(compare({name: 'Nicholas'}, {name: 'Greg'}));//1
compare = null;//释放对象

console.log(createComparisonFunction('name')({name: 'Greg'}, {name: 'Nicholas'}));//-1


console.log('===============================闭包与变量===============================');

function cf1() {
    var res = [];

    for (var i = 0; i < 10; i++) {
        res[i] = function () {
            return i;
        };
    }

    return res;
}

var resCf1 = cf1();
console.log(resCf1);//(10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
console.log(resCf1[0]());//10
console.log(resCf1[3]());//10
console.log(resCf1[9]());//10

// 改成立即执行函数

function cf2() {
    var res = [];

    for (var i = 0; i < 10; i++) {
        res[i] = function (num) {
            return function () {
                return num;
            };
        }(i);
    }

    return res;
}

var resCf1 = cf2();
console.log(resCf1);//(10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
console.log(resCf1[0]());//0
console.log(resCf1[3]());//3
console.log(resCf1[9]());//9


//ES6
cf3 = () => {
    var res = [];

    for (let i = 0; i < 10; i++) {
        res[i] = ((num) => {
            return () => {
                return num
            };
        })(i);
    }

    return res;
};

var resCf1 = cf3();
console.log(resCf1);//(10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
console.log(resCf1[0]());//0
console.log(resCf1[3]());//3
console.log(resCf1[9]());//9


console.log('===============================this===============================');
var name = 'The Window';

var obj1 = {
    name: 'My Object',

    getName: function () {
        console.log(this);//obj1
        return function () {
            return this.name;
        }
    },

    getNameA: function () {
        console.log(this);//obj1
        return () => {
            return this.name
        };
    },

    getNameAA: () => {
        console.log(this);//window
        return () => {
            return this.name
        };
    },

    getNameAAA: () => {
        console.log(this);//window
        return function () {
            return this.name
        };
    }
};

console.log(obj1.getName()());//obj1    The Window
console.log(obj1.getNameA()());//obj1   My Object
console.log(obj1.getNameAA()());//window    The Window
console.log(obj1.getNameAAA()());//window   The Window

//this.name解析
//1,4同理，函数声明的作用在哪，this指向哪
//2 第二层的this指向上一级   obj1
//3 第二层的this指向上一级，由于上一级也是箭头函数，不算，最终指向window

//this解析
//1,2同理，this指向方法的调用主体，是obj1
//3,4同理，方法的this指向上一级对象，是window

var x1 = obj1.getName;
var x2 = obj1.getNameA;
var x3 = obj1.getNameAA;
var x4 = obj1.getNameAAA;
console.log(x1()());//window   The Window
console.log(x2()());//window   The Window
console.log(x3()());//window   The Window
console.log(x4()());//window   The Window
//不知道怎么解释，先背下来
//应该是一个this维持的问题


//闭包中的变量经常会变得无法回收，自己要注意控制，适时重置为null

