//3 变量的解构赋值
//3.3   字符串的解构赋值
//3.4   数值和布尔值的解构赋值
//3.5   函数参数的解构赋值
//3.6   不建议使用圆括号


console.log('=============================字符串的解构赋值=============================');
const [v1, v2, v3, v4, v5, v6] = 'hello';
console.log(v1); //h
console.log(v2); //e
console.log(v3); //l
console.log(v4); //l
console.log(v5); //o
console.log(v6); //undefined

let { length: v7 } = 'helll world';
console.log(v7); //11


console.log('=============================数值和布尔值的解构赋值=============================');
//数值和布尔值会先被解析成对象
let { toString: v8 } = 123;
console.log(v8); //toString() { [native code] }
console.log(v8 === Number.prototype.toString); //true

let { toString: v9 } = false;
console.log(v9); //toString() { [native code] }
console.log(v9 === Boolean.prototype.toString); //true

// undefined和null无法转换成对象
// let { prop:v10} = undefined;//报错
// let { prop:v11} = null;//报错



console.log('=============================函数参数的解构赋值=============================');
// 这里开始涉及到应用了
function f1([x, y]) {
    return x + y;
}
console.log(f1([1, 2])); //3

a1 = [
    [1, 2],
    [3, 4]
];
a2 = a1.map(function([x, y]) { return x + y; });
console.log(a2); //(2) [3, 7]

console.log('================支持默认值================');

function f2([x = 3, y = 4]) {
    return x + y;
}

console.log(f2([1, 2])); //3
console.log(f2([5, 6, 7])); //11
console.log(f2([8])); //12
console.log(f2([])); //7

function f3({ p12: v12 = 12, v13 = 13 }) {
    console.log(v12);
    console.log(v13);
    return v12 + v13;
}

console.log(f3({ p12: 100, v13: 200 })); //100 200 300
console.log(f3({ p12: 100 })); //100 13 113
console.log(f3({ v13: 200 })); //12 200 212
console.log(f3({})); //12 13 25
//与之前相同，解构的有无完全依靠undefined


// 不建议使用圆括号
console.log('=============================不建议使用圆括号=============================');