var a = 11;


//每一条要单独运行
// 1
// var b = function(){
//     // var a = 22;//11      //函数声明没有自己的this作用域，打印父级作用域的a
//     // let a = 22;//11      //函数声明没有自己的this作用域，打印父级作用域的a
//     this.a = 22;//22        //函数声明没有自己的this作用域，这一句修改的是父级作用域的a
//     console.log(this);//window
//     console.log(this.a);
// };
//
// b();
//
// console.log(b);
// console.log(window);


// 2
// var c = ()=>{
//     // let a = 22;//11             //函数声明没有自己的this作用域，打印父级作用域的a
//     // var a = 22;//11             //函数声明没有自己的this作用域，打印父级作用域的a
//     this.a = 22;//22            //函数声明没有自己的this作用域，这一句修改的是父级作用域的a
//     console.log(this);//window
//     console.log(this.a);
// };
//
// c();
//
// console.log(c);
// console.log(window);


// 3
// var d = {
//     a:22,//22                    //this的作用域在d内，打印22
//     fd:function(){
//         console.log(this);//d{}
//         console.log(this.a);
//     }
// };
//
// d.fd();
//
// console.log(d);
// console.log(window);


// 4
// var e = {
//     a:22,//11                       //this的作用域在e外，打印window的11
//     fe:()=>{
//         console.log(this);//window
//         console.log(this.a);
//     }
// };
//
// e.fe();
//
// console.log(e);
// console.log(window);


// 5
// function f(){
//     // var a = 22;//11
//     // let a = 22;//11
//     this.a = 22;//11
//     var ff = function(){
//         console.log(this);//window
//         console.log(this.a);
//     };
//     ff();
// }
//
// var xf = new f();
//
// console.log(f);
// console.log(window);


// 6
// function g(){
//     // var a = 22;//undefined
//     // let a = 22;//undefined
//     this.a = 22;//22
//     var fg = ()=>{
//         console.log(this);//g(){}
//         console.log(this.a);
//     };
//     fg();
// }
//
// var gg = new g();
//
// console.log(g);
// console.log(window);


//f和g感觉很没有道理啊
//先这样理解，function(){}是创建时确定this范威，()=>{}是运行时创建，根据创建时的上下文确定this指向
//所以f中   new f()时创建ff，此时上下文的this指向window，于是ff中的this便是window了
//所以g中   new g()后，在调用时fg创建，此时上下文的this指向g(){}方法，于是fg中的this便是g()了

//反向去重新理解b c，无论创建时还是调用时，上下文都是window
//d中function fd的创建时是var d内部，所以function的上下文是d{},this指向d
//e中function fe的调用时在全局，所以上下文是window，this指向window



//那么在e的内部增加一个运行时会怎样呢？
// 7
// var h = {
//     a:22,
//     fh:()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//     },
//     fhh:()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//         h.fh();//window 11
//     },
//     // fhhh:()=>{
//     //     console.log(this);
//     //     console.log(this.a);
//     //     h.fhh();
//     // }
// };
//
// h.fh();
//
// h.fhh();
//结果h内部的运行时的this仍然指向window


// 8
// function i(){
//     this.a = 22;
//     function fi(){
//         console.log(this);
//         console.log(this.a);
//     }
//
//     function fii(){
//         console.log(this);
//         console.log(this.a);
//         fi();
//     }
//
//     fi();
//     fii();
// };
//
// ii = new i();//全部是window 11
// i();//全部是window 22 第一句修改的是window的a


// 9
// function j(){
//     this.a = 22;
//     fj = ()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//     }
//
//     fjj = ()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//         fj();//window 11
//     }
//
//     fj();
//     fjj();
// };
//
// // jj = new j();// 全部是j{} 22   window的a没有被修改
// j();//全部是window 22   window的a被修改


// 10
// k = ()=>{
//     this.a = 22;
//     function fk(){
//         console.log(this);
//         console.log(this.a);
//     }
//
//     function fkk(){
//         console.log(this);
//         console.log(this.a);
//     }
//
//     fk();
//     fkk();
// };
//
// // kk = new k();//箭头函数不能写构造函数 报错
// k();//全部是window 22  window的a被修改


//  11
// k = ()=>{
//     this.a = 22;
//     fk = ()=>{
//         console.log(this);
//         console.log(this.a);
//     }
//
//     fkk=()=>{
//         console.log(this);
//         console.log(this.a);
//     }
//
//     fk();
//     fkk();
// };
//
// // kk = new k();//箭头函数不能写构造函数 报错
// k();//全部是window 22  window的a被修改


// 12
// function f(){
// f = function(){
//     let a = 22;
//
//     console.log(this);
//     console.log(this.a);
//     console.log(a);
//
//     function ff(){
//         console.log(this);
//         console.log(this.a);
//         console.log(a);
//     };
//
//     function fff(){
//         console.log(this);
//         console.log(this.a);
//         console.log(a);
//         ff();
//     };
//
//     ff();
//     fff();
// };

// var ffff = new f();
// 结果
//f()
//f
//undefined
//22

// ff()
//window
//11
//22

//fff()
//window
//11
//22
//ff()
//window
//11
//22



// f();
//结果
//f()
//window
//11
//22

//ff()
//window
//11
//22

//fff()
//window
//11
//22
//f()
//window
//11
//22



// function f(){
// f = function(){
//     let a = 22;
//
//     console.log(this);
//     console.log(this.a);
//     console.log(a);
//
//     ff=()=>{
//         console.log(this);
//         console.log(this.a);
//         console.log(a);
//     };
//
//     fff=()=>{
//         console.log(this);
//         console.log(this.a);
//         console.log(a);
//         ff();
//     };
//
//     ff();
//     fff();
// };

// ffff = new f();
//结果
//f()
//f
//undefined
//22

//ff()
//f
//undefined
//22

// fff()
//f
//undefined
//22
//ff()
//f
//undefined
//22

// f();
//结果
//f()
//window
//11
//22

//ff()
//window
//11
//22

//fff()
//window
//11
//22
//f()
//window
//11
//22

// // function f(){
// f = function(){
//     let a = 22;
//     this.a = 33;
//
//     console.log(this);
//     console.log(this.a);
//     console.log(a);
//
//     function ff(){
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//     };
//
//     function fff(){
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//         ff();//window 11 22
//     };
//
//     ff();
//     fff();
// };
//
// ffff = new f();
//结果
//f()
//f a=33
//33
//22

//ff()
//window a=11
//11
//22

//fff()
//window a=11
//11
//22
//ff()
//window a=11
//11
//22

// f();
//结果
//f()
//window a=33
//33
//22

//ff()
//window a=33
//33
//22

//fff()
//window a=33
//33
//22
//ff()
//window a=33
//33
//22



// // function f(){
// f = function(){
//     let a = 22
//     this.a = 33;
//
//     console.log(this);
//     console.log(this.a);
//     console.log(a);
//
//     ff=()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//     };
//
//     fff=()=>{
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//         ff();//window 11 22
//     };
//
//     ff();
//     fff();
// };

// ffff = new f();
//结果
//f()
//f a=33
//33
//22

//ff()
//f a=33
//33
//22

//fff()
//f a=33
//33
//22
//ff()
//f a=33
//33
//22

// f();
//结果
//f()
//window a=33
//33
//22

//ff()
//window a=33
//33
//22

//fff()
//window a=33
//33
//22
//ff()
//window a=33
//33
//22



// 13
// f = function(){
//     let a = 22
//     this.a = 33;
//
//     console.log("f()");
//     console.log(this);//f(){a:33}
//     console.log(this.a);//33
//     console.log(a);//22
//
//     console.log(typeof this);
//
//     function f1(){
//         console.log("f1()");
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//     };
//
//     function f2(){
//         console.log("f2()");
//         console.log(this);//window
//         console.log(this.a);//11
//         console.log(a);//22
//         f1();
//     };
//
//     f3=()=>{
//         console.log("f3()");
//         console.log(this);//f(){a:33}
//         console.log(this.a);//33
//         console.log(a);//22
//     };
//
//     f4=()=>{
//         console.log("f4()");
//         console.log(this);//f(){a:33}
//         console.log(this.a);//33
//         console.log(a);//22
//         f3();
//     };
//
//     fobj = {
//         a:44,
//         b:this,//f{a:33}
//         logb:function(){
//             console.log("logb()");
//             console.log(this.b);//f{a:33}
//         },
//         objf1:function(){
//             console.log("objf1()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//         },
//         objf2:function(){
//             console.log("objf2()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//             fobj.objf1();
//         },
//         objf3:()=>{
//             console.log("objf3()");
//             console.log(this);//f{a:33}
//             console.log(this.a);//33
//             console.log(a);//22
//         },
//         objf4:()=>{
//             console.log("objf4()");
//             console.log(this);//f{a:33}
//             console.log(this.a);//33
//             console.log(a);//22
//             fobj.objf3();
//         },
//     };
//
//     f1();
//     f2();
//     f3();
//     f4();
//
//     fobj.logb();
//
//     fobj.objf1();
//     fobj.objf2();
//     fobj.objf3();
//     fobj.objf4();
// };
//
// ff = new f();
//
// console.log(ff);//f
//
// console.log(typeof f);//function
// console.log(typeof ff);//object
// // ff();//报错，无法调用





// f = function(){
//     let a = 22
//     this.a = 33;
//
//     console.log("f()");
//     console.log(this);//window a =33
//     console.log(this.a);//33
//     console.log(a);//22
//
//     function f1(){
//         console.log("f1()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//     };
//
//     function f2(){
//         console.log("f2()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//         f1();
//     };
//
//     f3=()=>{
//         console.log("f3()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//     };
//
//     f4=()=>{
//         console.log("f4()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//         f3();
//     };
//
//     fobj = {
//         a:44,
//         b:this,//window
//         logb:function(){
//             console.log("logb()");
//             console.log(this.b);//window
//         },
//         objf1:function(){
//             console.log("objf1()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//         },
//         objf2:function(){
//             console.log("objf2()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//             fobj.objf1();
//         },
//         objf3:()=>{
//             console.log("objf3()");
//             console.log(this);//window
//             console.log(this.a);//33
//             console.log(a);//22
//         },
//         objf4:()=>{
//             console.log("objf4()");
//             console.log(this);//window
//             console.log(this.a);//33
//             console.log(a);//22
//             fobj.objf3();
//         },
//     };
//
//     f1();
//     f2();
//     f3();
//     f4();
//
//     fobj.logb();
//
//     fobj.objf1();
//     fobj.objf2();
//     fobj.objf3();
//     fobj.objf4();
// };
//
// f();

//这里得到的一个规律是
//常规函数的this指向无论实在函数声明还是函数调用中都不会改变，该指向本体就指向本体，该指向window就指向window
//箭头函数则不同，在函数声明中，都可以指向函数本体，在函数调用中则全都指向window





// f = ()=>{
//     let a = 22
//     this.a = 33;
//
//     console.log("f()");
//     console.log(this);//window a =33
//     console.log(this.a);//33
//     console.log(a);//22
//
//     function f1(){
//         console.log("f1()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//     };
//
//     function f2(){
//         console.log("f2()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//         f1();
//     };
//
//     f3=()=>{
//         console.log("f3()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//     };
//
//     f4=()=>{
//         console.log("f4()");
//         console.log(this);//window
//         console.log(this.a);//33
//         console.log(a);//22
//         f3();
//     };
//
//     fobj = {
//         a:44,
//         b:this,//window
//         logb:function(){
//             console.log("logb()");
//             console.log(this.b);//window
//         },
//         objf1:function(){
//             console.log("objf1()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//         },
//         objf2:function(){
//             console.log("objf2()");
//             console.log(this);//obj {a:44}
//             console.log(this.a);//44
//             console.log(a);//22
//             fobj.objf1();
//         },
//         objf3:()=>{
//             console.log("objf3()");
//             console.log(this);//window
//             console.log(this.a);//33
//             console.log(a);//22
//         },
//         objf4:()=>{
//             console.log("objf4()");
//             console.log(this);//window
//             console.log(this.a);//33
//             console.log(a);//22
//             fobj.objf3();
//         },
//     };
//
//     f1();
//     f2();
//     f3();
//     f4();
//
//     fobj.logb();
//
//     fobj.objf1();
//     fobj.objf2();
//     fobj.objf3();
//     fobj.objf4();
// };
//
// f();

//箭头函数没有函数声明的情况
//函数调用的情况跟普通函数的this作用域完全一样


obj = {
    a: 44,
    b: this,//window
    logb: function () {
        console.log("logb()");
        console.log(this.b);//window
    },
    objf1: function () {
        console.log("objf1()");
        console.log(this);//obj {a:44}
        console.log(this.a);//44
        console.log(a);//11
    },
    objf2: function () {
        console.log("objf2()");
        console.log(this);//obj {a:44}
        console.log(this.a);//44
        console.log(a);//11
        obj.objf1();
    },
    objf3: () => {
        console.log("objf3()");
        console.log(this);//window
        console.log(this.a);//11
        console.log(a);//11
    },
    objf4: () => {
        console.log("objf4()");
        console.log(this);//window
        console.log(this.a);//11
        console.log(a);//11
        obj.objf3();
    },
    objf5: function () {
        this.logb();//window
    }
};

obj.logb();
obj.objf1();
obj.objf2();
obj.objf3();
obj.objf4();
obj.objf5();


//这样理解可不可以呢？
//普通函数————无论是在函数声明还是函数调用中，this永远指向当前调用的主体，window调用就是window，obj调用就是obj
//箭头函数————函数对象声明中，this指向函数本体，调用中，指向调用的主体？？？？

//还是很混乱啊
//这里必须搞懂，通畅在此一举