//4 字符串的扩展
//4.7   includes(), startsWith(), endsWith()
//4.8   repeat
//4.9   padStart(),padEnd()
//4.10   matchAll()

console.log('=============================includes(), startsWith(), endsWith()=============================');
//就是几个新的字符串操作的接口
let s1 = 'Hello world!';

console.log(s1.startsWith('Hello'));//true
console.log(s1.endsWith('d!'));//true
console.log(s1.includes('or'));//true
console.log(s1.includes('eli'));//false
console.log(s1.includes('hello'));//false

console.log('================第二个参数================');
//可以接受第二个参数表示搜索的起始位置，注意endsWith是从谁开始反着搜,而不是从后往前索引
console.log(s1.startsWith('wor', 6));//true
console.log(s1.startsWith('wor', 5));//false

console.log(s1.endsWith('d!', 3));//false
console.log(s1.endsWith('ll', 9));//false
console.log(s1.endsWith('ll', 7));//false
console.log(s1.endsWith('ll', 4));//true

console.log(s1.includes('Hello', 5));//false
console.log(s1.includes('world', 5));//true
//简单的理解就是从这个索引截取字符串
//start和include是对截取的第二个字符串再执行
//end是对截取的第一个字符串再执行


console.log('=============================repeat()=============================');


console.log('x'.repeat(3));//xxx
console.log('hello'.repeat(2));//hellohello
console.log('na'.repeat(0));//''

// console.log('na'.repeat(Infinity));//Uncaught RangeError: Invalid count value at String.repeat
// console.log('na'.repeat(-1));//Uncaught RangeError: Invalid count value at String.repeat

//*注意
console.log('na'.repeat(NaN));//''
console.log('na'.repeat(-0.9));//''
console.log('na'.repeat('3'));//'nanana'    视为强转
console.log('na'.repeat('na'));//''         同样视为强转，参数是undefined
console.log('na'.repeat(undefined));//''


console.log('=============================padStart(),padEnd()=============================');
console.log('x'.padStart(5, 'ab'));//ababx
console.log('x'.padStart(4, 'ab'));//'abax'

console.log('x'.padEnd(5, 'ab'));//'xabab'
console.log('x'.padEnd(4, 'ab'));//'xaba'


console.log('xxx'.padStart(3, 'ab'));//'xxx'
console.log('xxx'.padEnd(3, 'ab'));//'xxx'

console.log('abc'.padStart(10, '0123456abc'));//'xxx'
console.log('abc'.padEnd(10, 'abc3456789'));//'xxx'

//不写第二个参数，用空格补齐
console.log('xxx'.padStart(5));//'  xxx'
console.log('xxx'.padEnd(5));//'xxx  '

console.log('================用途1：位数补全================');
console.log('1'.padStart(10, '0'));//'0000000001'
console.log('123'.padStart(10, '0'));//'0000000123'

console.log('================用途2：格式补全================');
console.log('1'.padStart(10, 'YYYY-MM-DD'));//'YYYY-MM-D1'
console.log('89-01-01'.padStart(10, 'YYYY-MM-DD'));//'YY89-01-01'


console.log('=============================matchAll()=============================');
//正则扩展中详细讲