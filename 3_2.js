//3 变量的解构赋值
//3.2   对象的解构赋值


console.log('=============================对象的解构赋值=============================');
console.log('================基本用法================');
let {v1, v2} = {v1: 'a', v2: 'b'};
console.log(v1);//a
console.log(v2);//b

let {v3, v4, v5} = {v4: 'a', v3: 'b'};
console.log(v3);//b
console.log(v4);//a
console.log(v5);//undefined

//如果变量名和属性名不一致
let {p6: v6, p7: v7} = {p6: 'aaa', p7: 'bbb', p8: 'ccc'};
console.log(v6);//aaa
console.log(v7);//bbb

// 也可以这样写
let o1 = {p9: 'aaa', p10: 'bbb', p11: 'ccc'};
let {p9: v9, p11: v11} = o1;
console.log(v9);//aaa
console.log(v11);//ccc


console.log('================同样支持嵌套================');
let {p12: [v12, {p13: v13}]} = {p12: ['hello', {p13: 'world'}]};
console.log(v12);//hello
console.log(v13);//world

// 嵌套的部分也可以赋值

let {p14, p14: [v14, {p15: v15}]} = {p14: ['hello', {p15: 'world'}]};
console.log(v14);//hello
console.log(v15);//world
console.log(p14);//["hello",{p15: "world"}]

let {p16, p16: v16, p16: {p17: {v17, p18: v18}}} = {p16: {p17: {v17: 17, p18: 18}}};
console.log(p16);
console.log(v16);
console.log(v17);
console.log(v18);

//总结规律就是，先按照对应位置匹配好
//是单值的，就到对象里找key
//是[key:变量]的，就去找对应的[key:value]，赋值给value


console.log('================同样支持默认值================');

let {p19: [v19, {p20: v20, v21 = '!!!', p22: v22 = 'default value', v23}]} = {
    p19: ['hello', {
        p20: 'world',
        p22: undefined
    }]
};
console.log(v19);//hello
console.log(v20);//world
console.log(v21);//!!!
console.log(v22);//default value
console.log(v23);//undefined
// 原理也同样是undefined就取默认值去

//注意对undefined再取子属性会报错
let {v24} = {p25: 'aaa'};
console.log(v24);//undefined

let {v26, v26: {v27}} = {v26: {v27: 'aaa'}};
console.log(v26);//{v27: "aaa"}
console.log(v27);//aaa

// let {v28:{v29}} = {v30:'aaa'};//Uncaught TypeError: Cannot destructure property `v29` of 'undefined' or 'null'.
//因为这个v28被初始化为undefined，再取v29的值导致错误


console.log('================用已声明变量再次赋值时要小心================');
let v31 = 10;
// {v31} = {v31:100};//Uncaught SyntaxError: Unexpected token =
// v31被解析成一个代码块，后面直接接=是一个语法错误
({v31} = {v31: 100});
console.log(v31);//100


console.log('================将现有对象的方法赋值给变量================');
let {log, sin, cos} = Math;
console.log(sin(30));//-0.9880316240928618
console.log(cos(60));//-0.9524129804151563
console.log(log(4));//1.3862943611198906


console.log('================数组对象的析构赋值================');
// 本质：数组就是特殊的对象
let a1 = [1, 2, 3];
let {0: v41, 1: v42, 2: v43} = a1;
console.log(v41);//1
console.log(v42);//2
console.log(v43);//3