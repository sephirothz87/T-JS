//4 字符串的扩展
//4.1   字符的Unicode用法


console.log('=============================字符的Unicode用法=============================');
//JS允许用'\uxxxx'形式表示字符，xxxx是Unicode
//ES5的xxxx只支持4位，即0000-FFFF，超出范围就用两个字节

console.log('\u0061');//a
console.log('\u0061\u0062');//ab
console.log('\uD842\uDFB7');//𠮷
console.log('\u00617');//a7     这里被解析成了\u0061+7
console.log('\u20BB7');//₻7     这里被解析成了\u20BB+7

//ES6可以通过大括号来正确解读
console.log('\u{20BB7}');//𠮷
console.log('\u{41}\u{42}\u{43}');//ABC

//直接用unicode当代码也可以
let hello = 456;
console.log(hell\u{6f});//456

console.log('\u{20BB7}' === '\uD842\uDFB7');//true
console.log('\u{1f680}' === '\ud83d\ude80');//true

//茴香豆的茴字有多少种写法？
//不是，JS一个字符有多少种表示方法？
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7a' === 'z');
console.log('\u007a' === 'z');
console.log('\u{7a}' === 'z');
console.log('z' === 'z');
//全是true
//共计6种












