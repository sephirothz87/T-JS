// 条件限制专场


console.log('===============================Q1===============================');
// 不用第3个变量交换a，b


console.log('=============================数字=============================');
var a1 = 1,
    b1 = 2;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a1);
console.log(b1);

console.log('=============================通用=============================');

// var a2 = 'x';
// var b2 = 'y';

var a2 = {x: 'x', y: 'y'};
var b2 = {i: 'i', j: 'j'};

a2 = [a2, b2];
b2 = a2[0];
a2 = a2[1];

console.log(a2);
console.log(b2);


console.log('===============================Q2===============================');
// 给一个数字5，不用for循环，返回[1,2,3,4,5]数组

var n = 5;


console.log('=============================A1=============================');

function fq21(n, arr) {
    if (n > 0) {
        arr.unshift(n);
        n--;
        return fq21(n, arr);
    } else {
        return arr;
    }
}

console.log(fq21(n, []));


console.log('=============================A2=============================');

function fq22(n) {
    var res = [];

    return (function () {
        res.unshift(n);
        n--;
        if (n > 0) {
            arguments.callee();
        }
        return res;
    })();
}

console.log(fq22(n));
// 本质上和上一个函数是一样的
// 这里用到的两个知识点是：1.匿名函数如何递归，callee    2.如果参数不符合要求，直接内部再定义一个参数和一个函数，自己传


console.log('=============================A3=============================');

// 再BAN了递归


function fq23(n) {
    var arr = [];

    arr.length = n + 1;

    console.log(arr);//[empty × 6]

    var str = arr.join('a');

    console.log(str);//aaaaa

    var res = [];

    str.replace(/a/g, function () {
        res.unshift(n--);
    });

    return res;
}

//利用正则多次匹配回调的原理实现循环

console.log(fq23(n));


console.log('=============================A4=============================');

// 再BAN了正则


function fq24(n) {
    var arr = [];
    arr.length = n;

    arr.fill('a');

    var res = arr.map((val, index) => {
        return index + 1;
    });

    return res;
}

console.log(fq24(n));


//插一句
var t_arr = [1, 2, 3];
console.log(typeof  t_arr);//object
console.log(t_arr instanceof Array);//true
console.log(Array.isArray(t_arr));//true

//这里记得数组也有反过来从后向前操作的方法，查了一下记错了，应该是字符串才有的


console.log('===============================Q3===============================');

// 一个数n，当n小于100返回n，否则返回100

var q3n1 = 50;
var q3n2 = 150;
var q3n3 = -150;

console.log('=============================无限制=============================');

function q3f1(n) {
    if (n > 100) {
        return 100;
    }
    return n;
}

console.log(q3f1(q3n1));
console.log(q3f1(q3n2));


console.log('=============================限制if、三相=============================');

function q3f2(n) {
    switch (n > 100) {
        case true:
            return 100;
        case false:
            return n;
    }
}

console.log(q3f2(q3n1));
console.log(q3f2(q3n2));


console.log('=============================限制switch=============================');

function q3f3(n) {
    return Math.min(n, 100);
}

console.log(q3f3(q3n1));
console.log(q3f3(q3n2));


console.log('=============================限制Math=============================');

function q3f4(n) {
    var arr = [n, 100];
    arr.sort((x, y) => {
        return x - y
    });

    return arr[0];
}

console.log(q3f4(q3n1));
console.log(q3f4(q3n2));


console.log('=============================限制数组=============================');

function q3f5(n) {
    for (; n > 100;) {
        return 100;
    }
    return n;
}

console.log(q3f5(q3n1));
console.log(q3f5(q3n2));


function q3f6(n) {
    var json = {a: 'a'};

    var m = n > 100 || json;
    //n>100 m = 布尔值true，不进forin
    //n<100 m = json,进forin

    for (var attr in m) {
        return n;
    }

    return 100;
}

console.log(q3f6(q3n1));
console.log(q3f6(q3n2));


console.log('=============================限制各种循环=============================');

function q3f7(n) {
    var m = n > 100 && 100;
    //n<100 m = false;  return n
    //n>100 m = 100;    return m

    return m || n;
}

console.log(q3f7(q3n1));
console.log(q3f7(q3n2));


console.log('=============================限制与或非=============================');

function q3f8(n) {
    var str = n + '';
    re = /^\d{3,}/g;
    // re = /^[^\-]*\d{3,}/g;

    return str.replace(re, '100');
}

console.log(q3f8(q3n1));
console.log(q3f8(q3n2));
console.log(q3f8(q3n3));
console.log(q3f8(1500));
console.log(q3f8(170));




















