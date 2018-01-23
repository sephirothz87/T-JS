//一个理解形参的小例子，包含了函数的length和arguments的length的区别

function f(num1,num2){
    console.log(arguments);

    console.log(num1);
    console.log(num2);
}

console.log(f.length);//2   形参个数

f(1,2,3);
//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//1
//2

f(1);
// Arguments [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 1
// undefined

function f2(num1,num2){
    console.log(arguments);

    console.log(num1);
    console.log(num2);

    arguments[0] = 1000;
    arguments[1] = 2000;
    arguments[3] = 3000;
    arguments[4] = 4000;

    num1 = 1;
    num2 = 2;

    console.log(arguments);
}


var fnum1 = 100,
    fnum2 = 200,
    fnum3 = 300;


f2(fnum1,fnum2);
//Arguments(2) [100, 200, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//100
//200
//Arguments(2) [1, 2, 3: 3000, 4: 4000, callee: ƒ, Symbol(Symbol.iterator): ƒ]

console.log(fnum1);//100
console.log(fnum2);//200
//实参没有改变

//结论是arguments和实参完全等价，教学视频里的说法是错误的

//又看了一遍视频，视频里应该是这个意思
//arguments是你给函数传了几个实参，他就带了几个形参过来，并不能说arguments是实参
//或者这样理解，实参就是函数调用时候的那几个参数，arguments也是一份复制而已
//而函数的长度，只看函数声明里面形参的个数

