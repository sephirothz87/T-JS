//5     正则的扩展


console.log('=============================RegExp构造函数=============================');
//ES5
let r1 = new RegExp('xyz', 'i');
let r2 = new RegExp(/xyz/i);
let r3 = /xyz/i;
//这三种是一样的
console.log(r1);//  /xyz/i
console.log(r2);//  /xyz/i
console.log(r3);//  /xyz/i

// 顺带提一下，RegExp是引用类型
let r4 = /xyz/i;
console.log(r3 == r4);//false
let r5 = r4;
console.log(r5 === r4);//true

// 但是这样写在ES5就会报错,ES6则不会
let r6 = new RegExp(/xyz/, 'i');
console.log(r6);//  /xyz/i
// 还要注意的是第二个属性会覆盖前面正则的匹配规则
console.log(new RegExp(/xyz/ig, 'i'));//  /xyz/i
console.log(new RegExp(/xyz/i, 'ig'));// /xyz/gi
console.log(new RegExp(/xyz/i, 'g'));//  /xyz/g


console.log('=============================字符串的正则方法=============================');
//字符串的4个方法
//match,replace,search,split
//在ES6中全部变成调用RegExp的实例方法，即所有和正则相关的方法都在RegExp名下了


console.log('=============================u修饰符=============================');
//新增的unicode模式
console.log('\uD83D\uDC2A');//  🐪
console.log(/^\uD83D/u.test('\uD83D\uDC2A')); // false
console.log(/^\uD83D/.test('\uD83D\uDC2A')); // true

//这是一个双字节的unicode字符，如果在ES5中，没有u模式就会按照单字节匹配输出true
//ES6中使用u模式，就能正确区分双字节字符，从而正确test为false

//注意1   点字符对于码点大于FFFF的Unicode字符不能匹配,必须加上u模式
var s1 = '𠮷';
console.log(/^.$/.test(s1)); // false
console.log(/^.$/u.test(s1)); // true

//注意2   ES6中增加了{}表示unicode的方法，如果正则中用了这种方法，\u模式就是unicode表示的大括号，此外则是符号
console.log(/\u{61}/.test('a')); // false
console.log(/\u{61}/u.test('a')); // true
console.log(/\u{20BB7}/u.test('𠮷')); // true

//作为量词则只对码点大于FFFF的字符必须写u
console.log(/a{2}/.test('aa')); // true
console.log(/a{2}/u.test('aa')); // true
console.log(/𠮷{2}/.test('𠮷𠮷')); // false
console.log(/𠮷{2}/u.test('𠮷𠮷')); // true

//\S必须写u才行
console.log(/^\S$/.test('𠮷')); // false
console.log(/^\S$/u.test('𠮷')); // true

//\u212也是大写字母K，这种情况下只用i无法匹配到
console.log(/[a-z]/i.test('\u212A')); // false
console.log(/^\S$/iu.test('𠮷')); // true


console.log('=============================y修饰符=============================');
//黏连匹配
//区别于g模式，g模式匹配到之后就从剩下的部分匹配
//y模式只从剩下部分的第一个值开始匹配
//解释费劲，还是看例子吧

let s2 = 'aaa_aa_a';
let r7 = /a+/g;
let r8 = /a+/y;

console.log(r7.exec(s2));//aaa
console.log(r7.exec(s2));//aa

console.log(r8.exec(s2));//aaa
console.log(r8.exec(s2));//null
//因为y模式下，匹配完aaa后从_开始匹配，匹配不到就返回null了

let r9 = /a+_/y;
console.log(r9.exec(s2));//aaa_
console.log(r9.exec(s2));//aa_
console.log(r9.exec(s2));//null

//在match的时候，y又不再遵循全局匹配的模式了，必须和g连用才行
console.log('a1a2a3'.match(/a\d/y)); // ["a1"]
console.log('a1a2a3'.match(/a\d/gy)); // ["a1", "a2", "a3"]


console.log('=============================sticky属性=============================');
//sticky可以获得正则是否是黏连的
console.log(r7.sticky);//false
console.log(r8.sticky);//true


console.log('=============================flags属性=============================');
//ES5的source属性
console.log(/abc/ig.source);//abc
//ES6增加的flags属性
console.log(/abc/ig.flags);//gi


console.log('=============================s修饰符：dotAll模式=============================');
//.不支持的情况有两种
//一种是刚才提到的双字节Unicode字符无法匹配，ES6给出了u模式解决
//一种是想匹配终止符的情况
// ES6增加了模板字符串，很多情况可能字符串的中间存在终止符
// 如果我们希望匹配到终止符该怎么办呢

console.log(/foo.bar/.test('foo\nbar'));//false
//一种变通的方法
console.log(/foo[^]bar/.test('foo\nbar'));//true
//dotAll模式
console.log(/foo.bar/s.test('foo\nbar'));//true

// dotAll属性
console.log(/foo[^]bar/.dotAll);//false
console.log(/foo[^]bar/s.dotAll);//true
console.log(/foo[^]bar/s.flags);//'s'


console.log('=============================[ES2018]后行断言=============================');
//ES5只支持先行断言，即?=?!这种
//我才知道ES5的正则不支持这种忽略模式,python早就用的飞起了
//后行断言的语法是?<=和?<!
console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill'));//100
console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'));//90

//注意匹配顺序，可能会和正常的结果不同，但是也没谁这么用正则表达式的吧
console.log(/(?<=(\d+)(\d+))$/.exec('1053'));//["", "1", "053"]
console.log(/^(\d+)(\d+)$/.exec('1053'));// ["1053", "105", "3"]


console.log('=============================[ES2018]Unicode属性类=============================');
//和前面有一个例子用[a-z]匹配unicode中另外一个K字母的例子类似
// const r10 = /^\p{Decimal_Number}+$/u;
// console.log(r10.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼'));//true
// chrome不支持这个语法


console.log('=============================[ES2018]具名组匹配=============================');
// 一个匹配后直接分配key的方法，解决了正则匹配出来的东西都在数组里还要单独提取出来命名的麻烦
// const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
//
// const matchObj = RE_DATE.exec('1999-12-31');
// const year = matchObj.groups.year; // 1999
// const month = matchObj.groups.month; // 12
// const day = matchObj.groups.day; // 31
// chrome不支持这个语法


console.log('=============================[ESxxxx]String.prototype.matchAll=============================');
// 目前只是一个提案，用一个语法直接以匹配+遍历结果
// 我觉得学习成本比使用成本高多了

// 理想的效果
// const string = 'test1test2test3';
// const regex = /t(e)(st(\d?))/g;
// for (const match of string.matchAll(regex)) {
//     console.log(match);
// }
// // ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
// // ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
// // ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]


//总结
// 1.RegExp构造函数
// 允许new RegExp(/abc/,'i')这种形式
// 2.字符串的正则方法
// 绑定回了RegExp
// 3.u修饰符
// 主要解决unicode双字节字符的问题
// 4.y修饰符
// 黏连模式
// g是匹配之后再从剩下的匹配
// y是匹配之后再从剩下的开头匹配
// 相当于第二次匹配的时候在正则式的开头加了个^
// 5.sticky属性
// 检查y模式
// 6.flags属性
// ES5并没有获取模式的属性，flags可以实现
// 7.s修饰符：dotAll模式
// 让.可以匹配终结符的模式
// 8.后行断言(ES2018)
// ES5并不支持，只支持前行?= ?!
// 这里的语法是?<= ?<!
// 9.Unicode属性类(ES2018)
// 定义了一些关键字，可以识别unicode中奇怪的数字或者字母形式，让他们依然可以按照数字或字母匹配成功
// 10.具名组匹配(ES2018)
// 让匹配结果可以直接映射到key中，不在只是用数组索引
// 11.String.prototype.matchAll(ESxxxx)
// 一种理想化的语法，可以让正则匹配——映射key值——遍历结果，这一些列操作在一个语法循环体里解决
//
// 吐槽一句ES再这么折腾下去真的要被那些强类型的方言代替了，ES6以后都更新的些什么玩意啊，感觉根本没什么有用的东西