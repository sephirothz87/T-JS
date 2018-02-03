//3 变量的解构赋值
//3.7   用途


console.log('=============================快速交换=============================');
let [v1, v2] = [3, 4];
console.log(v1); //3
console.log(v2); //4

[v1, v2] = [v2, v1];
console.log(v1); //4
console.log(v2); //3


console.log('=============================从函数返回多个值=============================');

//而不需要依靠数组和对象
function f1() {
    return [1, 'abc', true];
}

let [v3, v4, v5] = f1();
console.log(v3); //1
console.log(v4); //abc
console.log(v5); //true


console.log('=============================函数参数定义=============================');

function f2([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}

f2([1, 'abc', true]); //1	abc	true
//这个例子感觉并没有什么卵用

//如果参数是无次序的，可能会有点卵用？
function f3({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}

f3({z: 1, y: 'abc', x: true}); //true	abc	1


console.log('=============================快速提取JSON值=============================');
//非常有用
let j1 = {
    p1: 42,
    p2: 'ok',
    p3: [12, 34],
    p4: {p5: 'p5', p6: 'p6'}
};

let {p1, p2, p3, p4} = j1;

console.log(p1); //42
console.log(p2); //ok
console.log(p3); //(2) [12, 34]
console.log(p4); //{p5: "p5", p6: "p6"}


console.log('=============================函数参数的默认值=============================');
// 例如
// jQuery.ajax = function (url, {
//   async = true,
//   beforeSend = function () {},
//   cache = true,
//   complete = function () {},
//   crossDomain = false,
//   global = true,
//   // ... more config
// }) {
//   // ... do stuff
// };

// 可以避免在函数内部写 var xxx = param1 || default_value


console.log('=============================遍历MAP结构=============================');
const m1 = new Map();
m1.set('k1', 'k1v');
m1.set('k2', 'k2v');

console.log(m1); //Map(2) {"k1" => "k1v", "k2" => "k2v"}

for (let [key, value] of m1) {
    console.log(key);
    console.log(value);
}
//k1
//k1v
//k2
//k2v
//是不是很有php的感觉


console.log('=============================输入模块的指定方法=============================');
// const { SourceMapConsumer, SourceNode } = require("source-map");
//这个才是核心啊，终于知道require里面为什么要这么写了