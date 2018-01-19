// function foo() {
//     console.log(this);
//     console.log("id:", this.id);
//     setTimeout( () => {
//         console.log("id:", this.id);
//     },100);
// }
//
//
// // foo();
// // window
// // id: undefined
// // id: undefined
//
//
// foo.call( { id: 42 } );
// // {id:42}
// // id: 42
// // id: 42
//
// //也就是说call方法会自动把后面的参数绑定到函数的this



// function foo() {
//     console.log(this);
//     console.log("id:", this.id);
//     setTimeout( function() {//把箭头函数改成普通函数
//         console.log(this);
//         console.log("id:", this.id);
//     },100);
// }
//
// // foo();
// // // window
// // // id: undefined
// // // id: undefined
// //和上一个一样
//
// foo.call( { id: 42 } );
// // {id:42}
// // id: 42
// // window
// // id: undefined //这里出现了偏差,因为在setTimeout中this的作用域发生了变化，变成了window

//想正常使用，需要像这样修改，强行绑定this

// function foo() {
//     console.log(this);
//     console.log("id:", this.id);
//     var _this = this;
//
//     setTimeout(function() {
//         console.log(_this);
//         console.log("id:", _this.id);
//     },100);
// }

//可以用一个变量先把this保存下来，jQuery中好像有这样的用法


// 更好的方式是
// function foo() {
//     console.log(this);
//     console.log("id:", this.id);
//     setTimeout(function() {
//         console.log(this);
//         console.log("id:", this.id);
//     }.bind(this),100);
// }

//可以理解为强行将setTimeout的this绑定到foo的this上，保证了setTimeout中匿名函数调用时引用的this还是foo的this

// foo.call( { id: 42 } );
// {id:42}
// id: 42
// {id:42}
// id: 42



// function foo() {
//     console.log("level 1");
//     console.log(this);
//     console.log("id:", this.id);
//     return () => {
//         console.log("level 2");
//         console.log(this);
//         console.log("id:", this.id);
//         return () => {
//             console.log("level 3");
//             console.log(this);
//             console.log("id:", this.id);
//             return () => {
//                 console.log("level 4");
//                 console.log(this);
//                 console.log("id:", this.id);
//             };
//         };
//     };
// }
//
// foo.call( { id: 42 } )()()();
// level 1
// {id:42}
// id: 42

// level 2
// {id:42}
// id: 42

// level 3
// {id:42}
// id: 42

// level 4
// {id:42}
// id: 42

//this的绑定只在foo中执行一次




function foo() {
    setTimeout( () => {
        console.log("args:", arguments);//args: [2, 4, 6, 8]
    },100);
}

// function foo() {
//     setTimeout( function() {
//         console.log("args:", arguments);//args:Arguments
//     },100);
// }

foo( 2, 4, 6, 8 );
//不止是this，arguments同理




