var obj = {
    a : ' a ',
    'b' : ' b ',
    c : function(){console.log(' c ')},
    'd' : function(){console.log(' d ')},
    e : function(x){console.log(' e ' + x)},
    'f' : function(x){console.log(' f ' + x)},
    g : (x) => {console.log(' g ' + x)},
    'h' : (x) => {console.log(' h ' + x)},
    // 1i : ' i ',  //不可以这样写,报错
    '2j' : ' j ',
    // 3k : function(x){console.log(' k ') + x},  //不可以这样写,报错
    '4l' : function(x){console.log(' l ' + x)},
}

///////////////////////////////////////////////////////////////
console.log(obj.a)//a
console.log(obj.b)//b
console.log(obj.c)//function(){xxxxx}
console.log(obj.d)//function(){xxxxx}
console.log(obj.e)//function(){xxxxx}
console.log(obj.f)//function(){xxxxx}
console.log(obj.g)//(x)=>{xxxx}
console.log(obj.h)//(x)=>{xxxx}

// console.log(obj.2j)//不可以这样写,报错
// console.log(obj.4l)//不可以这样写,报错
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
// console.log(obj[a])//不可以这样写,报错
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
console.log(obj['a'])//a
console.log(obj['b'])//b
console.log(obj['c'])//function(){xxxxx}
console.log(obj['d'])//function(){xxxxx}
console.log(obj['e'])//function(){xxxxx}
console.log(obj['f'])//function(){xxxxx}
console.log(obj['g'])//(x)=>{xxxx}
console.log(obj['h'])//(x)=>{xxxx}
console.log(obj['2j'])//j
console.log(obj['4l'])//function(){xxxxx}
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
obj.c();//c
obj.d();//d
obj.e('x');//e x
obj.f('x');//f x
obj.g('x');//g x
obj.h('x');//h x

// obj.4l(x);//不可以这样写,报错
///////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////
obj['c']();//c
obj['d']();//d
obj['e']('x');//e x
obj['f']('x');//f x
obj['g']('x');//g x
obj['h']('x');//h x
obj['4l']('x');//4l x
///////////////////////////////////////////////////////////////