// 4.2 执行环境及作用域


console.log('===============================例子1===============================');
var color = "blue";

function changeColor() {
    if (color === "blue") {
        color = "red";
    } else {
        color = "blue";
    }
}
changeColor();
console.log("Color is now " + color); //Color is now red


console.log('===============================例子2===============================');
var color_2 = "blue";

function changeColor2() {
    var anotherColor = "red";

    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color_2;
        color_2 = tempColor;
        // 这里可以访问color、anotherColor 和tempColor
    }

    // 这里可以访问color 和anotherColor，但不能访问tempColor
    swapColors();
}

// 这里只能访问color
changeColor2();
console.log("Color is now " + color_2); //Color is now red

//直观理解即可
//作用域
//window：color_2
//changeColor:anotherColor
//swapColors:tempColor


console.log('===============================ES5没有块级作用域===============================');
//变量提升
if (true) {
    var color_block = "blue";
}
console.log(color_block); //blue

for (var i = 0; i < 10; i++) {;
}
console.log(i); //10

//理解：var的作用域不跟代码块走

//声明
console.log('===============================变量声明===============================');

function block() {
    var color_block_2 = 'red';
}
// console.log(color_block_2);//报错
block();
// console.log(color_block_2);//报错


function block_3() {
    color_block_3 = 'red';
}
// console.log(color_block_3);//报错
block_3();
console.log(color_block_3); //red
//变量提升到全局


console.log('===============================查询标识符===============================');
var color_s_1 = "blue";

function getColorS1() {
    return color_s_1;
}
console.log(getColorS1()); //"blue"


var color_s_2 = "blue";

function getColorS2() {
    var color_s_2 = "red";
    return color_s_2;
}
console.log(getColorS2()); //"red"

//理解：作用域内，访问一个变量时优先选择作用域内部有的变量，没有，再向上一级作用域去查找