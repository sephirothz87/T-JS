//4 字符串的扩展
//4.11  模板字符串
//4.12  实例：模板编译
//4.13  标签模板

console.log('=============================模板字符串=============================');
//最核心的两个用途
//简化html拼接，简化字符串和变量的拼接
let basket = {count: 10, onSale: 'yes'};
h1 = 'There are <b>' + basket.count + '</b> ' +
    'items in your basket, ' +
    '<em>' + basket.onSale +
    '</em> are on sale!';

h2 = `There are 
        <b>${basket.count}</b>
        items in your basket, 
        <em>${basket.onSale}</em>
        are on sale!`;

console.log(h2);//可以看到换行和缩进都被保留

//反引号需要转义
console.log(`hello \`world\``);//hello `world`


h3 = `
          There are 
        <b>${basket.count}</b>
        items in your basket, 
        <em>${basket.onSale}</em>
        are on sale!    `;
// 同样支持trim()
console.log(h3.trim());//句首的回车和空格都被消除，句尾的空格也被消除
//复习一下trim是否改变原值
console.log(h3);

//也可以加入表达式和函数调用，总之${}内就理解为一个js的运行时，但要保证是一个值才能赋给字符串

let n1 = 100,
    n2 = 200,
    s1 = 'a1',
    o1 = {p1: 'p1', p2: 300},
    f1 = () => {
        return 'f1'
    },
    f2 = (x, y) => {
        return x * y
    };
a1 = [1, 2, 3]

console.log(`模板字符串：${n1 + n2}`);//300
console.log(`模板字符串：${s1}`);//a1
console.log(`模板字符串：${s1 + n1}`);//
console.log(`模板字符串：${o1.p1}`);//p1
console.log(`模板字符串：${o1}`);//[object Object]
console.log(`模板字符串：${o1.valueOf()}`);//[object Object]
console.log(`模板字符串：${f1()}`);//f1
console.log(`模板字符串：${f2(3, 5)}`);//15
console.log(`模板字符串：${f2(3, 6)}`);//18
console.log(`模板字符串：${a1}`);//1,2,3
console.log(`模板字符串：${a1.toString()}`);//1,2,3
console.log(`模板字符串：${a1.valueOf()}`);//1,2,3

//值得关注的是o1即使调用了valueOf，还是打印了toString的值
logAll(o1);
console.log(o1);//{p1: "p1", p2: 300}
console.log(o1.valueOf());//{p1: "p1", p2: 300}
console.log(`模板字符串：${o1.valueOf()}`);//[object Object]
//上面这个理解非常错误，这里的原因其实是发生了强转，强转则必然是toString
console.log(`${o1}`);//[object Object]
console.log(`${o1.valueOf()}`);//[object Object]
//这两个地方依然打印的是//[object Object],可以理解为只要用了模板字符串，强转就发生了
//并且从o1.valueOf的例子看来，这种强转还修改了底层的某些方法，让符合对象/数组标准的字符串都当做对象进行了toString的强转
logAll(a1);

//嵌套
s2 = 's2';
s3 = `s3${s2}`;
s4 = `s4${s3}`;

console.log(s4);//s4s3s2
console.log(`s4:${s4}
s3:${s3}
s2:${s2}
`);
// s4:s4s3s2
// s3:s3s2
// s2:s2

//引用模板字符串本身
//可以用作函数初始化、或者用在eval中、当然这两种方法根本不推荐
let s5 = 'return `Hello ${name}`';
console.log(s5);//return `Hello ${name}`
let f3 = new Function('name', s5);
console.log(f3('Jack'));//Hello Jack

let s6 = '(name) => `Hello ${name}`';
let f4 = eval.call(null, s6);
console.log(f4('Jack'));//Hello Jack


console.log('=============================实例：模板编译=============================');

//比如想在一个框架里做一个模板的功能，可以在html标签中嵌入js代码，或者变量
let template = `<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template) {
    // 再加上正则表达式
    let evalExpr = /<%=(.+?)%>/g;
    let expr = /<%([\s\S]+?)%>/g;
    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    //把template封装到一个函数中
    let scrpt =
        `(function parse(data){
            let output = "";
    
            function echo(html){
                output += html;
            }
    
            ${ template }
    
            return output;
        })`;

    return scrpt;
}

//就巧妙的形成了一个编译模板的功能
let parse = eval(compile(template));
console.log(parse({supplies: ["broom", "mop", "cleaner"]}));
// <ul>
//
//     <li>broom</li>
//
//     <li>mop</li>
//
//     <li>cleaner</li>
//
// </ul>


console.log('=============================标签模板=============================');
// 首先语法上可以这样写
console.log`123`;//["123", raw: Array(1)]
// alert`123`;//123

//可以看到这样并没有问题
console.log((`123`).valueOf());//123
console.log(`123`);//123
console.log`'123'`;//["'123'", raw: Array(1)]

let a3 = [1, 2, 'a', 'b'];
logAll(a3);

console.log`a3`;//["a3", raw: Array(1)]
console.log`${a3}`;//(2) ["", "", raw: Array(2)] (4) [1, 2, "a", "b"]

//用alert看还好，用console看就很迷

let f5 = function (x) {
    console.log(x);
    // alert(x);
};

f5('a');//a
f5({a: 'a'});//{a: "a"}
f5`a`;//["a", raw: Array(1)]

//只能说除了alert还是不要这样用了

let n3 = 5,
    n4 = 10;
f5`Hello ${ n3 + n4 } world ${ n3 * n4 }`;//["Hello ", " world ", "", raw: Array(3)]

// 也就是说f``这种规则就是，把模板字符串中的纯字符作成一个

//按照书上说的模板字符串做参数的形式
//本质上是把纯字符拆开作成数组，这个数组是第一个参数，${}模板部分依次作成后面几个参数传给函数

//从实际来看，浏览器支持的不好，不要这样用

let f6 = function () {
    for (let key in arguments) {
        console.log(arguments[key]);
    }
};

f6('a');//a
f6({a: 'a'});//{a: "a"}
f6`a`;//["a", raw: Array(1)]
//得嘞，压根就是个扯鸡巴蛋的写法


console.log('=============================String.raw()=============================');
//一个可以自动给字符串中\加强转\的方法

console.log(String.raw`Hi\n${2 + 3}!`);//Hi\n5!
// 返回 "Hi\\n5!"

console.log(String.raw`Hi\u000A!`);//Hi\u000A!
// 返回 "Hi\\u000A!"
// 可以不用自己强转打印\了，如果\很多还是很好用的，例子当然比较简单了