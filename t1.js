//打印一个字符串的所有排列组合

function getArrange(str,loadedStr=''){
    // let ret = [];
    if(str.length>1){
        for(let i=0;i<str.length;i++){
            let arr = str.split('');
            arr.splice(i,1);
            let subStr = arr.join('');

            // ret.push(str.charAt(i) + getArrange(subStr));
            // console.log(str.charAt(i) + getArrange(subStr));

            let loadStr = loadedStr + str.charAt(i);
            getArrange(subStr,loadStr);
        }
    } else {
        // ret.push(str);
        // return str;
        console.log(loadedStr+str);
    }

    // return ret;
}

// s1 = '12';
// s1 = '123';
s1 = '1234';
// s1 = '12345';

// console.log(getArrange(s1));
getArrange(s1);