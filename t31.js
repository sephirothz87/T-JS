// 字符串专场


console.log('===============================Q1：连字符转驼峰===============================');

var str1 = 'border-bottom-color';


console.log('=============================字符串方法=============================');

function trans1(str) {

    var arr = str.split('-');

    console.log(arr);

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
        //首字母转大写，截取后面字符，组合成结果
    }

    return arr.join('');
}

console.log(trans1(str1));


console.log('=============================正则方法=============================');

function trans1ex(str) {
    var re = /-(\w)/g;

    return str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
    });
}

console.log(trans1ex(str1));


console.log('===============================Q2：查找出现最多的字符及个数===============================');
var str2 = 'sdjksfssscfssdd';

console.log('=============================字符串方法=============================');

function trans2(str) {
    var obj = {};

    for (var i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]] += 1;
        }
    }

    console.log(obj);

    var max = 0;
    var max_key = '';
    for (var e in obj) {
        if (obj[e] > max) {
            max = obj[e];
            max_key = e;
        }
    }

    console.log(max);
    console.log(max_key);
}


trans2(str2);
console.log('=============================正则方法=============================');

function trans2ex(str) {
    var arr = str.split('');
    arr.sort();
    str = arr.join('');

    console.log(str);

    var re = /(\w)\1+/g;

    var max = 0;
    var max_value = '';

    str.replace(re, function ($0, $1) {
        console.log($0);
        if ($0.length > max) {
            max = $0.length;
            max_value = $1;
        }
    });

    console.log(max);
    console.log(max_value);
}

trans2ex(str2);


console.log('===============================Q3：添加千分符===============================');
var str3 = '3562123761';


console.log('=============================字符串方法=============================');

function trans3(str) {

    var first = str.substring(0, str.length % 3);
    var res_arr = [];
    if (first) {
        res_arr.push(first);
    }

    for (var i = str.length % 3; i < str.length - 2; i += 3) {
        res_arr.push(str.substring(i, i + 3));
    }

    console.log(res_arr);

    return res_arr.join(',');
}

console.log(trans3(str3));


console.log('=============================正则方法=============================');

function trans3ex(str) {
    var re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re, ',');
}

//重点，前向声明和反前向声明

console.log(trans3ex(str3));