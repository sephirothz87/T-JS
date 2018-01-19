// 3.5 操作符
// 3.6 语句


console.log('===============================一元+-操作符===============================');

console.log('===================加号===================');
var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function () {
        return -1;
    }
};
s1 = +s1; // 值变成数值1
s2 = +s2; // 值变成数值1.1
s3 = +s3; // 值变成NaN
b = +b; // 值变成数值0
f = +f; // 值未变，仍然是1.1
o = +o; // 值变成数值-1

console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);

//这种情况可以理解为Number()强转的变形

var add_01 = 10;
console.log(+add_01);//10
var add_02 = -10;
console.log(+add_02);//-10

console.log('===================减号===================');
//即变成负值
var min_01 = 20;
console.log(-min_01);//-20


console.log(-s1);//-1
console.log(-s2);//-1.1
console.log(-s3);//NaN
console.log(-b);//-0
console.log(-f);//-1.1
console.log(-o);//1

// 这种情况可以理解为Number后再取负值


console.log('===============================比较操作符===============================');

console.log('===================大于小于===================');
console.log('bbbb' > 'aaa');//true
console.log('BBB' < 'aaaa');//true   大写字母的ASCII值小于小写字母的
console.log('BBB'.toLowerCase() < 'aaaa'.toLowerCase());//false  推荐使用

console.log('23' < '3');//true
console.log('23' < 3);//false	优先将23转成数字再比较

console.log('a' < 3);//false	a被转成NaN
console.log('a' > 3);//false	a被转成NaN

console.log(NaN <= 0);//false	NaN和谁比都是false
console.log(NaN >= 0);//false	NaN和谁比都是false
console.log(NaN < NaN);//false	NaN和谁比都是false

console.log('===================等于===================');
console.log('55' == 55);//true
console.log('55' === 55);//false


console.log('===============================with语句（影响性能，不建议使用）===============================');
var withObj = {
    func: (x) => {
        return 100 + x;
    },
    p1: 'p1',
    p2: 3
};

//常规写法
// var func_r = withObj.func(10);
// var p1_r = withObj.p1;
// var p2_r = withObj.p2;

//with语句
with (withObj) {
    var func_r = func(10);
    var p1_r = p1;
    var p2_r = p2;
}

console.log(func_r);
console.log(p1_r);
console.log(p2_r);


console.log('===============================switch===============================');
//switch不一定要在参数里写条件
var num = 25;
switch (true) {
    case num < 0:
        console.log("Less than 0.");
        break;
    case num >= 0 && num <= 10:
        console.log("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        console.log("Between 10 and 20.");
        break;
    default:
        console.log("More than 20.");
}


console.log('===============================tips===============================');
console.log(5 + '5'); //'55'
console.log(5 - '5'); //0
//即，这里的转换原则是
//+将数字转成字符串
//-将字符串转成数字

console.log(Infinity + Infinity);//Infinity
console.log(Infinity + -Infinity);//Nan
console.log(-Infinity + -Infinity);//-Infinity

console.log(Infinity - Infinity);//NaN
console.log(Infinity - -Infinity);//Infinity
console.log(-Infinity - Infinity);//-Infinity
console.log(-Infinity - -Infinity);//NaN
//不细解释了，自行体会

var number_01 = (1, 2, 3, 4, 5);
console.log(number_01);//5

// for (var propName in window) {
// 	console.log(propName);//打印window每个属性名
// }

var obj_1 = {
    a: 'a',
    b: 'b',
    'c': 3,
    'd': 'd',
    'e': function () {
        console.log('e');
    },
    'f': () => {
        console.log('f');
    },
    'g': {'aa': 'aa', 'bb': 10}
}

for (var propName in obj_1) {
    console.log(propName);//a b c d e f g
}
