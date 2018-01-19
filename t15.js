// 数据类型详解

//5大基本类型Undefined、Null、Boolean、Number、String
//1种复杂类型Object

//typeof的返回值有6种
//undefined、boolean、string、number、object、function



console.log('===============================typeof===============================');
var v_undefined = undefined,//undefined
    v_null = null,//object     *这个重点注意
    v_boolean = true,//boolean
    v_num = 10,//number
    v_string = 'abc',//string
    v_obj = {'a':1,'b':'ccc'},//object
    v_func = function(){console.log('v_func');},//function
    v_func_a = ()=>{console.log('v_func_1');},//function
    v_reg = /\w/,//object   *在老版本的chrome和safari中可能返回function
    v_x//undefined
    ;

console.log(typeof v_undefined);//undefined
console.log(typeof v_null);//object     *这个重点注意
console.log(typeof v_boolean);//boolean
console.log(typeof v_num);//number
console.log(typeof v_string);//string
console.log(typeof v_obj);//object
console.log(typeof v_func);//function
console.log(typeof v_func_a);//function
console.log(typeof v_reg);//object   *在老版本的chrome和safari中可能返回function
console.log(typeof v_x);//undefined
// console.log(typeof v_xx);//报错


console.log('===============================undefined===============================');
console.log(null == undefined);//true
console.log(null === undefined);//false


console.log('===============================NaN===============================');
console.log(typeof NaN);//number
console.log(typeof Infinity);//number
console.log(typeof -Infinity);//number

console.log(NaN == NaN);//false
console.log(isNaN(NaN));//true
console.log(isNaN(10));//false
console.log(isNaN('10'));//false 可以转为10
console.log(isNaN('abc'));//true 不能转成数字
console.log(isNaN(true));//false 可以转为1


console.log('===============================Boolean===============================');

console.log('===================boolean类型和字符串的关系===================');
console.log('true' == true);//false
console.log('true' === true);//false
console.log('' == false);//true
console.log('' === false);//false

console.log(Boolean('a') == true);//true
console.log(Boolean('a') === true);//true
console.log(Boolean('') == false);//true
console.log(Boolean('') === false);//true

if('a'){//true
    console.log('if a true');
}

console.log('===================boolean类型和数字的关系===================');
console.log(1 == true);//true
console.log(1 === true);//false
console.log(0 == false);//true
console.log(0 === false);//false

console.log(2 == true);//false
console.log(2 === true);//false

console.log('===============================数值类型转换===============================');
console.log(Number('hello'));//NaN
console.log(Number(''));//0
console.log(Number('000011'));//11
console.log(Number(true));//1

var obj_to_number_1 = {
    'a':1,
    'b':'ccc',
    valueOf:function(){return 10;}
};

console.log(Number(obj_to_number_1));//10


var obj_to_number_2 = {
    'a':1,
    'b':'ccc',
    valueOf:function(){return '00012';},
    toString:function(){return 10;}
};
console.log(Number(obj_to_number_2));//12


var obj_to_number_3 = {
    'a':1,
    'b':'ccc',
    valueOf:function(){return '111abc';},
    toString:function(){return 10;}
};
console.log(Number(obj_to_number_3));//NaN

console.log(obj_to_number_3.valueOf().toString());//111abc
console.log(obj_to_number_3.toString());//10
//这里和书上讲的不同，valueOf解析成NaN以后没有再去调用toString方法，还是我对toString方法的理解有误？


console.log('===============================parseInt===============================');
var parse_num1 = parseInt("1234blue"); // 1234
var parse_num2 = parseInt(""); // NaN
var parse_num3 = parseInt("0xA"); // 10（十六进制数）
var parse_num4 = parseInt(22.5); // 22
var parse_num5 = parseInt("070"); // **ES3:56（八进制数）  *ES5+:70（十进制数）
var parse_num6 = parseInt("70"); // 70（十进制数）
var parse_num7 = parseInt("0xf"); // 15（十六进制数）

console.log(parse_num1);
console.log(parse_num2);
console.log(parse_num3);
console.log(parse_num4);
console.log(parse_num5);
console.log(parse_num6);
console.log(parse_num7);

console.log('===================解决8进制/16进制问题===================');
var parse_2_num0 = parseInt("0xAF", 16); //175
var parse_2_num1 = parseInt("AF", 16); //175
var parse_2_num2 = parseInt("AF"); //NaN
var parse_2_num3 = parseInt("10", 2); //2 （按二进制解析）
var parse_2_num4 = parseInt("10", 8); //8 （按八进制解析）
var parse_2_num5 = parseInt("10", 10); //10 （按十进制解析）
var parse_2_num6 = parseInt("10", 16); //16 （按十六进制解析）

console.log(parse_2_num0);
console.log(parse_2_num1);
console.log(parse_2_num2);
console.log(parse_2_num3);
console.log(parse_2_num4);
console.log(parse_2_num5);
console.log(parse_2_num6);


console.log('===============================字符串===============================');

console.log('===================按进制转换===================');

var num_to_string = 10;
console.log(num_to_string.toString()); // "10"
console.log(num_to_string.toString(2)); // "1010"
console.log(num_to_string.toString(8)); // "12"
console.log(num_to_string.toString(10)); // "10"
console.log(num_to_string.toString(16)); // "a"


console.log('===================强制转换String()===================');
// 如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果；
// 如果值是null，则返回"null"；
// 如果值是undefined，则返回"undefined"。

var string_value1 = 10;
var string_value2 = true;
var string_value3 = null;
var string_value4;
console.log(String(string_value1)); // "10"
console.log(String(string_value2)); // "true"
console.log(String(string_value3)); // "null"
console.log(String(string_value4)); // "undefined"


console.log('===============================对象Object===============================');
var o = new Object();
console.log(o);//{}

