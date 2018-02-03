//3 变量的解构赋值
//3.1   基本用法


console.log('=============================数组的解构赋值=============================');
console.log('================基本用法================');
let [v1, v2, v3] = [1, 2, 3];
console.log(v1);//1
console.log(v2);//2
console.log(v3);//3

let [v4, [v5, v6]] = [1, [2, 3]];
console.log(v4);//1
console.log(v5);//2
console.log(v6);//3

let [, , v7] = [4, 5, 6];
console.log(v7);//6

let [v8, ...v9] = [1, 2, 3, 4, 5];
console.log(v8);//1
console.log(v9);//[2,3,4,5]

let [v10, v11, ...v12] = ['a'];
console.log(v10);//a
console.log(v11);//undefined
console.log(v12);//[]

let [v13] = [1];
// let [v13,v14] = [2,3];//Identifier 'v13' has already been declared

let [v15] = [];
let [v16, v17] = [1];
console.log(v15);//undefined
console.log(v16);//1
console.log(v17);//undefined

// let [v18,[v19],v20] = [1,2,3];//[1,2,3] is not iterable
let [v18, [v19], v20] = [1, [2, 3], 4];
console.log(v18);//1
console.log(v19);//2
console.log(v20);//4

//一些错误写法示例
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 归纳来说就是每个构造必须是一个可遍历的结构
// 究其本质是通过对象的Iterator接口，只要实现了这个接口，就都可以采用数组形式的解构赋值

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [v21, v22, v23, v24, v25, v26] = fibs();
console.log(v21);//0
console.log(v22);//1
console.log(v23);//1
console.log(v24);//2
console.log(v25);//3
console.log(v26);//5
//这里先了解一下，后面的章节有详细讲


console.log('================默认值================');
let [v27 = true] = [];
console.log(v27);//true

let [v28, v29 = 'b'] = ['a'];
console.log(v28);//a
console.log(v29);//b

//本质是解构赋值中如果是undefined就使用默认值
let [v30 = 1] = [undefined];
console.log(v30);//1

// null!=undefined 所以会正常赋值为null
let [v31 = 1] = [null];
console.log(v31);//null

//复习
console.log(null == undefined);//true
console.log(null === undefined);//false

function f1() {
    console.log('f1');
    return 2;
}

let [v32 = f1()] = [1];
console.log(v32);//1    函数不执行
let [v33 = f1()] = [undefined];
console.log(v33);//2    函数执行

//也可以引用其他的变量，但前提是变量必须声明
let [v34 = 1, v35 = v34] = [];
console.log(v34);//1
console.log(v35);//1

let [v36 = 1, v37 = v36] = [2];
console.log(v36);//2
console.log(v37);//2

// 虽然未声明v39，但是没用到v39给v38赋值
let [v38 = v39, v39 = 2] = [1, 2];
console.log(v38);//1
console.log(v39);//2

// 赋值是undefined，需要用v41给v40赋值，v41未声明，报错
// let [v40 = v41,v41 = 2] = [];//Uncaught ReferenceError: v41 is not defined


























