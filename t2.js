//移除已排序数组中的重复值

// function removeDu(nums){
//     let number = [];

//     for (let i=0;i<nums.length;i++){
//         let v = nums[i];
//         while(nums[i+1] === v){
//             i++;
//         }
//         number.push(nums[i]);
//     }

//     return number;
// }

//不借助新的数组,不需要返回值
// function removeDu(nums){
//     let len = nums.length;
//     for (let i=0;i<len;i++){
//         while(nums[i+1] === nums[i]){
//             nums.splice(i+1,1);
//             len--;
//         }
//     }
// }


//完美答案
//思路，直接替换数组的值后，截取新的数组长度，直接生成目标数组
function removeDu(nums){
    let j = 0;

    for(let i=0,t='';i<nums.length;i++){
        if(nums[i] !== t){
            t = nums[i];
            nums[j] = t;
            j++;
        }
    }

    nums.length = j
}


// a1 = [1,1,2];
a1 = [1,1,2,3,4,4,4,5,6,7,7,8,8,9,10];

removeDu(a1);
console.log(a1);