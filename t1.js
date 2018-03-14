//打印一个字符串的所有排列组合

function getArrange(str,loadedStr=''){
    if(str.length>1){
        for(let i=0;i<str.length;i++){
            let arr = str.split('');
            arr.splice(i,1);
            let subStr = arr.join('');

            let loadStr = loadedStr + str.charAt(i);
            getArrange(subStr,loadStr);
        }
    } else {
        console.log(loadedStr+str);
    }
}

s1 = '1234';

getArrange(s1);