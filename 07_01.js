// 7.1  递归

console.log('===============================函数声明和函数表达式===============================');

// 这种写法非常不推荐，要用函数表达式，不要用声明
// if(condition){
//     function sayHi(){
//         alert("Hi!");
//     }
// } else {
//     function sayHi(){
//         alert("Yo!");
//     }
// }


console.log('===============================在递归中活用callee===============================');
function factorial1(num){
    if (num <= 1){
        return 1;
    } else {
        return num * factorial1(num-1);
    }
}

function factorial2(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}

console.log(factorial1(5));//120
console.log(factorial2(5));//120