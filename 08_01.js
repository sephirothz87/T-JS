//  8   BOM
//  8.1 window


console.log('===============================两种定义方法的区别===============================');
var a = 10;
console.log(window.a);//10
console.log(this.a);//10

delete window.a;//无法删除，IE9以前会报错，表达式的值是false
// console.log(delete window.a);//false
console.log(window.a);//10
console.log(this.a);//10


window.b = 5;

console.log(window.b);//5
console.log(this.b);//5
delete window.b;
// console.log(delete window.b);//true
console.log(window.b);//undefined
console.log(this.b);//undefined


// console.log(b);//报错

//这里引入一个概念
// 直接引用变量属于内存查询，不存在则报错
// 而window.b这种属于对象内查询，不存在该属性则返回undefined



// 可以简单的理解为window下面的各种方法，location之类的，就是BOM
// console   alert    这些都是和浏览器打交道的命令



















