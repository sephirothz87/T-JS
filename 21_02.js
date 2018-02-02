//  第二十一章   Ajax与Comet

//  21.1    XMLHttpRequest 对象


console.log('===============================XHR用法===============================');
var xhr = new XMLHttpRequest();

xhr.open('get', 'ajax.php', false);//第三个参数代表是否异步发送
xhr.send(null);

console.log(xhr);
console.log(xhr.status); //200
console.log(xhr.statusText); //OK
console.log(xhr.response); //hello ajax
console.log(xhr.responseText); //hello ajax
console.log(xhr.responseURL); //http://localhost/t-js/ajax.php


console.log(xhr.readyState); //4
//      readyState
//  0：未初始化。尚未调用open()方法。
//  1：启动。已经调用open()方法，但尚未调用send()方法。
//  2：发送。已经调用send()方法，但尚未接收到响应。
//  3：接收。已经接收到部分响应数据。
//  4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。


console.log('===============================状态变化===============================');
var xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function() {
    console.log(xhr2.readyState);
}

xhr2.open('get', 'ajax.php', false); //1
xhr2.send(null); //4


// xhr2.abort() //时间比较长的请求，可以用这个方法中途停止异步请求


console.log('===============================HTTP头===============================');


//之前xhr中Header信息
// Accept:*/*
// Accept-Encoding:gzip, deflate, br
// Accept-Language:zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7,zh-TW;q=0.6
// Cache-Control:no-cache
// Connection:keep-alive
// Cookie:_ga=GA1.1.1218398078.1514350216; com.wibu.cm.webadmin.lang=zh-CN
// Host:localhost
// Pragma:no-cache
// Referer:http://localhost/t-js/
// User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36

// 解析前
// GET /t-js/ajax.php HTTP/1.1
// Host: localhost
// Connection: keep-alive
// Pragma: no-cache
// Cache-Control: no-cache
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36
// Accept: */*
// Referer: http://localhost/t-js/
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7,zh-TW;q=0.6
// Cookie: _ga=GA1.1.1218398078.1514350216; com.wibu.cm.webadmin.lang=zh-CN


var xhr3 = new XMLHttpRequest();

xhr3.open('get', 'ajax.php', false);
xhr3.setRequestHeader("MyHeader", "MyValue");
xhr3.send(null);
console.log(xhr3);

// MyHeader:MyValue     //多了这条




console.log('===============================GET/POST请求的参数传递===============================');
//  get请求生成对应的url
// function addURLParam(url, name, value) {
//     url += (url.indexOf("?") == -1 ? "?" : "&");
//     url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
//     return url;
// }
// var url = 'xxxx';
// url = addURLParam(url, 'name', 'value');
// url = addURLParam(url, 'name', 'value');

// xhr.open('get',url,false);



//  post请求生成对应的参数json
// var form = document.getElementById('user-info');
// xhr.send(serialize(form));
























