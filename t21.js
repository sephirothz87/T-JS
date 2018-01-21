// 5.2  数组


console.log('===============================例子1===============================');
console.log([1,2,]);
console.log([,,,,,]);
//不建议这两种写法，有些浏览器会创建出长度不定的数据，在各个浏览器中的表现也可能不一样


console.log('=============================例子2=============================');
console.log('数组的扩展');

var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors.length = 2;
console.log(colors[2]); //undefined'
console.log((colors));// ["red", "blue"]

var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors.length = 4;
console.log(colors[3]); //undefined
console.log((colors)); //["red", "blue", "green", undefined]


var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors[colors.length] = "black"; //（在位置3）添加一种颜色
colors[colors.length] = "brown"; //（在位置4）再添加一种颜色

console.log((colors)); //["red", "blue", "green", "black", "brown"]

var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors[99] = "black"; // （在位置99）添加一种颜色
console.log(colors.length); // 100
//在这个例子中，我们向colors 数组的位置99 插入了一个值，结果数组新长度（length）就是100
//（99+1）。而位置3 到位置98 实际上都是不存在的，所以访问它们都将返回undefined。

console.log('=============================检测数组=============================');

// 第一时间我们会想到instanceof，这个没问题

var colors = ["red", "blue", "green"];
console.log(colors instanceof Array);//true

//但是需要注意，在大型项目中，部分JS代码可能在两个运行时下
//比如1个在浏览器里，1个在nodejs下，这两个Array的版本可能不同
//那么我用浏览器的Array创建了数组a，nodejs的Array就不在a的原型链中
//判断a是否是数组，还需要通过某种方式把浏览器的Array引入

//为了解决这个问题，大部分高级浏览器提供了isArray()这个方法，建议使用这个
console.log(Array.isArray(colors));//true


console.log('=============================数组转换=============================');

var colors = ["red", "blue", "green"];

console.log(colors);//["red", "blue", "green"]
console.log(colors.valueOf());//["red", "blue", "green"]
console.log(colors.toString());//red,blue,green
console.log(colors.toLocaleString());//red,blue,green

// alert(colors);//red,blue,green
// alert(colors.toString());//red,blue,green
// alert(colors.valueOf());//red,blue,green

console.log('===================tips===================');
//ps:这里一个引申的知识点，console打印的是valueof，alert打印的是toString

colors.toString = ()=>{return 'i am toString';};
colors.valueOf = ()=>{return 'i am valueOf';};

console.log(colors);//["red", "blue", "green"]
console.log(colors.toString());//i am toString
console.log(colors.valueOf());//i am valueOf

console.log('===================理解toLocalString===================');
var person1 = {
    toLocaleString : function () {
        return "Nikolaos";
    },
    toString : function() {
        return "Nicholas";
    }
};
var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },
    toString : function() {
        return "Greg";
    }
};
var people = [person1, person2];
// alert(people); //Nicholas,Greg
// alert(people.toString()); //Nicholas,Greg
// alert(people.toLocaleString()); //Nikolaos,Grigorios

console.log(people); //[{...},{...}]
console.log(people.toString()); //Nicholas,Greg
console.log(people.toLocaleString()); //Nikolaos,Grigorios
console.log(people.valueOf()); //[{...},{...}]


// console.log('===================tips===================');
// people.toString = ()=>{return 'this is toString';};
// people.toLocaleString = ()=>{return 'this is toLocaleString';};
//
// // alert(people.toString()); //this is toString
// // alert(people.toLocaleString()); //this is toLocaleString
//
// console.log(people.toString()); //this is toString
// console.log(people.toLocaleString()); //this is toLocaleString

console.log('===================快捷修改toString的分隔符===================');
var colors = ["red", "green", "blue"];
console.log(colors.join(",")); //red,green,blue
console.log(colors.join("||")); //red||green||blue


console.log(people.join(",")); //Nicholas,Greg
console.log(people.join("||")); //Nicholas||Greg
console.log(people.join("||").toLocaleString()); //Nicholas||Greg


console.log('===================栈方法===================');
// 栈方法  push和pop
var colors = new Array(); // 创建一个数组
var count = colors.push("red", "green"); // 推入两项
console.log(count); //2
console.log(colors); //(2) ["red", "green"]

count = colors.push("black"); // 推入另一项
// console.log(count); //2
console.log(colors); //(3) ["red", "green", "black"]

var item = colors.pop(); // 取得最后一项
console.log(item); //black
console.log(colors); //(2) ["red", "green"]

console.log('===================队列方法===================');
// 队列方法 push、shift、unshift
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
console.log(count); //2
console.log(colors); //(2) ["red", "green"]

count = colors.push("black"); //推入另一项
console.log(count); //3
console.log(colors); //(3) ["red", "green", "black"]

var item = colors.shift(); //取得第一项
console.log(item); //red
console.log(colors); //(2) ["green", "black"]

var count = colors.unshift("red", "green"); //推入两项
console.log(count); //4
console.log(colors); //(4) ["red", "green", "green", "black"]

console.log('===================排序方法===================');
var values = [1, 2, 3, 4, 5];
values.reverse();
console.log(values); //(5) [5, 4, 3, 2, 1]

var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); //(5) [0, 1, 10, 15, 5]

var values = [0, 1, 5, 10, 15];
values.sort((x,y)=>{return x-y;});
console.log(values);//(5) [0, 1, 5, 10, 15]

var values = [0, 1, 5, 10, 15];
values.sort((x,y)=>{return y-x;});
console.log(values);//(5) [15, 10, 5, 1, 0]
//原理，sort的默认比较函数是取两个值的valueOf作差，所以10<5
//将比较函数修改为值差即可

console.log('===================操作方法===================');
console.log('============concat============');
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); //red,green,blue
console.log(colors2); //red,green,blue,yellow,black,brown

console.log('============slice============');
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
var colors4 = colors.slice(-3,-1);
console.log(colors2); //green,blue,yellow,purple
console.log(colors3); //green,blue,yellow
console.log(colors4); //blue,yellow


console.log('============splice============');
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，返回的数组中只包含一项

removed = colors.splice(1, 0, "yellow", "orange"); // 从位置1 开始插入两项
console.log(colors); // green,yellow,orange,blue
console.log(removed); // 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
console.log(colors); // green,red,purple,orange,blue
console.log(removed); // yellow，返回的数组中只包含一项


console.log('===================位置方法===================');
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4)); //3
console.log(numbers.lastIndexOf(4)); //5
console.log(numbers.indexOf(3, 4)); //6 从第4位开始查找3
console.log(numbers.lastIndexOf(3, 4)); //2 从第4位开始反向查找3

var person = { name: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];
console.log(people.indexOf(person)); //-1
console.log(morePeople.indexOf(person)); //0    //值引用


console.log('===================迭代方法===================');

/*
 every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
 filter()：对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组。
 forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
 map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
 some()：对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。*/

var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});
console.log(everyResult);//false

var everyResult2 = numbers.every(function(item, index, array){
    return (item > 0);
});
console.log(everyResult2);//true

var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
console.log(someResult);//true

var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);//(5) [3, 4, 5, 4, 3]

var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});
console.log(mapResult);//(9) [2, 4, 6, 8, 10, 8, 6, 4, 2]

var forEachResult = numbers.forEach(function(item, index, array){
    array[index] = item * 2;
    return item * 2;
});
console.log(forEachResult);//undefined  没有返回值
console.log(numbers);//(9) [2, 4, 6, 8, 10, 8, 6, 4, 2]


console.log('===================归并方法===================');

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    // console.log(prev);//1 3 6 10
    return prev + cur;
});
console.log(sum);//15

var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
    console.log(prev);//5 9 12 14
    return prev + cur;
});
console.log(sum);//15

//prev是上一次的返回值或数组第一个元素
//cur是当前元素
//index是数组下标
//array是数组本身
//reduceRight道理相同，方向相反
















