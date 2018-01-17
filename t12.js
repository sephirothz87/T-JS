//通常写法
// function Person(){
//     this.say = (x) => {console.log('person say ' + x);};
//     this.dosth = (x) => {console.log('person do ' + x);};
// }
//
// Person.prototype.init = () => {};
// Person.prototype.p_say = (x) => {console.log('person prototype say ' + x);};
// Person.prototype.p_dosth = (x) => {console.log('person prototype do ' + x);};
//
// var p = new Person();
// p.say('x');
// p.p_say('x');

//jQuery语法糖
;
(function(){

    Person = function(n){
        return new Person.fn.init(n);
    };

    Person.fn = Person.prototype = {
        name:'default',
        constructor:Person,
        //构造函数不能用箭头函数
        init:function(n){this.name = n;return this;},
        say:function(x){console.log(this.name + ' say ' + x);},//好用
        dosth:function(x){console.log(this.name + ' do ' + x);}//好用
        // say:(x)=>{console.log(this);console.log(this.name + ' say ' + x);},//this是window，想深入了解下如果在这种情况，想让箭头函数的this指向Person的name该如何做呢？
        // dosth:(x)=>{console.log(this);console.log(this.name + ' do ' + x);}//this是window
        // 最简单的理解
        // 1.箭头函数是运行时生成，this就是父级代码块的this，所以这里的写法，父级就是(function(){})这个立即执行函数，在window内，即window
        // 2.如果是function()={var f=()=>{}}这种方式定义的箭头函数，则箭头函数内的this即指向function的this
        // 再做一个t13来帮助理解箭头函数中的this吧
    };

    Person.fn.init.prototype = Person.fn;

    if ( typeof window === "object" && typeof window.document === "object" ) {
        window.Person = window.$ = Person;
    }

})(window);



console.log(Person);
console.log(Person('Beckham'));

Person('Beckham').say('hello');
Person('Beckham').dosth('soccer');

$('Beckham').say('hello');
$('Beckham').dosth('soccer');
