//4 字符串的扩展
//4.1   字符的Unicode用法
//4.2   codePointAt()
//4.3   String.fromCodePoint()
//4.4   字符串的遍历器接口
//4.5   at()
//4.6   normalize()


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

console.log(hell\u
{
    6
    f
}
)
;//456
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


console.log('=============================codePointAt()=============================');

let s1 = '𠮷';

console.log(s1.length);//1
console.log(s1.charAt(0));//�
console.log(s1.charAt(1));//�
console.log(s1.charCodeAt(0));//55362
console.log(s1.charCodeAt(1));//57271

let s2 = '𠮷a';
console.log(s2.codePointAt(0));//134071
console.log(s2.codePointAt(1));//57271
console.log(s2.codePointAt(2));//97
//也就是说传统的charAt和charCodeAt是严格按照字节来的
//codePoint则0是'𠮷'，1是'𠮷'的第二个字节
//也就是先按字节来，如果识别到是一个字符，则返回整个字符码，不是或者是一部分，则返回字节码

console.log(s2.codePointAt(0).toString(16));//20bb7
console.log(s2.codePointAt(1).toString(16));//dfb7
console.log(s2.codePointAt(2).toString(16));//61


console.log('================如果想做循环怎么办呢？================');
//但是如果想做循环怎么办呢？
//可以用for...of语句
for (let ch of s2) {
    console.log(ch);
    console.log(ch.codePointAt(0).toString(16));
}
//𠮷 20bb7
//a 61
// 可以按照想要的方式去循环了


console.log('================判断一个字符是2字节还是4字节================');

function f1(ch) {
    return ch.codePointAt(0) > 0xFFFF;
}

console.log(f1('𠮷'));//true
console.log(f1('a'));//false


console.log('=============================String.fromCodePoint()=============================');
//ES5的写法
console.log(String.fromCharCode(0x20BB7));//ஷ
console.log(String.fromCodePoint(0x20BB7));//𠮷


console.log('================字符串的遍历器接口================');
for (let codePoint of 'foo') {
    console.log(codePoint);
}
//f  o  o

//还有就是上面说过的,识别多位字符的码点
let s3 = String.fromCodePoint(0x20BB7);
for (let i = 0; i < s3.length; i++) {
    console.log(s3[i]);
}
//�  �

for (let ch of s3) {
    console.log(ch);
}
//𠮷


console.log('=============================at()=============================');
//ES5的charAt
console.log('abc'.charAt(0));//a
console.log('𠮷'.charAt(0));//�

//ES6的at
// console.log('abc'.at(0));//a
// console.log('𠮷'.at(0));//𠮷
// 提案中，并不能直接执行
// 暂时还是先用charCodeAt(0).toString()的方式


console.log('=============================normalize()=============================');
//知道是对欧洲语言各种重音符号的一个解决方案就好
//用的是字母+符号合成双字节Unicode的方式